"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IRtcEngineImpl = exports.processIDirectCdnStreamingEventHandler = exports.processIMetadataObserver = exports.IVideoDeviceManagerImpl = exports.processIRtcEngineEventHandler = void 0;
var CmviotBase_1 = require("../CmviotBase");
var CmviotMediaBase_1 = require("../CmviotMediaBase");
function processIRtcEngineEventHandler(handler, event, jsonParams) {
    switch (event) {
        case 'onJoinChannelSuccess':
            if (handler.onJoinChannelSuccess !== undefined) {
                handler.onJoinChannelSuccess(jsonParams.connection, jsonParams.elapsed);
            }
            break;
        case 'onRejoinChannelSuccess':
            if (handler.onRejoinChannelSuccess !== undefined) {
                handler.onRejoinChannelSuccess(jsonParams.connection, jsonParams.elapsed);
            }
            break;
        case 'onProxyConnected':
            if (handler.onProxyConnected !== undefined) {
                handler.onProxyConnected(jsonParams.channel, jsonParams.uid, jsonParams.proxyType, jsonParams.localProxyIp, jsonParams.elapsed);
            }
            break;
        case 'onError':
            if (handler.onError !== undefined) {
                handler.onError(jsonParams.err, jsonParams.msg);
            }
            break;
        case 'onAudioQuality':
            if (handler.onAudioQuality !== undefined) {
                handler.onAudioQuality(jsonParams.connection, jsonParams.remoteUid, jsonParams.quality, jsonParams.delay, jsonParams.lost);
            }
            break;
        case 'onLastmileProbeResult':
            if (handler.onLastmileProbeResult !== undefined) {
                handler.onLastmileProbeResult(jsonParams.result);
            }
            break;
        case 'onAudioVolumeIndication':
            if (handler.onAudioVolumeIndication !== undefined) {
                handler.onAudioVolumeIndication(jsonParams.connection, jsonParams.speakers, jsonParams.speakerNumber, jsonParams.totalVolume);
            }
            break;
        case 'onLeaveChannel':
            if (handler.onLeaveChannel !== undefined) {
                handler.onLeaveChannel(jsonParams.connection, jsonParams.stats);
            }
            break;
        case 'onRtcStats':
            if (handler.onRtcStats !== undefined) {
                handler.onRtcStats(jsonParams.connection, jsonParams.stats);
            }
            break;
        case 'onAudioDeviceStateChanged':
            if (handler.onAudioDeviceStateChanged !== undefined) {
                handler.onAudioDeviceStateChanged(jsonParams.deviceId, jsonParams.deviceType, jsonParams.deviceState);
            }
            break;
        case 'onAudioMixingPositionChanged':
            if (handler.onAudioMixingPositionChanged !== undefined) {
                handler.onAudioMixingPositionChanged(jsonParams.position);
            }
            break;
        case 'onAudioMixingFinished':
            if (handler.onAudioMixingFinished !== undefined) {
                handler.onAudioMixingFinished();
            }
            break;
        case 'onAudioEffectFinished':
            if (handler.onAudioEffectFinished !== undefined) {
                handler.onAudioEffectFinished(jsonParams.soundId);
            }
            break;
        case 'onVideoDeviceStateChanged':
            if (handler.onVideoDeviceStateChanged !== undefined) {
                handler.onVideoDeviceStateChanged(jsonParams.deviceId, jsonParams.deviceType, jsonParams.deviceState);
            }
            break;
        case 'onNetworkQuality':
            if (handler.onNetworkQuality !== undefined) {
                handler.onNetworkQuality(jsonParams.connection, jsonParams.remoteUid, jsonParams.txQuality, jsonParams.rxQuality);
            }
            break;
        case 'onIntraRequestReceived':
            if (handler.onIntraRequestReceived !== undefined) {
                handler.onIntraRequestReceived(jsonParams.connection);
            }
            break;
        case 'onUplinkNetworkInfoUpdated':
            if (handler.onUplinkNetworkInfoUpdated !== undefined) {
                handler.onUplinkNetworkInfoUpdated(jsonParams.info);
            }
            break;
        case 'onDownlinkNetworkInfoUpdated':
            if (handler.onDownlinkNetworkInfoUpdated !== undefined) {
                handler.onDownlinkNetworkInfoUpdated(jsonParams.info);
            }
            break;
        case 'onLastmileQuality':
            if (handler.onLastmileQuality !== undefined) {
                handler.onLastmileQuality(jsonParams.quality);
            }
            break;
        case 'onFirstLocalVideoFrame':
            if (handler.onFirstLocalVideoFrame !== undefined) {
                handler.onFirstLocalVideoFrame(jsonParams.source, jsonParams.width, jsonParams.height, jsonParams.elapsed);
            }
            break;
        case 'onFirstLocalVideoFramePublished':
            if (handler.onFirstLocalVideoFramePublished !== undefined) {
                handler.onFirstLocalVideoFramePublished(jsonParams.source, jsonParams.elapsed);
            }
            break;
        case 'onFirstRemoteVideoDecoded':
            if (handler.onFirstRemoteVideoDecoded !== undefined) {
                handler.onFirstRemoteVideoDecoded(jsonParams.connection, jsonParams.remoteUid, jsonParams.width, jsonParams.height, jsonParams.elapsed);
            }
            break;
        case 'onVideoSizeChanged':
            if (handler.onVideoSizeChanged !== undefined) {
                handler.onVideoSizeChanged(jsonParams.connection, jsonParams.sourceType, jsonParams.uid, jsonParams.width, jsonParams.height, jsonParams.rotation);
            }
            break;
        case 'onLocalVideoStateChanged':
            if (handler.onLocalVideoStateChanged !== undefined) {
                handler.onLocalVideoStateChanged(jsonParams.source, jsonParams.state, jsonParams.error);
            }
            break;
        case 'onRemoteVideoStateChanged':
            if (handler.onRemoteVideoStateChanged !== undefined) {
                handler.onRemoteVideoStateChanged(jsonParams.connection, jsonParams.remoteUid, jsonParams.state, jsonParams.reason, jsonParams.elapsed);
            }
            break;
        case 'onFirstRemoteVideoFrame':
            if (handler.onFirstRemoteVideoFrame !== undefined) {
                handler.onFirstRemoteVideoFrame(jsonParams.connection, jsonParams.remoteUid, jsonParams.width, jsonParams.height, jsonParams.elapsed);
            }
            break;
        case 'onUserJoined':
            if (handler.onUserJoined !== undefined) {
                handler.onUserJoined(jsonParams.connection, jsonParams.remoteUid, jsonParams.elapsed);
            }
            break;
        case 'onUserOffline':
            if (handler.onUserOffline !== undefined) {
                handler.onUserOffline(jsonParams.connection, jsonParams.remoteUid, jsonParams.reason);
            }
            break;
        case 'onUserMuteAudio':
            if (handler.onUserMuteAudio !== undefined) {
                handler.onUserMuteAudio(jsonParams.connection, jsonParams.remoteUid, jsonParams.muted);
            }
            break;
        case 'onUserMuteVideo':
            if (handler.onUserMuteVideo !== undefined) {
                handler.onUserMuteVideo(jsonParams.connection, jsonParams.remoteUid, jsonParams.muted);
            }
            break;
        case 'onUserEnableVideo':
            if (handler.onUserEnableVideo !== undefined) {
                handler.onUserEnableVideo(jsonParams.connection, jsonParams.remoteUid, jsonParams.enabled);
            }
            break;
        case 'onUserStateChanged':
            if (handler.onUserStateChanged !== undefined) {
                handler.onUserStateChanged(jsonParams.connection, jsonParams.remoteUid, jsonParams.state);
            }
            break;
        case 'onUserEnableLocalVideo':
            if (handler.onUserEnableLocalVideo !== undefined) {
                handler.onUserEnableLocalVideo(jsonParams.connection, jsonParams.remoteUid, jsonParams.enabled);
            }
            break;
        case 'onLocalAudioStats':
            if (handler.onLocalAudioStats !== undefined) {
                handler.onLocalAudioStats(jsonParams.connection, jsonParams.stats);
            }
            break;
        case 'onRemoteAudioStats':
            if (handler.onRemoteAudioStats !== undefined) {
                handler.onRemoteAudioStats(jsonParams.connection, jsonParams.stats);
            }
            break;
        case 'onLocalVideoStats':
            if (handler.onLocalVideoStats !== undefined) {
                handler.onLocalVideoStats(jsonParams.source, jsonParams.stats);
            }
            break;
        case 'onRemoteVideoStats':
            if (handler.onRemoteVideoStats !== undefined) {
                handler.onRemoteVideoStats(jsonParams.connection, jsonParams.stats);
            }
            break;
        case 'onCameraReady':
            if (handler.onCameraReady !== undefined) {
                handler.onCameraReady();
            }
            break;
        case 'onCameraFocusAreaChanged':
            if (handler.onCameraFocusAreaChanged !== undefined) {
                handler.onCameraFocusAreaChanged(jsonParams.x, jsonParams.y, jsonParams.width, jsonParams.height);
            }
            break;
        case 'onCameraExposureAreaChanged':
            if (handler.onCameraExposureAreaChanged !== undefined) {
                handler.onCameraExposureAreaChanged(jsonParams.x, jsonParams.y, jsonParams.width, jsonParams.height);
            }
            break;
        case 'onFacePositionChanged':
            if (handler.onFacePositionChanged !== undefined) {
                handler.onFacePositionChanged(jsonParams.imageWidth, jsonParams.imageHeight, jsonParams.vecRectangle, jsonParams.vecDistance, jsonParams.numFaces);
            }
            break;
        case 'onVideoStopped':
            if (handler.onVideoStopped !== undefined) {
                handler.onVideoStopped();
            }
            break;
        case 'onAudioMixingStateChanged':
            if (handler.onAudioMixingStateChanged !== undefined) {
                handler.onAudioMixingStateChanged(jsonParams.state, jsonParams.reason);
            }
            break;
        case 'onRhythmPlayerStateChanged':
            if (handler.onRhythmPlayerStateChanged !== undefined) {
                handler.onRhythmPlayerStateChanged(jsonParams.state, jsonParams.errorCode);
            }
            break;
        case 'onConnectionLost':
            if (handler.onConnectionLost !== undefined) {
                handler.onConnectionLost(jsonParams.connection);
            }
            break;
        case 'onConnectionInterrupted':
            if (handler.onConnectionInterrupted !== undefined) {
                handler.onConnectionInterrupted(jsonParams.connection);
            }
            break;
        case 'onConnectionBanned':
            if (handler.onConnectionBanned !== undefined) {
                handler.onConnectionBanned(jsonParams.connection);
            }
            break;
        case 'onStreamMessage':
            if (handler.onStreamMessage !== undefined) {
                handler.onStreamMessage(jsonParams.connection, jsonParams.remoteUid, jsonParams.streamId, jsonParams.data, jsonParams.length, jsonParams.sentTs);
            }
            break;
        case 'onStreamMessageError':
            if (handler.onStreamMessageError !== undefined) {
                handler.onStreamMessageError(jsonParams.connection, jsonParams.remoteUid, jsonParams.streamId, jsonParams.code, jsonParams.missed, jsonParams.cached);
            }
            break;
        case 'onRequestToken':
            if (handler.onRequestToken !== undefined) {
                handler.onRequestToken(jsonParams.connection);
            }
            break;
        case 'onTokenPrivilegeWillExpire':
            if (handler.onTokenPrivilegeWillExpire !== undefined) {
                handler.onTokenPrivilegeWillExpire(jsonParams.connection, jsonParams.token);
            }
            break;
        case 'onLicenseValidationFailure':
            if (handler.onLicenseValidationFailure !== undefined) {
                handler.onLicenseValidationFailure(jsonParams.connection, jsonParams.reason);
            }
            break;
        case 'onFirstLocalAudioFramePublished':
            if (handler.onFirstLocalAudioFramePublished !== undefined) {
                handler.onFirstLocalAudioFramePublished(jsonParams.connection, jsonParams.elapsed);
            }
            break;
        case 'onFirstRemoteAudioFrame':
            if (handler.onFirstRemoteAudioFrame !== undefined) {
                handler.onFirstRemoteAudioFrame(jsonParams.connection, jsonParams.userId, jsonParams.elapsed);
            }
            break;
        case 'onFirstRemoteAudioDecoded':
            if (handler.onFirstRemoteAudioDecoded !== undefined) {
                handler.onFirstRemoteAudioDecoded(jsonParams.connection, jsonParams.uid, jsonParams.elapsed);
            }
            break;
        case 'onLocalAudioStateChanged':
            if (handler.onLocalAudioStateChanged !== undefined) {
                handler.onLocalAudioStateChanged(jsonParams.connection, jsonParams.state, jsonParams.error);
            }
            break;
        case 'onRemoteAudioStateChanged':
            if (handler.onRemoteAudioStateChanged !== undefined) {
                handler.onRemoteAudioStateChanged(jsonParams.connection, jsonParams.remoteUid, jsonParams.state, jsonParams.reason, jsonParams.elapsed);
            }
            break;
        case 'onActiveSpeaker':
            if (handler.onActiveSpeaker !== undefined) {
                handler.onActiveSpeaker(jsonParams.connection, jsonParams.uid);
            }
            break;
        case 'onContentInspectResult':
            if (handler.onContentInspectResult !== undefined) {
                handler.onContentInspectResult(jsonParams.result);
            }
            break;
        case 'onSnapshotTaken':
            if (handler.onSnapshotTaken !== undefined) {
                handler.onSnapshotTaken(jsonParams.connection, jsonParams.uid, jsonParams.filePath, jsonParams.width, jsonParams.height, jsonParams.errCode);
            }
            break;
        case 'onClientRoleChanged':
            if (handler.onClientRoleChanged !== undefined) {
                handler.onClientRoleChanged(jsonParams.connection, jsonParams.oldRole, jsonParams.newRole, jsonParams.newRoleOptions);
            }
            break;
        case 'onClientRoleChangeFailed':
            if (handler.onClientRoleChangeFailed !== undefined) {
                handler.onClientRoleChangeFailed(jsonParams.connection, jsonParams.reason, jsonParams.currentRole);
            }
            break;
        case 'onAudioDeviceVolumeChanged':
            if (handler.onAudioDeviceVolumeChanged !== undefined) {
                handler.onAudioDeviceVolumeChanged(jsonParams.deviceType, jsonParams.volume, jsonParams.muted);
            }
            break;
        case 'onRtmpStreamingStateChanged':
            if (handler.onRtmpStreamingStateChanged !== undefined) {
                handler.onRtmpStreamingStateChanged(jsonParams.url, jsonParams.state, jsonParams.errCode);
            }
            break;
        case 'onRtmpStreamingEvent':
            if (handler.onRtmpStreamingEvent !== undefined) {
                handler.onRtmpStreamingEvent(jsonParams.url, jsonParams.eventCode);
            }
            break;
        case 'onTranscodingUpdated':
            if (handler.onTranscodingUpdated !== undefined) {
                handler.onTranscodingUpdated();
            }
            break;
        case 'onAudioRoutingChanged':
            if (handler.onAudioRoutingChanged !== undefined) {
                handler.onAudioRoutingChanged(jsonParams.routing);
            }
            break;
        case 'onChannelMediaRelayStateChanged':
            if (handler.onChannelMediaRelayStateChanged !== undefined) {
                handler.onChannelMediaRelayStateChanged(jsonParams.state, jsonParams.code);
            }
            break;
        case 'onChannelMediaRelayEvent':
            if (handler.onChannelMediaRelayEvent !== undefined) {
                handler.onChannelMediaRelayEvent(jsonParams.code);
            }
            break;
        case 'onLocalPublishFallbackToAudioOnly':
            if (handler.onLocalPublishFallbackToAudioOnly !== undefined) {
                handler.onLocalPublishFallbackToAudioOnly(jsonParams.isFallbackOrRecover);
            }
            break;
        case 'onRemoteSubscribeFallbackToAudioOnly':
            if (handler.onRemoteSubscribeFallbackToAudioOnly !== undefined) {
                handler.onRemoteSubscribeFallbackToAudioOnly(jsonParams.uid, jsonParams.isFallbackOrRecover);
            }
            break;
        case 'onRemoteAudioTransportStats':
            if (handler.onRemoteAudioTransportStats !== undefined) {
                handler.onRemoteAudioTransportStats(jsonParams.connection, jsonParams.remoteUid, jsonParams.delay, jsonParams.lost, jsonParams.rxKBitRate);
            }
            break;
        case 'onRemoteVideoTransportStats':
            if (handler.onRemoteVideoTransportStats !== undefined) {
                handler.onRemoteVideoTransportStats(jsonParams.connection, jsonParams.remoteUid, jsonParams.delay, jsonParams.lost, jsonParams.rxKBitRate);
            }
            break;
        case 'onConnectionStateChanged':
            if (handler.onConnectionStateChanged !== undefined) {
                handler.onConnectionStateChanged(jsonParams.connection, jsonParams.state, jsonParams.reason);
            }
            break;
        case 'onWlAccMessage':
            if (handler.onWlAccMessage !== undefined) {
                handler.onWlAccMessage(jsonParams.connection, jsonParams.reason, jsonParams.action, jsonParams.wlAccMsg);
            }
            break;
        case 'onWlAccStats':
            if (handler.onWlAccStats !== undefined) {
                handler.onWlAccStats(jsonParams.connection, jsonParams.currentStats, jsonParams.averageStats);
            }
            break;
        case 'onNetworkTypeChanged':
            if (handler.onNetworkTypeChanged !== undefined) {
                handler.onNetworkTypeChanged(jsonParams.connection, jsonParams.type);
            }
            break;
        case 'onEncryptionError':
            if (handler.onEncryptionError !== undefined) {
                handler.onEncryptionError(jsonParams.connection, jsonParams.errorType);
            }
            break;
        case 'onPermissionError':
            if (handler.onPermissionError !== undefined) {
                handler.onPermissionError(jsonParams.permissionType);
            }
            break;
        case 'onLocalUserRegistered':
            if (handler.onLocalUserRegistered !== undefined) {
                handler.onLocalUserRegistered(jsonParams.uid, jsonParams.userAccount);
            }
            break;
        case 'onUserInfoUpdated':
            if (handler.onUserInfoUpdated !== undefined) {
                handler.onUserInfoUpdated(jsonParams.uid, jsonParams.info);
            }
            break;
        case 'onUploadLogResult':
            if (handler.onUploadLogResult !== undefined) {
                handler.onUploadLogResult(jsonParams.connection, jsonParams.requestId, jsonParams.success, jsonParams.reason);
            }
            break;
        case 'onAudioSubscribeStateChanged':
            if (handler.onAudioSubscribeStateChanged !== undefined) {
                handler.onAudioSubscribeStateChanged(jsonParams.channel, jsonParams.uid, jsonParams.oldState, jsonParams.newState, jsonParams.elapseSinceLastState);
            }
            break;
        case 'onVideoSubscribeStateChanged':
            if (handler.onVideoSubscribeStateChanged !== undefined) {
                handler.onVideoSubscribeStateChanged(jsonParams.channel, jsonParams.uid, jsonParams.oldState, jsonParams.newState, jsonParams.elapseSinceLastState);
            }
            break;
        case 'onAudioPublishStateChanged':
            if (handler.onAudioPublishStateChanged !== undefined) {
                handler.onAudioPublishStateChanged(jsonParams.channel, jsonParams.oldState, jsonParams.newState, jsonParams.elapseSinceLastState);
            }
            break;
        case 'onVideoPublishStateChanged':
            if (handler.onVideoPublishStateChanged !== undefined) {
                handler.onVideoPublishStateChanged(jsonParams.source, jsonParams.channel, jsonParams.oldState, jsonParams.newState, jsonParams.elapseSinceLastState);
            }
            break;
        case 'onExtensionEvent':
            if (handler.onExtensionEvent !== undefined) {
                handler.onExtensionEvent(jsonParams.provider, jsonParams.extension, jsonParams.key, jsonParams.value);
            }
            break;
        case 'onExtensionStarted':
            if (handler.onExtensionStarted !== undefined) {
                handler.onExtensionStarted(jsonParams.provider, jsonParams.extension);
            }
            break;
        case 'onExtensionStopped':
            if (handler.onExtensionStopped !== undefined) {
                handler.onExtensionStopped(jsonParams.provider, jsonParams.extension);
            }
            break;
        case 'onExtensionError':
            if (handler.onExtensionError !== undefined) {
                handler.onExtensionError(jsonParams.provider, jsonParams.extension, jsonParams.error, jsonParams.message);
            }
            break;
        case 'onUserAccountUpdated':
            if (handler.onUserAccountUpdated !== undefined) {
                handler.onUserAccountUpdated(jsonParams.connection, jsonParams.remoteUid, jsonParams.userAccount);
            }
            break;
        case 'onLocalVideoTranscoderError':
            if (handler.onLocalVideoTranscoderError !== undefined) {
                handler.onLocalVideoTranscoderError(jsonParams.stream, jsonParams.error);
            }
            break;
        case 'onVideoRenderingTracingResult':
            if (handler.onVideoRenderingTracingResult !== undefined) {
                handler.onVideoRenderingTracingResult(jsonParams.connection, jsonParams.uid, jsonParams.currentEvent, jsonParams.tracingInfo);
            }
            break;
    }
}
exports.processIRtcEngineEventHandler = processIRtcEngineEventHandler;
// @ts-ignore
var IVideoDeviceManagerImpl = /** @class */ (function () {
    function IVideoDeviceManagerImpl() {
    }
    IVideoDeviceManagerImpl.prototype.enumerateVideoDevices = function () {
        var apiType = this.getApiTypeFromEnumerateVideoDevices();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IVideoDeviceManagerImpl.prototype.getApiTypeFromEnumerateVideoDevices = function () {
        return 'VideoDeviceManager_enumerateVideoDevices';
    };
    IVideoDeviceManagerImpl.prototype.setDevice = function (deviceIdUTF8) {
        var apiType = this.getApiTypeFromSetDevice(deviceIdUTF8);
        var jsonParams = {
            deviceIdUTF8: deviceIdUTF8,
            toJSON: function () {
                return {
                    deviceIdUTF8: deviceIdUTF8,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IVideoDeviceManagerImpl.prototype.getApiTypeFromSetDevice = function (deviceIdUTF8) {
        return 'VideoDeviceManager_setDevice';
    };
    IVideoDeviceManagerImpl.prototype.getDevice = function () {
        var apiType = this.getApiTypeFromGetDevice();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        var deviceIdUTF8 = jsonResults.deviceIdUTF8;
        return deviceIdUTF8;
    };
    IVideoDeviceManagerImpl.prototype.getApiTypeFromGetDevice = function () {
        return 'VideoDeviceManager_getDevice';
    };
    IVideoDeviceManagerImpl.prototype.numberOfCapabilities = function (deviceIdUTF8) {
        var apiType = this.getApiTypeFromNumberOfCapabilities(deviceIdUTF8);
        var jsonParams = {
            deviceIdUTF8: deviceIdUTF8,
            toJSON: function () {
                return {
                    deviceIdUTF8: deviceIdUTF8,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IVideoDeviceManagerImpl.prototype.getApiTypeFromNumberOfCapabilities = function (deviceIdUTF8) {
        return 'VideoDeviceManager_numberOfCapabilities';
    };
    IVideoDeviceManagerImpl.prototype.getCapability = function (deviceIdUTF8, deviceCapabilityNumber) {
        var apiType = this.getApiTypeFromGetCapability(deviceIdUTF8, deviceCapabilityNumber);
        var jsonParams = {
            deviceIdUTF8: deviceIdUTF8,
            deviceCapabilityNumber: deviceCapabilityNumber,
            toJSON: function () {
                return {
                    deviceIdUTF8: deviceIdUTF8,
                    deviceCapabilityNumber: deviceCapabilityNumber,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        var capability = jsonResults.capability;
        return capability;
    };
    IVideoDeviceManagerImpl.prototype.getApiTypeFromGetCapability = function (deviceIdUTF8, deviceCapabilityNumber) {
        return 'VideoDeviceManager_getCapability';
    };
    IVideoDeviceManagerImpl.prototype.startDeviceTest = function (hwnd) {
        var apiType = this.getApiTypeFromStartDeviceTest(hwnd);
        var jsonParams = {
            hwnd: hwnd,
            toJSON: function () {
                return {
                    hwnd: hwnd,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IVideoDeviceManagerImpl.prototype.getApiTypeFromStartDeviceTest = function (hwnd) {
        return 'VideoDeviceManager_startDeviceTest';
    };
    IVideoDeviceManagerImpl.prototype.stopDeviceTest = function () {
        var apiType = this.getApiTypeFromStopDeviceTest();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IVideoDeviceManagerImpl.prototype.getApiTypeFromStopDeviceTest = function () {
        return 'VideoDeviceManager_stopDeviceTest';
    };
    IVideoDeviceManagerImpl.prototype.release = function () {
        var apiType = this.getApiTypeFromRelease();
        var jsonParams = {};
        IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
    };
    IVideoDeviceManagerImpl.prototype.getApiTypeFromRelease = function () {
        return 'VideoDeviceManager_release';
    };
    return IVideoDeviceManagerImpl;
}());
exports.IVideoDeviceManagerImpl = IVideoDeviceManagerImpl;
function processIMetadataObserver(handler, event, jsonParams) {
    switch (event) {
        case 'onMetadataReceived':
            if (handler.onMetadataReceived !== undefined) {
                handler.onMetadataReceived(jsonParams.metadata);
            }
            break;
    }
}
exports.processIMetadataObserver = processIMetadataObserver;
function processIDirectCdnStreamingEventHandler(handler, event, jsonParams) {
    switch (event) {
        case 'onDirectCdnStreamingStateChanged':
            if (handler.onDirectCdnStreamingStateChanged !== undefined) {
                handler.onDirectCdnStreamingStateChanged(jsonParams.state, jsonParams.error, jsonParams.message);
            }
            break;
        case 'onDirectCdnStreamingStats':
            if (handler.onDirectCdnStreamingStats !== undefined) {
                handler.onDirectCdnStreamingStats(jsonParams.stats);
            }
            break;
    }
}
exports.processIDirectCdnStreamingEventHandler = processIDirectCdnStreamingEventHandler;
// @ts-ignore
var IRtcEngineImpl = /** @class */ (function () {
    function IRtcEngineImpl() {
    }
    IRtcEngineImpl.prototype.release = function (sync) {
        if (sync === void 0) { sync = false; }
        var apiType = this.getApiTypeFromRelease(sync);
        var jsonParams = {
            sync: sync,
            toJSON: function () {
                return {
                    sync: sync,
                };
            },
        };
        IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
    };
    IRtcEngineImpl.prototype.getApiTypeFromRelease = function (sync) {
        if (sync === void 0) { sync = false; }
        return 'RtcEngine_release';
    };
    IRtcEngineImpl.prototype.initialize = function (context) {
        var apiType = this.getApiTypeFromInitialize(context);
        var jsonParams = {
            context: context,
            toJSON: function () {
                return {
                    context: context,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromInitialize = function (context) {
        return 'RtcEngine_initialize';
    };
    IRtcEngineImpl.prototype.getVersion = function () {
        var apiType = this.getApiTypeFromGetVersion();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromGetVersion = function () {
        return 'RtcEngine_getVersion';
    };
    IRtcEngineImpl.prototype.getErrorDescription = function (code) {
        var apiType = this.getApiTypeFromGetErrorDescription(code);
        var jsonParams = {
            code: code,
            toJSON: function () {
                return {
                    code: code,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromGetErrorDescription = function (code) {
        return 'RtcEngine_getErrorDescription';
    };
    IRtcEngineImpl.prototype.queryCodecCapability = function () {
        var apiType = this.getApiTypeFromQueryCodecCapability();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        var codecInfo = jsonResults.codecInfo;
        var size = jsonResults.size;
        return {
            codecInfo: codecInfo,
            size: size,
        };
    };
    IRtcEngineImpl.prototype.getApiTypeFromQueryCodecCapability = function () {
        return 'RtcEngine_queryCodecCapability';
    };
    IRtcEngineImpl.prototype.preloadChannel = function (token, channelId, uid) {
        var apiType = this.getApiTypeFromPreloadChannel(token, channelId, uid);
        var jsonParams = {
            token: token,
            channelId: channelId,
            uid: uid,
            toJSON: function () {
                return {
                    token: token,
                    channelId: channelId,
                    uid: uid,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromPreloadChannel = function (token, channelId, uid) {
        return 'RtcEngine_preloadChannel';
    };
    IRtcEngineImpl.prototype.preloadChannelWithUserAccount = function (token, channelId, userAccount) {
        var apiType = this.getApiTypeFromPreloadChannelWithUserAccount(token, channelId, userAccount);
        var jsonParams = {
            token: token,
            channelId: channelId,
            userAccount: userAccount,
            toJSON: function () {
                return {
                    token: token,
                    channelId: channelId,
                    userAccount: userAccount,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromPreloadChannelWithUserAccount = function (token, channelId, userAccount) {
        return 'RtcEngine_preloadChannelWithUserAccount';
    };
    IRtcEngineImpl.prototype.updatePreloadChannelToken = function (token) {
        var apiType = this.getApiTypeFromUpdatePreloadChannelToken(token);
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
    IRtcEngineImpl.prototype.getApiTypeFromUpdatePreloadChannelToken = function (token) {
        return 'RtcEngine_updatePreloadChannelToken';
    };
    IRtcEngineImpl.prototype.joinChannel = function (token, channelId, uid, options) {
        var apiType = this.getApiTypeFromJoinChannel(token, channelId, uid, options);
        var jsonParams = {
            token: token,
            channelId: channelId,
            uid: uid,
            options: options,
            toJSON: function () {
                return {
                    token: token,
                    channelId: channelId,
                    uid: uid,
                    options: options,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromJoinChannel = function (token, channelId, uid, options) {
        return 'RtcEngine_joinChannel';
    };
    IRtcEngineImpl.prototype.updateChannelMediaOptions = function (options) {
        var apiType = this.getApiTypeFromUpdateChannelMediaOptions(options);
        var jsonParams = {
            options: options,
            toJSON: function () {
                return {
                    options: options,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromUpdateChannelMediaOptions = function (options) {
        return 'RtcEngine_updateChannelMediaOptions';
    };
    IRtcEngineImpl.prototype.leaveChannel = function (options) {
        var apiType = this.getApiTypeFromLeaveChannel(options);
        var jsonParams = {
            options: options,
            toJSON: function () {
                return {
                    options: options,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromLeaveChannel = function (options) {
        return 'RtcEngine_leaveChannel';
    };
    IRtcEngineImpl.prototype.renewToken = function (token) {
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
    IRtcEngineImpl.prototype.getApiTypeFromRenewToken = function (token) {
        return 'RtcEngine_renewToken';
    };
    IRtcEngineImpl.prototype.setChannelProfile = function (profile) {
        var apiType = this.getApiTypeFromSetChannelProfile(profile);
        var jsonParams = {
            profile: profile,
            toJSON: function () {
                return {
                    profile: profile,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetChannelProfile = function (profile) {
        return 'RtcEngine_setChannelProfile';
    };
    IRtcEngineImpl.prototype.setClientRole = function (role, options) {
        var apiType = this.getApiTypeFromSetClientRole(role, options);
        var jsonParams = {
            role: role,
            options: options,
            toJSON: function () {
                return {
                    role: role,
                    options: options,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetClientRole = function (role, options) {
        return 'RtcEngine_setClientRole';
    };
    IRtcEngineImpl.prototype.startEchoTest = function (config) {
        var apiType = this.getApiTypeFromStartEchoTest(config);
        var jsonParams = {
            config: config,
            toJSON: function () {
                return {
                    config: config,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromStartEchoTest = function (config) {
        return 'RtcEngine_startEchoTest';
    };
    IRtcEngineImpl.prototype.stopEchoTest = function () {
        var apiType = this.getApiTypeFromStopEchoTest();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromStopEchoTest = function () {
        return 'RtcEngine_stopEchoTest';
    };
    IRtcEngineImpl.prototype.enableMultiCamera = function (enabled, config) {
        var apiType = this.getApiTypeFromEnableMultiCamera(enabled, config);
        var jsonParams = {
            enabled: enabled,
            config: config,
            toJSON: function () {
                return {
                    enabled: enabled,
                    config: config,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromEnableMultiCamera = function (enabled, config) {
        return 'RtcEngine_enableMultiCamera';
    };
    IRtcEngineImpl.prototype.enableVideo = function () {
        var apiType = this.getApiTypeFromEnableVideo();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromEnableVideo = function () {
        return 'RtcEngine_enableVideo';
    };
    IRtcEngineImpl.prototype.disableVideo = function () {
        var apiType = this.getApiTypeFromDisableVideo();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromDisableVideo = function () {
        return 'RtcEngine_disableVideo';
    };
    IRtcEngineImpl.prototype.startPreview = function (sourceType) {
        if (sourceType === void 0) { sourceType = CmviotMediaBase_1.VideoSourceType.VideoSourceCameraPrimary; }
        var apiType = this.getApiTypeFromStartPreview(sourceType);
        var jsonParams = {
            sourceType: sourceType,
            toJSON: function () {
                return {
                    sourceType: sourceType,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromStartPreview = function (sourceType) {
        if (sourceType === void 0) { sourceType = CmviotMediaBase_1.VideoSourceType.VideoSourceCameraPrimary; }
        return 'RtcEngine_startPreview';
    };
    IRtcEngineImpl.prototype.stopPreview = function (sourceType) {
        if (sourceType === void 0) { sourceType = CmviotMediaBase_1.VideoSourceType.VideoSourceCameraPrimary; }
        var apiType = this.getApiTypeFromStopPreview(sourceType);
        var jsonParams = {
            sourceType: sourceType,
            toJSON: function () {
                return {
                    sourceType: sourceType,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromStopPreview = function (sourceType) {
        if (sourceType === void 0) { sourceType = CmviotMediaBase_1.VideoSourceType.VideoSourceCameraPrimary; }
        return 'RtcEngine_stopPreview';
    };
    IRtcEngineImpl.prototype.startLastmileProbeTest = function (config) {
        var apiType = this.getApiTypeFromStartLastmileProbeTest(config);
        var jsonParams = {
            config: config,
            toJSON: function () {
                return {
                    config: config,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromStartLastmileProbeTest = function (config) {
        return 'RtcEngine_startLastmileProbeTest';
    };
    IRtcEngineImpl.prototype.stopLastmileProbeTest = function () {
        var apiType = this.getApiTypeFromStopLastmileProbeTest();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromStopLastmileProbeTest = function () {
        return 'RtcEngine_stopLastmileProbeTest';
    };
    IRtcEngineImpl.prototype.setVideoEncoderConfiguration = function (config) {
        var apiType = this.getApiTypeFromSetVideoEncoderConfiguration(config);
        var jsonParams = {
            config: config,
            toJSON: function () {
                return {
                    config: config,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetVideoEncoderConfiguration = function (config) {
        return 'RtcEngine_setVideoEncoderConfiguration';
    };
    IRtcEngineImpl.prototype.setBeautyEffectOptions = function (enabled, options, type) {
        if (type === void 0) { type = CmviotMediaBase_1.MediaSourceType.PrimaryCameraSource; }
        var apiType = this.getApiTypeFromSetBeautyEffectOptions(enabled, options, type);
        var jsonParams = {
            enabled: enabled,
            options: options,
            type: type,
            toJSON: function () {
                return {
                    enabled: enabled,
                    options: options,
                    type: type,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetBeautyEffectOptions = function (enabled, options, type) {
        if (type === void 0) { type = CmviotMediaBase_1.MediaSourceType.PrimaryCameraSource; }
        return 'RtcEngine_setBeautyEffectOptions';
    };
    IRtcEngineImpl.prototype.setLowlightEnhanceOptions = function (enabled, options, type) {
        if (type === void 0) { type = CmviotMediaBase_1.MediaSourceType.PrimaryCameraSource; }
        var apiType = this.getApiTypeFromSetLowlightEnhanceOptions(enabled, options, type);
        var jsonParams = {
            enabled: enabled,
            options: options,
            type: type,
            toJSON: function () {
                return {
                    enabled: enabled,
                    options: options,
                    type: type,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetLowlightEnhanceOptions = function (enabled, options, type) {
        if (type === void 0) { type = CmviotMediaBase_1.MediaSourceType.PrimaryCameraSource; }
        return 'RtcEngine_setLowlightEnhanceOptions';
    };
    IRtcEngineImpl.prototype.setVideoDenoiserOptions = function (enabled, options, type) {
        if (type === void 0) { type = CmviotMediaBase_1.MediaSourceType.PrimaryCameraSource; }
        var apiType = this.getApiTypeFromSetVideoDenoiserOptions(enabled, options, type);
        var jsonParams = {
            enabled: enabled,
            options: options,
            type: type,
            toJSON: function () {
                return {
                    enabled: enabled,
                    options: options,
                    type: type,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetVideoDenoiserOptions = function (enabled, options, type) {
        if (type === void 0) { type = CmviotMediaBase_1.MediaSourceType.PrimaryCameraSource; }
        return 'RtcEngine_setVideoDenoiserOptions';
    };
    IRtcEngineImpl.prototype.setColorEnhanceOptions = function (enabled, options, type) {
        if (type === void 0) { type = CmviotMediaBase_1.MediaSourceType.PrimaryCameraSource; }
        var apiType = this.getApiTypeFromSetColorEnhanceOptions(enabled, options, type);
        var jsonParams = {
            enabled: enabled,
            options: options,
            type: type,
            toJSON: function () {
                return {
                    enabled: enabled,
                    options: options,
                    type: type,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetColorEnhanceOptions = function (enabled, options, type) {
        if (type === void 0) { type = CmviotMediaBase_1.MediaSourceType.PrimaryCameraSource; }
        return 'RtcEngine_setColorEnhanceOptions';
    };
    IRtcEngineImpl.prototype.enableVirtualBackground = function (enabled, backgroundSource, segproperty, type) {
        if (type === void 0) { type = CmviotMediaBase_1.MediaSourceType.PrimaryCameraSource; }
        var apiType = this.getApiTypeFromEnableVirtualBackground(enabled, backgroundSource, segproperty, type);
        var jsonParams = {
            enabled: enabled,
            backgroundSource: backgroundSource,
            segproperty: segproperty,
            type: type,
            toJSON: function () {
                return {
                    enabled: enabled,
                    backgroundSource: backgroundSource,
                    segproperty: segproperty,
                    type: type,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromEnableVirtualBackground = function (enabled, backgroundSource, segproperty, type) {
        if (type === void 0) { type = CmviotMediaBase_1.MediaSourceType.PrimaryCameraSource; }
        return 'RtcEngine_enableVirtualBackground';
    };
    IRtcEngineImpl.prototype.setupRemoteVideo = function (canvas) {
        var apiType = this.getApiTypeFromSetupRemoteVideo(canvas);
        var jsonParams = {
            canvas: canvas,
            toJSON: function () {
                return {
                    canvas: canvas,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetupRemoteVideo = function (canvas) {
        return 'RtcEngine_setupRemoteVideo';
    };
    IRtcEngineImpl.prototype.setupLocalVideo = function (canvas) {
        var apiType = this.getApiTypeFromSetupLocalVideo(canvas);
        var jsonParams = {
            canvas: canvas,
            toJSON: function () {
                return {
                    canvas: canvas,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetupLocalVideo = function (canvas) {
        return 'RtcEngine_setupLocalVideo';
    };
    IRtcEngineImpl.prototype.setVideoScenario = function (scenarioType) {
        var apiType = this.getApiTypeFromSetVideoScenario(scenarioType);
        var jsonParams = {
            scenarioType: scenarioType,
            toJSON: function () {
                return {
                    scenarioType: scenarioType,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetVideoScenario = function (scenarioType) {
        return 'RtcEngine_setVideoScenario';
    };
    IRtcEngineImpl.prototype.enableAudio = function () {
        var apiType = this.getApiTypeFromEnableAudio();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromEnableAudio = function () {
        return 'RtcEngine_enableAudio';
    };
    IRtcEngineImpl.prototype.disableAudio = function () {
        var apiType = this.getApiTypeFromDisableAudio();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromDisableAudio = function () {
        return 'RtcEngine_disableAudio';
    };
    IRtcEngineImpl.prototype.setAudioProfile = function (profile, scenario) {
        if (scenario === void 0) { scenario = CmviotBase_1.AudioScenarioType.AudioScenarioDefault; }
        var apiType = this.getApiTypeFromSetAudioProfile(profile, scenario);
        var jsonParams = {
            profile: profile,
            scenario: scenario,
            toJSON: function () {
                return {
                    profile: profile,
                    scenario: scenario,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetAudioProfile = function (profile, scenario) {
        if (scenario === void 0) { scenario = CmviotBase_1.AudioScenarioType.AudioScenarioDefault; }
        return 'RtcEngine_setAudioProfile';
    };
    IRtcEngineImpl.prototype.setAudioScenario = function (scenario) {
        var apiType = this.getApiTypeFromSetAudioScenario(scenario);
        var jsonParams = {
            scenario: scenario,
            toJSON: function () {
                return {
                    scenario: scenario,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetAudioScenario = function (scenario) {
        return 'RtcEngine_setAudioScenario';
    };
    IRtcEngineImpl.prototype.enableLocalAudio = function (enabled) {
        var apiType = this.getApiTypeFromEnableLocalAudio(enabled);
        var jsonParams = {
            enabled: enabled,
            toJSON: function () {
                return {
                    enabled: enabled,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromEnableLocalAudio = function (enabled) {
        return 'RtcEngine_enableLocalAudio';
    };
    IRtcEngineImpl.prototype.muteLocalAudioStream = function (mute) {
        var apiType = this.getApiTypeFromMuteLocalAudioStream(mute);
        var jsonParams = {
            mute: mute,
            toJSON: function () {
                return {
                    mute: mute,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromMuteLocalAudioStream = function (mute) {
        return 'RtcEngine_muteLocalAudioStream';
    };
    IRtcEngineImpl.prototype.muteAllRemoteAudioStreams = function (mute) {
        var apiType = this.getApiTypeFromMuteAllRemoteAudioStreams(mute);
        var jsonParams = {
            mute: mute,
            toJSON: function () {
                return {
                    mute: mute,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromMuteAllRemoteAudioStreams = function (mute) {
        return 'RtcEngine_muteAllRemoteAudioStreams';
    };
    IRtcEngineImpl.prototype.setDefaultMuteAllRemoteAudioStreams = function (mute) {
        var apiType = this.getApiTypeFromSetDefaultMuteAllRemoteAudioStreams(mute);
        var jsonParams = {
            mute: mute,
            toJSON: function () {
                return {
                    mute: mute,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetDefaultMuteAllRemoteAudioStreams = function (mute) {
        return 'RtcEngine_setDefaultMuteAllRemoteAudioStreams';
    };
    IRtcEngineImpl.prototype.muteRemoteAudioStream = function (uid, mute) {
        var apiType = this.getApiTypeFromMuteRemoteAudioStream(uid, mute);
        var jsonParams = {
            uid: uid,
            mute: mute,
            toJSON: function () {
                return {
                    uid: uid,
                    mute: mute,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromMuteRemoteAudioStream = function (uid, mute) {
        return 'RtcEngine_muteRemoteAudioStream';
    };
    IRtcEngineImpl.prototype.muteLocalVideoStream = function (mute) {
        var apiType = this.getApiTypeFromMuteLocalVideoStream(mute);
        var jsonParams = {
            mute: mute,
            toJSON: function () {
                return {
                    mute: mute,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromMuteLocalVideoStream = function (mute) {
        return 'RtcEngine_muteLocalVideoStream';
    };
    IRtcEngineImpl.prototype.enableLocalVideo = function (enabled) {
        var apiType = this.getApiTypeFromEnableLocalVideo(enabled);
        var jsonParams = {
            enabled: enabled,
            toJSON: function () {
                return {
                    enabled: enabled,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromEnableLocalVideo = function (enabled) {
        return 'RtcEngine_enableLocalVideo';
    };
    IRtcEngineImpl.prototype.muteAllRemoteVideoStreams = function (mute) {
        var apiType = this.getApiTypeFromMuteAllRemoteVideoStreams(mute);
        var jsonParams = {
            mute: mute,
            toJSON: function () {
                return {
                    mute: mute,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromMuteAllRemoteVideoStreams = function (mute) {
        return 'RtcEngine_muteAllRemoteVideoStreams';
    };
    IRtcEngineImpl.prototype.setDefaultMuteAllRemoteVideoStreams = function (mute) {
        var apiType = this.getApiTypeFromSetDefaultMuteAllRemoteVideoStreams(mute);
        var jsonParams = {
            mute: mute,
            toJSON: function () {
                return {
                    mute: mute,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetDefaultMuteAllRemoteVideoStreams = function (mute) {
        return 'RtcEngine_setDefaultMuteAllRemoteVideoStreams';
    };
    IRtcEngineImpl.prototype.muteRemoteVideoStream = function (uid, mute) {
        var apiType = this.getApiTypeFromMuteRemoteVideoStream(uid, mute);
        var jsonParams = {
            uid: uid,
            mute: mute,
            toJSON: function () {
                return {
                    uid: uid,
                    mute: mute,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromMuteRemoteVideoStream = function (uid, mute) {
        return 'RtcEngine_muteRemoteVideoStream';
    };
    IRtcEngineImpl.prototype.setRemoteVideoStreamType = function (uid, streamType) {
        var apiType = this.getApiTypeFromSetRemoteVideoStreamType(uid, streamType);
        var jsonParams = {
            uid: uid,
            streamType: streamType,
            toJSON: function () {
                return {
                    uid: uid,
                    streamType: streamType,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetRemoteVideoStreamType = function (uid, streamType) {
        return 'RtcEngine_setRemoteVideoStreamType';
    };
    IRtcEngineImpl.prototype.setRemoteVideoSubscriptionOptions = function (uid, options) {
        var apiType = this.getApiTypeFromSetRemoteVideoSubscriptionOptions(uid, options);
        var jsonParams = {
            uid: uid,
            options: options,
            toJSON: function () {
                return {
                    uid: uid,
                    options: options,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetRemoteVideoSubscriptionOptions = function (uid, options) {
        return 'RtcEngine_setRemoteVideoSubscriptionOptions';
    };
    IRtcEngineImpl.prototype.setRemoteDefaultVideoStreamType = function (streamType) {
        var apiType = this.getApiTypeFromSetRemoteDefaultVideoStreamType(streamType);
        var jsonParams = {
            streamType: streamType,
            toJSON: function () {
                return {
                    streamType: streamType,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetRemoteDefaultVideoStreamType = function (streamType) {
        return 'RtcEngine_setRemoteDefaultVideoStreamType';
    };
    IRtcEngineImpl.prototype.setSubscribeAudioBlocklist = function (uidList, uidNumber) {
        var apiType = this.getApiTypeFromSetSubscribeAudioBlocklist(uidList, uidNumber);
        var jsonParams = {
            uidList: uidList,
            uidNumber: uidNumber,
            toJSON: function () {
                return {
                    uidList: uidList,
                    uidNumber: uidNumber,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetSubscribeAudioBlocklist = function (uidList, uidNumber) {
        return 'RtcEngine_setSubscribeAudioBlocklist';
    };
    IRtcEngineImpl.prototype.setSubscribeAudioAllowlist = function (uidList, uidNumber) {
        var apiType = this.getApiTypeFromSetSubscribeAudioAllowlist(uidList, uidNumber);
        var jsonParams = {
            uidList: uidList,
            uidNumber: uidNumber,
            toJSON: function () {
                return {
                    uidList: uidList,
                    uidNumber: uidNumber,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetSubscribeAudioAllowlist = function (uidList, uidNumber) {
        return 'RtcEngine_setSubscribeAudioAllowlist';
    };
    IRtcEngineImpl.prototype.setSubscribeVideoBlocklist = function (uidList, uidNumber) {
        var apiType = this.getApiTypeFromSetSubscribeVideoBlocklist(uidList, uidNumber);
        var jsonParams = {
            uidList: uidList,
            uidNumber: uidNumber,
            toJSON: function () {
                return {
                    uidList: uidList,
                    uidNumber: uidNumber,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetSubscribeVideoBlocklist = function (uidList, uidNumber) {
        return 'RtcEngine_setSubscribeVideoBlocklist';
    };
    IRtcEngineImpl.prototype.setSubscribeVideoAllowlist = function (uidList, uidNumber) {
        var apiType = this.getApiTypeFromSetSubscribeVideoAllowlist(uidList, uidNumber);
        var jsonParams = {
            uidList: uidList,
            uidNumber: uidNumber,
            toJSON: function () {
                return {
                    uidList: uidList,
                    uidNumber: uidNumber,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetSubscribeVideoAllowlist = function (uidList, uidNumber) {
        return 'RtcEngine_setSubscribeVideoAllowlist';
    };
    IRtcEngineImpl.prototype.enableAudioVolumeIndication = function (interval, smooth, reportVad) {
        var apiType = this.getApiTypeFromEnableAudioVolumeIndication(interval, smooth, reportVad);
        var jsonParams = {
            interval: interval,
            smooth: smooth,
            reportVad: reportVad,
            toJSON: function () {
                return {
                    interval: interval,
                    smooth: smooth,
                    reportVad: reportVad,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromEnableAudioVolumeIndication = function (interval, smooth, reportVad) {
        return 'RtcEngine_enableAudioVolumeIndication';
    };
    IRtcEngineImpl.prototype.startAudioRecording = function (config) {
        var apiType = this.getApiTypeFromStartAudioRecording(config);
        var jsonParams = {
            config: config,
            toJSON: function () {
                return {
                    config: config,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromStartAudioRecording = function (config) {
        return 'RtcEngine_startAudioRecording';
    };
    IRtcEngineImpl.prototype.registerAudioEncodedFrameObserver = function (config, observer) {
        var apiType = this.getApiTypeFromRegisterAudioEncodedFrameObserver(config, observer);
        var jsonParams = {
            config: config,
            observer: observer,
            toJSON: function () {
                return {
                    config: config,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromRegisterAudioEncodedFrameObserver = function (config, observer) {
        return 'RtcEngine_registerAudioEncodedFrameObserver';
    };
    IRtcEngineImpl.prototype.stopAudioRecording = function () {
        var apiType = this.getApiTypeFromStopAudioRecording();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromStopAudioRecording = function () {
        return 'RtcEngine_stopAudioRecording';
    };
    IRtcEngineImpl.prototype.createMediaPlayer = function () {
        var apiType = this.getApiTypeFromCreateMediaPlayer();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromCreateMediaPlayer = function () {
        return 'RtcEngine_createMediaPlayer';
    };
    IRtcEngineImpl.prototype.destroyMediaPlayer = function (mediaPlayer) {
        var apiType = this.getApiTypeFromDestroyMediaPlayer(mediaPlayer);
        var jsonParams = {
            media_player: mediaPlayer,
            toJSON: function () {
                return {};
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromDestroyMediaPlayer = function (mediaPlayer) {
        return 'RtcEngine_destroyMediaPlayer';
    };
    IRtcEngineImpl.prototype.createMediaRecorder = function (info) {
        var apiType = this.getApiTypeFromCreateMediaRecorder(info);
        var jsonParams = {
            info: info,
            toJSON: function () {
                return {
                    info: info,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromCreateMediaRecorder = function (info) {
        return 'RtcEngine_createMediaRecorder';
    };
    IRtcEngineImpl.prototype.destroyMediaRecorder = function (mediaRecorder) {
        var apiType = this.getApiTypeFromDestroyMediaRecorder(mediaRecorder);
        var jsonParams = {
            mediaRecorder: mediaRecorder,
            toJSON: function () {
                return {};
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromDestroyMediaRecorder = function (mediaRecorder) {
        return 'RtcEngine_destroyMediaRecorder';
    };
    IRtcEngineImpl.prototype.startAudioMixing = function (filePath, loopback, cycle, startPos) {
        if (startPos === void 0) { startPos = 0; }
        var apiType = this.getApiTypeFromStartAudioMixing(filePath, loopback, cycle, startPos);
        var jsonParams = {
            filePath: filePath,
            loopback: loopback,
            cycle: cycle,
            startPos: startPos,
            toJSON: function () {
                return {
                    filePath: filePath,
                    loopback: loopback,
                    cycle: cycle,
                    startPos: startPos,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromStartAudioMixing = function (filePath, loopback, cycle, startPos) {
        if (startPos === void 0) { startPos = 0; }
        return 'RtcEngine_startAudioMixing';
    };
    IRtcEngineImpl.prototype.stopAudioMixing = function () {
        var apiType = this.getApiTypeFromStopAudioMixing();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromStopAudioMixing = function () {
        return 'RtcEngine_stopAudioMixing';
    };
    IRtcEngineImpl.prototype.pauseAudioMixing = function () {
        var apiType = this.getApiTypeFromPauseAudioMixing();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromPauseAudioMixing = function () {
        return 'RtcEngine_pauseAudioMixing';
    };
    IRtcEngineImpl.prototype.resumeAudioMixing = function () {
        var apiType = this.getApiTypeFromResumeAudioMixing();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromResumeAudioMixing = function () {
        return 'RtcEngine_resumeAudioMixing';
    };
    IRtcEngineImpl.prototype.selectAudioTrack = function (index) {
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
    IRtcEngineImpl.prototype.getApiTypeFromSelectAudioTrack = function (index) {
        return 'RtcEngine_selectAudioTrack';
    };
    IRtcEngineImpl.prototype.getAudioTrackCount = function () {
        var apiType = this.getApiTypeFromGetAudioTrackCount();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromGetAudioTrackCount = function () {
        return 'RtcEngine_getAudioTrackCount';
    };
    IRtcEngineImpl.prototype.adjustAudioMixingVolume = function (volume) {
        var apiType = this.getApiTypeFromAdjustAudioMixingVolume(volume);
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
    IRtcEngineImpl.prototype.getApiTypeFromAdjustAudioMixingVolume = function (volume) {
        return 'RtcEngine_adjustAudioMixingVolume';
    };
    IRtcEngineImpl.prototype.adjustAudioMixingPublishVolume = function (volume) {
        var apiType = this.getApiTypeFromAdjustAudioMixingPublishVolume(volume);
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
    IRtcEngineImpl.prototype.getApiTypeFromAdjustAudioMixingPublishVolume = function (volume) {
        return 'RtcEngine_adjustAudioMixingPublishVolume';
    };
    IRtcEngineImpl.prototype.getAudioMixingPublishVolume = function () {
        var apiType = this.getApiTypeFromGetAudioMixingPublishVolume();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromGetAudioMixingPublishVolume = function () {
        return 'RtcEngine_getAudioMixingPublishVolume';
    };
    IRtcEngineImpl.prototype.adjustAudioMixingPlayoutVolume = function (volume) {
        var apiType = this.getApiTypeFromAdjustAudioMixingPlayoutVolume(volume);
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
    IRtcEngineImpl.prototype.getApiTypeFromAdjustAudioMixingPlayoutVolume = function (volume) {
        return 'RtcEngine_adjustAudioMixingPlayoutVolume';
    };
    IRtcEngineImpl.prototype.getAudioMixingPlayoutVolume = function () {
        var apiType = this.getApiTypeFromGetAudioMixingPlayoutVolume();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromGetAudioMixingPlayoutVolume = function () {
        return 'RtcEngine_getAudioMixingPlayoutVolume';
    };
    IRtcEngineImpl.prototype.getAudioMixingDuration = function () {
        var apiType = this.getApiTypeFromGetAudioMixingDuration();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromGetAudioMixingDuration = function () {
        return 'RtcEngine_getAudioMixingDuration';
    };
    IRtcEngineImpl.prototype.getAudioMixingCurrentPosition = function () {
        var apiType = this.getApiTypeFromGetAudioMixingCurrentPosition();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromGetAudioMixingCurrentPosition = function () {
        return 'RtcEngine_getAudioMixingCurrentPosition';
    };
    IRtcEngineImpl.prototype.setAudioMixingPosition = function (pos) {
        var apiType = this.getApiTypeFromSetAudioMixingPosition(pos);
        var jsonParams = {
            pos: pos,
            toJSON: function () {
                return {
                    pos: pos,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetAudioMixingPosition = function (pos) {
        return 'RtcEngine_setAudioMixingPosition';
    };
    IRtcEngineImpl.prototype.setAudioMixingDualMonoMode = function (mode) {
        var apiType = this.getApiTypeFromSetAudioMixingDualMonoMode(mode);
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
    IRtcEngineImpl.prototype.getApiTypeFromSetAudioMixingDualMonoMode = function (mode) {
        return 'RtcEngine_setAudioMixingDualMonoMode';
    };
    IRtcEngineImpl.prototype.setAudioMixingPitch = function (pitch) {
        var apiType = this.getApiTypeFromSetAudioMixingPitch(pitch);
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
    IRtcEngineImpl.prototype.getApiTypeFromSetAudioMixingPitch = function (pitch) {
        return 'RtcEngine_setAudioMixingPitch';
    };
    IRtcEngineImpl.prototype.getEffectsVolume = function () {
        var apiType = this.getApiTypeFromGetEffectsVolume();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromGetEffectsVolume = function () {
        return 'RtcEngine_getEffectsVolume';
    };
    IRtcEngineImpl.prototype.setEffectsVolume = function (volume) {
        var apiType = this.getApiTypeFromSetEffectsVolume(volume);
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
    IRtcEngineImpl.prototype.getApiTypeFromSetEffectsVolume = function (volume) {
        return 'RtcEngine_setEffectsVolume';
    };
    IRtcEngineImpl.prototype.preloadEffect = function (soundId, filePath, startPos) {
        if (startPos === void 0) { startPos = 0; }
        var apiType = this.getApiTypeFromPreloadEffect(soundId, filePath, startPos);
        var jsonParams = {
            soundId: soundId,
            filePath: filePath,
            startPos: startPos,
            toJSON: function () {
                return {
                    soundId: soundId,
                    filePath: filePath,
                    startPos: startPos,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromPreloadEffect = function (soundId, filePath, startPos) {
        if (startPos === void 0) { startPos = 0; }
        return 'RtcEngine_preloadEffect';
    };
    IRtcEngineImpl.prototype.playEffect = function (soundId, filePath, loopCount, pitch, pan, gain, publish, startPos) {
        if (publish === void 0) { publish = false; }
        if (startPos === void 0) { startPos = 0; }
        var apiType = this.getApiTypeFromPlayEffect(soundId, filePath, loopCount, pitch, pan, gain, publish, startPos);
        var jsonParams = {
            soundId: soundId,
            filePath: filePath,
            loopCount: loopCount,
            pitch: pitch,
            pan: pan,
            gain: gain,
            publish: publish,
            startPos: startPos,
            toJSON: function () {
                return {
                    soundId: soundId,
                    filePath: filePath,
                    loopCount: loopCount,
                    pitch: pitch,
                    pan: pan,
                    gain: gain,
                    publish: publish,
                    startPos: startPos,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromPlayEffect = function (soundId, filePath, loopCount, pitch, pan, gain, publish, startPos) {
        if (publish === void 0) { publish = false; }
        if (startPos === void 0) { startPos = 0; }
        return 'RtcEngine_playEffect';
    };
    IRtcEngineImpl.prototype.playAllEffects = function (loopCount, pitch, pan, gain, publish) {
        if (publish === void 0) { publish = false; }
        var apiType = this.getApiTypeFromPlayAllEffects(loopCount, pitch, pan, gain, publish);
        var jsonParams = {
            loopCount: loopCount,
            pitch: pitch,
            pan: pan,
            gain: gain,
            publish: publish,
            toJSON: function () {
                return {
                    loopCount: loopCount,
                    pitch: pitch,
                    pan: pan,
                    gain: gain,
                    publish: publish,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromPlayAllEffects = function (loopCount, pitch, pan, gain, publish) {
        if (publish === void 0) { publish = false; }
        return 'RtcEngine_playAllEffects';
    };
    IRtcEngineImpl.prototype.getVolumeOfEffect = function (soundId) {
        var apiType = this.getApiTypeFromGetVolumeOfEffect(soundId);
        var jsonParams = {
            soundId: soundId,
            toJSON: function () {
                return {
                    soundId: soundId,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromGetVolumeOfEffect = function (soundId) {
        return 'RtcEngine_getVolumeOfEffect';
    };
    IRtcEngineImpl.prototype.setVolumeOfEffect = function (soundId, volume) {
        var apiType = this.getApiTypeFromSetVolumeOfEffect(soundId, volume);
        var jsonParams = {
            soundId: soundId,
            volume: volume,
            toJSON: function () {
                return {
                    soundId: soundId,
                    volume: volume,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetVolumeOfEffect = function (soundId, volume) {
        return 'RtcEngine_setVolumeOfEffect';
    };
    IRtcEngineImpl.prototype.pauseEffect = function (soundId) {
        var apiType = this.getApiTypeFromPauseEffect(soundId);
        var jsonParams = {
            soundId: soundId,
            toJSON: function () {
                return {
                    soundId: soundId,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromPauseEffect = function (soundId) {
        return 'RtcEngine_pauseEffect';
    };
    IRtcEngineImpl.prototype.pauseAllEffects = function () {
        var apiType = this.getApiTypeFromPauseAllEffects();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromPauseAllEffects = function () {
        return 'RtcEngine_pauseAllEffects';
    };
    IRtcEngineImpl.prototype.resumeEffect = function (soundId) {
        var apiType = this.getApiTypeFromResumeEffect(soundId);
        var jsonParams = {
            soundId: soundId,
            toJSON: function () {
                return {
                    soundId: soundId,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromResumeEffect = function (soundId) {
        return 'RtcEngine_resumeEffect';
    };
    IRtcEngineImpl.prototype.resumeAllEffects = function () {
        var apiType = this.getApiTypeFromResumeAllEffects();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromResumeAllEffects = function () {
        return 'RtcEngine_resumeAllEffects';
    };
    IRtcEngineImpl.prototype.stopEffect = function (soundId) {
        var apiType = this.getApiTypeFromStopEffect(soundId);
        var jsonParams = {
            soundId: soundId,
            toJSON: function () {
                return {
                    soundId: soundId,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromStopEffect = function (soundId) {
        return 'RtcEngine_stopEffect';
    };
    IRtcEngineImpl.prototype.stopAllEffects = function () {
        var apiType = this.getApiTypeFromStopAllEffects();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromStopAllEffects = function () {
        return 'RtcEngine_stopAllEffects';
    };
    IRtcEngineImpl.prototype.unloadEffect = function (soundId) {
        var apiType = this.getApiTypeFromUnloadEffect(soundId);
        var jsonParams = {
            soundId: soundId,
            toJSON: function () {
                return {
                    soundId: soundId,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromUnloadEffect = function (soundId) {
        return 'RtcEngine_unloadEffect';
    };
    IRtcEngineImpl.prototype.unloadAllEffects = function () {
        var apiType = this.getApiTypeFromUnloadAllEffects();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromUnloadAllEffects = function () {
        return 'RtcEngine_unloadAllEffects';
    };
    IRtcEngineImpl.prototype.getEffectDuration = function (filePath) {
        var apiType = this.getApiTypeFromGetEffectDuration(filePath);
        var jsonParams = {
            filePath: filePath,
            toJSON: function () {
                return {
                    filePath: filePath,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromGetEffectDuration = function (filePath) {
        return 'RtcEngine_getEffectDuration';
    };
    IRtcEngineImpl.prototype.setEffectPosition = function (soundId, pos) {
        var apiType = this.getApiTypeFromSetEffectPosition(soundId, pos);
        var jsonParams = {
            soundId: soundId,
            pos: pos,
            toJSON: function () {
                return {
                    soundId: soundId,
                    pos: pos,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetEffectPosition = function (soundId, pos) {
        return 'RtcEngine_setEffectPosition';
    };
    IRtcEngineImpl.prototype.getEffectCurrentPosition = function (soundId) {
        var apiType = this.getApiTypeFromGetEffectCurrentPosition(soundId);
        var jsonParams = {
            soundId: soundId,
            toJSON: function () {
                return {
                    soundId: soundId,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromGetEffectCurrentPosition = function (soundId) {
        return 'RtcEngine_getEffectCurrentPosition';
    };
    IRtcEngineImpl.prototype.enableSoundPositionIndication = function (enabled) {
        var apiType = this.getApiTypeFromEnableSoundPositionIndication(enabled);
        var jsonParams = {
            enabled: enabled,
            toJSON: function () {
                return {
                    enabled: enabled,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromEnableSoundPositionIndication = function (enabled) {
        return 'RtcEngine_enableSoundPositionIndication';
    };
    IRtcEngineImpl.prototype.setRemoteVoicePosition = function (uid, pan, gain) {
        var apiType = this.getApiTypeFromSetRemoteVoicePosition(uid, pan, gain);
        var jsonParams = {
            uid: uid,
            pan: pan,
            gain: gain,
            toJSON: function () {
                return {
                    uid: uid,
                    pan: pan,
                    gain: gain,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetRemoteVoicePosition = function (uid, pan, gain) {
        return 'RtcEngine_setRemoteVoicePosition';
    };
    IRtcEngineImpl.prototype.enableSpatialAudio = function (enabled) {
        var apiType = this.getApiTypeFromEnableSpatialAudio(enabled);
        var jsonParams = {
            enabled: enabled,
            toJSON: function () {
                return {
                    enabled: enabled,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromEnableSpatialAudio = function (enabled) {
        return 'RtcEngine_enableSpatialAudio';
    };
    IRtcEngineImpl.prototype.setRemoteUserSpatialAudioParams = function (uid, params) {
        var apiType = this.getApiTypeFromSetRemoteUserSpatialAudioParams(uid, params);
        var jsonParams = {
            uid: uid,
            params: params,
            toJSON: function () {
                return {
                    uid: uid,
                    params: params,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetRemoteUserSpatialAudioParams = function (uid, params) {
        return 'RtcEngine_setRemoteUserSpatialAudioParams';
    };
    IRtcEngineImpl.prototype.setVoiceBeautifierPreset = function (preset) {
        var apiType = this.getApiTypeFromSetVoiceBeautifierPreset(preset);
        var jsonParams = {
            preset: preset,
            toJSON: function () {
                return {
                    preset: preset,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetVoiceBeautifierPreset = function (preset) {
        return 'RtcEngine_setVoiceBeautifierPreset';
    };
    IRtcEngineImpl.prototype.setAudioEffectPreset = function (preset) {
        var apiType = this.getApiTypeFromSetAudioEffectPreset(preset);
        var jsonParams = {
            preset: preset,
            toJSON: function () {
                return {
                    preset: preset,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetAudioEffectPreset = function (preset) {
        return 'RtcEngine_setAudioEffectPreset';
    };
    IRtcEngineImpl.prototype.setVoiceConversionPreset = function (preset) {
        var apiType = this.getApiTypeFromSetVoiceConversionPreset(preset);
        var jsonParams = {
            preset: preset,
            toJSON: function () {
                return {
                    preset: preset,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetVoiceConversionPreset = function (preset) {
        return 'RtcEngine_setVoiceConversionPreset';
    };
    IRtcEngineImpl.prototype.setAudioEffectParameters = function (preset, param1, param2) {
        var apiType = this.getApiTypeFromSetAudioEffectParameters(preset, param1, param2);
        var jsonParams = {
            preset: preset,
            param1: param1,
            param2: param2,
            toJSON: function () {
                return {
                    preset: preset,
                    param1: param1,
                    param2: param2,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetAudioEffectParameters = function (preset, param1, param2) {
        return 'RtcEngine_setAudioEffectParameters';
    };
    IRtcEngineImpl.prototype.setVoiceBeautifierParameters = function (preset, param1, param2) {
        var apiType = this.getApiTypeFromSetVoiceBeautifierParameters(preset, param1, param2);
        var jsonParams = {
            preset: preset,
            param1: param1,
            param2: param2,
            toJSON: function () {
                return {
                    preset: preset,
                    param1: param1,
                    param2: param2,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetVoiceBeautifierParameters = function (preset, param1, param2) {
        return 'RtcEngine_setVoiceBeautifierParameters';
    };
    IRtcEngineImpl.prototype.setVoiceConversionParameters = function (preset, param1, param2) {
        var apiType = this.getApiTypeFromSetVoiceConversionParameters(preset, param1, param2);
        var jsonParams = {
            preset: preset,
            param1: param1,
            param2: param2,
            toJSON: function () {
                return {
                    preset: preset,
                    param1: param1,
                    param2: param2,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetVoiceConversionParameters = function (preset, param1, param2) {
        return 'RtcEngine_setVoiceConversionParameters';
    };
    IRtcEngineImpl.prototype.setLocalVoicePitch = function (pitch) {
        var apiType = this.getApiTypeFromSetLocalVoicePitch(pitch);
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
    IRtcEngineImpl.prototype.getApiTypeFromSetLocalVoicePitch = function (pitch) {
        return 'RtcEngine_setLocalVoicePitch';
    };
    IRtcEngineImpl.prototype.setLocalVoiceFormant = function (formantRatio) {
        var apiType = this.getApiTypeFromSetLocalVoiceFormant(formantRatio);
        var jsonParams = {
            formantRatio: formantRatio,
            toJSON: function () {
                return {
                    formantRatio: formantRatio,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetLocalVoiceFormant = function (formantRatio) {
        return 'RtcEngine_setLocalVoiceFormant';
    };
    IRtcEngineImpl.prototype.setLocalVoiceEqualization = function (bandFrequency, bandGain) {
        var apiType = this.getApiTypeFromSetLocalVoiceEqualization(bandFrequency, bandGain);
        var jsonParams = {
            bandFrequency: bandFrequency,
            bandGain: bandGain,
            toJSON: function () {
                return {
                    bandFrequency: bandFrequency,
                    bandGain: bandGain,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetLocalVoiceEqualization = function (bandFrequency, bandGain) {
        return 'RtcEngine_setLocalVoiceEqualization';
    };
    IRtcEngineImpl.prototype.setLocalVoiceReverb = function (reverbKey, value) {
        var apiType = this.getApiTypeFromSetLocalVoiceReverb(reverbKey, value);
        var jsonParams = {
            reverbKey: reverbKey,
            value: value,
            toJSON: function () {
                return {
                    reverbKey: reverbKey,
                    value: value,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetLocalVoiceReverb = function (reverbKey, value) {
        return 'RtcEngine_setLocalVoiceReverb';
    };
    IRtcEngineImpl.prototype.setHeadphoneEQPreset = function (preset) {
        var apiType = this.getApiTypeFromSetHeadphoneEQPreset(preset);
        var jsonParams = {
            preset: preset,
            toJSON: function () {
                return {
                    preset: preset,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetHeadphoneEQPreset = function (preset) {
        return 'RtcEngine_setHeadphoneEQPreset';
    };
    IRtcEngineImpl.prototype.setHeadphoneEQParameters = function (lowGain, highGain) {
        var apiType = this.getApiTypeFromSetHeadphoneEQParameters(lowGain, highGain);
        var jsonParams = {
            lowGain: lowGain,
            highGain: highGain,
            toJSON: function () {
                return {
                    lowGain: lowGain,
                    highGain: highGain,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetHeadphoneEQParameters = function (lowGain, highGain) {
        return 'RtcEngine_setHeadphoneEQParameters';
    };
    IRtcEngineImpl.prototype.setLogFile = function (filePath) {
        var apiType = this.getApiTypeFromSetLogFile(filePath);
        var jsonParams = {
            filePath: filePath,
            toJSON: function () {
                return {
                    filePath: filePath,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetLogFile = function (filePath) {
        return 'RtcEngine_setLogFile';
    };
    IRtcEngineImpl.prototype.setLogFilter = function (filter) {
        var apiType = this.getApiTypeFromSetLogFilter(filter);
        var jsonParams = {
            filter: filter,
            toJSON: function () {
                return {
                    filter: filter,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetLogFilter = function (filter) {
        return 'RtcEngine_setLogFilter';
    };
    IRtcEngineImpl.prototype.setLogLevel = function (level) {
        var apiType = this.getApiTypeFromSetLogLevel(level);
        var jsonParams = {
            level: level,
            toJSON: function () {
                return {
                    level: level,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetLogLevel = function (level) {
        return 'RtcEngine_setLogLevel';
    };
    IRtcEngineImpl.prototype.setLogFileSize = function (fileSizeInKBytes) {
        var apiType = this.getApiTypeFromSetLogFileSize(fileSizeInKBytes);
        var jsonParams = {
            fileSizeInKBytes: fileSizeInKBytes,
            toJSON: function () {
                return {
                    fileSizeInKBytes: fileSizeInKBytes,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetLogFileSize = function (fileSizeInKBytes) {
        return 'RtcEngine_setLogFileSize';
    };
    IRtcEngineImpl.prototype.uploadLogFile = function () {
        var apiType = this.getApiTypeFromUploadLogFile();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        var requestId = jsonResults.requestId;
        return requestId;
    };
    IRtcEngineImpl.prototype.getApiTypeFromUploadLogFile = function () {
        return 'RtcEngine_uploadLogFile';
    };
    IRtcEngineImpl.prototype.setLocalRenderMode = function (renderMode, mirrorMode) {
        if (mirrorMode === void 0) { mirrorMode = CmviotBase_1.VideoMirrorModeType.VideoMirrorModeAuto; }
        var apiType = this.getApiTypeFromSetLocalRenderMode(renderMode, mirrorMode);
        var jsonParams = {
            renderMode: renderMode,
            mirrorMode: mirrorMode,
            toJSON: function () {
                return {
                    renderMode: renderMode,
                    mirrorMode: mirrorMode,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetLocalRenderMode = function (renderMode, mirrorMode) {
        if (mirrorMode === void 0) { mirrorMode = CmviotBase_1.VideoMirrorModeType.VideoMirrorModeAuto; }
        return 'RtcEngine_setLocalRenderMode';
    };
    IRtcEngineImpl.prototype.setRemoteRenderMode = function (uid, renderMode, mirrorMode) {
        var apiType = this.getApiTypeFromSetRemoteRenderMode(uid, renderMode, mirrorMode);
        var jsonParams = {
            uid: uid,
            renderMode: renderMode,
            mirrorMode: mirrorMode,
            toJSON: function () {
                return {
                    uid: uid,
                    renderMode: renderMode,
                    mirrorMode: mirrorMode,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetRemoteRenderMode = function (uid, renderMode, mirrorMode) {
        return 'RtcEngine_setRemoteRenderMode';
    };
    IRtcEngineImpl.prototype.setLocalVideoMirrorMode = function (mirrorMode) {
        var apiType = this.getApiTypeFromSetLocalVideoMirrorMode(mirrorMode);
        var jsonParams = {
            mirrorMode: mirrorMode,
            toJSON: function () {
                return {
                    mirrorMode: mirrorMode,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetLocalVideoMirrorMode = function (mirrorMode) {
        return 'RtcEngine_setLocalVideoMirrorMode';
    };
    IRtcEngineImpl.prototype.enableDualStreamMode = function (enabled, streamConfig) {
        var apiType = this.getApiTypeFromEnableDualStreamMode(enabled, streamConfig);
        var jsonParams = {
            enabled: enabled,
            streamConfig: streamConfig,
            toJSON: function () {
                return {
                    enabled: enabled,
                    streamConfig: streamConfig,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromEnableDualStreamMode = function (enabled, streamConfig) {
        return 'RtcEngine_enableDualStreamMode';
    };
    IRtcEngineImpl.prototype.setDualStreamMode = function (mode, streamConfig) {
        var apiType = this.getApiTypeFromSetDualStreamMode(mode, streamConfig);
        var jsonParams = {
            mode: mode,
            streamConfig: streamConfig,
            toJSON: function () {
                return {
                    mode: mode,
                    streamConfig: streamConfig,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetDualStreamMode = function (mode, streamConfig) {
        return 'RtcEngine_setDualStreamMode';
    };
    IRtcEngineImpl.prototype.enableCustomAudioLocalPlayback = function (trackId, enabled) {
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
    IRtcEngineImpl.prototype.getApiTypeFromEnableCustomAudioLocalPlayback = function (trackId, enabled) {
        return 'RtcEngine_enableCustomAudioLocalPlayback';
    };
    IRtcEngineImpl.prototype.setRecordingAudioFrameParameters = function (sampleRate, channel, mode, samplesPerCall) {
        var apiType = this.getApiTypeFromSetRecordingAudioFrameParameters(sampleRate, channel, mode, samplesPerCall);
        var jsonParams = {
            sampleRate: sampleRate,
            channel: channel,
            mode: mode,
            samplesPerCall: samplesPerCall,
            toJSON: function () {
                return {
                    sampleRate: sampleRate,
                    channel: channel,
                    mode: mode,
                    samplesPerCall: samplesPerCall,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetRecordingAudioFrameParameters = function (sampleRate, channel, mode, samplesPerCall) {
        return 'RtcEngine_setRecordingAudioFrameParameters';
    };
    IRtcEngineImpl.prototype.setPlaybackAudioFrameParameters = function (sampleRate, channel, mode, samplesPerCall) {
        var apiType = this.getApiTypeFromSetPlaybackAudioFrameParameters(sampleRate, channel, mode, samplesPerCall);
        var jsonParams = {
            sampleRate: sampleRate,
            channel: channel,
            mode: mode,
            samplesPerCall: samplesPerCall,
            toJSON: function () {
                return {
                    sampleRate: sampleRate,
                    channel: channel,
                    mode: mode,
                    samplesPerCall: samplesPerCall,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetPlaybackAudioFrameParameters = function (sampleRate, channel, mode, samplesPerCall) {
        return 'RtcEngine_setPlaybackAudioFrameParameters';
    };
    IRtcEngineImpl.prototype.setMixedAudioFrameParameters = function (sampleRate, channel, samplesPerCall) {
        var apiType = this.getApiTypeFromSetMixedAudioFrameParameters(sampleRate, channel, samplesPerCall);
        var jsonParams = {
            sampleRate: sampleRate,
            channel: channel,
            samplesPerCall: samplesPerCall,
            toJSON: function () {
                return {
                    sampleRate: sampleRate,
                    channel: channel,
                    samplesPerCall: samplesPerCall,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetMixedAudioFrameParameters = function (sampleRate, channel, samplesPerCall) {
        return 'RtcEngine_setMixedAudioFrameParameters';
    };
    IRtcEngineImpl.prototype.setEarMonitoringAudioFrameParameters = function (sampleRate, channel, mode, samplesPerCall) {
        var apiType = this.getApiTypeFromSetEarMonitoringAudioFrameParameters(sampleRate, channel, mode, samplesPerCall);
        var jsonParams = {
            sampleRate: sampleRate,
            channel: channel,
            mode: mode,
            samplesPerCall: samplesPerCall,
            toJSON: function () {
                return {
                    sampleRate: sampleRate,
                    channel: channel,
                    mode: mode,
                    samplesPerCall: samplesPerCall,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetEarMonitoringAudioFrameParameters = function (sampleRate, channel, mode, samplesPerCall) {
        return 'RtcEngine_setEarMonitoringAudioFrameParameters';
    };
    IRtcEngineImpl.prototype.setPlaybackAudioFrameBeforeMixingParameters = function (sampleRate, channel) {
        var apiType = this.getApiTypeFromSetPlaybackAudioFrameBeforeMixingParameters(sampleRate, channel);
        var jsonParams = {
            sampleRate: sampleRate,
            channel: channel,
            toJSON: function () {
                return {
                    sampleRate: sampleRate,
                    channel: channel,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetPlaybackAudioFrameBeforeMixingParameters = function (sampleRate, channel) {
        return 'RtcEngine_setPlaybackAudioFrameBeforeMixingParameters';
    };
    IRtcEngineImpl.prototype.enableAudioSpectrumMonitor = function (intervalInMS) {
        if (intervalInMS === void 0) { intervalInMS = 100; }
        var apiType = this.getApiTypeFromEnableAudioSpectrumMonitor(intervalInMS);
        var jsonParams = {
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
    IRtcEngineImpl.prototype.getApiTypeFromEnableAudioSpectrumMonitor = function (intervalInMS) {
        if (intervalInMS === void 0) { intervalInMS = 100; }
        return 'RtcEngine_enableAudioSpectrumMonitor';
    };
    IRtcEngineImpl.prototype.disableAudioSpectrumMonitor = function () {
        var apiType = this.getApiTypeFromDisableAudioSpectrumMonitor();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromDisableAudioSpectrumMonitor = function () {
        return 'RtcEngine_disableAudioSpectrumMonitor';
    };
    IRtcEngineImpl.prototype.registerAudioSpectrumObserver = function (observer) {
        var apiType = this.getApiTypeFromRegisterAudioSpectrumObserver(observer);
        var jsonParams = {
            observer: observer,
            toJSON: function () {
                return {};
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromRegisterAudioSpectrumObserver = function (observer) {
        return 'RtcEngine_registerAudioSpectrumObserver';
    };
    IRtcEngineImpl.prototype.unregisterAudioSpectrumObserver = function (observer) {
        var apiType = this.getApiTypeFromUnregisterAudioSpectrumObserver(observer);
        var jsonParams = {
            observer: observer,
            toJSON: function () {
                return {};
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromUnregisterAudioSpectrumObserver = function (observer) {
        return 'RtcEngine_unregisterAudioSpectrumObserver';
    };
    IRtcEngineImpl.prototype.adjustRecordingSignalVolume = function (volume) {
        var apiType = this.getApiTypeFromAdjustRecordingSignalVolume(volume);
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
    IRtcEngineImpl.prototype.getApiTypeFromAdjustRecordingSignalVolume = function (volume) {
        return 'RtcEngine_adjustRecordingSignalVolume';
    };
    IRtcEngineImpl.prototype.muteRecordingSignal = function (mute) {
        var apiType = this.getApiTypeFromMuteRecordingSignal(mute);
        var jsonParams = {
            mute: mute,
            toJSON: function () {
                return {
                    mute: mute,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromMuteRecordingSignal = function (mute) {
        return 'RtcEngine_muteRecordingSignal';
    };
    IRtcEngineImpl.prototype.adjustPlaybackSignalVolume = function (volume) {
        var apiType = this.getApiTypeFromAdjustPlaybackSignalVolume(volume);
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
    IRtcEngineImpl.prototype.getApiTypeFromAdjustPlaybackSignalVolume = function (volume) {
        return 'RtcEngine_adjustPlaybackSignalVolume';
    };
    IRtcEngineImpl.prototype.adjustUserPlaybackSignalVolume = function (uid, volume) {
        var apiType = this.getApiTypeFromAdjustUserPlaybackSignalVolume(uid, volume);
        var jsonParams = {
            uid: uid,
            volume: volume,
            toJSON: function () {
                return {
                    uid: uid,
                    volume: volume,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromAdjustUserPlaybackSignalVolume = function (uid, volume) {
        return 'RtcEngine_adjustUserPlaybackSignalVolume';
    };
    IRtcEngineImpl.prototype.setLocalPublishFallbackOption = function (option) {
        var apiType = this.getApiTypeFromSetLocalPublishFallbackOption(option);
        var jsonParams = {
            option: option,
            toJSON: function () {
                return {
                    option: option,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetLocalPublishFallbackOption = function (option) {
        return 'RtcEngine_setLocalPublishFallbackOption';
    };
    IRtcEngineImpl.prototype.setRemoteSubscribeFallbackOption = function (option) {
        var apiType = this.getApiTypeFromSetRemoteSubscribeFallbackOption(option);
        var jsonParams = {
            option: option,
            toJSON: function () {
                return {
                    option: option,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetRemoteSubscribeFallbackOption = function (option) {
        return 'RtcEngine_setRemoteSubscribeFallbackOption';
    };
    IRtcEngineImpl.prototype.setHighPriorityUserList = function (uidList, uidNum, option) {
        var apiType = this.getApiTypeFromSetHighPriorityUserList(uidList, uidNum, option);
        var jsonParams = {
            uidList: uidList,
            uidNum: uidNum,
            option: option,
            toJSON: function () {
                return {
                    uidList: uidList,
                    uidNum: uidNum,
                    option: option,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetHighPriorityUserList = function (uidList, uidNum, option) {
        return 'RtcEngine_setHighPriorityUserList';
    };
    IRtcEngineImpl.prototype.enableLoopbackRecording = function (enabled, deviceName) {
        var apiType = this.getApiTypeFromEnableLoopbackRecording(enabled, deviceName);
        var jsonParams = {
            enabled: enabled,
            deviceName: deviceName,
            toJSON: function () {
                return {
                    enabled: enabled,
                    deviceName: deviceName,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromEnableLoopbackRecording = function (enabled, deviceName) {
        return 'RtcEngine_enableLoopbackRecording';
    };
    IRtcEngineImpl.prototype.adjustLoopbackSignalVolume = function (volume) {
        var apiType = this.getApiTypeFromAdjustLoopbackSignalVolume(volume);
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
    IRtcEngineImpl.prototype.getApiTypeFromAdjustLoopbackSignalVolume = function (volume) {
        return 'RtcEngine_adjustLoopbackSignalVolume';
    };
    IRtcEngineImpl.prototype.getLoopbackRecordingVolume = function () {
        var apiType = this.getApiTypeFromGetLoopbackRecordingVolume();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromGetLoopbackRecordingVolume = function () {
        return 'RtcEngine_getLoopbackRecordingVolume';
    };
    IRtcEngineImpl.prototype.enableInEarMonitoring = function (enabled, includeAudioFilters) {
        var apiType = this.getApiTypeFromEnableInEarMonitoring(enabled, includeAudioFilters);
        var jsonParams = {
            enabled: enabled,
            includeAudioFilters: includeAudioFilters,
            toJSON: function () {
                return {
                    enabled: enabled,
                    includeAudioFilters: includeAudioFilters,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromEnableInEarMonitoring = function (enabled, includeAudioFilters) {
        return 'RtcEngine_enableInEarMonitoring';
    };
    IRtcEngineImpl.prototype.setInEarMonitoringVolume = function (volume) {
        var apiType = this.getApiTypeFromSetInEarMonitoringVolume(volume);
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
    IRtcEngineImpl.prototype.getApiTypeFromSetInEarMonitoringVolume = function (volume) {
        return 'RtcEngine_setInEarMonitoringVolume';
    };
    IRtcEngineImpl.prototype.loadExtensionProvider = function (path, unloadAfterUse) {
        if (unloadAfterUse === void 0) { unloadAfterUse = false; }
        var apiType = this.getApiTypeFromLoadExtensionProvider(path, unloadAfterUse);
        var jsonParams = {
            path: path,
            unload_after_use: unloadAfterUse,
            toJSON: function () {
                return {
                    path: path,
                    unload_after_use: unloadAfterUse,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromLoadExtensionProvider = function (path, unloadAfterUse) {
        if (unloadAfterUse === void 0) { unloadAfterUse = false; }
        return 'RtcEngine_loadExtensionProvider';
    };
    IRtcEngineImpl.prototype.setExtensionProviderProperty = function (provider, key, value) {
        var apiType = this.getApiTypeFromSetExtensionProviderProperty(provider, key, value);
        var jsonParams = {
            provider: provider,
            key: key,
            value: value,
            toJSON: function () {
                return {
                    provider: provider,
                    key: key,
                    value: value,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetExtensionProviderProperty = function (provider, key, value) {
        return 'RtcEngine_setExtensionProviderProperty';
    };
    IRtcEngineImpl.prototype.registerExtension = function (provider, extension, type) {
        if (type === void 0) { type = CmviotMediaBase_1.MediaSourceType.UnknownMediaSource; }
        var apiType = this.getApiTypeFromRegisterExtension(provider, extension, type);
        var jsonParams = {
            provider: provider,
            extension: extension,
            type: type,
            toJSON: function () {
                return {
                    provider: provider,
                    extension: extension,
                    type: type,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromRegisterExtension = function (provider, extension, type) {
        if (type === void 0) { type = CmviotMediaBase_1.MediaSourceType.UnknownMediaSource; }
        return 'RtcEngine_registerExtension';
    };
    IRtcEngineImpl.prototype.enableExtension = function (provider, extension, enable, type) {
        if (enable === void 0) { enable = true; }
        if (type === void 0) { type = CmviotMediaBase_1.MediaSourceType.UnknownMediaSource; }
        var apiType = this.getApiTypeFromEnableExtension(provider, extension, enable, type);
        var jsonParams = {
            provider: provider,
            extension: extension,
            enable: enable,
            type: type,
            toJSON: function () {
                return {
                    provider: provider,
                    extension: extension,
                    enable: enable,
                    type: type,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromEnableExtension = function (provider, extension, enable, type) {
        if (enable === void 0) { enable = true; }
        if (type === void 0) { type = CmviotMediaBase_1.MediaSourceType.UnknownMediaSource; }
        return 'RtcEngine_enableExtension';
    };
    IRtcEngineImpl.prototype.setExtensionProperty = function (provider, extension, key, value, type) {
        if (type === void 0) { type = CmviotMediaBase_1.MediaSourceType.UnknownMediaSource; }
        var apiType = this.getApiTypeFromSetExtensionProperty(provider, extension, key, value, type);
        var jsonParams = {
            provider: provider,
            extension: extension,
            key: key,
            value: value,
            type: type,
            toJSON: function () {
                return {
                    provider: provider,
                    extension: extension,
                    key: key,
                    value: value,
                    type: type,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetExtensionProperty = function (provider, extension, key, value, type) {
        if (type === void 0) { type = CmviotMediaBase_1.MediaSourceType.UnknownMediaSource; }
        return 'RtcEngine_setExtensionProperty';
    };
    IRtcEngineImpl.prototype.getExtensionProperty = function (provider, extension, key, bufLen, type) {
        if (type === void 0) { type = CmviotMediaBase_1.MediaSourceType.UnknownMediaSource; }
        var apiType = this.getApiTypeFromGetExtensionProperty(provider, extension, key, bufLen, type);
        var jsonParams = {
            provider: provider,
            extension: extension,
            key: key,
            buf_len: bufLen,
            type: type,
            toJSON: function () {
                return {
                    provider: provider,
                    extension: extension,
                    key: key,
                    buf_len: bufLen,
                    type: type,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        var value = jsonResults.value;
        return value;
    };
    IRtcEngineImpl.prototype.getApiTypeFromGetExtensionProperty = function (provider, extension, key, bufLen, type) {
        if (type === void 0) { type = CmviotMediaBase_1.MediaSourceType.UnknownMediaSource; }
        return 'RtcEngine_getExtensionProperty';
    };
    IRtcEngineImpl.prototype.setCameraCapturerConfiguration = function (config) {
        var apiType = this.getApiTypeFromSetCameraCapturerConfiguration(config);
        var jsonParams = {
            config: config,
            toJSON: function () {
                return {
                    config: config,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetCameraCapturerConfiguration = function (config) {
        return 'RtcEngine_setCameraCapturerConfiguration';
    };
    IRtcEngineImpl.prototype.createCustomVideoTrack = function () {
        var apiType = this.getApiTypeFromCreateCustomVideoTrack();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromCreateCustomVideoTrack = function () {
        return 'RtcEngine_createCustomVideoTrack';
    };
    IRtcEngineImpl.prototype.createCustomEncodedVideoTrack = function (senderOption) {
        var apiType = this.getApiTypeFromCreateCustomEncodedVideoTrack(senderOption);
        var jsonParams = {
            sender_option: senderOption,
            toJSON: function () {
                return {
                    sender_option: senderOption,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromCreateCustomEncodedVideoTrack = function (senderOption) {
        return 'RtcEngine_createCustomEncodedVideoTrack';
    };
    IRtcEngineImpl.prototype.destroyCustomVideoTrack = function (videoTrackId) {
        var apiType = this.getApiTypeFromDestroyCustomVideoTrack(videoTrackId);
        var jsonParams = {
            video_track_id: videoTrackId,
            toJSON: function () {
                return {
                    video_track_id: videoTrackId,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromDestroyCustomVideoTrack = function (videoTrackId) {
        return 'RtcEngine_destroyCustomVideoTrack';
    };
    IRtcEngineImpl.prototype.destroyCustomEncodedVideoTrack = function (videoTrackId) {
        var apiType = this.getApiTypeFromDestroyCustomEncodedVideoTrack(videoTrackId);
        var jsonParams = {
            video_track_id: videoTrackId,
            toJSON: function () {
                return {
                    video_track_id: videoTrackId,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromDestroyCustomEncodedVideoTrack = function (videoTrackId) {
        return 'RtcEngine_destroyCustomEncodedVideoTrack';
    };
    IRtcEngineImpl.prototype.switchCamera = function () {
        var apiType = this.getApiTypeFromSwitchCamera();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSwitchCamera = function () {
        return 'RtcEngine_switchCamera';
    };
    IRtcEngineImpl.prototype.isCameraZoomSupported = function () {
        var apiType = this.getApiTypeFromIsCameraZoomSupported();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromIsCameraZoomSupported = function () {
        return 'RtcEngine_isCameraZoomSupported';
    };
    IRtcEngineImpl.prototype.isCameraFaceDetectSupported = function () {
        var apiType = this.getApiTypeFromIsCameraFaceDetectSupported();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromIsCameraFaceDetectSupported = function () {
        return 'RtcEngine_isCameraFaceDetectSupported';
    };
    IRtcEngineImpl.prototype.isCameraTorchSupported = function () {
        var apiType = this.getApiTypeFromIsCameraTorchSupported();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromIsCameraTorchSupported = function () {
        return 'RtcEngine_isCameraTorchSupported';
    };
    IRtcEngineImpl.prototype.isCameraFocusSupported = function () {
        var apiType = this.getApiTypeFromIsCameraFocusSupported();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromIsCameraFocusSupported = function () {
        return 'RtcEngine_isCameraFocusSupported';
    };
    IRtcEngineImpl.prototype.isCameraAutoFocusFaceModeSupported = function () {
        var apiType = this.getApiTypeFromIsCameraAutoFocusFaceModeSupported();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromIsCameraAutoFocusFaceModeSupported = function () {
        return 'RtcEngine_isCameraAutoFocusFaceModeSupported';
    };
    IRtcEngineImpl.prototype.setCameraZoomFactor = function (factor) {
        var apiType = this.getApiTypeFromSetCameraZoomFactor(factor);
        var jsonParams = {
            factor: factor,
            toJSON: function () {
                return {
                    factor: factor,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetCameraZoomFactor = function (factor) {
        return 'RtcEngine_setCameraZoomFactor';
    };
    IRtcEngineImpl.prototype.enableFaceDetection = function (enabled) {
        var apiType = this.getApiTypeFromEnableFaceDetection(enabled);
        var jsonParams = {
            enabled: enabled,
            toJSON: function () {
                return {
                    enabled: enabled,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromEnableFaceDetection = function (enabled) {
        return 'RtcEngine_enableFaceDetection';
    };
    IRtcEngineImpl.prototype.getCameraMaxZoomFactor = function () {
        var apiType = this.getApiTypeFromGetCameraMaxZoomFactor();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromGetCameraMaxZoomFactor = function () {
        return 'RtcEngine_getCameraMaxZoomFactor';
    };
    IRtcEngineImpl.prototype.setCameraFocusPositionInPreview = function (positionX, positionY) {
        var apiType = this.getApiTypeFromSetCameraFocusPositionInPreview(positionX, positionY);
        var jsonParams = {
            positionX: positionX,
            positionY: positionY,
            toJSON: function () {
                return {
                    positionX: positionX,
                    positionY: positionY,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetCameraFocusPositionInPreview = function (positionX, positionY) {
        return 'RtcEngine_setCameraFocusPositionInPreview';
    };
    IRtcEngineImpl.prototype.setCameraTorchOn = function (isOn) {
        var apiType = this.getApiTypeFromSetCameraTorchOn(isOn);
        var jsonParams = {
            isOn: isOn,
            toJSON: function () {
                return {
                    isOn: isOn,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetCameraTorchOn = function (isOn) {
        return 'RtcEngine_setCameraTorchOn';
    };
    IRtcEngineImpl.prototype.setCameraAutoFocusFaceModeEnabled = function (enabled) {
        var apiType = this.getApiTypeFromSetCameraAutoFocusFaceModeEnabled(enabled);
        var jsonParams = {
            enabled: enabled,
            toJSON: function () {
                return {
                    enabled: enabled,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetCameraAutoFocusFaceModeEnabled = function (enabled) {
        return 'RtcEngine_setCameraAutoFocusFaceModeEnabled';
    };
    IRtcEngineImpl.prototype.isCameraExposurePositionSupported = function () {
        var apiType = this.getApiTypeFromIsCameraExposurePositionSupported();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromIsCameraExposurePositionSupported = function () {
        return 'RtcEngine_isCameraExposurePositionSupported';
    };
    IRtcEngineImpl.prototype.setCameraExposurePosition = function (positionXinView, positionYinView) {
        var apiType = this.getApiTypeFromSetCameraExposurePosition(positionXinView, positionYinView);
        var jsonParams = {
            positionXinView: positionXinView,
            positionYinView: positionYinView,
            toJSON: function () {
                return {
                    positionXinView: positionXinView,
                    positionYinView: positionYinView,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetCameraExposurePosition = function (positionXinView, positionYinView) {
        return 'RtcEngine_setCameraExposurePosition';
    };
    IRtcEngineImpl.prototype.isCameraExposureSupported = function () {
        var apiType = this.getApiTypeFromIsCameraExposureSupported();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromIsCameraExposureSupported = function () {
        return 'RtcEngine_isCameraExposureSupported';
    };
    IRtcEngineImpl.prototype.setCameraExposureFactor = function (factor) {
        var apiType = this.getApiTypeFromSetCameraExposureFactor(factor);
        var jsonParams = {
            factor: factor,
            toJSON: function () {
                return {
                    factor: factor,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetCameraExposureFactor = function (factor) {
        return 'RtcEngine_setCameraExposureFactor';
    };
    IRtcEngineImpl.prototype.isCameraAutoExposureFaceModeSupported = function () {
        var apiType = this.getApiTypeFromIsCameraAutoExposureFaceModeSupported();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromIsCameraAutoExposureFaceModeSupported = function () {
        return 'RtcEngine_isCameraAutoExposureFaceModeSupported';
    };
    IRtcEngineImpl.prototype.setCameraAutoExposureFaceModeEnabled = function (enabled) {
        var apiType = this.getApiTypeFromSetCameraAutoExposureFaceModeEnabled(enabled);
        var jsonParams = {
            enabled: enabled,
            toJSON: function () {
                return {
                    enabled: enabled,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetCameraAutoExposureFaceModeEnabled = function (enabled) {
        return 'RtcEngine_setCameraAutoExposureFaceModeEnabled';
    };
    IRtcEngineImpl.prototype.setDefaultAudioRouteToSpeakerphone = function (defaultToSpeaker) {
        var apiType = this.getApiTypeFromSetDefaultAudioRouteToSpeakerphone(defaultToSpeaker);
        var jsonParams = {
            defaultToSpeaker: defaultToSpeaker,
            toJSON: function () {
                return {
                    defaultToSpeaker: defaultToSpeaker,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetDefaultAudioRouteToSpeakerphone = function (defaultToSpeaker) {
        return 'RtcEngine_setDefaultAudioRouteToSpeakerphone';
    };
    IRtcEngineImpl.prototype.setEnableSpeakerphone = function (speakerOn) {
        var apiType = this.getApiTypeFromSetEnableSpeakerphone(speakerOn);
        var jsonParams = {
            speakerOn: speakerOn,
            toJSON: function () {
                return {
                    speakerOn: speakerOn,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetEnableSpeakerphone = function (speakerOn) {
        return 'RtcEngine_setEnableSpeakerphone';
    };
    IRtcEngineImpl.prototype.isSpeakerphoneEnabled = function () {
        var apiType = this.getApiTypeFromIsSpeakerphoneEnabled();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromIsSpeakerphoneEnabled = function () {
        return 'RtcEngine_isSpeakerphoneEnabled';
    };
    IRtcEngineImpl.prototype.setRouteInCommunicationMode = function (route) {
        var apiType = this.getApiTypeFromSetRouteInCommunicationMode(route);
        var jsonParams = {
            route: route,
            toJSON: function () {
                return {
                    route: route,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetRouteInCommunicationMode = function (route) {
        return 'RtcEngine_setRouteInCommunicationMode';
    };
    IRtcEngineImpl.prototype.getScreenCaptureSources = function (thumbSize, iconSize, includeScreen) {
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
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromGetScreenCaptureSources = function (thumbSize, iconSize, includeScreen) {
        return 'RtcEngine_getScreenCaptureSources';
    };
    IRtcEngineImpl.prototype.setAudioSessionOperationRestriction = function (restriction) {
        var apiType = this.getApiTypeFromSetAudioSessionOperationRestriction(restriction);
        var jsonParams = {
            restriction: restriction,
            toJSON: function () {
                return {
                    restriction: restriction,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetAudioSessionOperationRestriction = function (restriction) {
        return 'RtcEngine_setAudioSessionOperationRestriction';
    };
    IRtcEngineImpl.prototype.startScreenCaptureByDisplayId = function (displayId, regionRect, captureParams) {
        var apiType = this.getApiTypeFromStartScreenCaptureByDisplayId(displayId, regionRect, captureParams);
        var jsonParams = {
            displayId: displayId,
            regionRect: regionRect,
            captureParams: captureParams,
            toJSON: function () {
                return {
                    displayId: displayId,
                    regionRect: regionRect,
                    captureParams: captureParams,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromStartScreenCaptureByDisplayId = function (displayId, regionRect, captureParams) {
        return 'RtcEngine_startScreenCaptureByDisplayId';
    };
    IRtcEngineImpl.prototype.startScreenCaptureByScreenRect = function (screenRect, regionRect, captureParams) {
        var apiType = this.getApiTypeFromStartScreenCaptureByScreenRect(screenRect, regionRect, captureParams);
        var jsonParams = {
            screenRect: screenRect,
            regionRect: regionRect,
            captureParams: captureParams,
            toJSON: function () {
                return {
                    screenRect: screenRect,
                    regionRect: regionRect,
                    captureParams: captureParams,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromStartScreenCaptureByScreenRect = function (screenRect, regionRect, captureParams) {
        return 'RtcEngine_startScreenCaptureByScreenRect';
    };
    IRtcEngineImpl.prototype.getAudioDeviceInfo = function () {
        var apiType = this.getApiTypeFromGetAudioDeviceInfo();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        var deviceInfo = jsonResults.deviceInfo;
        return deviceInfo;
    };
    IRtcEngineImpl.prototype.getApiTypeFromGetAudioDeviceInfo = function () {
        return 'RtcEngine_getAudioDeviceInfo';
    };
    IRtcEngineImpl.prototype.startScreenCaptureByWindowId = function (windowId, regionRect, captureParams) {
        var apiType = this.getApiTypeFromStartScreenCaptureByWindowId(windowId, regionRect, captureParams);
        var jsonParams = {
            windowId: windowId,
            regionRect: regionRect,
            captureParams: captureParams,
            toJSON: function () {
                return {
                    windowId: windowId,
                    regionRect: regionRect,
                    captureParams: captureParams,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromStartScreenCaptureByWindowId = function (windowId, regionRect, captureParams) {
        return 'RtcEngine_startScreenCaptureByWindowId';
    };
    IRtcEngineImpl.prototype.setScreenCaptureContentHint = function (contentHint) {
        var apiType = this.getApiTypeFromSetScreenCaptureContentHint(contentHint);
        var jsonParams = {
            contentHint: contentHint,
            toJSON: function () {
                return {
                    contentHint: contentHint,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetScreenCaptureContentHint = function (contentHint) {
        return 'RtcEngine_setScreenCaptureContentHint';
    };
    IRtcEngineImpl.prototype.updateScreenCaptureRegion = function (regionRect) {
        var apiType = this.getApiTypeFromUpdateScreenCaptureRegion(regionRect);
        var jsonParams = {
            regionRect: regionRect,
            toJSON: function () {
                return {
                    regionRect: regionRect,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromUpdateScreenCaptureRegion = function (regionRect) {
        return 'RtcEngine_updateScreenCaptureRegion';
    };
    IRtcEngineImpl.prototype.updateScreenCaptureParameters = function (captureParams) {
        var apiType = this.getApiTypeFromUpdateScreenCaptureParameters(captureParams);
        var jsonParams = {
            captureParams: captureParams,
            toJSON: function () {
                return {
                    captureParams: captureParams,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromUpdateScreenCaptureParameters = function (captureParams) {
        return 'RtcEngine_updateScreenCaptureParameters';
    };
    IRtcEngineImpl.prototype.startScreenCapture = function (captureParams) {
        var apiType = this.getApiTypeFromStartScreenCapture(captureParams);
        var jsonParams = {
            captureParams: captureParams,
            toJSON: function () {
                return {
                    captureParams: captureParams,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromStartScreenCapture = function (captureParams) {
        return 'RtcEngine_startScreenCapture';
    };
    IRtcEngineImpl.prototype.startScreenCaptureBySourceType = function (sourceType, config) {
        var apiType = this.getApiTypeFromStartScreenCaptureBySourceType(sourceType, config);
        var jsonParams = {
            sourceType: sourceType,
            config: config,
            toJSON: function () {
                return {
                    sourceType: sourceType,
                    config: config,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromStartScreenCaptureBySourceType = function (sourceType, config) {
        return 'RtcEngine_startScreenCaptureBySourceType';
    };
    IRtcEngineImpl.prototype.updateScreenCapture = function (captureParams) {
        var apiType = this.getApiTypeFromUpdateScreenCapture(captureParams);
        var jsonParams = {
            captureParams: captureParams,
            toJSON: function () {
                return {
                    captureParams: captureParams,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromUpdateScreenCapture = function (captureParams) {
        return 'RtcEngine_updateScreenCapture';
    };
    IRtcEngineImpl.prototype.queryScreenCaptureCapability = function () {
        var apiType = this.getApiTypeFromQueryScreenCaptureCapability();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromQueryScreenCaptureCapability = function () {
        return 'RtcEngine_queryScreenCaptureCapability';
    };
    IRtcEngineImpl.prototype.setScreenCaptureScenario = function (screenScenario) {
        var apiType = this.getApiTypeFromSetScreenCaptureScenario(screenScenario);
        var jsonParams = {
            screenScenario: screenScenario,
            toJSON: function () {
                return {
                    screenScenario: screenScenario,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetScreenCaptureScenario = function (screenScenario) {
        return 'RtcEngine_setScreenCaptureScenario';
    };
    IRtcEngineImpl.prototype.stopScreenCapture = function () {
        var apiType = this.getApiTypeFromStopScreenCapture();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromStopScreenCapture = function () {
        return 'RtcEngine_stopScreenCapture';
    };
    IRtcEngineImpl.prototype.stopScreenCaptureBySourceType = function (sourceType) {
        var apiType = this.getApiTypeFromStopScreenCaptureBySourceType(sourceType);
        var jsonParams = {
            sourceType: sourceType,
            toJSON: function () {
                return {
                    sourceType: sourceType,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromStopScreenCaptureBySourceType = function (sourceType) {
        return 'RtcEngine_stopScreenCaptureBySourceType';
    };
    IRtcEngineImpl.prototype.getCallId = function () {
        var apiType = this.getApiTypeFromGetCallId();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        var callId = jsonResults.callId;
        return callId;
    };
    IRtcEngineImpl.prototype.getApiTypeFromGetCallId = function () {
        return 'RtcEngine_getCallId';
    };
    IRtcEngineImpl.prototype.rate = function (callId, rating, description) {
        var apiType = this.getApiTypeFromRate(callId, rating, description);
        var jsonParams = {
            callId: callId,
            rating: rating,
            description: description,
            toJSON: function () {
                return {
                    callId: callId,
                    rating: rating,
                    description: description,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromRate = function (callId, rating, description) {
        return 'RtcEngine_rate';
    };
    IRtcEngineImpl.prototype.complain = function (callId, description) {
        var apiType = this.getApiTypeFromComplain(callId, description);
        var jsonParams = {
            callId: callId,
            description: description,
            toJSON: function () {
                return {
                    callId: callId,
                    description: description,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromComplain = function (callId, description) {
        return 'RtcEngine_complain';
    };
    IRtcEngineImpl.prototype.startRtmpStreamWithoutTranscoding = function (url) {
        var apiType = this.getApiTypeFromStartRtmpStreamWithoutTranscoding(url);
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
    IRtcEngineImpl.prototype.getApiTypeFromStartRtmpStreamWithoutTranscoding = function (url) {
        return 'RtcEngine_startRtmpStreamWithoutTranscoding';
    };
    IRtcEngineImpl.prototype.startRtmpStreamWithTranscoding = function (url, transcoding) {
        var apiType = this.getApiTypeFromStartRtmpStreamWithTranscoding(url, transcoding);
        var jsonParams = {
            url: url,
            transcoding: transcoding,
            toJSON: function () {
                return {
                    url: url,
                    transcoding: transcoding,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromStartRtmpStreamWithTranscoding = function (url, transcoding) {
        return 'RtcEngine_startRtmpStreamWithTranscoding';
    };
    IRtcEngineImpl.prototype.updateRtmpTranscoding = function (transcoding) {
        var apiType = this.getApiTypeFromUpdateRtmpTranscoding(transcoding);
        var jsonParams = {
            transcoding: transcoding,
            toJSON: function () {
                return {
                    transcoding: transcoding,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromUpdateRtmpTranscoding = function (transcoding) {
        return 'RtcEngine_updateRtmpTranscoding';
    };
    IRtcEngineImpl.prototype.stopRtmpStream = function (url) {
        var apiType = this.getApiTypeFromStopRtmpStream(url);
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
    IRtcEngineImpl.prototype.getApiTypeFromStopRtmpStream = function (url) {
        return 'RtcEngine_stopRtmpStream';
    };
    IRtcEngineImpl.prototype.startLocalVideoTranscoder = function (config) {
        var apiType = this.getApiTypeFromStartLocalVideoTranscoder(config);
        var jsonParams = {
            config: config,
            toJSON: function () {
                return {
                    config: config,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromStartLocalVideoTranscoder = function (config) {
        return 'RtcEngine_startLocalVideoTranscoder';
    };
    IRtcEngineImpl.prototype.updateLocalTranscoderConfiguration = function (config) {
        var apiType = this.getApiTypeFromUpdateLocalTranscoderConfiguration(config);
        var jsonParams = {
            config: config,
            toJSON: function () {
                return {
                    config: config,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromUpdateLocalTranscoderConfiguration = function (config) {
        return 'RtcEngine_updateLocalTranscoderConfiguration';
    };
    IRtcEngineImpl.prototype.stopLocalVideoTranscoder = function () {
        var apiType = this.getApiTypeFromStopLocalVideoTranscoder();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromStopLocalVideoTranscoder = function () {
        return 'RtcEngine_stopLocalVideoTranscoder';
    };
    IRtcEngineImpl.prototype.startCameraCapture = function (sourceType, config) {
        var apiType = this.getApiTypeFromStartCameraCapture(sourceType, config);
        var jsonParams = {
            sourceType: sourceType,
            config: config,
            toJSON: function () {
                return {
                    sourceType: sourceType,
                    config: config,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromStartCameraCapture = function (sourceType, config) {
        return 'RtcEngine_startCameraCapture';
    };
    IRtcEngineImpl.prototype.stopCameraCapture = function (sourceType) {
        var apiType = this.getApiTypeFromStopCameraCapture(sourceType);
        var jsonParams = {
            sourceType: sourceType,
            toJSON: function () {
                return {
                    sourceType: sourceType,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromStopCameraCapture = function (sourceType) {
        return 'RtcEngine_stopCameraCapture';
    };
    IRtcEngineImpl.prototype.setCameraDeviceOrientation = function (type, orientation) {
        var apiType = this.getApiTypeFromSetCameraDeviceOrientation(type, orientation);
        var jsonParams = {
            type: type,
            orientation: orientation,
            toJSON: function () {
                return {
                    type: type,
                    orientation: orientation,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetCameraDeviceOrientation = function (type, orientation) {
        return 'RtcEngine_setCameraDeviceOrientation';
    };
    IRtcEngineImpl.prototype.setScreenCaptureOrientation = function (type, orientation) {
        var apiType = this.getApiTypeFromSetScreenCaptureOrientation(type, orientation);
        var jsonParams = {
            type: type,
            orientation: orientation,
            toJSON: function () {
                return {
                    type: type,
                    orientation: orientation,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetScreenCaptureOrientation = function (type, orientation) {
        return 'RtcEngine_setScreenCaptureOrientation';
    };
    IRtcEngineImpl.prototype.getConnectionState = function () {
        var apiType = this.getApiTypeFromGetConnectionState();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromGetConnectionState = function () {
        return 'RtcEngine_getConnectionState';
    };
    IRtcEngineImpl.prototype.registerEventHandler = function (eventHandler) {
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
    IRtcEngineImpl.prototype.getApiTypeFromRegisterEventHandler = function (eventHandler) {
        return 'RtcEngine_registerEventHandler';
    };
    IRtcEngineImpl.prototype.unregisterEventHandler = function (eventHandler) {
        var apiType = this.getApiTypeFromUnregisterEventHandler(eventHandler);
        var jsonParams = {
            eventHandler: eventHandler,
            toJSON: function () {
                return {};
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromUnregisterEventHandler = function (eventHandler) {
        return 'RtcEngine_unregisterEventHandler';
    };
    IRtcEngineImpl.prototype.setRemoteUserPriority = function (uid, userPriority) {
        var apiType = this.getApiTypeFromSetRemoteUserPriority(uid, userPriority);
        var jsonParams = {
            uid: uid,
            userPriority: userPriority,
            toJSON: function () {
                return {
                    uid: uid,
                    userPriority: userPriority,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetRemoteUserPriority = function (uid, userPriority) {
        return 'RtcEngine_setRemoteUserPriority';
    };
    IRtcEngineImpl.prototype.setEncryptionMode = function (encryptionMode) {
        var apiType = this.getApiTypeFromSetEncryptionMode(encryptionMode);
        var jsonParams = {
            encryptionMode: encryptionMode,
            toJSON: function () {
                return {
                    encryptionMode: encryptionMode,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetEncryptionMode = function (encryptionMode) {
        return 'RtcEngine_setEncryptionMode';
    };
    IRtcEngineImpl.prototype.setEncryptionSecret = function (secret) {
        var apiType = this.getApiTypeFromSetEncryptionSecret(secret);
        var jsonParams = {
            secret: secret,
            toJSON: function () {
                return {
                    secret: secret,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetEncryptionSecret = function (secret) {
        return 'RtcEngine_setEncryptionSecret';
    };
    IRtcEngineImpl.prototype.enableEncryption = function (enabled, config) {
        var apiType = this.getApiTypeFromEnableEncryption(enabled, config);
        var jsonParams = {
            enabled: enabled,
            config: config,
            toJSON: function () {
                return {
                    enabled: enabled,
                    config: config,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromEnableEncryption = function (enabled, config) {
        return 'RtcEngine_enableEncryption';
    };
    IRtcEngineImpl.prototype.createDataStream = function (config) {
        var apiType = this.getApiTypeFromCreateDataStream(config);
        var jsonParams = {
            config: config,
            toJSON: function () {
                return {
                    config: config,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        var streamId = jsonResults.streamId;
        return streamId;
    };
    IRtcEngineImpl.prototype.getApiTypeFromCreateDataStream = function (config) {
        return 'RtcEngine_createDataStream';
    };
    IRtcEngineImpl.prototype.sendStreamMessage = function (streamId, data, length) {
        var apiType = this.getApiTypeFromSendStreamMessage(streamId, data, length);
        var jsonParams = {
            streamId: streamId,
            data: data,
            length: length,
            toJSON: function () {
                return {
                    streamId: streamId,
                    length: length,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSendStreamMessage = function (streamId, data, length) {
        return 'RtcEngine_sendStreamMessage';
    };
    IRtcEngineImpl.prototype.addVideoWatermark = function (watermarkUrl, options) {
        var apiType = this.getApiTypeFromAddVideoWatermark(watermarkUrl, options);
        var jsonParams = {
            watermarkUrl: watermarkUrl,
            options: options,
            toJSON: function () {
                return {
                    watermarkUrl: watermarkUrl,
                    options: options,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromAddVideoWatermark = function (watermarkUrl, options) {
        return 'RtcEngine_addVideoWatermark';
    };
    IRtcEngineImpl.prototype.clearVideoWatermarks = function () {
        var apiType = this.getApiTypeFromClearVideoWatermarks();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromClearVideoWatermarks = function () {
        return 'RtcEngine_clearVideoWatermarks';
    };
    IRtcEngineImpl.prototype.pauseAudio = function () {
        var apiType = this.getApiTypeFromPauseAudio();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromPauseAudio = function () {
        return 'RtcEngine_pauseAudio';
    };
    IRtcEngineImpl.prototype.resumeAudio = function () {
        var apiType = this.getApiTypeFromResumeAudio();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromResumeAudio = function () {
        return 'RtcEngine_resumeAudio';
    };
    IRtcEngineImpl.prototype.enableWebSdkInteroperability = function (enabled) {
        var apiType = this.getApiTypeFromEnableWebSdkInteroperability(enabled);
        var jsonParams = {
            enabled: enabled,
            toJSON: function () {
                return {
                    enabled: enabled,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromEnableWebSdkInteroperability = function (enabled) {
        return 'RtcEngine_enableWebSdkInteroperability';
    };
    IRtcEngineImpl.prototype.sendCustomReportMessage = function (id, category, event, label, value) {
        var apiType = this.getApiTypeFromSendCustomReportMessage(id, category, event, label, value);
        var jsonParams = {
            id: id,
            category: category,
            event: event,
            label: label,
            value: value,
            toJSON: function () {
                return {
                    id: id,
                    category: category,
                    event: event,
                    label: label,
                    value: value,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSendCustomReportMessage = function (id, category, event, label, value) {
        return 'RtcEngine_sendCustomReportMessage';
    };
    IRtcEngineImpl.prototype.registerMediaMetadataObserver = function (observer, type) {
        var apiType = this.getApiTypeFromRegisterMediaMetadataObserver(observer, type);
        var jsonParams = {
            observer: observer,
            type: type,
            toJSON: function () {
                return {
                    type: type,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromRegisterMediaMetadataObserver = function (observer, type) {
        return 'RtcEngine_registerMediaMetadataObserver';
    };
    IRtcEngineImpl.prototype.unregisterMediaMetadataObserver = function (observer, type) {
        var apiType = this.getApiTypeFromUnregisterMediaMetadataObserver(observer, type);
        var jsonParams = {
            observer: observer,
            type: type,
            toJSON: function () {
                return {
                    type: type,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromUnregisterMediaMetadataObserver = function (observer, type) {
        return 'RtcEngine_unregisterMediaMetadataObserver';
    };
    IRtcEngineImpl.prototype.startAudioFrameDump = function (channelId, userId, location, uuid, passwd, durationMs, autoUpload) {
        var apiType = this.getApiTypeFromStartAudioFrameDump(channelId, userId, location, uuid, passwd, durationMs, autoUpload);
        var jsonParams = {
            channel_id: channelId,
            user_id: userId,
            location: location,
            uuid: uuid,
            passwd: passwd,
            duration_ms: durationMs,
            auto_upload: autoUpload,
            toJSON: function () {
                return {
                    channel_id: channelId,
                    user_id: userId,
                    location: location,
                    uuid: uuid,
                    passwd: passwd,
                    duration_ms: durationMs,
                    auto_upload: autoUpload,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromStartAudioFrameDump = function (channelId, userId, location, uuid, passwd, durationMs, autoUpload) {
        return 'RtcEngine_startAudioFrameDump';
    };
    IRtcEngineImpl.prototype.stopAudioFrameDump = function (channelId, userId, location) {
        var apiType = this.getApiTypeFromStopAudioFrameDump(channelId, userId, location);
        var jsonParams = {
            channel_id: channelId,
            user_id: userId,
            location: location,
            toJSON: function () {
                return {
                    channel_id: channelId,
                    user_id: userId,
                    location: location,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromStopAudioFrameDump = function (channelId, userId, location) {
        return 'RtcEngine_stopAudioFrameDump';
    };
    IRtcEngineImpl.prototype.setAINSMode = function (enabled, mode) {
        var apiType = this.getApiTypeFromSetAINSMode(enabled, mode);
        var jsonParams = {
            enabled: enabled,
            mode: mode,
            toJSON: function () {
                return {
                    enabled: enabled,
                    mode: mode,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetAINSMode = function (enabled, mode) {
        return 'RtcEngine_setAINSMode';
    };
    IRtcEngineImpl.prototype.registerLocalUserAccount = function (appId, userAccount) {
        var apiType = this.getApiTypeFromRegisterLocalUserAccount(appId, userAccount);
        var jsonParams = {
            appId: appId,
            userAccount: userAccount,
            toJSON: function () {
                return {
                    appId: appId,
                    userAccount: userAccount,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromRegisterLocalUserAccount = function (appId, userAccount) {
        return 'RtcEngine_registerLocalUserAccount';
    };
    IRtcEngineImpl.prototype.joinChannelWithUserAccount = function (token, channelId, userAccount, options) {
        var apiType = this.getApiTypeFromJoinChannelWithUserAccount(token, channelId, userAccount, options);
        var jsonParams = {
            token: token,
            channelId: channelId,
            userAccount: userAccount,
            options: options,
            toJSON: function () {
                return {
                    token: token,
                    channelId: channelId,
                    userAccount: userAccount,
                    options: options,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromJoinChannelWithUserAccount = function (token, channelId, userAccount, options) {
        return 'RtcEngine_joinChannelWithUserAccount';
    };
    IRtcEngineImpl.prototype.joinChannelWithUserAccountEx = function (token, channelId, userAccount, options) {
        var apiType = this.getApiTypeFromJoinChannelWithUserAccountEx(token, channelId, userAccount, options);
        var jsonParams = {
            token: token,
            channelId: channelId,
            userAccount: userAccount,
            options: options,
            toJSON: function () {
                return {
                    token: token,
                    channelId: channelId,
                    userAccount: userAccount,
                    options: options,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromJoinChannelWithUserAccountEx = function (token, channelId, userAccount, options) {
        return 'RtcEngine_joinChannelWithUserAccountEx';
    };
    IRtcEngineImpl.prototype.getUserInfoByUserAccount = function (userAccount) {
        var apiType = this.getApiTypeFromGetUserInfoByUserAccount(userAccount);
        var jsonParams = {
            userAccount: userAccount,
            toJSON: function () {
                return {
                    userAccount: userAccount,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        var userInfo = jsonResults.userInfo;
        return userInfo;
    };
    IRtcEngineImpl.prototype.getApiTypeFromGetUserInfoByUserAccount = function (userAccount) {
        return 'RtcEngine_getUserInfoByUserAccount';
    };
    IRtcEngineImpl.prototype.getUserInfoByUid = function (uid) {
        var apiType = this.getApiTypeFromGetUserInfoByUid(uid);
        var jsonParams = {
            uid: uid,
            toJSON: function () {
                return {
                    uid: uid,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        var userInfo = jsonResults.userInfo;
        return userInfo;
    };
    IRtcEngineImpl.prototype.getApiTypeFromGetUserInfoByUid = function (uid) {
        return 'RtcEngine_getUserInfoByUid';
    };
    IRtcEngineImpl.prototype.startOrUpdateChannelMediaRelay = function (configuration) {
        var apiType = this.getApiTypeFromStartOrUpdateChannelMediaRelay(configuration);
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
    IRtcEngineImpl.prototype.getApiTypeFromStartOrUpdateChannelMediaRelay = function (configuration) {
        return 'RtcEngine_startOrUpdateChannelMediaRelay';
    };
    IRtcEngineImpl.prototype.startChannelMediaRelay = function (configuration) {
        var apiType = this.getApiTypeFromStartChannelMediaRelay(configuration);
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
    IRtcEngineImpl.prototype.getApiTypeFromStartChannelMediaRelay = function (configuration) {
        return 'RtcEngine_startChannelMediaRelay';
    };
    IRtcEngineImpl.prototype.updateChannelMediaRelay = function (configuration) {
        var apiType = this.getApiTypeFromUpdateChannelMediaRelay(configuration);
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
    IRtcEngineImpl.prototype.getApiTypeFromUpdateChannelMediaRelay = function (configuration) {
        return 'RtcEngine_updateChannelMediaRelay';
    };
    IRtcEngineImpl.prototype.stopChannelMediaRelay = function () {
        var apiType = this.getApiTypeFromStopChannelMediaRelay();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromStopChannelMediaRelay = function () {
        return 'RtcEngine_stopChannelMediaRelay';
    };
    IRtcEngineImpl.prototype.pauseAllChannelMediaRelay = function () {
        var apiType = this.getApiTypeFromPauseAllChannelMediaRelay();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromPauseAllChannelMediaRelay = function () {
        return 'RtcEngine_pauseAllChannelMediaRelay';
    };
    IRtcEngineImpl.prototype.resumeAllChannelMediaRelay = function () {
        var apiType = this.getApiTypeFromResumeAllChannelMediaRelay();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromResumeAllChannelMediaRelay = function () {
        return 'RtcEngine_resumeAllChannelMediaRelay';
    };
    IRtcEngineImpl.prototype.setDirectCdnStreamingAudioConfiguration = function (profile) {
        var apiType = this.getApiTypeFromSetDirectCdnStreamingAudioConfiguration(profile);
        var jsonParams = {
            profile: profile,
            toJSON: function () {
                return {
                    profile: profile,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetDirectCdnStreamingAudioConfiguration = function (profile) {
        return 'RtcEngine_setDirectCdnStreamingAudioConfiguration';
    };
    IRtcEngineImpl.prototype.setDirectCdnStreamingVideoConfiguration = function (config) {
        var apiType = this.getApiTypeFromSetDirectCdnStreamingVideoConfiguration(config);
        var jsonParams = {
            config: config,
            toJSON: function () {
                return {
                    config: config,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetDirectCdnStreamingVideoConfiguration = function (config) {
        return 'RtcEngine_setDirectCdnStreamingVideoConfiguration';
    };
    IRtcEngineImpl.prototype.startDirectCdnStreaming = function (eventHandler, publishUrl, options) {
        var apiType = this.getApiTypeFromStartDirectCdnStreaming(eventHandler, publishUrl, options);
        var jsonParams = {
            eventHandler: eventHandler,
            publishUrl: publishUrl,
            options: options,
            toJSON: function () {
                return {
                    publishUrl: publishUrl,
                    options: options,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromStartDirectCdnStreaming = function (eventHandler, publishUrl, options) {
        return 'RtcEngine_startDirectCdnStreaming';
    };
    IRtcEngineImpl.prototype.stopDirectCdnStreaming = function () {
        var apiType = this.getApiTypeFromStopDirectCdnStreaming();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromStopDirectCdnStreaming = function () {
        return 'RtcEngine_stopDirectCdnStreaming';
    };
    IRtcEngineImpl.prototype.updateDirectCdnStreamingMediaOptions = function (options) {
        var apiType = this.getApiTypeFromUpdateDirectCdnStreamingMediaOptions(options);
        var jsonParams = {
            options: options,
            toJSON: function () {
                return {
                    options: options,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromUpdateDirectCdnStreamingMediaOptions = function (options) {
        return 'RtcEngine_updateDirectCdnStreamingMediaOptions';
    };
    IRtcEngineImpl.prototype.startRhythmPlayer = function (sound1, sound2, config) {
        var apiType = this.getApiTypeFromStartRhythmPlayer(sound1, sound2, config);
        var jsonParams = {
            sound1: sound1,
            sound2: sound2,
            config: config,
            toJSON: function () {
                return {
                    sound1: sound1,
                    sound2: sound2,
                    config: config,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromStartRhythmPlayer = function (sound1, sound2, config) {
        return 'RtcEngine_startRhythmPlayer';
    };
    IRtcEngineImpl.prototype.stopRhythmPlayer = function () {
        var apiType = this.getApiTypeFromStopRhythmPlayer();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromStopRhythmPlayer = function () {
        return 'RtcEngine_stopRhythmPlayer';
    };
    IRtcEngineImpl.prototype.configRhythmPlayer = function (config) {
        var apiType = this.getApiTypeFromConfigRhythmPlayer(config);
        var jsonParams = {
            config: config,
            toJSON: function () {
                return {
                    config: config,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromConfigRhythmPlayer = function (config) {
        return 'RtcEngine_configRhythmPlayer';
    };
    IRtcEngineImpl.prototype.takeSnapshot = function (uid, filePath) {
        var apiType = this.getApiTypeFromTakeSnapshot(uid, filePath);
        var jsonParams = {
            uid: uid,
            filePath: filePath,
            toJSON: function () {
                return {
                    uid: uid,
                    filePath: filePath,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromTakeSnapshot = function (uid, filePath) {
        return 'RtcEngine_takeSnapshot';
    };
    IRtcEngineImpl.prototype.enableContentInspect = function (enabled, config) {
        var apiType = this.getApiTypeFromEnableContentInspect(enabled, config);
        var jsonParams = {
            enabled: enabled,
            config: config,
            toJSON: function () {
                return {
                    enabled: enabled,
                    config: config,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromEnableContentInspect = function (enabled, config) {
        return 'RtcEngine_enableContentInspect';
    };
    IRtcEngineImpl.prototype.adjustCustomAudioPublishVolume = function (trackId, volume) {
        var apiType = this.getApiTypeFromAdjustCustomAudioPublishVolume(trackId, volume);
        var jsonParams = {
            trackId: trackId,
            volume: volume,
            toJSON: function () {
                return {
                    trackId: trackId,
                    volume: volume,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromAdjustCustomAudioPublishVolume = function (trackId, volume) {
        return 'RtcEngine_adjustCustomAudioPublishVolume';
    };
    IRtcEngineImpl.prototype.adjustCustomAudioPlayoutVolume = function (trackId, volume) {
        var apiType = this.getApiTypeFromAdjustCustomAudioPlayoutVolume(trackId, volume);
        var jsonParams = {
            trackId: trackId,
            volume: volume,
            toJSON: function () {
                return {
                    trackId: trackId,
                    volume: volume,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromAdjustCustomAudioPlayoutVolume = function (trackId, volume) {
        return 'RtcEngine_adjustCustomAudioPlayoutVolume';
    };
    IRtcEngineImpl.prototype.setCloudProxy = function (proxyType) {
        var apiType = this.getApiTypeFromSetCloudProxy(proxyType);
        var jsonParams = {
            proxyType: proxyType,
            toJSON: function () {
                return {
                    proxyType: proxyType,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetCloudProxy = function (proxyType) {
        return 'RtcEngine_setCloudProxy';
    };
    IRtcEngineImpl.prototype.setLocalAccessPoint = function (config) {
        var apiType = this.getApiTypeFromSetLocalAccessPoint(config);
        var jsonParams = {
            config: config,
            toJSON: function () {
                return {
                    config: config,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetLocalAccessPoint = function (config) {
        return 'RtcEngine_setLocalAccessPoint';
    };
    IRtcEngineImpl.prototype.setAdvancedAudioOptions = function (options, sourceType) {
        if (sourceType === void 0) { sourceType = 0; }
        var apiType = this.getApiTypeFromSetAdvancedAudioOptions(options, sourceType);
        var jsonParams = {
            options: options,
            sourceType: sourceType,
            toJSON: function () {
                return {
                    options: options,
                    sourceType: sourceType,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetAdvancedAudioOptions = function (options, sourceType) {
        if (sourceType === void 0) { sourceType = 0; }
        return 'RtcEngine_setAdvancedAudioOptions';
    };
    IRtcEngineImpl.prototype.setAVSyncSource = function (channelId, uid) {
        var apiType = this.getApiTypeFromSetAVSyncSource(channelId, uid);
        var jsonParams = {
            channelId: channelId,
            uid: uid,
            toJSON: function () {
                return {
                    channelId: channelId,
                    uid: uid,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetAVSyncSource = function (channelId, uid) {
        return 'RtcEngine_setAVSyncSource';
    };
    IRtcEngineImpl.prototype.enableVideoImageSource = function (enable, options) {
        var apiType = this.getApiTypeFromEnableVideoImageSource(enable, options);
        var jsonParams = {
            enable: enable,
            options: options,
            toJSON: function () {
                return {
                    enable: enable,
                    options: options,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromEnableVideoImageSource = function (enable, options) {
        return 'RtcEngine_enableVideoImageSource';
    };
    IRtcEngineImpl.prototype.getCurrentMonotonicTimeInMs = function () {
        var apiType = this.getApiTypeFromGetCurrentMonotonicTimeInMs();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromGetCurrentMonotonicTimeInMs = function () {
        return 'RtcEngine_getCurrentMonotonicTimeInMs';
    };
    IRtcEngineImpl.prototype.enableWirelessAccelerate = function (enabled) {
        var apiType = this.getApiTypeFromEnableWirelessAccelerate(enabled);
        var jsonParams = {
            enabled: enabled,
            toJSON: function () {
                return {
                    enabled: enabled,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromEnableWirelessAccelerate = function (enabled) {
        return 'RtcEngine_enableWirelessAccelerate';
    };
    IRtcEngineImpl.prototype.getNetworkType = function () {
        var apiType = this.getApiTypeFromGetNetworkType();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromGetNetworkType = function () {
        return 'RtcEngine_getNetworkType';
    };
    IRtcEngineImpl.prototype.setParameters = function (parameters) {
        var apiType = this.getApiTypeFromSetParameters(parameters);
        var jsonParams = {
            parameters: parameters,
            toJSON: function () {
                return {
                    parameters: parameters,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetParameters = function (parameters) {
        return 'RtcEngine_setParameters';
    };
    IRtcEngineImpl.prototype.startMediaRenderingTracing = function () {
        var apiType = this.getApiTypeFromStartMediaRenderingTracing();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromStartMediaRenderingTracing = function () {
        return 'RtcEngine_startMediaRenderingTracing';
    };
    IRtcEngineImpl.prototype.enableInstantMediaRendering = function () {
        var apiType = this.getApiTypeFromEnableInstantMediaRendering();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromEnableInstantMediaRendering = function () {
        return 'RtcEngine_enableInstantMediaRendering';
    };
    IRtcEngineImpl.prototype.getNtpWallTimeInMs = function () {
        var apiType = this.getApiTypeFromGetNtpWallTimeInMs();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromGetNtpWallTimeInMs = function () {
        return 'RtcEngine_getNtpWallTimeInMs';
    };
    IRtcEngineImpl.prototype.isFeatureAvailableOnDevice = function (type) {
        var apiType = this.getApiTypeFromIsFeatureAvailableOnDevice(type);
        var jsonParams = {
            type: type,
            toJSON: function () {
                return {
                    type: type,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromIsFeatureAvailableOnDevice = function (type) {
        return 'RtcEngine_isFeatureAvailableOnDevice';
    };
    IRtcEngineImpl.prototype.getAudioDeviceManager = function () {
        var apiType = this.getApiTypeFromGetAudioDeviceManager();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromGetAudioDeviceManager = function () {
        return 'RtcEngine_getAudioDeviceManager';
    };
    IRtcEngineImpl.prototype.getVideoDeviceManager = function () {
        var apiType = this.getApiTypeFromGetVideoDeviceManager();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromGetVideoDeviceManager = function () {
        return 'RtcEngine_getVideoDeviceManager';
    };
    IRtcEngineImpl.prototype.getMusicContentCenter = function () {
        var apiType = this.getApiTypeFromGetMusicContentCenter();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromGetMusicContentCenter = function () {
        return 'RtcEngine_getMusicContentCenter';
    };
    IRtcEngineImpl.prototype.getMediaEngine = function () {
        var apiType = this.getApiTypeFromGetMediaEngine();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromGetMediaEngine = function () {
        return 'RtcEngine_getMediaEngine';
    };
    IRtcEngineImpl.prototype.getLocalSpatialAudioEngine = function () {
        var apiType = this.getApiTypeFromGetLocalSpatialAudioEngine();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromGetLocalSpatialAudioEngine = function () {
        return 'RtcEngine_getLocalSpatialAudioEngine';
    };
    IRtcEngineImpl.prototype.sendMetaData = function (metadata, sourceType) {
        var apiType = this.getApiTypeFromSendMetaData(metadata, sourceType);
        var jsonParams = {
            metadata: metadata,
            source_type: sourceType,
            toJSON: function () {
                return {
                    metadata: metadata,
                    source_type: sourceType,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSendMetaData = function (metadata, sourceType) {
        return 'RtcEngine_sendMetaData';
    };
    IRtcEngineImpl.prototype.setMaxMetadataSize = function (size) {
        var apiType = this.getApiTypeFromSetMaxMetadataSize(size);
        var jsonParams = {
            size: size,
            toJSON: function () {
                return {
                    size: size,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromSetMaxMetadataSize = function (size) {
        return 'RtcEngine_setMaxMetadataSize';
    };
    IRtcEngineImpl.prototype.destroyRendererByView = function (view) {
        var apiType = this.getApiTypeFromDestroyRendererByView(view);
        var jsonParams = {
            view: view,
            toJSON: function () {
                return {
                    view: view,
                };
            },
        };
        IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
    };
    IRtcEngineImpl.prototype.getApiTypeFromDestroyRendererByView = function (view) {
        return 'RtcEngine_destroyRendererByView';
    };
    IRtcEngineImpl.prototype.destroyRendererByConfig = function (sourceType, channelId, uid) {
        if (uid === void 0) { uid = 0; }
        var apiType = this.getApiTypeFromDestroyRendererByConfig(sourceType, channelId, uid);
        var jsonParams = {
            sourceType: sourceType,
            channelId: channelId,
            uid: uid,
            toJSON: function () {
                return {
                    sourceType: sourceType,
                    channelId: channelId,
                    uid: uid,
                };
            },
        };
        IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
    };
    IRtcEngineImpl.prototype.getApiTypeFromDestroyRendererByConfig = function (sourceType, channelId, uid) {
        if (uid === void 0) { uid = 0; }
        return 'RtcEngine_destroyRendererByConfig';
    };
    IRtcEngineImpl.prototype.unregisterAudioEncodedFrameObserver = function (observer) {
        var apiType = this.getApiTypeFromUnregisterAudioEncodedFrameObserver(observer);
        var jsonParams = {
            observer: observer,
            toJSON: function () {
                return {};
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromUnregisterAudioEncodedFrameObserver = function (observer) {
        return 'RtcEngine_unregisterAudioEncodedFrameObserver';
    };
    IRtcEngineImpl.prototype.getNativeHandle = function () {
        var apiType = this.getApiTypeFromGetNativeHandle();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineImpl.prototype.getApiTypeFromGetNativeHandle = function () {
        return 'RtcEngine_getNativeHandle';
    };
    return IRtcEngineImpl;
}());
exports.IRtcEngineImpl = IRtcEngineImpl;
var IrisApiEngine_1 = require("../internal/IrisApiEngine");
