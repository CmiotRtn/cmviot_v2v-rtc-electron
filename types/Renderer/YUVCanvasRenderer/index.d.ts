import { ShareVideoFrame } from '../../Types';
import { IRenderer } from '../IRenderer';
export declare class YUVCanvasRenderer extends IRenderer {
    private _cacheCanvasOptions?;
    private _yuvCanvasSink?;
    private _container?;
    private _videoFrame;
    constructor();
    bind(element: HTMLElement): void;
    unbind(): void;
    private zoom;
    private updateCanvas;
    drawFrame(frame: ShareVideoFrame): void;
    refreshCanvas(): void;
}
//# sourceMappingURL=index.d.ts.map