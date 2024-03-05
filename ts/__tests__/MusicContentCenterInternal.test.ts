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
  const engine = createCmviotRtcEngine().getMusicContentCenter();
  const callback = jest.fn();
  engine.addListener('onMusicChartsResult', callback);
  emitEvent(
    'onMusicChartsResult',
    EVENT_PROCESSORS.IMusicContentCenterEventHandler,
    {}
  );
  expect(callback).toBeCalledTimes(1);
});

test('addListenerWithSameEventTypeAndCallback', () => {
  const engine = createCmviotRtcEngine().getMusicContentCenter();
  const callback = jest.fn();
  engine.addListener('onMusicChartsResult', callback);
  engine.addListener('onMusicChartsResult', callback);
  emitEvent(
    'onMusicChartsResult',
    EVENT_PROCESSORS.IMusicContentCenterEventHandler,
    {}
  );
  expect(callback).toBeCalledTimes(2);
});

test('addListenerWithSameCallback', () => {
  const engine = createCmviotRtcEngine().getMusicContentCenter();
  const callback = jest.fn();
  engine.addListener('onMusicChartsResult', callback);
  engine.addListener('onMusicCollectionResult', callback);
  emitEvent(
    'onMusicChartsResult',
    EVENT_PROCESSORS.IMusicContentCenterEventHandler,
    {}
  );
  emitEvent(
    'onMusicCollectionResult',
    EVENT_PROCESSORS.IMusicContentCenterEventHandler,
    {}
  );
  expect(callback).toBeCalledTimes(2);
});

test('removeListener', () => {
  const engine = createCmviotRtcEngine().getMusicContentCenter();
  const callback = jest.fn();
  engine.addListener('onMusicChartsResult', callback);
  engine.removeListener('onMusicChartsResult', callback);
  emitEvent(
    'onMusicChartsResult',
    EVENT_PROCESSORS.IMusicContentCenterEventHandler,
    {}
  );
  expect(callback).not.toBeCalled();
});

test('removeListenerWithoutCallback', () => {
  const engine = createCmviotRtcEngine().getMusicContentCenter();
  const callback = jest.fn();
  engine.addListener('onMusicChartsResult', callback);
  engine.removeListener('onMusicChartsResult');
  emitEvent(
    'onMusicChartsResult',
    EVENT_PROCESSORS.IMusicContentCenterEventHandler,
    {}
  );
  expect(callback).not.toBeCalled();
});

test('removeAllListenersWithEventType', () => {
  const engine = createCmviotRtcEngine().getMusicContentCenter();
  const callback1 = jest.fn();
  const callback2 = jest.fn();
  engine.addListener('onMusicChartsResult', callback1);
  engine.addListener('onMusicChartsResult', callback2);
  engine.removeAllListeners('onMusicChartsResult');
  emitEvent(
    'onMusicChartsResult',
    EVENT_PROCESSORS.IMusicContentCenterEventHandler,
    {}
  );
  expect(callback1).not.toBeCalled();
  expect(callback2).not.toBeCalled();
});

test('removeAllListeners', () => {
  const engine = createCmviotRtcEngine().getMusicContentCenter();
  const callback1 = jest.fn();
  const callback2 = jest.fn();
  engine.addListener('onMusicChartsResult', callback1);
  engine.addListener('onMusicCollectionResult', callback2);
  engine.removeAllListeners();
  emitEvent(
    'onMusicChartsResult',
    EVENT_PROCESSORS.IMusicContentCenterEventHandler,
    {}
  );
  emitEvent(
    'onMusicCollectionResult',
    EVENT_PROCESSORS.IMusicContentCenterEventHandler,
    {}
  );
  expect(callback1).not.toBeCalled();
  expect(callback2).not.toBeCalled();
});

import { EVENT_PROCESSORS, emitEvent } from '../Private/internal/IrisApiEngine';
