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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IMediaRecorderObserver = exports.IVideoFrameObserver = exports.IVideoEncodedFrameObserver = exports.IAudioSpectrumObserver = exports.IAudioFrameObserver = exports.IAudioFrameObserverBase = exports.IAudioPcmFrameSink = void 0;
/**
 * This module was automatically generated by `ts-interface-builder`
 */
var t = __importStar(require("ts-interface-checker"));
// tslint:disable:object-literal-key-quotes
exports.IAudioPcmFrameSink = t.iface([], {
    "onFrame": t.opt(t.func("void", t.param("frame", "AudioPcmFrame"))),
});
exports.IAudioFrameObserverBase = t.iface([], {
    "onRecordAudioFrame": t.opt(t.func("void", t.param("channelId", "string"), t.param("audioFrame", "AudioFrame"))),
    "onPlaybackAudioFrame": t.opt(t.func("void", t.param("channelId", "string"), t.param("audioFrame", "AudioFrame"))),
    "onMixedAudioFrame": t.opt(t.func("void", t.param("channelId", "string"), t.param("audioFrame", "AudioFrame"))),
    "onEarMonitoringAudioFrame": t.opt(t.func("void", t.param("audioFrame", "AudioFrame"))),
});
exports.IAudioFrameObserver = t.iface(["IAudioFrameObserverBase"], {
    "onPlaybackAudioFrameBeforeMixing": t.opt(t.func("void", t.param("channelId", "string"), t.param("uid", "number"), t.param("audioFrame", "AudioFrame"))),
});
exports.IAudioSpectrumObserver = t.iface([], {
    "onLocalAudioSpectrum": t.opt(t.func("void", t.param("data", "AudioSpectrumData"))),
    "onRemoteAudioSpectrum": t.opt(t.func("void", t.param("spectrums", t.array("UserAudioSpectrumInfo")), t.param("spectrumNumber", "number"))),
});
exports.IVideoEncodedFrameObserver = t.iface([], {
    "onEncodedVideoFrameReceived": t.opt(t.func("void", t.param("uid", "number"), t.param("imageBuffer", "Uint8Array"), t.param("length", "number"), t.param("videoEncodedFrameInfo", "EncodedVideoFrameInfo"))),
});
exports.IVideoFrameObserver = t.iface([], {
    "onCaptureVideoFrame": t.opt(t.func("void", t.param("sourceType", "VideoSourceType"), t.param("videoFrame", "VideoFrame"))),
    "onPreEncodeVideoFrame": t.opt(t.func("void", t.param("sourceType", "VideoSourceType"), t.param("videoFrame", "VideoFrame"))),
    "onMediaPlayerVideoFrame": t.opt(t.func("void", t.param("videoFrame", "VideoFrame"), t.param("mediaPlayerId", "number"))),
    "onRenderVideoFrame": t.opt(t.func("void", t.param("channelId", "string"), t.param("remoteUid", "number"), t.param("videoFrame", "VideoFrame"))),
    "onTranscodedVideoFrame": t.opt(t.func("void", t.param("videoFrame", "VideoFrame"))),
});
exports.IMediaRecorderObserver = t.iface([], {
    "onRecorderStateChanged": t.opt(t.func("void", t.param("channelId", "string"), t.param("uid", "number"), t.param("state", "RecorderState"), t.param("error", "RecorderErrorCode"))),
    "onRecorderInfoUpdated": t.opt(t.func("void", t.param("channelId", "string"), t.param("uid", "number"), t.param("info", "RecorderInfo"))),
});
var exportedTypeSuite = {
    IAudioPcmFrameSink: exports.IAudioPcmFrameSink,
    IAudioFrameObserverBase: exports.IAudioFrameObserverBase,
    IAudioFrameObserver: exports.IAudioFrameObserver,
    IAudioSpectrumObserver: exports.IAudioSpectrumObserver,
    IVideoEncodedFrameObserver: exports.IVideoEncodedFrameObserver,
    IVideoFrameObserver: exports.IVideoFrameObserver,
    IMediaRecorderObserver: exports.IMediaRecorderObserver,
};
exports.default = exportedTypeSuite;
