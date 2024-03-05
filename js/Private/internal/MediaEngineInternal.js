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
exports.MediaEngineInternal = void 0;
var ts_interface_checker_1 = require("ts-interface-checker");
var ICmviotMediaEngineImpl_1 = require("../impl/ICmviotMediaEngineImpl");
var CmviotMediaBase_ti_1 = __importDefault(require("../ti/CmviotMediaBase-ti"));
var checkers = (0, ts_interface_checker_1.createCheckers)(CmviotMediaBase_ti_1.default);
var IrisApiEngine_1 = require("./IrisApiEngine");
var MediaEngineInternal = /** @class */ (function (_super) {
    __extends(MediaEngineInternal, _super);
    function MediaEngineInternal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaEngineInternal.prototype.registerAudioFrameObserver = function (observer) {
        if (!MediaEngineInternal._audio_frame_observers.find(function (value) { return value === observer; })) {
            MediaEngineInternal._audio_frame_observers.push(observer);
        }
        return _super.prototype.registerAudioFrameObserver.call(this, observer);
    };
    MediaEngineInternal.prototype.unregisterAudioFrameObserver = function (observer) {
        MediaEngineInternal._audio_frame_observers =
            MediaEngineInternal._audio_frame_observers.filter(function (value) { return value !== observer; });
        return _super.prototype.unregisterAudioFrameObserver.call(this, observer);
    };
    MediaEngineInternal.prototype.registerVideoFrameObserver = function (observer) {
        if (!MediaEngineInternal._video_frame_observers.find(function (value) { return value === observer; })) {
            MediaEngineInternal._video_frame_observers.push(observer);
        }
        return _super.prototype.registerVideoFrameObserver.call(this, observer);
    };
    MediaEngineInternal.prototype.unregisterVideoFrameObserver = function (observer) {
        MediaEngineInternal._video_frame_observers =
            MediaEngineInternal._video_frame_observers.filter(function (value) { return value !== observer; });
        return _super.prototype.unregisterVideoFrameObserver.call(this, observer);
    };
    MediaEngineInternal.prototype.registerVideoEncodedFrameObserver = function (observer) {
        if (!MediaEngineInternal._video_encoded_frame_observers.find(function (value) { return value === observer; })) {
            MediaEngineInternal._video_encoded_frame_observers.push(observer);
        }
        return _super.prototype.registerVideoEncodedFrameObserver.call(this, observer);
    };
    MediaEngineInternal.prototype.unregisterVideoEncodedFrameObserver = function (observer) {
        MediaEngineInternal._video_encoded_frame_observers =
            MediaEngineInternal._video_encoded_frame_observers.filter(function (value) { return value !== observer; });
        return _super.prototype.unregisterVideoEncodedFrameObserver.call(this, observer);
    };
    MediaEngineInternal.prototype.release = function () {
        MediaEngineInternal._audio_frame_observers = [];
        MediaEngineInternal._video_frame_observers = [];
        MediaEngineInternal._video_encoded_frame_observers = [];
        this.removeAllListeners();
        _super.prototype.release.call(this);
    };
    MediaEngineInternal.prototype._addListenerPreCheck = function (eventType) {
        var _a, _b, _c;
        var _d, _e, _f;
        if ((_d = checkers.IAudioFrameObserver) === null || _d === void 0 ? void 0 : _d.strictTest((_a = {},
            _a[eventType] = undefined,
            _a))) {
            if (MediaEngineInternal._audio_frame_observers.length === 0) {
                this.registerAudioFrameObserver({});
            }
        }
        if ((_e = checkers.IVideoFrameObserver) === null || _e === void 0 ? void 0 : _e.strictTest((_b = {},
            _b[eventType] = undefined,
            _b))) {
            if (MediaEngineInternal._video_frame_observers.length === 0) {
                this.registerVideoFrameObserver({});
            }
        }
        if ((_f = checkers.IVideoEncodedFrameObserver) === null || _f === void 0 ? void 0 : _f.strictTest((_c = {},
            _c[eventType] = undefined,
            _c))) {
            if (MediaEngineInternal._video_encoded_frame_observers.length === 0) {
                this.registerVideoEncodedFrameObserver({});
            }
        }
        return true;
    };
    MediaEngineInternal.prototype.addListener = function (eventType, listener) {
        this._addListenerPreCheck(eventType);
        var callback = function (eventProcessor, data) {
            if (eventProcessor.type(data) !== IrisApiEngine_1.EVENT_TYPE.IMediaEngine) {
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
    MediaEngineInternal.prototype.removeListener = function (eventType, listener) {
        var _a;
        IrisApiEngine_1.DeviceEventEmitter.removeListener(eventType, 
        // @ts-ignore
        (_a = listener === null || listener === void 0 ? void 0 : listener.cmviotCallback) !== null && _a !== void 0 ? _a : listener);
    };
    MediaEngineInternal.prototype.removeAllListeners = function (eventType) {
        IrisApiEngine_1.DeviceEventEmitter.removeAllListeners(eventType);
    };
    MediaEngineInternal._audio_frame_observers = [];
    MediaEngineInternal._video_frame_observers = [];
    MediaEngineInternal._video_encoded_frame_observers = [];
    return MediaEngineInternal;
}(ICmviotMediaEngineImpl_1.IMediaEngineImpl));
exports.MediaEngineInternal = MediaEngineInternal;
