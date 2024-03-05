import EventEmitter from 'eventemitter3';
import { IAudioEncodedFrameObserver } from '../CmviotBase';
import { IAudioFrameObserver, IAudioPcmFrameSink, IAudioSpectrumObserver, IMediaRecorderObserver, IVideoEncodedFrameObserver, IVideoFrameObserver } from '../CmviotMediaBase';
import { IMediaPlayerVideoFrameObserver } from '../ICmviotMediaPlayer';
import { IMediaPlayerSourceObserver } from '../ICmviotMediaPlayerSource';
import { IMusicContentCenterEventHandler } from '../ICmviotMusicContentCenter';
import { IDirectCdnStreamingEventHandler, IMetadataObserver, IRtcEngineEventHandler } from '../ICmviotRtcEngine';
export declare const DeviceEventEmitter: EventEmitter;
/**
 * @internal
 */
export declare function setDebuggable(flag: boolean): void;
/**
 * @internal
 */
export declare function isDebuggable(): boolean | undefined;
/**
 * @internal
 */
export type EventProcessor<T extends ProcessorType> = {
    suffix: string;
    type: (data: any) => EVENT_TYPE;
    func: Function[];
    preprocess?: (event: string, data: any, buffers: Uint8Array[]) => void;
    handlers: (data: any) => (T | undefined)[] | undefined;
};
export declare enum EVENT_TYPE {
    IMediaEngine = 0,
    IMediaPlayer = 1,
    IMediaRecorder = 2,
    IRtcEngine = 3,
    IMusicContentCenter = 4
}
type ProcessorType = IAudioFrameObserver | IVideoFrameObserver | IAudioSpectrumObserver | IAudioEncodedFrameObserver | IVideoEncodedFrameObserver | IMediaPlayerSourceObserver | IAudioPcmFrameSink | IMediaPlayerVideoFrameObserver | IMediaRecorderObserver | IMetadataObserver | IDirectCdnStreamingEventHandler | IRtcEngineEventHandler | IMusicContentCenterEventHandler;
type EventProcessors = {
    IAudioFrameObserver: EventProcessor<IAudioFrameObserver>;
    IVideoFrameObserver: EventProcessor<IVideoFrameObserver>;
    IAudioSpectrumObserver: EventProcessor<IAudioSpectrumObserver>;
    IAudioEncodedFrameObserver: EventProcessor<IAudioEncodedFrameObserver>;
    IVideoEncodedFrameObserver: EventProcessor<IVideoEncodedFrameObserver>;
    IMediaPlayerSourceObserver: EventProcessor<IMediaPlayerSourceObserver>;
    IAudioPcmFrameSink: EventProcessor<IAudioPcmFrameSink>;
    IMediaPlayerVideoFrameObserver: EventProcessor<IMediaPlayerVideoFrameObserver>;
    IMediaRecorderObserver: EventProcessor<IMediaRecorderObserver>;
    IMetadataObserver: EventProcessor<IMetadataObserver>;
    IDirectCdnStreamingEventHandler: EventProcessor<IDirectCdnStreamingEventHandler>;
    IRtcEngineEventHandler: EventProcessor<IRtcEngineEventHandler>;
    IMusicContentCenterEventHandler: EventProcessor<IMusicContentCenterEventHandler>;
};
/**
 * @internal
 */
export declare const EVENT_PROCESSORS: EventProcessors;
/**
 * @internal
 */
export declare function callIrisApi(funcName: string, params: any): any;
/**
 * @internal
 */
export declare function emitEvent<EventType extends keyof T, T extends ProcessorType>(eventType: EventType, eventProcessor: EventProcessor<T>, data: any): void;
export {};
//# sourceMappingURL=IrisApiEngine.d.ts.map