"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CmviotRhythmPlayerConfig = exports.RhythmPlayerErrorType = exports.RhythmPlayerStateType = void 0;
require("./extension/ICmviotRhythmPlayerExtension");
/* enum_rhythmplayerstatetype */
var RhythmPlayerStateType;
(function (RhythmPlayerStateType) {
    /* enum_rhythmplayerstatetype_RhythmPlayerStateIdle */
    RhythmPlayerStateType[RhythmPlayerStateType["RhythmPlayerStateIdle"] = 810] = "RhythmPlayerStateIdle";
    /* enum_rhythmplayerstatetype_RhythmPlayerStateOpening */
    RhythmPlayerStateType[RhythmPlayerStateType["RhythmPlayerStateOpening"] = 811] = "RhythmPlayerStateOpening";
    /* enum_rhythmplayerstatetype_RhythmPlayerStateDecoding */
    RhythmPlayerStateType[RhythmPlayerStateType["RhythmPlayerStateDecoding"] = 812] = "RhythmPlayerStateDecoding";
    /* enum_rhythmplayerstatetype_RhythmPlayerStatePlaying */
    RhythmPlayerStateType[RhythmPlayerStateType["RhythmPlayerStatePlaying"] = 813] = "RhythmPlayerStatePlaying";
    /* enum_rhythmplayerstatetype_RhythmPlayerStateFailed */
    RhythmPlayerStateType[RhythmPlayerStateType["RhythmPlayerStateFailed"] = 814] = "RhythmPlayerStateFailed";
})(RhythmPlayerStateType = exports.RhythmPlayerStateType || (exports.RhythmPlayerStateType = {}));
/* enum_rhythmplayererrortype */
var RhythmPlayerErrorType;
(function (RhythmPlayerErrorType) {
    /* enum_rhythmplayererrortype_RhythmPlayerErrorOk */
    RhythmPlayerErrorType[RhythmPlayerErrorType["RhythmPlayerErrorOk"] = 0] = "RhythmPlayerErrorOk";
    /* enum_rhythmplayererrortype_RhythmPlayerErrorFailed */
    RhythmPlayerErrorType[RhythmPlayerErrorType["RhythmPlayerErrorFailed"] = 1] = "RhythmPlayerErrorFailed";
    /* enum_rhythmplayererrortype_RhythmPlayerErrorCanNotOpen */
    RhythmPlayerErrorType[RhythmPlayerErrorType["RhythmPlayerErrorCanNotOpen"] = 801] = "RhythmPlayerErrorCanNotOpen";
    /* enum_rhythmplayererrortype_RhythmPlayerErrorCanNotPlay */
    RhythmPlayerErrorType[RhythmPlayerErrorType["RhythmPlayerErrorCanNotPlay"] = 802] = "RhythmPlayerErrorCanNotPlay";
    /* enum_rhythmplayererrortype_RhythmPlayerErrorFileOverDurationLimit */
    RhythmPlayerErrorType[RhythmPlayerErrorType["RhythmPlayerErrorFileOverDurationLimit"] = 803] = "RhythmPlayerErrorFileOverDurationLimit";
})(RhythmPlayerErrorType = exports.RhythmPlayerErrorType || (exports.RhythmPlayerErrorType = {}));
/* class_cmviotrhythmplayerconfig */
var CmviotRhythmPlayerConfig = /** @class */ (function () {
    function CmviotRhythmPlayerConfig() {
    }
    return CmviotRhythmPlayerConfig;
}());
exports.CmviotRhythmPlayerConfig = CmviotRhythmPlayerConfig;
