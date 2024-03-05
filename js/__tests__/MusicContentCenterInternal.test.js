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
    var engine = (0, CmviotSdk_1.default)().getMusicContentCenter();
    var callback = jest.fn();
    engine.addListener('onMusicChartsResult', callback);
    (0, IrisApiEngine_1.emitEvent)('onMusicChartsResult', IrisApiEngine_1.EVENT_PROCESSORS.IMusicContentCenterEventHandler, {});
    expect(callback).toBeCalledTimes(1);
});
test('addListenerWithSameEventTypeAndCallback', function () {
    var engine = (0, CmviotSdk_1.default)().getMusicContentCenter();
    var callback = jest.fn();
    engine.addListener('onMusicChartsResult', callback);
    engine.addListener('onMusicChartsResult', callback);
    (0, IrisApiEngine_1.emitEvent)('onMusicChartsResult', IrisApiEngine_1.EVENT_PROCESSORS.IMusicContentCenterEventHandler, {});
    expect(callback).toBeCalledTimes(2);
});
test('addListenerWithSameCallback', function () {
    var engine = (0, CmviotSdk_1.default)().getMusicContentCenter();
    var callback = jest.fn();
    engine.addListener('onMusicChartsResult', callback);
    engine.addListener('onMusicCollectionResult', callback);
    (0, IrisApiEngine_1.emitEvent)('onMusicChartsResult', IrisApiEngine_1.EVENT_PROCESSORS.IMusicContentCenterEventHandler, {});
    (0, IrisApiEngine_1.emitEvent)('onMusicCollectionResult', IrisApiEngine_1.EVENT_PROCESSORS.IMusicContentCenterEventHandler, {});
    expect(callback).toBeCalledTimes(2);
});
test('removeListener', function () {
    var engine = (0, CmviotSdk_1.default)().getMusicContentCenter();
    var callback = jest.fn();
    engine.addListener('onMusicChartsResult', callback);
    engine.removeListener('onMusicChartsResult', callback);
    (0, IrisApiEngine_1.emitEvent)('onMusicChartsResult', IrisApiEngine_1.EVENT_PROCESSORS.IMusicContentCenterEventHandler, {});
    expect(callback).not.toBeCalled();
});
test('removeListenerWithoutCallback', function () {
    var engine = (0, CmviotSdk_1.default)().getMusicContentCenter();
    var callback = jest.fn();
    engine.addListener('onMusicChartsResult', callback);
    engine.removeListener('onMusicChartsResult');
    (0, IrisApiEngine_1.emitEvent)('onMusicChartsResult', IrisApiEngine_1.EVENT_PROCESSORS.IMusicContentCenterEventHandler, {});
    expect(callback).not.toBeCalled();
});
test('removeAllListenersWithEventType', function () {
    var engine = (0, CmviotSdk_1.default)().getMusicContentCenter();
    var callback1 = jest.fn();
    var callback2 = jest.fn();
    engine.addListener('onMusicChartsResult', callback1);
    engine.addListener('onMusicChartsResult', callback2);
    engine.removeAllListeners('onMusicChartsResult');
    (0, IrisApiEngine_1.emitEvent)('onMusicChartsResult', IrisApiEngine_1.EVENT_PROCESSORS.IMusicContentCenterEventHandler, {});
    expect(callback1).not.toBeCalled();
    expect(callback2).not.toBeCalled();
});
test('removeAllListeners', function () {
    var engine = (0, CmviotSdk_1.default)().getMusicContentCenter();
    var callback1 = jest.fn();
    var callback2 = jest.fn();
    engine.addListener('onMusicChartsResult', callback1);
    engine.addListener('onMusicCollectionResult', callback2);
    engine.removeAllListeners();
    (0, IrisApiEngine_1.emitEvent)('onMusicChartsResult', IrisApiEngine_1.EVENT_PROCESSORS.IMusicContentCenterEventHandler, {});
    (0, IrisApiEngine_1.emitEvent)('onMusicCollectionResult', IrisApiEngine_1.EVENT_PROCESSORS.IMusicContentCenterEventHandler, {});
    expect(callback1).not.toBeCalled();
    expect(callback2).not.toBeCalled();
});
var IrisApiEngine_1 = require("../Private/internal/IrisApiEngine");
