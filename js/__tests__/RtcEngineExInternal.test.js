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
    var engine = (0, CmviotSdk_1.default)();
    var callback = jest.fn();
    engine.addListener('onJoinChannelSuccess', callback);
    (0, IrisApiEngine_1.emitEvent)('onJoinChannelSuccess', IrisApiEngine_1.EVENT_PROCESSORS.IRtcEngineEventHandler, {});
    expect(callback).toBeCalledTimes(1);
});
test('addListenerWithSameEventTypeAndCallback', function () {
    var engine = (0, CmviotSdk_1.default)();
    var callback = jest.fn();
    engine.addListener('onJoinChannelSuccess', callback);
    engine.addListener('onJoinChannelSuccess', callback);
    (0, IrisApiEngine_1.emitEvent)('onJoinChannelSuccess', IrisApiEngine_1.EVENT_PROCESSORS.IRtcEngineEventHandler, {});
    expect(callback).toBeCalledTimes(2);
});
test('addListenerWithSameCallback', function () {
    var engine = (0, CmviotSdk_1.default)();
    var callback = jest.fn();
    engine.addListener('onJoinChannelSuccess', callback);
    engine.addListener('onRejoinChannelSuccess', callback);
    (0, IrisApiEngine_1.emitEvent)('onJoinChannelSuccess', IrisApiEngine_1.EVENT_PROCESSORS.IRtcEngineEventHandler, {});
    (0, IrisApiEngine_1.emitEvent)('onRejoinChannelSuccess', IrisApiEngine_1.EVENT_PROCESSORS.IRtcEngineEventHandler, {});
    expect(callback).toBeCalledTimes(2);
});
test('removeListener', function () {
    var engine = (0, CmviotSdk_1.default)();
    var callback = jest.fn();
    engine.addListener('onJoinChannelSuccess', callback);
    engine.removeListener('onJoinChannelSuccess', callback);
    (0, IrisApiEngine_1.emitEvent)('onJoinChannelSuccess', IrisApiEngine_1.EVENT_PROCESSORS.IRtcEngineEventHandler, {});
    expect(callback).not.toBeCalled();
});
test('removeListenerWithoutCallback', function () {
    var engine = (0, CmviotSdk_1.default)();
    var callback = jest.fn();
    engine.addListener('onJoinChannelSuccess', callback);
    engine.removeListener('onJoinChannelSuccess');
    (0, IrisApiEngine_1.emitEvent)('onJoinChannelSuccess', IrisApiEngine_1.EVENT_PROCESSORS.IRtcEngineEventHandler, {});
    expect(callback).not.toBeCalled();
});
test('removeListenerWithDifferentCallback', function () {
    var engine = (0, CmviotSdk_1.default)();
    var callback1 = jest.fn();
    var callback2 = jest.fn();
    engine.addListener('onJoinChannelSuccess', callback1);
    engine.removeListener('onJoinChannelSuccess', callback2);
    (0, IrisApiEngine_1.emitEvent)('onJoinChannelSuccess', IrisApiEngine_1.EVENT_PROCESSORS.IRtcEngineEventHandler, {});
    expect(callback1).toBeCalledTimes(1);
});
test('removeAllListenersWithEventType', function () {
    var engine = (0, CmviotSdk_1.default)();
    var callback1 = jest.fn();
    var callback2 = jest.fn();
    engine.addListener('onJoinChannelSuccess', callback1);
    engine.addListener('onJoinChannelSuccess', callback2);
    engine.removeAllListeners('onJoinChannelSuccess');
    (0, IrisApiEngine_1.emitEvent)('onJoinChannelSuccess', IrisApiEngine_1.EVENT_PROCESSORS.IRtcEngineEventHandler, {});
    expect(callback1).not.toBeCalled();
    expect(callback2).not.toBeCalled();
});
test('removeAllListeners', function () {
    var engine = (0, CmviotSdk_1.default)();
    var callback1 = jest.fn();
    var callback2 = jest.fn();
    engine.addListener('onJoinChannelSuccess', callback1);
    engine.addListener('onRejoinChannelSuccess', callback2);
    engine.removeAllListeners();
    (0, IrisApiEngine_1.emitEvent)('onJoinChannelSuccess', IrisApiEngine_1.EVENT_PROCESSORS.IRtcEngineEventHandler, {});
    (0, IrisApiEngine_1.emitEvent)('onRejoinChannelSuccess', IrisApiEngine_1.EVENT_PROCESSORS.IRtcEngineEventHandler, {});
    expect(callback1).not.toBeCalled();
    expect(callback2).not.toBeCalled();
});
var IrisApiEngine_1 = require("../Private/internal/IrisApiEngine");
