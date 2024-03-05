"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CmviotSdk_1 = __importDefault(require("../CmviotSdk"));
var nativeHandle = 1;
jest.mock('../../build/Release/cmviot_node_ext', function () {
    return {
        CmviotElectronBridge: function () {
            return {
                CallApi: function () {
                    return {
                        callApiReturnCode: 0,
                        callApiResult: JSON.stringify({ result: nativeHandle }),
                    };
                },
                OnEvent: function () { },
            };
        },
    };
});
test('addListener', function () {
    var engine = (0, CmviotSdk_1.default)().createMediaRecorder({});
    var callback = jest.fn();
    engine.addListener('onRecorderInfoUpdated', callback);
    (0, IrisApiEngine_1.emitEvent)('onRecorderInfoUpdated', IrisApiEngine_1.EVENT_PROCESSORS.IMediaRecorderObserver, {
        nativeHandle: nativeHandle,
    });
    expect(callback).toBeCalledTimes(1);
});
test('addListenerWithWrongData', function () {
    var engine = (0, CmviotSdk_1.default)().createMediaRecorder({});
    var callback = jest.fn();
    engine.addListener('onRecorderInfoUpdated', callback);
    (0, IrisApiEngine_1.emitEvent)('onRecorderInfoUpdated', IrisApiEngine_1.EVENT_PROCESSORS.IMediaRecorderObserver, {
        nativeHandle: 2,
    });
    expect(callback).not.toBeCalled();
});
test('addListenerWithSameEventTypeAndCallback', function () {
    var engine = (0, CmviotSdk_1.default)().createMediaRecorder({});
    var callback = jest.fn();
    engine.addListener('onRecorderInfoUpdated', callback);
    engine.addListener('onRecorderInfoUpdated', callback);
    (0, IrisApiEngine_1.emitEvent)('onRecorderInfoUpdated', IrisApiEngine_1.EVENT_PROCESSORS.IMediaRecorderObserver, {
        nativeHandle: nativeHandle,
    });
    expect(callback).toBeCalledTimes(2);
});
test('addListenerWithSameCallback', function () {
    var engine = (0, CmviotSdk_1.default)().createMediaRecorder({});
    var callback = jest.fn();
    engine.addListener('onRecorderInfoUpdated', callback);
    engine.addListener('onRecorderStateChanged', callback);
    (0, IrisApiEngine_1.emitEvent)('onRecorderInfoUpdated', IrisApiEngine_1.EVENT_PROCESSORS.IMediaRecorderObserver, {
        nativeHandle: nativeHandle,
    });
    (0, IrisApiEngine_1.emitEvent)('onRecorderStateChanged', IrisApiEngine_1.EVENT_PROCESSORS.IMediaRecorderObserver, {
        nativeHandle: nativeHandle,
    });
    expect(callback).toBeCalledTimes(2);
});
test('removeListener', function () {
    var engine = (0, CmviotSdk_1.default)().createMediaRecorder({});
    var callback = jest.fn();
    engine.addListener('onRecorderInfoUpdated', callback);
    engine.removeListener('onRecorderInfoUpdated', callback);
    (0, IrisApiEngine_1.emitEvent)('onRecorderInfoUpdated', IrisApiEngine_1.EVENT_PROCESSORS.IMediaRecorderObserver, {
        nativeHandle: nativeHandle,
    });
    expect(callback).not.toBeCalled();
});
test('removeListenerWithoutCallback', function () {
    var engine = (0, CmviotSdk_1.default)().createMediaRecorder({});
    var callback = jest.fn();
    engine.addListener('onRecorderInfoUpdated', callback);
    engine.removeListener('onRecorderInfoUpdated');
    (0, IrisApiEngine_1.emitEvent)('onRecorderInfoUpdated', IrisApiEngine_1.EVENT_PROCESSORS.IMediaRecorderObserver, {
        nativeHandle: nativeHandle,
    });
    expect(callback).not.toBeCalled();
});
test('removeAllListenersWithEventType', function () {
    var engine = (0, CmviotSdk_1.default)().createMediaRecorder({});
    var callback1 = jest.fn();
    var callback2 = jest.fn();
    engine.addListener('onRecorderInfoUpdated', callback1);
    engine.addListener('onRecorderInfoUpdated', callback2);
    engine.removeAllListeners('onRecorderInfoUpdated');
    (0, IrisApiEngine_1.emitEvent)('onRecorderInfoUpdated', IrisApiEngine_1.EVENT_PROCESSORS.IMediaRecorderObserver, {
        nativeHandle: nativeHandle,
    });
    expect(callback1).not.toBeCalled();
    expect(callback2).not.toBeCalled();
});
test('removeAllListeners', function () {
    var engine = (0, CmviotSdk_1.default)().createMediaRecorder({});
    var callback1 = jest.fn();
    var callback2 = jest.fn();
    engine.addListener('onRecorderInfoUpdated', callback1);
    engine.addListener('onRecorderStateChanged', callback2);
    engine.removeAllListeners();
    (0, IrisApiEngine_1.emitEvent)('onRecorderInfoUpdated', IrisApiEngine_1.EVENT_PROCESSORS.IMediaRecorderObserver, {
        nativeHandle: nativeHandle,
    });
    (0, IrisApiEngine_1.emitEvent)('onRecorderStateChanged', IrisApiEngine_1.EVENT_PROCESSORS.IMediaRecorderObserver, {
        nativeHandle: nativeHandle,
    });
    expect(callback1).not.toBeCalled();
    expect(callback2).not.toBeCalled();
});
var IrisApiEngine_1 = require("../Private/internal/IrisApiEngine");
