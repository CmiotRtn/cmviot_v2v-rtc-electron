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
exports.MediaPlayerInternal = void 0;
var ts_interface_checker_1 = require("ts-interface-checker");
var Utils_1 = require("../../Utils");
var CmviotBase_1 = require("../CmviotBase");
var CmviotMediaBase_1 = require("../CmviotMediaBase");
var ICmviotMediaPlayerImpl_1 = require("../impl/ICmviotMediaPlayerImpl");
var CmviotMediaBase_ti_1 = __importDefault(require("../ti/CmviotMediaBase-ti"));
var ICmviotMediaPlayer_ti_1 = __importDefault(require("../ti/ICmviotMediaPlayer-ti"));
var ICmviotMediaPlayerSource_ti_1 = __importDefault(require("../ti/ICmviotMediaPlayerSource-ti"));
var checkers = (0, ts_interface_checker_1.createCheckers)(CmviotMediaBase_ti_1.default, ICmviotMediaPlayer_ti_1.default, ICmviotMediaPlayerSource_ti_1.default);
var IrisApiEngine_1 = require("./IrisApiEngine");
var MediaPlayerInternal = /** @class */ (function (_super) {
    __extends(MediaPlayerInternal, _super);
    function MediaPlayerInternal(mediaPlayerId) {
        var _this = _super.call(this) || this;
        _this._mediaPlayerId = mediaPlayerId;
        return _this;
    }
    MediaPlayerInternal.prototype.release = function () {
        MediaPlayerInternal._source_observers.delete(this._mediaPlayerId);
        MediaPlayerInternal._audio_frame_observers.delete(this._mediaPlayerId);
        MediaPlayerInternal._video_frame_observers.delete(this._mediaPlayerId);
        MediaPlayerInternal._audio_spectrum_observers.delete(this._mediaPlayerId);
        this.removeAllListeners();
    };
    MediaPlayerInternal.prototype._addListenerPreCheck = function (eventType) {
        var _a, _b, _c, _d;
        var _e, _f, _g, _h, _j, _k, _l, _m;
        if ((_e = checkers.IMediaPlayerSourceObserver) === null || _e === void 0 ? void 0 : _e.strictTest((_a = {},
            _a[eventType] = undefined,
            _a))) {
            if (((_f = MediaPlayerInternal._source_observers.get(this._mediaPlayerId)) === null || _f === void 0 ? void 0 : _f.length) === 0) {
                this.registerPlayerSourceObserver({});
            }
        }
        if ((_g = checkers.IMediaPlayerAudioFrameObserver) === null || _g === void 0 ? void 0 : _g.strictTest((_b = {},
            _b[eventType] = undefined,
            _b))) {
            if (((_h = MediaPlayerInternal._audio_frame_observers.get(this._mediaPlayerId)) === null || _h === void 0 ? void 0 : _h.length) === 0) {
                this.registerAudioFrameObserver({});
            }
        }
        if ((_j = checkers.IMediaPlayerVideoFrameObserver) === null || _j === void 0 ? void 0 : _j.strictTest((_c = {},
            _c[eventType] = undefined,
            _c))) {
            if (((_k = MediaPlayerInternal._video_frame_observers.get(this._mediaPlayerId)) === null || _k === void 0 ? void 0 : _k.length) === 0) {
                this.registerVideoFrameObserver({});
            }
        }
        if ((_l = checkers.IAudioSpectrumObserver) === null || _l === void 0 ? void 0 : _l.strictTest((_d = {},
            _d[eventType] = undefined,
            _d))) {
            if (((_m = MediaPlayerInternal._audio_spectrum_observers.get(this._mediaPlayerId)) === null || _m === void 0 ? void 0 : _m.length) === 0) {
                console.error('Please call `registerMediaPlayerAudioSpectrumObserver` before you want to receive event by `addListener`');
                return false;
            }
        }
        return true;
    };
    MediaPlayerInternal.prototype.addListener = function (eventType, listener) {
        var _this = this;
        this._addListenerPreCheck(eventType);
        var callback = function (eventProcessor, data) {
            if (eventProcessor.type(data) !== IrisApiEngine_1.EVENT_TYPE.IMediaPlayer) {
                return;
            }
            if (data.playerId !== _this._mediaPlayerId) {
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
    MediaPlayerInternal.prototype.removeListener = function (eventType, listener) {
        var _a;
        IrisApiEngine_1.DeviceEventEmitter.removeListener(eventType, 
        // @ts-ignore
        (_a = listener === null || listener === void 0 ? void 0 : listener.cmviotCallback) !== null && _a !== void 0 ? _a : listener);
    };
    MediaPlayerInternal.prototype.removeAllListeners = function (eventType) {
        IrisApiEngine_1.DeviceEventEmitter.removeAllListeners(eventType);
    };
    MediaPlayerInternal.prototype.getMediaPlayerId = function () {
        return this._mediaPlayerId;
    };
    MediaPlayerInternal.prototype.registerPlayerSourceObserver = function (observer) {
        var observers = MediaPlayerInternal._source_observers.get(this._mediaPlayerId);
        if (observers === undefined) {
            observers = [];
            MediaPlayerInternal._source_observers.set(this._mediaPlayerId, observers);
        }
        if (!observers.find(function (value) { return value === observer; })) {
            observers.push(observer);
        }
        return _super.prototype.registerPlayerSourceObserver.call(this, observer);
    };
    MediaPlayerInternal.prototype.unregisterPlayerSourceObserver = function (observer) {
        var observers = MediaPlayerInternal._source_observers.get(this._mediaPlayerId);
        if (observers === undefined)
            return -CmviotBase_1.ErrorCodeType.ErrFailed;
        MediaPlayerInternal._source_observers.set(this._mediaPlayerId, observers.filter(function (value) { return value !== observer; }));
        return _super.prototype.unregisterPlayerSourceObserver.call(this, observer);
    };
    MediaPlayerInternal.prototype.registerAudioFrameObserver = function (observer, mode) {
        if (mode === void 0) { mode = CmviotMediaBase_1.RawAudioFrameOpModeType.RawAudioFrameOpModeReadOnly; }
        var observers = MediaPlayerInternal._audio_frame_observers.get(this._mediaPlayerId);
        if (observers === undefined) {
            observers = [];
            MediaPlayerInternal._audio_frame_observers.set(this._mediaPlayerId, observers);
        }
        if (!observers.find(function (value) { return value === observer; })) {
            observers.push(observer);
        }
        return _super.prototype.registerAudioFrameObserver.call(this, observer, mode);
    };
    MediaPlayerInternal.prototype.unregisterAudioFrameObserver = function (observer) {
        var observers = MediaPlayerInternal._audio_frame_observers.get(this._mediaPlayerId);
        if (observers === undefined)
            return -CmviotBase_1.ErrorCodeType.ErrFailed;
        MediaPlayerInternal._audio_frame_observers.set(this._mediaPlayerId, observers.filter(function (value) { return value !== observer; }));
        return _super.prototype.unregisterAudioFrameObserver.call(this, observer);
    };
    MediaPlayerInternal.prototype.registerVideoFrameObserver = function (observer) {
        var observers = MediaPlayerInternal._video_frame_observers.get(this._mediaPlayerId);
        if (observers === undefined) {
            observers = [];
            MediaPlayerInternal._video_frame_observers.set(this._mediaPlayerId, observers);
        }
        if (!observers.find(function (value) { return value === observer; })) {
            observers.push(observer);
        }
        return _super.prototype.registerVideoFrameObserver.call(this, observer);
    };
    MediaPlayerInternal.prototype.unregisterVideoFrameObserver = function (observer) {
        var observers = MediaPlayerInternal._video_frame_observers.get(this._mediaPlayerId);
        if (observers === undefined)
            return -CmviotBase_1.ErrorCodeType.ErrFailed;
        MediaPlayerInternal._video_frame_observers.set(this._mediaPlayerId, observers.filter(function (value) { return value !== observer; }));
        return _super.prototype.unregisterVideoFrameObserver.call(this, observer);
    };
    MediaPlayerInternal.prototype.registerMediaPlayerAudioSpectrumObserver = function (observer, intervalInMS) {
        var observers = MediaPlayerInternal._audio_spectrum_observers.get(this._mediaPlayerId);
        if (observers === undefined) {
            observers = [];
            MediaPlayerInternal._audio_spectrum_observers.set(this._mediaPlayerId, observers);
        }
        if (!observers.find(function (value) { return value === observer; })) {
            observers.push(observer);
        }
        return _super.prototype.registerMediaPlayerAudioSpectrumObserver.call(this, observer, intervalInMS);
    };
    MediaPlayerInternal.prototype.unregisterMediaPlayerAudioSpectrumObserver = function (observer) {
        var observers = MediaPlayerInternal._audio_spectrum_observers.get(this._mediaPlayerId);
        if (observers === undefined)
            return -CmviotBase_1.ErrorCodeType.ErrFailed;
        MediaPlayerInternal._audio_spectrum_observers.set(this._mediaPlayerId, observers.filter(function (value) { return value !== observer; }));
        return _super.prototype.unregisterMediaPlayerAudioSpectrumObserver.call(this, observer);
    };
    MediaPlayerInternal.prototype.getApiTypeFromSetPlayerOptionInInt = function (key, value) {
        return 'MediaPlayer_setPlayerOption';
    };
    MediaPlayerInternal.prototype.getApiTypeFromSetPlayerOptionInString = function (key, value) {
        return 'MediaPlayer_setPlayerOption2';
    };
    MediaPlayerInternal.prototype.setView = function (view) {
        var _a, _b;
        (0, Utils_1.logWarn)('Also can use other api setupLocalVideo');
        return ((_b = (_a = Utils_1.CmviotEnv.CmviotRendererManager) === null || _a === void 0 ? void 0 : _a.setupVideo({
            videoSourceType: CmviotMediaBase_1.VideoSourceType.VideoSourceMediaPlayer,
            uid: this._mediaPlayerId,
            view: view,
        })) !== null && _b !== void 0 ? _b : -CmviotBase_1.ErrorCodeType.ErrNotInitialized);
    };
    MediaPlayerInternal.prototype.setRenderMode = function (renderMode) {
        var _a, _b;
        (0, Utils_1.logWarn)('Also can use other api setRenderOption or setRenderOptionByConfig');
        return ((_b = (_a = Utils_1.CmviotEnv.CmviotRendererManager) === null || _a === void 0 ? void 0 : _a.setRenderOptionByConfig({
            videoSourceType: CmviotMediaBase_1.VideoSourceType.VideoSourceMediaPlayer,
            uid: this._mediaPlayerId,
            rendererOptions: {
                contentMode: renderMode === CmviotMediaBase_1.RenderModeType.RenderModeFit
                    ? CmviotMediaBase_1.RenderModeType.RenderModeFit
                    : CmviotMediaBase_1.RenderModeType.RenderModeHidden,
                mirror: true,
            },
        })) !== null && _b !== void 0 ? _b : -CmviotBase_1.ErrorCodeType.ErrNotInitialized);
    };
    MediaPlayerInternal._source_observers = new Map();
    MediaPlayerInternal._audio_frame_observers = new Map();
    MediaPlayerInternal._video_frame_observers = new Map();
    MediaPlayerInternal._audio_spectrum_observers = new Map();
    return MediaPlayerInternal;
}(ICmviotMediaPlayerImpl_1.IMediaPlayerImpl));
exports.MediaPlayerInternal = MediaPlayerInternal;
