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
exports.RtcEngineExInternal = void 0;
var ts_interface_checker_1 = require("ts-interface-checker");
var Utils_1 = require("../../Utils");
var CmviotBase_1 = require("../CmviotBase");
var CmviotMediaBase_1 = require("../CmviotMediaBase");
var ICmviotRtcEngineExImpl_1 = require("../impl/ICmviotRtcEngineExImpl");
var ICmviotRtcEngineImpl_1 = require("../impl/ICmviotRtcEngineImpl");
var CmviotBase_ti_1 = __importDefault(require("../ti/CmviotBase-ti"));
var CmviotMediaBase_ti_1 = __importDefault(require("../ti/CmviotMediaBase-ti"));
var ICmviotRtcEngine_ti_1 = __importDefault(require("../ti/ICmviotRtcEngine-ti"));
var AudioDeviceManagerInternal_1 = require("./AudioDeviceManagerInternal");
var IrisApiEngine_1 = require("./IrisApiEngine");
var LocalSpatialAudioEngineInternal_1 = require("./LocalSpatialAudioEngineInternal");
var MediaEngineInternal_1 = require("./MediaEngineInternal");
var MediaPlayerInternal_1 = require("./MediaPlayerInternal");
var MediaRecorderInternal_1 = require("./MediaRecorderInternal");
var MusicContentCenterInternal_1 = require("./MusicContentCenterInternal");
var checkers = (0, ts_interface_checker_1.createCheckers)(CmviotBase_ti_1.default, CmviotMediaBase_ti_1.default, ICmviotRtcEngine_ti_1.default);
var RtcEngineExInternal = /** @class */ (function (_super) {
    __extends(RtcEngineExInternal, _super);
    function RtcEngineExInternal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._audio_device_manager = new AudioDeviceManagerInternal_1.AudioDeviceManagerInternal();
        _this._video_device_manager = new ICmviotRtcEngineImpl_1.IVideoDeviceManagerImpl();
        _this._media_engine = new MediaEngineInternal_1.MediaEngineInternal();
        _this._music_content_center = new MusicContentCenterInternal_1.MusicContentCenterInternal();
        _this._local_spatial_audio_engine = new LocalSpatialAudioEngineInternal_1.LocalSpatialAudioEngineInternal();
        return _this;
    }
    RtcEngineExInternal.prototype.initialize = function (context) {
        var _a;
        if (Utils_1.CmviotEnv.webEnvReady) {
            // @ts-ignore
            window.CmviotEnv = Utils_1.CmviotEnv;
            if (Utils_1.CmviotEnv.CmviotRendererManager === undefined) {
                var RendererManager = require('../../Renderer/RendererManager').RendererManager;
                Utils_1.CmviotEnv.CmviotRendererManager = new RendererManager();
            }
        }
        (_a = Utils_1.CmviotEnv.CmviotRendererManager) === null || _a === void 0 ? void 0 : _a.enableRender();
        var ret = _super.prototype.initialize.call(this, context);
        IrisApiEngine_1.callIrisApi.call(this, 'RtcEngine_setAppType', {
            appType: 3,
        });
        return ret;
    };
    RtcEngineExInternal.prototype.release = function (sync) {
        var _a;
        if (sync === void 0) { sync = false; }
        Utils_1.CmviotEnv.CmviotElectronBridge.ReleaseRenderer();
        (_a = Utils_1.CmviotEnv.CmviotRendererManager) === null || _a === void 0 ? void 0 : _a.clear();
        Utils_1.CmviotEnv.CmviotRendererManager = undefined;
        this._audio_device_manager.release();
        this._video_device_manager.release();
        this._media_engine.release();
        this._local_spatial_audio_engine.release();
        RtcEngineExInternal._event_handlers = [];
        RtcEngineExInternal._direct_cdn_streaming_event_handler = [];
        RtcEngineExInternal._metadata_observer = [];
        RtcEngineExInternal._audio_encoded_frame_observers = [];
        RtcEngineExInternal._audio_spectrum_observers = [];
        MediaPlayerInternal_1.MediaPlayerInternal._source_observers.clear();
        MediaPlayerInternal_1.MediaPlayerInternal._audio_frame_observers.clear();
        MediaPlayerInternal_1.MediaPlayerInternal._video_frame_observers.clear();
        MediaPlayerInternal_1.MediaPlayerInternal._audio_spectrum_observers.clear();
        MediaRecorderInternal_1.MediaRecorderInternal._observers.clear();
        this.removeAllListeners();
        _super.prototype.release.call(this, sync);
    };
    RtcEngineExInternal.prototype._addListenerPreCheck = function (eventType) {
        var _a, _b, _c, _d, _e;
        var _f, _g, _h, _j, _k;
        if ((_f = checkers.IRtcEngineEventHandler) === null || _f === void 0 ? void 0 : _f.strictTest((_a = {}, _a[eventType] = undefined, _a))) {
            if (RtcEngineExInternal._event_handlers.length === 0) {
                this.registerEventHandler({});
            }
        }
        if ((_g = checkers.IDirectCdnStreamingEventHandler) === null || _g === void 0 ? void 0 : _g.strictTest((_b = {},
            _b[eventType] = undefined,
            _b))) {
            if (RtcEngineExInternal._direct_cdn_streaming_event_handler.length === 0) {
                console.error('Please call `startDirectCdnStreaming` before you want to receive event by `addListener`');
                return false;
            }
        }
        if ((_h = checkers.IMetadataObserver) === null || _h === void 0 ? void 0 : _h.strictTest((_c = {},
            _c[eventType] = undefined,
            _c))) {
            if (RtcEngineExInternal._metadata_observer.length === 0) {
                console.error('Please call `registerMediaMetadataObserver` before you want to receive event by `addListener`');
                return false;
            }
        }
        if ((_j = checkers.IAudioEncodedFrameObserver) === null || _j === void 0 ? void 0 : _j.strictTest((_d = {},
            _d[eventType] = undefined,
            _d))) {
            if (RtcEngineExInternal._audio_encoded_frame_observers.length === 0) {
                console.error('Please call `registerAudioEncodedFrameObserver` before you want to receive event by `addListener`');
                return false;
            }
        }
        if ((_k = checkers.IAudioSpectrumObserver) === null || _k === void 0 ? void 0 : _k.strictTest((_e = {},
            _e[eventType] = undefined,
            _e))) {
            if (RtcEngineExInternal._audio_spectrum_observers.length === 0) {
                this.registerAudioSpectrumObserver({});
            }
        }
        return true;
    };
    RtcEngineExInternal.prototype.addListener = function (eventType, listener) {
        this._addListenerPreCheck(eventType);
        var callback = function (eventProcessor, data) {
            if (eventProcessor.type(data) !== IrisApiEngine_1.EVENT_TYPE.IRtcEngine) {
                return;
            }
            eventProcessor.func.map(function (it) {
                var _a;
                it((_a = {}, _a[eventType] = listener, _a), eventType, data);
            });
        };
        // @ts-ignore
        listener.cmviotCallback = callback;
        IrisApiEngine_1.DeviceEventEmitter.addListener(eventType, callback);
    };
    RtcEngineExInternal.prototype.removeListener = function (eventType, listener) {
        var _a;
        IrisApiEngine_1.DeviceEventEmitter.removeListener(eventType, 
        // @ts-ignore
        (_a = listener === null || listener === void 0 ? void 0 : listener.cmviotCallback) !== null && _a !== void 0 ? _a : listener);
    };
    RtcEngineExInternal.prototype.removeAllListeners = function (eventType) {
        IrisApiEngine_1.DeviceEventEmitter.removeAllListeners(eventType);
    };
    RtcEngineExInternal.prototype.getVersion = function () {
        var apiType = 'RtcEngine_getVersion';
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return {
            build: jsonResults.build,
            version: jsonResults.result,
        };
    };
    RtcEngineExInternal.prototype.registerEventHandler = function (eventHandler) {
        if (!RtcEngineExInternal._event_handlers.find(function (value) { return value === eventHandler; })) {
            RtcEngineExInternal._event_handlers.push(eventHandler);
        }
        return _super.prototype.registerEventHandler.call(this, eventHandler);
    };
    RtcEngineExInternal.prototype.unregisterEventHandler = function (eventHandler) {
        RtcEngineExInternal._event_handlers =
            RtcEngineExInternal._event_handlers.filter(function (value) { return value !== eventHandler; });
        return _super.prototype.unregisterEventHandler.call(this, eventHandler);
    };
    RtcEngineExInternal.prototype.createMediaPlayer = function () {
        // @ts-ignore
        var mediaPlayerId = _super.prototype.createMediaPlayer.call(this);
        return new MediaPlayerInternal_1.MediaPlayerInternal(mediaPlayerId);
    };
    RtcEngineExInternal.prototype.destroyMediaPlayer = function (mediaPlayer) {
        var _a;
        var ret = _super.prototype.destroyMediaPlayer.call(this, mediaPlayer);
        (_a = mediaPlayer.release) === null || _a === void 0 ? void 0 : _a.call(mediaPlayer);
        return ret;
    };
    RtcEngineExInternal.prototype.createMediaRecorder = function (info) {
        // @ts-ignore
        var nativeHandle = _super.prototype.createMediaRecorder.call(this, info);
        return new MediaRecorderInternal_1.MediaRecorderInternal(nativeHandle);
    };
    RtcEngineExInternal.prototype.destroyMediaRecorder = function (mediaRecorder) {
        var _a;
        var ret = _super.prototype.destroyMediaRecorder.call(this, mediaRecorder);
        (_a = mediaRecorder.release) === null || _a === void 0 ? void 0 : _a.call(mediaRecorder);
        return ret;
    };
    RtcEngineExInternal.prototype.startDirectCdnStreaming = function (eventHandler, publishUrl, options) {
        if (!RtcEngineExInternal._direct_cdn_streaming_event_handler.find(function (value) { return value === eventHandler; })) {
            RtcEngineExInternal._direct_cdn_streaming_event_handler.push(eventHandler);
        }
        return _super.prototype.startDirectCdnStreaming.call(this, eventHandler, publishUrl, options);
    };
    RtcEngineExInternal.prototype.registerMediaMetadataObserver = function (observer, type) {
        if (!RtcEngineExInternal._metadata_observer.find(function (value) { return value === observer; })) {
            RtcEngineExInternal._metadata_observer.push(observer);
        }
        return _super.prototype.registerMediaMetadataObserver.call(this, observer, type);
    };
    RtcEngineExInternal.prototype.unregisterMediaMetadataObserver = function (observer, type) {
        RtcEngineExInternal._metadata_observer =
            RtcEngineExInternal._metadata_observer.filter(function (value) { return value !== observer; });
        return _super.prototype.unregisterMediaMetadataObserver.call(this, observer, type);
    };
    RtcEngineExInternal.prototype.getApiTypeFromJoinChannel = function (token, channelId, uid, options) {
        if (Utils_1.CmviotEnv.CmviotRendererManager) {
            Utils_1.CmviotEnv.CmviotRendererManager.defaultRenderConfig.channelId = channelId;
        }
        return 'RtcEngine_joinChannel2';
    };
    RtcEngineExInternal.prototype.getApiTypeFromLeaveChannel = function (options) {
        return options === undefined
            ? 'RtcEngine_leaveChannel'
            : 'RtcEngine_leaveChannel2';
    };
    RtcEngineExInternal.prototype.getApiTypeFromSetClientRole = function (role, options) {
        return options === undefined
            ? 'RtcEngine_setClientRole'
            : 'RtcEngine_setClientRole2';
    };
    RtcEngineExInternal.prototype.getApiTypeFromStartEchoTest = function (config) {
        return 'RtcEngine_startEchoTest3';
    };
    RtcEngineExInternal.prototype.getApiTypeFromStartPreview = function (sourceType) {
        if (sourceType === void 0) { sourceType = CmviotMediaBase_1.VideoSourceType.VideoSourceCameraPrimary; }
        return 'RtcEngine_startPreview2';
    };
    RtcEngineExInternal.prototype.getApiTypeFromStopPreview = function (sourceType) {
        if (sourceType === void 0) { sourceType = CmviotMediaBase_1.VideoSourceType.VideoSourceCameraPrimary; }
        return 'RtcEngine_stopPreview2';
    };
    RtcEngineExInternal.prototype.getApiTypeFromStartAudioRecording = function (config) {
        return 'RtcEngine_startAudioRecording3';
    };
    RtcEngineExInternal.prototype.getApiTypeFromStartAudioMixing = function (filePath, loopback, cycle, startPos) {
        if (startPos === void 0) { startPos = 0; }
        return 'RtcEngine_startAudioMixing2';
    };
    RtcEngineExInternal.prototype.getApiTypeFromEnableDualStreamMode = function (enabled, streamConfig) {
        return streamConfig === undefined
            ? 'RtcEngine_enableDualStreamMode'
            : 'RtcEngine_enableDualStreamMode2';
    };
    RtcEngineExInternal.prototype.getApiTypeFromSetDualStreamMode = function (mode, streamConfig) {
        return streamConfig === undefined
            ? 'RtcEngine_setDualStreamMode'
            : 'RtcEngine_setDualStreamMode2';
    };
    RtcEngineExInternal.prototype.getApiTypeFromLeaveChannelEx = function (connection, options) {
        return 'RtcEngineEx_leaveChannelEx2';
    };
    RtcEngineExInternal.prototype.getApiTypeFromCreateDataStream = function (config) {
        return 'RtcEngine_createDataStream2';
    };
    RtcEngineExInternal.prototype.getApiTypeFromAddVideoWatermark = function (watermarkUrl, options) {
        return 'RtcEngine_addVideoWatermark2';
    };
    RtcEngineExInternal.prototype.getApiTypeFromJoinChannelWithUserAccount = function (token, channelId, userAccount, options) {
        if (Utils_1.CmviotEnv.CmviotRendererManager) {
            Utils_1.CmviotEnv.CmviotRendererManager.defaultRenderConfig.channelId = channelId;
        }
        return options === undefined
            ? 'RtcEngine_joinChannelWithUserAccount'
            : 'RtcEngine_joinChannelWithUserAccount2';
    };
    RtcEngineExInternal.prototype.getApiTypeFromCreateDataStreamEx = function (config, connection) {
        return 'RtcEngineEx_createDataStreamEx2';
    };
    RtcEngineExInternal.prototype.getApiTypeFromStartScreenCaptureBySourceType = function (sourceType, config) {
        return 'RtcEngine_startScreenCapture2';
    };
    RtcEngineExInternal.prototype.getApiTypeFromStopScreenCaptureBySourceType = function (sourceType) {
        return 'RtcEngine_stopScreenCapture2';
    };
    RtcEngineExInternal.prototype.getApiTypeFromPreloadChannelWithUserAccount = function (token, channelId, userAccount) {
        return 'RtcEngine_preloadChannel2';
    };
    RtcEngineExInternal.prototype.getAudioDeviceManager = function () {
        return this._audio_device_manager;
    };
    RtcEngineExInternal.prototype.getVideoDeviceManager = function () {
        return this._video_device_manager;
    };
    RtcEngineExInternal.prototype.getMediaEngine = function () {
        return this._media_engine;
    };
    RtcEngineExInternal.prototype.getMusicContentCenter = function () {
        return this._music_content_center;
    };
    RtcEngineExInternal.prototype.getLocalSpatialAudioEngine = function () {
        return this._local_spatial_audio_engine;
    };
    RtcEngineExInternal.prototype.registerAudioEncodedFrameObserver = function (config, observer) {
        if (!RtcEngineExInternal._audio_encoded_frame_observers.find(function (value) { return value === observer; })) {
            RtcEngineExInternal._audio_encoded_frame_observers.push(observer);
        }
        return _super.prototype.registerAudioEncodedFrameObserver.call(this, config, observer);
    };
    RtcEngineExInternal.prototype.unregisterAudioEncodedFrameObserver = function (observer) {
        RtcEngineExInternal._audio_encoded_frame_observers =
            RtcEngineExInternal._audio_encoded_frame_observers.filter(function (value) { return value !== observer; });
        return _super.prototype.unregisterAudioEncodedFrameObserver.call(this, observer);
    };
    RtcEngineExInternal.prototype.registerAudioSpectrumObserver = function (observer) {
        if (!RtcEngineExInternal._audio_spectrum_observers.find(function (value) { return value === observer; })) {
            RtcEngineExInternal._audio_spectrum_observers.push(observer);
        }
        return _super.prototype.registerAudioSpectrumObserver.call(this, observer);
    };
    RtcEngineExInternal.prototype.unregisterAudioSpectrumObserver = function (observer) {
        RtcEngineExInternal._audio_spectrum_observers =
            RtcEngineExInternal._audio_spectrum_observers.filter(function (value) { return value !== observer; });
        return _super.prototype.unregisterAudioSpectrumObserver.call(this, observer);
    };
    RtcEngineExInternal.prototype.getScreenCaptureSources = function (thumbSize, iconSize, includeScreen) {
        var apiType = this.getApiTypeFromGetScreenCaptureSources(thumbSize, iconSize, includeScreen);
        var jsonParams = {
            thumbSize: thumbSize,
            iconSize: iconSize,
            includeScreen: includeScreen,
            toJSON: function () {
                return {
                    thumbSize: thumbSize,
                    iconSize: iconSize,
                    includeScreen: includeScreen,
                };
            },
        };
        var _a = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams), result = _a.result, sources = _a.sources;
        var screenCaptureSources = result.map(function (value) {
            var _a, _b, _c, _d;
            if (!((_a = value.thumbImage) === null || _a === void 0 ? void 0 : _a.buffer) || !((_b = value.thumbImage) === null || _b === void 0 ? void 0 : _b.length)) {
                value.thumbImage.buffer = undefined;
            }
            else {
                value.thumbImage.buffer = Utils_1.CmviotEnv.CmviotElectronBridge.GetBuffer(value.thumbImage.buffer, value.thumbImage.length);
            }
            if (!((_c = value.iconImage) === null || _c === void 0 ? void 0 : _c.buffer) || !((_d = value.iconImage) === null || _d === void 0 ? void 0 : _d.length)) {
                value.iconImage.buffer = undefined;
            }
            else {
                value.iconImage.buffer = Utils_1.CmviotEnv.CmviotElectronBridge.GetBuffer(value.iconImage.buffer, value.iconImage.length);
            }
            return value;
        });
        IrisApiEngine_1.callIrisApi.call(this, 'RtcEngine_releaseScreenCaptureSources', {
            sources: sources,
        });
        return screenCaptureSources;
    };
    RtcEngineExInternal.prototype.setupLocalVideo = function (canvas) {
        var _a, _b;
        var _c = canvas.sourceType, sourceType = _c === void 0 ? CmviotMediaBase_1.VideoSourceType.VideoSourceCamera : _c, uid = canvas.uid, mediaPlayerId = canvas.mediaPlayerId, view = canvas.view, renderMode = canvas.renderMode, mirrorMode = canvas.mirrorMode;
        if (sourceType === CmviotMediaBase_1.VideoSourceType.VideoSourceMediaPlayer &&
            mediaPlayerId !== undefined) {
            uid = mediaPlayerId;
        }
        return ((_b = (_a = Utils_1.CmviotEnv.CmviotRendererManager) === null || _a === void 0 ? void 0 : _a.setupLocalVideo({
            videoSourceType: sourceType,
            channelId: '',
            uid: uid,
            view: view,
            rendererOptions: {
                contentMode: renderMode,
                mirror: mirrorMode === CmviotBase_1.VideoMirrorModeType.VideoMirrorModeEnabled,
            },
        })) !== null && _b !== void 0 ? _b : -CmviotBase_1.ErrorCodeType.ErrNotInitialized);
    };
    RtcEngineExInternal.prototype.setupRemoteVideo = function (canvas) {
        var _a, _b, _c, _d;
        var _e = canvas.sourceType, sourceType = _e === void 0 ? CmviotMediaBase_1.VideoSourceType.VideoSourceRemote : _e, uid = canvas.uid, view = canvas.view, renderMode = canvas.renderMode, mirrorMode = canvas.mirrorMode;
        return ((_d = (_a = Utils_1.CmviotEnv.CmviotRendererManager) === null || _a === void 0 ? void 0 : _a.setupRemoteVideo({
            videoSourceType: sourceType,
            channelId: (_c = (_b = Utils_1.CmviotEnv.CmviotRendererManager) === null || _b === void 0 ? void 0 : _b.defaultRenderConfig) === null || _c === void 0 ? void 0 : _c.channelId,
            uid: uid,
            view: view,
            rendererOptions: {
                contentMode: renderMode,
                mirror: mirrorMode === CmviotBase_1.VideoMirrorModeType.VideoMirrorModeEnabled,
            },
        })) !== null && _d !== void 0 ? _d : -CmviotBase_1.ErrorCodeType.ErrNotInitialized);
    };
    RtcEngineExInternal.prototype.setupRemoteVideoEx = function (canvas, connection) {
        var _a, _b;
        var _c = canvas.sourceType, sourceType = _c === void 0 ? CmviotMediaBase_1.VideoSourceType.VideoSourceRemote : _c, uid = canvas.uid, view = canvas.view, renderMode = canvas.renderMode, mirrorMode = canvas.mirrorMode;
        var channelId = connection.channelId;
        return ((_b = (_a = Utils_1.CmviotEnv.CmviotRendererManager) === null || _a === void 0 ? void 0 : _a.setupRemoteVideo({
            videoSourceType: sourceType,
            channelId: channelId,
            uid: uid,
            view: view,
            rendererOptions: {
                contentMode: renderMode,
                mirror: mirrorMode === CmviotBase_1.VideoMirrorModeType.VideoMirrorModeEnabled,
            },
        })) !== null && _b !== void 0 ? _b : -CmviotBase_1.ErrorCodeType.ErrNotInitialized);
    };
    RtcEngineExInternal.prototype.setLocalRenderMode = function (renderMode, mirrorMode) {
        var _a, _b;
        if (mirrorMode === void 0) { mirrorMode = CmviotBase_1.VideoMirrorModeType.VideoMirrorModeAuto; }
        return ((_b = (_a = Utils_1.CmviotEnv.CmviotRendererManager) === null || _a === void 0 ? void 0 : _a.setRenderOptionByConfig({
            videoSourceType: CmviotMediaBase_1.VideoSourceType.VideoSourceCamera,
            channelId: '',
            uid: 0,
            rendererOptions: {
                contentMode: renderMode,
                mirror: mirrorMode === CmviotBase_1.VideoMirrorModeType.VideoMirrorModeEnabled,
            },
        })) !== null && _b !== void 0 ? _b : -CmviotBase_1.ErrorCodeType.ErrNotInitialized);
    };
    RtcEngineExInternal.prototype.setRemoteRenderMode = function (uid, renderMode, mirrorMode) {
        var _a, _b, _c;
        return ((_c = (_a = Utils_1.CmviotEnv.CmviotRendererManager) === null || _a === void 0 ? void 0 : _a.setRenderOptionByConfig({
            videoSourceType: CmviotMediaBase_1.VideoSourceType.VideoSourceRemote,
            channelId: (_b = Utils_1.CmviotEnv.CmviotRendererManager) === null || _b === void 0 ? void 0 : _b.defaultRenderConfig.channelId,
            uid: uid,
            rendererOptions: {
                contentMode: renderMode,
                mirror: mirrorMode === CmviotBase_1.VideoMirrorModeType.VideoMirrorModeEnabled,
            },
        })) !== null && _c !== void 0 ? _c : -CmviotBase_1.ErrorCodeType.ErrNotInitialized);
    };
    RtcEngineExInternal.prototype.setRemoteRenderModeEx = function (uid, renderMode, mirrorMode, connection) {
        var _a, _b;
        var channelId = connection.channelId;
        return ((_b = (_a = Utils_1.CmviotEnv.CmviotRendererManager) === null || _a === void 0 ? void 0 : _a.setRenderOptionByConfig({
            videoSourceType: CmviotMediaBase_1.VideoSourceType.VideoSourceRemote,
            channelId: channelId,
            uid: uid,
            rendererOptions: {
                contentMode: renderMode,
                mirror: mirrorMode === CmviotBase_1.VideoMirrorModeType.VideoMirrorModeEnabled,
            },
        })) !== null && _b !== void 0 ? _b : -CmviotBase_1.ErrorCodeType.ErrNotInitialized);
    };
    RtcEngineExInternal.prototype.setLocalVideoMirrorMode = function (mirrorMode) {
        var _a, _b;
        return ((_b = (_a = Utils_1.CmviotEnv.CmviotRendererManager) === null || _a === void 0 ? void 0 : _a.setRenderOptionByConfig({
            videoSourceType: CmviotMediaBase_1.VideoSourceType.VideoSourceCamera,
            channelId: '',
            uid: 0,
            rendererOptions: {
                mirror: mirrorMode === CmviotBase_1.VideoMirrorModeType.VideoMirrorModeEnabled,
            },
        })) !== null && _b !== void 0 ? _b : -CmviotBase_1.ErrorCodeType.ErrNotInitialized);
    };
    RtcEngineExInternal.prototype.destroyRendererByView = function (view) {
        var _a;
        (_a = Utils_1.CmviotEnv.CmviotRendererManager) === null || _a === void 0 ? void 0 : _a.destroyRendererByView(view);
    };
    RtcEngineExInternal.prototype.destroyRendererByConfig = function (videoSourceType, channelId, uid) {
        var _a;
        (_a = Utils_1.CmviotEnv.CmviotRendererManager) === null || _a === void 0 ? void 0 : _a.destroyRenderersByConfig(videoSourceType, channelId, uid);
    };
    RtcEngineExInternal._event_handlers = [];
    RtcEngineExInternal._direct_cdn_streaming_event_handler = [];
    RtcEngineExInternal._metadata_observer = [];
    RtcEngineExInternal._audio_encoded_frame_observers = [];
    RtcEngineExInternal._audio_spectrum_observers = [];
    return RtcEngineExInternal;
}(ICmviotRtcEngineExImpl_1.IRtcEngineExImpl));
exports.RtcEngineExInternal = RtcEngineExInternal;
