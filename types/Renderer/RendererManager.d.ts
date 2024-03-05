/// <reference types="node" />
import { RenderModeType, VideoSourceType } from '../Private/CmviotMediaBase';
import { Channel, CmviotElectronBridge, RENDER_MODE, RenderMap, RendererVideoConfig, ShareVideoFrame, VideoFrameCacheConfig } from '../Types';
import { IRendererManager } from './IRendererManager';
/**
 * @ignore
 */
export declare class RendererManager extends IRendererManager {
    /**
     * @ignore
     */
    isRendering: boolean;
    renderFps: number;
    /**
     * @ignore
     */
    videoFrameUpdateInterval?: NodeJS.Timer;
    /**
     * @ignore
     */
    renderers: RenderMap;
    /**
     * @ignore
     */
    renderMode: RENDER_MODE;
    /**
     * @ignore
     */
    msgBridge: CmviotElectronBridge;
    /**
     * @ignore
     */
    defaultRenderConfig: RendererVideoConfig;
    constructor();
    /**
     * Sets the channel mode of the current audio file.
     * In a stereo music file, the left and right channels can store different audio data. According to your needs, you can set the channel mode to original mode, left channel mode, right channel mode, or mixed channel mode. For example, in the KTV scenario, the left channel of the music file stores the musical accompaniment, and the right channel stores the singing voice. If you only need to listen to the accompaniment, call this method to set the channel mode of the music file to left channel mode; if you need to listen to the accompaniment and the singing voice at the same time, call this method to set the channel mode to mixed channel mode.Call this method after calling open .This method only applies to stereo audio files.
     *
     * @param mode The channel mode. See AudioDualMonoMode .
     *
     * @returns
     * 0: Success.< 0: Failure.
     */
    setRenderMode(mode: RENDER_MODE): void;
    /**
     * @ignore
     */
    setFPS(fps: number): void;
    /**
     * @ignore
     */
    setRenderOption(view: HTMLElement, contentMode?: RenderModeType, mirror?: boolean): void;
    /**
     * @ignore
     */
    setRenderOptionByConfig(rendererConfig: RendererVideoConfig): number;
    /**
     * @ignore
     */
    checkWebglEnv(): boolean;
    /**
     * @ignore
     */
    setupVideo(rendererVideoConfig: RendererVideoConfig): number;
    /**
     * @ignore
     */
    setupLocalVideo(rendererConfig: RendererVideoConfig): number;
    /**
     * @ignore
     */
    setupRemoteVideo(rendererConfig: RendererVideoConfig): number;
    /**
     * Destroys a video renderer object.
     *
     * @param view The HTMLElement object to be destroyed.
     */
    destroyRendererByView(view: Element): void;
    /**
     * @ignore
     */
    destroyRenderersByConfig(videoSourceType: VideoSourceType, channelId?: Channel, uid?: number): void;
    /**
     * @ignore
     */
    removeAllRenderer(): void;
    /**
     * @ignore
     */
    clear(): void;
    /**
     * Enables/Disables the local video capture.
     * This method disables or re-enables the local video capture, and does not affect receiving the remote video stream.After calling enableVideo , the local video capture is enabled by default. You can call enableLocalVideo (false) to disable the local video capture. If you want to re-enable the local video capture, call enableLocalVideo(true).After the local video capturer is successfully disabled or re-enabled, the SDK triggers the onRemoteVideoStateChanged callback on the remote client.You can call this method either before or after joining a channel.This method enables the internal engine and is valid after leaving the channel.
     *
     * @param enabled Whether to enable the local video capture.true: (Default) Enable the local video capture.false: Disable the local video capture. Once the local video is disabled, the remote users cannot receive the video stream of the local user, while the local user can still receive the video streams of remote users. When set to false, this method does not require a local camera.
     *
     * @returns
     * 0: Success.< 0: Failure.
     */
    enableRender(enabled?: boolean): void;
    /**
     * @ignore
     */
    startRenderer(): void;
    /**
     * @ignore
     */
    stopRender(): void;
    /**
     * @ignore
     */
    restartRender(): void;
    /**
     * @ignore
     */
    private createRenderer;
    /**
     * @ignore
     */
    private getRender;
    /**
     * @ignore
     */
    private getRenderers;
    /**
     * @ignore
     */
    private bindHTMLElementToRender;
    /**
     * @ignore
     */
    private forEachStream;
    /**
     * @ignore
     */
    private enableVideoFrameCache;
    /**
     * @ignore
     */
    private disableVideoFrameCache;
    /**
     * @ignore
     */
    private ensureRendererConfig;
    /**
     * @ignore
     */
    private resizeShareVideoFrame;
    /**
     * @ignore
     */
    updateVideoFrameCacheInMap(config: VideoFrameCacheConfig, shareVideoFrame: ShareVideoFrame): void;
}
//# sourceMappingURL=RendererManager.d.ts.map