import { IMediaRecorderObserver } from '../CmviotMediaBase';
import { IMediaRecorderEvent } from '../extension/ICmviotMediaRecorderExtension';
import { IMediaRecorderImpl } from '../impl/ICmviotMediaRecorderImpl';
export declare class MediaRecorderInternal extends IMediaRecorderImpl {
    static _observers: Map<string, IMediaRecorderObserver>;
    private readonly _nativeHandle;
    constructor(nativeHandle: string);
    release(): void;
    get nativeHandle(): string;
    setMediaRecorderObserver(callback: IMediaRecorderObserver): number;
    _addListenerPreCheck<EventType extends keyof IMediaRecorderEvent>(eventType: EventType): boolean;
    addListener<EventType extends keyof IMediaRecorderEvent>(eventType: EventType, listener: IMediaRecorderEvent[EventType]): void;
    removeListener<EventType extends keyof IMediaRecorderEvent>(eventType: EventType, listener?: IMediaRecorderEvent[EventType]): void;
    removeAllListeners<EventType extends keyof IMediaRecorderEvent>(eventType?: EventType): void;
}
//# sourceMappingURL=MediaRecorderInternal.d.ts.map