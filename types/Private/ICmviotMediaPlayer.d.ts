import './extension/ICmviotMediaPlayerExtension';
import { SpatialAudioParams } from './CmviotBase';
import { AudioDualMonoMode, IAudioPcmFrameSink, IAudioSpectrumObserver, RawAudioFrameOpModeType, RenderModeType, VideoFrame } from './CmviotMediaBase';
import { MediaPlayerState, MediaSource, PlayerStreamInfo } from './CmviotMediaPlayerTypes';
import { IMediaPlayerSourceObserver } from './ICmviotMediaPlayerSource';
export declare abstract class IMediaPlayer {
    abstract getMediaPlayerId(): number;
    abstract open(url: string, startPos: number): number;
    abstract openWithMediaSource(source: MediaSource): number;
    abstract play(): number;
    abstract pause(): number;
    abstract stop(): number;
    abstract resume(): number;
    abstract seek(newPos: number): number;
    abstract setAudioPitch(pitch: number): number;
    abstract getDuration(): number;
    abstract getPlayPosition(): number;
    abstract getStreamCount(): number;
    abstract getStreamInfo(index: number): PlayerStreamInfo;
    abstract setLoopCount(loopCount: number): number;
    abstract setPlaybackSpeed(speed: number): number;
    abstract selectAudioTrack(index: number): number;
    abstract setPlayerOptionInInt(key: string, value: number): number;
    abstract setPlayerOptionInString(key: string, value: string): number;
    abstract takeScreenshot(filename: string): number;
    abstract selectInternalSubtitle(index: number): number;
    abstract setExternalSubtitle(url: string): number;
    abstract getState(): MediaPlayerState;
    abstract mute(muted: boolean): number;
    abstract getMute(): boolean;
    abstract adjustPlayoutVolume(volume: number): number;
    abstract getPlayoutVolume(): number;
    abstract adjustPublishSignalVolume(volume: number): number;
    abstract getPublishSignalVolume(): number;
    abstract setView(view: any): number;
    abstract setRenderMode(renderMode: RenderModeType): number;
    abstract registerPlayerSourceObserver(observer: IMediaPlayerSourceObserver): number;
    abstract unregisterPlayerSourceObserver(observer: IMediaPlayerSourceObserver): number;
    abstract registerAudioFrameObserver(observer: IAudioPcmFrameSink, mode?: RawAudioFrameOpModeType): number;
    abstract unregisterAudioFrameObserver(observer: IAudioPcmFrameSink): number;
    abstract registerVideoFrameObserver(observer: IMediaPlayerVideoFrameObserver): number;
    abstract unregisterVideoFrameObserver(observer: IMediaPlayerVideoFrameObserver): number;
    abstract registerMediaPlayerAudioSpectrumObserver(observer: IAudioSpectrumObserver, intervalInMS: number): number;
    abstract unregisterMediaPlayerAudioSpectrumObserver(observer: IAudioSpectrumObserver): number;
    abstract setAudioDualMonoMode(mode: AudioDualMonoMode): number;
    abstract getPlayerSdkVersion(): string;
    abstract getPlaySrc(): string;
    abstract openWithCmviotCDNSrc(src: string, startPos: number): number;
    abstract getCmviotCDNLineCount(): number;
    abstract switchCmviotCDNLineByIndex(index: number): number;
    abstract getCurrentCmviotCDNIndex(): number;
    abstract enableAutoSwitchCmviotCDN(enable: boolean): number;
    abstract renewCmviotCDNSrcToken(token: string, ts: number): number;
    abstract switchCmviotCDNSrc(src: string, syncPts?: boolean): number;
    abstract switchSrc(src: string, syncPts?: boolean): number;
    abstract preloadSrc(src: string, startPos: number): number;
    abstract playPreloadedSrc(src: string): number;
    abstract unloadSrc(src: string): number;
    abstract setSpatialAudioParams(params: SpatialAudioParams): number;
    abstract setSoundPositionParams(pan: number, gain: number): number;
}
export declare abstract class IMediaPlayerCacheManager {
    abstract removeAllCaches(): number;
    abstract removeOldCache(): number;
    abstract removeCacheByUri(uri: string): number;
    abstract setCacheDir(path: string): number;
    abstract setMaxCacheFileCount(count: number): number;
    abstract setMaxCacheFileSize(cacheSize: number): number;
    abstract enableAutoRemoveCache(enable: boolean): number;
    abstract getCacheDir(length: number): string;
    abstract getMaxCacheFileCount(): number;
    abstract getMaxCacheFileSize(): number;
    abstract getCacheFileCount(): number;
}
export interface IMediaPlayerVideoFrameObserver {
    onFrame?(frame: VideoFrame): void;
}
//# sourceMappingURL=ICmviotMediaPlayer.d.ts.map