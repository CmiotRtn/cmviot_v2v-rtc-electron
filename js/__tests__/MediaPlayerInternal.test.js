"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CmviotSdk_1 = __importDefault(require("../CmviotSdk"));
var playerId = 1;
jest.mock('../../build/Release/cmviot_node_ext', function () {
    return {
        CmviotElectronBridge: function () {
            return {
                CallApi: function () {
                    return {
                        callApiReturnCode: 0,
                        callApiResult: JSON.stringify({ result: playerId }),
                    };
                },
                OnEvent: function () { },
            };
        },
    };
});
test('addListener', function () {
    var engine = (0, CmviotSdk_1.default)().createMediaPlayer();
    var callback = jest.fn();
    engine.addListener('onCmviotCDNTokenWillExpire', callback);
    (0, IrisApiEngine_1.emitEvent)('onCmviotCDNTokenWillExpire', IrisApiEngine_1.EVENT_PROCESSORS.IMediaPlayerSourceObserver, { playerId: playerId });
    expect(callback).toBeCalledTimes(1);
});
test('addListenerWithWrongData', function () {
    var engine = (0, CmviotSdk_1.default)().createMediaPlayer();
    var callback = jest.fn();
    engine.addListener('onCmviotCDNTokenWillExpire', callback);
    (0, IrisApiEngine_1.emitEvent)('onCmviotCDNTokenWillExpire', IrisApiEngine_1.EVENT_PROCESSORS.IMediaPlayerSourceObserver, { playerId: 2 });
    expect(callback).not.toBeCalled();
});
test('addListenerWithSameEventTypeAndCallback', function () {
    var engine = (0, CmviotSdk_1.default)().createMediaPlayer();
    var callback = jest.fn();
    engine.addListener('onCmviotCDNTokenWillExpire', callback);
    engine.addListener('onCmviotCDNTokenWillExpire', callback);
    (0, IrisApiEngine_1.emitEvent)('onCmviotCDNTokenWillExpire', IrisApiEngine_1.EVENT_PROCESSORS.IMediaPlayerSourceObserver, { playerId: playerId });
    expect(callback).toBeCalledTimes(2);
});
test('addListenerWithSameCallback', function () {
    var engine = (0, CmviotSdk_1.default)().createMediaPlayer();
    var callback = jest.fn();
    engine.addListener('onCmviotCDNTokenWillExpire', callback);
    engine.addListener('onFrame', callback);
    (0, IrisApiEngine_1.emitEvent)('onCmviotCDNTokenWillExpire', IrisApiEngine_1.EVENT_PROCESSORS.IMediaPlayerSourceObserver, { playerId: playerId });
    (0, IrisApiEngine_1.emitEvent)('onFrame', IrisApiEngine_1.EVENT_PROCESSORS.IMediaPlayerVideoFrameObserver, {
        playerId: playerId,
    });
    expect(callback).toBeCalledTimes(2);
});
test('removeListener', function () {
    var engine = (0, CmviotSdk_1.default)().createMediaPlayer();
    var callback = jest.fn();
    engine.addListener('onCmviotCDNTokenWillExpire', callback);
    engine.removeListener('onCmviotCDNTokenWillExpire', callback);
    (0, IrisApiEngine_1.emitEvent)('onCmviotCDNTokenWillExpire', IrisApiEngine_1.EVENT_PROCESSORS.IMediaPlayerSourceObserver, { playerId: playerId });
    expect(callback).not.toBeCalled();
});
test('removeListenerWithoutCallback', function () {
    var engine = (0, CmviotSdk_1.default)().createMediaPlayer();
    var callback = jest.fn();
    engine.addListener('onCmviotCDNTokenWillExpire', callback);
    engine.removeListener('onCmviotCDNTokenWillExpire');
    (0, IrisApiEngine_1.emitEvent)('onCmviotCDNTokenWillExpire', IrisApiEngine_1.EVENT_PROCESSORS.IMediaPlayerSourceObserver, { playerId: playerId });
    expect(callback).not.toBeCalled();
});
test('removeAllListenersWithEventType', function () {
    var engine = (0, CmviotSdk_1.default)().createMediaPlayer();
    var callback1 = jest.fn();
    var callback2 = jest.fn();
    engine.addListener('onCmviotCDNTokenWillExpire', callback1);
    engine.addListener('onCmviotCDNTokenWillExpire', callback2);
    engine.removeAllListeners('onCmviotCDNTokenWillExpire');
    (0, IrisApiEngine_1.emitEvent)('onCmviotCDNTokenWillExpire', IrisApiEngine_1.EVENT_PROCESSORS.IMediaPlayerSourceObserver, { playerId: playerId });
    expect(callback1).not.toBeCalled();
    expect(callback2).not.toBeCalled();
});
test('removeAllListeners', function () {
    var engine = (0, CmviotSdk_1.default)().createMediaPlayer();
    var callback1 = jest.fn();
    var callback2 = jest.fn();
    engine.addListener('onCmviotCDNTokenWillExpire', callback1);
    engine.addListener('onFrame', callback2);
    engine.removeAllListeners();
    (0, IrisApiEngine_1.emitEvent)('onCmviotCDNTokenWillExpire', IrisApiEngine_1.EVENT_PROCESSORS.IMediaPlayerSourceObserver, { playerId: playerId });
    (0, IrisApiEngine_1.emitEvent)('onFrame', IrisApiEngine_1.EVENT_PROCESSORS.IMediaPlayerVideoFrameObserver, {
        playerId: playerId,
    });
    expect(callback1).not.toBeCalled();
    expect(callback2).not.toBeCalled();
});
var IrisApiEngine_1 = require("../Private/internal/IrisApiEngine");
