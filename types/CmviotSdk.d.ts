import { IMediaPlayerCacheManager } from './Private/ICmviotMediaPlayer';
import { IRtcEngineEx } from './Private/ICmviotRtcEngineEx';
import { CmviotEnvOptions } from './Types';
export * from './Private/CmviotBase';
export * from './Private/CmviotMediaBase';
export * from './Private/CmviotMediaPlayerTypes';
export * from './Private/ICmviotLog';
export * from './Private/ICmviotMediaEngine';
export * from './Private/ICmviotMediaPlayer';
export * from './Private/ICmviotMediaPlayerSource';
export * from './Private/ICmviotMediaRecorder';
export * from './Private/ICmviotMusicContentCenter';
export * from './Private/ICmviotRhythmPlayer';
export * from './Private/ICmviotRtcEngine';
export * from './Private/ICmviotRtcEngineEx';
export * from './Private/ICmviotSpatialAudio';
export * from './Private/IAudioDeviceManager';
export * from './Renderer';
export * from './Types';
export * from './Utils';
/**
 * Creates one IRtcEngineEx object.
 *
 * Currently, the Cmviot RTC SDK v4.x supports creating only one IRtcEngineEx object for each app.
 *
 * @returns
 * One IRtcEngineEx object.
 */
export declare function createCmviotRtcEngine(options?: CmviotEnvOptions): IRtcEngineEx;
/**
 * Gets one IMediaPlayerCacheManager instance.
 *
 * When you successfully call this method, the SDK returns a media player cache manager instance. The cache manager is a singleton pattern. Therefore, multiple calls to this method returns the same instance. Make sure the IRtcEngine is initialized before you call this method.
 *
 * @returns
 * The IMediaPlayerCacheManager instance.
 */
export declare function getMediaPlayerCacheManager(): IMediaPlayerCacheManager;
export default createCmviotRtcEngine;
//# sourceMappingURL=CmviotSdk.d.ts.map