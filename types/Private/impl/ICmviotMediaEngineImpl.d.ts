import { AudioTrackConfig, AudioTrackType, EncodedVideoFrameInfo, SenderOptions } from '../CmviotBase';
import { AudioFrame, ExternalVideoFrame, ExternalVideoSourceType, IAudioFrameObserver, IVideoEncodedFrameObserver, IVideoFrameObserver } from '../CmviotMediaBase';
import { IMediaEngine } from '../ICmviotMediaEngine';
export declare class IMediaEngineImpl implements IMediaEngine {
    registerAudioFrameObserver(observer: IAudioFrameObserver): number;
    protected getApiTypeFromRegisterAudioFrameObserver(observer: IAudioFrameObserver): string;
    registerVideoFrameObserver(observer: IVideoFrameObserver): number;
    protected getApiTypeFromRegisterVideoFrameObserver(observer: IVideoFrameObserver): string;
    registerVideoEncodedFrameObserver(observer: IVideoEncodedFrameObserver): number;
    protected getApiTypeFromRegisterVideoEncodedFrameObserver(observer: IVideoEncodedFrameObserver): string;
    pushAudioFrame(frame: AudioFrame, trackId?: number): number;
    protected getApiTypeFromPushAudioFrame(frame: AudioFrame, trackId?: number): string;
    pullAudioFrame(frame: AudioFrame): number;
    protected getApiTypeFromPullAudioFrame(frame: AudioFrame): string;
    setExternalVideoSource(enabled: boolean, useTexture: boolean, sourceType?: ExternalVideoSourceType, encodedVideoOption?: SenderOptions): number;
    protected getApiTypeFromSetExternalVideoSource(enabled: boolean, useTexture: boolean, sourceType?: ExternalVideoSourceType, encodedVideoOption?: SenderOptions): string;
    setExternalAudioSource(enabled: boolean, sampleRate: number, channels: number, localPlayback?: boolean, publish?: boolean): number;
    protected getApiTypeFromSetExternalAudioSource(enabled: boolean, sampleRate: number, channels: number, localPlayback?: boolean, publish?: boolean): string;
    createCustomAudioTrack(trackType: AudioTrackType, config: AudioTrackConfig): number;
    protected getApiTypeFromCreateCustomAudioTrack(trackType: AudioTrackType, config: AudioTrackConfig): string;
    destroyCustomAudioTrack(trackId: number): number;
    protected getApiTypeFromDestroyCustomAudioTrack(trackId: number): string;
    setExternalAudioSink(enabled: boolean, sampleRate: number, channels: number): number;
    protected getApiTypeFromSetExternalAudioSink(enabled: boolean, sampleRate: number, channels: number): string;
    enableCustomAudioLocalPlayback(trackId: number, enabled: boolean): number;
    protected getApiTypeFromEnableCustomAudioLocalPlayback(trackId: number, enabled: boolean): string;
    pushVideoFrame(frame: ExternalVideoFrame, videoTrackId?: number): number;
    protected getApiTypeFromPushVideoFrame(frame: ExternalVideoFrame, videoTrackId?: number): string;
    pushEncodedVideoImage(imageBuffer: Uint8Array, length: number, videoEncodedFrameInfo: EncodedVideoFrameInfo, videoTrackId?: number): number;
    protected getApiTypeFromPushEncodedVideoImage(imageBuffer: Uint8Array, length: number, videoEncodedFrameInfo: EncodedVideoFrameInfo, videoTrackId?: number): string;
    release(): void;
    protected getApiTypeFromRelease(): string;
    unregisterAudioFrameObserver(observer: IAudioFrameObserver): number;
    protected getApiTypeFromUnregisterAudioFrameObserver(observer: IAudioFrameObserver): string;
    unregisterVideoFrameObserver(observer: IVideoFrameObserver): number;
    protected getApiTypeFromUnregisterVideoFrameObserver(observer: IVideoFrameObserver): string;
    unregisterVideoEncodedFrameObserver(observer: IVideoEncodedFrameObserver): number;
    protected getApiTypeFromUnregisterVideoEncodedFrameObserver(observer: IVideoEncodedFrameObserver): string;
}
//# sourceMappingURL=ICmviotMediaEngineImpl.d.ts.map