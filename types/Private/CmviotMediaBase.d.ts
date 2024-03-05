import './extension/CmviotMediaBaseExtension';
import { EncodedVideoFrameInfo } from './CmviotBase';
export declare enum VideoSourceType {
    VideoSourceCameraPrimary = 0,
    VideoSourceCamera = 0,
    VideoSourceCameraSecondary = 1,
    VideoSourceScreenPrimary = 2,
    VideoSourceScreen = 2,
    VideoSourceScreenSecondary = 3,
    VideoSourceCustom = 4,
    VideoSourceMediaPlayer = 5,
    VideoSourceRtcImagePng = 6,
    VideoSourceRtcImageJpeg = 7,
    VideoSourceRtcImageGif = 8,
    VideoSourceRemote = 9,
    VideoSourceTranscoded = 10,
    VideoSourceCameraThird = 11,
    VideoSourceCameraFourth = 12,
    VideoSourceScreenThird = 13,
    VideoSourceScreenFourth = 14,
    VideoSourceUnknown = 100
}
export declare enum AudioRoute {
    RouteDefault = -1,
    RouteHeadset = 0,
    RouteEarpiece = 1,
    RouteHeadsetnomic = 2,
    RouteSpeakerphone = 3,
    RouteLoudspeaker = 4,
    RouteHeadsetbluetooth = 5,
    RouteUsb = 6,
    RouteHdmi = 7,
    RouteDisplayport = 8,
    RouteAirplay = 9
}
export declare enum BytesPerSample {
    TwoBytesPerSample = 2
}
export declare class AudioParameters {
    sample_rate?: number;
    channels?: number;
    frames_per_buffer?: number;
}
export declare enum RawAudioFrameOpModeType {
    RawAudioFrameOpModeReadOnly = 0,
    RawAudioFrameOpModeReadWrite = 2
}
export declare enum MediaSourceType {
    AudioPlayoutSource = 0,
    AudioRecordingSource = 1,
    PrimaryCameraSource = 2,
    SecondaryCameraSource = 3,
    PrimaryScreenSource = 4,
    SecondaryScreenSource = 5,
    CustomVideoSource = 6,
    MediaPlayerSource = 7,
    RtcImagePngSource = 8,
    RtcImageJpegSource = 9,
    RtcImageGifSource = 10,
    RemoteVideoSource = 11,
    TranscodedVideoSource = 12,
    UnknownMediaSource = 100
}
export declare enum ContentInspectResult {
    ContentInspectNeutral = 1,
    ContentInspectSexy = 2,
    ContentInspectPorn = 3
}
export declare enum ContentInspectType {
    ContentInspectInvalid = 0,
    ContentInspectModeration = 1,
    ContentInspectSupervision = 2
}
export declare class ContentInspectModule {
    type?: ContentInspectType;
    interval?: number;
}
export declare class ContentInspectConfig {
    extraInfo?: string;
    modules?: ContentInspectModule[];
    moduleCount?: number;
}
export declare class PacketOptions {
    timestamp?: number;
    audioLevelIndication?: number;
}
export declare class AudioEncodedFrameInfo {
    sendTs?: number;
    codec?: number;
}
export declare class AudioPcmFrame {
    capture_timestamp?: number;
    samples_per_channel_?: number;
    sample_rate_hz_?: number;
    num_channels_?: number;
    bytes_per_sample?: BytesPerSample;
    data_?: number[];
}
export declare enum AudioDualMonoMode {
    AudioDualMonoStereo = 0,
    AudioDualMonoL = 1,
    AudioDualMonoR = 2,
    AudioDualMonoMix = 3
}
export declare enum VideoPixelFormat {
    VideoPixelDefault = 0,
    VideoPixelI420 = 1,
    VideoPixelBgra = 2,
    VideoPixelNv21 = 3,
    VideoPixelRgba = 4,
    VideoPixelNv12 = 8,
    VideoTexture2d = 10,
    VideoTextureOes = 11,
    VideoCvpixelNv12 = 12,
    VideoCvpixelI420 = 13,
    VideoCvpixelBgra = 14,
    VideoPixelI422 = 16,
    VideoTextureId3d11texture2d = 17
}
export declare enum RenderModeType {
    RenderModeHidden = 1,
    RenderModeFit = 2,
    RenderModeAdaptive = 3
}
export declare enum CameraVideoSourceType {
    CameraSourceFront = 0,
    CameraSourceBack = 1,
    VideoSourceUnspecified = 2
}
export declare enum EglContextType {
    EglContext10 = 0,
    EglContext14 = 1
}
export declare enum VideoBufferType {
    VideoBufferRawData = 1,
    VideoBufferArray = 2,
    VideoBufferTexture = 3
}
export declare class ExternalVideoFrame {
    type?: VideoBufferType;
    format?: VideoPixelFormat;
    buffer?: Uint8Array;
    stride?: number;
    height?: number;
    cropLeft?: number;
    cropTop?: number;
    cropRight?: number;
    cropBottom?: number;
    rotation?: number;
    timestamp?: number;
    eglType?: EglContextType;
    textureId?: number;
    matrix?: number[];
    metadata_buffer?: Uint8Array;
    metadata_size?: number;
    alphaBuffer?: Uint8Array;
    texture_slice_index?: number;
}
export declare class VideoFrame {
    type?: VideoPixelFormat;
    width?: number;
    height?: number;
    yStride?: number;
    uStride?: number;
    vStride?: number;
    yBuffer?: Uint8Array;
    uBuffer?: Uint8Array;
    vBuffer?: Uint8Array;
    rotation?: number;
    renderTimeMs?: number;
    avsync_type?: number;
    metadata_buffer?: Uint8Array;
    metadata_size?: number;
    textureId?: number;
    matrix?: number[];
    alphaBuffer?: Uint8Array;
    pixelBuffer?: Uint8Array;
}
export declare enum MediaPlayerSourceType {
    MediaPlayerSourceDefault = 0,
    MediaPlayerSourceFullFeatured = 1,
    MediaPlayerSourceSimple = 2
}
export declare enum VideoModulePosition {
    PositionPostCapturer = 1,
    PositionPreRenderer = 2,
    PositionPreEncoder = 4
}
export interface IAudioPcmFrameSink {
    onFrame?(frame: AudioPcmFrame): void;
}
export declare enum AudioFrameType {
    FrameTypePcm16 = 0
}
export declare class AudioFrame {
    type?: AudioFrameType;
    samplesPerChannel?: number;
    bytesPerSample?: BytesPerSample;
    channels?: number;
    samplesPerSec?: number;
    buffer?: Uint8Array;
    renderTimeMs?: number;
    avsync_type?: number;
    presentationMs?: number;
}
export declare enum AudioFramePosition {
    AudioFramePositionNone = 0,
    AudioFramePositionPlayback = 1,
    AudioFramePositionRecord = 2,
    AudioFramePositionMixed = 4,
    AudioFramePositionBeforeMixing = 8,
    AudioFramePositionEarMonitoring = 16
}
export declare class AudioParams {
    sample_rate?: number;
    channels?: number;
    mode?: RawAudioFrameOpModeType;
    samples_per_call?: number;
}
export interface IAudioFrameObserverBase {
    onRecordAudioFrame?(channelId: string, audioFrame: AudioFrame): void;
    onPlaybackAudioFrame?(channelId: string, audioFrame: AudioFrame): void;
    onMixedAudioFrame?(channelId: string, audioFrame: AudioFrame): void;
    onEarMonitoringAudioFrame?(audioFrame: AudioFrame): void;
}
export interface IAudioFrameObserver extends IAudioFrameObserverBase {
    onPlaybackAudioFrameBeforeMixing?(channelId: string, uid: number, audioFrame: AudioFrame): void;
}
export declare class AudioSpectrumData {
    audioSpectrumData?: number[];
    dataLength?: number;
}
export declare class UserAudioSpectrumInfo {
    uid?: number;
    spectrumData?: AudioSpectrumData;
}
export interface IAudioSpectrumObserver {
    onLocalAudioSpectrum?(data: AudioSpectrumData): void;
    onRemoteAudioSpectrum?(spectrums: UserAudioSpectrumInfo[], spectrumNumber: number): void;
}
export interface IVideoEncodedFrameObserver {
    onEncodedVideoFrameReceived?(uid: number, imageBuffer: Uint8Array, length: number, videoEncodedFrameInfo: EncodedVideoFrameInfo): void;
}
export declare enum VideoFrameProcessMode {
    ProcessModeReadOnly = 0,
    ProcessModeReadWrite = 1
}
export interface IVideoFrameObserver {
    onCaptureVideoFrame?(sourceType: VideoSourceType, videoFrame: VideoFrame): void;
    onPreEncodeVideoFrame?(sourceType: VideoSourceType, videoFrame: VideoFrame): void;
    onMediaPlayerVideoFrame?(videoFrame: VideoFrame, mediaPlayerId: number): void;
    onRenderVideoFrame?(channelId: string, remoteUid: number, videoFrame: VideoFrame): void;
    onTranscodedVideoFrame?(videoFrame: VideoFrame): void;
}
export declare enum ExternalVideoSourceType {
    VideoFrame = 0,
    EncodedVideoFrame = 1
}
export declare enum MediaRecorderContainerFormat {
    FormatMp4 = 1
}
export declare enum MediaRecorderStreamType {
    StreamTypeAudio = 1,
    StreamTypeVideo = 2,
    StreamTypeBoth = 3
}
export declare enum RecorderState {
    RecorderStateError = -1,
    RecorderStateStart = 2,
    RecorderStateStop = 3
}
export declare enum RecorderErrorCode {
    RecorderErrorNone = 0,
    RecorderErrorWriteFailed = 1,
    RecorderErrorNoStream = 2,
    RecorderErrorOverMaxDuration = 3,
    RecorderErrorConfigChanged = 4
}
export declare class MediaRecorderConfiguration {
    storagePath?: string;
    containerFormat?: MediaRecorderContainerFormat;
    streamType?: MediaRecorderStreamType;
    maxDurationMs?: number;
    recorderInfoUpdateInterval?: number;
}
export declare class RecorderInfo {
    fileName?: string;
    durationMs?: number;
    fileSize?: number;
}
export interface IMediaRecorderObserver {
    onRecorderStateChanged?(channelId: string, uid: number, state: RecorderState, error: RecorderErrorCode): void;
    onRecorderInfoUpdated?(channelId: string, uid: number, info: RecorderInfo): void;
}
//# sourceMappingURL=CmviotMediaBase.d.ts.map