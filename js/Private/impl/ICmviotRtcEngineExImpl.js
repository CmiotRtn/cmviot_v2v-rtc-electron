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
exports.IRtcEngineExImpl = void 0;
var ICmviotRtcEngineImpl_1 = require("./ICmviotRtcEngineImpl");
// @ts-ignore
var IRtcEngineExImpl = /** @class */ (function (_super) {
    __extends(IRtcEngineExImpl, _super);
    function IRtcEngineExImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IRtcEngineExImpl.prototype.joinChannelEx = function (token, connection, options) {
        var apiType = this.getApiTypeFromJoinChannelEx(token, connection, options);
        var jsonParams = {
            token: token,
            connection: connection,
            options: options,
            toJSON: function () {
                return {
                    token: token,
                    connection: connection,
                    options: options,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineExImpl.prototype.getApiTypeFromJoinChannelEx = function (token, connection, options) {
        return 'RtcEngineEx_joinChannelEx';
    };
    IRtcEngineExImpl.prototype.leaveChannelEx = function (connection, options) {
        var apiType = this.getApiTypeFromLeaveChannelEx(connection, options);
        var jsonParams = {
            connection: connection,
            options: options,
            toJSON: function () {
                return {
                    connection: connection,
                    options: options,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineExImpl.prototype.getApiTypeFromLeaveChannelEx = function (connection, options) {
        return 'RtcEngineEx_leaveChannelEx';
    };
    IRtcEngineExImpl.prototype.updateChannelMediaOptionsEx = function (options, connection) {
        var apiType = this.getApiTypeFromUpdateChannelMediaOptionsEx(options, connection);
        var jsonParams = {
            options: options,
            connection: connection,
            toJSON: function () {
                return {
                    options: options,
                    connection: connection,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineExImpl.prototype.getApiTypeFromUpdateChannelMediaOptionsEx = function (options, connection) {
        return 'RtcEngineEx_updateChannelMediaOptionsEx';
    };
    IRtcEngineExImpl.prototype.setVideoEncoderConfigurationEx = function (config, connection) {
        var apiType = this.getApiTypeFromSetVideoEncoderConfigurationEx(config, connection);
        var jsonParams = {
            config: config,
            connection: connection,
            toJSON: function () {
                return {
                    config: config,
                    connection: connection,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineExImpl.prototype.getApiTypeFromSetVideoEncoderConfigurationEx = function (config, connection) {
        return 'RtcEngineEx_setVideoEncoderConfigurationEx';
    };
    IRtcEngineExImpl.prototype.setupRemoteVideoEx = function (canvas, connection) {
        var apiType = this.getApiTypeFromSetupRemoteVideoEx(canvas, connection);
        var jsonParams = {
            canvas: canvas,
            connection: connection,
            toJSON: function () {
                return {
                    canvas: canvas,
                    connection: connection,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineExImpl.prototype.getApiTypeFromSetupRemoteVideoEx = function (canvas, connection) {
        return 'RtcEngineEx_setupRemoteVideoEx';
    };
    IRtcEngineExImpl.prototype.muteRemoteAudioStreamEx = function (uid, mute, connection) {
        var apiType = this.getApiTypeFromMuteRemoteAudioStreamEx(uid, mute, connection);
        var jsonParams = {
            uid: uid,
            mute: mute,
            connection: connection,
            toJSON: function () {
                return {
                    uid: uid,
                    mute: mute,
                    connection: connection,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineExImpl.prototype.getApiTypeFromMuteRemoteAudioStreamEx = function (uid, mute, connection) {
        return 'RtcEngineEx_muteRemoteAudioStreamEx';
    };
    IRtcEngineExImpl.prototype.muteRemoteVideoStreamEx = function (uid, mute, connection) {
        var apiType = this.getApiTypeFromMuteRemoteVideoStreamEx(uid, mute, connection);
        var jsonParams = {
            uid: uid,
            mute: mute,
            connection: connection,
            toJSON: function () {
                return {
                    uid: uid,
                    mute: mute,
                    connection: connection,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineExImpl.prototype.getApiTypeFromMuteRemoteVideoStreamEx = function (uid, mute, connection) {
        return 'RtcEngineEx_muteRemoteVideoStreamEx';
    };
    IRtcEngineExImpl.prototype.setRemoteVideoStreamTypeEx = function (uid, streamType, connection) {
        var apiType = this.getApiTypeFromSetRemoteVideoStreamTypeEx(uid, streamType, connection);
        var jsonParams = {
            uid: uid,
            streamType: streamType,
            connection: connection,
            toJSON: function () {
                return {
                    uid: uid,
                    streamType: streamType,
                    connection: connection,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineExImpl.prototype.getApiTypeFromSetRemoteVideoStreamTypeEx = function (uid, streamType, connection) {
        return 'RtcEngineEx_setRemoteVideoStreamTypeEx';
    };
    IRtcEngineExImpl.prototype.muteLocalAudioStreamEx = function (mute, connection) {
        var apiType = this.getApiTypeFromMuteLocalAudioStreamEx(mute, connection);
        var jsonParams = {
            mute: mute,
            connection: connection,
            toJSON: function () {
                return {
                    mute: mute,
                    connection: connection,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineExImpl.prototype.getApiTypeFromMuteLocalAudioStreamEx = function (mute, connection) {
        return 'RtcEngineEx_muteLocalAudioStreamEx';
    };
    IRtcEngineExImpl.prototype.muteLocalVideoStreamEx = function (mute, connection) {
        var apiType = this.getApiTypeFromMuteLocalVideoStreamEx(mute, connection);
        var jsonParams = {
            mute: mute,
            connection: connection,
            toJSON: function () {
                return {
                    mute: mute,
                    connection: connection,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineExImpl.prototype.getApiTypeFromMuteLocalVideoStreamEx = function (mute, connection) {
        return 'RtcEngineEx_muteLocalVideoStreamEx';
    };
    IRtcEngineExImpl.prototype.muteAllRemoteAudioStreamsEx = function (mute, connection) {
        var apiType = this.getApiTypeFromMuteAllRemoteAudioStreamsEx(mute, connection);
        var jsonParams = {
            mute: mute,
            connection: connection,
            toJSON: function () {
                return {
                    mute: mute,
                    connection: connection,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineExImpl.prototype.getApiTypeFromMuteAllRemoteAudioStreamsEx = function (mute, connection) {
        return 'RtcEngineEx_muteAllRemoteAudioStreamsEx';
    };
    IRtcEngineExImpl.prototype.muteAllRemoteVideoStreamsEx = function (mute, connection) {
        var apiType = this.getApiTypeFromMuteAllRemoteVideoStreamsEx(mute, connection);
        var jsonParams = {
            mute: mute,
            connection: connection,
            toJSON: function () {
                return {
                    mute: mute,
                    connection: connection,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineExImpl.prototype.getApiTypeFromMuteAllRemoteVideoStreamsEx = function (mute, connection) {
        return 'RtcEngineEx_muteAllRemoteVideoStreamsEx';
    };
    IRtcEngineExImpl.prototype.setSubscribeAudioBlocklistEx = function (uidList, uidNumber, connection) {
        var apiType = this.getApiTypeFromSetSubscribeAudioBlocklistEx(uidList, uidNumber, connection);
        var jsonParams = {
            uidList: uidList,
            uidNumber: uidNumber,
            connection: connection,
            toJSON: function () {
                return {
                    uidList: uidList,
                    uidNumber: uidNumber,
                    connection: connection,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineExImpl.prototype.getApiTypeFromSetSubscribeAudioBlocklistEx = function (uidList, uidNumber, connection) {
        return 'RtcEngineEx_setSubscribeAudioBlocklistEx';
    };
    IRtcEngineExImpl.prototype.setSubscribeAudioAllowlistEx = function (uidList, uidNumber, connection) {
        var apiType = this.getApiTypeFromSetSubscribeAudioAllowlistEx(uidList, uidNumber, connection);
        var jsonParams = {
            uidList: uidList,
            uidNumber: uidNumber,
            connection: connection,
            toJSON: function () {
                return {
                    uidList: uidList,
                    uidNumber: uidNumber,
                    connection: connection,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineExImpl.prototype.getApiTypeFromSetSubscribeAudioAllowlistEx = function (uidList, uidNumber, connection) {
        return 'RtcEngineEx_setSubscribeAudioAllowlistEx';
    };
    IRtcEngineExImpl.prototype.setSubscribeVideoBlocklistEx = function (uidList, uidNumber, connection) {
        var apiType = this.getApiTypeFromSetSubscribeVideoBlocklistEx(uidList, uidNumber, connection);
        var jsonParams = {
            uidList: uidList,
            uidNumber: uidNumber,
            connection: connection,
            toJSON: function () {
                return {
                    uidList: uidList,
                    uidNumber: uidNumber,
                    connection: connection,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineExImpl.prototype.getApiTypeFromSetSubscribeVideoBlocklistEx = function (uidList, uidNumber, connection) {
        return 'RtcEngineEx_setSubscribeVideoBlocklistEx';
    };
    IRtcEngineExImpl.prototype.setSubscribeVideoAllowlistEx = function (uidList, uidNumber, connection) {
        var apiType = this.getApiTypeFromSetSubscribeVideoAllowlistEx(uidList, uidNumber, connection);
        var jsonParams = {
            uidList: uidList,
            uidNumber: uidNumber,
            connection: connection,
            toJSON: function () {
                return {
                    uidList: uidList,
                    uidNumber: uidNumber,
                    connection: connection,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineExImpl.prototype.getApiTypeFromSetSubscribeVideoAllowlistEx = function (uidList, uidNumber, connection) {
        return 'RtcEngineEx_setSubscribeVideoAllowlistEx';
    };
    IRtcEngineExImpl.prototype.setRemoteVideoSubscriptionOptionsEx = function (uid, options, connection) {
        var apiType = this.getApiTypeFromSetRemoteVideoSubscriptionOptionsEx(uid, options, connection);
        var jsonParams = {
            uid: uid,
            options: options,
            connection: connection,
            toJSON: function () {
                return {
                    uid: uid,
                    options: options,
                    connection: connection,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineExImpl.prototype.getApiTypeFromSetRemoteVideoSubscriptionOptionsEx = function (uid, options, connection) {
        return 'RtcEngineEx_setRemoteVideoSubscriptionOptionsEx';
    };
    IRtcEngineExImpl.prototype.setRemoteVoicePositionEx = function (uid, pan, gain, connection) {
        var apiType = this.getApiTypeFromSetRemoteVoicePositionEx(uid, pan, gain, connection);
        var jsonParams = {
            uid: uid,
            pan: pan,
            gain: gain,
            connection: connection,
            toJSON: function () {
                return {
                    uid: uid,
                    pan: pan,
                    gain: gain,
                    connection: connection,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineExImpl.prototype.getApiTypeFromSetRemoteVoicePositionEx = function (uid, pan, gain, connection) {
        return 'RtcEngineEx_setRemoteVoicePositionEx';
    };
    IRtcEngineExImpl.prototype.setRemoteUserSpatialAudioParamsEx = function (uid, params, connection) {
        var apiType = this.getApiTypeFromSetRemoteUserSpatialAudioParamsEx(uid, params, connection);
        var jsonParams = {
            uid: uid,
            params: params,
            connection: connection,
            toJSON: function () {
                return {
                    uid: uid,
                    params: params,
                    connection: connection,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineExImpl.prototype.getApiTypeFromSetRemoteUserSpatialAudioParamsEx = function (uid, params, connection) {
        return 'RtcEngineEx_setRemoteUserSpatialAudioParamsEx';
    };
    IRtcEngineExImpl.prototype.setRemoteRenderModeEx = function (uid, renderMode, mirrorMode, connection) {
        var apiType = this.getApiTypeFromSetRemoteRenderModeEx(uid, renderMode, mirrorMode, connection);
        var jsonParams = {
            uid: uid,
            renderMode: renderMode,
            mirrorMode: mirrorMode,
            connection: connection,
            toJSON: function () {
                return {
                    uid: uid,
                    renderMode: renderMode,
                    mirrorMode: mirrorMode,
                    connection: connection,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineExImpl.prototype.getApiTypeFromSetRemoteRenderModeEx = function (uid, renderMode, mirrorMode, connection) {
        return 'RtcEngineEx_setRemoteRenderModeEx';
    };
    IRtcEngineExImpl.prototype.enableLoopbackRecordingEx = function (connection, enabled, deviceName) {
        var apiType = this.getApiTypeFromEnableLoopbackRecordingEx(connection, enabled, deviceName);
        var jsonParams = {
            connection: connection,
            enabled: enabled,
            deviceName: deviceName,
            toJSON: function () {
                return {
                    connection: connection,
                    enabled: enabled,
                    deviceName: deviceName,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineExImpl.prototype.getApiTypeFromEnableLoopbackRecordingEx = function (connection, enabled, deviceName) {
        return 'RtcEngineEx_enableLoopbackRecordingEx';
    };
    IRtcEngineExImpl.prototype.adjustRecordingSignalVolumeEx = function (volume, connection) {
        var apiType = this.getApiTypeFromAdjustRecordingSignalVolumeEx(volume, connection);
        var jsonParams = {
            volume: volume,
            connection: connection,
            toJSON: function () {
                return {
                    volume: volume,
                    connection: connection,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineExImpl.prototype.getApiTypeFromAdjustRecordingSignalVolumeEx = function (volume, connection) {
        return 'RtcEngineEx_adjustRecordingSignalVolumeEx';
    };
    IRtcEngineExImpl.prototype.muteRecordingSignalEx = function (mute, connection) {
        var apiType = this.getApiTypeFromMuteRecordingSignalEx(mute, connection);
        var jsonParams = {
            mute: mute,
            connection: connection,
            toJSON: function () {
                return {
                    mute: mute,
                    connection: connection,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineExImpl.prototype.getApiTypeFromMuteRecordingSignalEx = function (mute, connection) {
        return 'RtcEngineEx_muteRecordingSignalEx';
    };
    IRtcEngineExImpl.prototype.adjustUserPlaybackSignalVolumeEx = function (uid, volume, connection) {
        var apiType = this.getApiTypeFromAdjustUserPlaybackSignalVolumeEx(uid, volume, connection);
        var jsonParams = {
            uid: uid,
            volume: volume,
            connection: connection,
            toJSON: function () {
                return {
                    uid: uid,
                    volume: volume,
                    connection: connection,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineExImpl.prototype.getApiTypeFromAdjustUserPlaybackSignalVolumeEx = function (uid, volume, connection) {
        return 'RtcEngineEx_adjustUserPlaybackSignalVolumeEx';
    };
    IRtcEngineExImpl.prototype.getConnectionStateEx = function (connection) {
        var apiType = this.getApiTypeFromGetConnectionStateEx(connection);
        var jsonParams = {
            connection: connection,
            toJSON: function () {
                return {
                    connection: connection,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineExImpl.prototype.getApiTypeFromGetConnectionStateEx = function (connection) {
        return 'RtcEngineEx_getConnectionStateEx';
    };
    IRtcEngineExImpl.prototype.enableEncryptionEx = function (connection, enabled, config) {
        var apiType = this.getApiTypeFromEnableEncryptionEx(connection, enabled, config);
        var jsonParams = {
            connection: connection,
            enabled: enabled,
            config: config,
            toJSON: function () {
                return {
                    connection: connection,
                    enabled: enabled,
                    config: config,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineExImpl.prototype.getApiTypeFromEnableEncryptionEx = function (connection, enabled, config) {
        return 'RtcEngineEx_enableEncryptionEx';
    };
    IRtcEngineExImpl.prototype.createDataStreamEx = function (config, connection) {
        var apiType = this.getApiTypeFromCreateDataStreamEx(config, connection);
        var jsonParams = {
            config: config,
            connection: connection,
            toJSON: function () {
                return {
                    config: config,
                    connection: connection,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        var streamId = jsonResults.streamId;
        return streamId;
    };
    IRtcEngineExImpl.prototype.getApiTypeFromCreateDataStreamEx = function (config, connection) {
        return 'RtcEngineEx_createDataStreamEx';
    };
    IRtcEngineExImpl.prototype.sendStreamMessageEx = function (streamId, data, length, connection) {
        var apiType = this.getApiTypeFromSendStreamMessageEx(streamId, data, length, connection);
        var jsonParams = {
            streamId: streamId,
            data: data,
            length: length,
            connection: connection,
            toJSON: function () {
                return {
                    streamId: streamId,
                    length: length,
                    connection: connection,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineExImpl.prototype.getApiTypeFromSendStreamMessageEx = function (streamId, data, length, connection) {
        return 'RtcEngineEx_sendStreamMessageEx';
    };
    IRtcEngineExImpl.prototype.addVideoWatermarkEx = function (watermarkUrl, options, connection) {
        var apiType = this.getApiTypeFromAddVideoWatermarkEx(watermarkUrl, options, connection);
        var jsonParams = {
            watermarkUrl: watermarkUrl,
            options: options,
            connection: connection,
            toJSON: function () {
                return {
                    watermarkUrl: watermarkUrl,
                    options: options,
                    connection: connection,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineExImpl.prototype.getApiTypeFromAddVideoWatermarkEx = function (watermarkUrl, options, connection) {
        return 'RtcEngineEx_addVideoWatermarkEx';
    };
    IRtcEngineExImpl.prototype.clearVideoWatermarkEx = function (connection) {
        var apiType = this.getApiTypeFromClearVideoWatermarkEx(connection);
        var jsonParams = {
            connection: connection,
            toJSON: function () {
                return {
                    connection: connection,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineExImpl.prototype.getApiTypeFromClearVideoWatermarkEx = function (connection) {
        return 'RtcEngineEx_clearVideoWatermarkEx';
    };
    IRtcEngineExImpl.prototype.sendCustomReportMessageEx = function (id, category, event, label, value, connection) {
        var apiType = this.getApiTypeFromSendCustomReportMessageEx(id, category, event, label, value, connection);
        var jsonParams = {
            id: id,
            category: category,
            event: event,
            label: label,
            value: value,
            connection: connection,
            toJSON: function () {
                return {
                    id: id,
                    category: category,
                    event: event,
                    label: label,
                    value: value,
                    connection: connection,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineExImpl.prototype.getApiTypeFromSendCustomReportMessageEx = function (id, category, event, label, value, connection) {
        return 'RtcEngineEx_sendCustomReportMessageEx';
    };
    IRtcEngineExImpl.prototype.enableAudioVolumeIndicationEx = function (interval, smooth, reportVad, connection) {
        var apiType = this.getApiTypeFromEnableAudioVolumeIndicationEx(interval, smooth, reportVad, connection);
        var jsonParams = {
            interval: interval,
            smooth: smooth,
            reportVad: reportVad,
            connection: connection,
            toJSON: function () {
                return {
                    interval: interval,
                    smooth: smooth,
                    reportVad: reportVad,
                    connection: connection,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineExImpl.prototype.getApiTypeFromEnableAudioVolumeIndicationEx = function (interval, smooth, reportVad, connection) {
        return 'RtcEngineEx_enableAudioVolumeIndicationEx';
    };
    IRtcEngineExImpl.prototype.startRtmpStreamWithoutTranscodingEx = function (url, connection) {
        var apiType = this.getApiTypeFromStartRtmpStreamWithoutTranscodingEx(url, connection);
        var jsonParams = {
            url: url,
            connection: connection,
            toJSON: function () {
                return {
                    url: url,
                    connection: connection,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineExImpl.prototype.getApiTypeFromStartRtmpStreamWithoutTranscodingEx = function (url, connection) {
        return 'RtcEngineEx_startRtmpStreamWithoutTranscodingEx';
    };
    IRtcEngineExImpl.prototype.startRtmpStreamWithTranscodingEx = function (url, transcoding, connection) {
        var apiType = this.getApiTypeFromStartRtmpStreamWithTranscodingEx(url, transcoding, connection);
        var jsonParams = {
            url: url,
            transcoding: transcoding,
            connection: connection,
            toJSON: function () {
                return {
                    url: url,
                    transcoding: transcoding,
                    connection: connection,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineExImpl.prototype.getApiTypeFromStartRtmpStreamWithTranscodingEx = function (url, transcoding, connection) {
        return 'RtcEngineEx_startRtmpStreamWithTranscodingEx';
    };
    IRtcEngineExImpl.prototype.updateRtmpTranscodingEx = function (transcoding, connection) {
        var apiType = this.getApiTypeFromUpdateRtmpTranscodingEx(transcoding, connection);
        var jsonParams = {
            transcoding: transcoding,
            connection: connection,
            toJSON: function () {
                return {
                    transcoding: transcoding,
                    connection: connection,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineExImpl.prototype.getApiTypeFromUpdateRtmpTranscodingEx = function (transcoding, connection) {
        return 'RtcEngineEx_updateRtmpTranscodingEx';
    };
    IRtcEngineExImpl.prototype.stopRtmpStreamEx = function (url, connection) {
        var apiType = this.getApiTypeFromStopRtmpStreamEx(url, connection);
        var jsonParams = {
            url: url,
            connection: connection,
            toJSON: function () {
                return {
                    url: url,
                    connection: connection,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineExImpl.prototype.getApiTypeFromStopRtmpStreamEx = function (url, connection) {
        return 'RtcEngineEx_stopRtmpStreamEx';
    };
    IRtcEngineExImpl.prototype.startOrUpdateChannelMediaRelayEx = function (configuration, connection) {
        var apiType = this.getApiTypeFromStartOrUpdateChannelMediaRelayEx(configuration, connection);
        var jsonParams = {
            configuration: configuration,
            connection: connection,
            toJSON: function () {
                return {
                    configuration: configuration,
                    connection: connection,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineExImpl.prototype.getApiTypeFromStartOrUpdateChannelMediaRelayEx = function (configuration, connection) {
        return 'RtcEngineEx_startOrUpdateChannelMediaRelayEx';
    };
    IRtcEngineExImpl.prototype.startChannelMediaRelayEx = function (configuration, connection) {
        var apiType = this.getApiTypeFromStartChannelMediaRelayEx(configuration, connection);
        var jsonParams = {
            configuration: configuration,
            connection: connection,
            toJSON: function () {
                return {
                    configuration: configuration,
                    connection: connection,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineExImpl.prototype.getApiTypeFromStartChannelMediaRelayEx = function (configuration, connection) {
        return 'RtcEngineEx_startChannelMediaRelayEx';
    };
    IRtcEngineExImpl.prototype.updateChannelMediaRelayEx = function (configuration, connection) {
        var apiType = this.getApiTypeFromUpdateChannelMediaRelayEx(configuration, connection);
        var jsonParams = {
            configuration: configuration,
            connection: connection,
            toJSON: function () {
                return {
                    configuration: configuration,
                    connection: connection,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineExImpl.prototype.getApiTypeFromUpdateChannelMediaRelayEx = function (configuration, connection) {
        return 'RtcEngineEx_updateChannelMediaRelayEx';
    };
    IRtcEngineExImpl.prototype.stopChannelMediaRelayEx = function (connection) {
        var apiType = this.getApiTypeFromStopChannelMediaRelayEx(connection);
        var jsonParams = {
            connection: connection,
            toJSON: function () {
                return {
                    connection: connection,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineExImpl.prototype.getApiTypeFromStopChannelMediaRelayEx = function (connection) {
        return 'RtcEngineEx_stopChannelMediaRelayEx';
    };
    IRtcEngineExImpl.prototype.pauseAllChannelMediaRelayEx = function (connection) {
        var apiType = this.getApiTypeFromPauseAllChannelMediaRelayEx(connection);
        var jsonParams = {
            connection: connection,
            toJSON: function () {
                return {
                    connection: connection,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineExImpl.prototype.getApiTypeFromPauseAllChannelMediaRelayEx = function (connection) {
        return 'RtcEngineEx_pauseAllChannelMediaRelayEx';
    };
    IRtcEngineExImpl.prototype.resumeAllChannelMediaRelayEx = function (connection) {
        var apiType = this.getApiTypeFromResumeAllChannelMediaRelayEx(connection);
        var jsonParams = {
            connection: connection,
            toJSON: function () {
                return {
                    connection: connection,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineExImpl.prototype.getApiTypeFromResumeAllChannelMediaRelayEx = function (connection) {
        return 'RtcEngineEx_resumeAllChannelMediaRelayEx';
    };
    IRtcEngineExImpl.prototype.getUserInfoByUserAccountEx = function (userAccount, connection) {
        var apiType = this.getApiTypeFromGetUserInfoByUserAccountEx(userAccount, connection);
        var jsonParams = {
            userAccount: userAccount,
            connection: connection,
            toJSON: function () {
                return {
                    userAccount: userAccount,
                    connection: connection,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        var userInfo = jsonResults.userInfo;
        return userInfo;
    };
    IRtcEngineExImpl.prototype.getApiTypeFromGetUserInfoByUserAccountEx = function (userAccount, connection) {
        return 'RtcEngineEx_getUserInfoByUserAccountEx';
    };
    IRtcEngineExImpl.prototype.getUserInfoByUidEx = function (uid, connection) {
        var apiType = this.getApiTypeFromGetUserInfoByUidEx(uid, connection);
        var jsonParams = {
            uid: uid,
            connection: connection,
            toJSON: function () {
                return {
                    uid: uid,
                    connection: connection,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        var userInfo = jsonResults.userInfo;
        return userInfo;
    };
    IRtcEngineExImpl.prototype.getApiTypeFromGetUserInfoByUidEx = function (uid, connection) {
        return 'RtcEngineEx_getUserInfoByUidEx';
    };
    IRtcEngineExImpl.prototype.enableDualStreamModeEx = function (enabled, streamConfig, connection) {
        var apiType = this.getApiTypeFromEnableDualStreamModeEx(enabled, streamConfig, connection);
        var jsonParams = {
            enabled: enabled,
            streamConfig: streamConfig,
            connection: connection,
            toJSON: function () {
                return {
                    enabled: enabled,
                    streamConfig: streamConfig,
                    connection: connection,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineExImpl.prototype.getApiTypeFromEnableDualStreamModeEx = function (enabled, streamConfig, connection) {
        return 'RtcEngineEx_enableDualStreamModeEx';
    };
    IRtcEngineExImpl.prototype.setDualStreamModeEx = function (mode, streamConfig, connection) {
        var apiType = this.getApiTypeFromSetDualStreamModeEx(mode, streamConfig, connection);
        var jsonParams = {
            mode: mode,
            streamConfig: streamConfig,
            connection: connection,
            toJSON: function () {
                return {
                    mode: mode,
                    streamConfig: streamConfig,
                    connection: connection,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineExImpl.prototype.getApiTypeFromSetDualStreamModeEx = function (mode, streamConfig, connection) {
        return 'RtcEngineEx_setDualStreamModeEx';
    };
    IRtcEngineExImpl.prototype.setHighPriorityUserListEx = function (uidList, uidNum, option, connection) {
        var apiType = this.getApiTypeFromSetHighPriorityUserListEx(uidList, uidNum, option, connection);
        var jsonParams = {
            uidList: uidList,
            uidNum: uidNum,
            option: option,
            connection: connection,
            toJSON: function () {
                return {
                    uidList: uidList,
                    uidNum: uidNum,
                    option: option,
                    connection: connection,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineExImpl.prototype.getApiTypeFromSetHighPriorityUserListEx = function (uidList, uidNum, option, connection) {
        return 'RtcEngineEx_setHighPriorityUserListEx';
    };
    IRtcEngineExImpl.prototype.takeSnapshotEx = function (connection, uid, filePath) {
        var apiType = this.getApiTypeFromTakeSnapshotEx(connection, uid, filePath);
        var jsonParams = {
            connection: connection,
            uid: uid,
            filePath: filePath,
            toJSON: function () {
                return {
                    connection: connection,
                    uid: uid,
                    filePath: filePath,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineExImpl.prototype.getApiTypeFromTakeSnapshotEx = function (connection, uid, filePath) {
        return 'RtcEngineEx_takeSnapshotEx';
    };
    IRtcEngineExImpl.prototype.startMediaRenderingTracingEx = function (connection) {
        var apiType = this.getApiTypeFromStartMediaRenderingTracingEx(connection);
        var jsonParams = {
            connection: connection,
            toJSON: function () {
                return {
                    connection: connection,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IRtcEngineExImpl.prototype.getApiTypeFromStartMediaRenderingTracingEx = function (connection) {
        return 'RtcEngineEx_startMediaRenderingTracingEx';
    };
    return IRtcEngineExImpl;
}(ICmviotRtcEngineImpl_1.IRtcEngineImpl));
exports.IRtcEngineExImpl = IRtcEngineExImpl;
var IrisApiEngine_1 = require("../internal/IrisApiEngine");
