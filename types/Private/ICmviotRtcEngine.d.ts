import './extension/ICmviotRtcEngineExtension';
import { AudienceLatencyLevelType, AudioAinsMode, AudioEffectPreset, AudioEncodedFrameObserverConfig, AudioProfileType, AudioRecordingConfiguration, AudioSampleRateType, AudioScenarioType, AudioSessionOperationRestriction, AudioVolumeInfo, BeautyOptions, CaptureBrightnessLevelType, ChannelMediaRelayConfiguration, ChannelMediaRelayError, ChannelMediaRelayEvent, ChannelMediaRelayState, ChannelProfileType, ClientRoleChangeFailedReason, ClientRoleOptions, ClientRoleType, CodecCapInfo, ColorEnhanceOptions, ConnectionChangedReasonType, ConnectionStateType, DataStreamConfig, DeviceInfo, DownlinkNetworkInfo, EarMonitoringFilterType, EchoTestConfiguration, EncryptionConfig, EncryptionErrorType, ErrorCodeType, HeadphoneEqualizerPreset, IAudioEncodedFrameObserver, LastmileProbeConfig, LastmileProbeResult, LicenseErrorType, LiveTranscoding, LocalAccessPointConfiguration, LocalAudioStats, LocalAudioStreamError, LocalAudioStreamState, LocalTranscoderConfiguration, LocalVideoStreamError, LocalVideoStreamState, LowlightEnhanceOptions, MediaTraceEvent, NetworkType, PermissionType, QualityAdaptIndication, QualityType, RecorderStreamInfo, Rectangle, RemoteAudioState, RemoteAudioStateReason, RemoteVideoState, RemoteVideoStateReason, RtcStats, RtmpStreamPublishErrorType, RtmpStreamPublishState, RtmpStreamingEvent, ScreenCaptureParameters, ScreenCaptureParameters2, ScreenScenarioType, SegmentationProperty, SenderOptions, SimulcastStreamConfig, SimulcastStreamMode, SpatialAudioParams, StreamPublishState, StreamSubscribeState, ThreadPriorityType, TranscodingVideoStream, UplinkNetworkInfo, UploadErrorReason, UserInfo, UserOfflineReasonType, VideoApplicationScenarioType, VideoCanvas, VideoCodecType, VideoContentHint, VideoDenoiserOptions, VideoEncoderConfiguration, VideoFormat, VideoMirrorModeType, VideoOrientation, VideoRenderingTracingInfo, VideoStreamType, VideoSubscriptionOptions, VideoTranscoderError, VirtualBackgroundSource, VoiceBeautifierPreset, VoiceConversionPreset, WatermarkOptions, WlAccStats, WlaccMessageReason, WlaccSuggestAction } from './CmviotBase';
import { ContentInspectConfig, ContentInspectResult, IAudioSpectrumObserver, MediaSourceType, RawAudioFrameOpModeType, RenderModeType, VideoSourceType } from './CmviotMediaBase';
import { IAudioDeviceManager } from './IAudioDeviceManager';
import { LogConfig, LogFilterType, LogLevel } from './ICmviotLog';
import { AudioMixingDualMonoMode, IMediaEngine } from './ICmviotMediaEngine';
import { IMediaPlayer } from './ICmviotMediaPlayer';
import { IMediaRecorder } from './ICmviotMediaRecorder';
import { IMusicContentCenter } from './ICmviotMusicContentCenter';
import { CmviotRhythmPlayerConfig, RhythmPlayerErrorType, RhythmPlayerStateType } from './ICmviotRhythmPlayer';
import { RtcConnection } from './ICmviotRtcEngineEx';
import { ILocalSpatialAudioEngine } from './ICmviotSpatialAudio';
export declare enum MediaDeviceType {
    UnknownAudioDevice = -1,
    AudioPlayoutDevice = 0,
    AudioRecordingDevice = 1,
    VideoRenderDevice = 2,
    VideoCaptureDevice = 3,
    AudioApplicationPlayoutDevice = 4,
    AudioVirtualPlayoutDevice = 5,
    AudioVirtualRecordingDevice = 6
}
export declare enum AudioMixingStateType {
    AudioMixingStatePlaying = 710,
    AudioMixingStatePaused = 711,
    AudioMixingStateStopped = 713,
    AudioMixingStateFailed = 714
}
export declare enum AudioMixingReasonType {
    AudioMixingReasonCanNotOpen = 701,
    AudioMixingReasonTooFrequentCall = 702,
    AudioMixingReasonInterruptedEof = 703,
    AudioMixingReasonOneLoopCompleted = 721,
    AudioMixingReasonAllLoopsCompleted = 723,
    AudioMixingReasonStoppedByUser = 724,
    AudioMixingReasonOk = 0
}
export declare enum InjectStreamStatus {
    InjectStreamStatusStartSuccess = 0,
    InjectStreamStatusStartAlreadyExists = 1,
    InjectStreamStatusStartUnauthorized = 2,
    InjectStreamStatusStartTimedout = 3,
    InjectStreamStatusStartFailed = 4,
    InjectStreamStatusStopSuccess = 5,
    InjectStreamStatusStopNotFound = 6,
    InjectStreamStatusStopUnauthorized = 7,
    InjectStreamStatusStopTimedout = 8,
    InjectStreamStatusStopFailed = 9,
    InjectStreamStatusBroken = 10
}
export declare enum AudioEqualizationBandFrequency {
    AudioEqualizationBand31 = 0,
    AudioEqualizationBand62 = 1,
    AudioEqualizationBand125 = 2,
    AudioEqualizationBand250 = 3,
    AudioEqualizationBand500 = 4,
    AudioEqualizationBand1k = 5,
    AudioEqualizationBand2k = 6,
    AudioEqualizationBand4k = 7,
    AudioEqualizationBand8k = 8,
    AudioEqualizationBand16k = 9
}
export declare enum AudioReverbType {
    AudioReverbDryLevel = 0,
    AudioReverbWetLevel = 1,
    AudioReverbRoomSize = 2,
    AudioReverbWetDelay = 3,
    AudioReverbStrength = 4
}
export declare enum StreamFallbackOptions {
    StreamFallbackOptionDisabled = 0,
    StreamFallbackOptionVideoStreamLow = 1,
    StreamFallbackOptionAudioOnly = 2
}
export declare enum PriorityType {
    PriorityHigh = 50,
    PriorityNormal = 100
}
export declare class LocalVideoStats {
    uid?: number;
    sentBitrate?: number;
    sentFrameRate?: number;
    captureFrameRate?: number;
    captureFrameWidth?: number;
    captureFrameHeight?: number;
    regulatedCaptureFrameRate?: number;
    regulatedCaptureFrameWidth?: number;
    regulatedCaptureFrameHeight?: number;
    encoderOutputFrameRate?: number;
    encodedFrameWidth?: number;
    encodedFrameHeight?: number;
    rendererOutputFrameRate?: number;
    targetBitrate?: number;
    targetFrameRate?: number;
    qualityAdaptIndication?: QualityAdaptIndication;
    encodedBitrate?: number;
    encodedFrameCount?: number;
    codecType?: VideoCodecType;
    txPacketLossRate?: number;
    captureBrightnessLevel?: CaptureBrightnessLevelType;
    dualStreamEnabled?: boolean;
    hwEncoderAccelerating?: number;
}
export declare class RemoteAudioStats {
    uid?: number;
    quality?: number;
    networkTransportDelay?: number;
    jitterBufferDelay?: number;
    audioLossRate?: number;
    numChannels?: number;
    receivedSampleRate?: number;
    receivedBitrate?: number;
    totalFrozenTime?: number;
    frozenRate?: number;
    mosValue?: number;
    frozenRateByCustomPlcCount?: number;
    plcCount?: number;
    totalActiveTime?: number;
    publishDuration?: number;
    qoeQuality?: number;
    qualityChangedReason?: number;
    rxAudioBytes?: number;
}
export declare class RemoteVideoStats {
    uid?: number;
    delay?: number;
    e2eDelay?: number;
    width?: number;
    height?: number;
    receivedBitrate?: number;
    decoderOutputFrameRate?: number;
    rendererOutputFrameRate?: number;
    frameLossRate?: number;
    packetLossRate?: number;
    rxStreamType?: VideoStreamType;
    totalFrozenTime?: number;
    frozenRate?: number;
    avSyncTimeMs?: number;
    totalActiveTime?: number;
    publishDuration?: number;
    mosValue?: number;
    rxVideoBytes?: number;
}
export declare class Region {
    uid?: number;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    zOrder?: number;
    alpha?: number;
    renderMode?: RenderModeType;
}
export declare class VideoCompositingLayout {
    canvasWidth?: number;
    canvasHeight?: number;
    backgroundColor?: string;
    regions?: Region[];
    regionCount?: number;
    appData?: Uint8Array;
    appDataLength?: number;
}
export declare class InjectStreamConfig {
    width?: number;
    height?: number;
    videoGop?: number;
    videoFramerate?: number;
    videoBitrate?: number;
    audioSampleRate?: AudioSampleRateType;
    audioBitrate?: number;
    audioChannels?: number;
}
export declare enum RtmpStreamLifeCycleType {
    RtmpStreamLifeCycleBind2channel = 1,
    RtmpStreamLifeCycleBind2owner = 2
}
export declare class PublisherConfiguration {
    width?: number;
    height?: number;
    framerate?: number;
    bitrate?: number;
    defaultLayout?: number;
    lifecycle?: number;
    owner?: boolean;
    injectStreamWidth?: number;
    injectStreamHeight?: number;
    injectStreamUrl?: string;
    publishUrl?: string;
    rawStreamUrl?: string;
    extraInfo?: string;
}
export declare enum CameraDirection {
    CameraRear = 0,
    CameraFront = 1
}
export declare enum CloudProxyType {
    NoneProxy = 0,
    UdpProxy = 1,
    TcpProxy = 2
}
export declare class CameraCapturerConfiguration {
    cameraDirection?: CameraDirection;
    deviceId?: string;
    format?: VideoFormat;
    followEncodeDimensionRatio?: boolean;
}
export declare class ScreenCaptureConfiguration {
    isCaptureWindow?: boolean;
    displayId?: number;
    screenRect?: Rectangle;
    windowId?: any;
    params?: ScreenCaptureParameters;
    regionRect?: Rectangle;
}
export declare class Size {
    width?: number;
    height?: number;
}
export declare class ThumbImageBuffer {
    buffer?: Uint8Array;
    length?: number;
    width?: number;
    height?: number;
}
export declare enum ScreenCaptureSourceType {
    ScreencapturesourcetypeUnknown = -1,
    ScreencapturesourcetypeWindow = 0,
    ScreencapturesourcetypeScreen = 1,
    ScreencapturesourcetypeCustom = 2
}
export declare class ScreenCaptureSourceInfo {
    type?: ScreenCaptureSourceType;
    sourceId?: any;
    sourceName?: string;
    thumbImage?: ThumbImageBuffer;
    iconImage?: ThumbImageBuffer;
    processPath?: string;
    sourceTitle?: string;
    primaryMonitor?: boolean;
    isOccluded?: boolean;
    position?: Rectangle;
    minimizeWindow?: boolean;
    sourceDisplayId?: any;
}
export declare class AdvancedAudioOptions {
    audioProcessingChannels?: number;
}
export declare class ImageTrackOptions {
    imageUrl?: string;
    fps?: number;
    mirrorMode?: VideoMirrorModeType;
}
export declare class ChannelMediaOptions {
    publishCameraTrack?: boolean;
    publishSecondaryCameraTrack?: boolean;
    publishThirdCameraTrack?: boolean;
    publishFourthCameraTrack?: boolean;
    publishMicrophoneTrack?: boolean;
    publishScreenCaptureVideo?: boolean;
    publishScreenCaptureAudio?: boolean;
    publishScreenTrack?: boolean;
    publishSecondaryScreenTrack?: boolean;
    publishThirdScreenTrack?: boolean;
    publishFourthScreenTrack?: boolean;
    publishCustomAudioTrack?: boolean;
    publishCustomAudioTrackId?: number;
    publishCustomVideoTrack?: boolean;
    publishEncodedVideoTrack?: boolean;
    publishMediaPlayerAudioTrack?: boolean;
    publishMediaPlayerVideoTrack?: boolean;
    publishTranscodedVideoTrack?: boolean;
    autoSubscribeAudio?: boolean;
    autoSubscribeVideo?: boolean;
    enableAudioRecordingOrPlayout?: boolean;
    publishMediaPlayerId?: number;
    clientRoleType?: ClientRoleType;
    audienceLatencyLevel?: AudienceLatencyLevelType;
    defaultVideoStreamType?: VideoStreamType;
    channelProfile?: ChannelProfileType;
    audioDelayMs?: number;
    mediaPlayerAudioDelayMs?: number;
    token?: string;
    enableBuiltInMediaEncryption?: boolean;
    publishRhythmPlayerTrack?: boolean;
    isInteractiveAudience?: boolean;
    customVideoTrackId?: number;
    isAudioFilterable?: boolean;
}
export declare enum ProxyType {
    NoneProxyType = 0,
    UdpProxyType = 1,
    TcpProxyType = 2,
    LocalProxyType = 3,
    TcpProxyAutoFallbackType = 4,
    HttpProxyType = 5,
    HttpsProxyType = 6
}
export declare enum FeatureType {
    VideoVirtualBackground = 1,
    VideoBeautyEffect = 2
}
export declare class LeaveChannelOptions {
    stopAudioMixing?: boolean;
    stopAllEffect?: boolean;
    stopMicrophoneRecording?: boolean;
}
export interface IRtcEngineEventHandler {
    onJoinChannelSuccess?(connection: RtcConnection, elapsed: number): void;
    onRejoinChannelSuccess?(connection: RtcConnection, elapsed: number): void;
    onProxyConnected?(channel: string, uid: number, proxyType: ProxyType, localProxyIp: string, elapsed: number): void;
    onError?(err: ErrorCodeType, msg: string): void;
    onAudioQuality?(connection: RtcConnection, remoteUid: number, quality: QualityType, delay: number, lost: number): void;
    onLastmileProbeResult?(result: LastmileProbeResult): void;
    onAudioVolumeIndication?(connection: RtcConnection, speakers: AudioVolumeInfo[], speakerNumber: number, totalVolume: number): void;
    onLeaveChannel?(connection: RtcConnection, stats: RtcStats): void;
    onRtcStats?(connection: RtcConnection, stats: RtcStats): void;
    onAudioDeviceStateChanged?(deviceId: string, deviceType: MediaDeviceType, deviceState: MediaDeviceStateType): void;
    onAudioMixingPositionChanged?(position: number): void;
    onAudioMixingFinished?(): void;
    onAudioEffectFinished?(soundId: number): void;
    onVideoDeviceStateChanged?(deviceId: string, deviceType: MediaDeviceType, deviceState: MediaDeviceStateType): void;
    onNetworkQuality?(connection: RtcConnection, remoteUid: number, txQuality: QualityType, rxQuality: QualityType): void;
    onIntraRequestReceived?(connection: RtcConnection): void;
    onUplinkNetworkInfoUpdated?(info: UplinkNetworkInfo): void;
    onDownlinkNetworkInfoUpdated?(info: DownlinkNetworkInfo): void;
    onLastmileQuality?(quality: QualityType): void;
    onFirstLocalVideoFrame?(source: VideoSourceType, width: number, height: number, elapsed: number): void;
    onFirstLocalVideoFramePublished?(source: VideoSourceType, elapsed: number): void;
    onFirstRemoteVideoDecoded?(connection: RtcConnection, remoteUid: number, width: number, height: number, elapsed: number): void;
    onVideoSizeChanged?(connection: RtcConnection, sourceType: VideoSourceType, uid: number, width: number, height: number, rotation: number): void;
    onLocalVideoStateChanged?(source: VideoSourceType, state: LocalVideoStreamState, error: LocalVideoStreamError): void;
    onRemoteVideoStateChanged?(connection: RtcConnection, remoteUid: number, state: RemoteVideoState, reason: RemoteVideoStateReason, elapsed: number): void;
    onFirstRemoteVideoFrame?(connection: RtcConnection, remoteUid: number, width: number, height: number, elapsed: number): void;
    onUserJoined?(connection: RtcConnection, remoteUid: number, elapsed: number): void;
    onUserOffline?(connection: RtcConnection, remoteUid: number, reason: UserOfflineReasonType): void;
    onUserMuteAudio?(connection: RtcConnection, remoteUid: number, muted: boolean): void;
    onUserMuteVideo?(connection: RtcConnection, remoteUid: number, muted: boolean): void;
    onUserEnableVideo?(connection: RtcConnection, remoteUid: number, enabled: boolean): void;
    onUserStateChanged?(connection: RtcConnection, remoteUid: number, state: number): void;
    onUserEnableLocalVideo?(connection: RtcConnection, remoteUid: number, enabled: boolean): void;
    onLocalAudioStats?(connection: RtcConnection, stats: LocalAudioStats): void;
    onRemoteAudioStats?(connection: RtcConnection, stats: RemoteAudioStats): void;
    onLocalVideoStats?(source: VideoSourceType, stats: LocalVideoStats): void;
    onRemoteVideoStats?(connection: RtcConnection, stats: RemoteVideoStats): void;
    onCameraReady?(): void;
    onCameraFocusAreaChanged?(x: number, y: number, width: number, height: number): void;
    onCameraExposureAreaChanged?(x: number, y: number, width: number, height: number): void;
    onFacePositionChanged?(imageWidth: number, imageHeight: number, vecRectangle: Rectangle[], vecDistance: number[], numFaces: number): void;
    onVideoStopped?(): void;
    onAudioMixingStateChanged?(state: AudioMixingStateType, reason: AudioMixingReasonType): void;
    onRhythmPlayerStateChanged?(state: RhythmPlayerStateType, errorCode: RhythmPlayerErrorType): void;
    onConnectionLost?(connection: RtcConnection): void;
    onConnectionInterrupted?(connection: RtcConnection): void;
    onConnectionBanned?(connection: RtcConnection): void;
    onStreamMessage?(connection: RtcConnection, remoteUid: number, streamId: number, data: Uint8Array, length: number, sentTs: number): void;
    onStreamMessageError?(connection: RtcConnection, remoteUid: number, streamId: number, code: ErrorCodeType, missed: number, cached: number): void;
    onRequestToken?(connection: RtcConnection): void;
    onTokenPrivilegeWillExpire?(connection: RtcConnection, token: string): void;
    onLicenseValidationFailure?(connection: RtcConnection, reason: LicenseErrorType): void;
    onFirstLocalAudioFramePublished?(connection: RtcConnection, elapsed: number): void;
    onFirstRemoteAudioFrame?(connection: RtcConnection, userId: number, elapsed: number): void;
    onFirstRemoteAudioDecoded?(connection: RtcConnection, uid: number, elapsed: number): void;
    onLocalAudioStateChanged?(connection: RtcConnection, state: LocalAudioStreamState, error: LocalAudioStreamError): void;
    onRemoteAudioStateChanged?(connection: RtcConnection, remoteUid: number, state: RemoteAudioState, reason: RemoteAudioStateReason, elapsed: number): void;
    onActiveSpeaker?(connection: RtcConnection, uid: number): void;
    onContentInspectResult?(result: ContentInspectResult): void;
    onSnapshotTaken?(connection: RtcConnection, uid: number, filePath: string, width: number, height: number, errCode: number): void;
    onClientRoleChanged?(connection: RtcConnection, oldRole: ClientRoleType, newRole: ClientRoleType, newRoleOptions: ClientRoleOptions): void;
    onClientRoleChangeFailed?(connection: RtcConnection, reason: ClientRoleChangeFailedReason, currentRole: ClientRoleType): void;
    onAudioDeviceVolumeChanged?(deviceType: MediaDeviceType, volume: number, muted: boolean): void;
    onRtmpStreamingStateChanged?(url: string, state: RtmpStreamPublishState, errCode: RtmpStreamPublishErrorType): void;
    onRtmpStreamingEvent?(url: string, eventCode: RtmpStreamingEvent): void;
    onTranscodingUpdated?(): void;
    onAudioRoutingChanged?(routing: number): void;
    onChannelMediaRelayStateChanged?(state: ChannelMediaRelayState, code: ChannelMediaRelayError): void;
    onChannelMediaRelayEvent?(code: ChannelMediaRelayEvent): void;
    onLocalPublishFallbackToAudioOnly?(isFallbackOrRecover: boolean): void;
    onRemoteSubscribeFallbackToAudioOnly?(uid: number, isFallbackOrRecover: boolean): void;
    onRemoteAudioTransportStats?(connection: RtcConnection, remoteUid: number, delay: number, lost: number, rxKBitRate: number): void;
    onRemoteVideoTransportStats?(connection: RtcConnection, remoteUid: number, delay: number, lost: number, rxKBitRate: number): void;
    onConnectionStateChanged?(connection: RtcConnection, state: ConnectionStateType, reason: ConnectionChangedReasonType): void;
    onWlAccMessage?(connection: RtcConnection, reason: WlaccMessageReason, action: WlaccSuggestAction, wlAccMsg: string): void;
    onWlAccStats?(connection: RtcConnection, currentStats: WlAccStats, averageStats: WlAccStats): void;
    onNetworkTypeChanged?(connection: RtcConnection, type: NetworkType): void;
    onEncryptionError?(connection: RtcConnection, errorType: EncryptionErrorType): void;
    onPermissionError?(permissionType: PermissionType): void;
    onLocalUserRegistered?(uid: number, userAccount: string): void;
    onUserInfoUpdated?(uid: number, info: UserInfo): void;
    onUploadLogResult?(connection: RtcConnection, requestId: string, success: boolean, reason: UploadErrorReason): void;
    onAudioSubscribeStateChanged?(channel: string, uid: number, oldState: StreamSubscribeState, newState: StreamSubscribeState, elapseSinceLastState: number): void;
    onVideoSubscribeStateChanged?(channel: string, uid: number, oldState: StreamSubscribeState, newState: StreamSubscribeState, elapseSinceLastState: number): void;
    onAudioPublishStateChanged?(channel: string, oldState: StreamPublishState, newState: StreamPublishState, elapseSinceLastState: number): void;
    onVideoPublishStateChanged?(source: VideoSourceType, channel: string, oldState: StreamPublishState, newState: StreamPublishState, elapseSinceLastState: number): void;
    onExtensionEvent?(provider: string, extension: string, key: string, value: string): void;
    onExtensionStarted?(provider: string, extension: string): void;
    onExtensionStopped?(provider: string, extension: string): void;
    onExtensionError?(provider: string, extension: string, error: number, message: string): void;
    onUserAccountUpdated?(connection: RtcConnection, remoteUid: number, userAccount: string): void;
    onLocalVideoTranscoderError?(stream: TranscodingVideoStream, error: VideoTranscoderError): void;
    onVideoRenderingTracingResult?(connection: RtcConnection, uid: number, currentEvent: MediaTraceEvent, tracingInfo: VideoRenderingTracingInfo): void;
}
export declare abstract class IVideoDeviceManager {
    abstract enumerateVideoDevices(): VideoDeviceInfo[];
    abstract setDevice(deviceIdUTF8: string): number;
    abstract getDevice(): string;
    abstract numberOfCapabilities(deviceIdUTF8: string): number;
    abstract getCapability(deviceIdUTF8: string, deviceCapabilityNumber: number): VideoFormat;
    abstract startDeviceTest(hwnd: any): number;
    abstract stopDeviceTest(): number;
    abstract release(): void;
}
export declare class RtcEngineContext {
    appId?: string;
    channelProfile?: ChannelProfileType;
    license?: string;
    audioScenario?: AudioScenarioType;
    areaCode?: number;
    logConfig?: LogConfig;
    threadPriority?: ThreadPriorityType;
    useExternalEglContext?: boolean;
    domainLimit?: boolean;
    autoRegisterCmviotExtensions?: boolean;
}
export declare enum MetadataType {
    UnknownMetadata = -1,
    VideoMetadata = 0
}
export declare enum MaxMetadataSizeType {
    InvalidMetadataSizeInByte = -1,
    DefaultMetadataSizeInByte = 512,
    MaxMetadataSizeInByte = 1024
}
export declare class Metadata {
    uid?: number;
    size?: number;
    buffer?: Uint8Array;
    timeStampMs?: number;
}
export interface IMetadataObserver {
    onMetadataReceived?(metadata: Metadata): void;
}
export declare enum DirectCdnStreamingError {
    DirectCdnStreamingErrorOk = 0,
    DirectCdnStreamingErrorFailed = 1,
    DirectCdnStreamingErrorAudioPublication = 2,
    DirectCdnStreamingErrorVideoPublication = 3,
    DirectCdnStreamingErrorNetConnect = 4,
    DirectCdnStreamingErrorBadName = 5
}
export declare enum DirectCdnStreamingState {
    DirectCdnStreamingStateIdle = 0,
    DirectCdnStreamingStateRunning = 1,
    DirectCdnStreamingStateStopped = 2,
    DirectCdnStreamingStateFailed = 3,
    DirectCdnStreamingStateRecovering = 4
}
export declare class DirectCdnStreamingStats {
    videoWidth?: number;
    videoHeight?: number;
    fps?: number;
    videoBitrate?: number;
    audioBitrate?: number;
}
export interface IDirectCdnStreamingEventHandler {
    onDirectCdnStreamingStateChanged?(state: DirectCdnStreamingState, error: DirectCdnStreamingError, message: string): void;
    onDirectCdnStreamingStats?(stats: DirectCdnStreamingStats): void;
}
export declare class DirectCdnStreamingMediaOptions {
    publishCameraTrack?: boolean;
    publishMicrophoneTrack?: boolean;
    publishCustomAudioTrack?: boolean;
    publishCustomVideoTrack?: boolean;
    publishMediaPlayerAudioTrack?: boolean;
    publishMediaPlayerId?: number;
    customVideoTrackId?: number;
}
export declare class ExtensionInfo {
    mediaSourceType?: MediaSourceType;
    remoteUid?: number;
    channelId?: string;
    localUid?: number;
}
export declare abstract class IRtcEngine {
    abstract release(sync?: boolean): void;
    abstract initialize(context: RtcEngineContext): number;
    abstract getVersion(): SDKBuildInfo;
    abstract getErrorDescription(code: number): string;
    abstract queryCodecCapability(): {
        codecInfo: CodecCapInfo[];
        size: number;
    };
    abstract preloadChannel(token: string, channelId: string, uid: number): number;
    abstract preloadChannelWithUserAccount(token: string, channelId: string, userAccount: string): number;
    abstract updatePreloadChannelToken(token: string): number;
    abstract joinChannel(token: string, channelId: string, uid: number, options: ChannelMediaOptions): number;
    abstract updateChannelMediaOptions(options: ChannelMediaOptions): number;
    abstract leaveChannel(options?: LeaveChannelOptions): number;
    abstract renewToken(token: string): number;
    abstract setChannelProfile(profile: ChannelProfileType): number;
    abstract setClientRole(role: ClientRoleType, options?: ClientRoleOptions): number;
    abstract startEchoTest(config: EchoTestConfiguration): number;
    abstract stopEchoTest(): number;
    abstract enableMultiCamera(enabled: boolean, config: CameraCapturerConfiguration): number;
    abstract enableVideo(): number;
    abstract disableVideo(): number;
    abstract startPreview(sourceType?: VideoSourceType): number;
    abstract stopPreview(sourceType?: VideoSourceType): number;
    abstract startLastmileProbeTest(config: LastmileProbeConfig): number;
    abstract stopLastmileProbeTest(): number;
    abstract setVideoEncoderConfiguration(config: VideoEncoderConfiguration): number;
    abstract setBeautyEffectOptions(enabled: boolean, options: BeautyOptions, type?: MediaSourceType): number;
    abstract setLowlightEnhanceOptions(enabled: boolean, options: LowlightEnhanceOptions, type?: MediaSourceType): number;
    abstract setVideoDenoiserOptions(enabled: boolean, options: VideoDenoiserOptions, type?: MediaSourceType): number;
    abstract setColorEnhanceOptions(enabled: boolean, options: ColorEnhanceOptions, type?: MediaSourceType): number;
    abstract enableVirtualBackground(enabled: boolean, backgroundSource: VirtualBackgroundSource, segproperty: SegmentationProperty, type?: MediaSourceType): number;
    abstract setupRemoteVideo(canvas: VideoCanvas): number;
    abstract setupLocalVideo(canvas: VideoCanvas): number;
    abstract setVideoScenario(scenarioType: VideoApplicationScenarioType): number;
    abstract enableAudio(): number;
    abstract disableAudio(): number;
    abstract setAudioProfile(profile: AudioProfileType, scenario?: AudioScenarioType): number;
    abstract setAudioScenario(scenario: AudioScenarioType): number;
    abstract enableLocalAudio(enabled: boolean): number;
    abstract muteLocalAudioStream(mute: boolean): number;
    abstract muteAllRemoteAudioStreams(mute: boolean): number;
    abstract setDefaultMuteAllRemoteAudioStreams(mute: boolean): number;
    abstract muteRemoteAudioStream(uid: number, mute: boolean): number;
    abstract muteLocalVideoStream(mute: boolean): number;
    abstract enableLocalVideo(enabled: boolean): number;
    abstract muteAllRemoteVideoStreams(mute: boolean): number;
    abstract setDefaultMuteAllRemoteVideoStreams(mute: boolean): number;
    abstract muteRemoteVideoStream(uid: number, mute: boolean): number;
    abstract setRemoteVideoStreamType(uid: number, streamType: VideoStreamType): number;
    abstract setRemoteVideoSubscriptionOptions(uid: number, options: VideoSubscriptionOptions): number;
    abstract setRemoteDefaultVideoStreamType(streamType: VideoStreamType): number;
    abstract setSubscribeAudioBlocklist(uidList: number[], uidNumber: number): number;
    abstract setSubscribeAudioAllowlist(uidList: number[], uidNumber: number): number;
    abstract setSubscribeVideoBlocklist(uidList: number[], uidNumber: number): number;
    abstract setSubscribeVideoAllowlist(uidList: number[], uidNumber: number): number;
    abstract enableAudioVolumeIndication(interval: number, smooth: number, reportVad: boolean): number;
    abstract startAudioRecording(config: AudioRecordingConfiguration): number;
    abstract registerAudioEncodedFrameObserver(config: AudioEncodedFrameObserverConfig, observer: IAudioEncodedFrameObserver): number;
    abstract stopAudioRecording(): number;
    abstract createMediaPlayer(): IMediaPlayer;
    abstract destroyMediaPlayer(mediaPlayer: IMediaPlayer): number;
    abstract createMediaRecorder(info: RecorderStreamInfo): IMediaRecorder;
    abstract destroyMediaRecorder(mediaRecorder: IMediaRecorder): number;
    abstract startAudioMixing(filePath: string, loopback: boolean, cycle: number, startPos?: number): number;
    abstract stopAudioMixing(): number;
    abstract pauseAudioMixing(): number;
    abstract resumeAudioMixing(): number;
    abstract selectAudioTrack(index: number): number;
    abstract getAudioTrackCount(): number;
    abstract adjustAudioMixingVolume(volume: number): number;
    abstract adjustAudioMixingPublishVolume(volume: number): number;
    abstract getAudioMixingPublishVolume(): number;
    abstract adjustAudioMixingPlayoutVolume(volume: number): number;
    abstract getAudioMixingPlayoutVolume(): number;
    abstract getAudioMixingDuration(): number;
    abstract getAudioMixingCurrentPosition(): number;
    abstract setAudioMixingPosition(pos: number): number;
    abstract setAudioMixingDualMonoMode(mode: AudioMixingDualMonoMode): number;
    abstract setAudioMixingPitch(pitch: number): number;
    abstract getEffectsVolume(): number;
    abstract setEffectsVolume(volume: number): number;
    abstract preloadEffect(soundId: number, filePath: string, startPos?: number): number;
    abstract playEffect(soundId: number, filePath: string, loopCount: number, pitch: number, pan: number, gain: number, publish?: boolean, startPos?: number): number;
    abstract playAllEffects(loopCount: number, pitch: number, pan: number, gain: number, publish?: boolean): number;
    abstract getVolumeOfEffect(soundId: number): number;
    abstract setVolumeOfEffect(soundId: number, volume: number): number;
    abstract pauseEffect(soundId: number): number;
    abstract pauseAllEffects(): number;
    abstract resumeEffect(soundId: number): number;
    abstract resumeAllEffects(): number;
    abstract stopEffect(soundId: number): number;
    abstract stopAllEffects(): number;
    abstract unloadEffect(soundId: number): number;
    abstract unloadAllEffects(): number;
    abstract getEffectDuration(filePath: string): number;
    abstract setEffectPosition(soundId: number, pos: number): number;
    abstract getEffectCurrentPosition(soundId: number): number;
    abstract enableSoundPositionIndication(enabled: boolean): number;
    abstract setRemoteVoicePosition(uid: number, pan: number, gain: number): number;
    abstract enableSpatialAudio(enabled: boolean): number;
    abstract setRemoteUserSpatialAudioParams(uid: number, params: SpatialAudioParams): number;
    abstract setVoiceBeautifierPreset(preset: VoiceBeautifierPreset): number;
    abstract setAudioEffectPreset(preset: AudioEffectPreset): number;
    abstract setVoiceConversionPreset(preset: VoiceConversionPreset): number;
    abstract setAudioEffectParameters(preset: AudioEffectPreset, param1: number, param2: number): number;
    abstract setVoiceBeautifierParameters(preset: VoiceBeautifierPreset, param1: number, param2: number): number;
    abstract setVoiceConversionParameters(preset: VoiceConversionPreset, param1: number, param2: number): number;
    abstract setLocalVoicePitch(pitch: number): number;
    abstract setLocalVoiceFormant(formantRatio: number): number;
    abstract setLocalVoiceEqualization(bandFrequency: AudioEqualizationBandFrequency, bandGain: number): number;
    abstract setLocalVoiceReverb(reverbKey: AudioReverbType, value: number): number;
    abstract setHeadphoneEQPreset(preset: HeadphoneEqualizerPreset): number;
    abstract setHeadphoneEQParameters(lowGain: number, highGain: number): number;
    abstract setLogFile(filePath: string): number;
    abstract setLogFilter(filter: LogFilterType): number;
    abstract setLogLevel(level: LogLevel): number;
    abstract setLogFileSize(fileSizeInKBytes: number): number;
    abstract uploadLogFile(): string;
    abstract setLocalRenderMode(renderMode: RenderModeType, mirrorMode?: VideoMirrorModeType): number;
    abstract setRemoteRenderMode(uid: number, renderMode: RenderModeType, mirrorMode: VideoMirrorModeType): number;
    abstract setLocalVideoMirrorMode(mirrorMode: VideoMirrorModeType): number;
    abstract enableDualStreamMode(enabled: boolean, streamConfig?: SimulcastStreamConfig): number;
    abstract setDualStreamMode(mode: SimulcastStreamMode, streamConfig?: SimulcastStreamConfig): number;
    abstract enableCustomAudioLocalPlayback(trackId: number, enabled: boolean): number;
    abstract setRecordingAudioFrameParameters(sampleRate: number, channel: number, mode: RawAudioFrameOpModeType, samplesPerCall: number): number;
    abstract setPlaybackAudioFrameParameters(sampleRate: number, channel: number, mode: RawAudioFrameOpModeType, samplesPerCall: number): number;
    abstract setMixedAudioFrameParameters(sampleRate: number, channel: number, samplesPerCall: number): number;
    abstract setEarMonitoringAudioFrameParameters(sampleRate: number, channel: number, mode: RawAudioFrameOpModeType, samplesPerCall: number): number;
    abstract setPlaybackAudioFrameBeforeMixingParameters(sampleRate: number, channel: number): number;
    abstract enableAudioSpectrumMonitor(intervalInMS?: number): number;
    abstract disableAudioSpectrumMonitor(): number;
    abstract registerAudioSpectrumObserver(observer: IAudioSpectrumObserver): number;
    abstract unregisterAudioSpectrumObserver(observer: IAudioSpectrumObserver): number;
    abstract adjustRecordingSignalVolume(volume: number): number;
    abstract muteRecordingSignal(mute: boolean): number;
    abstract adjustPlaybackSignalVolume(volume: number): number;
    abstract adjustUserPlaybackSignalVolume(uid: number, volume: number): number;
    abstract setLocalPublishFallbackOption(option: StreamFallbackOptions): number;
    abstract setRemoteSubscribeFallbackOption(option: StreamFallbackOptions): number;
    abstract setHighPriorityUserList(uidList: number[], uidNum: number, option: StreamFallbackOptions): number;
    abstract enableLoopbackRecording(enabled: boolean, deviceName?: string): number;
    abstract adjustLoopbackSignalVolume(volume: number): number;
    abstract getLoopbackRecordingVolume(): number;
    abstract enableInEarMonitoring(enabled: boolean, includeAudioFilters: EarMonitoringFilterType): number;
    abstract setInEarMonitoringVolume(volume: number): number;
    abstract loadExtensionProvider(path: string, unloadAfterUse?: boolean): number;
    abstract setExtensionProviderProperty(provider: string, key: string, value: string): number;
    abstract registerExtension(provider: string, extension: string, type?: MediaSourceType): number;
    abstract enableExtension(provider: string, extension: string, enable?: boolean, type?: MediaSourceType): number;
    abstract setExtensionProperty(provider: string, extension: string, key: string, value: string, type?: MediaSourceType): number;
    abstract getExtensionProperty(provider: string, extension: string, key: string, bufLen: number, type?: MediaSourceType): string;
    abstract setCameraCapturerConfiguration(config: CameraCapturerConfiguration): number;
    abstract createCustomVideoTrack(): number;
    abstract createCustomEncodedVideoTrack(senderOption: SenderOptions): number;
    abstract destroyCustomVideoTrack(videoTrackId: number): number;
    abstract destroyCustomEncodedVideoTrack(videoTrackId: number): number;
    abstract switchCamera(): number;
    abstract isCameraZoomSupported(): boolean;
    abstract isCameraFaceDetectSupported(): boolean;
    abstract isCameraTorchSupported(): boolean;
    abstract isCameraFocusSupported(): boolean;
    abstract isCameraAutoFocusFaceModeSupported(): boolean;
    abstract setCameraZoomFactor(factor: number): number;
    abstract enableFaceDetection(enabled: boolean): number;
    abstract getCameraMaxZoomFactor(): number;
    abstract setCameraFocusPositionInPreview(positionX: number, positionY: number): number;
    abstract setCameraTorchOn(isOn: boolean): number;
    abstract setCameraAutoFocusFaceModeEnabled(enabled: boolean): number;
    abstract isCameraExposurePositionSupported(): boolean;
    abstract setCameraExposurePosition(positionXinView: number, positionYinView: number): number;
    abstract isCameraExposureSupported(): boolean;
    abstract setCameraExposureFactor(factor: number): number;
    abstract isCameraAutoExposureFaceModeSupported(): boolean;
    abstract setCameraAutoExposureFaceModeEnabled(enabled: boolean): number;
    abstract setDefaultAudioRouteToSpeakerphone(defaultToSpeaker: boolean): number;
    abstract setEnableSpeakerphone(speakerOn: boolean): number;
    abstract isSpeakerphoneEnabled(): boolean;
    abstract setRouteInCommunicationMode(route: number): number;
    abstract getScreenCaptureSources(thumbSize: Size, iconSize: Size, includeScreen: boolean): ScreenCaptureSourceInfo[];
    abstract setAudioSessionOperationRestriction(restriction: AudioSessionOperationRestriction): number;
    abstract startScreenCaptureByDisplayId(displayId: number, regionRect: Rectangle, captureParams: ScreenCaptureParameters): number;
    abstract startScreenCaptureByScreenRect(screenRect: Rectangle, regionRect: Rectangle, captureParams: ScreenCaptureParameters): number;
    abstract getAudioDeviceInfo(): DeviceInfo;
    abstract startScreenCaptureByWindowId(windowId: any, regionRect: Rectangle, captureParams: ScreenCaptureParameters): number;
    abstract setScreenCaptureContentHint(contentHint: VideoContentHint): number;
    abstract updateScreenCaptureRegion(regionRect: Rectangle): number;
    abstract updateScreenCaptureParameters(captureParams: ScreenCaptureParameters): number;
    abstract startScreenCapture(captureParams: ScreenCaptureParameters2): number;
    abstract startScreenCaptureBySourceType(sourceType: VideoSourceType, config: ScreenCaptureConfiguration): number;
    abstract updateScreenCapture(captureParams: ScreenCaptureParameters2): number;
    abstract queryScreenCaptureCapability(): number;
    abstract setScreenCaptureScenario(screenScenario: ScreenScenarioType): number;
    abstract stopScreenCapture(): number;
    abstract stopScreenCaptureBySourceType(sourceType: VideoSourceType): number;
    abstract getCallId(): string;
    abstract rate(callId: string, rating: number, description: string): number;
    abstract complain(callId: string, description: string): number;
    abstract startRtmpStreamWithoutTranscoding(url: string): number;
    abstract startRtmpStreamWithTranscoding(url: string, transcoding: LiveTranscoding): number;
    abstract updateRtmpTranscoding(transcoding: LiveTranscoding): number;
    abstract stopRtmpStream(url: string): number;
    abstract startLocalVideoTranscoder(config: LocalTranscoderConfiguration): number;
    abstract updateLocalTranscoderConfiguration(config: LocalTranscoderConfiguration): number;
    abstract stopLocalVideoTranscoder(): number;
    abstract startCameraCapture(sourceType: VideoSourceType, config: CameraCapturerConfiguration): number;
    abstract stopCameraCapture(sourceType: VideoSourceType): number;
    abstract setCameraDeviceOrientation(type: VideoSourceType, orientation: VideoOrientation): number;
    abstract setScreenCaptureOrientation(type: VideoSourceType, orientation: VideoOrientation): number;
    abstract getConnectionState(): ConnectionStateType;
    abstract registerEventHandler(eventHandler: IRtcEngineEventHandler): boolean;
    abstract unregisterEventHandler(eventHandler: IRtcEngineEventHandler): boolean;
    abstract setRemoteUserPriority(uid: number, userPriority: PriorityType): number;
    abstract setEncryptionMode(encryptionMode: string): number;
    abstract setEncryptionSecret(secret: string): number;
    abstract enableEncryption(enabled: boolean, config: EncryptionConfig): number;
    abstract createDataStream(config: DataStreamConfig): number;
    abstract sendStreamMessage(streamId: number, data: Uint8Array, length: number): number;
    abstract addVideoWatermark(watermarkUrl: string, options: WatermarkOptions): number;
    abstract clearVideoWatermarks(): number;
    abstract pauseAudio(): number;
    abstract resumeAudio(): number;
    abstract enableWebSdkInteroperability(enabled: boolean): number;
    abstract sendCustomReportMessage(id: string, category: string, event: string, label: string, value: number): number;
    abstract registerMediaMetadataObserver(observer: IMetadataObserver, type: MetadataType): number;
    abstract unregisterMediaMetadataObserver(observer: IMetadataObserver, type: MetadataType): number;
    abstract startAudioFrameDump(channelId: string, userId: number, location: string, uuid: string, passwd: string, durationMs: number, autoUpload: boolean): number;
    abstract stopAudioFrameDump(channelId: string, userId: number, location: string): number;
    abstract setAINSMode(enabled: boolean, mode: AudioAinsMode): number;
    abstract registerLocalUserAccount(appId: string, userAccount: string): number;
    abstract joinChannelWithUserAccount(token: string, channelId: string, userAccount: string, options?: ChannelMediaOptions): number;
    abstract joinChannelWithUserAccountEx(token: string, channelId: string, userAccount: string, options: ChannelMediaOptions): number;
    abstract getUserInfoByUserAccount(userAccount: string): UserInfo;
    abstract getUserInfoByUid(uid: number): UserInfo;
    abstract startOrUpdateChannelMediaRelay(configuration: ChannelMediaRelayConfiguration): number;
    abstract startChannelMediaRelay(configuration: ChannelMediaRelayConfiguration): number;
    abstract updateChannelMediaRelay(configuration: ChannelMediaRelayConfiguration): number;
    abstract stopChannelMediaRelay(): number;
    abstract pauseAllChannelMediaRelay(): number;
    abstract resumeAllChannelMediaRelay(): number;
    abstract setDirectCdnStreamingAudioConfiguration(profile: AudioProfileType): number;
    abstract setDirectCdnStreamingVideoConfiguration(config: VideoEncoderConfiguration): number;
    abstract startDirectCdnStreaming(eventHandler: IDirectCdnStreamingEventHandler, publishUrl: string, options: DirectCdnStreamingMediaOptions): number;
    abstract stopDirectCdnStreaming(): number;
    abstract updateDirectCdnStreamingMediaOptions(options: DirectCdnStreamingMediaOptions): number;
    abstract startRhythmPlayer(sound1: string, sound2: string, config: CmviotRhythmPlayerConfig): number;
    abstract stopRhythmPlayer(): number;
    abstract configRhythmPlayer(config: CmviotRhythmPlayerConfig): number;
    abstract takeSnapshot(uid: number, filePath: string): number;
    abstract enableContentInspect(enabled: boolean, config: ContentInspectConfig): number;
    abstract adjustCustomAudioPublishVolume(trackId: number, volume: number): number;
    abstract adjustCustomAudioPlayoutVolume(trackId: number, volume: number): number;
    abstract setCloudProxy(proxyType: CloudProxyType): number;
    abstract setLocalAccessPoint(config: LocalAccessPointConfiguration): number;
    abstract setAdvancedAudioOptions(options: AdvancedAudioOptions, sourceType?: number): number;
    abstract setAVSyncSource(channelId: string, uid: number): number;
    abstract enableVideoImageSource(enable: boolean, options: ImageTrackOptions): number;
    abstract getCurrentMonotonicTimeInMs(): number;
    abstract enableWirelessAccelerate(enabled: boolean): number;
    abstract getNetworkType(): number;
    abstract setParameters(parameters: string): number;
    abstract startMediaRenderingTracing(): number;
    abstract enableInstantMediaRendering(): number;
    abstract getNtpWallTimeInMs(): number;
    abstract isFeatureAvailableOnDevice(type: FeatureType): boolean;
    abstract getAudioDeviceManager(): IAudioDeviceManager;
    abstract getVideoDeviceManager(): IVideoDeviceManager;
    abstract getMusicContentCenter(): IMusicContentCenter;
    abstract getMediaEngine(): IMediaEngine;
    abstract getLocalSpatialAudioEngine(): ILocalSpatialAudioEngine;
    abstract sendMetaData(metadata: Metadata, sourceType: VideoSourceType): number;
    abstract setMaxMetadataSize(size: number): number;
    abstract destroyRendererByView(view: any): void;
    abstract destroyRendererByConfig(sourceType: VideoSourceType, channelId?: string, uid?: number): void;
    abstract unregisterAudioEncodedFrameObserver(observer: IAudioEncodedFrameObserver): number;
    abstract getNativeHandle(): number;
}
export declare enum QualityReportFormatType {
    QualityReportJson = 0,
    QualityReportHtml = 1
}
export declare enum MediaDeviceStateType {
    MediaDeviceStateIdle = 0,
    MediaDeviceStateActive = 1,
    MediaDeviceStateDisabled = 2,
    MediaDeviceStateNotPresent = 4,
    MediaDeviceStateUnplugged = 8
}
export declare enum VideoProfileType {
    VideoProfileLandscape120p = 0,
    VideoProfileLandscape120p3 = 2,
    VideoProfileLandscape180p = 10,
    VideoProfileLandscape180p3 = 12,
    VideoProfileLandscape180p4 = 13,
    VideoProfileLandscape240p = 20,
    VideoProfileLandscape240p3 = 22,
    VideoProfileLandscape240p4 = 23,
    VideoProfileLandscape360p = 30,
    VideoProfileLandscape360p3 = 32,
    VideoProfileLandscape360p4 = 33,
    VideoProfileLandscape360p6 = 35,
    VideoProfileLandscape360p7 = 36,
    VideoProfileLandscape360p8 = 37,
    VideoProfileLandscape360p9 = 38,
    VideoProfileLandscape360p10 = 39,
    VideoProfileLandscape360p11 = 100,
    VideoProfileLandscape480p = 40,
    VideoProfileLandscape480p3 = 42,
    VideoProfileLandscape480p4 = 43,
    VideoProfileLandscape480p6 = 45,
    VideoProfileLandscape480p8 = 47,
    VideoProfileLandscape480p9 = 48,
    VideoProfileLandscape480p10 = 49,
    VideoProfileLandscape720p = 50,
    VideoProfileLandscape720p3 = 52,
    VideoProfileLandscape720p5 = 54,
    VideoProfileLandscape720p6 = 55,
    VideoProfileLandscape1080p = 60,
    VideoProfileLandscape1080p3 = 62,
    VideoProfileLandscape1080p5 = 64,
    VideoProfileLandscape1440p = 66,
    VideoProfileLandscape1440p2 = 67,
    VideoProfileLandscape4k = 70,
    VideoProfileLandscape4k3 = 72,
    VideoProfilePortrait120p = 1000,
    VideoProfilePortrait120p3 = 1002,
    VideoProfilePortrait180p = 1010,
    VideoProfilePortrait180p3 = 1012,
    VideoProfilePortrait180p4 = 1013,
    VideoProfilePortrait240p = 1020,
    VideoProfilePortrait240p3 = 1022,
    VideoProfilePortrait240p4 = 1023,
    VideoProfilePortrait360p = 1030,
    VideoProfilePortrait360p3 = 1032,
    VideoProfilePortrait360p4 = 1033,
    VideoProfilePortrait360p6 = 1035,
    VideoProfilePortrait360p7 = 1036,
    VideoProfilePortrait360p8 = 1037,
    VideoProfilePortrait360p9 = 1038,
    VideoProfilePortrait360p10 = 1039,
    VideoProfilePortrait360p11 = 1100,
    VideoProfilePortrait480p = 1040,
    VideoProfilePortrait480p3 = 1042,
    VideoProfilePortrait480p4 = 1043,
    VideoProfilePortrait480p6 = 1045,
    VideoProfilePortrait480p8 = 1047,
    VideoProfilePortrait480p9 = 1048,
    VideoProfilePortrait480p10 = 1049,
    VideoProfilePortrait720p = 1050,
    VideoProfilePortrait720p3 = 1052,
    VideoProfilePortrait720p5 = 1054,
    VideoProfilePortrait720p6 = 1055,
    VideoProfilePortrait1080p = 1060,
    VideoProfilePortrait1080p3 = 1062,
    VideoProfilePortrait1080p5 = 1064,
    VideoProfilePortrait1440p = 1066,
    VideoProfilePortrait1440p2 = 1067,
    VideoProfilePortrait4k = 1070,
    VideoProfilePortrait4k3 = 1072,
    VideoProfileDefault = 30
}
export declare class SDKBuildInfo {
    build?: number;
    version?: string;
}
export declare class VideoDeviceInfo {
    deviceId?: string;
    deviceName?: string;
}
export declare class AudioDeviceInfo {
    deviceId?: string;
    deviceName?: string;
}
//# sourceMappingURL=ICmviotRtcEngine.d.ts.map