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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RendererManager = void 0;
var CmviotBase_1 = require("../Private/CmviotBase");
var CmviotMediaBase_1 = require("../Private/CmviotMediaBase");
var Types_1 = require("../Types");
var Utils_1 = require("../Utils");
var IRendererManager_1 = require("./IRendererManager");
var WebGLRenderer_1 = __importDefault(require("./WebGLRenderer"));
var YUVCanvasRenderer_1 = require("./YUVCanvasRenderer");
/**
 * @ignore
 */
var RendererManager = /** @class */ (function (_super) {
    __extends(RendererManager, _super);
    function RendererManager() {
        var _this = _super.call(this) || this;
        /**
         * @ignore
         */
        _this.isRendering = false;
        _this.renderFps = 15;
        _this.renderers = new Map();
        _this.renderMode = _this.checkWebglEnv()
            ? Types_1.RENDER_MODE.WEBGL
            : Types_1.RENDER_MODE.SOFTWARE;
        _this.msgBridge = Utils_1.CmviotEnv.CmviotElectronBridge;
        _this.defaultRenderConfig = {
            rendererOptions: {
                contentMode: CmviotMediaBase_1.RenderModeType.RenderModeFit,
                mirror: false,
            },
        };
        return _this;
    }
    /**
     * Sets the channel mode of the current audio file.
     * In a stereo music file, the left and right channels can store different audio data. According to your needs, you can set the channel mode to original mode, left channel mode, right channel mode, or mixed channel mode. For example, in the KTV scenario, the left channel of the music file stores the musical accompaniment, and the right channel stores the singing voice. If you only need to listen to the accompaniment, call this method to set the channel mode of the music file to left channel mode; if you need to listen to the accompaniment and the singing voice at the same time, call this method to set the channel mode to mixed channel mode.Call this method after calling open .This method only applies to stereo audio files.
     *
     * @param mode The channel mode. See AudioDualMonoMode .
     *
     * @returns
     * 0: Success.< 0: Failure.
     */
    RendererManager.prototype.setRenderMode = function (mode) {
        this.renderMode = mode;
        (0, Utils_1.logInfo)('setRenderMode:  new render mode will take effect only if new view bind to render');
    };
    /**
     * @ignore
     */
    RendererManager.prototype.setFPS = function (fps) {
        this.renderFps = fps;
        this.restartRender();
    };
    /**
     * @ignore
     */
    RendererManager.prototype.setRenderOption = function (view, contentMode, mirror) {
        if (contentMode === void 0) { contentMode = CmviotMediaBase_1.RenderModeType.RenderModeFit; }
        if (mirror === void 0) { mirror = false; }
        if (!view) {
            (0, Utils_1.logError)('setRenderOption: view not exist', view);
        }
        this.forEachStream(function (_a) {
            var renders = _a.renders;
            renders === null || renders === void 0 ? void 0 : renders.forEach(function (render) {
                if (render.equalsElement(view)) {
                    render.setRenderOption({ contentMode: contentMode, mirror: mirror });
                }
            });
        });
    };
    /**
     * @ignore
     */
    RendererManager.prototype.setRenderOptionByConfig = function (rendererConfig) {
        var _a = (0, Utils_1.getDefaultRendererVideoConfig)(rendererConfig), uid = _a.uid, channelId = _a.channelId, rendererOptions = _a.rendererOptions, videoSourceType = _a.videoSourceType;
        var renderList = this.getRenderers({ uid: uid, channelId: channelId, videoSourceType: videoSourceType });
        renderList
            ? renderList
                .filter(function (renderItem) {
                if (rendererConfig.view) {
                    return renderItem.equalsElement(rendererConfig.view);
                }
                else {
                    return true;
                }
            })
                .forEach(function (renderItem) { return renderItem.setRenderOption(rendererOptions); })
            : (0, Utils_1.logWarn)("RenderStreamType: ".concat(videoSourceType, " channelId:").concat(channelId, " uid:").concat(uid, " have no render view, you need to call this api after setView"));
        return CmviotBase_1.ErrorCodeType.ErrOk;
    };
    /**
     * @ignore
     */
    RendererManager.prototype.checkWebglEnv = function () {
        var gl;
        var canvas = document.createElement('canvas');
        try {
            gl =
                canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
            (0, Utils_1.logInfo)('Your browser support webGL');
        }
        catch (e) {
            (0, Utils_1.logWarn)('Your browser may not support webGL');
            return false;
        }
        return !!gl;
    };
    /**
     * @ignore
     */
    RendererManager.prototype.setupVideo = function (rendererVideoConfig) {
        var formatConfig = (0, Utils_1.getDefaultRendererVideoConfig)(rendererVideoConfig);
        var uid = formatConfig.uid, channelId = formatConfig.channelId, videoSourceType = formatConfig.videoSourceType, rendererOptions = formatConfig.rendererOptions, view = formatConfig.view;
        if (!formatConfig.view) {
            (0, Utils_1.logWarn)('setupVideo->destroyRenderersByConfig, because of view is null');
            this.destroyRenderersByConfig(videoSourceType, channelId, uid);
            return -CmviotBase_1.ErrorCodeType.ErrInvalidArgument;
        }
        // ensure a render to RenderMap
        var render = this.bindHTMLElementToRender(formatConfig, view);
        // render config
        render === null || render === void 0 ? void 0 : render.setRenderOption(rendererOptions);
        // enable iris videoFrame
        this.enableVideoFrameCache({
            uid: uid,
            channelId: channelId,
            videoSourceType: videoSourceType,
        });
        // enable render
        this.enableRender(true);
        return CmviotBase_1.ErrorCodeType.ErrOk;
    };
    /**
     * @ignore
     */
    RendererManager.prototype.setupLocalVideo = function (rendererConfig) {
        var videoSourceType = rendererConfig.videoSourceType;
        if (videoSourceType === CmviotMediaBase_1.VideoSourceType.VideoSourceRemote) {
            (0, Utils_1.logError)('setupLocalVideo videoSourceType error', videoSourceType);
            return -CmviotBase_1.ErrorCodeType.ErrInvalidArgument;
        }
        this.setupVideo(__assign({}, rendererConfig));
        return CmviotBase_1.ErrorCodeType.ErrOk;
    };
    /**
     * @ignore
     */
    RendererManager.prototype.setupRemoteVideo = function (rendererConfig) {
        var videoSourceType = rendererConfig.videoSourceType;
        if (videoSourceType !== CmviotMediaBase_1.VideoSourceType.VideoSourceRemote) {
            (0, Utils_1.logError)('setupRemoteVideo videoSourceType error', videoSourceType);
            return -CmviotBase_1.ErrorCodeType.ErrInvalidArgument;
        }
        this.setupVideo(__assign({}, rendererConfig));
        return CmviotBase_1.ErrorCodeType.ErrOk;
    };
    /**
     * Destroys a video renderer object.
     *
     * @param view The HTMLElement object to be destroyed.
     */
    RendererManager.prototype.destroyRendererByView = function (view) {
        var _this = this;
        var renders = this.renderers;
        renders.forEach(function (channelMap, videoSourceType) {
            channelMap.forEach(function (uidMap, channelId) {
                uidMap.forEach(function (renderConfig, uid) {
                    var _a;
                    var hasRender = false;
                    var remainRenders = (_a = renderConfig.renders) === null || _a === void 0 ? void 0 : _a.filter(function (render) {
                        var isFilter = render.equalsElement(view);
                        if (isFilter) {
                            hasRender = true;
                            render.unbind();
                        }
                        return !isFilter;
                    });
                    if (!hasRender) {
                        return;
                    }
                    if ((remainRenders === null || remainRenders === void 0 ? void 0 : remainRenders.length) === 0 || !remainRenders) {
                        _this.disableVideoFrameCache({ uid: uid, channelId: channelId, videoSourceType: videoSourceType });
                    }
                    renderConfig.renders = remainRenders;
                });
            });
        });
    };
    /**
     * @ignore
     */
    RendererManager.prototype.destroyRenderersByConfig = function (videoSourceType, channelId, uid) {
        var _a, _b;
        var config = (0, Utils_1.formatConfigByVideoSourceType)(videoSourceType, channelId, uid);
        videoSourceType = config.videoSourceType;
        channelId = config.channelId;
        uid = config.uid;
        this.disableVideoFrameCache(config);
        var uidMap = (_a = this.renderers.get(videoSourceType)) === null || _a === void 0 ? void 0 : _a.get(channelId);
        var renderMap = uidMap === null || uidMap === void 0 ? void 0 : uidMap.get(uid);
        if (!renderMap) {
            return;
        }
        (_b = renderMap.renders) === null || _b === void 0 ? void 0 : _b.forEach(function (renderItem) {
            renderItem.unbind();
        });
        renderMap.renders = [];
    };
    /**
     * @ignore
     */
    RendererManager.prototype.removeAllRenderer = function () {
        var _this = this;
        var renderMap = this.forEachStream(function (renderConfig, videoFrameCacheConfig) {
            var _a;
            _this.disableVideoFrameCache(videoFrameCacheConfig);
            (_a = renderConfig.renders) === null || _a === void 0 ? void 0 : _a.forEach(function (renderItem) {
                renderItem.unbind();
            });
            renderConfig.renders = [];
        });
        renderMap.clear();
    };
    /**
     * @ignore
     */
    RendererManager.prototype.clear = function () {
        this.stopRender();
        this.removeAllRenderer();
    };
    /**
     * Enables/Disables the local video capture.
     * This method disables or re-enables the local video capture, and does not affect receiving the remote video stream.After calling enableVideo , the local video capture is enabled by default. You can call enableLocalVideo (false) to disable the local video capture. If you want to re-enable the local video capture, call enableLocalVideo(true).After the local video capturer is successfully disabled or re-enabled, the SDK triggers the onRemoteVideoStateChanged callback on the remote client.You can call this method either before or after joining a channel.This method enables the internal engine and is valid after leaving the channel.
     *
     * @param enabled Whether to enable the local video capture.true: (Default) Enable the local video capture.false: Disable the local video capture. Once the local video is disabled, the remote users cannot receive the video stream of the local user, while the local user can still receive the video streams of remote users. When set to false, this method does not require a local camera.
     *
     * @returns
     * 0: Success.< 0: Failure.
     */
    RendererManager.prototype.enableRender = function (enabled) {
        if (enabled === void 0) { enabled = true; }
        if (enabled && this.isRendering) {
            //is already _isRendering
        }
        else if (enabled && !this.isRendering) {
            this.startRenderer();
        }
        else {
            this.stopRender();
        }
    };
    /**
     * @ignore
     */
    RendererManager.prototype.startRenderer = function () {
        var _this = this;
        this.isRendering = true;
        var renderFunc = function (rendererItem, _a) {
            var videoSourceType = _a.videoSourceType, channelId = _a.channelId, uid = _a.uid;
            var renders = rendererItem.renders;
            if (!renders || (renders === null || renders === void 0 ? void 0 : renders.length) === 0) {
                return;
            }
            var finalResult = _this.msgBridge.GetVideoFrame(rendererItem.shareVideoFrame);
            switch (finalResult.ret) {
                case 0:
                    // GET_VIDEO_FRAME_CACHE_RETURN_TYPE::OK = 0,
                    // everything is ok
                    break;
                case 1: {
                    // GET_VIDEO_FRAME_CACHE_RETURN_TYPE::RESIZED
                    var width = finalResult.width, height = finalResult.height, yStride = finalResult.yStride, uStride = finalResult.uStride, vStride = finalResult.vStride;
                    var newShareVideoFrame = _this.resizeShareVideoFrame(videoSourceType, channelId, uid, width, height, yStride, uStride, vStride);
                    rendererItem.shareVideoFrame = newShareVideoFrame;
                    finalResult = _this.msgBridge.GetVideoFrame(newShareVideoFrame);
                    break;
                }
                case 2:
                    // GET_VIDEO_FRAME_CACHE_RETURN_TYPE::NO_CACHE
                    // setupVideo/CmviotView render before initialize
                    // this.enableVideoFrameCache({ videoSourceType, channelId, uid });
                    break;
                default:
                    break;
            }
            if (finalResult.ret !== 0) {
                (0, Utils_1.logDebug)('GetVideoFrame ret is', finalResult.ret, rendererItem);
                return;
            }
            if (!finalResult.isNewFrame) {
                (0, Utils_1.logDebug)('GetVideoFrame isNewFrame is false', rendererItem);
                return;
            }
            var renderVideoFrame = rendererItem.shareVideoFrame;
            if (renderVideoFrame.width > 0 && renderVideoFrame.height > 0) {
                renders.forEach(function (renderItem) {
                    renderItem.drawFrame(rendererItem.shareVideoFrame);
                });
            }
        };
        this.videoFrameUpdateInterval = setInterval(function () {
            _this.forEachStream(renderFunc);
        }, 1000 / this.renderFps);
    };
    /**
     * @ignore
     */
    RendererManager.prototype.stopRender = function () {
        this.isRendering = false;
        if (this.videoFrameUpdateInterval) {
            clearInterval(this.videoFrameUpdateInterval);
            this.videoFrameUpdateInterval = undefined;
        }
    };
    /**
     * @ignore
     */
    RendererManager.prototype.restartRender = function () {
        if (this.videoFrameUpdateInterval) {
            this.stopRender();
            this.startRenderer();
            (0, Utils_1.logInfo)("restartRender: Fps: ".concat(this.renderFps, " restartInterval"));
        }
    };
    /**
     * @ignore
     */
    RendererManager.prototype.createRenderer = function (failCallback) {
        if (this.renderMode === Types_1.RENDER_MODE.SOFTWARE) {
            return new YUVCanvasRenderer_1.YUVCanvasRenderer();
        }
        else {
            return new WebGLRenderer_1.default(failCallback);
        }
    };
    /**
     * @ignore
     */
    RendererManager.prototype.getRender = function (_a) {
        var _b, _c;
        var videoSourceType = _a.videoSourceType, channelId = _a.channelId, uid = _a.uid;
        return (_c = (_b = this.renderers.get(videoSourceType)) === null || _b === void 0 ? void 0 : _b.get(channelId)) === null || _c === void 0 ? void 0 : _c.get(uid);
    };
    /**
     * @ignore
     */
    RendererManager.prototype.getRenderers = function (_a) {
        var _b, _c, _d;
        var videoSourceType = _a.videoSourceType, channelId = _a.channelId, uid = _a.uid;
        return (((_d = (_c = (_b = this.renderers.get(videoSourceType)) === null || _b === void 0 ? void 0 : _b.get(channelId)) === null || _c === void 0 ? void 0 : _c.get(uid)) === null || _d === void 0 ? void 0 : _d.renders) ||
            []);
    };
    /**
     * @ignore
     */
    RendererManager.prototype.bindHTMLElementToRender = function (config, view) {
        var _this = this;
        this.ensureRendererConfig(config);
        var renders = this.getRenderers(config);
        var filterRenders = (renders === null || renders === void 0 ? void 0 : renders.filter(function (render) { return render.equalsElement(view); })) || [];
        var hasBeenAdd = filterRenders.length > 0;
        if (hasBeenAdd) {
            (0, Utils_1.logWarn)('bindHTMLElementToRender: this view has bind to render', filterRenders);
            return filterRenders[0];
        }
        var renderer = this.createRenderer(function () {
            var renderConfig = _this.getRender(config);
            if (!renderConfig) {
                return;
            }
            renderConfig.renders = renders.filter(function (r) { return r !== renderer; });
            var contentMode = renderer.contentMode;
            renderer.unbind();
            _this.setRenderMode(Types_1.RENDER_MODE.SOFTWARE);
            var newRender = _this.createRenderer();
            newRender.contentMode = contentMode;
            newRender.bind(view);
            renderConfig.renders.push(newRender);
        });
        renderer.bind(view);
        renders.push(renderer);
        return renderer;
    };
    /**
     * @ignore
     */
    RendererManager.prototype.forEachStream = function (callbackfn) {
        var renders = this.renderers;
        renders.forEach(function (channelMap, videoSourceType) {
            channelMap.forEach(function (uidMap, channelId) {
                uidMap.forEach(function (renderConfig, uid) {
                    callbackfn(renderConfig, { videoSourceType: videoSourceType, channelId: channelId, uid: uid }, { channelMap: channelMap, uidMap: uidMap });
                });
            });
        });
        return renders;
    };
    /**
     * @ignore
     */
    RendererManager.prototype.enableVideoFrameCache = function (videoFrameCacheConfig) {
        (0, Utils_1.logDebug)("enableVideoFrameCache ".concat(JSON.stringify(videoFrameCacheConfig)));
        this.msgBridge.EnableVideoFrameCache(videoFrameCacheConfig);
    };
    /**
     * @ignore
     */
    RendererManager.prototype.disableVideoFrameCache = function (videoFrameCacheConfig) {
        (0, Utils_1.logDebug)("disableVideoFrameCache ".concat(JSON.stringify(videoFrameCacheConfig)));
        this.msgBridge.DisableVideoFrameCache(videoFrameCacheConfig);
    };
    /**
     * @ignore
     */
    RendererManager.prototype.ensureRendererConfig = function (config) {
        var videoSourceType = config.videoSourceType, uid = config.uid, channelId = config.channelId;
        var emptyRenderConfig = {
            renders: [],
            shareVideoFrame: this.resizeShareVideoFrame(videoSourceType, channelId, uid),
        };
        var emptyUidMap = new Map([[uid, emptyRenderConfig]]);
        var emptyChannelMap = new Map([[channelId, emptyUidMap]]);
        var renderers = this.renderers;
        var videoSourceMap = renderers.get(videoSourceType);
        if (!videoSourceMap) {
            renderers.set(videoSourceType, emptyChannelMap);
            return emptyUidMap;
        }
        var channelMap = videoSourceMap.get(channelId);
        if (!channelMap) {
            videoSourceMap.set(channelId, emptyUidMap);
            return emptyUidMap;
        }
        var renderConfig = channelMap === null || channelMap === void 0 ? void 0 : channelMap.get(uid);
        if (!renderConfig) {
            channelMap === null || channelMap === void 0 ? void 0 : channelMap.set(uid, emptyRenderConfig);
            (0, Utils_1.logWarn)("ensureRendererMap uid map for channelId:".concat(channelId, "  uid:").concat(uid));
            return emptyUidMap;
        }
        return channelMap;
    };
    /**
     * @ignore
     */
    RendererManager.prototype.resizeShareVideoFrame = function (videoSourceType, channelId, uid, width, height, yStride, uStride, vStride) {
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        if (yStride === void 0) { yStride = 0; }
        if (uStride === void 0) { uStride = 0; }
        if (vStride === void 0) { vStride = 0; }
        return {
            videoSourceType: videoSourceType,
            channelId: channelId,
            uid: uid,
            yBuffer: Buffer.alloc(yStride * height),
            uBuffer: Buffer.alloc((yStride * height) / 4),
            vBuffer: Buffer.alloc((yStride * height) / 4),
            width: width,
            height: height,
            yStride: yStride,
            uStride: uStride,
            vStride: vStride,
        };
    };
    /**
     * @ignore
     */
    RendererManager.prototype.updateVideoFrameCacheInMap = function (config, shareVideoFrame) {
        var _a;
        var rendererConfigMap = this.ensureRendererConfig(config);
        rendererConfigMap
            ? Object.assign((_a = rendererConfigMap.get(config.uid)) !== null && _a !== void 0 ? _a : {}, {
                shareVideoFrame: shareVideoFrame,
            })
            : (0, Utils_1.logWarn)("updateVideoFrameCacheInMap videoSourceType:".concat(config.videoSourceType, " channelId:").concat(config.channelId, " uid:").concat(config.uid, " rendererConfigMap is null"));
    };
    return RendererManager;
}(IRendererManager_1.IRendererManager));
exports.RendererManager = RendererManager;
