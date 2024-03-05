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
exports.IMusicContentCenterImpl = exports.IMusicPlayerImpl = exports.processIMusicContentCenterEventHandler = exports.MusicCollectionImpl = exports.MusicChartCollectionImpl = void 0;
var ICmviotMediaPlayerImpl_1 = require("./ICmviotMediaPlayerImpl");
// @ts-ignore
var MusicChartCollectionImpl = /** @class */ (function () {
    function MusicChartCollectionImpl() {
    }
    MusicChartCollectionImpl.prototype.getCount = function () {
        var apiType = this.getApiTypeFromGetCount();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    MusicChartCollectionImpl.prototype.getApiTypeFromGetCount = function () {
        return 'MusicChartCollection_getCount';
    };
    MusicChartCollectionImpl.prototype.get = function (index) {
        var apiType = this.getApiTypeFromGet(index);
        var jsonParams = {
            index: index,
            toJSON: function () {
                return {
                    index: index,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    MusicChartCollectionImpl.prototype.getApiTypeFromGet = function (index) {
        return 'MusicChartCollection_get';
    };
    return MusicChartCollectionImpl;
}());
exports.MusicChartCollectionImpl = MusicChartCollectionImpl;
// @ts-ignore
var MusicCollectionImpl = /** @class */ (function () {
    function MusicCollectionImpl() {
    }
    MusicCollectionImpl.prototype.getCount = function () {
        var apiType = this.getApiTypeFromGetCount();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    MusicCollectionImpl.prototype.getApiTypeFromGetCount = function () {
        return 'MusicCollection_getCount';
    };
    MusicCollectionImpl.prototype.getTotal = function () {
        var apiType = this.getApiTypeFromGetTotal();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    MusicCollectionImpl.prototype.getApiTypeFromGetTotal = function () {
        return 'MusicCollection_getTotal';
    };
    MusicCollectionImpl.prototype.getPage = function () {
        var apiType = this.getApiTypeFromGetPage();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    MusicCollectionImpl.prototype.getApiTypeFromGetPage = function () {
        return 'MusicCollection_getPage';
    };
    MusicCollectionImpl.prototype.getPageSize = function () {
        var apiType = this.getApiTypeFromGetPageSize();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    MusicCollectionImpl.prototype.getApiTypeFromGetPageSize = function () {
        return 'MusicCollection_getPageSize';
    };
    MusicCollectionImpl.prototype.getMusic = function (index) {
        var apiType = this.getApiTypeFromGetMusic(index);
        var jsonParams = {
            index: index,
            toJSON: function () {
                return {
                    index: index,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    MusicCollectionImpl.prototype.getApiTypeFromGetMusic = function (index) {
        return 'MusicCollection_getMusic';
    };
    return MusicCollectionImpl;
}());
exports.MusicCollectionImpl = MusicCollectionImpl;
function processIMusicContentCenterEventHandler(handler, event, jsonParams) {
    switch (event) {
        case 'onMusicChartsResult':
            if (handler.onMusicChartsResult !== undefined) {
                handler.onMusicChartsResult(jsonParams.requestId, jsonParams.result, jsonParams.errorCode);
            }
            break;
        case 'onMusicCollectionResult':
            if (handler.onMusicCollectionResult !== undefined) {
                handler.onMusicCollectionResult(jsonParams.requestId, jsonParams.result, jsonParams.errorCode);
            }
            break;
        case 'onLyricResult':
            if (handler.onLyricResult !== undefined) {
                handler.onLyricResult(jsonParams.requestId, jsonParams.songCode, jsonParams.lyricUrl, jsonParams.errorCode);
            }
            break;
        case 'onSongSimpleInfoResult':
            if (handler.onSongSimpleInfoResult !== undefined) {
                handler.onSongSimpleInfoResult(jsonParams.requestId, jsonParams.songCode, jsonParams.simpleInfo, jsonParams.errorCode);
            }
            break;
        case 'onPreLoadEvent':
            if (handler.onPreLoadEvent !== undefined) {
                handler.onPreLoadEvent(jsonParams.requestId, jsonParams.songCode, jsonParams.percent, jsonParams.lyricUrl, jsonParams.status, jsonParams.errorCode);
            }
            break;
    }
}
exports.processIMusicContentCenterEventHandler = processIMusicContentCenterEventHandler;
// @ts-ignore
var IMusicPlayerImpl = /** @class */ (function (_super) {
    __extends(IMusicPlayerImpl, _super);
    function IMusicPlayerImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IMusicPlayerImpl.prototype.openWithSongCode = function (songCode, startPos) {
        if (startPos === void 0) { startPos = 0; }
        var apiType = this.getApiTypeFromOpenWithSongCode(songCode, startPos);
        var jsonParams = {
            songCode: songCode,
            startPos: startPos,
            toJSON: function () {
                return {
                    songCode: songCode,
                    startPos: startPos,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMusicPlayerImpl.prototype.getApiTypeFromOpenWithSongCode = function (songCode, startPos) {
        if (startPos === void 0) { startPos = 0; }
        return 'MusicPlayer_openWithSongCode';
    };
    return IMusicPlayerImpl;
}(ICmviotMediaPlayerImpl_1.IMediaPlayerImpl));
exports.IMusicPlayerImpl = IMusicPlayerImpl;
// @ts-ignore
var IMusicContentCenterImpl = /** @class */ (function () {
    function IMusicContentCenterImpl() {
    }
    IMusicContentCenterImpl.prototype.initialize = function (configuration) {
        var apiType = this.getApiTypeFromInitialize(configuration);
        var jsonParams = {
            configuration: configuration,
            toJSON: function () {
                return {
                    configuration: configuration,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMusicContentCenterImpl.prototype.getApiTypeFromInitialize = function (configuration) {
        return 'MusicContentCenter_initialize';
    };
    IMusicContentCenterImpl.prototype.renewToken = function (token) {
        var apiType = this.getApiTypeFromRenewToken(token);
        var jsonParams = {
            token: token,
            toJSON: function () {
                return {
                    token: token,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMusicContentCenterImpl.prototype.getApiTypeFromRenewToken = function (token) {
        return 'MusicContentCenter_renewToken';
    };
    IMusicContentCenterImpl.prototype.release = function () {
        var apiType = this.getApiTypeFromRelease();
        var jsonParams = {};
        IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
    };
    IMusicContentCenterImpl.prototype.getApiTypeFromRelease = function () {
        return 'MusicContentCenter_release';
    };
    IMusicContentCenterImpl.prototype.registerEventHandler = function (eventHandler) {
        var apiType = this.getApiTypeFromRegisterEventHandler(eventHandler);
        var jsonParams = {
            eventHandler: eventHandler,
            toJSON: function () {
                return {};
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMusicContentCenterImpl.prototype.getApiTypeFromRegisterEventHandler = function (eventHandler) {
        return 'MusicContentCenter_registerEventHandler';
    };
    IMusicContentCenterImpl.prototype.unregisterEventHandler = function () {
        var apiType = this.getApiTypeFromUnregisterEventHandler();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMusicContentCenterImpl.prototype.getApiTypeFromUnregisterEventHandler = function () {
        return 'MusicContentCenter_unregisterEventHandler';
    };
    IMusicContentCenterImpl.prototype.createMusicPlayer = function () {
        var apiType = this.getApiTypeFromCreateMusicPlayer();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMusicContentCenterImpl.prototype.getApiTypeFromCreateMusicPlayer = function () {
        return 'MusicContentCenter_createMusicPlayer';
    };
    IMusicContentCenterImpl.prototype.getMusicCharts = function () {
        var apiType = this.getApiTypeFromGetMusicCharts();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        var requestId = jsonResults.requestId;
        return requestId;
    };
    IMusicContentCenterImpl.prototype.getApiTypeFromGetMusicCharts = function () {
        return 'MusicContentCenter_getMusicCharts';
    };
    IMusicContentCenterImpl.prototype.getMusicCollectionByMusicChartId = function (musicChartId, page, pageSize, jsonOption) {
        var apiType = this.getApiTypeFromGetMusicCollectionByMusicChartId(musicChartId, page, pageSize, jsonOption);
        var jsonParams = {
            musicChartId: musicChartId,
            page: page,
            pageSize: pageSize,
            jsonOption: jsonOption,
            toJSON: function () {
                return {
                    musicChartId: musicChartId,
                    page: page,
                    pageSize: pageSize,
                    jsonOption: jsonOption,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        var requestId = jsonResults.requestId;
        return requestId;
    };
    IMusicContentCenterImpl.prototype.getApiTypeFromGetMusicCollectionByMusicChartId = function (musicChartId, page, pageSize, jsonOption) {
        return 'MusicContentCenter_getMusicCollectionByMusicChartId';
    };
    IMusicContentCenterImpl.prototype.searchMusic = function (keyWord, page, pageSize, jsonOption) {
        var apiType = this.getApiTypeFromSearchMusic(keyWord, page, pageSize, jsonOption);
        var jsonParams = {
            keyWord: keyWord,
            page: page,
            pageSize: pageSize,
            jsonOption: jsonOption,
            toJSON: function () {
                return {
                    keyWord: keyWord,
                    page: page,
                    pageSize: pageSize,
                    jsonOption: jsonOption,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        var requestId = jsonResults.requestId;
        return requestId;
    };
    IMusicContentCenterImpl.prototype.getApiTypeFromSearchMusic = function (keyWord, page, pageSize, jsonOption) {
        return 'MusicContentCenter_searchMusic';
    };
    IMusicContentCenterImpl.prototype.preload = function (songCode) {
        var apiType = this.getApiTypeFromPreload(songCode);
        var jsonParams = {
            songCode: songCode,
            toJSON: function () {
                return {
                    songCode: songCode,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        var requestId = jsonResults.requestId;
        return requestId;
    };
    IMusicContentCenterImpl.prototype.getApiTypeFromPreload = function (songCode) {
        return 'MusicContentCenter_preload';
    };
    IMusicContentCenterImpl.prototype.removeCache = function (songCode) {
        var apiType = this.getApiTypeFromRemoveCache(songCode);
        var jsonParams = {
            songCode: songCode,
            toJSON: function () {
                return {
                    songCode: songCode,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMusicContentCenterImpl.prototype.getApiTypeFromRemoveCache = function (songCode) {
        return 'MusicContentCenter_removeCache';
    };
    IMusicContentCenterImpl.prototype.getCaches = function () {
        var apiType = this.getApiTypeFromGetCaches();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        var cacheInfo = jsonResults.cacheInfo;
        var cacheInfoSize = jsonResults.cacheInfoSize;
        return {
            cacheInfo: cacheInfo,
            cacheInfoSize: cacheInfoSize,
        };
    };
    IMusicContentCenterImpl.prototype.getApiTypeFromGetCaches = function () {
        return 'MusicContentCenter_getCaches';
    };
    IMusicContentCenterImpl.prototype.isPreloaded = function (songCode) {
        var apiType = this.getApiTypeFromIsPreloaded(songCode);
        var jsonParams = {
            songCode: songCode,
            toJSON: function () {
                return {
                    songCode: songCode,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMusicContentCenterImpl.prototype.getApiTypeFromIsPreloaded = function (songCode) {
        return 'MusicContentCenter_isPreloaded';
    };
    IMusicContentCenterImpl.prototype.getLyric = function (songCode, lyricType) {
        if (lyricType === void 0) { lyricType = 0; }
        var apiType = this.getApiTypeFromGetLyric(songCode, lyricType);
        var jsonParams = {
            songCode: songCode,
            LyricType: lyricType,
            toJSON: function () {
                return {
                    songCode: songCode,
                    LyricType: lyricType,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        var requestId = jsonResults.requestId;
        return requestId;
    };
    IMusicContentCenterImpl.prototype.getApiTypeFromGetLyric = function (songCode, lyricType) {
        if (lyricType === void 0) { lyricType = 0; }
        return 'MusicContentCenter_getLyric';
    };
    IMusicContentCenterImpl.prototype.getSongSimpleInfo = function (songCode) {
        var apiType = this.getApiTypeFromGetSongSimpleInfo(songCode);
        var jsonParams = {
            songCode: songCode,
            toJSON: function () {
                return {
                    songCode: songCode,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        var requestId = jsonResults.requestId;
        return requestId;
    };
    IMusicContentCenterImpl.prototype.getApiTypeFromGetSongSimpleInfo = function (songCode) {
        return 'MusicContentCenter_getSongSimpleInfo';
    };
    IMusicContentCenterImpl.prototype.getInternalSongCode = function (songCode, jsonOption) {
        var apiType = this.getApiTypeFromGetInternalSongCode(songCode, jsonOption);
        var jsonParams = {
            songCode: songCode,
            jsonOption: jsonOption,
            toJSON: function () {
                return {
                    songCode: songCode,
                    jsonOption: jsonOption,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        var internalSongCode = jsonResults.internalSongCode;
        return internalSongCode;
    };
    IMusicContentCenterImpl.prototype.getApiTypeFromGetInternalSongCode = function (songCode, jsonOption) {
        return 'MusicContentCenter_getInternalSongCode';
    };
    return IMusicContentCenterImpl;
}());
exports.IMusicContentCenterImpl = IMusicContentCenterImpl;
var IrisApiEngine_1 = require("../internal/IrisApiEngine");
