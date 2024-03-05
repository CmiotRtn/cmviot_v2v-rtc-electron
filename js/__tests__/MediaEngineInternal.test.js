"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CmviotSdk_1 = __importDefault(require("../CmviotSdk"));
jest.mock('../../build/Release/cmviot_node_ext', function () {
    return {
        CmviotElectronBridge: function () {
            return {
                CallApi: function () {
                    return {
                        callApiReturnCode: 0,
                        callApiResult: JSON.stringify({ result: 0 }),
                    };
                },
                OnEvent: function () { },
            };
        },
    };
});
test('addListener', function () {
    var engine = (0, CmviotSdk_1.default)().getMediaEngine();
    var callback = jest.fn();
    engine.addListener('onCaptureVideoFrame', callback);
    (0, IrisApiEngine_1.emitEvent)('onCaptureVideoFrame', IrisApiEngine_1.EVENT_PROCESSORS.IVideoFrameObserver, {});
    expect(callback).toBeCalledTimes(1);
});
test('addListenerWithSameEventTypeAndCallback', function () {
    var engine = (0, CmviotSdk_1.default)().getMediaEngine();
    var callback = jest.fn();
    engine.addListener('onCaptureVideoFrame', callback);
    engine.addListener('onCaptureVideoFrame', callback);
    (0, IrisApiEngine_1.emitEvent)('onCaptureVideoFrame', IrisApiEngine_1.EVENT_PROCESSORS.IVideoFrameObserver, {});
    expect(callback).toBeCalledTimes(2);
});
test('addListenerWithSameCallback', function () {
    var engine = (0, CmviotSdk_1.default)().getMediaEngine();
    var callback = jest.fn();
    engine.addListener('onCaptureVideoFrame', callback);
    engine.addListener('onRecordAudioFrame', callback);
    (0, IrisApiEngine_1.emitEvent)('onCaptureVideoFrame', IrisApiEngine_1.EVENT_PROCESSORS.IVideoFrameObserver, {});
    (0, IrisApiEngine_1.emitEvent)('onRecordAudioFrame', IrisApiEngine_1.EVENT_PROCESSORS.IAudioFrameObserver, {});
    expect(callback).toBeCalledTimes(2);
});
test('removeListener', function () {
    var engine = (0, CmviotSdk_1.default)().getMediaEngine();
    var callback = jest.fn();
    engine.addListener('onCaptureVideoFrame', callback);
    engine.removeListener('onCaptureVideoFrame', callback);
    (0, IrisApiEngine_1.emitEvent)('onCaptureVideoFrame', IrisApiEngine_1.EVENT_PROCESSORS.IVideoFrameObserver, {});
    expect(callback).not.toBeCalled();
});
test('removeListenerWithoutCallback', function () {
    var engine = (0, CmviotSdk_1.default)().getMediaEngine();
    var callback = jest.fn();
    engine.addListener('onCaptureVideoFrame', callback);
    engine.removeListener('onCaptureVideoFrame');
    (0, IrisApiEngine_1.emitEvent)('onCaptureVideoFrame', IrisApiEngine_1.EVENT_PROCESSORS.IVideoFrameObserver, {});
    expect(callback).not.toBeCalled();
});
test('removeAllListenersWithEventType', function () {
    var engine = (0, CmviotSdk_1.default)().getMediaEngine();
    var callback1 = jest.fn();
    var callback2 = jest.fn();
    engine.addListener('onCaptureVideoFrame', callback1);
    engine.addListener('onCaptureVideoFrame', callback2);
    engine.removeAllListeners('onCaptureVideoFrame');
    (0, IrisApiEngine_1.emitEvent)('onCaptureVideoFrame', IrisApiEngine_1.EVENT_PROCESSORS.IVideoFrameObserver, {});
    expect(callback1).not.toBeCalled();
    expect(callback2).not.toBeCalled();
});
test('removeAllListeners', function () {
    var engine = (0, CmviotSdk_1.default)().getMediaEngine();
    var callback1 = jest.fn();
    var callback2 = jest.fn();
    engine.addListener('onCaptureVideoFrame', callback1);
    engine.addListener('onRecordAudioFrame', callback2);
    engine.removeAllListeners();
    (0, IrisApiEngine_1.emitEvent)('onCaptureVideoFrame', IrisApiEngine_1.EVENT_PROCESSORS.IVideoFrameObserver, {});
    (0, IrisApiEngine_1.emitEvent)('onRecordAudioFrame', IrisApiEngine_1.EVENT_PROCESSORS.IAudioFrameObserver, {});
    expect(callback1).not.toBeCalled();
    expect(callback2).not.toBeCalled();
});
var IrisApiEngine_1 = require("../Private/internal/IrisApiEngine");
