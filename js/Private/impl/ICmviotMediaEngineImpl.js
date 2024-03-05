"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IMediaEngineImpl = void 0;
var CmviotBase_1 = require("../CmviotBase");
var CmviotMediaBase_1 = require("../CmviotMediaBase");
// @ts-ignore
var IMediaEngineImpl = /** @class */ (function () {
    function IMediaEngineImpl() {
    }
    IMediaEngineImpl.prototype.registerAudioFrameObserver = function (observer) {
        var apiType = this.getApiTypeFromRegisterAudioFrameObserver(observer);
        var jsonParams = {
            observer: observer,
            toJSON: function () {
                return {};
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaEngineImpl.prototype.getApiTypeFromRegisterAudioFrameObserver = function (observer) {
        return 'MediaEngine_registerAudioFrameObserver';
    };
    IMediaEngineImpl.prototype.registerVideoFrameObserver = function (observer) {
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
    IMediaEngineImpl.prototype.getApiTypeFromRegisterVideoFrameObserver = function (observer) {
        return 'MediaEngine_registerVideoFrameObserver';
    };
    IMediaEngineImpl.prototype.registerVideoEncodedFrameObserver = function (observer) {
        var apiType = this.getApiTypeFromRegisterVideoEncodedFrameObserver(observer);
        var jsonParams = {
            observer: observer,
            toJSON: function () {
                return {};
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaEngineImpl.prototype.getApiTypeFromRegisterVideoEncodedFrameObserver = function (observer) {
        return 'MediaEngine_registerVideoEncodedFrameObserver';
    };
    IMediaEngineImpl.prototype.pushAudioFrame = function (frame, trackId) {
        if (trackId === void 0) { trackId = 0; }
        var apiType = this.getApiTypeFromPushAudioFrame(frame, trackId);
        var jsonParams = {
            frame: frame,
            trackId: trackId,
            toJSON: function () {
                return {
                    frame: frame,
                    trackId: trackId,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaEngineImpl.prototype.getApiTypeFromPushAudioFrame = function (frame, trackId) {
        if (trackId === void 0) { trackId = 0; }
        return 'MediaEngine_pushAudioFrame';
    };
    IMediaEngineImpl.prototype.pullAudioFrame = function (frame) {
        var apiType = this.getApiTypeFromPullAudioFrame(frame);
        var jsonParams = {
            frame: frame,
            toJSON: function () {
                return {
                    frame: frame,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaEngineImpl.prototype.getApiTypeFromPullAudioFrame = function (frame) {
        return 'MediaEngine_pullAudioFrame';
    };
    IMediaEngineImpl.prototype.setExternalVideoSource = function (enabled, useTexture, sourceType, encodedVideoOption) {
        if (sourceType === void 0) { sourceType = CmviotMediaBase_1.ExternalVideoSourceType.VideoFrame; }
        if (encodedVideoOption === void 0) { encodedVideoOption = new CmviotBase_1.SenderOptions(); }
        var apiType = this.getApiTypeFromSetExternalVideoSource(enabled, useTexture, sourceType, encodedVideoOption);
        var jsonParams = {
            enabled: enabled,
            useTexture: useTexture,
            sourceType: sourceType,
            encodedVideoOption: encodedVideoOption,
            toJSON: function () {
                return {
                    enabled: enabled,
                    useTexture: useTexture,
                    sourceType: sourceType,
                    encodedVideoOption: encodedVideoOption,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaEngineImpl.prototype.getApiTypeFromSetExternalVideoSource = function (enabled, useTexture, sourceType, encodedVideoOption) {
        if (sourceType === void 0) { sourceType = CmviotMediaBase_1.ExternalVideoSourceType.VideoFrame; }
        if (encodedVideoOption === void 0) { encodedVideoOption = new CmviotBase_1.SenderOptions(); }
        return 'MediaEngine_setExternalVideoSource';
    };
    IMediaEngineImpl.prototype.setExternalAudioSource = function (enabled, sampleRate, channels, localPlayback, publish) {
        if (localPlayback === void 0) { localPlayback = false; }
        if (publish === void 0) { publish = true; }
        var apiType = this.getApiTypeFromSetExternalAudioSource(enabled, sampleRate, channels, localPlayback, publish);
        var jsonParams = {
            enabled: enabled,
            sampleRate: sampleRate,
            channels: channels,
            localPlayback: localPlayback,
            publish: publish,
            toJSON: function () {
                return {
                    enabled: enabled,
                    sampleRate: sampleRate,
                    channels: channels,
                    localPlayback: localPlayback,
                    publish: publish,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaEngineImpl.prototype.getApiTypeFromSetExternalAudioSource = function (enabled, sampleRate, channels, localPlayback, publish) {
        if (localPlayback === void 0) { localPlayback = false; }
        if (publish === void 0) { publish = true; }
        return 'MediaEngine_setExternalAudioSource';
    };
    IMediaEngineImpl.prototype.createCustomAudioTrack = function (trackType, config) {
        var apiType = this.getApiTypeFromCreateCustomAudioTrack(trackType, config);
        var jsonParams = {
            trackType: trackType,
            config: config,
            toJSON: function () {
                return {
                    trackType: trackType,
                    config: config,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaEngineImpl.prototype.getApiTypeFromCreateCustomAudioTrack = function (trackType, config) {
        return 'MediaEngine_createCustomAudioTrack';
    };
    IMediaEngineImpl.prototype.destroyCustomAudioTrack = function (trackId) {
        var apiType = this.getApiTypeFromDestroyCustomAudioTrack(trackId);
        var jsonParams = {
            trackId: trackId,
            toJSON: function () {
                return {
                    trackId: trackId,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaEngineImpl.prototype.getApiTypeFromDestroyCustomAudioTrack = function (trackId) {
        return 'MediaEngine_destroyCustomAudioTrack';
    };
    IMediaEngineImpl.prototype.setExternalAudioSink = function (enabled, sampleRate, channels) {
        var apiType = this.getApiTypeFromSetExternalAudioSink(enabled, sampleRate, channels);
        var jsonParams = {
            enabled: enabled,
            sampleRate: sampleRate,
            channels: channels,
            toJSON: function () {
                return {
                    enabled: enabled,
                    sampleRate: sampleRate,
                    channels: channels,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaEngineImpl.prototype.getApiTypeFromSetExternalAudioSink = function (enabled, sampleRate, channels) {
        return 'MediaEngine_setExternalAudioSink';
    };
    IMediaEngineImpl.prototype.enableCustomAudioLocalPlayback = function (trackId, enabled) {
        var apiType = this.getApiTypeFromEnableCustomAudioLocalPlayback(trackId, enabled);
        var jsonParams = {
            trackId: trackId,
            enabled: enabled,
            toJSON: function () {
                return {
                    trackId: trackId,
                    enabled: enabled,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaEngineImpl.prototype.getApiTypeFromEnableCustomAudioLocalPlayback = function (trackId, enabled) {
        return 'MediaEngine_enableCustomAudioLocalPlayback';
    };
    IMediaEngineImpl.prototype.pushVideoFrame = function (frame, videoTrackId) {
        if (videoTrackId === void 0) { videoTrackId = 0; }
        var apiType = this.getApiTypeFromPushVideoFrame(frame, videoTrackId);
        var jsonParams = {
            frame: frame,
            videoTrackId: videoTrackId,
            toJSON: function () {
                return {
                    frame: frame,
                    videoTrackId: videoTrackId,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaEngineImpl.prototype.getApiTypeFromPushVideoFrame = function (frame, videoTrackId) {
        if (videoTrackId === void 0) { videoTrackId = 0; }
        return 'MediaEngine_pushVideoFrame';
    };
    IMediaEngineImpl.prototype.pushEncodedVideoImage = function (imageBuffer, length, videoEncodedFrameInfo, videoTrackId) {
        if (videoTrackId === void 0) { videoTrackId = 0; }
        var apiType = this.getApiTypeFromPushEncodedVideoImage(imageBuffer, length, videoEncodedFrameInfo, videoTrackId);
        var jsonParams = {
            imageBuffer: imageBuffer,
            length: length,
            videoEncodedFrameInfo: videoEncodedFrameInfo,
            videoTrackId: videoTrackId,
            toJSON: function () {
                return {
                    length: length,
                    videoEncodedFrameInfo: videoEncodedFrameInfo,
                    videoTrackId: videoTrackId,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaEngineImpl.prototype.getApiTypeFromPushEncodedVideoImage = function (imageBuffer, length, videoEncodedFrameInfo, videoTrackId) {
        if (videoTrackId === void 0) { videoTrackId = 0; }
        return 'MediaEngine_pushEncodedVideoImage';
    };
    IMediaEngineImpl.prototype.release = function () {
        var apiType = this.getApiTypeFromRelease();
        var jsonParams = {};
        IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
    };
    IMediaEngineImpl.prototype.getApiTypeFromRelease = function () {
        return 'MediaEngine_release';
    };
    IMediaEngineImpl.prototype.unregisterAudioFrameObserver = function (observer) {
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
    IMediaEngineImpl.prototype.getApiTypeFromUnregisterAudioFrameObserver = function (observer) {
        return 'MediaEngine_unregisterAudioFrameObserver';
    };
    IMediaEngineImpl.prototype.unregisterVideoFrameObserver = function (observer) {
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
    IMediaEngineImpl.prototype.getApiTypeFromUnregisterVideoFrameObserver = function (observer) {
        return 'MediaEngine_unregisterVideoFrameObserver';
    };
    IMediaEngineImpl.prototype.unregisterVideoEncodedFrameObserver = function (observer) {
        var apiType = this.getApiTypeFromUnregisterVideoEncodedFrameObserver(observer);
        var jsonParams = {
            observer: observer,
            toJSON: function () {
                return {};
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaEngineImpl.prototype.getApiTypeFromUnregisterVideoEncodedFrameObserver = function (observer) {
        return 'MediaEngine_unregisterVideoEncodedFrameObserver';
    };
    return IMediaEngineImpl;
}());
exports.IMediaEngineImpl = IMediaEngineImpl;
var IrisApiEngine_1 = require("../internal/IrisApiEngine");
