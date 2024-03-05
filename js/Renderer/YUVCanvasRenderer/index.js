"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YUVCanvasRenderer = void 0;
var lodash_isequal_1 = __importDefault(require("lodash.isequal"));
var CmviotMediaBase_1 = require("../../Private/CmviotMediaBase");
var IRenderer_1 = require("../IRenderer");
var YUVBuffer = require('yuv-buffer');
var YUVCanvas = require('yuv-canvas');
var YUVCanvasRenderer = /** @class */ (function (_super) {
    __extends(YUVCanvasRenderer, _super);
    function YUVCanvasRenderer() {
        var _this = _super.call(this) || this;
        _this._videoFrame = {
            rotation: 0,
            width: 0,
            height: 0,
            yStride: 0,
            uStride: 0,
            vStride: 0,
            yBuffer: new Uint8Array(0),
            uBuffer: new Uint8Array(0),
            vBuffer: new Uint8Array(0),
            videoSourceType: -1,
        };
        return _this;
    }
    YUVCanvasRenderer.prototype.bind = function (element) {
        _super.prototype.bind.call(this, element);
        var container = document.createElement('div');
        Object.assign(container.style, {
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
        });
        this._container = container;
        this.parentElement.appendChild(this._container);
        this.canvas = document.createElement('canvas');
        this._container.appendChild(this.canvas);
        this._yuvCanvasSink = YUVCanvas.attach(this.canvas, {
            webGL: false,
        });
    };
    YUVCanvasRenderer.prototype.unbind = function () {
        var _a, _b;
        if (this._container) {
            this._container.replaceChildren();
            this._container = undefined;
        }
        if (this.parentElement) {
            this.parentElement.replaceChildren();
            this.parentElement = undefined;
        }
        if (this.canvas) {
            this.canvas = undefined;
        }
        if (this._yuvCanvasSink && ((_a = this._yuvCanvasSink) === null || _a === void 0 ? void 0 : _a.loseContext)) {
            (_b = this._yuvCanvasSink) === null || _b === void 0 ? void 0 : _b.loseContext();
        }
    };
    YUVCanvasRenderer.prototype.zoom = function (vertical, contentMode, width, height, clientWidth, clientHeight) {
        if (contentMode === void 0) { contentMode = CmviotMediaBase_1.RenderModeType.RenderModeFit; }
        var localRatio = clientWidth / clientHeight;
        var tempRatio = width / height;
        if (isNaN(localRatio) || isNaN(tempRatio)) {
            return 1;
        }
        if (contentMode === CmviotMediaBase_1.RenderModeType.RenderModeHidden) {
            if (vertical) {
                return clientHeight / clientWidth < width / height
                    ? clientWidth / height
                    : clientHeight / width;
            }
            else {
                return clientWidth / clientHeight > width / height
                    ? clientWidth / width
                    : clientHeight / height;
            }
        }
        else {
            if (vertical) {
                return clientHeight / clientWidth < width / height
                    ? clientHeight / width
                    : clientWidth / height;
            }
            else {
                return clientWidth / clientHeight > width / height
                    ? clientHeight / height
                    : clientWidth / width;
            }
        }
    };
    YUVCanvasRenderer.prototype.updateCanvas = function (options) {
        if (options === void 0) { options = {
            frameWidth: 0,
            frameHeight: 0,
            rotation: 0,
            contentMode: 0,
            clientWidth: 0,
            clientHeight: 0,
        }; }
        if (this._cacheCanvasOptions) {
            if ((0, lodash_isequal_1.default)(this._cacheCanvasOptions, options)) {
                return;
            }
        }
        this._cacheCanvasOptions = Object.assign({}, options);
        if (this.canvas) {
            if (options.rotation === 0 || options.rotation === 180) {
                this.canvas.width = options.frameWidth;
                this.canvas.height = options.frameHeight;
                Object.assign(this.canvas.style, {
                    'width': options.frameWidth + 'px',
                    'height': options.frameHeight + 'px',
                    'object-fit': 'cover',
                });
            }
            else if (options.rotation === 90 || options.rotation === 270) {
                this.canvas.height = options.frameWidth;
                this.canvas.width = options.frameHeight;
            }
            else {
                throw new Error('Invalid value for rotation. Only support 0, 90, 180, 270');
            }
            var transformItems = [];
            transformItems.push("rotateZ(".concat(options.rotation, "deg)"));
            var scale = this.zoom(options.rotation === 90 || options.rotation === 270, options.contentMode, options.frameWidth, options.frameHeight, options.clientWidth, options.clientHeight);
            this.canvas.style.transform = "scale(".concat(scale.toString(), ")");
            if (transformItems.length > 0) {
                this.canvas.style.transform += " ".concat(transformItems.join(' '));
            }
        }
    };
    YUVCanvasRenderer.prototype.drawFrame = function (frame) {
        if (!this._container || !this._yuvCanvasSink) {
            return;
        }
        var frameWidth = frame.width;
        var frameHeight = frame.height;
        if (this._videoFrame.yStride === 0 ||
            this._videoFrame.height === 0 ||
            this._videoFrame.yStride != frame.yStride ||
            this._videoFrame.height != frame.height) {
            this._videoFrame.yBuffer = new Uint8Array(frame.yStride * frameHeight);
            this._videoFrame.uBuffer = new Uint8Array((frame.yStride * frameHeight) / 4);
            this._videoFrame.vBuffer = new Uint8Array((frame.yStride * frameHeight) / 4);
        }
        this._videoFrame.yBuffer.set(frame.yBuffer);
        this._videoFrame.uBuffer.set(frame.uBuffer);
        this._videoFrame.vBuffer.set(frame.vBuffer);
        this._videoFrame.width = frame.width;
        this._videoFrame.height = frame.height;
        this._videoFrame.yStride = frame.yStride;
        this._videoFrame.rotation = frame.rotation;
        var options = {
            frameWidth: frameWidth,
            frameHeight: frameHeight,
            rotation: frame.rotation ? frame.rotation : 0,
            contentMode: this.contentMode,
            clientWidth: this._container.clientWidth,
            clientHeight: this._container.clientHeight,
        };
        this.updateCanvas(options);
        var format = YUVBuffer.format({
            width: frameWidth,
            height: frameHeight,
            chromaWidth: frameWidth / 2,
            chromaHeight: frameHeight / 2,
            cropLeft: frame.yStride - frameWidth,
        });
        var yuvBufferFrame = YUVBuffer.frame(format, {
            bytes: this._videoFrame.yBuffer,
            stride: frame.yStride,
        }, {
            bytes: this._videoFrame.uBuffer,
            stride: frame.yStride / 2,
        }, {
            bytes: this._videoFrame.vBuffer,
            stride: frame.yStride / 2,
        });
        this._yuvCanvasSink.drawFrame(yuvBufferFrame);
    };
    YUVCanvasRenderer.prototype.refreshCanvas = function () {
        if (this._cacheCanvasOptions) {
            this.zoom(this._cacheCanvasOptions.rotation === 90 ||
                this._cacheCanvasOptions.rotation === 270, this._cacheCanvasOptions.contentMode, this._cacheCanvasOptions.frameWidth, this._cacheCanvasOptions.frameHeight, this._cacheCanvasOptions.clientWidth, this._cacheCanvasOptions.clientHeight);
        }
    };
    return YUVCanvasRenderer;
}(IRenderer_1.IRenderer));
exports.YUVCanvasRenderer = YUVCanvasRenderer;
