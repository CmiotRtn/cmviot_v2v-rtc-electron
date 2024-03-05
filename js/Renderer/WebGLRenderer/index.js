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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlRenderer = void 0;
var events_1 = require("events");
var CmviotMediaBase_1 = require("../../Private/CmviotMediaBase");
var Utils_1 = require("../../Utils");
var IRenderer_1 = require("../IRenderer");
var createProgramFromSources = require('./webgl-utils').createProgramFromSources;
var vertexShaderSource = 'attribute vec2 a_position;' +
    'attribute vec2 a_texCoord;' +
    'uniform vec2 u_resolution;' +
    'varying vec2 v_texCoord;' +
    'void main() {' +
    'vec2 zeroToOne = a_position / u_resolution;' +
    '   vec2 zeroToTwo = zeroToOne * 2.0;' +
    '   vec2 clipSpace = zeroToTwo - 1.0;' +
    '   gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);' +
    'v_texCoord = a_texCoord;' +
    '}';
var yuvShaderSource = 'precision mediump float;' +
    'uniform sampler2D Ytex;' +
    'uniform sampler2D Utex;' +
    'uniform sampler2D Vtex;' +
    'varying vec2 v_texCoord;' +
    'void main(void) {' +
    '  float nx,ny,r,g,b,y,u,v;' +
    '  mediump vec4 txl,ux,vx;' +
    '  nx=v_texCoord[0];' +
    '  ny=v_texCoord[1];' +
    '  y=texture2D(Ytex,vec2(nx,ny)).r;' +
    '  u=texture2D(Utex,vec2(nx,ny)).r;' +
    '  v=texture2D(Vtex,vec2(nx,ny)).r;' +
    '  y=1.1643*(y-0.0625);' +
    '  u=u-0.5;' +
    '  v=v-0.5;' +
    '  r=y+1.5958*v;' +
    '  g=y-0.39173*u-0.81290*v;' +
    '  b=y+2.017*u;' +
    '  gl_FragColor=vec4(r,g,b,1.0);' +
    '}';
var GlRenderer = /** @class */ (function (_super) {
    __extends(GlRenderer, _super);
    function GlRenderer(failCallback) {
        var _this = _super.call(this) || this;
        _this.renderImageCount = 0;
        _this.initWidth = 0;
        _this.initHeight = 0;
        _this.initRotation = 0;
        _this.clientWidth = 0;
        _this.clientHeight = 0;
        _this.contentMode = 0;
        _this.event = new events_1.EventEmitter();
        _this.firstFrameRender = false;
        _this.lastImageWidth = 0;
        _this.lastImageHeight = 0;
        _this.lastImageRotation = 0;
        _this.videoBuffer = {};
        _this.handleContextLost = function () {
            try {
                _this.canvas &&
                    _this.canvas.removeEventListener('webglcontextlost', _this.handleContextLost, false);
            }
            catch (error) {
                (0, Utils_1.logWarn)('webglcontextlost error', error);
            }
            finally {
                _this.gl = undefined;
                _this.failInitRenderCB &&
                    _this.failInitRenderCB({
                        error: 'Browser not support! No WebGL detected.',
                    });
            }
        };
        _this.failInitRenderCB = failCallback;
        return _this;
    }
    GlRenderer.prototype.bind = function (view) {
        _super.prototype.bind.call(this, view);
    };
    GlRenderer.prototype.unbind = function () {
        var _a;
        ((_a = this.observer) === null || _a === void 0 ? void 0 : _a.unobserve) && this.observer.disconnect();
        this.program = undefined;
        this.positionLocation = undefined;
        this.texCoordLocation = undefined;
        this.deleteTexture(this.yTexture);
        this.deleteTexture(this.uTexture);
        this.deleteTexture(this.vTexture);
        this.yTexture = undefined;
        this.uTexture = undefined;
        this.vTexture = undefined;
        this.deleteBuffer(this.texCoordBuffer);
        this.deleteBuffer(this.surfaceBuffer);
        this.texCoordBuffer = undefined;
        this.surfaceBuffer = undefined;
        this.gl = undefined;
        try {
            if (this.container &&
                this.canvas &&
                this.canvas.parentNode === this.container) {
                this.container.removeChild(this.canvas);
            }
            if (this.parentElement &&
                this.container &&
                this.container.parentNode === this.parentElement) {
                this.parentElement.removeChild(this.container);
            }
        }
        catch (e) {
            (0, Utils_1.logWarn)('webgl renderer unbind happen some error', e);
        }
        this.canvas &&
            this.canvas.removeEventListener('webglcontextlost', this.handleContextLost, false);
        this.canvas = undefined;
        this.container = undefined;
        this.parentElement = undefined;
    };
    GlRenderer.prototype.updateViewZoomLevel = function (rotation, width, height) {
        if (!this.parentElement || !this.canvas) {
            return;
        }
        this.clientWidth = this.parentElement.clientWidth;
        this.clientHeight = this.parentElement.clientHeight;
        try {
            if (this.contentMode === CmviotMediaBase_1.RenderModeType.RenderModeHidden) {
                // Cover
                if (rotation === 0 || rotation === 180) {
                    if (this.clientWidth / this.clientHeight > width / height) {
                        this.canvas.style.transform = "scale(".concat(this.clientWidth / width, ")");
                    }
                    else {
                        this.canvas.style.transform = "scale(".concat(this.clientHeight / height, ")");
                    }
                }
                else {
                    // 90, 270
                    if (this.clientHeight / this.clientWidth > width / height) {
                        this.canvas.style.transform = "scale(".concat(this.clientHeight / width, ")");
                    }
                    else {
                        this.canvas.style.transform = "scale(".concat(this.clientWidth / height, ")");
                    }
                }
                // Contain
            }
            else if (rotation === 0 || rotation === 180) {
                if (this.clientWidth / this.clientHeight > width / height) {
                    this.canvas.style.transform = "scale(".concat(this.clientHeight / height, ")");
                }
                else {
                    this.canvas.style.transform = "scale(".concat(this.clientWidth / width, ")");
                }
            }
            else {
                // 90, 270
                if (this.clientHeight / this.clientWidth > width / height) {
                    this.canvas.style.transform = "scale(".concat(this.clientWidth / height, ")");
                }
                else {
                    this.canvas.style.transform = "scale(".concat(this.clientHeight / width, ")");
                }
            }
        }
        catch (e) {
            (0, Utils_1.logError)('webgl updateViewZoomLevel', e);
            return false;
        }
        return true;
    };
    GlRenderer.prototype.updateCanvas = function (rotation, width, height) {
        // if (this.canvasUpdated) {
        //   return;
        // }
        if (width || height) {
            this.lastImageWidth = width;
            this.lastImageHeight = height;
            this.lastImageRotation = rotation;
        }
        else {
            width = this.lastImageWidth;
            height = this.lastImageHeight;
            rotation = this.lastImageRotation;
        }
        if (!this.updateViewZoomLevel(rotation, width, height)) {
            return;
        }
        var gl = this.gl;
        if (!gl) {
            return;
        }
        gl.bindBuffer(gl.ARRAY_BUFFER, this.surfaceBuffer);
        gl.enableVertexAttribArray(this.positionLocation);
        gl.vertexAttribPointer(this.positionLocation, 2, gl.FLOAT, false, 0, 0);
        // 4 vertex, 1(x1,y1), 2(x2,y1), 3(x2,y2), 4(x1,y2)
        //  0: 1,2,4/4,2,3
        // 90: 2,3,1/1,3,4
        // 180: 3,4,2/2,4,1
        // 270: 4,1,3/3,1,2
        var p1 = { x: 0, y: 0 };
        var p2 = { x: width, y: 0 };
        var p3 = { x: width, y: height };
        var p4 = { x: 0, y: height };
        var pp1 = p1, pp2 = p2, pp3 = p3, pp4 = p4;
        switch (rotation) {
            case 0:
                break;
            case 90:
                pp1 = p2;
                pp2 = p3;
                pp3 = p4;
                pp4 = p1;
                break;
            case 180:
                pp1 = p3;
                pp2 = p4;
                pp3 = p1;
                pp4 = p2;
                break;
            case 270:
                pp1 = p4;
                pp2 = p1;
                pp3 = p2;
                pp4 = p3;
                break;
            default:
        }
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
            pp1.x,
            pp1.y,
            pp2.x,
            pp2.y,
            pp4.x,
            pp4.y,
            pp4.x,
            pp4.y,
            pp2.x,
            pp2.y,
            pp3.x,
            pp3.y,
        ]), gl.STATIC_DRAW);
        var resolutionLocation = gl.getUniformLocation(this.program, 'u_resolution');
        gl.uniform2f(resolutionLocation, width, height);
    };
    GlRenderer.prototype.drawFrame = function (videoFrame) {
        var error;
        try {
            this.renderImage({
                width: videoFrame.width,
                height: videoFrame.height,
                left: 0,
                top: 0,
                right: videoFrame.yStride - videoFrame.width,
                bottom: 0,
                rotation: videoFrame.rotation || 0,
                yplane: videoFrame.yBuffer,
                uplane: videoFrame.uBuffer,
                vplane: videoFrame.vBuffer,
            });
        }
        catch (err) {
            error = err;
        }
        if (!this.gl || error) {
            this.failInitRenderCB &&
                this.failInitRenderCB({
                    error: 'webgl lost or webgl initialize failed',
                });
            this.failInitRenderCB = null;
            return;
        }
    };
    GlRenderer.prototype.refreshCanvas = function () {
        if (this.lastImageWidth) {
            this.updateViewZoomLevel(this.lastImageRotation, this.lastImageWidth, this.lastImageHeight);
        }
    };
    GlRenderer.prototype.renderImage = function (image) {
        // Rotation, width, height, left, top, right, bottom, yplane, uplane, vplane
        var _this = this;
        if (image.width != this.initWidth ||
            image.height != this.initHeight ||
            image.rotation != this.initRotation) {
            var view = this.parentElement;
            this.unbind();
            this.initCanvas(view, image.width, image.height, image.rotation);
            var ResizeObserver_1 = window.ResizeObserver;
            if (ResizeObserver_1) {
                this.observer = new ResizeObserver_1(function () {
                    _this.refreshCanvas && _this.refreshCanvas();
                });
                this.observer.observe(view);
            }
        }
        var gl = this.gl;
        if (!gl) {
            return;
        }
        gl.bindBuffer(gl.ARRAY_BUFFER, this.texCoordBuffer);
        var xWidth = image.width + image.left + image.right;
        var xHeight = image.height + image.top + image.bottom;
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
            image.left / xWidth,
            image.bottom / xHeight,
            1 - image.right / xWidth,
            image.bottom / xHeight,
            image.left / xWidth,
            1 - image.top / xHeight,
            image.left / xWidth,
            1 - image.top / xHeight,
            1 - image.right / xWidth,
            image.bottom / xHeight,
            1 - image.right / xWidth,
            1 - image.top / xHeight,
        ]), gl.STATIC_DRAW);
        gl.enableVertexAttribArray(this.texCoordLocation);
        gl.vertexAttribPointer(this.texCoordLocation, 2, gl.FLOAT, false, 0, 0);
        this.uploadYuv(xWidth, xHeight, image.yplane, image.uplane, image.vplane);
        this.updateCanvas(image.rotation, image.width, image.height);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
        this.renderImageCount += 1;
        if (!this.firstFrameRender) {
            this.firstFrameRender = true;
            this.event.emit('ready');
        }
    };
    GlRenderer.prototype.uploadYuv = function (width, height, yplane, uplane, vplane) {
        var gl = this.gl;
        if (!gl || !this.yTexture || !this.uTexture || !this.vTexture) {
            return;
        }
        gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, this.yTexture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, width, height, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, yplane);
        gl.activeTexture(gl.TEXTURE1);
        gl.bindTexture(gl.TEXTURE_2D, this.uTexture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, width / 2, height / 2, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, uplane);
        gl.activeTexture(gl.TEXTURE2);
        gl.bindTexture(gl.TEXTURE_2D, this.vTexture);
        ('');
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, width / 2, height / 2, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, vplane);
    };
    GlRenderer.prototype.deleteBuffer = function (buffer) {
        if (buffer && this.gl) {
            this.gl.deleteBuffer(buffer);
        }
    };
    GlRenderer.prototype.deleteTexture = function (texture) {
        if (texture && this.gl) {
            this.gl.deleteTexture(texture);
        }
    };
    GlRenderer.prototype.initCanvas = function (view, width, height, rotation) {
        this.clientWidth = view.clientWidth;
        this.clientHeight = view.clientHeight;
        this.parentElement = view;
        this.container = document.createElement('div');
        this.container.style.width = '100%';
        this.container.style.height = '100%';
        this.container.style.display = 'flex';
        this.container.style.justifyContent = 'center';
        this.container.style.alignItems = 'center';
        this.container.style.overflow = 'hidden';
        this.parentElement.appendChild(this.container);
        this.canvas = document.createElement('canvas');
        if (rotation == 0 || rotation == 180) {
            this.canvas.width = width;
            this.canvas.height = height;
        }
        else {
            this.canvas.width = height;
            this.canvas.height = width;
        }
        this.initWidth = width;
        this.initHeight = height;
        this.initRotation = rotation;
        this.container.appendChild(this.canvas);
        try {
            // Try to grab the standard context. If it fails, fallback to experimental.
            this.gl = this.canvas.getContext('webgl2', {
                preserveDrawingBuffer: true,
            });
            // context list after toggle resolution on electron 12.0.6
            this.canvas.addEventListener('webglcontextlost', this.handleContextLost, false);
        }
        catch (e) {
            (0, Utils_1.logWarn)('webgl create happen some warming', this.gl, this.canvas);
        }
        if (!this.gl) {
            this.failInitRenderCB &&
                this.failInitRenderCB({
                    error: 'Browser not support! No WebGL detected.',
                });
            return;
        }
        var gl = this.gl;
        // Set clear color to black, fully opaque
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        // Enable depth testing
        gl.enable(gl.DEPTH_TEST);
        // Near things obscure far things
        gl.depthFunc(gl.LEQUAL);
        // Clear the color as well as the depth buffer.
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        // Setup GLSL program
        this.program = createProgramFromSources(gl, [
            vertexShaderSource,
            yuvShaderSource,
        ]);
        this.gl.useProgram(this.program);
        this.initTextures();
    };
    GlRenderer.prototype.initTextures = function () {
        var gl = this.gl;
        if (!gl) {
            return;
        }
        var program = this.program;
        this.positionLocation = gl.getAttribLocation(program, 'a_position');
        this.texCoordLocation = gl.getAttribLocation(program, 'a_texCoord');
        this.surfaceBuffer = gl.createBuffer();
        this.texCoordBuffer = gl.createBuffer();
        // Create a texture.
        gl.activeTexture(gl.TEXTURE0);
        this.yTexture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, this.yTexture);
        // Set the parameters so we can render any size image.
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.activeTexture(gl.TEXTURE1);
        this.uTexture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, this.uTexture);
        // Set the parameters so we can render any size image.
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.activeTexture(gl.TEXTURE2);
        this.vTexture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, this.vTexture);
        // Set the parameters so we can render any size image.
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        var y = gl.getUniformLocation(program, 'Ytex');
        gl.uniform1i(y, 0); /* Bind Ytex to texture unit 0 */
        var u = gl.getUniformLocation(program, 'Utex');
        gl.uniform1i(u, 1); /* Bind Utex to texture unit 1 */
        var v = gl.getUniformLocation(program, 'Vtex');
        gl.uniform1i(v, 2); /* Bind Vtex to texture unit 2 */
    };
    return GlRenderer;
}(IRenderer_1.IRenderer));
exports.GlRenderer = GlRenderer;
exports.default = GlRenderer;
