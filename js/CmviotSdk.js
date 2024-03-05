"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMediaPlayerCacheManager = exports.createCmviotRtcEngine = void 0;
var RtcEngineExInternal_1 = require("./Private/internal/RtcEngineExInternal");
var Utils_1 = require("./Utils");
__exportStar(require("./Private/CmviotBase"), exports);
__exportStar(require("./Private/CmviotMediaBase"), exports);
__exportStar(require("./Private/CmviotMediaPlayerTypes"), exports);
__exportStar(require("./Private/ICmviotLog"), exports);
__exportStar(require("./Private/ICmviotMediaEngine"), exports);
__exportStar(require("./Private/ICmviotMediaPlayer"), exports);
__exportStar(require("./Private/ICmviotMediaPlayerSource"), exports);
__exportStar(require("./Private/ICmviotMediaRecorder"), exports);
__exportStar(require("./Private/ICmviotMusicContentCenter"), exports);
__exportStar(require("./Private/ICmviotRhythmPlayer"), exports);
__exportStar(require("./Private/ICmviotRtcEngine"), exports);
__exportStar(require("./Private/ICmviotRtcEngineEx"), exports);
__exportStar(require("./Private/ICmviotSpatialAudio"), exports);
__exportStar(require("./Private/IAudioDeviceManager"), exports);
__exportStar(require("./Renderer"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Utils"), exports);
var instance = new RtcEngineExInternal_1.RtcEngineExInternal();
/**
 * Creates one IRtcEngineEx object.
 *
 * Currently, the Cmviot RTC SDK v4.x supports creating only one IRtcEngineEx object for each app.
 *
 * @returns
 * One IRtcEngineEx object.
 */
function createCmviotRtcEngine(options) {
    Object.assign(Utils_1.CmviotEnv, options);
    return instance;
}
exports.createCmviotRtcEngine = createCmviotRtcEngine;
/**
 * Gets one IMediaPlayerCacheManager instance.
 *
 * When you successfully call this method, the SDK returns a media player cache manager instance. The cache manager is a singleton pattern. Therefore, multiple calls to this method returns the same instance. Make sure the IRtcEngine is initialized before you call this method.
 *
 * @returns
 * The IMediaPlayerCacheManager instance.
 */
function getMediaPlayerCacheManager() {
    return new ICmviotMediaPlayerImpl_1.IMediaPlayerCacheManagerImpl();
}
exports.getMediaPlayerCacheManager = getMediaPlayerCacheManager;
exports.default = createCmviotRtcEngine;
var ICmviotMediaPlayerImpl_1 = require("./Private/impl/ICmviotMediaPlayerImpl");
