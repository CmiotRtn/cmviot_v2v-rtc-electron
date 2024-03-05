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
exports.MediaRecorderInternal = void 0;
var ts_interface_checker_1 = require("ts-interface-checker");
var CmviotBase_1 = require("../CmviotBase");
var ICmviotMediaRecorderImpl_1 = require("../impl/ICmviotMediaRecorderImpl");
var CmviotMediaBase_ti_1 = __importDefault(require("../ti/CmviotMediaBase-ti"));
var checkers = (0, ts_interface_checker_1.createCheckers)(CmviotMediaBase_ti_1.default);
var IrisApiEngine_1 = require("./IrisApiEngine");
var MediaRecorderInternal = /** @class */ (function (_super) {
    __extends(MediaRecorderInternal, _super);
    function MediaRecorderInternal(nativeHandle) {
        var _this = _super.call(this) || this;
        _this._nativeHandle = nativeHandle;
        return _this;
    }
    MediaRecorderInternal.prototype.release = function () {
        MediaRecorderInternal._observers.delete(this._nativeHandle);
        this.removeAllListeners();
    };
    Object.defineProperty(MediaRecorderInternal.prototype, "nativeHandle", {
        get: function () {
            return this._nativeHandle;
        },
        enumerable: false,
        configurable: true
    });
    MediaRecorderInternal.prototype.setMediaRecorderObserver = function (callback) {
        var key = this._nativeHandle;
        if (MediaRecorderInternal._observers.has(key)) {
            return CmviotBase_1.ErrorCodeType.ErrOk;
        }
        MediaRecorderInternal._observers.set(key, callback);
        return _super.prototype.setMediaRecorderObserver.call(this, callback);
    };
    MediaRecorderInternal.prototype._addListenerPreCheck = function (eventType) {
        var _a;
        var _b;
        if ((_b = checkers.IMediaRecorderObserver) === null || _b === void 0 ? void 0 : _b.strictTest((_a = {},
            _a[eventType] = undefined,
            _a))) {
            if (MediaRecorderInternal._observers.get(this._nativeHandle) === undefined) {
                this.setMediaRecorderObserver({});
            }
        }
        return true;
    };
    MediaRecorderInternal.prototype.addListener = function (eventType, listener) {
        var _this = this;
        this._addListenerPreCheck(eventType);
        var callback = function (eventProcessor, data) {
            if (eventProcessor.type(data) !== IrisApiEngine_1.EVENT_TYPE.IMediaRecorder) {
                return;
            }
            if (data.nativeHandle !== _this._nativeHandle) {
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
    MediaRecorderInternal.prototype.removeListener = function (eventType, listener) {
        var _a;
        IrisApiEngine_1.DeviceEventEmitter.removeListener(eventType, 
        // @ts-ignore
        (_a = listener === null || listener === void 0 ? void 0 : listener.cmviotCallback) !== null && _a !== void 0 ? _a : listener);
    };
    MediaRecorderInternal.prototype.removeAllListeners = function (eventType) {
        IrisApiEngine_1.DeviceEventEmitter.removeAllListeners(eventType);
    };
    MediaRecorderInternal._observers = new Map();
    return MediaRecorderInternal;
}(ICmviotMediaRecorderImpl_1.IMediaRecorderImpl));
exports.MediaRecorderInternal = MediaRecorderInternal;
