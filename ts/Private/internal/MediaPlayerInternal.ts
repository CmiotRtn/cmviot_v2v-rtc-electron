import { createCheckers } from 'ts-interface-checker';

import { CmviotEnv, logWarn } from '../../Utils';

import { ErrorCodeType } from '../CmviotBase';
import {
  IAudioPcmFrameSink,
  IAudioSpectrumObserver,
  RawAudioFrameOpModeType,
  RenderModeType,
  VideoSourceType,
} from '../CmviotMediaBase';
import { IMediaPlayerVideoFrameObserver } from '../ICmviotMediaPlayer';
import { IMediaPlayerSourceObserver } from '../ICmviotMediaPlayerSource';
import { IMediaPlayerEvent } from '../extension/ICmviotMediaPlayerExtension';
import { IMediaPlayerImpl } from '../impl/ICmviotMediaPlayerImpl';
import CmviotMediaBaseTI from '../ti/CmviotMediaBase-ti';
import ICmviotMediaPlayerTI from '../ti/ICmviotMediaPlayer-ti';
import ICmviotMediaPlayerSourceTI from '../ti/ICmviotMediaPlayerSource-ti';
const checkers = createCheckers(
  CmviotMediaBaseTI,
  ICmviotMediaPlayerTI,
  ICmviotMediaPlayerSourceTI
);

import {
  DeviceEventEmitter,
  EVENT_TYPE,
  EventProcessor,
} from './IrisApiEngine';

export class MediaPlayerInternal extends IMediaPlayerImpl {
  static _source_observers: Map<number, IMediaPlayerSourceObserver[]> = new Map<
    number,
    IMediaPlayerSourceObserver[]
  >();
  static _audio_frame_observers: Map<number, IAudioPcmFrameSink[]> = new Map<
    number,
    IAudioPcmFrameSink[]
  >();
  static _video_frame_observers: Map<number, IMediaPlayerVideoFrameObserver[]> =
    new Map<number, IMediaPlayerVideoFrameObserver[]>();
  static _audio_spectrum_observers: Map<number, IAudioSpectrumObserver[]> =
    new Map<number, IAudioSpectrumObserver[]>();
  private readonly _mediaPlayerId: number;

  constructor(mediaPlayerId: number) {
    super();
    this._mediaPlayerId = mediaPlayerId;
  }

  release() {
    MediaPlayerInternal._source_observers.delete(this._mediaPlayerId);
    MediaPlayerInternal._audio_frame_observers.delete(this._mediaPlayerId);
    MediaPlayerInternal._video_frame_observers.delete(this._mediaPlayerId);
    MediaPlayerInternal._audio_spectrum_observers.delete(this._mediaPlayerId);
    this.removeAllListeners();
  }

  _addListenerPreCheck<EventType extends keyof IMediaPlayerEvent>(
    eventType: EventType
  ): boolean {
    if (
      checkers.IMediaPlayerSourceObserver?.strictTest({
        [eventType]: undefined,
      })
    ) {
      if (
        MediaPlayerInternal._source_observers.get(this._mediaPlayerId)
          ?.length === 0
      ) {
        this.registerPlayerSourceObserver({});
      }
    }
    if (
      checkers.IMediaPlayerAudioFrameObserver?.strictTest({
        [eventType]: undefined,
      })
    ) {
      if (
        MediaPlayerInternal._audio_frame_observers.get(this._mediaPlayerId)
          ?.length === 0
      ) {
        this.registerAudioFrameObserver({});
      }
    }
    if (
      checkers.IMediaPlayerVideoFrameObserver?.strictTest({
        [eventType]: undefined,
      })
    ) {
      if (
        MediaPlayerInternal._video_frame_observers.get(this._mediaPlayerId)
          ?.length === 0
      ) {
        this.registerVideoFrameObserver({});
      }
    }
    if (
      checkers.IAudioSpectrumObserver?.strictTest({
        [eventType]: undefined,
      })
    ) {
      if (
        MediaPlayerInternal._audio_spectrum_observers.get(this._mediaPlayerId)
          ?.length === 0
      ) {
        console.error(
          'Please call `registerMediaPlayerAudioSpectrumObserver` before you want to receive event by `addListener`'
        );
        return false;
      }
    }
    return true;
  }

  addListener<EventType extends keyof IMediaPlayerEvent>(
    eventType: EventType,
    listener: IMediaPlayerEvent[EventType]
  ): void {
    this._addListenerPreCheck(eventType);
    const callback = (eventProcessor: EventProcessor<any>, data: any) => {
      if (eventProcessor.type(data) !== EVENT_TYPE.IMediaPlayer) {
        return;
      }
      if (data.playerId !== this._mediaPlayerId) {
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

  removeListener<EventType extends keyof IMediaPlayerEvent>(
    eventType: EventType,
    listener?: IMediaPlayerEvent[EventType]
  ) {
    DeviceEventEmitter.removeListener(
      eventType,
      // @ts-ignore
      listener?.cmviotCallback ?? listener
    );
  }

  removeAllListeners<EventType extends keyof IMediaPlayerEvent>(
    eventType?: EventType
  ) {
    DeviceEventEmitter.removeAllListeners(eventType);
  }

  override getMediaPlayerId(): number {
    return this._mediaPlayerId;
  }

  override registerPlayerSourceObserver(
    observer: IMediaPlayerSourceObserver
  ): number {
    let observers = MediaPlayerInternal._source_observers.get(
      this._mediaPlayerId
    );
    if (observers === undefined) {
      observers = [];
      MediaPlayerInternal._source_observers.set(this._mediaPlayerId, observers);
    }
    if (!observers.find((value) => value === observer)) {
      observers.push(observer);
    }
    return super.registerPlayerSourceObserver(observer);
  }

  override unregisterPlayerSourceObserver(
    observer: IMediaPlayerSourceObserver
  ): number {
    let observers = MediaPlayerInternal._source_observers.get(
      this._mediaPlayerId
    );
    if (observers === undefined) return -ErrorCodeType.ErrFailed;
    MediaPlayerInternal._source_observers.set(
      this._mediaPlayerId,
      observers.filter((value) => value !== observer)
    );
    return super.unregisterPlayerSourceObserver(observer);
  }

  override registerAudioFrameObserver(
    observer: IAudioPcmFrameSink,
    mode: RawAudioFrameOpModeType = RawAudioFrameOpModeType.RawAudioFrameOpModeReadOnly
  ): number {
    let observers = MediaPlayerInternal._audio_frame_observers.get(
      this._mediaPlayerId
    );
    if (observers === undefined) {
      observers = [];
      MediaPlayerInternal._audio_frame_observers.set(
        this._mediaPlayerId,
        observers
      );
    }
    if (!observers.find((value) => value === observer)) {
      observers.push(observer);
    }
    return super.registerAudioFrameObserver(observer, mode);
  }

  override unregisterAudioFrameObserver(observer: IAudioPcmFrameSink): number {
    let observers = MediaPlayerInternal._audio_frame_observers.get(
      this._mediaPlayerId
    );
    if (observers === undefined) return -ErrorCodeType.ErrFailed;
    MediaPlayerInternal._audio_frame_observers.set(
      this._mediaPlayerId,
      observers.filter((value) => value !== observer)
    );
    return super.unregisterAudioFrameObserver(observer);
  }

  override registerVideoFrameObserver(
    observer: IMediaPlayerVideoFrameObserver
  ): number {
    let observers = MediaPlayerInternal._video_frame_observers.get(
      this._mediaPlayerId
    );
    if (observers === undefined) {
      observers = [];
      MediaPlayerInternal._video_frame_observers.set(
        this._mediaPlayerId,
        observers
      );
    }
    if (!observers.find((value) => value === observer)) {
      observers.push(observer);
    }
    return super.registerVideoFrameObserver(observer);
  }

  override unregisterVideoFrameObserver(
    observer: IMediaPlayerVideoFrameObserver
  ): number {
    let observers = MediaPlayerInternal._video_frame_observers.get(
      this._mediaPlayerId
    );
    if (observers === undefined) return -ErrorCodeType.ErrFailed;
    MediaPlayerInternal._video_frame_observers.set(
      this._mediaPlayerId,
      observers.filter((value) => value !== observer)
    );
    return super.unregisterVideoFrameObserver(observer);
  }

  override registerMediaPlayerAudioSpectrumObserver(
    observer: IAudioSpectrumObserver,
    intervalInMS: number
  ): number {
    let observers = MediaPlayerInternal._audio_spectrum_observers.get(
      this._mediaPlayerId
    );
    if (observers === undefined) {
      observers = [];
      MediaPlayerInternal._audio_spectrum_observers.set(
        this._mediaPlayerId,
        observers
      );
    }
    if (!observers.find((value) => value === observer)) {
      observers.push(observer);
    }
    return super.registerMediaPlayerAudioSpectrumObserver(
      observer,
      intervalInMS
    );
  }

  override unregisterMediaPlayerAudioSpectrumObserver(
    observer: IAudioSpectrumObserver
  ): number {
    let observers = MediaPlayerInternal._audio_spectrum_observers.get(
      this._mediaPlayerId
    );
    if (observers === undefined) return -ErrorCodeType.ErrFailed;
    MediaPlayerInternal._audio_spectrum_observers.set(
      this._mediaPlayerId,
      observers.filter((value) => value !== observer)
    );
    return super.unregisterMediaPlayerAudioSpectrumObserver(observer);
  }

  protected override getApiTypeFromSetPlayerOptionInInt(
    key: string,
    value: number
  ): string {
    return 'MediaPlayer_setPlayerOption';
  }

  protected override getApiTypeFromSetPlayerOptionInString(
    key: string,
    value: string
  ): string {
    return 'MediaPlayer_setPlayerOption2';
  }

  override setView(view: HTMLElement): number {
    logWarn('Also can use other api setupLocalVideo');
    return (
      CmviotEnv.CmviotRendererManager?.setupVideo({
        videoSourceType: VideoSourceType.VideoSourceMediaPlayer,
        uid: this._mediaPlayerId,
        view,
      }) ?? -ErrorCodeType.ErrNotInitialized
    );
  }

  override setRenderMode(renderMode: RenderModeType): number {
    logWarn(
      'Also can use other api setRenderOption or setRenderOptionByConfig'
    );
    return (
      CmviotEnv.CmviotRendererManager?.setRenderOptionByConfig({
        videoSourceType: VideoSourceType.VideoSourceMediaPlayer,
        uid: this._mediaPlayerId,
        rendererOptions: {
          contentMode:
            renderMode === RenderModeType.RenderModeFit
              ? RenderModeType.RenderModeFit
              : RenderModeType.RenderModeHidden,
          mirror: true,
        },
      }) ?? -ErrorCodeType.ErrNotInitialized
    );
  }
}
