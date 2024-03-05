"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IAudioDeviceManagerImpl = void 0;
// @ts-ignore
var IAudioDeviceManagerImpl = /** @class */ (function () {
    function IAudioDeviceManagerImpl() {
    }
    IAudioDeviceManagerImpl.prototype.enumeratePlaybackDevices = function () {
        var apiType = this.getApiTypeFromEnumeratePlaybackDevices();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IAudioDeviceManagerImpl.prototype.getApiTypeFromEnumeratePlaybackDevices = function () {
        return 'AudioDeviceManager_enumeratePlaybackDevices';
    };
    IAudioDeviceManagerImpl.prototype.enumerateRecordingDevices = function () {
        var apiType = this.getApiTypeFromEnumerateRecordingDevices();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IAudioDeviceManagerImpl.prototype.getApiTypeFromEnumerateRecordingDevices = function () {
        return 'AudioDeviceManager_enumerateRecordingDevices';
    };
    IAudioDeviceManagerImpl.prototype.setPlaybackDevice = function (deviceId) {
        var apiType = this.getApiTypeFromSetPlaybackDevice(deviceId);
        var jsonParams = {
            deviceId: deviceId,
            toJSON: function () {
                return {
                    deviceId: deviceId,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IAudioDeviceManagerImpl.prototype.getApiTypeFromSetPlaybackDevice = function (deviceId) {
        return 'AudioDeviceManager_setPlaybackDevice';
    };
    IAudioDeviceManagerImpl.prototype.getPlaybackDevice = function () {
        var apiType = this.getApiTypeFromGetPlaybackDevice();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        var deviceId = jsonResults.deviceId;
        return deviceId;
    };
    IAudioDeviceManagerImpl.prototype.getApiTypeFromGetPlaybackDevice = function () {
        return 'AudioDeviceManager_getPlaybackDevice';
    };
    IAudioDeviceManagerImpl.prototype.getPlaybackDeviceInfo = function () {
        var apiType = this.getApiTypeFromGetPlaybackDeviceInfo();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IAudioDeviceManagerImpl.prototype.getApiTypeFromGetPlaybackDeviceInfo = function () {
        return 'AudioDeviceManager_getPlaybackDeviceInfo';
    };
    IAudioDeviceManagerImpl.prototype.setPlaybackDeviceVolume = function (volume) {
        var apiType = this.getApiTypeFromSetPlaybackDeviceVolume(volume);
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
    IAudioDeviceManagerImpl.prototype.getApiTypeFromSetPlaybackDeviceVolume = function (volume) {
        return 'AudioDeviceManager_setPlaybackDeviceVolume';
    };
    IAudioDeviceManagerImpl.prototype.getPlaybackDeviceVolume = function () {
        var apiType = this.getApiTypeFromGetPlaybackDeviceVolume();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        var volume = jsonResults.volume;
        return volume;
    };
    IAudioDeviceManagerImpl.prototype.getApiTypeFromGetPlaybackDeviceVolume = function () {
        return 'AudioDeviceManager_getPlaybackDeviceVolume';
    };
    IAudioDeviceManagerImpl.prototype.setRecordingDevice = function (deviceId) {
        var apiType = this.getApiTypeFromSetRecordingDevice(deviceId);
        var jsonParams = {
            deviceId: deviceId,
            toJSON: function () {
                return {
                    deviceId: deviceId,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IAudioDeviceManagerImpl.prototype.getApiTypeFromSetRecordingDevice = function (deviceId) {
        return 'AudioDeviceManager_setRecordingDevice';
    };
    IAudioDeviceManagerImpl.prototype.getRecordingDevice = function () {
        var apiType = this.getApiTypeFromGetRecordingDevice();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        var deviceId = jsonResults.deviceId;
        return deviceId;
    };
    IAudioDeviceManagerImpl.prototype.getApiTypeFromGetRecordingDevice = function () {
        return 'AudioDeviceManager_getRecordingDevice';
    };
    IAudioDeviceManagerImpl.prototype.getRecordingDeviceInfo = function () {
        var apiType = this.getApiTypeFromGetRecordingDeviceInfo();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IAudioDeviceManagerImpl.prototype.getApiTypeFromGetRecordingDeviceInfo = function () {
        return 'AudioDeviceManager_getRecordingDeviceInfo';
    };
    IAudioDeviceManagerImpl.prototype.setRecordingDeviceVolume = function (volume) {
        var apiType = this.getApiTypeFromSetRecordingDeviceVolume(volume);
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
    IAudioDeviceManagerImpl.prototype.getApiTypeFromSetRecordingDeviceVolume = function (volume) {
        return 'AudioDeviceManager_setRecordingDeviceVolume';
    };
    IAudioDeviceManagerImpl.prototype.getRecordingDeviceVolume = function () {
        var apiType = this.getApiTypeFromGetRecordingDeviceVolume();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        var volume = jsonResults.volume;
        return volume;
    };
    IAudioDeviceManagerImpl.prototype.getApiTypeFromGetRecordingDeviceVolume = function () {
        return 'AudioDeviceManager_getRecordingDeviceVolume';
    };
    IAudioDeviceManagerImpl.prototype.setLoopbackDevice = function (deviceId) {
        var apiType = this.getApiTypeFromSetLoopbackDevice(deviceId);
        var jsonParams = {
            deviceId: deviceId,
            toJSON: function () {
                return {
                    deviceId: deviceId,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IAudioDeviceManagerImpl.prototype.getApiTypeFromSetLoopbackDevice = function (deviceId) {
        return 'AudioDeviceManager_setLoopbackDevice';
    };
    IAudioDeviceManagerImpl.prototype.getLoopbackDevice = function () {
        var apiType = this.getApiTypeFromGetLoopbackDevice();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        var deviceId = jsonResults.deviceId;
        return deviceId;
    };
    IAudioDeviceManagerImpl.prototype.getApiTypeFromGetLoopbackDevice = function () {
        return 'AudioDeviceManager_getLoopbackDevice';
    };
    IAudioDeviceManagerImpl.prototype.setPlaybackDeviceMute = function (mute) {
        var apiType = this.getApiTypeFromSetPlaybackDeviceMute(mute);
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
    IAudioDeviceManagerImpl.prototype.getApiTypeFromSetPlaybackDeviceMute = function (mute) {
        return 'AudioDeviceManager_setPlaybackDeviceMute';
    };
    IAudioDeviceManagerImpl.prototype.getPlaybackDeviceMute = function () {
        var apiType = this.getApiTypeFromGetPlaybackDeviceMute();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        var mute = jsonResults.mute;
        return mute;
    };
    IAudioDeviceManagerImpl.prototype.getApiTypeFromGetPlaybackDeviceMute = function () {
        return 'AudioDeviceManager_getPlaybackDeviceMute';
    };
    IAudioDeviceManagerImpl.prototype.setRecordingDeviceMute = function (mute) {
        var apiType = this.getApiTypeFromSetRecordingDeviceMute(mute);
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
    IAudioDeviceManagerImpl.prototype.getApiTypeFromSetRecordingDeviceMute = function (mute) {
        return 'AudioDeviceManager_setRecordingDeviceMute';
    };
    IAudioDeviceManagerImpl.prototype.getRecordingDeviceMute = function () {
        var apiType = this.getApiTypeFromGetRecordingDeviceMute();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        var mute = jsonResults.mute;
        return mute;
    };
    IAudioDeviceManagerImpl.prototype.getApiTypeFromGetRecordingDeviceMute = function () {
        return 'AudioDeviceManager_getRecordingDeviceMute';
    };
    IAudioDeviceManagerImpl.prototype.startPlaybackDeviceTest = function (testAudioFilePath) {
        var apiType = this.getApiTypeFromStartPlaybackDeviceTest(testAudioFilePath);
        var jsonParams = {
            testAudioFilePath: testAudioFilePath,
            toJSON: function () {
                return {
                    testAudioFilePath: testAudioFilePath,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IAudioDeviceManagerImpl.prototype.getApiTypeFromStartPlaybackDeviceTest = function (testAudioFilePath) {
        return 'AudioDeviceManager_startPlaybackDeviceTest';
    };
    IAudioDeviceManagerImpl.prototype.stopPlaybackDeviceTest = function () {
        var apiType = this.getApiTypeFromStopPlaybackDeviceTest();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IAudioDeviceManagerImpl.prototype.getApiTypeFromStopPlaybackDeviceTest = function () {
        return 'AudioDeviceManager_stopPlaybackDeviceTest';
    };
    IAudioDeviceManagerImpl.prototype.startRecordingDeviceTest = function (indicationInterval) {
        var apiType = this.getApiTypeFromStartRecordingDeviceTest(indicationInterval);
        var jsonParams = {
            indicationInterval: indicationInterval,
            toJSON: function () {
                return {
                    indicationInterval: indicationInterval,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IAudioDeviceManagerImpl.prototype.getApiTypeFromStartRecordingDeviceTest = function (indicationInterval) {
        return 'AudioDeviceManager_startRecordingDeviceTest';
    };
    IAudioDeviceManagerImpl.prototype.stopRecordingDeviceTest = function () {
        var apiType = this.getApiTypeFromStopRecordingDeviceTest();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IAudioDeviceManagerImpl.prototype.getApiTypeFromStopRecordingDeviceTest = function () {
        return 'AudioDeviceManager_stopRecordingDeviceTest';
    };
    IAudioDeviceManagerImpl.prototype.startAudioDeviceLoopbackTest = function (indicationInterval) {
        var apiType = this.getApiTypeFromStartAudioDeviceLoopbackTest(indicationInterval);
        var jsonParams = {
            indicationInterval: indicationInterval,
            toJSON: function () {
                return {
                    indicationInterval: indicationInterval,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IAudioDeviceManagerImpl.prototype.getApiTypeFromStartAudioDeviceLoopbackTest = function (indicationInterval) {
        return 'AudioDeviceManager_startAudioDeviceLoopbackTest';
    };
    IAudioDeviceManagerImpl.prototype.stopAudioDeviceLoopbackTest = function () {
        var apiType = this.getApiTypeFromStopAudioDeviceLoopbackTest();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IAudioDeviceManagerImpl.prototype.getApiTypeFromStopAudioDeviceLoopbackTest = function () {
        return 'AudioDeviceManager_stopAudioDeviceLoopbackTest';
    };
    IAudioDeviceManagerImpl.prototype.followSystemPlaybackDevice = function (enable) {
        var apiType = this.getApiTypeFromFollowSystemPlaybackDevice(enable);
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
    IAudioDeviceManagerImpl.prototype.getApiTypeFromFollowSystemPlaybackDevice = function (enable) {
        return 'AudioDeviceManager_followSystemPlaybackDevice';
    };
    IAudioDeviceManagerImpl.prototype.followSystemRecordingDevice = function (enable) {
        var apiType = this.getApiTypeFromFollowSystemRecordingDevice(enable);
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
    IAudioDeviceManagerImpl.prototype.getApiTypeFromFollowSystemRecordingDevice = function (enable) {
        return 'AudioDeviceManager_followSystemRecordingDevice';
    };
    IAudioDeviceManagerImpl.prototype.followSystemLoopbackDevice = function (enable) {
        var apiType = this.getApiTypeFromFollowSystemLoopbackDevice(enable);
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
    IAudioDeviceManagerImpl.prototype.getApiTypeFromFollowSystemLoopbackDevice = function (enable) {
        return 'AudioDeviceManager_followSystemLoopbackDevice';
    };
    IAudioDeviceManagerImpl.prototype.release = function () {
        var apiType = this.getApiTypeFromRelease();
        var jsonParams = {};
        IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
    };
    IAudioDeviceManagerImpl.prototype.getApiTypeFromRelease = function () {
        return 'AudioDeviceManager_release';
    };
    IAudioDeviceManagerImpl.prototype.getPlaybackDefaultDevice = function () {
        var apiType = this.getApiTypeFromGetPlaybackDefaultDevice();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IAudioDeviceManagerImpl.prototype.getApiTypeFromGetPlaybackDefaultDevice = function () {
        return 'AudioDeviceManager_getPlaybackDefaultDevice';
    };
    IAudioDeviceManagerImpl.prototype.getRecordingDefaultDevice = function () {
        var apiType = this.getApiTypeFromGetRecordingDefaultDevice();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IAudioDeviceManagerImpl.prototype.getApiTypeFromGetRecordingDefaultDevice = function () {
        return 'AudioDeviceManager_getRecordingDefaultDevice';
    };
    return IAudioDeviceManagerImpl;
}());
exports.IAudioDeviceManagerImpl = IAudioDeviceManagerImpl;
var IrisApiEngine_1 = require("../internal/IrisApiEngine");
