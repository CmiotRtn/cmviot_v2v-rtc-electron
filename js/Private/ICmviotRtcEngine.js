"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioDeviceInfo = exports.VideoDeviceInfo = exports.SDKBuildInfo = exports.VideoProfileType = exports.MediaDeviceStateType = exports.QualityReportFormatType = exports.IRtcEngine = exports.ExtensionInfo = exports.DirectCdnStreamingMediaOptions = exports.DirectCdnStreamingStats = exports.DirectCdnStreamingState = exports.DirectCdnStreamingError = exports.Metadata = exports.MaxMetadataSizeType = exports.MetadataType = exports.RtcEngineContext = exports.IVideoDeviceManager = exports.LeaveChannelOptions = exports.FeatureType = exports.ProxyType = exports.ChannelMediaOptions = exports.ImageTrackOptions = exports.AdvancedAudioOptions = exports.ScreenCaptureSourceInfo = exports.ScreenCaptureSourceType = exports.ThumbImageBuffer = exports.Size = exports.ScreenCaptureConfiguration = exports.CameraCapturerConfiguration = exports.CloudProxyType = exports.CameraDirection = exports.PublisherConfiguration = exports.RtmpStreamLifeCycleType = exports.InjectStreamConfig = exports.VideoCompositingLayout = exports.Region = exports.RemoteVideoStats = exports.RemoteAudioStats = exports.LocalVideoStats = exports.PriorityType = exports.StreamFallbackOptions = exports.AudioReverbType = exports.AudioEqualizationBandFrequency = exports.InjectStreamStatus = exports.AudioMixingReasonType = exports.AudioMixingStateType = exports.MediaDeviceType = void 0;
require("./extension/ICmviotRtcEngineExtension");
/* enum_mediadevicetype */
var MediaDeviceType;
(function (MediaDeviceType) {
    /* enum_mediadevicetype_UnknownAudioDevice */
    MediaDeviceType[MediaDeviceType["UnknownAudioDevice"] = -1] = "UnknownAudioDevice";
    /* enum_mediadevicetype_AudioPlayoutDevice */
    MediaDeviceType[MediaDeviceType["AudioPlayoutDevice"] = 0] = "AudioPlayoutDevice";
    /* enum_mediadevicetype_AudioRecordingDevice */
    MediaDeviceType[MediaDeviceType["AudioRecordingDevice"] = 1] = "AudioRecordingDevice";
    /* enum_mediadevicetype_VideoRenderDevice */
    MediaDeviceType[MediaDeviceType["VideoRenderDevice"] = 2] = "VideoRenderDevice";
    /* enum_mediadevicetype_VideoCaptureDevice */
    MediaDeviceType[MediaDeviceType["VideoCaptureDevice"] = 3] = "VideoCaptureDevice";
    /* enum_mediadevicetype_AudioApplicationPlayoutDevice */
    MediaDeviceType[MediaDeviceType["AudioApplicationPlayoutDevice"] = 4] = "AudioApplicationPlayoutDevice";
    /* enum_mediadevicetype_AudioVirtualPlayoutDevice */
    MediaDeviceType[MediaDeviceType["AudioVirtualPlayoutDevice"] = 5] = "AudioVirtualPlayoutDevice";
    /* enum_mediadevicetype_AudioVirtualRecordingDevice */
    MediaDeviceType[MediaDeviceType["AudioVirtualRecordingDevice"] = 6] = "AudioVirtualRecordingDevice";
})(MediaDeviceType = exports.MediaDeviceType || (exports.MediaDeviceType = {}));
/* enum_audiomixingstatetype */
var AudioMixingStateType;
(function (AudioMixingStateType) {
    /* enum_audiomixingstatetype_AudioMixingStatePlaying */
    AudioMixingStateType[AudioMixingStateType["AudioMixingStatePlaying"] = 710] = "AudioMixingStatePlaying";
    /* enum_audiomixingstatetype_AudioMixingStatePaused */
    AudioMixingStateType[AudioMixingStateType["AudioMixingStatePaused"] = 711] = "AudioMixingStatePaused";
    /* enum_audiomixingstatetype_AudioMixingStateStopped */
    AudioMixingStateType[AudioMixingStateType["AudioMixingStateStopped"] = 713] = "AudioMixingStateStopped";
    /* enum_audiomixingstatetype_AudioMixingStateFailed */
    AudioMixingStateType[AudioMixingStateType["AudioMixingStateFailed"] = 714] = "AudioMixingStateFailed";
})(AudioMixingStateType = exports.AudioMixingStateType || (exports.AudioMixingStateType = {}));
/* enum_audiomixingreasontype */
var AudioMixingReasonType;
(function (AudioMixingReasonType) {
    /* enum_audiomixingreasontype_AudioMixingReasonCanNotOpen */
    AudioMixingReasonType[AudioMixingReasonType["AudioMixingReasonCanNotOpen"] = 701] = "AudioMixingReasonCanNotOpen";
    /* enum_audiomixingreasontype_AudioMixingReasonTooFrequentCall */
    AudioMixingReasonType[AudioMixingReasonType["AudioMixingReasonTooFrequentCall"] = 702] = "AudioMixingReasonTooFrequentCall";
    /* enum_audiomixingreasontype_AudioMixingReasonInterruptedEof */
    AudioMixingReasonType[AudioMixingReasonType["AudioMixingReasonInterruptedEof"] = 703] = "AudioMixingReasonInterruptedEof";
    /* enum_audiomixingreasontype_AudioMixingReasonOneLoopCompleted */
    AudioMixingReasonType[AudioMixingReasonType["AudioMixingReasonOneLoopCompleted"] = 721] = "AudioMixingReasonOneLoopCompleted";
    /* enum_audiomixingreasontype_AudioMixingReasonAllLoopsCompleted */
    AudioMixingReasonType[AudioMixingReasonType["AudioMixingReasonAllLoopsCompleted"] = 723] = "AudioMixingReasonAllLoopsCompleted";
    /* enum_audiomixingreasontype_AudioMixingReasonStoppedByUser */
    AudioMixingReasonType[AudioMixingReasonType["AudioMixingReasonStoppedByUser"] = 724] = "AudioMixingReasonStoppedByUser";
    /* enum_audiomixingreasontype_AudioMixingReasonOk */
    AudioMixingReasonType[AudioMixingReasonType["AudioMixingReasonOk"] = 0] = "AudioMixingReasonOk";
})(AudioMixingReasonType = exports.AudioMixingReasonType || (exports.AudioMixingReasonType = {}));
/* enum_injectstreamstatus */
var InjectStreamStatus;
(function (InjectStreamStatus) {
    /* enum_injectstreamstatus_InjectStreamStatusStartSuccess */
    InjectStreamStatus[InjectStreamStatus["InjectStreamStatusStartSuccess"] = 0] = "InjectStreamStatusStartSuccess";
    /* enum_injectstreamstatus_InjectStreamStatusStartAlreadyExists */
    InjectStreamStatus[InjectStreamStatus["InjectStreamStatusStartAlreadyExists"] = 1] = "InjectStreamStatusStartAlreadyExists";
    /* enum_injectstreamstatus_InjectStreamStatusStartUnauthorized */
    InjectStreamStatus[InjectStreamStatus["InjectStreamStatusStartUnauthorized"] = 2] = "InjectStreamStatusStartUnauthorized";
    /* enum_injectstreamstatus_InjectStreamStatusStartTimedout */
    InjectStreamStatus[InjectStreamStatus["InjectStreamStatusStartTimedout"] = 3] = "InjectStreamStatusStartTimedout";
    /* enum_injectstreamstatus_InjectStreamStatusStartFailed */
    InjectStreamStatus[InjectStreamStatus["InjectStreamStatusStartFailed"] = 4] = "InjectStreamStatusStartFailed";
    /* enum_injectstreamstatus_InjectStreamStatusStopSuccess */
    InjectStreamStatus[InjectStreamStatus["InjectStreamStatusStopSuccess"] = 5] = "InjectStreamStatusStopSuccess";
    /* enum_injectstreamstatus_InjectStreamStatusStopNotFound */
    InjectStreamStatus[InjectStreamStatus["InjectStreamStatusStopNotFound"] = 6] = "InjectStreamStatusStopNotFound";
    /* enum_injectstreamstatus_InjectStreamStatusStopUnauthorized */
    InjectStreamStatus[InjectStreamStatus["InjectStreamStatusStopUnauthorized"] = 7] = "InjectStreamStatusStopUnauthorized";
    /* enum_injectstreamstatus_InjectStreamStatusStopTimedout */
    InjectStreamStatus[InjectStreamStatus["InjectStreamStatusStopTimedout"] = 8] = "InjectStreamStatusStopTimedout";
    /* enum_injectstreamstatus_InjectStreamStatusStopFailed */
    InjectStreamStatus[InjectStreamStatus["InjectStreamStatusStopFailed"] = 9] = "InjectStreamStatusStopFailed";
    /* enum_injectstreamstatus_InjectStreamStatusBroken */
    InjectStreamStatus[InjectStreamStatus["InjectStreamStatusBroken"] = 10] = "InjectStreamStatusBroken";
})(InjectStreamStatus = exports.InjectStreamStatus || (exports.InjectStreamStatus = {}));
/* enum_audioequalizationbandfrequency */
var AudioEqualizationBandFrequency;
(function (AudioEqualizationBandFrequency) {
    /* enum_audioequalizationbandfrequency_AudioEqualizationBand31 */
    AudioEqualizationBandFrequency[AudioEqualizationBandFrequency["AudioEqualizationBand31"] = 0] = "AudioEqualizationBand31";
    /* enum_audioequalizationbandfrequency_AudioEqualizationBand62 */
    AudioEqualizationBandFrequency[AudioEqualizationBandFrequency["AudioEqualizationBand62"] = 1] = "AudioEqualizationBand62";
    /* enum_audioequalizationbandfrequency_AudioEqualizationBand125 */
    AudioEqualizationBandFrequency[AudioEqualizationBandFrequency["AudioEqualizationBand125"] = 2] = "AudioEqualizationBand125";
    /* enum_audioequalizationbandfrequency_AudioEqualizationBand250 */
    AudioEqualizationBandFrequency[AudioEqualizationBandFrequency["AudioEqualizationBand250"] = 3] = "AudioEqualizationBand250";
    /* enum_audioequalizationbandfrequency_AudioEqualizationBand500 */
    AudioEqualizationBandFrequency[AudioEqualizationBandFrequency["AudioEqualizationBand500"] = 4] = "AudioEqualizationBand500";
    /* enum_audioequalizationbandfrequency_AudioEqualizationBand1k */
    AudioEqualizationBandFrequency[AudioEqualizationBandFrequency["AudioEqualizationBand1k"] = 5] = "AudioEqualizationBand1k";
    /* enum_audioequalizationbandfrequency_AudioEqualizationBand2k */
    AudioEqualizationBandFrequency[AudioEqualizationBandFrequency["AudioEqualizationBand2k"] = 6] = "AudioEqualizationBand2k";
    /* enum_audioequalizationbandfrequency_AudioEqualizationBand4k */
    AudioEqualizationBandFrequency[AudioEqualizationBandFrequency["AudioEqualizationBand4k"] = 7] = "AudioEqualizationBand4k";
    /* enum_audioequalizationbandfrequency_AudioEqualizationBand8k */
    AudioEqualizationBandFrequency[AudioEqualizationBandFrequency["AudioEqualizationBand8k"] = 8] = "AudioEqualizationBand8k";
    /* enum_audioequalizationbandfrequency_AudioEqualizationBand16k */
    AudioEqualizationBandFrequency[AudioEqualizationBandFrequency["AudioEqualizationBand16k"] = 9] = "AudioEqualizationBand16k";
})(AudioEqualizationBandFrequency = exports.AudioEqualizationBandFrequency || (exports.AudioEqualizationBandFrequency = {}));
/* enum_audioreverbtype */
var AudioReverbType;
(function (AudioReverbType) {
    /* enum_audioreverbtype_AudioReverbDryLevel */
    AudioReverbType[AudioReverbType["AudioReverbDryLevel"] = 0] = "AudioReverbDryLevel";
    /* enum_audioreverbtype_AudioReverbWetLevel */
    AudioReverbType[AudioReverbType["AudioReverbWetLevel"] = 1] = "AudioReverbWetLevel";
    /* enum_audioreverbtype_AudioReverbRoomSize */
    AudioReverbType[AudioReverbType["AudioReverbRoomSize"] = 2] = "AudioReverbRoomSize";
    /* enum_audioreverbtype_AudioReverbWetDelay */
    AudioReverbType[AudioReverbType["AudioReverbWetDelay"] = 3] = "AudioReverbWetDelay";
    /* enum_audioreverbtype_AudioReverbStrength */
    AudioReverbType[AudioReverbType["AudioReverbStrength"] = 4] = "AudioReverbStrength";
})(AudioReverbType = exports.AudioReverbType || (exports.AudioReverbType = {}));
/* enum_streamfallbackoptions */
var StreamFallbackOptions;
(function (StreamFallbackOptions) {
    /* enum_streamfallbackoptions_StreamFallbackOptionDisabled */
    StreamFallbackOptions[StreamFallbackOptions["StreamFallbackOptionDisabled"] = 0] = "StreamFallbackOptionDisabled";
    /* enum_streamfallbackoptions_StreamFallbackOptionVideoStreamLow */
    StreamFallbackOptions[StreamFallbackOptions["StreamFallbackOptionVideoStreamLow"] = 1] = "StreamFallbackOptionVideoStreamLow";
    /* enum_streamfallbackoptions_StreamFallbackOptionAudioOnly */
    StreamFallbackOptions[StreamFallbackOptions["StreamFallbackOptionAudioOnly"] = 2] = "StreamFallbackOptionAudioOnly";
})(StreamFallbackOptions = exports.StreamFallbackOptions || (exports.StreamFallbackOptions = {}));
/* enum_prioritytype */
var PriorityType;
(function (PriorityType) {
    /* enum_prioritytype_PriorityHigh */
    PriorityType[PriorityType["PriorityHigh"] = 50] = "PriorityHigh";
    /* enum_prioritytype_PriorityNormal */
    PriorityType[PriorityType["PriorityNormal"] = 100] = "PriorityNormal";
})(PriorityType = exports.PriorityType || (exports.PriorityType = {}));
/* class_localvideostats */
var LocalVideoStats = /** @class */ (function () {
    function LocalVideoStats() {
    }
    return LocalVideoStats;
}());
exports.LocalVideoStats = LocalVideoStats;
/* class_remoteaudiostats */
var RemoteAudioStats = /** @class */ (function () {
    function RemoteAudioStats() {
    }
    return RemoteAudioStats;
}());
exports.RemoteAudioStats = RemoteAudioStats;
/* class_remotevideostats */
var RemoteVideoStats = /** @class */ (function () {
    function RemoteVideoStats() {
    }
    return RemoteVideoStats;
}());
exports.RemoteVideoStats = RemoteVideoStats;
/* class_region */
var Region = /** @class */ (function () {
    function Region() {
    }
    return Region;
}());
exports.Region = Region;
/* class_videocompositinglayout */
var VideoCompositingLayout = /** @class */ (function () {
    function VideoCompositingLayout() {
    }
    return VideoCompositingLayout;
}());
exports.VideoCompositingLayout = VideoCompositingLayout;
/* class_injectstreamconfig */
var InjectStreamConfig = /** @class */ (function () {
    function InjectStreamConfig() {
    }
    return InjectStreamConfig;
}());
exports.InjectStreamConfig = InjectStreamConfig;
/* enum_rtmpstreamlifecycletype */
var RtmpStreamLifeCycleType;
(function (RtmpStreamLifeCycleType) {
    /* enum_rtmpstreamlifecycletype_RtmpStreamLifeCycleBind2channel */
    RtmpStreamLifeCycleType[RtmpStreamLifeCycleType["RtmpStreamLifeCycleBind2channel"] = 1] = "RtmpStreamLifeCycleBind2channel";
    /* enum_rtmpstreamlifecycletype_RtmpStreamLifeCycleBind2owner */
    RtmpStreamLifeCycleType[RtmpStreamLifeCycleType["RtmpStreamLifeCycleBind2owner"] = 2] = "RtmpStreamLifeCycleBind2owner";
})(RtmpStreamLifeCycleType = exports.RtmpStreamLifeCycleType || (exports.RtmpStreamLifeCycleType = {}));
/* class_publisherconfiguration */
var PublisherConfiguration = /** @class */ (function () {
    function PublisherConfiguration() {
    }
    return PublisherConfiguration;
}());
exports.PublisherConfiguration = PublisherConfiguration;
/* enum_cameradirection */
var CameraDirection;
(function (CameraDirection) {
    /* enum_cameradirection_CameraRear */
    CameraDirection[CameraDirection["CameraRear"] = 0] = "CameraRear";
    /* enum_cameradirection_CameraFront */
    CameraDirection[CameraDirection["CameraFront"] = 1] = "CameraFront";
})(CameraDirection = exports.CameraDirection || (exports.CameraDirection = {}));
/* enum_cloudproxytype */
var CloudProxyType;
(function (CloudProxyType) {
    /* enum_cloudproxytype_NoneProxy */
    CloudProxyType[CloudProxyType["NoneProxy"] = 0] = "NoneProxy";
    /* enum_cloudproxytype_UdpProxy */
    CloudProxyType[CloudProxyType["UdpProxy"] = 1] = "UdpProxy";
    /* enum_cloudproxytype_TcpProxy */
    CloudProxyType[CloudProxyType["TcpProxy"] = 2] = "TcpProxy";
})(CloudProxyType = exports.CloudProxyType || (exports.CloudProxyType = {}));
/* class_cameracapturerconfiguration */
var CameraCapturerConfiguration = /** @class */ (function () {
    function CameraCapturerConfiguration() {
    }
    return CameraCapturerConfiguration;
}());
exports.CameraCapturerConfiguration = CameraCapturerConfiguration;
/* class_screencaptureconfiguration */
var ScreenCaptureConfiguration = /** @class */ (function () {
    function ScreenCaptureConfiguration() {
    }
    return ScreenCaptureConfiguration;
}());
exports.ScreenCaptureConfiguration = ScreenCaptureConfiguration;
/* class_size */
var Size = /** @class */ (function () {
    function Size() {
    }
    return Size;
}());
exports.Size = Size;
/* class_thumbimagebuffer */
var ThumbImageBuffer = /** @class */ (function () {
    function ThumbImageBuffer() {
    }
    return ThumbImageBuffer;
}());
exports.ThumbImageBuffer = ThumbImageBuffer;
/* enum_screencapturesourcetype */
var ScreenCaptureSourceType;
(function (ScreenCaptureSourceType) {
    /* enum_screencapturesourcetype_ScreencapturesourcetypeUnknown */
    ScreenCaptureSourceType[ScreenCaptureSourceType["ScreencapturesourcetypeUnknown"] = -1] = "ScreencapturesourcetypeUnknown";
    /* enum_screencapturesourcetype_ScreencapturesourcetypeWindow */
    ScreenCaptureSourceType[ScreenCaptureSourceType["ScreencapturesourcetypeWindow"] = 0] = "ScreencapturesourcetypeWindow";
    /* enum_screencapturesourcetype_ScreencapturesourcetypeScreen */
    ScreenCaptureSourceType[ScreenCaptureSourceType["ScreencapturesourcetypeScreen"] = 1] = "ScreencapturesourcetypeScreen";
    /* enum_screencapturesourcetype_ScreencapturesourcetypeCustom */
    ScreenCaptureSourceType[ScreenCaptureSourceType["ScreencapturesourcetypeCustom"] = 2] = "ScreencapturesourcetypeCustom";
})(ScreenCaptureSourceType = exports.ScreenCaptureSourceType || (exports.ScreenCaptureSourceType = {}));
/* class_screencapturesourceinfo */
var ScreenCaptureSourceInfo = /** @class */ (function () {
    function ScreenCaptureSourceInfo() {
    }
    return ScreenCaptureSourceInfo;
}());
exports.ScreenCaptureSourceInfo = ScreenCaptureSourceInfo;
/* class_advancedaudiooptions */
var AdvancedAudioOptions = /** @class */ (function () {
    function AdvancedAudioOptions() {
    }
    return AdvancedAudioOptions;
}());
exports.AdvancedAudioOptions = AdvancedAudioOptions;
/* class_imagetrackoptions */
var ImageTrackOptions = /** @class */ (function () {
    function ImageTrackOptions() {
    }
    return ImageTrackOptions;
}());
exports.ImageTrackOptions = ImageTrackOptions;
/* class_channelmediaoptions */
var ChannelMediaOptions = /** @class */ (function () {
    function ChannelMediaOptions() {
    }
    return ChannelMediaOptions;
}());
exports.ChannelMediaOptions = ChannelMediaOptions;
/* enum_proxytype */
var ProxyType;
(function (ProxyType) {
    /* enum_proxytype_NoneProxyType */
    ProxyType[ProxyType["NoneProxyType"] = 0] = "NoneProxyType";
    /* enum_proxytype_UdpProxyType */
    ProxyType[ProxyType["UdpProxyType"] = 1] = "UdpProxyType";
    /* enum_proxytype_TcpProxyType */
    ProxyType[ProxyType["TcpProxyType"] = 2] = "TcpProxyType";
    /* enum_proxytype_LocalProxyType */
    ProxyType[ProxyType["LocalProxyType"] = 3] = "LocalProxyType";
    /* enum_proxytype_TcpProxyAutoFallbackType */
    ProxyType[ProxyType["TcpProxyAutoFallbackType"] = 4] = "TcpProxyAutoFallbackType";
    /* enum_proxytype_HttpProxyType */
    ProxyType[ProxyType["HttpProxyType"] = 5] = "HttpProxyType";
    /* enum_proxytype_HttpsProxyType */
    ProxyType[ProxyType["HttpsProxyType"] = 6] = "HttpsProxyType";
})(ProxyType = exports.ProxyType || (exports.ProxyType = {}));
/* enum_featuretype */
var FeatureType;
(function (FeatureType) {
    /* enum_featuretype_VideoVirtualBackground */
    FeatureType[FeatureType["VideoVirtualBackground"] = 1] = "VideoVirtualBackground";
    /* enum_featuretype_VideoBeautyEffect */
    FeatureType[FeatureType["VideoBeautyEffect"] = 2] = "VideoBeautyEffect";
})(FeatureType = exports.FeatureType || (exports.FeatureType = {}));
/* class_leavechanneloptions */
var LeaveChannelOptions = /** @class */ (function () {
    function LeaveChannelOptions() {
    }
    return LeaveChannelOptions;
}());
exports.LeaveChannelOptions = LeaveChannelOptions;
/* class_ivideodevicemanager */
var IVideoDeviceManager = /** @class */ (function () {
    function IVideoDeviceManager() {
    }
    return IVideoDeviceManager;
}());
exports.IVideoDeviceManager = IVideoDeviceManager;
/* class_rtcenginecontext */
var RtcEngineContext = /** @class */ (function () {
    function RtcEngineContext() {
    }
    return RtcEngineContext;
}());
exports.RtcEngineContext = RtcEngineContext;
/* enum_metadatatype */
var MetadataType;
(function (MetadataType) {
    /* enum_metadatatype_UnknownMetadata */
    MetadataType[MetadataType["UnknownMetadata"] = -1] = "UnknownMetadata";
    /* enum_metadatatype_VideoMetadata */
    MetadataType[MetadataType["VideoMetadata"] = 0] = "VideoMetadata";
})(MetadataType = exports.MetadataType || (exports.MetadataType = {}));
/* enum_maxmetadatasizetype */
var MaxMetadataSizeType;
(function (MaxMetadataSizeType) {
    /* enum_maxmetadatasizetype_InvalidMetadataSizeInByte */
    MaxMetadataSizeType[MaxMetadataSizeType["InvalidMetadataSizeInByte"] = -1] = "InvalidMetadataSizeInByte";
    /* enum_maxmetadatasizetype_DefaultMetadataSizeInByte */
    MaxMetadataSizeType[MaxMetadataSizeType["DefaultMetadataSizeInByte"] = 512] = "DefaultMetadataSizeInByte";
    /* enum_maxmetadatasizetype_MaxMetadataSizeInByte */
    MaxMetadataSizeType[MaxMetadataSizeType["MaxMetadataSizeInByte"] = 1024] = "MaxMetadataSizeInByte";
})(MaxMetadataSizeType = exports.MaxMetadataSizeType || (exports.MaxMetadataSizeType = {}));
/* class_metadata */
var Metadata = /** @class */ (function () {
    function Metadata() {
    }
    return Metadata;
}());
exports.Metadata = Metadata;
/* enum_directcdnstreamingerror */
var DirectCdnStreamingError;
(function (DirectCdnStreamingError) {
    /* enum_directcdnstreamingerror_DirectCdnStreamingErrorOk */
    DirectCdnStreamingError[DirectCdnStreamingError["DirectCdnStreamingErrorOk"] = 0] = "DirectCdnStreamingErrorOk";
    /* enum_directcdnstreamingerror_DirectCdnStreamingErrorFailed */
    DirectCdnStreamingError[DirectCdnStreamingError["DirectCdnStreamingErrorFailed"] = 1] = "DirectCdnStreamingErrorFailed";
    /* enum_directcdnstreamingerror_DirectCdnStreamingErrorAudioPublication */
    DirectCdnStreamingError[DirectCdnStreamingError["DirectCdnStreamingErrorAudioPublication"] = 2] = "DirectCdnStreamingErrorAudioPublication";
    /* enum_directcdnstreamingerror_DirectCdnStreamingErrorVideoPublication */
    DirectCdnStreamingError[DirectCdnStreamingError["DirectCdnStreamingErrorVideoPublication"] = 3] = "DirectCdnStreamingErrorVideoPublication";
    /* enum_directcdnstreamingerror_DirectCdnStreamingErrorNetConnect */
    DirectCdnStreamingError[DirectCdnStreamingError["DirectCdnStreamingErrorNetConnect"] = 4] = "DirectCdnStreamingErrorNetConnect";
    /* enum_directcdnstreamingerror_DirectCdnStreamingErrorBadName */
    DirectCdnStreamingError[DirectCdnStreamingError["DirectCdnStreamingErrorBadName"] = 5] = "DirectCdnStreamingErrorBadName";
})(DirectCdnStreamingError = exports.DirectCdnStreamingError || (exports.DirectCdnStreamingError = {}));
/* enum_directcdnstreamingstate */
var DirectCdnStreamingState;
(function (DirectCdnStreamingState) {
    /* enum_directcdnstreamingstate_DirectCdnStreamingStateIdle */
    DirectCdnStreamingState[DirectCdnStreamingState["DirectCdnStreamingStateIdle"] = 0] = "DirectCdnStreamingStateIdle";
    /* enum_directcdnstreamingstate_DirectCdnStreamingStateRunning */
    DirectCdnStreamingState[DirectCdnStreamingState["DirectCdnStreamingStateRunning"] = 1] = "DirectCdnStreamingStateRunning";
    /* enum_directcdnstreamingstate_DirectCdnStreamingStateStopped */
    DirectCdnStreamingState[DirectCdnStreamingState["DirectCdnStreamingStateStopped"] = 2] = "DirectCdnStreamingStateStopped";
    /* enum_directcdnstreamingstate_DirectCdnStreamingStateFailed */
    DirectCdnStreamingState[DirectCdnStreamingState["DirectCdnStreamingStateFailed"] = 3] = "DirectCdnStreamingStateFailed";
    /* enum_directcdnstreamingstate_DirectCdnStreamingStateRecovering */
    DirectCdnStreamingState[DirectCdnStreamingState["DirectCdnStreamingStateRecovering"] = 4] = "DirectCdnStreamingStateRecovering";
})(DirectCdnStreamingState = exports.DirectCdnStreamingState || (exports.DirectCdnStreamingState = {}));
/* class_directcdnstreamingstats */
var DirectCdnStreamingStats = /** @class */ (function () {
    function DirectCdnStreamingStats() {
    }
    return DirectCdnStreamingStats;
}());
exports.DirectCdnStreamingStats = DirectCdnStreamingStats;
/* class_directcdnstreamingmediaoptions */
var DirectCdnStreamingMediaOptions = /** @class */ (function () {
    function DirectCdnStreamingMediaOptions() {
    }
    return DirectCdnStreamingMediaOptions;
}());
exports.DirectCdnStreamingMediaOptions = DirectCdnStreamingMediaOptions;
/* class_extensioninfo */
var ExtensionInfo = /** @class */ (function () {
    function ExtensionInfo() {
    }
    return ExtensionInfo;
}());
exports.ExtensionInfo = ExtensionInfo;
/* class_irtcengine */
var IRtcEngine = /** @class */ (function () {
    function IRtcEngine() {
    }
    return IRtcEngine;
}());
exports.IRtcEngine = IRtcEngine;
/* enum_qualityreportformattype */
var QualityReportFormatType;
(function (QualityReportFormatType) {
    /* enum_qualityreportformattype_QualityReportJson */
    QualityReportFormatType[QualityReportFormatType["QualityReportJson"] = 0] = "QualityReportJson";
    /* enum_qualityreportformattype_QualityReportHtml */
    QualityReportFormatType[QualityReportFormatType["QualityReportHtml"] = 1] = "QualityReportHtml";
})(QualityReportFormatType = exports.QualityReportFormatType || (exports.QualityReportFormatType = {}));
/* enum_mediadevicestatetype */
var MediaDeviceStateType;
(function (MediaDeviceStateType) {
    /* enum_mediadevicestatetype_MediaDeviceStateIdle */
    MediaDeviceStateType[MediaDeviceStateType["MediaDeviceStateIdle"] = 0] = "MediaDeviceStateIdle";
    /* enum_mediadevicestatetype_MediaDeviceStateActive */
    MediaDeviceStateType[MediaDeviceStateType["MediaDeviceStateActive"] = 1] = "MediaDeviceStateActive";
    /* enum_mediadevicestatetype_MediaDeviceStateDisabled */
    MediaDeviceStateType[MediaDeviceStateType["MediaDeviceStateDisabled"] = 2] = "MediaDeviceStateDisabled";
    /* enum_mediadevicestatetype_MediaDeviceStateNotPresent */
    MediaDeviceStateType[MediaDeviceStateType["MediaDeviceStateNotPresent"] = 4] = "MediaDeviceStateNotPresent";
    /* enum_mediadevicestatetype_MediaDeviceStateUnplugged */
    MediaDeviceStateType[MediaDeviceStateType["MediaDeviceStateUnplugged"] = 8] = "MediaDeviceStateUnplugged";
})(MediaDeviceStateType = exports.MediaDeviceStateType || (exports.MediaDeviceStateType = {}));
/* enum_videoprofiletype */
var VideoProfileType;
(function (VideoProfileType) {
    /* enum_videoprofiletype_VideoProfileLandscape120p */
    VideoProfileType[VideoProfileType["VideoProfileLandscape120p"] = 0] = "VideoProfileLandscape120p";
    /* enum_videoprofiletype_VideoProfileLandscape120p3 */
    VideoProfileType[VideoProfileType["VideoProfileLandscape120p3"] = 2] = "VideoProfileLandscape120p3";
    /* enum_videoprofiletype_VideoProfileLandscape180p */
    VideoProfileType[VideoProfileType["VideoProfileLandscape180p"] = 10] = "VideoProfileLandscape180p";
    /* enum_videoprofiletype_VideoProfileLandscape180p3 */
    VideoProfileType[VideoProfileType["VideoProfileLandscape180p3"] = 12] = "VideoProfileLandscape180p3";
    /* enum_videoprofiletype_VideoProfileLandscape180p4 */
    VideoProfileType[VideoProfileType["VideoProfileLandscape180p4"] = 13] = "VideoProfileLandscape180p4";
    /* enum_videoprofiletype_VideoProfileLandscape240p */
    VideoProfileType[VideoProfileType["VideoProfileLandscape240p"] = 20] = "VideoProfileLandscape240p";
    /* enum_videoprofiletype_VideoProfileLandscape240p3 */
    VideoProfileType[VideoProfileType["VideoProfileLandscape240p3"] = 22] = "VideoProfileLandscape240p3";
    /* enum_videoprofiletype_VideoProfileLandscape240p4 */
    VideoProfileType[VideoProfileType["VideoProfileLandscape240p4"] = 23] = "VideoProfileLandscape240p4";
    /* enum_videoprofiletype_VideoProfileLandscape360p */
    VideoProfileType[VideoProfileType["VideoProfileLandscape360p"] = 30] = "VideoProfileLandscape360p";
    /* enum_videoprofiletype_VideoProfileLandscape360p3 */
    VideoProfileType[VideoProfileType["VideoProfileLandscape360p3"] = 32] = "VideoProfileLandscape360p3";
    /* enum_videoprofiletype_VideoProfileLandscape360p4 */
    VideoProfileType[VideoProfileType["VideoProfileLandscape360p4"] = 33] = "VideoProfileLandscape360p4";
    /* enum_videoprofiletype_VideoProfileLandscape360p6 */
    VideoProfileType[VideoProfileType["VideoProfileLandscape360p6"] = 35] = "VideoProfileLandscape360p6";
    /* enum_videoprofiletype_VideoProfileLandscape360p7 */
    VideoProfileType[VideoProfileType["VideoProfileLandscape360p7"] = 36] = "VideoProfileLandscape360p7";
    /* enum_videoprofiletype_VideoProfileLandscape360p8 */
    VideoProfileType[VideoProfileType["VideoProfileLandscape360p8"] = 37] = "VideoProfileLandscape360p8";
    /* enum_videoprofiletype_VideoProfileLandscape360p9 */
    VideoProfileType[VideoProfileType["VideoProfileLandscape360p9"] = 38] = "VideoProfileLandscape360p9";
    /* enum_videoprofiletype_VideoProfileLandscape360p10 */
    VideoProfileType[VideoProfileType["VideoProfileLandscape360p10"] = 39] = "VideoProfileLandscape360p10";
    /* enum_videoprofiletype_VideoProfileLandscape360p11 */
    VideoProfileType[VideoProfileType["VideoProfileLandscape360p11"] = 100] = "VideoProfileLandscape360p11";
    /* enum_videoprofiletype_VideoProfileLandscape480p */
    VideoProfileType[VideoProfileType["VideoProfileLandscape480p"] = 40] = "VideoProfileLandscape480p";
    /* enum_videoprofiletype_VideoProfileLandscape480p3 */
    VideoProfileType[VideoProfileType["VideoProfileLandscape480p3"] = 42] = "VideoProfileLandscape480p3";
    /* enum_videoprofiletype_VideoProfileLandscape480p4 */
    VideoProfileType[VideoProfileType["VideoProfileLandscape480p4"] = 43] = "VideoProfileLandscape480p4";
    /* enum_videoprofiletype_VideoProfileLandscape480p6 */
    VideoProfileType[VideoProfileType["VideoProfileLandscape480p6"] = 45] = "VideoProfileLandscape480p6";
    /* enum_videoprofiletype_VideoProfileLandscape480p8 */
    VideoProfileType[VideoProfileType["VideoProfileLandscape480p8"] = 47] = "VideoProfileLandscape480p8";
    /* enum_videoprofiletype_VideoProfileLandscape480p9 */
    VideoProfileType[VideoProfileType["VideoProfileLandscape480p9"] = 48] = "VideoProfileLandscape480p9";
    /* enum_videoprofiletype_VideoProfileLandscape480p10 */
    VideoProfileType[VideoProfileType["VideoProfileLandscape480p10"] = 49] = "VideoProfileLandscape480p10";
    /* enum_videoprofiletype_VideoProfileLandscape720p */
    VideoProfileType[VideoProfileType["VideoProfileLandscape720p"] = 50] = "VideoProfileLandscape720p";
    /* enum_videoprofiletype_VideoProfileLandscape720p3 */
    VideoProfileType[VideoProfileType["VideoProfileLandscape720p3"] = 52] = "VideoProfileLandscape720p3";
    /* enum_videoprofiletype_VideoProfileLandscape720p5 */
    VideoProfileType[VideoProfileType["VideoProfileLandscape720p5"] = 54] = "VideoProfileLandscape720p5";
    /* enum_videoprofiletype_VideoProfileLandscape720p6 */
    VideoProfileType[VideoProfileType["VideoProfileLandscape720p6"] = 55] = "VideoProfileLandscape720p6";
    /* enum_videoprofiletype_VideoProfileLandscape1080p */
    VideoProfileType[VideoProfileType["VideoProfileLandscape1080p"] = 60] = "VideoProfileLandscape1080p";
    /* enum_videoprofiletype_VideoProfileLandscape1080p3 */
    VideoProfileType[VideoProfileType["VideoProfileLandscape1080p3"] = 62] = "VideoProfileLandscape1080p3";
    /* enum_videoprofiletype_VideoProfileLandscape1080p5 */
    VideoProfileType[VideoProfileType["VideoProfileLandscape1080p5"] = 64] = "VideoProfileLandscape1080p5";
    /* enum_videoprofiletype_VideoProfileLandscape1440p */
    VideoProfileType[VideoProfileType["VideoProfileLandscape1440p"] = 66] = "VideoProfileLandscape1440p";
    /* enum_videoprofiletype_VideoProfileLandscape1440p2 */
    VideoProfileType[VideoProfileType["VideoProfileLandscape1440p2"] = 67] = "VideoProfileLandscape1440p2";
    /* enum_videoprofiletype_VideoProfileLandscape4k */
    VideoProfileType[VideoProfileType["VideoProfileLandscape4k"] = 70] = "VideoProfileLandscape4k";
    /* enum_videoprofiletype_VideoProfileLandscape4k3 */
    VideoProfileType[VideoProfileType["VideoProfileLandscape4k3"] = 72] = "VideoProfileLandscape4k3";
    /* enum_videoprofiletype_VideoProfilePortrait120p */
    VideoProfileType[VideoProfileType["VideoProfilePortrait120p"] = 1000] = "VideoProfilePortrait120p";
    /* enum_videoprofiletype_VideoProfilePortrait120p3 */
    VideoProfileType[VideoProfileType["VideoProfilePortrait120p3"] = 1002] = "VideoProfilePortrait120p3";
    /* enum_videoprofiletype_VideoProfilePortrait180p */
    VideoProfileType[VideoProfileType["VideoProfilePortrait180p"] = 1010] = "VideoProfilePortrait180p";
    /* enum_videoprofiletype_VideoProfilePortrait180p3 */
    VideoProfileType[VideoProfileType["VideoProfilePortrait180p3"] = 1012] = "VideoProfilePortrait180p3";
    /* enum_videoprofiletype_VideoProfilePortrait180p4 */
    VideoProfileType[VideoProfileType["VideoProfilePortrait180p4"] = 1013] = "VideoProfilePortrait180p4";
    /* enum_videoprofiletype_VideoProfilePortrait240p */
    VideoProfileType[VideoProfileType["VideoProfilePortrait240p"] = 1020] = "VideoProfilePortrait240p";
    /* enum_videoprofiletype_VideoProfilePortrait240p3 */
    VideoProfileType[VideoProfileType["VideoProfilePortrait240p3"] = 1022] = "VideoProfilePortrait240p3";
    /* enum_videoprofiletype_VideoProfilePortrait240p4 */
    VideoProfileType[VideoProfileType["VideoProfilePortrait240p4"] = 1023] = "VideoProfilePortrait240p4";
    /* enum_videoprofiletype_VideoProfilePortrait360p */
    VideoProfileType[VideoProfileType["VideoProfilePortrait360p"] = 1030] = "VideoProfilePortrait360p";
    /* enum_videoprofiletype_VideoProfilePortrait360p3 */
    VideoProfileType[VideoProfileType["VideoProfilePortrait360p3"] = 1032] = "VideoProfilePortrait360p3";
    /* enum_videoprofiletype_VideoProfilePortrait360p4 */
    VideoProfileType[VideoProfileType["VideoProfilePortrait360p4"] = 1033] = "VideoProfilePortrait360p4";
    /* enum_videoprofiletype_VideoProfilePortrait360p6 */
    VideoProfileType[VideoProfileType["VideoProfilePortrait360p6"] = 1035] = "VideoProfilePortrait360p6";
    /* enum_videoprofiletype_VideoProfilePortrait360p7 */
    VideoProfileType[VideoProfileType["VideoProfilePortrait360p7"] = 1036] = "VideoProfilePortrait360p7";
    /* enum_videoprofiletype_VideoProfilePortrait360p8 */
    VideoProfileType[VideoProfileType["VideoProfilePortrait360p8"] = 1037] = "VideoProfilePortrait360p8";
    /* enum_videoprofiletype_VideoProfilePortrait360p9 */
    VideoProfileType[VideoProfileType["VideoProfilePortrait360p9"] = 1038] = "VideoProfilePortrait360p9";
    /* enum_videoprofiletype_VideoProfilePortrait360p10 */
    VideoProfileType[VideoProfileType["VideoProfilePortrait360p10"] = 1039] = "VideoProfilePortrait360p10";
    /* enum_videoprofiletype_VideoProfilePortrait360p11 */
    VideoProfileType[VideoProfileType["VideoProfilePortrait360p11"] = 1100] = "VideoProfilePortrait360p11";
    /* enum_videoprofiletype_VideoProfilePortrait480p */
    VideoProfileType[VideoProfileType["VideoProfilePortrait480p"] = 1040] = "VideoProfilePortrait480p";
    /* enum_videoprofiletype_VideoProfilePortrait480p3 */
    VideoProfileType[VideoProfileType["VideoProfilePortrait480p3"] = 1042] = "VideoProfilePortrait480p3";
    /* enum_videoprofiletype_VideoProfilePortrait480p4 */
    VideoProfileType[VideoProfileType["VideoProfilePortrait480p4"] = 1043] = "VideoProfilePortrait480p4";
    /* enum_videoprofiletype_VideoProfilePortrait480p6 */
    VideoProfileType[VideoProfileType["VideoProfilePortrait480p6"] = 1045] = "VideoProfilePortrait480p6";
    /* enum_videoprofiletype_VideoProfilePortrait480p8 */
    VideoProfileType[VideoProfileType["VideoProfilePortrait480p8"] = 1047] = "VideoProfilePortrait480p8";
    /* enum_videoprofiletype_VideoProfilePortrait480p9 */
    VideoProfileType[VideoProfileType["VideoProfilePortrait480p9"] = 1048] = "VideoProfilePortrait480p9";
    /* enum_videoprofiletype_VideoProfilePortrait480p10 */
    VideoProfileType[VideoProfileType["VideoProfilePortrait480p10"] = 1049] = "VideoProfilePortrait480p10";
    /* enum_videoprofiletype_VideoProfilePortrait720p */
    VideoProfileType[VideoProfileType["VideoProfilePortrait720p"] = 1050] = "VideoProfilePortrait720p";
    /* enum_videoprofiletype_VideoProfilePortrait720p3 */
    VideoProfileType[VideoProfileType["VideoProfilePortrait720p3"] = 1052] = "VideoProfilePortrait720p3";
    /* enum_videoprofiletype_VideoProfilePortrait720p5 */
    VideoProfileType[VideoProfileType["VideoProfilePortrait720p5"] = 1054] = "VideoProfilePortrait720p5";
    /* enum_videoprofiletype_VideoProfilePortrait720p6 */
    VideoProfileType[VideoProfileType["VideoProfilePortrait720p6"] = 1055] = "VideoProfilePortrait720p6";
    /* enum_videoprofiletype_VideoProfilePortrait1080p */
    VideoProfileType[VideoProfileType["VideoProfilePortrait1080p"] = 1060] = "VideoProfilePortrait1080p";
    /* enum_videoprofiletype_VideoProfilePortrait1080p3 */
    VideoProfileType[VideoProfileType["VideoProfilePortrait1080p3"] = 1062] = "VideoProfilePortrait1080p3";
    /* enum_videoprofiletype_VideoProfilePortrait1080p5 */
    VideoProfileType[VideoProfileType["VideoProfilePortrait1080p5"] = 1064] = "VideoProfilePortrait1080p5";
    /* enum_videoprofiletype_VideoProfilePortrait1440p */
    VideoProfileType[VideoProfileType["VideoProfilePortrait1440p"] = 1066] = "VideoProfilePortrait1440p";
    /* enum_videoprofiletype_VideoProfilePortrait1440p2 */
    VideoProfileType[VideoProfileType["VideoProfilePortrait1440p2"] = 1067] = "VideoProfilePortrait1440p2";
    /* enum_videoprofiletype_VideoProfilePortrait4k */
    VideoProfileType[VideoProfileType["VideoProfilePortrait4k"] = 1070] = "VideoProfilePortrait4k";
    /* enum_videoprofiletype_VideoProfilePortrait4k3 */
    VideoProfileType[VideoProfileType["VideoProfilePortrait4k3"] = 1072] = "VideoProfilePortrait4k3";
    /* enum_videoprofiletype_VideoProfileDefault */
    VideoProfileType[VideoProfileType["VideoProfileDefault"] = 30] = "VideoProfileDefault";
})(VideoProfileType = exports.VideoProfileType || (exports.VideoProfileType = {}));
/* class_sdkbuildinfo */
var SDKBuildInfo = /** @class */ (function () {
    function SDKBuildInfo() {
    }
    return SDKBuildInfo;
}());
exports.SDKBuildInfo = SDKBuildInfo;
/* class_videodeviceinfo */
var VideoDeviceInfo = /** @class */ (function () {
    function VideoDeviceInfo() {
    }
    return VideoDeviceInfo;
}());
exports.VideoDeviceInfo = VideoDeviceInfo;
/* class_audiodeviceinfo */
var AudioDeviceInfo = /** @class */ (function () {
    function AudioDeviceInfo() {
    }
    return AudioDeviceInfo;
}());
exports.AudioDeviceInfo = AudioDeviceInfo;
