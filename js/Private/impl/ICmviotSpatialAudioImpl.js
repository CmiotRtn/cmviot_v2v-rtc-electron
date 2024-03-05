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
exports.ILocalSpatialAudioEngineImpl = exports.IBaseSpatialAudioEngineImpl = void 0;
// @ts-ignore
var IBaseSpatialAudioEngineImpl = /** @class */ (function () {
    function IBaseSpatialAudioEngineImpl() {
    }
    IBaseSpatialAudioEngineImpl.prototype.release = function () {
        var apiType = this.getApiTypeFromRelease();
        var jsonParams = {};
        IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
    };
    IBaseSpatialAudioEngineImpl.prototype.getApiTypeFromRelease = function () {
        return 'BaseSpatialAudioEngine_release';
    };
    IBaseSpatialAudioEngineImpl.prototype.setMaxAudioRecvCount = function (maxCount) {
        var apiType = this.getApiTypeFromSetMaxAudioRecvCount(maxCount);
        var jsonParams = {
            maxCount: maxCount,
            toJSON: function () {
                return {
                    maxCount: maxCount,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IBaseSpatialAudioEngineImpl.prototype.getApiTypeFromSetMaxAudioRecvCount = function (maxCount) {
        return 'BaseSpatialAudioEngine_setMaxAudioRecvCount';
    };
    IBaseSpatialAudioEngineImpl.prototype.setAudioRecvRange = function (range) {
        var apiType = this.getApiTypeFromSetAudioRecvRange(range);
        var jsonParams = {
            range: range,
            toJSON: function () {
                return {
                    range: range,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IBaseSpatialAudioEngineImpl.prototype.getApiTypeFromSetAudioRecvRange = function (range) {
        return 'BaseSpatialAudioEngine_setAudioRecvRange';
    };
    IBaseSpatialAudioEngineImpl.prototype.setDistanceUnit = function (unit) {
        var apiType = this.getApiTypeFromSetDistanceUnit(unit);
        var jsonParams = {
            unit: unit,
            toJSON: function () {
                return {
                    unit: unit,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IBaseSpatialAudioEngineImpl.prototype.getApiTypeFromSetDistanceUnit = function (unit) {
        return 'BaseSpatialAudioEngine_setDistanceUnit';
    };
    IBaseSpatialAudioEngineImpl.prototype.updateSelfPosition = function (position, axisForward, axisRight, axisUp) {
        var apiType = this.getApiTypeFromUpdateSelfPosition(position, axisForward, axisRight, axisUp);
        var jsonParams = {
            position: position,
            axisForward: axisForward,
            axisRight: axisRight,
            axisUp: axisUp,
            toJSON: function () {
                return {
                    position: position,
                    axisForward: axisForward,
                    axisRight: axisRight,
                    axisUp: axisUp,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IBaseSpatialAudioEngineImpl.prototype.getApiTypeFromUpdateSelfPosition = function (position, axisForward, axisRight, axisUp) {
        return 'BaseSpatialAudioEngine_updateSelfPosition';
    };
    IBaseSpatialAudioEngineImpl.prototype.updateSelfPositionEx = function (position, axisForward, axisRight, axisUp, connection) {
        var apiType = this.getApiTypeFromUpdateSelfPositionEx(position, axisForward, axisRight, axisUp, connection);
        var jsonParams = {
            position: position,
            axisForward: axisForward,
            axisRight: axisRight,
            axisUp: axisUp,
            connection: connection,
            toJSON: function () {
                return {
                    position: position,
                    axisForward: axisForward,
                    axisRight: axisRight,
                    axisUp: axisUp,
                    connection: connection,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IBaseSpatialAudioEngineImpl.prototype.getApiTypeFromUpdateSelfPositionEx = function (position, axisForward, axisRight, axisUp, connection) {
        return 'BaseSpatialAudioEngine_updateSelfPositionEx';
    };
    IBaseSpatialAudioEngineImpl.prototype.updatePlayerPositionInfo = function (playerId, positionInfo) {
        var apiType = this.getApiTypeFromUpdatePlayerPositionInfo(playerId, positionInfo);
        var jsonParams = {
            playerId: playerId,
            positionInfo: positionInfo,
            toJSON: function () {
                return {
                    playerId: playerId,
                    positionInfo: positionInfo,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IBaseSpatialAudioEngineImpl.prototype.getApiTypeFromUpdatePlayerPositionInfo = function (playerId, positionInfo) {
        return 'BaseSpatialAudioEngine_updatePlayerPositionInfo';
    };
    IBaseSpatialAudioEngineImpl.prototype.setParameters = function (params) {
        var apiType = this.getApiTypeFromSetParameters(params);
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
    IBaseSpatialAudioEngineImpl.prototype.getApiTypeFromSetParameters = function (params) {
        return 'BaseSpatialAudioEngine_setParameters';
    };
    IBaseSpatialAudioEngineImpl.prototype.muteLocalAudioStream = function (mute) {
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
    IBaseSpatialAudioEngineImpl.prototype.getApiTypeFromMuteLocalAudioStream = function (mute) {
        return 'BaseSpatialAudioEngine_muteLocalAudioStream';
    };
    IBaseSpatialAudioEngineImpl.prototype.muteAllRemoteAudioStreams = function (mute) {
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
    IBaseSpatialAudioEngineImpl.prototype.getApiTypeFromMuteAllRemoteAudioStreams = function (mute) {
        return 'BaseSpatialAudioEngine_muteAllRemoteAudioStreams';
    };
    IBaseSpatialAudioEngineImpl.prototype.setZones = function (zones, zoneCount) {
        var apiType = this.getApiTypeFromSetZones(zones, zoneCount);
        var jsonParams = {
            zones: zones,
            zoneCount: zoneCount,
            toJSON: function () {
                return {
                    zones: zones,
                    zoneCount: zoneCount,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IBaseSpatialAudioEngineImpl.prototype.getApiTypeFromSetZones = function (zones, zoneCount) {
        return 'BaseSpatialAudioEngine_setZones';
    };
    IBaseSpatialAudioEngineImpl.prototype.setPlayerAttenuation = function (playerId, attenuation, forceSet) {
        var apiType = this.getApiTypeFromSetPlayerAttenuation(playerId, attenuation, forceSet);
        var jsonParams = {
            playerId: playerId,
            attenuation: attenuation,
            forceSet: forceSet,
            toJSON: function () {
                return {
                    playerId: playerId,
                    attenuation: attenuation,
                    forceSet: forceSet,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    IBaseSpatialAudioEngineImpl.prototype.getApiTypeFromSetPlayerAttenuation = function (playerId, attenuation, forceSet) {
        return 'BaseSpatialAudioEngine_setPlayerAttenuation';
    };
    IBaseSpatialAudioEngineImpl.prototype.muteRemoteAudioStream = function (uid, mute) {
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
    IBaseSpatialAudioEngineImpl.prototype.getApiTypeFromMuteRemoteAudioStream = function (uid, mute) {
        return 'BaseSpatialAudioEngine_muteRemoteAudioStream';
    };
    return IBaseSpatialAudioEngineImpl;
}());
exports.IBaseSpatialAudioEngineImpl = IBaseSpatialAudioEngineImpl;
// @ts-ignore
var ILocalSpatialAudioEngineImpl = /** @class */ (function (_super) {
    __extends(ILocalSpatialAudioEngineImpl, _super);
    function ILocalSpatialAudioEngineImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ILocalSpatialAudioEngineImpl.prototype.initialize = function () {
        var apiType = this.getApiTypeFromInitialize();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    ILocalSpatialAudioEngineImpl.prototype.getApiTypeFromInitialize = function () {
        return 'LocalSpatialAudioEngine_initialize';
    };
    ILocalSpatialAudioEngineImpl.prototype.updateRemotePosition = function (uid, posInfo) {
        var apiType = this.getApiTypeFromUpdateRemotePosition(uid, posInfo);
        var jsonParams = {
            uid: uid,
            posInfo: posInfo,
            toJSON: function () {
                return {
                    uid: uid,
                    posInfo: posInfo,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    ILocalSpatialAudioEngineImpl.prototype.getApiTypeFromUpdateRemotePosition = function (uid, posInfo) {
        return 'LocalSpatialAudioEngine_updateRemotePosition';
    };
    ILocalSpatialAudioEngineImpl.prototype.updateRemotePositionEx = function (uid, posInfo, connection) {
        var apiType = this.getApiTypeFromUpdateRemotePositionEx(uid, posInfo, connection);
        var jsonParams = {
            uid: uid,
            posInfo: posInfo,
            connection: connection,
            toJSON: function () {
                return {
                    uid: uid,
                    posInfo: posInfo,
                    connection: connection,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    ILocalSpatialAudioEngineImpl.prototype.getApiTypeFromUpdateRemotePositionEx = function (uid, posInfo, connection) {
        return 'LocalSpatialAudioEngine_updateRemotePositionEx';
    };
    ILocalSpatialAudioEngineImpl.prototype.removeRemotePosition = function (uid) {
        var apiType = this.getApiTypeFromRemoveRemotePosition(uid);
        var jsonParams = {
            uid: uid,
            toJSON: function () {
                return {
                    uid: uid,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    ILocalSpatialAudioEngineImpl.prototype.getApiTypeFromRemoveRemotePosition = function (uid) {
        return 'LocalSpatialAudioEngine_removeRemotePosition';
    };
    ILocalSpatialAudioEngineImpl.prototype.removeRemotePositionEx = function (uid, connection) {
        var apiType = this.getApiTypeFromRemoveRemotePositionEx(uid, connection);
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
        return jsonResults.result;
    };
    ILocalSpatialAudioEngineImpl.prototype.getApiTypeFromRemoveRemotePositionEx = function (uid, connection) {
        return 'LocalSpatialAudioEngine_removeRemotePositionEx';
    };
    ILocalSpatialAudioEngineImpl.prototype.clearRemotePositions = function () {
        var apiType = this.getApiTypeFromClearRemotePositions();
        var jsonParams = {};
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    ILocalSpatialAudioEngineImpl.prototype.getApiTypeFromClearRemotePositions = function () {
        return 'LocalSpatialAudioEngine_clearRemotePositions';
    };
    ILocalSpatialAudioEngineImpl.prototype.clearRemotePositionsEx = function (connection) {
        var apiType = this.getApiTypeFromClearRemotePositionsEx(connection);
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
    ILocalSpatialAudioEngineImpl.prototype.getApiTypeFromClearRemotePositionsEx = function (connection) {
        return 'LocalSpatialAudioEngine_clearRemotePositionsEx';
    };
    ILocalSpatialAudioEngineImpl.prototype.setRemoteAudioAttenuation = function (uid, attenuation, forceSet) {
        var apiType = this.getApiTypeFromSetRemoteAudioAttenuation(uid, attenuation, forceSet);
        var jsonParams = {
            uid: uid,
            attenuation: attenuation,
            forceSet: forceSet,
            toJSON: function () {
                return {
                    uid: uid,
                    attenuation: attenuation,
                    forceSet: forceSet,
                };
            },
        };
        var jsonResults = IrisApiEngine_1.callIrisApi.call(this, apiType, jsonParams);
        return jsonResults.result;
    };
    ILocalSpatialAudioEngineImpl.prototype.getApiTypeFromSetRemoteAudioAttenuation = function (uid, attenuation, forceSet) {
        return 'LocalSpatialAudioEngine_setRemoteAudioAttenuation';
    };
    return ILocalSpatialAudioEngineImpl;
}(IBaseSpatialAudioEngineImpl));
exports.ILocalSpatialAudioEngineImpl = ILocalSpatialAudioEngineImpl;
var IrisApiEngine_1 = require("../internal/IrisApiEngine");
