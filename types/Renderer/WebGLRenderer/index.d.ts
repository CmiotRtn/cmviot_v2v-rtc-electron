/// <reference types="node" />
import { EventEmitter } from 'events';
import { ShareVideoFrame } from '../../Types';
import { IRenderer, RenderFailCallback } from '../IRenderer';
export declare class GlRenderer extends IRenderer {
    gl: WebGL2RenderingContext | undefined | null;
    program: any;
    positionLocation: any;
    texCoordLocation: any;
    yTexture: WebGLTexture | undefined | null;
    uTexture: WebGLTexture | undefined | null;
    vTexture: WebGLTexture | undefined | null;
    texCoordBuffer: any;
    surfaceBuffer: any;
    parentElement: HTMLElement | undefined;
    container: HTMLElement | undefined;
    canvas: HTMLCanvasElement | undefined;
    renderImageCount: number;
    initWidth: number;
    initHeight: number;
    initRotation: number;
    clientWidth: number;
    clientHeight: number;
    contentMode: number;
    event: EventEmitter<[never]>;
    firstFrameRender: boolean;
    lastImageWidth: number;
    lastImageHeight: number;
    lastImageRotation: number;
    videoBuffer: {};
    observer?: ResizeObserver;
    failInitRenderCB: RenderFailCallback;
    constructor(failCallback: RenderFailCallback);
    bind(view: HTMLElement): void;
    unbind(): void;
    private updateViewZoomLevel;
    private updateCanvas;
    drawFrame(videoFrame: ShareVideoFrame): void;
    refreshCanvas(): void;
    private renderImage;
    private uploadYuv;
    private deleteBuffer;
    private deleteTexture;
    private handleContextLost;
    private initCanvas;
    private initTextures;
}
export default GlRenderer;
//# sourceMappingURL=index.d.ts.map