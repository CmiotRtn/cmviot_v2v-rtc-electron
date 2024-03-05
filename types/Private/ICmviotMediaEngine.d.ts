import './extension/ICmviotMediaEngineExtension';
import { AudioTrackConfig, AudioTrackType, EncodedVideoFrameInfo, SenderOptions } from './CmviotBase';
import { AudioFrame, ExternalVideoFrame, ExternalVideoSourceType, IAudioFrameObserver, IVideoEncodedFrameObserver, IVideoFrameObserver } from './CmviotMediaBase';
export declare enum AudioMixingDualMonoMode {
    AudioMixingDualMonoAuto = 0,
    AudioMixingDualMonoL = 1,
    AudioMixingDualMonoR = 2,
    AudioMixingDualMonoMix = 3
}
export declare abstract class IMediaEngine {
    abstract registerAudioFrameObserver(observer: IAudioFrameObserver): number;
    abstract registerVideoFrameObserver(observer: IVideoFrameObserver): number;
    abstract registerVideoEncodedFrameObserver(observer: IVideoEncodedFrameObserver): number;
    abstract pushAudioFrame(frame: AudioFrame, trackId?: number): number;
    abstract pullAudioFrame(frame: AudioFrame): number;
    abstract setExternalVideoSource(enabled: boolean, useTexture: boolean, sourceType?: ExternalVideoSourceType, encodedVideoOption?: SenderOptions): number;
    abstract setExternalAudioSource(enabled: boolean, sampleRate: number, channels: number, localPlayback?: boolean, publish?: boolean): number;
    abstract createCustomAudioTrack(trackType: AudioTrackType, config: AudioTrackConfig): number;
    abstract destroyCustomAudioTrack(trackId: number): number;
    abstract setExternalAudioSink(enabled: boolean, sampleRate: number, channels: number): number;
    abstract enableCustomAudioLocalPlayback(trackId: number, enabled: boolean): number;
    abstract pushVideoFrame(frame: ExternalVideoFrame, videoTrackId?: number): number;
    abstract pushEncodedVideoImage(imageBuffer: Uint8Array, length: number, videoEncodedFrameInfo: EncodedVideoFrameInfo, videoTrackId?: number): number;
    abstract release(): void;
    abstract unregisterAudioFrameObserver(observer: IAudioFrameObserver): number;
    abstract unregisterVideoFrameObserver(observer: IVideoFrameObserver): number;
    abstract unregisterVideoEncodedFrameObserver(observer: IVideoEncodedFrameObserver): number;
}
//# sourceMappingURL=ICmviotMediaEngine.d.ts.map