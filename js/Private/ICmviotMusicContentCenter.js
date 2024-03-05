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
exports.IMusicContentCenter = exports.IMusicPlayer = exports.MusicContentCenterConfiguration = exports.MusicCollection = exports.Music = exports.ClimaxSegment = exports.MvProperty = exports.MusicChartCollection = exports.MusicCacheInfo = exports.MusicCacheStatusType = exports.MusicChartInfo = exports.MusicContentCenterStatusCode = exports.PreloadStatusCode = void 0;
require("./extension/ICmviotMusicContentCenterExtension");
var ICmviotMediaPlayer_1 = require("./ICmviotMediaPlayer");
/* enum_preloadstatuscode */
var PreloadStatusCode;
(function (PreloadStatusCode) {
    /* enum__KPreloadStatusCompleted */
    PreloadStatusCode[PreloadStatusCode["KPreloadStatusCompleted"] = 0] = "KPreloadStatusCompleted";
    /* enum__KPreloadStatusFailed */
    PreloadStatusCode[PreloadStatusCode["KPreloadStatusFailed"] = 1] = "KPreloadStatusFailed";
    /* enum__KPreloadStatusPreloading */
    PreloadStatusCode[PreloadStatusCode["KPreloadStatusPreloading"] = 2] = "KPreloadStatusPreloading";
    /* enum__KPreloadStatusRemoved */
    PreloadStatusCode[PreloadStatusCode["KPreloadStatusRemoved"] = 3] = "KPreloadStatusRemoved";
})(PreloadStatusCode = exports.PreloadStatusCode || (exports.PreloadStatusCode = {}));
/* enum_musiccontentcenterstatuscode */
var MusicContentCenterStatusCode;
(function (MusicContentCenterStatusCode) {
    /* enum__KMusicContentCenterStatusOk */
    MusicContentCenterStatusCode[MusicContentCenterStatusCode["KMusicContentCenterStatusOk"] = 0] = "KMusicContentCenterStatusOk";
    /* enum__KMusicContentCenterStatusErr */
    MusicContentCenterStatusCode[MusicContentCenterStatusCode["KMusicContentCenterStatusErr"] = 1] = "KMusicContentCenterStatusErr";
    /* enum__KMusicContentCenterStatusErrGateway */
    MusicContentCenterStatusCode[MusicContentCenterStatusCode["KMusicContentCenterStatusErrGateway"] = 2] = "KMusicContentCenterStatusErrGateway";
    /* enum__KMusicContentCenterStatusErrPermissionAndResource */
    MusicContentCenterStatusCode[MusicContentCenterStatusCode["KMusicContentCenterStatusErrPermissionAndResource"] = 3] = "KMusicContentCenterStatusErrPermissionAndResource";
    /* enum__KMusicContentCenterStatusErrInternalDataParse */
    MusicContentCenterStatusCode[MusicContentCenterStatusCode["KMusicContentCenterStatusErrInternalDataParse"] = 4] = "KMusicContentCenterStatusErrInternalDataParse";
    /* enum__KMusicContentCenterStatusErrMusicLoading */
    MusicContentCenterStatusCode[MusicContentCenterStatusCode["KMusicContentCenterStatusErrMusicLoading"] = 5] = "KMusicContentCenterStatusErrMusicLoading";
    /* enum__KMusicContentCenterStatusErrMusicDecryption */
    MusicContentCenterStatusCode[MusicContentCenterStatusCode["KMusicContentCenterStatusErrMusicDecryption"] = 6] = "KMusicContentCenterStatusErrMusicDecryption";
    /* enum__KMusicContentCenterStatusErrHttpInternalError */
    MusicContentCenterStatusCode[MusicContentCenterStatusCode["KMusicContentCenterStatusErrHttpInternalError"] = 7] = "KMusicContentCenterStatusErrHttpInternalError";
})(MusicContentCenterStatusCode = exports.MusicContentCenterStatusCode || (exports.MusicContentCenterStatusCode = {}));
/* class_musicchartinfo */
var MusicChartInfo = /** @class */ (function () {
    function MusicChartInfo() {
    }
    return MusicChartInfo;
}());
exports.MusicChartInfo = MusicChartInfo;
/* enum_musiccachestatustype */
var MusicCacheStatusType;
(function (MusicCacheStatusType) {
    /* enum_musiccachestatustype_MusicCacheStatusTypeCached */
    MusicCacheStatusType[MusicCacheStatusType["MusicCacheStatusTypeCached"] = 0] = "MusicCacheStatusTypeCached";
    /* enum_musiccachestatustype_MusicCacheStatusTypeCaching */
    MusicCacheStatusType[MusicCacheStatusType["MusicCacheStatusTypeCaching"] = 1] = "MusicCacheStatusTypeCaching";
})(MusicCacheStatusType = exports.MusicCacheStatusType || (exports.MusicCacheStatusType = {}));
/* class_musiccacheinfo */
var MusicCacheInfo = /** @class */ (function () {
    function MusicCacheInfo() {
    }
    return MusicCacheInfo;
}());
exports.MusicCacheInfo = MusicCacheInfo;
/* class_musicchartcollection */
var MusicChartCollection = /** @class */ (function () {
    function MusicChartCollection() {
    }
    return MusicChartCollection;
}());
exports.MusicChartCollection = MusicChartCollection;
/* class_mvproperty */
var MvProperty = /** @class */ (function () {
    function MvProperty() {
    }
    return MvProperty;
}());
exports.MvProperty = MvProperty;
/* class_climaxsegment */
var ClimaxSegment = /** @class */ (function () {
    function ClimaxSegment() {
    }
    return ClimaxSegment;
}());
exports.ClimaxSegment = ClimaxSegment;
/* class_music */
var Music = /** @class */ (function () {
    function Music() {
    }
    return Music;
}());
exports.Music = Music;
/* class_musiccollection */
var MusicCollection = /** @class */ (function () {
    function MusicCollection() {
    }
    return MusicCollection;
}());
exports.MusicCollection = MusicCollection;
/* class_musiccontentcenterconfiguration */
var MusicContentCenterConfiguration = /** @class */ (function () {
    function MusicContentCenterConfiguration() {
    }
    return MusicContentCenterConfiguration;
}());
exports.MusicContentCenterConfiguration = MusicContentCenterConfiguration;
/* class_imusicplayer */
var IMusicPlayer = /** @class */ (function (_super) {
    __extends(IMusicPlayer, _super);
    function IMusicPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return IMusicPlayer;
}(ICmviotMediaPlayer_1.IMediaPlayer));
exports.IMusicPlayer = IMusicPlayer;
/* class_imusiccontentcenter */
var IMusicContentCenter = /** @class */ (function () {
    function IMusicContentCenter() {
    }
    return IMusicContentCenter;
}());
exports.IMusicContentCenter = IMusicContentCenter;
