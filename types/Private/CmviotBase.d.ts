import './extension/CmviotBaseExtension';
import { RenderModeType, VideoSourceType } from './CmviotMediaBase';
export declare enum ChannelProfileType {
    ChannelProfileCommunication = 0,
    ChannelProfileLiveBroadcasting = 1,
    ChannelProfileGame = 2,
    ChannelProfileCloudGaming = 3,
    ChannelProfileCommunication1v1 = 4
}
export declare enum WarnCodeType {
    WarnInvalidView = 8,
    WarnInitVideo = 16,
    WarnPending = 20,
    WarnNoAvailableChannel = 103,
    WarnLookupChannelTimeout = 104,
    WarnLookupChannelRejected = 105,
    WarnOpenChannelTimeout = 106,
    WarnOpenChannelRejected = 107,
    WarnSwitchLiveVideoTimeout = 111,
    WarnSetClientRoleTimeout = 118,
    WarnOpenChannelInvalidTicket = 121,
    WarnOpenChannelTryNextVos = 122,
    WarnChannelConnectionUnrecoverable = 131,
    WarnChannelConnectionIpChanged = 132,
    WarnChannelConnectionPortChanged = 133,
    WarnChannelSocketError = 134,
    WarnAudioMixingOpenError = 701,
    WarnAdmRuntimePlayoutWarning = 1014,
    WarnAdmRuntimeRecordingWarning = 1016,
    WarnAdmRecordAudioSilence = 1019,
    WarnAdmPlayoutMalfunction = 1020,
    WarnAdmRecordMalfunction = 1021,
    WarnAdmRecordAudioLowlevel = 1031,
    WarnAdmPlayoutAudioLowlevel = 1032,
    WarnAdmWindowsNoDataReadyEvent = 1040,
    WarnApmHowling = 1051,
    WarnAdmGlitchState = 1052,
    WarnAdmImproperSettings = 1053,
    WarnAdmWinCoreNoRecordingDevice = 1322,
    WarnAdmWinCoreNoPlayoutDevice = 1323,
    WarnAdmWinCoreImproperCaptureRelease = 1324
}
export declare enum ErrorCodeType {
    ErrOk = 0,
    ErrFailed = 1,
    ErrInvalidArgument = 2,
    ErrNotReady = 3,
    ErrNotSupported = 4,
    ErrRefused = 5,
    ErrBufferTooSmall = 6,
    ErrNotInitialized = 7,
    ErrInvalidState = 8,
    ErrNoPermission = 9,
    ErrTimedout = 10,
    ErrCanceled = 11,
    ErrTooOften = 12,
    ErrBindSocket = 13,
    ErrNetDown = 14,
    ErrJoinChannelRejected = 17,
    ErrLeaveChannelRejected = 18,
    ErrAlreadyInUse = 19,
    ErrAborted = 20,
    ErrInitNetEngine = 21,
    ErrResourceLimited = 22,
    ErrInvalidAppId = 101,
    ErrInvalidChannelName = 102,
    ErrNoServerResources = 103,
    ErrTokenExpired = 109,
    ErrInvalidToken = 110,
    ErrConnectionInterrupted = 111,
    ErrConnectionLost = 112,
    ErrNotInChannel = 113,
    ErrSizeTooLarge = 114,
    ErrBitrateLimit = 115,
    ErrTooManyDataStreams = 116,
    ErrStreamMessageTimeout = 117,
    ErrSetClientRoleNotAuthorized = 119,
    ErrDecryptionFailed = 120,
    ErrInvalidUserId = 121,
    ErrClientIsBannedByServer = 123,
    ErrEncryptedStreamNotAllowedPublish = 130,
    ErrLicenseCredentialInvalid = 131,
    ErrInvalidUserAccount = 134,
    ErrModuleNotFound = 157,
    ErrCertRaw = 157,
    ErrCertJsonPart = 158,
    ErrCertJsonInval = 159,
    ErrCertJsonNomem = 160,
    ErrCertCustom = 161,
    ErrCertCredential = 162,
    ErrCertSign = 163,
    ErrCertFail = 164,
    ErrCertBuf = 165,
    ErrCertNull = 166,
    ErrCertDuedate = 167,
    ErrCertRequest = 168,
    ErrPcmsendFormat = 200,
    ErrPcmsendBufferoverflow = 201,
    ErrLoginAlreadyLogin = 428,
    ErrLoadMediaEngine = 1001,
    ErrAdmGeneralError = 1005,
    ErrAdmInitPlayout = 1008,
    ErrAdmStartPlayout = 1009,
    ErrAdmStopPlayout = 1010,
    ErrAdmInitRecording = 1011,
    ErrAdmStartRecording = 1012,
    ErrAdmStopRecording = 1013,
    ErrVdmCameraNotAuthorized = 1501
}
export declare enum LicenseErrorType {
    LicenseErrInvalid = 1,
    LicenseErrExpire = 2,
    LicenseErrMinutesExceed = 3,
    LicenseErrLimitedPeriod = 4,
    LicenseErrDiffDevices = 5,
    LicenseErrInternal = 99
}
export declare enum AudioSessionOperationRestriction {
    AudioSessionOperationRestrictionNone = 0,
    AudioSessionOperationRestrictionSetCategory = 1,
    AudioSessionOperationRestrictionConfigureSession = 2,
    AudioSessionOperationRestrictionDeactivateSession = 4,
    AudioSessionOperationRestrictionAll = 128
}
export declare enum UserOfflineReasonType {
    UserOfflineQuit = 0,
    UserOfflineDropped = 1,
    UserOfflineBecomeAudience = 2
}
export declare enum InterfaceIdType {
    CmviotIidAudioDeviceManager = 1,
    CmviotIidVideoDeviceManager = 2,
    CmviotIidParameterEngine = 3,
    CmviotIidMediaEngine = 4,
    CmviotIidAudioEngine = 5,
    CmviotIidVideoEngine = 6,
    CmviotIidRtcConnection = 7,
    CmviotIidSignalingEngine = 8,
    CmviotIidMediaEngineRegulator = 9,
    CmviotIidCloudSpatialAudio = 10,
    CmviotIidLocalSpatialAudio = 11,
    CmviotIidStateSync = 13,
    CmviotIidMetachatService = 14,
    CmviotIidMusicContentCenter = 15,
    CmviotIidH265Transcoder = 16
}
export declare enum QualityType {
    QualityUnknown = 0,
    QualityExcellent = 1,
    QualityGood = 2,
    QualityPoor = 3,
    QualityBad = 4,
    QualityVbad = 5,
    QualityDown = 6,
    QualityUnsupported = 7,
    QualityDetecting = 8
}
export declare enum FitModeType {
    ModeCover = 1,
    ModeContain = 2
}
export declare enum VideoOrientation {
    VideoOrientation0 = 0,
    VideoOrientation90 = 90,
    VideoOrientation180 = 180,
    VideoOrientation270 = 270
}
export declare enum FrameRate {
    FrameRateFps1 = 1,
    FrameRateFps7 = 7,
    FrameRateFps10 = 10,
    FrameRateFps15 = 15,
    FrameRateFps24 = 24,
    FrameRateFps30 = 30,
    FrameRateFps60 = 60
}
export declare enum FrameWidth {
    FrameWidth960 = 960
}
export declare enum FrameHeight {
    FrameHeight540 = 540
}
export declare enum VideoFrameType {
    VideoFrameTypeBlankFrame = 0,
    VideoFrameTypeKeyFrame = 3,
    VideoFrameTypeDeltaFrame = 4,
    VideoFrameTypeBFrame = 5,
    VideoFrameTypeDroppableFrame = 6,
    VideoFrameTypeUnknow = 7
}
export declare enum OrientationMode {
    OrientationModeAdaptive = 0,
    OrientationModeFixedLandscape = 1,
    OrientationModeFixedPortrait = 2
}
export declare enum DegradationPreference {
    MaintainQuality = 0,
    MaintainFramerate = 1,
    MaintainBalanced = 2,
    MaintainResolution = 3,
    Disabled = 100
}
export declare class VideoDimensions {
    width?: number;
    height?: number;
}
export declare enum ScreenCaptureFramerateCapability {
    ScreenCaptureFramerateCapability15Fps = 0,
    ScreenCaptureFramerateCapability30Fps = 1,
    ScreenCaptureFramerateCapability60Fps = 2
}
export declare enum VideoCodecCapabilityLevel {
    CodecCapabilityLevelUnspecified = -1,
    CodecCapabilityLevelBasicSupport = 5,
    CodecCapabilityLevel1080p30fps = 10,
    CodecCapabilityLevel1080p60fps = 20,
    CodecCapabilityLevel4k60fps = 30
}
export declare enum VideoCodecType {
    VideoCodecNone = 0,
    VideoCodecVp8 = 1,
    VideoCodecH264 = 2,
    VideoCodecH265 = 3,
    VideoCodecGeneric = 6,
    VideoCodecGenericH264 = 7,
    VideoCodecAv1 = 12,
    VideoCodecVp9 = 13,
    VideoCodecGenericJpeg = 20
}
export declare enum TCcMode {
    CcEnabled = 0,
    CcDisabled = 1
}
export declare class SenderOptions {
    ccMode?: TCcMode;
    codecType?: VideoCodecType;
    targetBitrate?: number;
}
export declare enum AudioCodecType {
    AudioCodecOpus = 1,
    AudioCodecPcma = 3,
    AudioCodecPcmu = 4,
    AudioCodecG722 = 5,
    AudioCodecAaclc = 8,
    AudioCodecHeaac = 9,
    AudioCodecJc1 = 10,
    AudioCodecHeaac2 = 11,
    AudioCodecLpcnet = 12
}
export declare enum AudioEncodingType {
    AudioEncodingTypeAac16000Low = 65793,
    AudioEncodingTypeAac16000Medium = 65794,
    AudioEncodingTypeAac32000Low = 66049,
    AudioEncodingTypeAac32000Medium = 66050,
    AudioEncodingTypeAac32000High = 66051,
    AudioEncodingTypeAac48000Medium = 66306,
    AudioEncodingTypeAac48000High = 66307,
    AudioEncodingTypeOpus16000Low = 131329,
    AudioEncodingTypeOpus16000Medium = 131330,
    AudioEncodingTypeOpus48000Medium = 131842,
    AudioEncodingTypeOpus48000High = 131843
}
export declare enum WatermarkFitMode {
    FitModeCoverPosition = 0,
    FitModeUseImageRatio = 1
}
export declare class EncodedAudioFrameAdvancedSettings {
    speech?: boolean;
    sendEvenIfEmpty?: boolean;
}
export declare class EncodedAudioFrameInfo {
    codec?: AudioCodecType;
    sampleRateHz?: number;
    samplesPerChannel?: number;
    numberOfChannels?: number;
    advancedSettings?: EncodedAudioFrameAdvancedSettings;
    captureTimeMs?: number;
}
export declare class AudioPcmDataInfo {
    samplesPerChannel?: number;
    channelNum?: number;
    samplesOut?: number;
    elapsedTimeMs?: number;
    ntpTimeMs?: number;
}
export declare enum H264PacketizeMode {
    NonInterleaved = 0,
    SingleNalUnit = 1
}
export declare enum VideoStreamType {
    VideoStreamHigh = 0,
    VideoStreamLow = 1
}
export declare class VideoSubscriptionOptions {
    type?: VideoStreamType;
    encodedFrameOnly?: boolean;
}
export declare class EncodedVideoFrameInfo {
    codecType?: VideoCodecType;
    width?: number;
    height?: number;
    framesPerSecond?: number;
    frameType?: VideoFrameType;
    rotation?: VideoOrientation;
    trackId?: number;
    captureTimeMs?: number;
    decodeTimeMs?: number;
    uid?: number;
    streamType?: VideoStreamType;
}
export declare enum CompressionPreference {
    PreferLowLatency = 0,
    PreferQuality = 1
}
export declare enum EncodingPreference {
    PreferAuto = -1,
    PreferSoftware = 0,
    PreferHardware = 1
}
export declare class AdvanceOptions {
    encodingPreference?: EncodingPreference;
    compressionPreference?: CompressionPreference;
}
export declare enum VideoMirrorModeType {
    VideoMirrorModeAuto = 0,
    VideoMirrorModeEnabled = 1,
    VideoMirrorModeDisabled = 2
}
export declare enum CodecCapMask {
    CodecCapMaskNone = 0,
    CodecCapMaskHwDec = 1,
    CodecCapMaskHwEnc = 2,
    CodecCapMaskSwDec = 4,
    CodecCapMaskSwEnc = 8
}
export declare class CodecCapLevels {
    hwDecodingLevel?: VideoCodecCapabilityLevel;
    swDecodingLevel?: VideoCodecCapabilityLevel;
}
export declare class CodecCapInfo {
    codecType?: VideoCodecType;
    codecCapMask?: number;
    codecLevels?: CodecCapLevels;
}
export declare class VideoEncoderConfiguration {
    codecType?: VideoCodecType;
    dimensions?: VideoDimensions;
    frameRate?: number;
    bitrate?: number;
    minBitrate?: number;
    orientationMode?: OrientationMode;
    degradationPreference?: DegradationPreference;
    mirrorMode?: VideoMirrorModeType;
    advanceOptions?: AdvanceOptions;
}
export declare class DataStreamConfig {
    syncWithAudio?: boolean;
    ordered?: boolean;
}
export declare enum SimulcastStreamMode {
    AutoSimulcastStream = -1,
    DisableSimulcastStream = 0,
    EnableSimulcastStream = 1
}
export declare class SimulcastStreamConfig {
    dimensions?: VideoDimensions;
    kBitrate?: number;
    framerate?: number;
}
export declare class Rectangle {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
}
export declare class WatermarkRatio {
    xRatio?: number;
    yRatio?: number;
    widthRatio?: number;
}
export declare class WatermarkOptions {
    visibleInPreview?: boolean;
    positionInLandscapeMode?: Rectangle;
    positionInPortraitMode?: Rectangle;
    watermarkRatio?: WatermarkRatio;
    mode?: WatermarkFitMode;
}
export declare class RtcStats {
    duration?: number;
    txBytes?: number;
    rxBytes?: number;
    txAudioBytes?: number;
    txVideoBytes?: number;
    rxAudioBytes?: number;
    rxVideoBytes?: number;
    txKBitRate?: number;
    rxKBitRate?: number;
    rxAudioKBitRate?: number;
    txAudioKBitRate?: number;
    rxVideoKBitRate?: number;
    txVideoKBitRate?: number;
    lastmileDelay?: number;
    userCount?: number;
    cpuAppUsage?: number;
    cpuTotalUsage?: number;
    gatewayRtt?: number;
    memoryAppUsageRatio?: number;
    memoryTotalUsageRatio?: number;
    memoryAppUsageInKbytes?: number;
    connectTimeMs?: number;
    firstAudioPacketDuration?: number;
    firstVideoPacketDuration?: number;
    firstVideoKeyFramePacketDuration?: number;
    packetsBeforeFirstKeyFramePacket?: number;
    firstAudioPacketDurationAfterUnmute?: number;
    firstVideoPacketDurationAfterUnmute?: number;
    firstVideoKeyFramePacketDurationAfterUnmute?: number;
    firstVideoKeyFrameDecodedDurationAfterUnmute?: number;
    firstVideoKeyFrameRenderedDurationAfterUnmute?: number;
    txPacketLossRate?: number;
    rxPacketLossRate?: number;
}
export declare enum ClientRoleType {
    ClientRoleBroadcaster = 1,
    ClientRoleAudience = 2
}
export declare enum QualityAdaptIndication {
    AdaptNone = 0,
    AdaptUpBandwidth = 1,
    AdaptDownBandwidth = 2
}
export declare enum AudienceLatencyLevelType {
    AudienceLatencyLevelLowLatency = 1,
    AudienceLatencyLevelUltraLowLatency = 2
}
export declare class ClientRoleOptions {
    audienceLatencyLevel?: AudienceLatencyLevelType;
}
export declare enum ExperienceQualityType {
    ExperienceQualityGood = 0,
    ExperienceQualityBad = 1
}
export declare enum ExperiencePoorReason {
    ExperienceReasonNone = 0,
    RemoteNetworkQualityPoor = 1,
    LocalNetworkQualityPoor = 2,
    WirelessSignalPoor = 4,
    WifiBluetoothCoexist = 8
}
export declare enum AudioAinsMode {
    AinsModeBalanced = 0,
    AinsModeAggressive = 1,
    AinsModeUltralowlatency = 2
}
export declare enum AudioProfileType {
    AudioProfileDefault = 0,
    AudioProfileSpeechStandard = 1,
    AudioProfileMusicStandard = 2,
    AudioProfileMusicStandardStereo = 3,
    AudioProfileMusicHighQuality = 4,
    AudioProfileMusicHighQualityStereo = 5,
    AudioProfileIot = 6,
    AudioProfileNum = 7
}
export declare enum AudioScenarioType {
    AudioScenarioDefault = 0,
    AudioScenarioGameStreaming = 3,
    AudioScenarioChatroom = 5,
    AudioScenarioChorus = 7,
    AudioScenarioMeeting = 8,
    AudioScenarioNum = 9
}
export declare class VideoFormat {
    width?: number;
    height?: number;
    fps?: number;
}
export declare enum VideoContentHint {
    ContentHintNone = 0,
    ContentHintMotion = 1,
    ContentHintDetails = 2
}
export declare enum ScreenScenarioType {
    ScreenScenarioDocument = 1,
    ScreenScenarioGaming = 2,
    ScreenScenarioVideo = 3,
    ScreenScenarioRdc = 4
}
export declare enum VideoApplicationScenarioType {
    ApplicationScenarioGeneral = 0,
    ApplicationScenarioMeeting = 1
}
export declare enum CaptureBrightnessLevelType {
    CaptureBrightnessLevelInvalid = -1,
    CaptureBrightnessLevelNormal = 0,
    CaptureBrightnessLevelBright = 1,
    CaptureBrightnessLevelDark = 2
}
export declare enum LocalAudioStreamState {
    LocalAudioStreamStateStopped = 0,
    LocalAudioStreamStateRecording = 1,
    LocalAudioStreamStateEncoding = 2,
    LocalAudioStreamStateFailed = 3
}
export declare enum LocalAudioStreamError {
    LocalAudioStreamErrorOk = 0,
    LocalAudioStreamErrorFailure = 1,
    LocalAudioStreamErrorDeviceNoPermission = 2,
    LocalAudioStreamErrorDeviceBusy = 3,
    LocalAudioStreamErrorRecordFailure = 4,
    LocalAudioStreamErrorEncodeFailure = 5,
    LocalAudioStreamErrorNoRecordingDevice = 6,
    LocalAudioStreamErrorNoPlayoutDevice = 7,
    LocalAudioStreamErrorInterrupted = 8,
    LocalAudioStreamErrorRecordInvalidId = 9,
    LocalAudioStreamErrorPlayoutInvalidId = 10
}
export declare enum LocalVideoStreamState {
    LocalVideoStreamStateStopped = 0,
    LocalVideoStreamStateCapturing = 1,
    LocalVideoStreamStateEncoding = 2,
    LocalVideoStreamStateFailed = 3
}
export declare enum LocalVideoStreamError {
    LocalVideoStreamErrorOk = 0,
    LocalVideoStreamErrorFailure = 1,
    LocalVideoStreamErrorDeviceNoPermission = 2,
    LocalVideoStreamErrorDeviceBusy = 3,
    LocalVideoStreamErrorCaptureFailure = 4,
    LocalVideoStreamErrorEncodeFailure = 5,
    LocalVideoStreamErrorCaptureInbackground = 6,
    LocalVideoStreamErrorCaptureMultipleForegroundApps = 7,
    LocalVideoStreamErrorDeviceNotFound = 8,
    LocalVideoStreamErrorDeviceDisconnected = 9,
    LocalVideoStreamErrorDeviceInvalidId = 10,
    LocalVideoStreamErrorDeviceSystemPressure = 101,
    LocalVideoStreamErrorScreenCaptureWindowMinimized = 11,
    LocalVideoStreamErrorScreenCaptureWindowClosed = 12,
    LocalVideoStreamErrorScreenCaptureWindowOccluded = 13,
    LocalVideoStreamErrorScreenCaptureWindowNotSupported = 20,
    LocalVideoStreamErrorScreenCaptureFailure = 21,
    LocalVideoStreamErrorScreenCaptureNoPermission = 22,
    LocalVideoStreamErrorScreenCapturePaused = 23,
    LocalVideoStreamErrorScreenCaptureResumed = 24,
    LocalVideoStreamErrorScreenCaptureWindowHidden = 25,
    LocalVideoStreamErrorScreenCaptureWindowRecoverFromHidden = 26,
    LocalVideoStreamErrorScreenCaptureWindowRecoverFromMinimized = 27
}
export declare enum RemoteAudioState {
    RemoteAudioStateStopped = 0,
    RemoteAudioStateStarting = 1,
    RemoteAudioStateDecoding = 2,
    RemoteAudioStateFrozen = 3,
    RemoteAudioStateFailed = 4
}
export declare enum RemoteAudioStateReason {
    RemoteAudioReasonInternal = 0,
    RemoteAudioReasonNetworkCongestion = 1,
    RemoteAudioReasonNetworkRecovery = 2,
    RemoteAudioReasonLocalMuted = 3,
    RemoteAudioReasonLocalUnmuted = 4,
    RemoteAudioReasonRemoteMuted = 5,
    RemoteAudioReasonRemoteUnmuted = 6,
    RemoteAudioReasonRemoteOffline = 7
}
export declare enum RemoteVideoState {
    RemoteVideoStateStopped = 0,
    RemoteVideoStateStarting = 1,
    RemoteVideoStateDecoding = 2,
    RemoteVideoStateFrozen = 3,
    RemoteVideoStateFailed = 4
}
export declare enum RemoteVideoStateReason {
    RemoteVideoStateReasonInternal = 0,
    RemoteVideoStateReasonNetworkCongestion = 1,
    RemoteVideoStateReasonNetworkRecovery = 2,
    RemoteVideoStateReasonLocalMuted = 3,
    RemoteVideoStateReasonLocalUnmuted = 4,
    RemoteVideoStateReasonRemoteMuted = 5,
    RemoteVideoStateReasonRemoteUnmuted = 6,
    RemoteVideoStateReasonRemoteOffline = 7,
    RemoteVideoStateReasonAudioFallback = 8,
    RemoteVideoStateReasonAudioFallbackRecovery = 9,
    RemoteVideoStateReasonVideoStreamTypeChangeToLow = 10,
    RemoteVideoStateReasonVideoStreamTypeChangeToHigh = 11,
    RemoteVideoStateReasonSdkInBackground = 12,
    RemoteVideoStateReasonCodecNotSupport = 13
}
export declare enum RemoteUserState {
    UserStateMuteAudio = 1,
    UserStateMuteVideo = 2,
    UserStateEnableVideo = 16,
    UserStateEnableLocalVideo = 256
}
export declare class VideoTrackInfo {
    isLocal?: boolean;
    ownerUid?: number;
    trackId?: number;
    channelId?: string;
    streamType?: VideoStreamType;
    codecType?: VideoCodecType;
    encodedFrameOnly?: boolean;
    sourceType?: VideoSourceType;
    observationPosition?: number;
}
export declare enum RemoteVideoDownscaleLevel {
    RemoteVideoDownscaleLevelNone = 0,
    RemoteVideoDownscaleLevel1 = 1,
    RemoteVideoDownscaleLevel2 = 2,
    RemoteVideoDownscaleLevel3 = 3,
    RemoteVideoDownscaleLevel4 = 4
}
export declare class AudioVolumeInfo {
    uid?: number;
    volume?: number;
    vad?: number;
    voicePitch?: number;
}
export declare class DeviceInfo {
    isLowLatencyAudioSupported?: boolean;
}
export declare class Packet {
    buffer?: Uint8Array;
    size?: number;
}
export declare enum AudioSampleRateType {
    AudioSampleRate32000 = 32000,
    AudioSampleRate44100 = 44100,
    AudioSampleRate48000 = 48000
}
export declare enum VideoCodecTypeForStream {
    VideoCodecH264ForStream = 1,
    VideoCodecH265ForStream = 2
}
export declare enum VideoCodecProfileType {
    VideoCodecProfileBaseline = 66,
    VideoCodecProfileMain = 77,
    VideoCodecProfileHigh = 100
}
export declare enum AudioCodecProfileType {
    AudioCodecProfileLcAac = 0,
    AudioCodecProfileHeAac = 1,
    AudioCodecProfileHeAacV2 = 2
}
export declare class LocalAudioStats {
    numChannels?: number;
    sentSampleRate?: number;
    sentBitrate?: number;
    internalCodec?: number;
    txPacketLossRate?: number;
    audioDeviceDelay?: number;
}
export declare enum RtmpStreamPublishState {
    RtmpStreamPublishStateIdle = 0,
    RtmpStreamPublishStateConnecting = 1,
    RtmpStreamPublishStateRunning = 2,
    RtmpStreamPublishStateRecovering = 3,
    RtmpStreamPublishStateFailure = 4,
    RtmpStreamPublishStateDisconnecting = 5
}
export declare enum RtmpStreamPublishErrorType {
    RtmpStreamPublishErrorOk = 0,
    RtmpStreamPublishErrorInvalidArgument = 1,
    RtmpStreamPublishErrorEncryptedStreamNotAllowed = 2,
    RtmpStreamPublishErrorConnectionTimeout = 3,
    RtmpStreamPublishErrorInternalServerError = 4,
    RtmpStreamPublishErrorRtmpServerError = 5,
    RtmpStreamPublishErrorTooOften = 6,
    RtmpStreamPublishErrorReachLimit = 7,
    RtmpStreamPublishErrorNotAuthorized = 8,
    RtmpStreamPublishErrorStreamNotFound = 9,
    RtmpStreamPublishErrorFormatNotSupported = 10,
    RtmpStreamPublishErrorNotBroadcaster = 11,
    RtmpStreamPublishErrorTranscodingNoMixStream = 13,
    RtmpStreamPublishErrorNetDown = 14,
    RtmpStreamPublishErrorInvalidAppid = 15,
    RtmpStreamPublishErrorInvalidPrivilege = 16,
    RtmpStreamUnpublishErrorOk = 100
}
export declare enum RtmpStreamingEvent {
    RtmpStreamingEventFailedLoadImage = 1,
    RtmpStreamingEventUrlAlreadyInUse = 2,
    RtmpStreamingEventAdvancedFeatureNotSupport = 3,
    RtmpStreamingEventRequestTooOften = 4
}
export declare class RtcImage {
    url?: string;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    zOrder?: number;
    alpha?: number;
}
export declare class LiveStreamAdvancedFeature {
    featureName?: string;
    opened?: boolean;
}
export declare enum ConnectionStateType {
    ConnectionStateDisconnected = 1,
    ConnectionStateConnecting = 2,
    ConnectionStateConnected = 3,
    ConnectionStateReconnecting = 4,
    ConnectionStateFailed = 5
}
export declare class TranscodingUser {
    uid?: number;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    zOrder?: number;
    alpha?: number;
    audioChannel?: number;
}
export declare class LiveTranscoding {
    width?: number;
    height?: number;
    videoBitrate?: number;
    videoFramerate?: number;
    lowLatency?: boolean;
    videoGop?: number;
    videoCodecProfile?: VideoCodecProfileType;
    backgroundColor?: number;
    videoCodecType?: VideoCodecTypeForStream;
    userCount?: number;
    transcodingUsers?: TranscodingUser[];
    transcodingExtraInfo?: string;
    metadata?: string;
    watermark?: RtcImage[];
    watermarkCount?: number;
    backgroundImage?: RtcImage[];
    backgroundImageCount?: number;
    audioSampleRate?: AudioSampleRateType;
    audioBitrate?: number;
    audioChannels?: number;
    audioCodecProfile?: AudioCodecProfileType;
    advancedFeatures?: LiveStreamAdvancedFeature[];
    advancedFeatureCount?: number;
}
export declare class TranscodingVideoStream {
    sourceType?: VideoSourceType;
    remoteUserUid?: number;
    imageUrl?: string;
    mediaPlayerId?: number;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    zOrder?: number;
    alpha?: number;
    mirror?: boolean;
}
export declare class LocalTranscoderConfiguration {
    streamCount?: number;
    videoInputStreams?: TranscodingVideoStream[];
    videoOutputConfiguration?: VideoEncoderConfiguration;
    syncWithPrimaryCamera?: boolean;
}
export declare enum VideoTranscoderError {
    VtErrOk = 0,
    VtErrVideoSourceNotReady = 1,
    VtErrInvalidVideoSourceType = 2,
    VtErrInvalidImagePath = 3,
    VtErrUnsupportImageFormat = 4,
    VtErrInvalidLayout = 5,
    VtErrInternal = 20
}
export declare class LastmileProbeConfig {
    probeUplink?: boolean;
    probeDownlink?: boolean;
    expectedUplinkBitrate?: number;
    expectedDownlinkBitrate?: number;
}
export declare enum LastmileProbeResultState {
    LastmileProbeResultComplete = 1,
    LastmileProbeResultIncompleteNoBwe = 2,
    LastmileProbeResultUnavailable = 3
}
export declare class LastmileProbeOneWayResult {
    packetLossRate?: number;
    jitter?: number;
    availableBandwidth?: number;
}
export declare class LastmileProbeResult {
    state?: LastmileProbeResultState;
    uplinkReport?: LastmileProbeOneWayResult;
    downlinkReport?: LastmileProbeOneWayResult;
    rtt?: number;
}
export declare enum ConnectionChangedReasonType {
    ConnectionChangedConnecting = 0,
    ConnectionChangedJoinSuccess = 1,
    ConnectionChangedInterrupted = 2,
    ConnectionChangedBannedByServer = 3,
    ConnectionChangedJoinFailed = 4,
    ConnectionChangedLeaveChannel = 5,
    ConnectionChangedInvalidAppId = 6,
    ConnectionChangedInvalidChannelName = 7,
    ConnectionChangedInvalidToken = 8,
    ConnectionChangedTokenExpired = 9,
    ConnectionChangedRejectedByServer = 10,
    ConnectionChangedSettingProxyServer = 11,
    ConnectionChangedRenewToken = 12,
    ConnectionChangedClientIpAddressChanged = 13,
    ConnectionChangedKeepAliveTimeout = 14,
    ConnectionChangedRejoinSuccess = 15,
    ConnectionChangedLost = 16,
    ConnectionChangedEchoTest = 17,
    ConnectionChangedClientIpAddressChangedByUser = 18,
    ConnectionChangedSameUidLogin = 19,
    ConnectionChangedTooManyBroadcasters = 20,
    ConnectionChangedLicenseValidationFailure = 21,
    ConnectionChangedCertificationVeryfyFailure = 22
}
export declare enum ClientRoleChangeFailedReason {
    ClientRoleChangeFailedTooManyBroadcasters = 1,
    ClientRoleChangeFailedNotAuthorized = 2,
    ClientRoleChangeFailedRequestTimeOut = 3,
    ClientRoleChangeFailedConnectionFailed = 4
}
export declare enum WlaccMessageReason {
    WlaccMessageReasonWeakSignal = 0,
    WlaccMessageReasonChannelCongestion = 1
}
export declare enum WlaccSuggestAction {
    WlaccSuggestActionCloseToWifi = 0,
    WlaccSuggestActionConnectSsid = 1,
    WlaccSuggestActionCheck5g = 2,
    WlaccSuggestActionModifySsid = 3
}
export declare class WlAccStats {
    e2eDelayPercent?: number;
    frozenRatioPercent?: number;
    lossRatePercent?: number;
}
export declare enum NetworkType {
    NetworkTypeUnknown = -1,
    NetworkTypeDisconnected = 0,
    NetworkTypeLan = 1,
    NetworkTypeWifi = 2,
    NetworkTypeMobile2g = 3,
    NetworkTypeMobile3g = 4,
    NetworkTypeMobile4g = 5,
    NetworkTypeMobile5g = 6
}
export declare enum VideoViewSetupMode {
    VideoViewSetupReplace = 0,
    VideoViewSetupAdd = 1,
    VideoViewSetupRemove = 2
}
export declare class VideoCanvas {
    view?: any;
    uid?: number;
    backgroundColor?: number;
    renderMode?: RenderModeType;
    mirrorMode?: VideoMirrorModeType;
    setupMode?: VideoViewSetupMode;
    sourceType?: VideoSourceType;
    mediaPlayerId?: number;
    cropArea?: Rectangle;
    enableAlphaMask?: boolean;
}
export declare enum LighteningContrastLevel {
    LighteningContrastLow = 0,
    LighteningContrastNormal = 1,
    LighteningContrastHigh = 2
}
export declare class BeautyOptions {
    lighteningContrastLevel?: LighteningContrastLevel;
    lighteningLevel?: number;
    smoothnessLevel?: number;
    rednessLevel?: number;
    sharpnessLevel?: number;
}
export declare enum LowLightEnhanceMode {
    LowLightEnhanceAuto = 0,
    LowLightEnhanceManual = 1
}
export declare enum LowLightEnhanceLevel {
    LowLightEnhanceLevelHighQuality = 0,
    LowLightEnhanceLevelFast = 1
}
export declare class LowlightEnhanceOptions {
    mode?: LowLightEnhanceMode;
    level?: LowLightEnhanceLevel;
}
export declare enum VideoDenoiserMode {
    VideoDenoiserAuto = 0,
    VideoDenoiserManual = 1
}
export declare enum VideoDenoiserLevel {
    VideoDenoiserLevelHighQuality = 0,
    VideoDenoiserLevelFast = 1,
    VideoDenoiserLevelStrength = 2
}
export declare class VideoDenoiserOptions {
    mode?: VideoDenoiserMode;
    level?: VideoDenoiserLevel;
}
export declare class ColorEnhanceOptions {
    strengthLevel?: number;
    skinProtectLevel?: number;
}
export declare enum BackgroundSourceType {
    BackgroundNone = 0,
    BackgroundColor = 1,
    BackgroundImg = 2,
    BackgroundBlur = 3,
    BackgroundVideo = 4
}
export declare enum BackgroundBlurDegree {
    BlurDegreeLow = 1,
    BlurDegreeMedium = 2,
    BlurDegreeHigh = 3
}
export declare class VirtualBackgroundSource {
    background_source_type?: BackgroundSourceType;
    color?: number;
    source?: string;
    blur_degree?: BackgroundBlurDegree;
}
export declare enum SegModelType {
    SegModelAi = 1,
    SegModelGreen = 2
}
export declare class SegmentationProperty {
    modelType?: SegModelType;
    greenCapacity?: number;
}
export declare enum AudioTrackType {
    AudioTrackInvalid = -1,
    AudioTrackMixable = 0,
    AudioTrackDirect = 1
}
export declare class AudioTrackConfig {
    enableLocalPlayback?: boolean;
}
export declare enum VoiceBeautifierPreset {
    VoiceBeautifierOff = 0,
    ChatBeautifierMagnetic = 16843008,
    ChatBeautifierFresh = 16843264,
    ChatBeautifierVitality = 16843520,
    SingingBeautifier = 16908544,
    TimbreTransformationVigorous = 16974080,
    TimbreTransformationDeep = 16974336,
    TimbreTransformationMellow = 16974592,
    TimbreTransformationFalsetto = 16974848,
    TimbreTransformationFull = 16975104,
    TimbreTransformationClear = 16975360,
    TimbreTransformationResounding = 16975616,
    TimbreTransformationRinging = 16975872,
    UltraHighQualityVoice = 17039616
}
export declare enum AudioEffectPreset {
    AudioEffectOff = 0,
    RoomAcousticsKtv = 33620224,
    RoomAcousticsVocalConcert = 33620480,
    RoomAcousticsStudio = 33620736,
    RoomAcousticsPhonograph = 33620992,
    RoomAcousticsVirtualStereo = 33621248,
    RoomAcousticsSpacial = 33621504,
    RoomAcousticsEthereal = 33621760,
    RoomAcoustics3dVoice = 33622016,
    RoomAcousticsVirtualSurroundSound = 33622272,
    VoiceChangerEffectUncle = 33685760,
    VoiceChangerEffectOldman = 33686016,
    VoiceChangerEffectBoy = 33686272,
    VoiceChangerEffectSister = 33686528,
    VoiceChangerEffectGirl = 33686784,
    VoiceChangerEffectPigking = 33687040,
    VoiceChangerEffectHulk = 33687296,
    StyleTransformationRnb = 33751296,
    StyleTransformationPopular = 33751552,
    PitchCorrection = 33816832
}
export declare enum VoiceConversionPreset {
    VoiceConversionOff = 0,
    VoiceChangerNeutral = 50397440,
    VoiceChangerSweet = 50397696,
    VoiceChangerSolid = 50397952,
    VoiceChangerBass = 50398208,
    VoiceChangerCartoon = 50398464,
    VoiceChangerChildlike = 50398720,
    VoiceChangerPhoneOperator = 50398976,
    VoiceChangerMonster = 50399232,
    VoiceChangerTransformers = 50399488,
    VoiceChangerGroot = 50399744,
    VoiceChangerDarthVader = 50400000,
    VoiceChangerIronLady = 50400256,
    VoiceChangerShinChan = 50400512,
    VoiceChangerGirlishMan = 50400768,
    VoiceChangerChipmunk = 50401024
}
export declare enum HeadphoneEqualizerPreset {
    HeadphoneEqualizerOff = 0,
    HeadphoneEqualizerOverear = 67108865,
    HeadphoneEqualizerInear = 67108866
}
export declare class ScreenCaptureParameters {
    dimensions?: VideoDimensions;
    frameRate?: number;
    bitrate?: number;
    captureMouseCursor?: boolean;
    windowFocus?: boolean;
    excludeWindowList?: any[];
    excludeWindowCount?: number;
    highLightWidth?: number;
    highLightColor?: number;
    enableHighLight?: boolean;
}
export declare enum AudioRecordingQualityType {
    AudioRecordingQualityLow = 0,
    AudioRecordingQualityMedium = 1,
    AudioRecordingQualityHigh = 2,
    AudioRecordingQualityUltraHigh = 3
}
export declare enum AudioFileRecordingType {
    AudioFileRecordingMic = 1,
    AudioFileRecordingPlayback = 2,
    AudioFileRecordingMixed = 3
}
export declare enum AudioEncodedFrameObserverPosition {
    AudioEncodedFrameObserverPositionRecord = 1,
    AudioEncodedFrameObserverPositionPlayback = 2,
    AudioEncodedFrameObserverPositionMixed = 3
}
export declare class AudioRecordingConfiguration {
    filePath?: string;
    encode?: boolean;
    sampleRate?: number;
    fileRecordingType?: AudioFileRecordingType;
    quality?: AudioRecordingQualityType;
    recordingChannel?: number;
}
export declare class AudioEncodedFrameObserverConfig {
    postionType?: AudioEncodedFrameObserverPosition;
    encodingType?: AudioEncodingType;
}
export interface IAudioEncodedFrameObserver {
    onRecordAudioEncodedFrame?(frameBuffer: Uint8Array, length: number, audioEncodedFrameInfo: EncodedAudioFrameInfo): void;
    onPlaybackAudioEncodedFrame?(frameBuffer: Uint8Array, length: number, audioEncodedFrameInfo: EncodedAudioFrameInfo): void;
    onMixedAudioEncodedFrame?(frameBuffer: Uint8Array, length: number, audioEncodedFrameInfo: EncodedAudioFrameInfo): void;
}
export declare enum AreaCode {
    AreaCodeCn = 1,
    AreaCodeNa = 2,
    AreaCodeEu = 4,
    AreaCodeAs = 8,
    AreaCodeJp = 16,
    AreaCodeIn = 32,
    AreaCodeGlob = 4294967295
}
export declare enum AreaCodeEx {
    AreaCodeOc = 64,
    AreaCodeSa = 128,
    AreaCodeAf = 256,
    AreaCodeKr = 512,
    AreaCodeHkmc = 1024,
    AreaCodeUs = 2048,
    AreaCodeOvs = 4294967294
}
export declare enum ChannelMediaRelayError {
    RelayOk = 0,
    RelayErrorServerErrorResponse = 1,
    RelayErrorServerNoResponse = 2,
    RelayErrorNoResourceAvailable = 3,
    RelayErrorFailedJoinSrc = 4,
    RelayErrorFailedJoinDest = 5,
    RelayErrorFailedPacketReceivedFromSrc = 6,
    RelayErrorFailedPacketSentToDest = 7,
    RelayErrorServerConnectionLost = 8,
    RelayErrorInternalError = 9,
    RelayErrorSrcTokenExpired = 10,
    RelayErrorDestTokenExpired = 11
}
export declare enum ChannelMediaRelayEvent {
    RelayEventNetworkDisconnected = 0,
    RelayEventNetworkConnected = 1,
    RelayEventPacketJoinedSrcChannel = 2,
    RelayEventPacketJoinedDestChannel = 3,
    RelayEventPacketSentToDestChannel = 4,
    RelayEventPacketReceivedVideoFromSrc = 5,
    RelayEventPacketReceivedAudioFromSrc = 6,
    RelayEventPacketUpdateDestChannel = 7,
    RelayEventPacketUpdateDestChannelRefused = 8,
    RelayEventPacketUpdateDestChannelNotChange = 9,
    RelayEventPacketUpdateDestChannelIsNull = 10,
    RelayEventVideoProfileUpdate = 11,
    RelayEventPauseSendPacketToDestChannelSuccess = 12,
    RelayEventPauseSendPacketToDestChannelFailed = 13,
    RelayEventResumeSendPacketToDestChannelSuccess = 14,
    RelayEventResumeSendPacketToDestChannelFailed = 15
}
export declare enum ChannelMediaRelayState {
    RelayStateIdle = 0,
    RelayStateConnecting = 1,
    RelayStateRunning = 2,
    RelayStateFailure = 3
}
export declare class ChannelMediaInfo {
    channelName?: string;
    token?: string;
    uid?: number;
}
export declare class ChannelMediaRelayConfiguration {
    srcInfo?: ChannelMediaInfo;
    destInfos?: ChannelMediaInfo[];
    destCount?: number;
}
export declare class UplinkNetworkInfo {
    video_encoder_target_bitrate_bps?: number;
}
export declare class PeerDownlinkInfo {
    uid?: string;
    stream_type?: VideoStreamType;
    current_downscale_level?: RemoteVideoDownscaleLevel;
    expected_bitrate_bps?: number;
}
export declare class DownlinkNetworkInfo {
    lastmile_buffer_delay_time_ms?: number;
    bandwidth_estimation_bps?: number;
    total_downscale_level_count?: number;
    peer_downlink_info?: PeerDownlinkInfo[];
    total_received_video_count?: number;
}
export declare enum EncryptionMode {
    Aes128Xts = 1,
    Aes128Ecb = 2,
    Aes256Xts = 3,
    Sm4128Ecb = 4,
    Aes128Gcm = 5,
    Aes256Gcm = 6,
    Aes128Gcm2 = 7,
    Aes256Gcm2 = 8,
    ModeEnd = 9
}
export declare class EncryptionConfig {
    encryptionMode?: EncryptionMode;
    encryptionKey?: string;
    encryptionKdfSalt?: number[];
}
export declare enum EncryptionErrorType {
    EncryptionErrorInternalFailure = 0,
    EncryptionErrorDecryptionFailure = 1,
    EncryptionErrorEncryptionFailure = 2
}
export declare enum UploadErrorReason {
    UploadSuccess = 0,
    UploadNetError = 1,
    UploadServerError = 2
}
export declare enum PermissionType {
    RecordAudio = 0,
    Camera = 1,
    ScreenCapture = 2
}
export declare enum MaxUserAccountLengthType {
    MaxUserAccountLength = 256
}
export declare enum StreamSubscribeState {
    SubStateIdle = 0,
    SubStateNoSubscribed = 1,
    SubStateSubscribing = 2,
    SubStateSubscribed = 3
}
export declare enum StreamPublishState {
    PubStateIdle = 0,
    PubStateNoPublished = 1,
    PubStatePublishing = 2,
    PubStatePublished = 3
}
export declare class EchoTestConfiguration {
    view?: any;
    enableAudio?: boolean;
    enableVideo?: boolean;
    token?: string;
    channelId?: string;
    intervalInSeconds?: number;
}
export declare class UserInfo {
    uid?: number;
    userAccount?: string;
}
export declare enum EarMonitoringFilterType {
    EarMonitoringFilterNone = 1,
    EarMonitoringFilterBuiltInAudioFilters = 2,
    EarMonitoringFilterNoiseSuppression = 4
}
export declare enum ThreadPriorityType {
    Lowest = 0,
    Low = 1,
    Normal = 2,
    High = 3,
    Highest = 4,
    Critical = 5
}
export declare class ScreenVideoParameters {
    dimensions?: VideoDimensions;
    frameRate?: number;
    bitrate?: number;
    contentHint?: VideoContentHint;
}
export declare class ScreenAudioParameters {
    sampleRate?: number;
    channels?: number;
    captureSignalVolume?: number;
}
export declare class ScreenCaptureParameters2 {
    captureAudio?: boolean;
    audioParams?: ScreenAudioParameters;
    captureVideo?: boolean;
    videoParams?: ScreenVideoParameters;
}
export declare enum MediaTraceEvent {
    MediaTraceEventVideoRendered = 0,
    MediaTraceEventVideoDecoded = 1
}
export declare class VideoRenderingTracingInfo {
    elapsedTime?: number;
    start2JoinChannel?: number;
    join2JoinSuccess?: number;
    joinSuccess2RemoteJoined?: number;
    remoteJoined2SetView?: number;
    remoteJoined2UnmuteVideo?: number;
    remoteJoined2PacketReceived?: number;
}
export declare enum ConfigFetchType {
    ConfigFetchTypeInitialize = 1,
    ConfigFetchTypeJoinChannel = 2
}
export declare class RecorderStreamInfo {
    channelId?: string;
    uid?: number;
}
export declare enum LocalProxyMode {
    ConnectivityFirst = 0,
    LocalOnly = 1
}
export declare class LogUploadServerInfo {
    serverDomain?: string;
    serverPath?: string;
    serverPort?: number;
    serverHttps?: boolean;
}
export declare class AdvancedConfigInfo {
    logUploadServer?: LogUploadServerInfo;
}
export declare class LocalAccessPointConfiguration {
    ipList?: string[];
    ipListSize?: number;
    domainList?: string[];
    domainListSize?: number;
    verifyDomainName?: string;
    mode?: LocalProxyMode;
    advancedConfig?: AdvancedConfigInfo;
}
export declare class SpatialAudioParams {
    speaker_azimuth?: number;
    speaker_elevation?: number;
    speaker_distance?: number;
    speaker_orientation?: number;
    enable_blur?: boolean;
    enable_air_absorb?: boolean;
    speaker_attenuation?: number;
    enable_doppler?: boolean;
}
//# sourceMappingURL=CmviotBase.d.ts.map