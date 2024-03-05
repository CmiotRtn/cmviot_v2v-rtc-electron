import EventEmitter from 'eventemitter3';
import JSON from 'json-bigint';

import { CmviotEnv } from '../../Utils';
import { IAudioEncodedFrameObserver } from '../CmviotBase';
import {
  AudioFrame,
  AudioPcmFrame,
  IAudioFrameObserver,
  IAudioPcmFrameSink,
  IAudioSpectrumObserver,
  IMediaRecorderObserver,
  IVideoEncodedFrameObserver,
  IVideoFrameObserver,
  VideoFrame,
} from '../CmviotMediaBase';
import {
  IMediaPlayer,
  IMediaPlayerVideoFrameObserver,
} from '../ICmviotMediaPlayer';
import { IMediaPlayerSourceObserver } from '../ICmviotMediaPlayerSource';
import {
  IMusicContentCenterEventHandler,
  MusicCollection,
} from '../ICmviotMusicContentCenter';
import {
  IDirectCdnStreamingEventHandler,
  IMetadataObserver,
  IRtcEngineEventHandler,
  Metadata,
} from '../ICmviotRtcEngine';
import { processIAudioEncodedFrameObserver } from '../impl/CmviotBaseImpl';
import {
  processIAudioFrameObserver,
  processIAudioFrameObserverBase,
  processIAudioPcmFrameSink,
  processIAudioSpectrumObserver,
  processIMediaRecorderObserver,
  processIVideoEncodedFrameObserver,
  processIVideoFrameObserver,
} from '../impl/CmviotMediaBaseImpl';
import { processIMediaPlayerVideoFrameObserver } from '../impl/ICmviotMediaPlayerImpl';
import { processIMediaPlayerSourceObserver } from '../impl/ICmviotMediaPlayerSourceImpl';
import { processIMusicContentCenterEventHandler } from '../impl/ICmviotMusicContentCenterImpl';
import {
  processIDirectCdnStreamingEventHandler,
  processIMetadataObserver,
  processIRtcEngineEventHandler,
} from '../impl/ICmviotRtcEngineImpl';

import { MediaEngineInternal } from './MediaEngineInternal';
import { MediaPlayerInternal } from './MediaPlayerInternal';
import { MediaRecorderInternal } from './MediaRecorderInternal';
import {
  MusicCollectionInternal,
  MusicContentCenterInternal,
} from './MusicContentCenterInternal';
import { RtcEngineExInternal } from './RtcEngineExInternal';

// @ts-ignore
export const DeviceEventEmitter: EventEmitter = new EventEmitter();

const CmviotRtcNg = CmviotEnv.CmviotElectronBridge;
CmviotRtcNg.OnEvent('call_back_with_buffer', (...params: any) => {
  try {
    handleEvent(...params);
  } catch (e) {
    console.error(e);
  }
});

/**
 * @internal
 */
export function setDebuggable(flag: boolean) {
  CmviotEnv.enableLogging = flag;
  CmviotEnv.enableDebugLogging = flag;
}

/**
 * @internal
 */
export function isDebuggable() {
  return CmviotEnv.enableLogging && CmviotEnv.enableDebugLogging;
}

/**
 * @internal
 */
export type EventProcessor<T extends ProcessorType> = {
  suffix: string;
  type: (data: any) => EVENT_TYPE;
  func: Function[];
  preprocess?: (event: string, data: any, buffers: Uint8Array[]) => void;
  handlers: (data: any) => (T | undefined)[] | undefined;
};

export enum EVENT_TYPE {
  IMediaEngine,
  IMediaPlayer,
  IMediaRecorder,
  IRtcEngine,
  IMusicContentCenter,
}

type ProcessorType =
  | IAudioFrameObserver
  | IVideoFrameObserver
  | IAudioSpectrumObserver
  | IAudioEncodedFrameObserver
  | IVideoEncodedFrameObserver
  | IMediaPlayerSourceObserver
  | IAudioPcmFrameSink
  | IMediaPlayerVideoFrameObserver
  | IMediaRecorderObserver
  | IMetadataObserver
  | IDirectCdnStreamingEventHandler
  | IRtcEngineEventHandler
  | IMusicContentCenterEventHandler;

type EventProcessors = {
  IAudioFrameObserver: EventProcessor<IAudioFrameObserver>;
  IVideoFrameObserver: EventProcessor<IVideoFrameObserver>;
  IAudioSpectrumObserver: EventProcessor<IAudioSpectrumObserver>;
  IAudioEncodedFrameObserver: EventProcessor<IAudioEncodedFrameObserver>;
  IVideoEncodedFrameObserver: EventProcessor<IVideoEncodedFrameObserver>;
  IMediaPlayerSourceObserver: EventProcessor<IMediaPlayerSourceObserver>;
  IAudioPcmFrameSink: EventProcessor<IAudioPcmFrameSink>;
  IMediaPlayerVideoFrameObserver: EventProcessor<IMediaPlayerVideoFrameObserver>;
  IMediaRecorderObserver: EventProcessor<IMediaRecorderObserver>;
  IMetadataObserver: EventProcessor<IMetadataObserver>;
  IDirectCdnStreamingEventHandler: EventProcessor<IDirectCdnStreamingEventHandler>;
  IRtcEngineEventHandler: EventProcessor<IRtcEngineEventHandler>;
  IMusicContentCenterEventHandler: EventProcessor<IMusicContentCenterEventHandler>;
};

/**
 * @internal
 */
export const EVENT_PROCESSORS: EventProcessors = {
  IAudioFrameObserver: {
    suffix: 'AudioFrameObserver_',
    type: () => EVENT_TYPE.IMediaEngine,
    func: [processIAudioFrameObserver, processIAudioFrameObserverBase],
    preprocess: (
      event: string,
      data: { audioFrame?: AudioFrame },
      buffers: Uint8Array[]
    ) => {
      if (data.audioFrame) {
        data.audioFrame.buffer = buffers[0];
      }
    },
    handlers: () => MediaEngineInternal._audio_frame_observers,
  },
  IVideoFrameObserver: {
    suffix: 'VideoFrameObserver_',
    type: () => EVENT_TYPE.IMediaEngine,
    func: [processIVideoFrameObserver],
    preprocess: (
      event: string,
      data: { videoFrame?: VideoFrame },
      buffers: Uint8Array[]
    ) => {
      if (data.videoFrame) {
        data.videoFrame.yBuffer = buffers[0];
        data.videoFrame.uBuffer = buffers[1];
        data.videoFrame.vBuffer = buffers[2];
        data.videoFrame.metadata_buffer = buffers[3];
        data.videoFrame.alphaBuffer = buffers[4];
      }
    },
    handlers: () => MediaEngineInternal._video_frame_observers,
  },
  IAudioSpectrumObserver: {
    suffix: 'AudioSpectrumObserver_',
    type: (data: any) =>
      data.playerId === 0 ? EVENT_TYPE.IRtcEngine : EVENT_TYPE.IMediaPlayer,
    func: [processIAudioSpectrumObserver],
    handlers: (data: any) =>
      data.playerId === 0
        ? RtcEngineExInternal._audio_spectrum_observers
        : MediaPlayerInternal._audio_spectrum_observers.get(data.playerId),
  },
  IAudioEncodedFrameObserver: {
    suffix: 'AudioEncodedFrameObserver_',
    type: () => EVENT_TYPE.IRtcEngine,
    func: [processIAudioEncodedFrameObserver],
    preprocess: (
      event: string,
      data: {
        frameBuffer?: Uint8Array;
      },
      buffers: Uint8Array[]
    ) => {
      switch (event) {
        case 'OnRecordAudioEncodedFrame':
        case 'OnPlaybackAudioEncodedFrame':
        case 'OnMixedAudioEncodedFrame':
          data.frameBuffer = buffers[0];
          break;
      }
    },
    handlers: () => RtcEngineExInternal._audio_encoded_frame_observers,
  },
  IVideoEncodedFrameObserver: {
    suffix: 'VideoEncodedFrameObserver_',
    type: () => EVENT_TYPE.IMediaEngine,
    func: [processIVideoEncodedFrameObserver],
    preprocess: (
      event: string,
      data: {
        imageBuffer?: Uint8Array;
      },
      buffers: Uint8Array[]
    ) => {
      switch (event) {
        case 'onEncodedVideoFrameReceived':
          data.imageBuffer = buffers[0];
          break;
      }
    },
    handlers: () => MediaEngineInternal._video_encoded_frame_observers,
  },
  IMediaPlayerSourceObserver: {
    suffix: 'MediaPlayerSourceObserver_',
    type: () => EVENT_TYPE.IMediaPlayer,
    func: [processIMediaPlayerSourceObserver],
    handlers: (data: any) =>
      MediaPlayerInternal._source_observers.get(data.playerId),
  },
  IAudioPcmFrameSink: {
    suffix: 'AudioPcmFrameSink_',
    type: () => EVENT_TYPE.IMediaPlayer,
    func: [processIAudioPcmFrameSink],
    preprocess: (
      event: string,
      data: { frame?: AudioPcmFrame },
      buffers: Uint8Array[]
    ) => {
      if (data.frame) {
        data.frame.data_ = Array.from(buffers[0] ?? []);
      }
    },
    handlers: (data: any) =>
      MediaPlayerInternal._audio_frame_observers.get(data.playerId),
  },
  IMediaPlayerVideoFrameObserver: {
    suffix: 'MediaPlayerVideoFrameObserver_',
    type: () => EVENT_TYPE.IMediaPlayer,
    func: [processIMediaPlayerVideoFrameObserver],
    preprocess: (
      event: string,
      data: { frame?: VideoFrame },
      buffers: Uint8Array[]
    ) => {
      if (data.frame) {
        data.frame.yBuffer = buffers[0];
        data.frame.uBuffer = buffers[1];
        data.frame.vBuffer = buffers[2];
        data.frame.metadata_buffer = buffers[3];
        data.frame.alphaBuffer = buffers[4];
      }
    },
    handlers: (data: any) =>
      MediaPlayerInternal._video_frame_observers.get(data.playerId),
  },
  IMediaRecorderObserver: {
    suffix: 'MediaRecorderObserver_',
    type: () => EVENT_TYPE.IMediaRecorder,
    func: [processIMediaRecorderObserver],
    handlers: (data: any) => [
      MediaRecorderInternal._observers.get(data.nativeHandle),
    ],
  },
  IMetadataObserver: {
    suffix: 'MetadataObserver_',
    type: () => EVENT_TYPE.IRtcEngine,
    func: [processIMetadataObserver],
    preprocess: (
      event: string,
      data: { metadata?: Metadata },
      buffers: Uint8Array[]
    ) => {
      switch (event) {
        case 'onMetadataReceived':
          if (data.metadata) {
            data.metadata.buffer = buffers[0];
          }
          break;
      }
    },
    handlers: () => RtcEngineExInternal._metadata_observer,
  },
  IDirectCdnStreamingEventHandler: {
    suffix: 'DirectCdnStreamingEventHandler_',
    type: () => EVENT_TYPE.IRtcEngine,
    func: [processIDirectCdnStreamingEventHandler],
    handlers: () => RtcEngineExInternal._direct_cdn_streaming_event_handler,
  },
  IRtcEngineEventHandler: {
    suffix: 'RtcEngineEventHandler_',
    type: () => EVENT_TYPE.IRtcEngine,
    func: [processIRtcEngineEventHandler],
    preprocess: (
      event: string,
      data: { data?: Uint8Array },
      buffers: Uint8Array[]
    ) => {
      switch (event) {
        case 'onStreamMessage':
        case 'onStreamMessageEx':
          data.data = buffers[0];
          break;
      }
    },
    handlers: () => RtcEngineExInternal._event_handlers,
  },
  IMusicContentCenterEventHandler: {
    suffix: 'MusicContentCenterEventHandler_',
    type: () => EVENT_TYPE.IMusicContentCenter,
    func: [processIMusicContentCenterEventHandler],
    preprocess: (
      event: string,
      data: { result: MusicCollection },
      buffers: Uint8Array[]
    ) => {
      switch (event) {
        case 'onMusicCollectionResult': {
          const result = data.result;
          data.result = new MusicCollectionInternal(result);
          break;
        }
      }
    },
    handlers: () => MusicContentCenterInternal._event_handlers,
  },
};

// some events are not needed, so ignore them
function isIgnoredEvent(event: string, data: any) {
  if (event === 'onLocalVideoStats' && 'connection' in data) {
    return true;
  } else {
    return false;
  }
}

function handleEvent(...[event, data, buffers]: any) {
  if (isDebuggable()) {
    console.info('onEvent', event, data, buffers);
  }

  let _data: any;
  try {
    _data = JSON.parse(data) ?? {};
  } catch (e) {
    _data = {};
  }

  let _event: string = event;
  let processor: EventProcessor<any> = EVENT_PROCESSORS.IRtcEngineEventHandler;

  Object.values(EVENT_PROCESSORS).some((it) => {
    const p = it as EventProcessor<any>;
    if (
      _event.startsWith(p.suffix) &&
      processor.handlers(_data) !== undefined
    ) {
      processor = p;
      const reg = new RegExp(`^${processor.suffix}`, 'g');
      _event = _event.replace(reg, '');
      return true;
    }
    return false;
  });

  if (_event.endsWith('Ex')) {
    _event = _event.replace(/Ex$/g, '');
  }

  if (isIgnoredEvent(_event, _data)) {
    return false;
  }
  const _buffers: Uint8Array[] = buffers;
  if (processor.preprocess) {
    processor.preprocess(_event, _data, _buffers);
  }

  if (processor.handlers) {
    processor.handlers(_data)?.map((value) => {
      if (value) {
        processor.func.map((it) => {
          it(value, _event, _data);
        });
      }
    });
  }

  emitEvent(_event, processor, _data);

  return true;
}

/**
 * @internal
 */
export function callIrisApi(funcName: string, params: any): any {
  try {
    const buffers: Uint8Array[] = [];

    if (funcName.startsWith('MediaEngine_')) {
      switch (funcName) {
        case 'MediaEngine_pushAudioFrame':
        case 'MediaEngine_pushCaptureAudioFrame':
        case 'MediaEngine_pushReverseAudioFrame':
        case 'MediaEngine_pushDirectAudioFrame':
          // frame.buffer
          buffers.push(params.frame.buffer);
          break;
        case 'MediaEngine_pushVideoFrame':
          // frame.buffer
          buffers.push(params.frame.buffer);
          // frame.eglContext
          buffers.push(Buffer.from(''));
          // frame.metadata_buffer
          buffers.push(Buffer.from(''));
          // frame.alphaBuffer
          buffers.push(params.frame.alphaBuffer);
          break;
        case 'MediaEngine_pushEncodedVideoImage':
          // imageBuffer
          buffers.push(params.imageBuffer);
          break;
      }
    } else if (
      funcName.startsWith('MediaPlayer_') ||
      funcName.startsWith('MusicPlayer_')
    ) {
      // @ts-ignore
      params.mediaPlayerId = (this as IMediaPlayer).getMediaPlayerId();
      const json = params.toJSON?.call();
      params.toJSON = function () {
        return { ...json, playerId: params.mediaPlayerId };
      };
    } else if (funcName.startsWith('MediaRecorder_')) {
      // @ts-ignore
      params.nativeHandle = (this as MediaRecorderInternal).nativeHandle;
      const json = params.toJSON?.call();
      params.toJSON = function () {
        return { ...json, nativeHandle: params.nativeHandle };
      };
    } else if (funcName.startsWith('RtcEngine_')) {
      switch (funcName) {
        case 'RtcEngine_initialize':
          CmviotRtcNg.InitializeEnv();
          break;
        case 'RtcEngine_release':
          CmviotRtcNg.CallApi(
            funcName,
            JSON.stringify(params),
            buffers,
            buffers.length
          );
          CmviotRtcNg.ReleaseEnv();
          return;
        case 'RtcEngine_sendMetaData':
          // metadata.buffer
          buffers.push(params.metadata.buffer);
          break;
        case 'RtcEngine_sendStreamMessage':
        case 'RtcEngine_sendStreamMessageEx':
          // data
          buffers.push(params.data);
          break;
        case 'RtcEngine_destroyMediaPlayer':
          params.mediaPlayerId = params.media_player.getMediaPlayerId();
          params.toJSON = function () {
            return { playerId: params.mediaPlayerId };
          };
          break;
        case 'RtcEngine_destroyMediaRecorder':
          // @ts-ignore
          params.nativeHandle = (this as MediaRecorderInternal).nativeHandle;
          params.toJSON = function () {
            return { nativeHandle: params.nativeHandle };
          };
          break;
      }
    }

    let { callApiReturnCode, callApiResult } = CmviotRtcNg.CallApi(
      funcName,
      JSON.stringify(params),
      buffers,
      buffers.length
    );
    let ret = callApiResult;
    if (ret !== undefined && ret !== null && ret !== '') {
      const retObj = JSON.parse(ret);
      if (isDebuggable()) {
        if (typeof retObj.result === 'number' && retObj.result < 0) {
          console.error('callApi', funcName, JSON.stringify(params), ret);
        } else {
          console.debug('callApi', funcName, JSON.stringify(params), ret);
        }
      }
      return retObj;
    } else {
      if (isDebuggable()) {
        console.error(
          'callApi',
          funcName,
          JSON.stringify(params),
          callApiReturnCode
        );
      } else {
        console.warn(
          'callApi',
          funcName,
          JSON.stringify(params),
          callApiReturnCode
        );
      }
      return { result: callApiReturnCode };
    }
  } catch (e) {
    if (isDebuggable()) {
      console.error('callApi', funcName, JSON.stringify(params), e);
    } else {
      console.warn('callApi', funcName, JSON.stringify(params), e);
    }
  }
  return {};
}

/**
 * @internal
 */
export function emitEvent<EventType extends keyof T, T extends ProcessorType>(
  eventType: EventType,
  eventProcessor: EventProcessor<T>,
  data: any
): void {
  DeviceEventEmitter.emit(eventType as string, eventProcessor, data);
}
