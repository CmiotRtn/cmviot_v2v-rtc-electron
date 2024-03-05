/// <reference types="node" />
import { EventEmitter } from 'events';
import { RenderModeType } from '../Private/CmviotMediaBase';
import { RendererOptions, ShareVideoFrame } from '../Types';
export type RenderFailCallback = ((obj: {
    error: string;
}) => void) | undefined | null;
export declare abstract class IRenderer {
    parentElement?: HTMLElement;
    canvas?: HTMLCanvasElement;
    event?: EventEmitter;
    contentMode: RenderModeType;
    mirror?: boolean;
    snapshot(fileType?: string): string | null;
    bind(element: HTMLElement): void;
    abstract unbind(): void;
    equalsElement(element: Element): boolean;
    abstract drawFrame(imageData: ShareVideoFrame): void;
    setRenderOption({ contentMode, mirror }: RendererOptions): void;
    abstract refreshCanvas(): void;
}
//# sourceMappingURL=IRenderer.d.ts.map