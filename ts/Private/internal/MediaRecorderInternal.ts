import { createCheckers } from 'ts-interface-checker';

import { ErrorCodeType } from '../CmviotBase';
import { IMediaRecorderObserver } from '../CmviotMediaBase';
import { IMediaRecorderEvent } from '../extension/ICmviotMediaRecorderExtension';
import { IMediaRecorderImpl } from '../impl/ICmviotMediaRecorderImpl';
import CmviotMediaBaseTI from '../ti/CmviotMediaBase-ti';
const checkers = createCheckers(CmviotMediaBaseTI);

import {
  DeviceEventEmitter,
  EVENT_TYPE,
  EventProcessor,
} from './IrisApiEngine';

export class MediaRecorderInternal extends IMediaRecorderImpl {
  static _observers: Map<string, IMediaRecorderObserver> = new Map<
    string,
    IMediaRecorderObserver
  >();
  private readonly _nativeHandle: string;

  constructor(nativeHandle: string) {
    super();
    this._nativeHandle = nativeHandle;
  }

  release() {
    MediaRecorderInternal._observers.delete(this._nativeHandle);
    this.removeAllListeners();
  }

  get nativeHandle(): string {
    return this._nativeHandle;
  }

  override setMediaRecorderObserver(callback: IMediaRecorderObserver): number {
    const key = this._nativeHandle;
    if (MediaRecorderInternal._observers.has(key)) {
      return ErrorCodeType.ErrOk;
    }
    MediaRecorderInternal._observers.set(key, callback);
    return super.setMediaRecorderObserver(callback);
  }

  _addListenerPreCheck<EventType extends keyof IMediaRecorderEvent>(
    eventType: EventType
  ): boolean {
    if (
      checkers.IMediaRecorderObserver?.strictTest({
        [eventType]: undefined,
      })
    ) {
      if (
        MediaRecorderInternal._observers.get(this._nativeHandle) === undefined
      ) {
        this.setMediaRecorderObserver({});
      }
    }
    return true;
  }

  addListener<EventType extends keyof IMediaRecorderEvent>(
    eventType: EventType,
    listener: IMediaRecorderEvent[EventType]
  ): void {
    this._addListenerPreCheck(eventType);
    const callback = (eventProcessor: EventProcessor<any>, data: any) => {
      if (eventProcessor.type(data) !== EVENT_TYPE.IMediaRecorder) {
        return;
      }
      if (data.nativeHandle !== this._nativeHandle) {
        return;
      }
      eventProcessor.func.map((it) => {
        it({ [eventType]: listener }, eventType, data);
      });
    };
    // @ts-ignore
    listener!.cmviotCallback = callback;
    DeviceEventEmitter.addListener(eventType, callback);
  }

  removeListener<EventType extends keyof IMediaRecorderEvent>(
    eventType: EventType,
    listener?: IMediaRecorderEvent[EventType]
  ) {
    DeviceEventEmitter.removeListener(
      eventType,
      // @ts-ignore
      listener?.cmviotCallback ?? listener
    );
  }

  removeAllListeners<EventType extends keyof IMediaRecorderEvent>(
    eventType?: EventType
  ) {
    DeviceEventEmitter.removeAllListeners(eventType);
  }
}
