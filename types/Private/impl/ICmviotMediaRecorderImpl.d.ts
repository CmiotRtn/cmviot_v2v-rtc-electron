import { IMediaRecorderObserver, MediaRecorderConfiguration } from '../CmviotMediaBase';
import { IMediaRecorder } from '../ICmviotMediaRecorder';
export declare class IMediaRecorderImpl implements IMediaRecorder {
    setMediaRecorderObserver(callback: IMediaRecorderObserver): number;
    protected getApiTypeFromSetMediaRecorderObserver(callback: IMediaRecorderObserver): string;
    startRecording(config: MediaRecorderConfiguration): number;
    protected getApiTypeFromStartRecording(config: MediaRecorderConfiguration): string;
    stopRecording(): number;
    protected getApiTypeFromStopRecording(): string;
}
//# sourceMappingURL=ICmviotMediaRecorderImpl.d.ts.map