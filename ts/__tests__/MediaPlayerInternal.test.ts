import createCmviotRtcEngine from '../CmviotSdk';

const playerId = 1;
jest.mock('../../build/Release/cmviot_node_ext', () => {
  return {
    CmviotElectronBridge: function () {
      return {
        CallApi: () => {
          return {
            callApiReturnCode: 0,
            callApiResult: JSON.stringify({ result: playerId }),
          };
        },
        OnEvent: () => {},
      };
    },
  };
});

test('addListener', () => {
  const engine = createCmviotRtcEngine().createMediaPlayer();
  const callback = jest.fn();
  engine.addListener('onCmviotCDNTokenWillExpire', callback);
  emitEvent(
    'onCmviotCDNTokenWillExpire',
    EVENT_PROCESSORS.IMediaPlayerSourceObserver,
    { playerId }
  );
  expect(callback).toBeCalledTimes(1);
});

test('addListenerWithWrongData', () => {
  const engine = createCmviotRtcEngine().createMediaPlayer();
  const callback = jest.fn();
  engine.addListener('onCmviotCDNTokenWillExpire', callback);
  emitEvent(
    'onCmviotCDNTokenWillExpire',
    EVENT_PROCESSORS.IMediaPlayerSourceObserver,
    { playerId: 2 }
  );
  expect(callback).not.toBeCalled();
});

test('addListenerWithSameEventTypeAndCallback', () => {
  const engine = createCmviotRtcEngine().createMediaPlayer();
  const callback = jest.fn();
  engine.addListener('onCmviotCDNTokenWillExpire', callback);
  engine.addListener('onCmviotCDNTokenWillExpire', callback);
  emitEvent(
    'onCmviotCDNTokenWillExpire',
    EVENT_PROCESSORS.IMediaPlayerSourceObserver,
    { playerId }
  );
  expect(callback).toBeCalledTimes(2);
});

test('addListenerWithSameCallback', () => {
  const engine = createCmviotRtcEngine().createMediaPlayer();
  const callback = jest.fn();
  engine.addListener('onCmviotCDNTokenWillExpire', callback);
  engine.addListener('onFrame', callback);
  emitEvent(
    'onCmviotCDNTokenWillExpire',
    EVENT_PROCESSORS.IMediaPlayerSourceObserver,
    { playerId }
  );
  emitEvent('onFrame', EVENT_PROCESSORS.IMediaPlayerVideoFrameObserver, {
    playerId,
  });
  expect(callback).toBeCalledTimes(2);
});

test('removeListener', () => {
  const engine = createCmviotRtcEngine().createMediaPlayer();
  const callback = jest.fn();
  engine.addListener('onCmviotCDNTokenWillExpire', callback);
  engine.removeListener('onCmviotCDNTokenWillExpire', callback);
  emitEvent(
    'onCmviotCDNTokenWillExpire',
    EVENT_PROCESSORS.IMediaPlayerSourceObserver,
    { playerId }
  );
  expect(callback).not.toBeCalled();
});

test('removeListenerWithoutCallback', () => {
  const engine = createCmviotRtcEngine().createMediaPlayer();
  const callback = jest.fn();
  engine.addListener('onCmviotCDNTokenWillExpire', callback);
  engine.removeListener('onCmviotCDNTokenWillExpire');
  emitEvent(
    'onCmviotCDNTokenWillExpire',
    EVENT_PROCESSORS.IMediaPlayerSourceObserver,
    { playerId }
  );
  expect(callback).not.toBeCalled();
});

test('removeAllListenersWithEventType', () => {
  const engine = createCmviotRtcEngine().createMediaPlayer();
  const callback1 = jest.fn();
  const callback2 = jest.fn();
  engine.addListener('onCmviotCDNTokenWillExpire', callback1);
  engine.addListener('onCmviotCDNTokenWillExpire', callback2);
  engine.removeAllListeners('onCmviotCDNTokenWillExpire');
  emitEvent(
    'onCmviotCDNTokenWillExpire',
    EVENT_PROCESSORS.IMediaPlayerSourceObserver,
    { playerId }
  );
  expect(callback1).not.toBeCalled();
  expect(callback2).not.toBeCalled();
});

test('removeAllListeners', () => {
  const engine = createCmviotRtcEngine().createMediaPlayer();
  const callback1 = jest.fn();
  const callback2 = jest.fn();
  engine.addListener('onCmviotCDNTokenWillExpire', callback1);
  engine.addListener('onFrame', callback2);
  engine.removeAllListeners();
  emitEvent(
    'onCmviotCDNTokenWillExpire',
    EVENT_PROCESSORS.IMediaPlayerSourceObserver,
    { playerId }
  );
  emitEvent('onFrame', EVENT_PROCESSORS.IMediaPlayerVideoFrameObserver, {
    playerId,
  });
  expect(callback1).not.toBeCalled();
  expect(callback2).not.toBeCalled();
});

import { EVENT_PROCESSORS, emitEvent } from '../Private/internal/IrisApiEngine';
