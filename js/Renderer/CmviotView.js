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
var CmviotMediaBase_1 = require("../Private/CmviotMediaBase");
var Utils_1 = require("../Utils");
var VIDEO_SOURCE_TYPE_STRING = 'video-source-type';
var UID_STRING = 'uid';
var CHANNEL_ID_STRING = 'channel-id';
var RENDERER_CONTENT_MODE_STRING = 'renderer-content-mode';
var RENDERER_MIRROR_STRING = 'renderer-mirror';
var observedAttributes = [
    VIDEO_SOURCE_TYPE_STRING,
    UID_STRING,
    CHANNEL_ID_STRING,
    RENDERER_CONTENT_MODE_STRING,
    RENDERER_MIRROR_STRING,
];
var CmviotView = /** @class */ (function (_super) {
    __extends(CmviotView, _super);
    function CmviotView() {
        var _this = _super.call(this) || this;
        _this.isConnectedCallback = false;
        _this.initializeRender = function () {
            var _a, _b;
            (_a = Utils_1.CmviotEnv.CmviotRendererManager) === null || _a === void 0 ? void 0 : _a.destroyRendererByView(_this);
            (_b = Utils_1.CmviotEnv.CmviotRendererManager) === null || _b === void 0 ? void 0 : _b.setupVideo({
                videoSourceType: _this.videoSourceType,
                view: _this,
                uid: _this.uid,
                channelId: _this.channelId,
                rendererOptions: {
                    mirror: _this.renderMirror,
                    contentMode: _this.renderContentMode,
                },
            });
        };
        _this.destroyRender = function () {
            var _a;
            (_a = Utils_1.CmviotEnv.CmviotRendererManager) === null || _a === void 0 ? void 0 : _a.destroyRendererByView(_this);
        };
        return _this;
    }
    Object.defineProperty(CmviotView, "observedAttributes", {
        get: function () {
            return observedAttributes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmviotView.prototype, "videoSourceType", {
        get: function () {
            var number = Number(this.getAttribute(VIDEO_SOURCE_TYPE_STRING));
            return isNaN(number) ? 0 : number;
        },
        set: function (val) {
            if (val) {
                this.setAttribute(VIDEO_SOURCE_TYPE_STRING, String(val));
            }
            else {
                this.removeAttribute(VIDEO_SOURCE_TYPE_STRING);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmviotView.prototype, "uid", {
        get: function () {
            var number = Number(this.getAttribute(UID_STRING));
            return isNaN(number) ? 0 : number;
        },
        set: function (val) {
            if (val) {
                this.setAttribute(UID_STRING, String(val));
            }
            else {
                this.removeAttribute(UID_STRING);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmviotView.prototype, "channelId", {
        get: function () {
            return this.getAttribute(CHANNEL_ID_STRING) || '';
        },
        set: function (val) {
            if (val) {
                this.setAttribute(CHANNEL_ID_STRING, val);
            }
            else {
                this.removeAttribute(CHANNEL_ID_STRING);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmviotView.prototype, "renderContentMode", {
        get: function () {
            var number = Number(this.getAttribute(RENDERER_CONTENT_MODE_STRING) ||
                CmviotMediaBase_1.RenderModeType.RenderModeFit);
            return isNaN(number) ? CmviotMediaBase_1.RenderModeType.RenderModeFit : number;
        },
        set: function (val) {
            if (val) {
                this.setAttribute(RENDERER_CONTENT_MODE_STRING, String(val));
            }
            else {
                this.removeAttribute(RENDERER_CONTENT_MODE_STRING);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CmviotView.prototype, "renderMirror", {
        get: function () {
            return this.getAttribute(RENDERER_MIRROR_STRING) === 'true';
        },
        set: function (val) {
            if (val) {
                this.setAttribute(RENDERER_MIRROR_STRING, String(val));
            }
            else {
                this.removeAttribute(RENDERER_MIRROR_STRING);
            }
        },
        enumerable: false,
        configurable: true
    });
    CmviotView.prototype.connectedCallback = function () {
        this.isConnectedCallback = true;
        this.initializeRender();
    };
    CmviotView.prototype.attributeChangedCallback = function (attrName, oldVal, newVal) {
        var _a;
        if (!this.isConnectedCallback) {
            return;
        }
        var isSetRenderOption = [
            RENDERER_CONTENT_MODE_STRING,
            RENDERER_MIRROR_STRING,
        ].includes(attrName);
        if (isSetRenderOption) {
            (_a = Utils_1.CmviotEnv.CmviotRendererManager) === null || _a === void 0 ? void 0 : _a.setRenderOption(this, this.renderContentMode, this.renderMirror);
            return;
        }
        var isNeedReInitialize = observedAttributes.includes(attrName);
        if (!isNeedReInitialize) {
            return;
        }
        this.initializeRender();
    };
    CmviotView.prototype.disconnectedCallback = function () {
        this.isConnectedCallback = false;
        this.destroyRender();
    };
    return CmviotView;
}(HTMLElement));
exports.default = CmviotView;
window.customElements.define('cmviot-view', CmviotView);
