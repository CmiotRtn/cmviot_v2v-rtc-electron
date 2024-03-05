import './extension/ICmviotMediaRecorderExtension';
import {
  IMediaRecorderObserver,
  MediaRecorderConfiguration,
} from './CmviotMediaBase';

/* class_imediarecorder */
export abstract class IMediaRecorder {
  /* api_imediarecorder_setmediarecorderobserver */
  abstract setMediaRecorderObserver(callback: IMediaRecorderObserver): number;

  /* api_imediarecorder_startrecording */
  abstract startRecording(config: MediaRecorderConfiguration): number;

  /* api_imediarecorder_stoprecording */
  abstract stopRecording(): number;
}
