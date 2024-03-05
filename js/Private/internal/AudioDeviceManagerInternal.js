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
exports.AudioDeviceManagerInternal = void 0;
var IAudioDeviceManagerImpl_1 = require("../impl/IAudioDeviceManagerImpl");
var IrisApiEngine_1 = require("./IrisApiEngine");
var AudioDeviceManagerInternal = /** @class */ (function (_super) {
    __extends(AudioDeviceManagerInternal, _super);
    function AudioDeviceManagerInternal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AudioDeviceManagerInternal.prototype.getPlaybackDeviceInfo = function () {
        var apiType = this.getApiTypeFromGetPlaybackDeviceInfo();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return {
            deviceId: jsonResults.deviceId,
            deviceName: jsonResults.deviceName,
        };
    };
    AudioDeviceManagerInternal.prototype.getRecordingDeviceInfo = function () {
        var apiType = this.getApiTypeFromGetRecordingDeviceInfo();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return {
            deviceId: jsonResults.deviceId,
            deviceName: jsonResults.deviceName,
        };
    };
    AudioDeviceManagerInternal.prototype.getPlaybackDefaultDevice = function () {
        var apiType = this.getApiTypeFromGetPlaybackDefaultDevice();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return {
            deviceId: jsonResults.deviceId,
            deviceName: jsonResults.deviceName,
        };
    };
    AudioDeviceManagerInternal.prototype.getRecordingDefaultDevice = function () {
        var apiType = this.getApiTypeFromGetRecordingDefaultDevice();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return {
            deviceId: jsonResults.deviceId,
            deviceName: jsonResults.deviceName,
        };
    };
    return AudioDeviceManagerInternal;
}(IAudioDeviceManagerImpl_1.IAudioDeviceManagerImpl));
exports.AudioDeviceManagerInternal = AudioDeviceManagerInternal;
