"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CmviotEnv = exports.classMix = exports.getDefaultRendererVideoConfig = exports.formatConfigByVideoSourceType = exports.objsKeysToLowerCase = exports.parseJSON = exports.logDebug = exports.logInfo = exports.logError = exports.logWarn = exports.deprecate = exports.DEBUG_TAG = exports.TAG = void 0;
var CmviotMediaBase_1 = require("./Private/CmviotMediaBase");
/**
 * @ignore
 */
exports.TAG = '[Cmviot]: ';
/**
 * @ignore
 */
exports.DEBUG_TAG = '[Cmviot Debug]: ';
/**
 * @ignore
 */
var deprecate = function (originApi, replaceApi) {
    return (0, exports.logError)("".concat(exports.TAG, " This method ").concat(originApi, " will be deprecated soon. "), replaceApi ? "Please use ".concat(replaceApi, " instead") : '');
};
exports.deprecate = deprecate;
/**
 * @ignore
 */
var logWarn = function (msg) {
    var optParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        optParams[_i - 1] = arguments[_i];
    }
    if (!exports.CmviotEnv.enableLogging) {
        return;
    }
    console.warn.apply(console, __spreadArray(["".concat(exports.TAG, " ").concat(msg)], optParams, false));
};
exports.logWarn = logWarn;
/**
 * @ignore
 */
var logError = function (msg) {
    var optParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        optParams[_i - 1] = arguments[_i];
    }
    if (!exports.CmviotEnv.enableLogging) {
        return;
    }
    console.error.apply(console, __spreadArray(["".concat(exports.TAG, " ").concat(msg)], optParams, false));
};
exports.logError = logError;
/**
 * @ignore
 */
var logInfo = function (msg) {
    var optParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        optParams[_i - 1] = arguments[_i];
    }
    if (!exports.CmviotEnv.enableLogging) {
        return;
    }
    console.log.apply(console, __spreadArray(["".concat(exports.TAG, " ").concat(msg)], optParams, false));
};
exports.logInfo = logInfo;
/**
 * @ignore
 */
var logDebug = function (msg) {
    var optParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        optParams[_i - 1] = arguments[_i];
    }
    if (!exports.CmviotEnv.enableLogging || !exports.CmviotEnv.enableDebugLogging) {
        return;
    }
    console.warn.apply(console, __spreadArray(["".concat(exports.DEBUG_TAG, " ").concat(msg)], optParams, false));
};
exports.logDebug = logDebug;
/**
 * @ignore
 */
var parseJSON = function (jsonString) {
    if (jsonString === '') {
        return jsonString;
    }
    var obj;
    try {
        obj = JSON.parse(jsonString);
    }
    catch (error) {
        (0, exports.logError)('parseJSON', error);
    }
    return obj || jsonString;
};
exports.parseJSON = parseJSON;
/**
 * @ignore
 */
var objsKeysToLowerCase = function (array) {
    array.forEach(function (obj) {
        for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                var element = obj[key];
                obj[key.toLocaleLowerCase()] = element;
            }
        }
    });
};
exports.objsKeysToLowerCase = objsKeysToLowerCase;
/**
 * @ignore
 */
var formatConfigByVideoSourceType = function (videoSourceType, originChannelId, originUid) {
    if (originChannelId === void 0) { originChannelId = ''; }
    if (originUid === void 0) { originUid = 0; }
    if (videoSourceType === undefined || videoSourceType === null) {
        throw new Error("must set videoSourceType:".concat(videoSourceType));
    }
    var uid = originUid;
    var channelId = originChannelId;
    switch (videoSourceType) {
        case CmviotMediaBase_1.VideoSourceType.VideoSourceCamera:
        case CmviotMediaBase_1.VideoSourceType.VideoSourceCameraPrimary:
        case CmviotMediaBase_1.VideoSourceType.VideoSourceScreen:
        case CmviotMediaBase_1.VideoSourceType.VideoSourceScreenSecondary:
        case CmviotMediaBase_1.VideoSourceType.VideoSourceTranscoded:
            channelId = '';
            uid = 0;
            break;
        case CmviotMediaBase_1.VideoSourceType.VideoSourceRemote:
            if (!uid || !channelId) {
                throw new Error("must set uid:".concat(uid, " and channelId:").concat(channelId));
            }
            break;
        case CmviotMediaBase_1.VideoSourceType.VideoSourceMediaPlayer:
            channelId = '';
            if (!uid) {
                throw new Error("must set mediaPlayerId:".concat(uid));
            }
            break;
        default:
            break;
    }
    return { uid: uid, channelId: channelId, videoSourceType: videoSourceType };
};
exports.formatConfigByVideoSourceType = formatConfigByVideoSourceType;
/**
 * @ignore
 */
var getDefaultRendererVideoConfig = function (config) {
    var _a, _b;
    var rendererOptions = Object.assign({}, (_b = (_a = exports.CmviotEnv.CmviotRendererManager) === null || _a === void 0 ? void 0 : _a.defaultRenderConfig) === null || _b === void 0 ? void 0 : _b.rendererOptions, config.rendererOptions);
    var _c = (0, exports.formatConfigByVideoSourceType)(config.videoSourceType, config.channelId, config.uid), uid = _c.uid, channelId = _c.channelId, videoSourceType = _c.videoSourceType;
    return __assign(__assign({}, config), { uid: uid, channelId: channelId, videoSourceType: videoSourceType, rendererOptions: rendererOptions });
};
exports.getDefaultRendererVideoConfig = getDefaultRendererVideoConfig;
/**
 * @ignore
 */
function classMix() {
    var mixins = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        mixins[_i] = arguments[_i];
    }
    var MixClass = /** @class */ (function () {
        function MixClass() {
            for (var _i = 0, mixins_2 = mixins; _i < mixins_2.length; _i++) {
                var mixin = mixins_2[_i];
                copyProperties(this, new mixin()); // 拷贝实例属性
            }
        }
        return MixClass;
    }());
    for (var _a = 0, mixins_1 = mixins; _a < mixins_1.length; _a++) {
        var mixin = mixins_1[_a];
        copyProperties(MixClass, mixin); // 拷贝静态属性
        copyProperties(MixClass.prototype, mixin.prototype); // 拷贝原型属性
    }
    return MixClass;
}
exports.classMix = classMix;
function copyProperties(target, source) {
    for (var _i = 0, _a = Reflect.ownKeys(source); _i < _a.length; _i++) {
        var key = _a[_i];
        if (key !== 'constructor' && key !== 'prototype' && key !== 'name') {
            var desc = Object.getOwnPropertyDescriptor(source, key);
            Object.defineProperty(target, key, desc);
        }
    }
}
var cmviot = require('../build/Release/cmviot_node_ext');
/**
 * @ignore
 */
exports.CmviotEnv = {
    enableLogging: true,
    enableDebugLogging: false,
    webEnvReady: true,
    CmviotElectronBridge: new cmviot.CmviotElectronBridge(),
};
