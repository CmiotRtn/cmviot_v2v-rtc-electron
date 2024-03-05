"use strict";
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
exports.emitEvent = exports.callIrisApi = exports.EVENT_PROCESSORS = exports.EVENT_TYPE = exports.isDebuggable = exports.setDebuggable = exports.DeviceEventEmitter = void 0;
var eventemitter3_1 = __importDefault(require("eventemitter3"));
var json_bigint_1 = __importDefault(require("json-bigint"));
var Utils_1 = require("../../Utils");
var CmviotBaseImpl_1 = require("../impl/CmviotBaseImpl");
var CmviotMediaBaseImpl_1 = require("../impl/CmviotMediaBaseImpl");
var ICmviotMediaPlayerImpl_1 = require("../impl/ICmviotMediaPlayerImpl");
var ICmviotMediaPlayerSourceImpl_1 = require("../impl/ICmviotMediaPlayerSourceImpl");
var ICmviotMusicContentCenterImpl_1 = require("../impl/ICmviotMusicContentCenterImpl");
var ICmviotRtcEngineImpl_1 = require("../impl/ICmviotRtcEngineImpl");
var MediaEngineInternal_1 = require("./MediaEngineInternal");
var MediaPlayerInternal_1 = require("./MediaPlayerInternal");
var MediaRecorderInternal_1 = require("./MediaRecorderInternal");
var MusicContentCenterInternal_1 = require("./MusicContentCenterInternal");
var RtcEngineExInternal_1 = require("./RtcEngineExInternal");
// @ts-ignore
exports.DeviceEventEmitter = new eventemitter3_1.default();
var CmviotRtcNg = Utils_1.CmviotEnv.CmviotElectronBridge;
CmviotRtcNg.OnEvent('call_back_with_buffer', function () {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    try {
        handleEvent.apply(void 0, params);
    }
    catch (e) {
        console.error(e);
    }
});
/**
 * @internal
 */
function setDebuggable(flag) {
    Utils_1.CmviotEnv.enableLogging = flag;
    Utils_1.CmviotEnv.enableDebugLogging = flag;
}
exports.setDebuggable = setDebuggable;
/**
 * @internal
 */
function isDebuggable() {
    return Utils_1.CmviotEnv.enableLogging && Utils_1.CmviotEnv.enableDebugLogging;
}
exports.isDebuggable = isDebuggable;
var EVENT_TYPE;
(function (EVENT_TYPE) {
    EVENT_TYPE[EVENT_TYPE["IMediaEngine"] = 0] = "IMediaEngine";
    EVENT_TYPE[EVENT_TYPE["IMediaPlayer"] = 1] = "IMediaPlayer";
    EVENT_TYPE[EVENT_TYPE["IMediaRecorder"] = 2] = "IMediaRecorder";
    EVENT_TYPE[EVENT_TYPE["IRtcEngine"] = 3] = "IRtcEngine";
    EVENT_TYPE[EVENT_TYPE["IMusicContentCenter"] = 4] = "IMusicContentCenter";
})(EVENT_TYPE = exports.EVENT_TYPE || (exports.EVENT_TYPE = {}));
/**
 * @internal
 */
exports.EVENT_PROCESSORS = {
    IAudioFrameObserver: {
        suffix: 'AudioFrameObserver_',
        type: function () { return EVENT_TYPE.IMediaEngine; },
        func: [CmviotMediaBaseImpl_1.processIAudioFrameObserver, CmviotMediaBaseImpl_1.processIAudioFrameObserverBase],
        preprocess: function (event, data, buffers) {
            if (data.audioFrame) {
                data.audioFrame.buffer = buffers[0];
            }
        },
        handlers: function () { return MediaEngineInternal_1.MediaEngineInternal._audio_frame_observers; },
    },
    IVideoFrameObserver: {
        suffix: 'VideoFrameObserver_',
        type: function () { return EVENT_TYPE.IMediaEngine; },
        func: [CmviotMediaBaseImpl_1.processIVideoFrameObserver],
        preprocess: function (event, data, buffers) {
            if (data.videoFrame) {
                data.videoFrame.yBuffer = buffers[0];
                data.videoFrame.uBuffer = buffers[1];
                data.videoFrame.vBuffer = buffers[2];
                data.videoFrame.metadata_buffer = buffers[3];
                data.videoFrame.alphaBuffer = buffers[4];
            }
        },
        handlers: function () { return MediaEngineInternal_1.MediaEngineInternal._video_frame_observers; },
    },
    IAudioSpectrumObserver: {
        suffix: 'AudioSpectrumObserver_',
        type: function (data) {
            return data.playerId === 0 ? EVENT_TYPE.IRtcEngine : EVENT_TYPE.IMediaPlayer;
        },
        func: [CmviotMediaBaseImpl_1.processIAudioSpectrumObserver],
        handlers: function (data) {
            return data.playerId === 0
                ? RtcEngineExInternal_1.RtcEngineExInternal._audio_spectrum_observers
                : MediaPlayerInternal_1.MediaPlayerInternal._audio_spectrum_observers.get(data.playerId);
        },
    },
    IAudioEncodedFrameObserver: {
        suffix: 'AudioEncodedFrameObserver_',
        type: function () { return EVENT_TYPE.IRtcEngine; },
        func: [CmviotBaseImpl_1.processIAudioEncodedFrameObserver],
        preprocess: function (event, data, buffers) {
            switch (event) {
                case 'OnRecordAudioEncodedFrame':
                case 'OnPlaybackAudioEncodedFrame':
                case 'OnMixedAudioEncodedFrame':
                    data.frameBuffer = buffers[0];
                    break;
            }
        },
        handlers: function () { return RtcEngineExInternal_1.RtcEngineExInternal._audio_encoded_frame_observers; },
    },
    IVideoEncodedFrameObserver: {
        suffix: 'VideoEncodedFrameObserver_',
        type: function () { return EVENT_TYPE.IMediaEngine; },
        func: [CmviotMediaBaseImpl_1.processIVideoEncodedFrameObserver],
        preprocess: function (event, data, buffers) {
            switch (event) {
                case 'onEncodedVideoFrameReceived':
                    data.imageBuffer = buffers[0];
                    break;
            }
        },
        handlers: function () { return MediaEngineInternal_1.MediaEngineInternal._video_encoded_frame_observers; },
    },
    IMediaPlayerSourceObserver: {
        suffix: 'MediaPlayerSourceObserver_',
        type: function () { return EVENT_TYPE.IMediaPlayer; },
        func: [ICmviotMediaPlayerSourceImpl_1.processIMediaPlayerSourceObserver],
        handlers: function (data) {
            return MediaPlayerInternal_1.MediaPlayerInternal._source_observers.get(data.playerId);
        },
    },
    IAudioPcmFrameSink: {
        suffix: 'AudioPcmFrameSink_',
        type: function () { return EVENT_TYPE.IMediaPlayer; },
        func: [CmviotMediaBaseImpl_1.processIAudioPcmFrameSink],
        preprocess: function (event, data, buffers) {
            var _a;
            if (data.frame) {
                data.frame.data_ = Array.from((_a = buffers[0]) !== null && _a !== void 0 ? _a : []);
            }
        },
        handlers: function (data) {
            return MediaPlayerInternal_1.MediaPlayerInternal._audio_frame_observers.get(data.playerId);
        },
    },
    IMediaPlayerVideoFrameObserver: {
        suffix: 'MediaPlayerVideoFrameObserver_',
        type: function () { return EVENT_TYPE.IMediaPlayer; },
        func: [ICmviotMediaPlayerImpl_1.processIMediaPlayerVideoFrameObserver],
        preprocess: function (event, data, buffers) {
            if (data.frame) {
                data.frame.yBuffer = buffers[0];
                data.frame.uBuffer = buffers[1];
                data.frame.vBuffer = buffers[2];
                data.frame.metadata_buffer = buffers[3];
                data.frame.alphaBuffer = buffers[4];
            }
        },
        handlers: function (data) {
            return MediaPlayerInternal_1.MediaPlayerInternal._video_frame_observers.get(data.playerId);
        },
    },
    IMediaRecorderObserver: {
        suffix: 'MediaRecorderObserver_',
        type: function () { return EVENT_TYPE.IMediaRecorder; },
        func: [CmviotMediaBaseImpl_1.processIMediaRecorderObserver],
        handlers: function (data) { return [
            MediaRecorderInternal_1.MediaRecorderInternal._observers.get(data.nativeHandle),
        ]; },
    },
    IMetadataObserver: {
        suffix: 'MetadataObserver_',
        type: function () { return EVENT_TYPE.IRtcEngine; },
        func: [ICmviotRtcEngineImpl_1.processIMetadataObserver],
        preprocess: function (event, data, buffers) {
            switch (event) {
                case 'onMetadataReceived':
                    if (data.metadata) {
                        data.metadata.buffer = buffers[0];
                    }
                    break;
            }
        },
        handlers: function () { return RtcEngineExInternal_1.RtcEngineExInternal._metadata_observer; },
    },
    IDirectCdnStreamingEventHandler: {
        suffix: 'DirectCdnStreamingEventHandler_',
        type: function () { return EVENT_TYPE.IRtcEngine; },
        func: [ICmviotRtcEngineImpl_1.processIDirectCdnStreamingEventHandler],
        handlers: function () { return RtcEngineExInternal_1.RtcEngineExInternal._direct_cdn_streaming_event_handler; },
    },
    IRtcEngineEventHandler: {
        suffix: 'RtcEngineEventHandler_',
        type: function () { return EVENT_TYPE.IRtcEngine; },
        func: [ICmviotRtcEngineImpl_1.processIRtcEngineEventHandler],
        preprocess: function (event, data, buffers) {
            switch (event) {
                case 'onStreamMessage':
                case 'onStreamMessageEx':
                    data.data = buffers[0];
                    break;
            }
        },
        handlers: function () { return RtcEngineExInternal_1.RtcEngineExInternal._event_handlers; },
    },
    IMusicContentCenterEventHandler: {
        suffix: 'MusicContentCenterEventHandler_',
        type: function () { return EVENT_TYPE.IMusicContentCenter; },
        func: [ICmviotMusicContentCenterImpl_1.processIMusicContentCenterEventHandler],
        preprocess: function (event, data, buffers) {
            switch (event) {
                case 'onMusicCollectionResult': {
                    var result = data.result;
                    data.result = new MusicContentCenterInternal_1.MusicCollectionInternal(result);
                    break;
                }
            }
        },
        handlers: function () { return MusicContentCenterInternal_1.MusicContentCenterInternal._event_handlers; },
    },
};
// some events are not needed, so ignore them
function isIgnoredEvent(event, data) {
    if (event === 'onLocalVideoStats' && 'connection' in data) {
        return true;
    }
    else {
        return false;
    }
}
function handleEvent() {
    var _a, _b;
    var _c = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        _c[_i] = arguments[_i];
    }
    var event = _c[0], data = _c[1], buffers = _c[2];
    if (isDebuggable()) {
        console.info('onEvent', event, data, buffers);
    }
    var _data;
    try {
        _data = (_a = json_bigint_1.default.parse(data)) !== null && _a !== void 0 ? _a : {};
    }
    catch (e) {
        _data = {};
    }
    var _event = event;
    var processor = exports.EVENT_PROCESSORS.IRtcEngineEventHandler;
    Object.values(exports.EVENT_PROCESSORS).some(function (it) {
        var p = it;
        if (_event.startsWith(p.suffix) &&
            processor.handlers(_data) !== undefined) {
            processor = p;
            var reg = new RegExp("^".concat(processor.suffix), 'g');
            _event = _event.replace(reg, '');
            return true;
        }
        return false;
    });
    if (_event.endsWith('Ex')) {
        _event = _event.replace(/Ex$/g, '');
    }
    if (isIgnoredEvent(_event, _data)) {
        return false;
    }
    var _buffers = buffers;
    if (processor.preprocess) {
        processor.preprocess(_event, _data, _buffers);
    }
    if (processor.handlers) {
        (_b = processor.handlers(_data)) === null || _b === void 0 ? void 0 : _b.map(function (value) {
            if (value) {
                processor.func.map(function (it) {
                    it(value, _event, _data);
                });
            }
        });
    }
    emitEvent(_event, processor, _data);
    return true;
}
/**
 * @internal
 */
function callIrisApi(funcName, params) {
    var _a, _b;
    try {
        var buffers = [];
        if (funcName.startsWith('MediaEngine_')) {
            switch (funcName) {
                case 'MediaEngine_pushAudioFrame':
                case 'MediaEngine_pushCaptureAudioFrame':
                case 'MediaEngine_pushReverseAudioFrame':
                case 'MediaEngine_pushDirectAudioFrame':
                    // frame.buffer
                    buffers.push(params.frame.buffer);
                    break;
                case 'MediaEngine_pushVideoFrame':
                    // frame.buffer
                    buffers.push(params.frame.buffer);
                    // frame.eglContext
                    buffers.push(Buffer.from(''));
                    // frame.metadata_buffer
                    buffers.push(Buffer.from(''));
                    // frame.alphaBuffer
                    buffers.push(params.frame.alphaBuffer);
                    break;
                case 'MediaEngine_pushEncodedVideoImage':
                    // imageBuffer
                    buffers.push(params.imageBuffer);
                    break;
            }
        }
        else if (funcName.startsWith('MediaPlayer_') ||
            funcName.startsWith('MusicPlayer_')) {
            // @ts-ignore
            params.mediaPlayerId = this.getMediaPlayerId();
            var json_1 = (_a = params.toJSON) === null || _a === void 0 ? void 0 : _a.call();
            params.toJSON = function () {
                return __assign(__assign({}, json_1), { playerId: params.mediaPlayerId });
            };
        }
        else if (funcName.startsWith('MediaRecorder_')) {
            // @ts-ignore
            params.nativeHandle = this.nativeHandle;
            var json_2 = (_b = params.toJSON) === null || _b === void 0 ? void 0 : _b.call();
            params.toJSON = function () {
                return __assign(__assign({}, json_2), { nativeHandle: params.nativeHandle });
            };
        }
        else if (funcName.startsWith('RtcEngine_')) {
            switch (funcName) {
                case 'RtcEngine_initialize':
                    CmviotRtcNg.InitializeEnv();
                    break;
                case 'RtcEngine_release':
                    CmviotRtcNg.CallApi(funcName, json_bigint_1.default.stringify(params), buffers, buffers.length);
                    CmviotRtcNg.ReleaseEnv();
                    return;
                case 'RtcEngine_sendMetaData':
                    // metadata.buffer
                    buffers.push(params.metadata.buffer);
                    break;
                case 'RtcEngine_sendStreamMessage':
                case 'RtcEngine_sendStreamMessageEx':
                    // data
                    buffers.push(params.data);
                    break;
                case 'RtcEngine_destroyMediaPlayer':
                    params.mediaPlayerId = params.media_player.getMediaPlayerId();
                    params.toJSON = function () {
                        return { playerId: params.mediaPlayerId };
                    };
                    break;
                case 'RtcEngine_destroyMediaRecorder':
                    // @ts-ignore
                    params.nativeHandle = this.nativeHandle;
                    params.toJSON = function () {
                        return { nativeHandle: params.nativeHandle };
                    };
                    break;
            }
        }
        var _c = CmviotRtcNg.CallApi(funcName, json_bigint_1.default.stringify(params), buffers, buffers.length), callApiReturnCode = _c.callApiReturnCode, callApiResult = _c.callApiResult;
        var ret = callApiResult;
        if (ret !== undefined && ret !== null && ret !== '') {
            var retObj = json_bigint_1.default.parse(ret);
            if (isDebuggable()) {
                if (typeof retObj.result === 'number' && retObj.result < 0) {
                    console.error('callApi', funcName, json_bigint_1.default.stringify(params), ret);
                }
                else {
                    console.debug('callApi', funcName, json_bigint_1.default.stringify(params), ret);
                }
            }
            return retObj;
        }
        else {
            if (isDebuggable()) {
                console.error('callApi', funcName, json_bigint_1.default.stringify(params), callApiReturnCode);
            }
            else {
                console.warn('callApi', funcName, json_bigint_1.default.stringify(params), callApiReturnCode);
            }
            return { result: callApiReturnCode };
        }
    }
    catch (e) {
        if (isDebuggable()) {
            console.error('callApi', funcName, json_bigint_1.default.stringify(params), e);
        }
        else {
            console.warn('callApi', funcName, json_bigint_1.default.stringify(params), e);
        }
    }
    return {};
}
exports.callIrisApi = callIrisApi;
/**
 * @internal
 */
function emitEvent(eventType, eventProcessor, data) {
    exports.DeviceEventEmitter.emit(eventType, eventProcessor, data);
}
exports.emitEvent = emitEvent;
