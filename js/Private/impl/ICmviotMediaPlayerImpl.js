"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processIMediaPlayerVideoFrameObserver = exports.IMediaPlayerCacheManagerImpl = exports.IMediaPlayerImpl = void 0;
var CmviotMediaBase_1 = require("../CmviotMediaBase");
// @ts-ignore
var IMediaPlayerImpl = /** @class */ (function () {
    function IMediaPlayerImpl() {
    }
    IMediaPlayerImpl.prototype.getMediaPlayerId = function () {
        var apiType = this.getApiTypeFromGetMediaPlayerId();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerImpl.prototype.getApiTypeFromGetMediaPlayerId = function () {
        return 'MediaPlayer_getMediaPlayerId';
    };
    IMediaPlayerImpl.prototype.open = function (url, startPos) {
        var apiType = this.getApiTypeFromOpen(url, startPos);
        var jsonParams = {
            url: url,
            startPos: startPos,
            toJSON: function () {
                return {
                    url: url,
                    startPos: startPos,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerImpl.prototype.getApiTypeFromOpen = function (url, startPos) {
        return 'MediaPlayer_open';
    };
    IMediaPlayerImpl.prototype.openWithMediaSource = function (source) {
        var apiType = this.getApiTypeFromOpenWithMediaSource(source);
        var jsonParams = {
            source: source,
            toJSON: function () {
                return {
                    source: source,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerImpl.prototype.getApiTypeFromOpenWithMediaSource = function (source) {
        return 'MediaPlayer_openWithMediaSource';
    };
    IMediaPlayerImpl.prototype.play = function () {
        var apiType = this.getApiTypeFromPlay();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerImpl.prototype.getApiTypeFromPlay = function () {
        return 'MediaPlayer_play';
    };
    IMediaPlayerImpl.prototype.pause = function () {
        var apiType = this.getApiTypeFromPause();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerImpl.prototype.getApiTypeFromPause = function () {
        return 'MediaPlayer_pause';
    };
    IMediaPlayerImpl.prototype.stop = function () {
        var apiType = this.getApiTypeFromStop();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerImpl.prototype.getApiTypeFromStop = function () {
        return 'MediaPlayer_stop';
    };
    IMediaPlayerImpl.prototype.resume = function () {
        var apiType = this.getApiTypeFromResume();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerImpl.prototype.getApiTypeFromResume = function () {
        return 'MediaPlayer_resume';
    };
    IMediaPlayerImpl.prototype.seek = function (newPos) {
        var apiType = this.getApiTypeFromSeek(newPos);
        var jsonParams = {
            newPos: newPos,
            toJSON: function () {
                return {
                    newPos: newPos,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerImpl.prototype.getApiTypeFromSeek = function (newPos) {
        return 'MediaPlayer_seek';
    };
    IMediaPlayerImpl.prototype.setAudioPitch = function (pitch) {
        var apiType = this.getApiTypeFromSetAudioPitch(pitch);
        var jsonParams = {
            pitch: pitch,
            toJSON: function () {
                return {
                    pitch: pitch,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerImpl.prototype.getApiTypeFromSetAudioPitch = function (pitch) {
        return 'MediaPlayer_setAudioPitch';
    };
    IMediaPlayerImpl.prototype.getDuration = function () {
        var apiType = this.getApiTypeFromGetDuration();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        var duration = jsonResults.duration;
        return duration;
    };
    IMediaPlayerImpl.prototype.getApiTypeFromGetDuration = function () {
        return 'MediaPlayer_getDuration';
    };
    IMediaPlayerImpl.prototype.getPlayPosition = function () {
        var apiType = this.getApiTypeFromGetPlayPosition();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        var pos = jsonResults.pos;
        return pos;
    };
    IMediaPlayerImpl.prototype.getApiTypeFromGetPlayPosition = function () {
        return 'MediaPlayer_getPlayPosition';
    };
    IMediaPlayerImpl.prototype.getStreamCount = function () {
        var apiType = this.getApiTypeFromGetStreamCount();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        var count = jsonResults.count;
        return count;
    };
    IMediaPlayerImpl.prototype.getApiTypeFromGetStreamCount = function () {
        return 'MediaPlayer_getStreamCount';
    };
    IMediaPlayerImpl.prototype.getStreamInfo = function (index) {
        var apiType = this.getApiTypeFromGetStreamInfo(index);
        var jsonParams = {
            index: index,
            toJSON: function () {
                return {
                    index: index,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        var info = jsonResults.info;
        return info;
    };
    IMediaPlayerImpl.prototype.getApiTypeFromGetStreamInfo = function (index) {
        return 'MediaPlayer_getStreamInfo';
    };
    IMediaPlayerImpl.prototype.setLoopCount = function (loopCount) {
        var apiType = this.getApiTypeFromSetLoopCount(loopCount);
        var jsonParams = {
            loopCount: loopCount,
            toJSON: function () {
                return {
                    loopCount: loopCount,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerImpl.prototype.getApiTypeFromSetLoopCount = function (loopCount) {
        return 'MediaPlayer_setLoopCount';
    };
    IMediaPlayerImpl.prototype.setPlaybackSpeed = function (speed) {
        var apiType = this.getApiTypeFromSetPlaybackSpeed(speed);
        var jsonParams = {
            speed: speed,
            toJSON: function () {
                return {
                    speed: speed,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerImpl.prototype.getApiTypeFromSetPlaybackSpeed = function (speed) {
        return 'MediaPlayer_setPlaybackSpeed';
    };
    IMediaPlayerImpl.prototype.selectAudioTrack = function (index) {
        var apiType = this.getApiTypeFromSelectAudioTrack(index);
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
    IMediaPlayerImpl.prototype.getApiTypeFromSelectAudioTrack = function (index) {
        return 'MediaPlayer_selectAudioTrack';
    };
    IMediaPlayerImpl.prototype.setPlayerOptionInInt = function (key, value) {
        var apiType = this.getApiTypeFromSetPlayerOptionInInt(key, value);
        var jsonParams = {
            key: key,
            value: value,
            toJSON: function () {
                return {
                    key: key,
                    value: value,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerImpl.prototype.getApiTypeFromSetPlayerOptionInInt = function (key, value) {
        return 'MediaPlayer_setPlayerOptionInInt';
    };
    IMediaPlayerImpl.prototype.setPlayerOptionInString = function (key, value) {
        var apiType = this.getApiTypeFromSetPlayerOptionInString(key, value);
        var jsonParams = {
            key: key,
            value: value,
            toJSON: function () {
                return {
                    key: key,
                    value: value,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerImpl.prototype.getApiTypeFromSetPlayerOptionInString = function (key, value) {
        return 'MediaPlayer_setPlayerOptionInString';
    };
    IMediaPlayerImpl.prototype.takeScreenshot = function (filename) {
        var apiType = this.getApiTypeFromTakeScreenshot(filename);
        var jsonParams = {
            filename: filename,
            toJSON: function () {
                return {
                    filename: filename,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerImpl.prototype.getApiTypeFromTakeScreenshot = function (filename) {
        return 'MediaPlayer_takeScreenshot';
    };
    IMediaPlayerImpl.prototype.selectInternalSubtitle = function (index) {
        var apiType = this.getApiTypeFromSelectInternalSubtitle(index);
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
    IMediaPlayerImpl.prototype.getApiTypeFromSelectInternalSubtitle = function (index) {
        return 'MediaPlayer_selectInternalSubtitle';
    };
    IMediaPlayerImpl.prototype.setExternalSubtitle = function (url) {
        var apiType = this.getApiTypeFromSetExternalSubtitle(url);
        var jsonParams = {
            url: url,
            toJSON: function () {
                return {
                    url: url,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerImpl.prototype.getApiTypeFromSetExternalSubtitle = function (url) {
        return 'MediaPlayer_setExternalSubtitle';
    };
    IMediaPlayerImpl.prototype.getState = function () {
        var apiType = this.getApiTypeFromGetState();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerImpl.prototype.getApiTypeFromGetState = function () {
        return 'MediaPlayer_getState';
    };
    IMediaPlayerImpl.prototype.mute = function (muted) {
        var apiType = this.getApiTypeFromMute(muted);
        var jsonParams = {
            muted: muted,
            toJSON: function () {
                return {
                    muted: muted,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerImpl.prototype.getApiTypeFromMute = function (muted) {
        return 'MediaPlayer_mute';
    };
    IMediaPlayerImpl.prototype.getMute = function () {
        var apiType = this.getApiTypeFromGetMute();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        var muted = jsonResults.muted;
        return muted;
    };
    IMediaPlayerImpl.prototype.getApiTypeFromGetMute = function () {
        return 'MediaPlayer_getMute';
    };
    IMediaPlayerImpl.prototype.adjustPlayoutVolume = function (volume) {
        var apiType = this.getApiTypeFromAdjustPlayoutVolume(volume);
        var jsonParams = {
            volume: volume,
            toJSON: function () {
                return {
                    volume: volume,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerImpl.prototype.getApiTypeFromAdjustPlayoutVolume = function (volume) {
        return 'MediaPlayer_adjustPlayoutVolume';
    };
    IMediaPlayerImpl.prototype.getPlayoutVolume = function () {
        var apiType = this.getApiTypeFromGetPlayoutVolume();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        var volume = jsonResults.volume;
        return volume;
    };
    IMediaPlayerImpl.prototype.getApiTypeFromGetPlayoutVolume = function () {
        return 'MediaPlayer_getPlayoutVolume';
    };
    IMediaPlayerImpl.prototype.adjustPublishSignalVolume = function (volume) {
        var apiType = this.getApiTypeFromAdjustPublishSignalVolume(volume);
        var jsonParams = {
            volume: volume,
            toJSON: function () {
                return {
                    volume: volume,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerImpl.prototype.getApiTypeFromAdjustPublishSignalVolume = function (volume) {
        return 'MediaPlayer_adjustPublishSignalVolume';
    };
    IMediaPlayerImpl.prototype.getPublishSignalVolume = function () {
        var apiType = this.getApiTypeFromGetPublishSignalVolume();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        var volume = jsonResults.volume;
        return volume;
    };
    IMediaPlayerImpl.prototype.getApiTypeFromGetPublishSignalVolume = function () {
        return 'MediaPlayer_getPublishSignalVolume';
    };
    IMediaPlayerImpl.prototype.setView = function (view) {
        var apiType = this.getApiTypeFromSetView(view);
        var jsonParams = {
            view: view,
            toJSON: function () {
                return {
                    view: view,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerImpl.prototype.getApiTypeFromSetView = function (view) {
        return 'MediaPlayer_setView';
    };
    IMediaPlayerImpl.prototype.setRenderMode = function (renderMode) {
        var apiType = this.getApiTypeFromSetRenderMode(renderMode);
        var jsonParams = {
            renderMode: renderMode,
            toJSON: function () {
                return {
                    renderMode: renderMode,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerImpl.prototype.getApiTypeFromSetRenderMode = function (renderMode) {
        return 'MediaPlayer_setRenderMode';
    };
    IMediaPlayerImpl.prototype.registerPlayerSourceObserver = function (observer) {
        var apiType = this.getApiTypeFromRegisterPlayerSourceObserver(observer);
        var jsonParams = {
            observer: observer,
            toJSON: function () {
                return {};
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerImpl.prototype.getApiTypeFromRegisterPlayerSourceObserver = function (observer) {
        return 'MediaPlayer_registerPlayerSourceObserver';
    };
    IMediaPlayerImpl.prototype.unregisterPlayerSourceObserver = function (observer) {
        var apiType = this.getApiTypeFromUnregisterPlayerSourceObserver(observer);
        var jsonParams = {
            observer: observer,
            toJSON: function () {
                return {};
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerImpl.prototype.getApiTypeFromUnregisterPlayerSourceObserver = function (observer) {
        return 'MediaPlayer_unregisterPlayerSourceObserver';
    };
    IMediaPlayerImpl.prototype.registerAudioFrameObserver = function (observer, mode) {
        if (mode === void 0) { mode = CmviotMediaBase_1.RawAudioFrameOpModeType.RawAudioFrameOpModeReadOnly; }
        var apiType = this.getApiTypeFromRegisterAudioFrameObserver(observer, mode);
        var jsonParams = {
            observer: observer,
            mode: mode,
            toJSON: function () {
                return {
                    mode: mode,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerImpl.prototype.getApiTypeFromRegisterAudioFrameObserver = function (observer, mode) {
        if (mode === void 0) { mode = CmviotMediaBase_1.RawAudioFrameOpModeType.RawAudioFrameOpModeReadOnly; }
        return 'MediaPlayer_registerAudioFrameObserver';
    };
    IMediaPlayerImpl.prototype.unregisterAudioFrameObserver = function (observer) {
        var apiType = this.getApiTypeFromUnregisterAudioFrameObserver(observer);
        var jsonParams = {
            observer: observer,
            toJSON: function () {
                return {};
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerImpl.prototype.getApiTypeFromUnregisterAudioFrameObserver = function (observer) {
        return 'MediaPlayer_unregisterAudioFrameObserver';
    };
    IMediaPlayerImpl.prototype.registerVideoFrameObserver = function (observer) {
        var apiType = this.getApiTypeFromRegisterVideoFrameObserver(observer);
        var jsonParams = {
            observer: observer,
            toJSON: function () {
                return {};
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerImpl.prototype.getApiTypeFromRegisterVideoFrameObserver = function (observer) {
        return 'MediaPlayer_registerVideoFrameObserver';
    };
    IMediaPlayerImpl.prototype.unregisterVideoFrameObserver = function (observer) {
        var apiType = this.getApiTypeFromUnregisterVideoFrameObserver(observer);
        var jsonParams = {
            observer: observer,
            toJSON: function () {
                return {};
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerImpl.prototype.getApiTypeFromUnregisterVideoFrameObserver = function (observer) {
        return 'MediaPlayer_unregisterVideoFrameObserver';
    };
    IMediaPlayerImpl.prototype.registerMediaPlayerAudioSpectrumObserver = function (observer, intervalInMS) {
        var apiType = this.getApiTypeFromRegisterMediaPlayerAudioSpectrumObserver(observer, intervalInMS);
        var jsonParams = {
            observer: observer,
            intervalInMS: intervalInMS,
            toJSON: function () {
                return {
                    intervalInMS: intervalInMS,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerImpl.prototype.getApiTypeFromRegisterMediaPlayerAudioSpectrumObserver = function (observer, intervalInMS) {
        return 'MediaPlayer_registerMediaPlayerAudioSpectrumObserver';
    };
    IMediaPlayerImpl.prototype.unregisterMediaPlayerAudioSpectrumObserver = function (observer) {
        var apiType = this.getApiTypeFromUnregisterMediaPlayerAudioSpectrumObserver(observer);
        var jsonParams = {
            observer: observer,
            toJSON: function () {
                return {};
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerImpl.prototype.getApiTypeFromUnregisterMediaPlayerAudioSpectrumObserver = function (observer) {
        return 'MediaPlayer_unregisterMediaPlayerAudioSpectrumObserver';
    };
    IMediaPlayerImpl.prototype.setAudioDualMonoMode = function (mode) {
        var apiType = this.getApiTypeFromSetAudioDualMonoMode(mode);
        var jsonParams = {
            mode: mode,
            toJSON: function () {
                return {
                    mode: mode,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerImpl.prototype.getApiTypeFromSetAudioDualMonoMode = function (mode) {
        return 'MediaPlayer_setAudioDualMonoMode';
    };
    IMediaPlayerImpl.prototype.getPlayerSdkVersion = function () {
        var apiType = this.getApiTypeFromGetPlayerSdkVersion();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerImpl.prototype.getApiTypeFromGetPlayerSdkVersion = function () {
        return 'MediaPlayer_getPlayerSdkVersion';
    };
    IMediaPlayerImpl.prototype.getPlaySrc = function () {
        var apiType = this.getApiTypeFromGetPlaySrc();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerImpl.prototype.getApiTypeFromGetPlaySrc = function () {
        return 'MediaPlayer_getPlaySrc';
    };
    IMediaPlayerImpl.prototype.openWithCmviotCDNSrc = function (src, startPos) {
        var apiType = this.getApiTypeFromOpenWithCmviotCDNSrc(src, startPos);
        var jsonParams = {
            src: src,
            startPos: startPos,
            toJSON: function () {
                return {
                    src: src,
                    startPos: startPos,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerImpl.prototype.getApiTypeFromOpenWithCmviotCDNSrc = function (src, startPos) {
        return 'MediaPlayer_openWithCmviotCDNSrc';
    };
    IMediaPlayerImpl.prototype.getCmviotCDNLineCount = function () {
        var apiType = this.getApiTypeFromGetCmviotCDNLineCount();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerImpl.prototype.getApiTypeFromGetCmviotCDNLineCount = function () {
        return 'MediaPlayer_getCmviotCDNLineCount';
    };
    IMediaPlayerImpl.prototype.switchCmviotCDNLineByIndex = function (index) {
        var apiType = this.getApiTypeFromSwitchCmviotCDNLineByIndex(index);
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
    IMediaPlayerImpl.prototype.getApiTypeFromSwitchCmviotCDNLineByIndex = function (index) {
        return 'MediaPlayer_switchCmviotCDNLineByIndex';
    };
    IMediaPlayerImpl.prototype.getCurrentCmviotCDNIndex = function () {
        var apiType = this.getApiTypeFromGetCurrentCmviotCDNIndex();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerImpl.prototype.getApiTypeFromGetCurrentCmviotCDNIndex = function () {
        return 'MediaPlayer_getCurrentCmviotCDNIndex';
    };
    IMediaPlayerImpl.prototype.enableAutoSwitchCmviotCDN = function (enable) {
        var apiType = this.getApiTypeFromEnableAutoSwitchCmviotCDN(enable);
        var jsonParams = {
            enable: enable,
            toJSON: function () {
                return {
                    enable: enable,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerImpl.prototype.getApiTypeFromEnableAutoSwitchCmviotCDN = function (enable) {
        return 'MediaPlayer_enableAutoSwitchCmviotCDN';
    };
    IMediaPlayerImpl.prototype.renewCmviotCDNSrcToken = function (token, ts) {
        var apiType = this.getApiTypeFromRenewCmviotCDNSrcToken(token, ts);
        var jsonParams = {
            token: token,
            ts: ts,
            toJSON: function () {
                return {
                    token: token,
                    ts: ts,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerImpl.prototype.getApiTypeFromRenewCmviotCDNSrcToken = function (token, ts) {
        return 'MediaPlayer_renewCmviotCDNSrcToken';
    };
    IMediaPlayerImpl.prototype.switchCmviotCDNSrc = function (src, syncPts) {
        if (syncPts === void 0) { syncPts = false; }
        var apiType = this.getApiTypeFromSwitchCmviotCDNSrc(src, syncPts);
        var jsonParams = {
            src: src,
            syncPts: syncPts,
            toJSON: function () {
                return {
                    src: src,
                    syncPts: syncPts,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerImpl.prototype.getApiTypeFromSwitchCmviotCDNSrc = function (src, syncPts) {
        if (syncPts === void 0) { syncPts = false; }
        return 'MediaPlayer_switchCmviotCDNSrc';
    };
    IMediaPlayerImpl.prototype.switchSrc = function (src, syncPts) {
        if (syncPts === void 0) { syncPts = true; }
        var apiType = this.getApiTypeFromSwitchSrc(src, syncPts);
        var jsonParams = {
            src: src,
            syncPts: syncPts,
            toJSON: function () {
                return {
                    src: src,
                    syncPts: syncPts,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerImpl.prototype.getApiTypeFromSwitchSrc = function (src, syncPts) {
        if (syncPts === void 0) { syncPts = true; }
        return 'MediaPlayer_switchSrc';
    };
    IMediaPlayerImpl.prototype.preloadSrc = function (src, startPos) {
        var apiType = this.getApiTypeFromPreloadSrc(src, startPos);
        var jsonParams = {
            src: src,
            startPos: startPos,
            toJSON: function () {
                return {
                    src: src,
                    startPos: startPos,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerImpl.prototype.getApiTypeFromPreloadSrc = function (src, startPos) {
        return 'MediaPlayer_preloadSrc';
    };
    IMediaPlayerImpl.prototype.playPreloadedSrc = function (src) {
        var apiType = this.getApiTypeFromPlayPreloadedSrc(src);
        var jsonParams = {
            src: src,
            toJSON: function () {
                return {
                    src: src,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerImpl.prototype.getApiTypeFromPlayPreloadedSrc = function (src) {
        return 'MediaPlayer_playPreloadedSrc';
    };
    IMediaPlayerImpl.prototype.unloadSrc = function (src) {
        var apiType = this.getApiTypeFromUnloadSrc(src);
        var jsonParams = {
            src: src,
            toJSON: function () {
                return {
                    src: src,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerImpl.prototype.getApiTypeFromUnloadSrc = function (src) {
        return 'MediaPlayer_unloadSrc';
    };
    IMediaPlayerImpl.prototype.setSpatialAudioParams = function (params) {
        var apiType = this.getApiTypeFromSetSpatialAudioParams(params);
        var jsonParams = {
            params: params,
            toJSON: function () {
                return {
                    params: params,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerImpl.prototype.getApiTypeFromSetSpatialAudioParams = function (params) {
        return 'MediaPlayer_setSpatialAudioParams';
    };
    IMediaPlayerImpl.prototype.setSoundPositionParams = function (pan, gain) {
        var apiType = this.getApiTypeFromSetSoundPositionParams(pan, gain);
        var jsonParams = {
            pan: pan,
            gain: gain,
            toJSON: function () {
                return {
                    pan: pan,
                    gain: gain,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerImpl.prototype.getApiTypeFromSetSoundPositionParams = function (pan, gain) {
        return 'MediaPlayer_setSoundPositionParams';
    };
    return IMediaPlayerImpl;
}());
exports.IMediaPlayerImpl = IMediaPlayerImpl;
// @ts-ignore
var IMediaPlayerCacheManagerImpl = /** @class */ (function () {
    function IMediaPlayerCacheManagerImpl() {
    }
    IMediaPlayerCacheManagerImpl.prototype.removeAllCaches = function () {
        var apiType = this.getApiTypeFromRemoveAllCaches();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerCacheManagerImpl.prototype.getApiTypeFromRemoveAllCaches = function () {
        return 'MediaPlayerCacheManager_removeAllCaches';
    };
    IMediaPlayerCacheManagerImpl.prototype.removeOldCache = function () {
        var apiType = this.getApiTypeFromRemoveOldCache();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerCacheManagerImpl.prototype.getApiTypeFromRemoveOldCache = function () {
        return 'MediaPlayerCacheManager_removeOldCache';
    };
    IMediaPlayerCacheManagerImpl.prototype.removeCacheByUri = function (uri) {
        var apiType = this.getApiTypeFromRemoveCacheByUri(uri);
        var jsonParams = {
            uri: uri,
            toJSON: function () {
                return {
                    uri: uri,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerCacheManagerImpl.prototype.getApiTypeFromRemoveCacheByUri = function (uri) {
        return 'MediaPlayerCacheManager_removeCacheByUri';
    };
    IMediaPlayerCacheManagerImpl.prototype.setCacheDir = function (path) {
        var apiType = this.getApiTypeFromSetCacheDir(path);
        var jsonParams = {
            path: path,
            toJSON: function () {
                return {
                    path: path,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerCacheManagerImpl.prototype.getApiTypeFromSetCacheDir = function (path) {
        return 'MediaPlayerCacheManager_setCacheDir';
    };
    IMediaPlayerCacheManagerImpl.prototype.setMaxCacheFileCount = function (count) {
        var apiType = this.getApiTypeFromSetMaxCacheFileCount(count);
        var jsonParams = {
            count: count,
            toJSON: function () {
                return {
                    count: count,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerCacheManagerImpl.prototype.getApiTypeFromSetMaxCacheFileCount = function (count) {
        return 'MediaPlayerCacheManager_setMaxCacheFileCount';
    };
    IMediaPlayerCacheManagerImpl.prototype.setMaxCacheFileSize = function (cacheSize) {
        var apiType = this.getApiTypeFromSetMaxCacheFileSize(cacheSize);
        var jsonParams = {
            cacheSize: cacheSize,
            toJSON: function () {
                return {
                    cacheSize: cacheSize,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerCacheManagerImpl.prototype.getApiTypeFromSetMaxCacheFileSize = function (cacheSize) {
        return 'MediaPlayerCacheManager_setMaxCacheFileSize';
    };
    IMediaPlayerCacheManagerImpl.prototype.enableAutoRemoveCache = function (enable) {
        var apiType = this.getApiTypeFromEnableAutoRemoveCache(enable);
        var jsonParams = {
            enable: enable,
            toJSON: function () {
                return {
                    enable: enable,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerCacheManagerImpl.prototype.getApiTypeFromEnableAutoRemoveCache = function (enable) {
        return 'MediaPlayerCacheManager_enableAutoRemoveCache';
    };
    IMediaPlayerCacheManagerImpl.prototype.getCacheDir = function (length) {
        var apiType = this.getApiTypeFromGetCacheDir(length);
        var jsonParams = {
            length: length,
            toJSON: function () {
                return {
                    length: length,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        var path = jsonResults.path;
        return path;
    };
    IMediaPlayerCacheManagerImpl.prototype.getApiTypeFromGetCacheDir = function (length) {
        return 'MediaPlayerCacheManager_getCacheDir';
    };
    IMediaPlayerCacheManagerImpl.prototype.getMaxCacheFileCount = function () {
        var apiType = this.getApiTypeFromGetMaxCacheFileCount();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerCacheManagerImpl.prototype.getApiTypeFromGetMaxCacheFileCount = function () {
        return 'MediaPlayerCacheManager_getMaxCacheFileCount';
    };
    IMediaPlayerCacheManagerImpl.prototype.getMaxCacheFileSize = function () {
        var apiType = this.getApiTypeFromGetMaxCacheFileSize();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerCacheManagerImpl.prototype.getApiTypeFromGetMaxCacheFileSize = function () {
        return 'MediaPlayerCacheManager_getMaxCacheFileSize';
    };
    IMediaPlayerCacheManagerImpl.prototype.getCacheFileCount = function () {
        var apiType = this.getApiTypeFromGetCacheFileCount();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaPlayerCacheManagerImpl.prototype.getApiTypeFromGetCacheFileCount = function () {
        return 'MediaPlayerCacheManager_getCacheFileCount';
    };
    return IMediaPlayerCacheManagerImpl;
}());
exports.IMediaPlayerCacheManagerImpl = IMediaPlayerCacheManagerImpl;
function processIMediaPlayerVideoFrameObserver(handler, event, jsonParams) {
    switch (event) {
        case 'onFrame':
            if (handler.onFrame !== undefined) {
                handler.onFrame(jsonParams.frame);
            }
            break;
    }
}
exports.processIMediaPlayerVideoFrameObserver = processIMediaPlayerVideoFrameObserver;
var IrisApiEngine_1 = require("../internal/IrisApiEngine");
