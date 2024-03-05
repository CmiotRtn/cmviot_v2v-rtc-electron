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
exports.MusicCollectionInternal = exports.MusicPlayerInternal = exports.MusicContentCenterInternal = void 0;
var ts_interface_checker_1 = require("ts-interface-checker");
var ICmviotMusicContentCenter_1 = require("../ICmviotMusicContentCenter");
var ICmviotMusicContentCenterImpl_1 = require("../impl/ICmviotMusicContentCenterImpl");
var ICmviotMusicContentCenter_ti_1 = __importDefault(require("../ti/ICmviotMusicContentCenter-ti"));
var checkers = (0, ts_interface_checker_1.createCheckers)(ICmviotMusicContentCenter_ti_1.default);
var IrisApiEngine_1 = require("./IrisApiEngine");
var MediaPlayerInternal_1 = require("./MediaPlayerInternal");
var MusicContentCenterInternal = /** @class */ (function (_super) {
    __extends(MusicContentCenterInternal, _super);
    function MusicContentCenterInternal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MusicContentCenterInternal.prototype._addListenerPreCheck = function (eventType) {
        var _a;
        var _b;
        if ((_b = checkers.IMusicContentCenterEventHandler) === null || _b === void 0 ? void 0 : _b.strictTest((_a = {},
            _a[eventType] = undefined,
            _a))) {
            if (MusicContentCenterInternal._event_handlers.length === 0) {
                this.registerEventHandler({});
            }
        }
        return true;
    };
    MusicContentCenterInternal.prototype.addListener = function (eventType, listener) {
        this._addListenerPreCheck(eventType);
        var callback = function (eventProcessor, data) {
            if (eventProcessor.type(data) !== IrisApiEngine_1.EVENT_TYPE.IMusicContentCenter) {
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
    MusicContentCenterInternal.prototype.removeListener = function (eventType, listener) {
        var _a;
        IrisApiEngine_1.DeviceEventEmitter.removeListener(eventType, 
        // @ts-ignore
        (_a = listener === null || listener === void 0 ? void 0 : listener.cmviotCallback) !== null && _a !== void 0 ? _a : listener);
    };
    MusicContentCenterInternal.prototype.removeAllListeners = function (eventType) {
        IrisApiEngine_1.DeviceEventEmitter.removeAllListeners(eventType);
    };
    MusicContentCenterInternal.prototype.registerEventHandler = function (eventHandler) {
        if (!MusicContentCenterInternal._event_handlers.find(function (value) { return value === eventHandler; })) {
            MusicContentCenterInternal._event_handlers.push(eventHandler);
        }
        return _super.prototype.registerEventHandler.call(this, eventHandler);
    };
    MusicContentCenterInternal.prototype.unregisterEventHandler = function () {
        MusicContentCenterInternal._event_handlers = [];
        return _super.prototype.unregisterEventHandler.call(this);
    };
    MusicContentCenterInternal.prototype.release = function () {
        MusicContentCenterInternal._event_handlers = [];
        this.removeAllListeners();
        _super.prototype.release.call(this);
    };
    MusicContentCenterInternal.prototype.createMusicPlayer = function () {
        // @ts-ignore
        var mediaPlayerId = _super.prototype.createMusicPlayer.call(this);
        return new MusicPlayerInternal(mediaPlayerId);
    };
    MusicContentCenterInternal.prototype.getApiTypeFromPreload = function (songCode) {
        return 'MusicContentCenter_preload2';
    };
    MusicContentCenterInternal._event_handlers = [];
    return MusicContentCenterInternal;
}(ICmviotMusicContentCenterImpl_1.IMusicContentCenterImpl));
exports.MusicContentCenterInternal = MusicContentCenterInternal;
var _MusicPlayerInternal = /** @class */ (function (_super) {
    __extends(_MusicPlayerInternal, _super);
    function _MusicPlayerInternal(mediaPlayerId) {
        var _this = _super.call(this) || this;
        _this._mediaPlayerId = mediaPlayerId;
        return _this;
    }
    _MusicPlayerInternal.prototype.getMediaPlayerId = function () {
        return this._mediaPlayerId;
    };
    _MusicPlayerInternal.prototype.getApiTypeFromOpenWithSongCode = function (songCode, startPos) {
        if (startPos === void 0) { startPos = 0; }
        return 'MusicPlayer_open';
    };
    return _MusicPlayerInternal;
}(ICmviotMusicContentCenterImpl_1.IMusicPlayerImpl));
var MusicPlayerInternal = /** @class */ (function (_super) {
    __extends(MusicPlayerInternal, _super);
    function MusicPlayerInternal(mediaPlayerId) {
        var _this = _super.call(this, mediaPlayerId) || this;
        // @ts-ignore
        _this._musicPlayer = new _MusicPlayerInternal(mediaPlayerId);
        return _this;
    }
    MusicPlayerInternal.prototype.openWithSongCode = function (songCode, startPos) {
        return this._musicPlayer.openWithSongCode(songCode, startPos);
    };
    return MusicPlayerInternal;
}(MediaPlayerInternal_1.MediaPlayerInternal));
exports.MusicPlayerInternal = MusicPlayerInternal;
var _MusicCollection = /** @class */ (function (_super) {
    __extends(_MusicCollection, _super);
    function _MusicCollection(collection) {
        var _this = _super.call(this) || this;
        _this.count = collection.count;
        _this.music = collection.music;
        _this.page = collection.page;
        _this.pageSize = collection.pageSize;
        _this.total = collection.total;
        return _this;
    }
    _MusicCollection.prototype.getCount = function () {
        return this.count;
    };
    _MusicCollection.prototype.getMusic = function (index) {
        var _a;
        return (_a = this.music[index]) !== null && _a !== void 0 ? _a : {};
    };
    _MusicCollection.prototype.getPage = function () {
        return this.page;
    };
    _MusicCollection.prototype.getPageSize = function () {
        return this.pageSize;
    };
    _MusicCollection.prototype.getTotal = function () {
        return this.total;
    };
    return _MusicCollection;
}(ICmviotMusicContentCenter_1.MusicCollection));
var MusicCollectionInternal = /** @class */ (function (_super) {
    __extends(MusicCollectionInternal, _super);
    function MusicCollectionInternal(musicCollection) {
        var _this = _super.call(this) || this;
        _this._musicCollection = new _MusicCollection(musicCollection);
        return _this;
    }
    MusicCollectionInternal.prototype.getCount = function () {
        return this._musicCollection.getCount();
    };
    MusicCollectionInternal.prototype.getMusic = function (index) {
        return this._musicCollection.getMusic(index);
    };
    MusicCollectionInternal.prototype.getPage = function () {
        return this._musicCollection.getPage();
    };
    MusicCollectionInternal.prototype.getPageSize = function () {
        return this._musicCollection.getPageSize();
    };
    MusicCollectionInternal.prototype.getTotal = function () {
        return this._musicCollection.getTotal();
    };
    return MusicCollectionInternal;
}(ICmviotMusicContentCenterImpl_1.MusicCollectionImpl));
exports.MusicCollectionInternal = MusicCollectionInternal;
