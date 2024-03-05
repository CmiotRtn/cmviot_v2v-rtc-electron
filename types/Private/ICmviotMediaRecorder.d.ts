import './extension/ICmviotMediaRecorderExtension';
import { IMediaRecorderObserver, MediaRecorderConfiguration } from './CmviotMediaBase';
export declare abstract class IMediaRecorder {
    abstract setMediaRecorderObserver(callback: IMediaRecorderObserver): number;
    abstract startRecording(config: MediaRecorderConfiguration): number;
    abstract stopRecording(): number;
}
//# sourceMappingURL=ICmviotMediaRecorder.d.ts.map