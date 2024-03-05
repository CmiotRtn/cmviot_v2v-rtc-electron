"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IMediaRecorderImpl = void 0;
// @ts-ignore
var IMediaRecorderImpl = /** @class */ (function () {
    function IMediaRecorderImpl() {
    }
    IMediaRecorderImpl.prototype.setMediaRecorderObserver = function (callback) {
        var apiType = this.getApiTypeFromSetMediaRecorderObserver(callback);
        var jsonParams = {
            callback: callback,
            toJSON: function () {
                return {};
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaRecorderImpl.prototype.getApiTypeFromSetMediaRecorderObserver = function (callback) {
        return 'MediaRecorder_setMediaRecorderObserver';
    };
    IMediaRecorderImpl.prototype.startRecording = function (config) {
        var apiType = this.getApiTypeFromStartRecording(config);
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
    IMediaRecorderImpl.prototype.getApiTypeFromStartRecording = function (config) {
        return 'MediaRecorder_startRecording';
    };
    IMediaRecorderImpl.prototype.stopRecording = function () {
        var apiType = this.getApiTypeFromStopRecording();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IMediaRecorderImpl.prototype.getApiTypeFromStopRecording = function () {
        return 'MediaRecorder_stopRecording';
    };
    return IMediaRecorderImpl;
}());
exports.IMediaRecorderImpl = IMediaRecorderImpl;
var IrisApiEngine_1 = require("../internal/IrisApiEngine");
