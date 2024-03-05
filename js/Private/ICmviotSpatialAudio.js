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
exports.ILocalSpatialAudioEngine = exports.IBaseSpatialAudioEngine = exports.SpatialAudioZone = exports.RemoteVoicePositionInfo = void 0;
require("./extension/ICmviotSpatialAudioExtension");
/* class_remotevoicepositioninfo */
var RemoteVoicePositionInfo = /** @class */ (function () {
    function RemoteVoicePositionInfo() {
    }
    return RemoteVoicePositionInfo;
}());
exports.RemoteVoicePositionInfo = RemoteVoicePositionInfo;
/* class_spatialaudiozone */
var SpatialAudioZone = /** @class */ (function () {
    function SpatialAudioZone() {
    }
    return SpatialAudioZone;
}());
exports.SpatialAudioZone = SpatialAudioZone;
/* class_ibasespatialaudioengine */
var IBaseSpatialAudioEngine = /** @class */ (function () {
    function IBaseSpatialAudioEngine() {
    }
    return IBaseSpatialAudioEngine;
}());
exports.IBaseSpatialAudioEngine = IBaseSpatialAudioEngine;
/* class_ilocalspatialaudioengine */
var ILocalSpatialAudioEngine = /** @class */ (function (_super) {
    __extends(ILocalSpatialAudioEngine, _super);
    function ILocalSpatialAudioEngine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ILocalSpatialAudioEngine;
}(IBaseSpatialAudioEngine));
exports.ILocalSpatialAudioEngine = ILocalSpatialAudioEngine;
