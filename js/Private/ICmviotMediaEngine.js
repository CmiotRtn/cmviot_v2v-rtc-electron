"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IMediaEngine = exports.AudioMixingDualMonoMode = void 0;
require("./extension/ICmviotMediaEngineExtension");
/* enum_audiomixingdualmonomode */
var AudioMixingDualMonoMode;
(function (AudioMixingDualMonoMode) {
    /* enum_audiomixingdualmonomode_AudioMixingDualMonoAuto */
    AudioMixingDualMonoMode[AudioMixingDualMonoMode["AudioMixingDualMonoAuto"] = 0] = "AudioMixingDualMonoAuto";
    /* enum_audiomixingdualmonomode_AudioMixingDualMonoL */
    AudioMixingDualMonoMode[AudioMixingDualMonoMode["AudioMixingDualMonoL"] = 1] = "AudioMixingDualMonoL";
    /* enum_audiomixingdualmonomode_AudioMixingDualMonoR */
    AudioMixingDualMonoMode[AudioMixingDualMonoMode["AudioMixingDualMonoR"] = 2] = "AudioMixingDualMonoR";
    /* enum_audiomixingdualmonomode_AudioMixingDualMonoMix */
    AudioMixingDualMonoMode[AudioMixingDualMonoMode["AudioMixingDualMonoMix"] = 3] = "AudioMixingDualMonoMix";
})(AudioMixingDualMonoMode = exports.AudioMixingDualMonoMode || (exports.AudioMixingDualMonoMode = {}));
/* class_imediaengine */
var IMediaEngine = /** @class */ (function () {
    function IMediaEngine() {
    }
    return IMediaEngine;
}());
exports.IMediaEngine = IMediaEngine;
