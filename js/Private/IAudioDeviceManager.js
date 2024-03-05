"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IAudioDeviceManager = exports.MaxDeviceIdLengthType = void 0;
require("./extension/IAudioDeviceManagerExtension");
/* enum_maxdeviceidlengthtype */
var MaxDeviceIdLengthType;
(function (MaxDeviceIdLengthType) {
    /* enum_maxdeviceidlengthtype_MaxDeviceIdLength */
    MaxDeviceIdLengthType[MaxDeviceIdLengthType["MaxDeviceIdLength"] = 512] = "MaxDeviceIdLength";
})(MaxDeviceIdLengthType = exports.MaxDeviceIdLengthType || (exports.MaxDeviceIdLengthType = {}));
/* class_iaudiodevicemanager */
var IAudioDeviceManager = /** @class */ (function () {
    function IAudioDeviceManager() {
    }
    return IAudioDeviceManager;
}());
exports.IAudioDeviceManager = IAudioDeviceManager;
