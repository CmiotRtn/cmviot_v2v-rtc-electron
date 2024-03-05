"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processIMediaRecorderObserver = exports.processIVideoFrameObserver = exports.processIVideoEncodedFrameObserver = exports.processIAudioSpectrumObserver = exports.processIAudioFrameObserver = exports.processIAudioFrameObserverBase = exports.processIAudioPcmFrameSink = void 0;
function processIAudioPcmFrameSink(handler, event, jsonParams) {
    switch (event) {
        case 'onFrame':
            if (handler.onFrame !== undefined) {
                handler.onFrame(jsonParams.frame);
            }
            break;
    }
}
exports.processIAudioPcmFrameSink = processIAudioPcmFrameSink;
function processIAudioFrameObserverBase(handler, event, jsonParams) {
    switch (event) {
        case 'onRecordAudioFrame':
            if (handler.onRecordAudioFrame !== undefined) {
                handler.onRecordAudioFrame(jsonParams.channelId, jsonParams.audioFrame);
            }
            break;
        case 'onPlaybackAudioFrame':
            if (handler.onPlaybackAudioFrame !== undefined) {
                handler.onPlaybackAudioFrame(jsonParams.channelId, jsonParams.audioFrame);
            }
            break;
        case 'onMixedAudioFrame':
            if (handler.onMixedAudioFrame !== undefined) {
                handler.onMixedAudioFrame(jsonParams.channelId, jsonParams.audioFrame);
            }
            break;
        case 'onEarMonitoringAudioFrame':
            if (handler.onEarMonitoringAudioFrame !== undefined) {
                handler.onEarMonitoringAudioFrame(jsonParams.audioFrame);
            }
            break;
    }
}
exports.processIAudioFrameObserverBase = processIAudioFrameObserverBase;
function processIAudioFrameObserver(handler, event, jsonParams) {
    switch (event) {
        case 'onPlaybackAudioFrameBeforeMixing':
            if (handler.onPlaybackAudioFrameBeforeMixing !== undefined) {
                handler.onPlaybackAudioFrameBeforeMixing(jsonParams.channelId, jsonParams.uid, jsonParams.audioFrame);
            }
            break;
    }
}
exports.processIAudioFrameObserver = processIAudioFrameObserver;
function processIAudioSpectrumObserver(handler, event, jsonParams) {
    switch (event) {
        case 'onLocalAudioSpectrum':
            if (handler.onLocalAudioSpectrum !== undefined) {
                handler.onLocalAudioSpectrum(jsonParams.data);
            }
            break;
        case 'onRemoteAudioSpectrum':
            if (handler.onRemoteAudioSpectrum !== undefined) {
                handler.onRemoteAudioSpectrum(jsonParams.spectrums, jsonParams.spectrumNumber);
            }
            break;
    }
}
exports.processIAudioSpectrumObserver = processIAudioSpectrumObserver;
function processIVideoEncodedFrameObserver(handler, event, jsonParams) {
    switch (event) {
        case 'onEncodedVideoFrameReceived':
            if (handler.onEncodedVideoFrameReceived !== undefined) {
                handler.onEncodedVideoFrameReceived(jsonParams.uid, jsonParams.imageBuffer, jsonParams.length, jsonParams.videoEncodedFrameInfo);
            }
            break;
    }
}
exports.processIVideoEncodedFrameObserver = processIVideoEncodedFrameObserver;
function processIVideoFrameObserver(handler, event, jsonParams) {
    switch (event) {
        case 'onCaptureVideoFrame':
            if (handler.onCaptureVideoFrame !== undefined) {
                handler.onCaptureVideoFrame(jsonParams.sourceType, jsonParams.videoFrame);
            }
            break;
        case 'onPreEncodeVideoFrame':
            if (handler.onPreEncodeVideoFrame !== undefined) {
                handler.onPreEncodeVideoFrame(jsonParams.sourceType, jsonParams.videoFrame);
            }
            break;
        case 'onMediaPlayerVideoFrame':
            if (handler.onMediaPlayerVideoFrame !== undefined) {
                handler.onMediaPlayerVideoFrame(jsonParams.videoFrame, jsonParams.mediaPlayerId);
            }
            break;
        case 'onRenderVideoFrame':
            if (handler.onRenderVideoFrame !== undefined) {
                handler.onRenderVideoFrame(jsonParams.channelId, jsonParams.remoteUid, jsonParams.videoFrame);
            }
            break;
        case 'onTranscodedVideoFrame':
            if (handler.onTranscodedVideoFrame !== undefined) {
                handler.onTranscodedVideoFrame(jsonParams.videoFrame);
            }
            break;
    }
}
exports.processIVideoFrameObserver = processIVideoFrameObserver;
function processIMediaRecorderObserver(handler, event, jsonParams) {
    switch (event) {
        case 'onRecorderStateChanged':
            if (handler.onRecorderStateChanged !== undefined) {
                handler.onRecorderStateChanged(jsonParams.channelId, jsonParams.uid, jsonParams.state, jsonParams.error);
            }
            break;
        case 'onRecorderInfoUpdated':
            if (handler.onRecorderInfoUpdated !== undefined) {
                handler.onRecorderInfoUpdated(jsonParams.channelId, jsonParams.uid, jsonParams.info);
            }
            break;
    }
}
exports.processIMediaRecorderObserver = processIMediaRecorderObserver;
