import createCmviotRtcEngine from '../CmviotSdk';

jest.mock('../../build/Release/cmviot_node_ext', () => {
  return {
    CmviotElectronBridge: function () {
      return {
        CallApi: () => {
          return {
            callApiReturnCode: 0,
            callApiResult: JSON.stringify({ result: 0 }),
          };
        },
        OnEvent: () => {},
      };
    },
  };
});

test('addListener', () => {
  const engine = createCmviotRtcEngine();
  const callback = jest.fn();
  engine.addListener('onJoinChannelSuccess', callback);
  emitEvent(
    'onJoinChannelSuccess',
    EVENT_PROCESSORS.IRtcEngineEventHandler,
    {}
  );
  expect(callback).toBeCalledTimes(1);
});

test('addListenerWithSameEventTypeAndCallback', () => {
  const engine = createCmviotRtcEngine();
  const callback = jest.fn();
  engine.addListener('onJoinChannelSuccess', callback);
  engine.addListener('onJoinChannelSuccess', callback);
  emitEvent(
    'onJoinChannelSuccess',
    EVENT_PROCESSORS.IRtcEngineEventHandler,
    {}
  );
  expect(callback).toBeCalledTimes(2);
});

test('addListenerWithSameCallback', () => {
  const engine = createCmviotRtcEngine();
  const callback = jest.fn();
  engine.addListener('onJoinChannelSuccess', callback);
  engine.addListener('onRejoinChannelSuccess', callback);
  emitEvent(
    'onJoinChannelSuccess',
    EVENT_PROCESSORS.IRtcEngineEventHandler,
    {}
  );
  emitEvent(
    'onRejoinChannelSuccess',
    EVENT_PROCESSORS.IRtcEngineEventHandler,
    {}
  );
  expect(callback).toBeCalledTimes(2);
});

test('removeListener', () => {
  const engine = createCmviotRtcEngine();
  const callback = jest.fn();
  engine.addListener('onJoinChannelSuccess', callback);
  engine.removeListener('onJoinChannelSuccess', callback);
  emitEvent(
    'onJoinChannelSuccess',
    EVENT_PROCESSORS.IRtcEngineEventHandler,
    {}
  );
  expect(callback).not.toBeCalled();
});

test('removeListenerWithoutCallback', () => {
  const engine = createCmviotRtcEngine();
  const callback = jest.fn();
  engine.addListener('onJoinChannelSuccess', callback);
  engine.removeListener('onJoinChannelSuccess');
  emitEvent(
    'onJoinChannelSuccess',
    EVENT_PROCESSORS.IRtcEngineEventHandler,
    {}
  );
  expect(callback).not.toBeCalled();
});

test('removeListenerWithDifferentCallback', () => {
  const engine = createCmviotRtcEngine();
  const callback1 = jest.fn();
  const callback2 = jest.fn();
  engine.addListener('onJoinChannelSuccess', callback1);
  engine.removeListener('onJoinChannelSuccess', callback2);
  emitEvent(
    'onJoinChannelSuccess',
    EVENT_PROCESSORS.IRtcEngineEventHandler,
    {}
  );
  expect(callback1).toBeCalledTimes(1);
});

test('removeAllListenersWithEventType', () => {
  const engine = createCmviotRtcEngine();
  const callback1 = jest.fn();
  const callback2 = jest.fn();
  engine.addListener('onJoinChannelSuccess', callback1);
  engine.addListener('onJoinChannelSuccess', callback2);
  engine.removeAllListeners('onJoinChannelSuccess');
  emitEvent(
    'onJoinChannelSuccess',
    EVENT_PROCESSORS.IRtcEngineEventHandler,
    {}
  );
  expect(callback1).not.toBeCalled();
  expect(callback2).not.toBeCalled();
});

test('removeAllListeners', () => {
  const engine = createCmviotRtcEngine();
  const callback1 = jest.fn();
  const callback2 = jest.fn();
  engine.addListener('onJoinChannelSuccess', callback1);
  engine.addListener('onRejoinChannelSuccess', callback2);
  engine.removeAllListeners();
  emitEvent(
    'onJoinChannelSuccess',
    EVENT_PROCESSORS.IRtcEngineEventHandler,
    {}
  );
  emitEvent(
    'onRejoinChannelSuccess',
    EVENT_PROCESSORS.IRtcEngineEventHandler,
    {}
  );
  expect(callback1).not.toBeCalled();
  expect(callback2).not.toBeCalled();
});

import { EVENT_PROCESSORS, emitEvent } from '../Private/internal/IrisApiEngine';
