import createCmviotRtcEngine from '../CmviotSdk';

const nativeHandle = 1;
jest.mock('../../build/Release/cmviot_node_ext', () => {
  return {
    CmviotElectronBridge: function () {
      return {
        CallApi: () => {
          return {
            callApiReturnCode: 0,
            callApiResult: JSON.stringify({ result: nativeHandle }),
          };
        },
        OnEvent: () => {},
      };
    },
  };
});

test('addListener', () => {
  const engine = createCmviotRtcEngine().createMediaRecorder({});
  const callback = jest.fn();
  engine.addListener('onRecorderInfoUpdated', callback);
  emitEvent('onRecorderInfoUpdated', EVENT_PROCESSORS.IMediaRecorderObserver, {
    nativeHandle,
  });
  expect(callback).toBeCalledTimes(1);
});

test('addListenerWithWrongData', () => {
  const engine = createCmviotRtcEngine().createMediaRecorder({});
  const callback = jest.fn();
  engine.addListener('onRecorderInfoUpdated', callback);
  emitEvent('onRecorderInfoUpdated', EVENT_PROCESSORS.IMediaRecorderObserver, {
    nativeHandle: 2,
  });
  expect(callback).not.toBeCalled();
});

test('addListenerWithSameEventTypeAndCallback', () => {
  const engine = createCmviotRtcEngine().createMediaRecorder({});
  const callback = jest.fn();
  engine.addListener('onRecorderInfoUpdated', callback);
  engine.addListener('onRecorderInfoUpdated', callback);
  emitEvent('onRecorderInfoUpdated', EVENT_PROCESSORS.IMediaRecorderObserver, {
    nativeHandle,
  });
  expect(callback).toBeCalledTimes(2);
});

test('addListenerWithSameCallback', () => {
  const engine = createCmviotRtcEngine().createMediaRecorder({});
  const callback = jest.fn();
  engine.addListener('onRecorderInfoUpdated', callback);
  engine.addListener('onRecorderStateChanged', callback);
  emitEvent('onRecorderInfoUpdated', EVENT_PROCESSORS.IMediaRecorderObserver, {
    nativeHandle,
  });
  emitEvent('onRecorderStateChanged', EVENT_PROCESSORS.IMediaRecorderObserver, {
    nativeHandle,
  });
  expect(callback).toBeCalledTimes(2);
});

test('removeListener', () => {
  const engine = createCmviotRtcEngine().createMediaRecorder({});
  const callback = jest.fn();
  engine.addListener('onRecorderInfoUpdated', callback);
  engine.removeListener('onRecorderInfoUpdated', callback);
  emitEvent('onRecorderInfoUpdated', EVENT_PROCESSORS.IMediaRecorderObserver, {
    nativeHandle,
  });
  expect(callback).not.toBeCalled();
});

test('removeListenerWithoutCallback', () => {
  const engine = createCmviotRtcEngine().createMediaRecorder({});
  const callback = jest.fn();
  engine.addListener('onRecorderInfoUpdated', callback);
  engine.removeListener('onRecorderInfoUpdated');
  emitEvent('onRecorderInfoUpdated', EVENT_PROCESSORS.IMediaRecorderObserver, {
    nativeHandle,
  });
  expect(callback).not.toBeCalled();
});

test('removeAllListenersWithEventType', () => {
  const engine = createCmviotRtcEngine().createMediaRecorder({});
  const callback1 = jest.fn();
  const callback2 = jest.fn();
  engine.addListener('onRecorderInfoUpdated', callback1);
  engine.addListener('onRecorderInfoUpdated', callback2);
  engine.removeAllListeners('onRecorderInfoUpdated');
  emitEvent('onRecorderInfoUpdated', EVENT_PROCESSORS.IMediaRecorderObserver, {
    nativeHandle,
  });
  expect(callback1).not.toBeCalled();
  expect(callback2).not.toBeCalled();
});

test('removeAllListeners', () => {
  const engine = createCmviotRtcEngine().createMediaRecorder({});
  const callback1 = jest.fn();
  const callback2 = jest.fn();
  engine.addListener('onRecorderInfoUpdated', callback1);
  engine.addListener('onRecorderStateChanged', callback2);
  engine.removeAllListeners();
  emitEvent('onRecorderInfoUpdated', EVENT_PROCESSORS.IMediaRecorderObserver, {
    nativeHandle,
  });
  emitEvent('onRecorderStateChanged', EVENT_PROCESSORS.IMediaRecorderObserver, {
    nativeHandle,
  });
  expect(callback1).not.toBeCalled();
  expect(callback2).not.toBeCalled();
});

import { EVENT_PROCESSORS, emitEvent } from '../Private/internal/IrisApiEngine';
