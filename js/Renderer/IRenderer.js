"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IRenderer = void 0;
var CmviotMediaBase_1 = require("../Private/CmviotMediaBase");
var IRenderer = /** @class */ (function () {
    function IRenderer() {
        this.contentMode = CmviotMediaBase_1.RenderModeType.RenderModeFit;
    }
    IRenderer.prototype.snapshot = function (fileType) {
        if (fileType === void 0) { fileType = 'image/png'; }
        if (this.canvas && this.canvas.toDataURL) {
            return this.canvas.toDataURL(fileType);
        }
        return null;
    };
    IRenderer.prototype.bind = function (element) {
        if (!element) {
            throw new Error('You have pass a element');
        }
        this.parentElement = element;
    };
    IRenderer.prototype.equalsElement = function (element) {
        if (!element) {
            throw new Error('You have pass a element');
        }
        if (!this.parentElement) {
            throw new Error('parentElement is null');
        }
        return element === this.parentElement;
    };
    IRenderer.prototype.setRenderOption = function (_a) {
        var contentMode = _a.contentMode, mirror = _a.mirror;
        this.contentMode = contentMode !== null && contentMode !== void 0 ? contentMode : CmviotMediaBase_1.RenderModeType.RenderModeFit;
        this.mirror = mirror;
        Object.assign(this.parentElement.style, {
            transform: mirror ? 'rotateY(180deg)' : '',
        });
    };
    return IRenderer;
}());
exports.IRenderer = IRenderer;
