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
exports.LocalSpatialAudioEngineInternal = void 0;
var ICmviotSpatialAudioImpl_1 = require("../impl/ICmviotSpatialAudioImpl");
var LocalSpatialAudioEngineInternal = /** @class */ (function (_super) {
    __extends(LocalSpatialAudioEngineInternal, _super);
    function LocalSpatialAudioEngineInternal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LocalSpatialAudioEngineInternal.prototype.getApiTypeFromRelease = function () {
        return 'LocalSpatialAudioEngine_release';
    };
    LocalSpatialAudioEngineInternal.prototype.getApiTypeFromSetMaxAudioRecvCount = function (maxCount) {
        return 'LocalSpatialAudioEngine_setMaxAudioRecvCount';
    };
    LocalSpatialAudioEngineInternal.prototype.getApiTypeFromSetAudioRecvRange = function (range) {
        return 'LocalSpatialAudioEngine_setAudioRecvRange';
    };
    LocalSpatialAudioEngineInternal.prototype.getApiTypeFromSetDistanceUnit = function (unit) {
        return 'LocalSpatialAudioEngine_setDistanceUnit';
    };
    LocalSpatialAudioEngineInternal.prototype.getApiTypeFromUpdateSelfPosition = function (position, axisForward, axisRight, axisUp) {
        return 'LocalSpatialAudioEngine_updateSelfPosition';
    };
    LocalSpatialAudioEngineInternal.prototype.getApiTypeFromUpdateSelfPositionEx = function (position, axisForward, axisRight, axisUp, connection) {
        return 'LocalSpatialAudioEngine_updateSelfPositionEx';
    };
    LocalSpatialAudioEngineInternal.prototype.getApiTypeFromUpdatePlayerPositionInfo = function (playerId, positionInfo) {
        return 'LocalSpatialAudioEngine_updatePlayerPositionInfo';
    };
    LocalSpatialAudioEngineInternal.prototype.getApiTypeFromSetParameters = function (params) {
        return 'LocalSpatialAudioEngine_setParameters';
    };
    LocalSpatialAudioEngineInternal.prototype.getApiTypeFromMuteLocalAudioStream = function (mute) {
        return 'LocalSpatialAudioEngine_muteLocalAudioStream';
    };
    LocalSpatialAudioEngineInternal.prototype.getApiTypeFromMuteAllRemoteAudioStreams = function (mute) {
        return 'LocalSpatialAudioEngine_muteAllRemoteAudioStreams';
    };
    LocalSpatialAudioEngineInternal.prototype.getApiTypeFromSetZones = function (zones, zoneCount) {
        return 'LocalSpatialAudioEngine_setZones';
    };
    LocalSpatialAudioEngineInternal.prototype.getApiTypeFromSetPlayerAttenuation = function (playerId, attenuation, forceSet) {
        return 'LocalSpatialAudioEngine_setPlayerAttenuation';
    };
    LocalSpatialAudioEngineInternal.prototype.getApiTypeFromMuteRemoteAudioStream = function (uid, mute) {
        return 'LocalSpatialAudioEngine_muteRemoteAudioStream';
    };
    return LocalSpatialAudioEngineInternal;
}(ICmviotSpatialAudioImpl_1.ILocalSpatialAudioEngineImpl));
exports.LocalSpatialAudioEngineInternal = LocalSpatialAudioEngineInternal;
