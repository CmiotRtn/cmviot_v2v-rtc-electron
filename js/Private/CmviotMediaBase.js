"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecorderInfo = exports.MediaRecorderConfiguration = exports.RecorderErrorCode = exports.RecorderState = exports.MediaRecorderStreamType = exports.MediaRecorderContainerFormat = exports.ExternalVideoSourceType = exports.VideoFrameProcessMode = exports.UserAudioSpectrumInfo = exports.AudioSpectrumData = exports.AudioParams = exports.AudioFramePosition = exports.AudioFrame = exports.AudioFrameType = exports.VideoModulePosition = exports.MediaPlayerSourceType = exports.VideoFrame = exports.ExternalVideoFrame = exports.VideoBufferType = exports.EglContextType = exports.CameraVideoSourceType = exports.RenderModeType = exports.VideoPixelFormat = exports.AudioDualMonoMode = exports.AudioPcmFrame = exports.AudioEncodedFrameInfo = exports.PacketOptions = exports.ContentInspectConfig = exports.ContentInspectModule = exports.ContentInspectType = exports.ContentInspectResult = exports.MediaSourceType = exports.RawAudioFrameOpModeType = exports.AudioParameters = exports.BytesPerSample = exports.AudioRoute = exports.VideoSourceType = void 0;
require("./extension/CmviotMediaBaseExtension");
/* enum_videosourcetype */
var VideoSourceType;
(function (VideoSourceType) {
    /* enum_videosourcetype_VideoSourceCameraPrimary */
    VideoSourceType[VideoSourceType["VideoSourceCameraPrimary"] = 0] = "VideoSourceCameraPrimary";
    /* enum_videosourcetype_VideoSourceCamera */
    VideoSourceType[VideoSourceType["VideoSourceCamera"] = 0] = "VideoSourceCamera";
    /* enum_videosourcetype_VideoSourceCameraSecondary */
    VideoSourceType[VideoSourceType["VideoSourceCameraSecondary"] = 1] = "VideoSourceCameraSecondary";
    /* enum_videosourcetype_VideoSourceScreenPrimary */
    VideoSourceType[VideoSourceType["VideoSourceScreenPrimary"] = 2] = "VideoSourceScreenPrimary";
    /* enum_videosourcetype_VideoSourceScreen */
    VideoSourceType[VideoSourceType["VideoSourceScreen"] = 2] = "VideoSourceScreen";
    /* enum_videosourcetype_VideoSourceScreenSecondary */
    VideoSourceType[VideoSourceType["VideoSourceScreenSecondary"] = 3] = "VideoSourceScreenSecondary";
    /* enum_videosourcetype_VideoSourceCustom */
    VideoSourceType[VideoSourceType["VideoSourceCustom"] = 4] = "VideoSourceCustom";
    /* enum_videosourcetype_VideoSourceMediaPlayer */
    VideoSourceType[VideoSourceType["VideoSourceMediaPlayer"] = 5] = "VideoSourceMediaPlayer";
    /* enum_videosourcetype_VideoSourceRtcImagePng */
    VideoSourceType[VideoSourceType["VideoSourceRtcImagePng"] = 6] = "VideoSourceRtcImagePng";
    /* enum_videosourcetype_VideoSourceRtcImageJpeg */
    VideoSourceType[VideoSourceType["VideoSourceRtcImageJpeg"] = 7] = "VideoSourceRtcImageJpeg";
    /* enum_videosourcetype_VideoSourceRtcImageGif */
    VideoSourceType[VideoSourceType["VideoSourceRtcImageGif"] = 8] = "VideoSourceRtcImageGif";
    /* enum_videosourcetype_VideoSourceRemote */
    VideoSourceType[VideoSourceType["VideoSourceRemote"] = 9] = "VideoSourceRemote";
    /* enum_videosourcetype_VideoSourceTranscoded */
    VideoSourceType[VideoSourceType["VideoSourceTranscoded"] = 10] = "VideoSourceTranscoded";
    /* enum_videosourcetype_VideoSourceCameraThird */
    VideoSourceType[VideoSourceType["VideoSourceCameraThird"] = 11] = "VideoSourceCameraThird";
    /* enum_videosourcetype_VideoSourceCameraFourth */
    VideoSourceType[VideoSourceType["VideoSourceCameraFourth"] = 12] = "VideoSourceCameraFourth";
    /* enum_videosourcetype_VideoSourceScreenThird */
    VideoSourceType[VideoSourceType["VideoSourceScreenThird"] = 13] = "VideoSourceScreenThird";
    /* enum_videosourcetype_VideoSourceScreenFourth */
    VideoSourceType[VideoSourceType["VideoSourceScreenFourth"] = 14] = "VideoSourceScreenFourth";
    /* enum_videosourcetype_VideoSourceUnknown */
    VideoSourceType[VideoSourceType["VideoSourceUnknown"] = 100] = "VideoSourceUnknown";
})(VideoSourceType = exports.VideoSourceType || (exports.VideoSourceType = {}));
/* enum_audioroute */
var AudioRoute;
(function (AudioRoute) {
    /* enum_audioroute_RouteDefault */
    AudioRoute[AudioRoute["RouteDefault"] = -1] = "RouteDefault";
    /* enum_audioroute_RouteHeadset */
    AudioRoute[AudioRoute["RouteHeadset"] = 0] = "RouteHeadset";
    /* enum_audioroute_RouteEarpiece */
    AudioRoute[AudioRoute["RouteEarpiece"] = 1] = "RouteEarpiece";
    /* enum_audioroute_RouteHeadsetnomic */
    AudioRoute[AudioRoute["RouteHeadsetnomic"] = 2] = "RouteHeadsetnomic";
    /* enum_audioroute_RouteSpeakerphone */
    AudioRoute[AudioRoute["RouteSpeakerphone"] = 3] = "RouteSpeakerphone";
    /* enum_audioroute_RouteLoudspeaker */
    AudioRoute[AudioRoute["RouteLoudspeaker"] = 4] = "RouteLoudspeaker";
    /* enum_audioroute_RouteHeadsetbluetooth */
    AudioRoute[AudioRoute["RouteHeadsetbluetooth"] = 5] = "RouteHeadsetbluetooth";
    /* enum_audioroute_RouteUsb */
    AudioRoute[AudioRoute["RouteUsb"] = 6] = "RouteUsb";
    /* enum_audioroute_RouteHdmi */
    AudioRoute[AudioRoute["RouteHdmi"] = 7] = "RouteHdmi";
    /* enum_audioroute_RouteDisplayport */
    AudioRoute[AudioRoute["RouteDisplayport"] = 8] = "RouteDisplayport";
    /* enum_audioroute_RouteAirplay */
    AudioRoute[AudioRoute["RouteAirplay"] = 9] = "RouteAirplay";
})(AudioRoute = exports.AudioRoute || (exports.AudioRoute = {}));
/* enum_bytespersample */
var BytesPerSample;
(function (BytesPerSample) {
    /* enum_bytespersample_TwoBytesPerSample */
    BytesPerSample[BytesPerSample["TwoBytesPerSample"] = 2] = "TwoBytesPerSample";
})(BytesPerSample = exports.BytesPerSample || (exports.BytesPerSample = {}));
/* class_audioparameters */
var AudioParameters = /** @class */ (function () {
    function AudioParameters() {
    }
    return AudioParameters;
}());
exports.AudioParameters = AudioParameters;
/* enum_rawaudioframeopmodetype */
var RawAudioFrameOpModeType;
(function (RawAudioFrameOpModeType) {
    /* enum_rawaudioframeopmodetype_RawAudioFrameOpModeReadOnly */
    RawAudioFrameOpModeType[RawAudioFrameOpModeType["RawAudioFrameOpModeReadOnly"] = 0] = "RawAudioFrameOpModeReadOnly";
    /* enum_rawaudioframeopmodetype_RawAudioFrameOpModeReadWrite */
    RawAudioFrameOpModeType[RawAudioFrameOpModeType["RawAudioFrameOpModeReadWrite"] = 2] = "RawAudioFrameOpModeReadWrite";
})(RawAudioFrameOpModeType = exports.RawAudioFrameOpModeType || (exports.RawAudioFrameOpModeType = {}));
/* enum_mediasourcetype */
var MediaSourceType;
(function (MediaSourceType) {
    /* enum_mediasourcetype_AudioPlayoutSource */
    MediaSourceType[MediaSourceType["AudioPlayoutSource"] = 0] = "AudioPlayoutSource";
    /* enum_mediasourcetype_AudioRecordingSource */
    MediaSourceType[MediaSourceType["AudioRecordingSource"] = 1] = "AudioRecordingSource";
    /* enum_mediasourcetype_PrimaryCameraSource */
    MediaSourceType[MediaSourceType["PrimaryCameraSource"] = 2] = "PrimaryCameraSource";
    /* enum_mediasourcetype_SecondaryCameraSource */
    MediaSourceType[MediaSourceType["SecondaryCameraSource"] = 3] = "SecondaryCameraSource";
    /* enum_mediasourcetype_PrimaryScreenSource */
    MediaSourceType[MediaSourceType["PrimaryScreenSource"] = 4] = "PrimaryScreenSource";
    /* enum_mediasourcetype_SecondaryScreenSource */
    MediaSourceType[MediaSourceType["SecondaryScreenSource"] = 5] = "SecondaryScreenSource";
    /* enum_mediasourcetype_CustomVideoSource */
    MediaSourceType[MediaSourceType["CustomVideoSource"] = 6] = "CustomVideoSource";
    /* enum_mediasourcetype_MediaPlayerSource */
    MediaSourceType[MediaSourceType["MediaPlayerSource"] = 7] = "MediaPlayerSource";
    /* enum_mediasourcetype_RtcImagePngSource */
    MediaSourceType[MediaSourceType["RtcImagePngSource"] = 8] = "RtcImagePngSource";
    /* enum_mediasourcetype_RtcImageJpegSource */
    MediaSourceType[MediaSourceType["RtcImageJpegSource"] = 9] = "RtcImageJpegSource";
    /* enum_mediasourcetype_RtcImageGifSource */
    MediaSourceType[MediaSourceType["RtcImageGifSource"] = 10] = "RtcImageGifSource";
    /* enum_mediasourcetype_RemoteVideoSource */
    MediaSourceType[MediaSourceType["RemoteVideoSource"] = 11] = "RemoteVideoSource";
    /* enum_mediasourcetype_TranscodedVideoSource */
    MediaSourceType[MediaSourceType["TranscodedVideoSource"] = 12] = "TranscodedVideoSource";
    /* enum_mediasourcetype_UnknownMediaSource */
    MediaSourceType[MediaSourceType["UnknownMediaSource"] = 100] = "UnknownMediaSource";
})(MediaSourceType = exports.MediaSourceType || (exports.MediaSourceType = {}));
/* enum_contentinspectresult */
var ContentInspectResult;
(function (ContentInspectResult) {
    /* enum_contentinspectresult_ContentInspectNeutral */
    ContentInspectResult[ContentInspectResult["ContentInspectNeutral"] = 1] = "ContentInspectNeutral";
    /* enum_contentinspectresult_ContentInspectSexy */
    ContentInspectResult[ContentInspectResult["ContentInspectSexy"] = 2] = "ContentInspectSexy";
    /* enum_contentinspectresult_ContentInspectPorn */
    ContentInspectResult[ContentInspectResult["ContentInspectPorn"] = 3] = "ContentInspectPorn";
})(ContentInspectResult = exports.ContentInspectResult || (exports.ContentInspectResult = {}));
/* enum_contentinspecttype */
var ContentInspectType;
(function (ContentInspectType) {
    /* enum_contentinspecttype_ContentInspectInvalid */
    ContentInspectType[ContentInspectType["ContentInspectInvalid"] = 0] = "ContentInspectInvalid";
    /* enum_contentinspecttype_ContentInspectModeration */
    ContentInspectType[ContentInspectType["ContentInspectModeration"] = 1] = "ContentInspectModeration";
    /* enum_contentinspecttype_ContentInspectSupervision */
    ContentInspectType[ContentInspectType["ContentInspectSupervision"] = 2] = "ContentInspectSupervision";
})(ContentInspectType = exports.ContentInspectType || (exports.ContentInspectType = {}));
/* class_contentinspectmodule */
var ContentInspectModule = /** @class */ (function () {
    function ContentInspectModule() {
    }
    return ContentInspectModule;
}());
exports.ContentInspectModule = ContentInspectModule;
/* class_contentinspectconfig */
var ContentInspectConfig = /** @class */ (function () {
    function ContentInspectConfig() {
    }
    return ContentInspectConfig;
}());
exports.ContentInspectConfig = ContentInspectConfig;
/* class_packetoptions */
var PacketOptions = /** @class */ (function () {
    function PacketOptions() {
    }
    return PacketOptions;
}());
exports.PacketOptions = PacketOptions;
/* class_audioencodedframeinfo */
var AudioEncodedFrameInfo = /** @class */ (function () {
    function AudioEncodedFrameInfo() {
    }
    return AudioEncodedFrameInfo;
}());
exports.AudioEncodedFrameInfo = AudioEncodedFrameInfo;
/* class_audiopcmframe */
var AudioPcmFrame = /** @class */ (function () {
    function AudioPcmFrame() {
    }
    return AudioPcmFrame;
}());
exports.AudioPcmFrame = AudioPcmFrame;
/* enum_audiodualmonomode */
var AudioDualMonoMode;
(function (AudioDualMonoMode) {
    /* enum_audiodualmonomode_AudioDualMonoStereo */
    AudioDualMonoMode[AudioDualMonoMode["AudioDualMonoStereo"] = 0] = "AudioDualMonoStereo";
    /* enum_audiodualmonomode_AudioDualMonoL */
    AudioDualMonoMode[AudioDualMonoMode["AudioDualMonoL"] = 1] = "AudioDualMonoL";
    /* enum_audiodualmonomode_AudioDualMonoR */
    AudioDualMonoMode[AudioDualMonoMode["AudioDualMonoR"] = 2] = "AudioDualMonoR";
    /* enum_audiodualmonomode_AudioDualMonoMix */
    AudioDualMonoMode[AudioDualMonoMode["AudioDualMonoMix"] = 3] = "AudioDualMonoMix";
})(AudioDualMonoMode = exports.AudioDualMonoMode || (exports.AudioDualMonoMode = {}));
/* enum_videopixelformat */
var VideoPixelFormat;
(function (VideoPixelFormat) {
    /* enum_videopixelformat_VideoPixelDefault */
    VideoPixelFormat[VideoPixelFormat["VideoPixelDefault"] = 0] = "VideoPixelDefault";
    /* enum_videopixelformat_VideoPixelI420 */
    VideoPixelFormat[VideoPixelFormat["VideoPixelI420"] = 1] = "VideoPixelI420";
    /* enum_videopixelformat_VideoPixelBgra */
    VideoPixelFormat[VideoPixelFormat["VideoPixelBgra"] = 2] = "VideoPixelBgra";
    /* enum_videopixelformat_VideoPixelNv21 */
    VideoPixelFormat[VideoPixelFormat["VideoPixelNv21"] = 3] = "VideoPixelNv21";
    /* enum_videopixelformat_VideoPixelRgba */
    VideoPixelFormat[VideoPixelFormat["VideoPixelRgba"] = 4] = "VideoPixelRgba";
    /* enum_videopixelformat_VideoPixelNv12 */
    VideoPixelFormat[VideoPixelFormat["VideoPixelNv12"] = 8] = "VideoPixelNv12";
    /* enum_videopixelformat_VideoTexture2d */
    VideoPixelFormat[VideoPixelFormat["VideoTexture2d"] = 10] = "VideoTexture2d";
    /* enum_videopixelformat_VideoTextureOes */
    VideoPixelFormat[VideoPixelFormat["VideoTextureOes"] = 11] = "VideoTextureOes";
    /* enum_videopixelformat_VideoCvpixelNv12 */
    VideoPixelFormat[VideoPixelFormat["VideoCvpixelNv12"] = 12] = "VideoCvpixelNv12";
    /* enum_videopixelformat_VideoCvpixelI420 */
    VideoPixelFormat[VideoPixelFormat["VideoCvpixelI420"] = 13] = "VideoCvpixelI420";
    /* enum_videopixelformat_VideoCvpixelBgra */
    VideoPixelFormat[VideoPixelFormat["VideoCvpixelBgra"] = 14] = "VideoCvpixelBgra";
    /* enum_videopixelformat_VideoPixelI422 */
    VideoPixelFormat[VideoPixelFormat["VideoPixelI422"] = 16] = "VideoPixelI422";
    /* enum_videopixelformat_VideoTextureId3d11texture2d */
    VideoPixelFormat[VideoPixelFormat["VideoTextureId3d11texture2d"] = 17] = "VideoTextureId3d11texture2d";
})(VideoPixelFormat = exports.VideoPixelFormat || (exports.VideoPixelFormat = {}));
/* enum_rendermodetype */
var RenderModeType;
(function (RenderModeType) {
    /* enum_rendermodetype_RenderModeHidden */
    RenderModeType[RenderModeType["RenderModeHidden"] = 1] = "RenderModeHidden";
    /* enum_rendermodetype_RenderModeFit */
    RenderModeType[RenderModeType["RenderModeFit"] = 2] = "RenderModeFit";
    /* enum_rendermodetype_RenderModeAdaptive */
    RenderModeType[RenderModeType["RenderModeAdaptive"] = 3] = "RenderModeAdaptive";
})(RenderModeType = exports.RenderModeType || (exports.RenderModeType = {}));
/* enum_cameravideosourcetype */
var CameraVideoSourceType;
(function (CameraVideoSourceType) {
    /* enum_cameravideosourcetype_CameraSourceFront */
    CameraVideoSourceType[CameraVideoSourceType["CameraSourceFront"] = 0] = "CameraSourceFront";
    /* enum_cameravideosourcetype_CameraSourceBack */
    CameraVideoSourceType[CameraVideoSourceType["CameraSourceBack"] = 1] = "CameraSourceBack";
    /* enum_cameravideosourcetype_VideoSourceUnspecified */
    CameraVideoSourceType[CameraVideoSourceType["VideoSourceUnspecified"] = 2] = "VideoSourceUnspecified";
})(CameraVideoSourceType = exports.CameraVideoSourceType || (exports.CameraVideoSourceType = {}));
/* enum_eglcontexttype */
var EglContextType;
(function (EglContextType) {
    /* enum_eglcontexttype_EglContext10 */
    EglContextType[EglContextType["EglContext10"] = 0] = "EglContext10";
    /* enum_eglcontexttype_EglContext14 */
    EglContextType[EglContextType["EglContext14"] = 1] = "EglContext14";
})(EglContextType = exports.EglContextType || (exports.EglContextType = {}));
/* enum_videobuffertype */
var VideoBufferType;
(function (VideoBufferType) {
    /* enum_videobuffertype_VideoBufferRawData */
    VideoBufferType[VideoBufferType["VideoBufferRawData"] = 1] = "VideoBufferRawData";
    /* enum_videobuffertype_VideoBufferArray */
    VideoBufferType[VideoBufferType["VideoBufferArray"] = 2] = "VideoBufferArray";
    /* enum_videobuffertype_VideoBufferTexture */
    VideoBufferType[VideoBufferType["VideoBufferTexture"] = 3] = "VideoBufferTexture";
})(VideoBufferType = exports.VideoBufferType || (exports.VideoBufferType = {}));
/* class_externalvideoframe */
var ExternalVideoFrame = /** @class */ (function () {
    function ExternalVideoFrame() {
    }
    return ExternalVideoFrame;
}());
exports.ExternalVideoFrame = ExternalVideoFrame;
/* class_videoframe */
var VideoFrame = /** @class */ (function () {
    function VideoFrame() {
    }
    return VideoFrame;
}());
exports.VideoFrame = VideoFrame;
/* enum_mediaplayersourcetype */
var MediaPlayerSourceType;
(function (MediaPlayerSourceType) {
    /* enum_mediaplayersourcetype_MediaPlayerSourceDefault */
    MediaPlayerSourceType[MediaPlayerSourceType["MediaPlayerSourceDefault"] = 0] = "MediaPlayerSourceDefault";
    /* enum_mediaplayersourcetype_MediaPlayerSourceFullFeatured */
    MediaPlayerSourceType[MediaPlayerSourceType["MediaPlayerSourceFullFeatured"] = 1] = "MediaPlayerSourceFullFeatured";
    /* enum_mediaplayersourcetype_MediaPlayerSourceSimple */
    MediaPlayerSourceType[MediaPlayerSourceType["MediaPlayerSourceSimple"] = 2] = "MediaPlayerSourceSimple";
})(MediaPlayerSourceType = exports.MediaPlayerSourceType || (exports.MediaPlayerSourceType = {}));
/* enum_videomoduleposition */
var VideoModulePosition;
(function (VideoModulePosition) {
    /* enum_videomoduleposition_PositionPostCapturer */
    VideoModulePosition[VideoModulePosition["PositionPostCapturer"] = 1] = "PositionPostCapturer";
    /* enum_videomoduleposition_PositionPreRenderer */
    VideoModulePosition[VideoModulePosition["PositionPreRenderer"] = 2] = "PositionPreRenderer";
    /* enum_videomoduleposition_PositionPreEncoder */
    VideoModulePosition[VideoModulePosition["PositionPreEncoder"] = 4] = "PositionPreEncoder";
})(VideoModulePosition = exports.VideoModulePosition || (exports.VideoModulePosition = {}));
/* enum_audioframetype */
var AudioFrameType;
(function (AudioFrameType) {
    /* enum_audioframetype_FrameTypePcm16 */
    AudioFrameType[AudioFrameType["FrameTypePcm16"] = 0] = "FrameTypePcm16";
})(AudioFrameType = exports.AudioFrameType || (exports.AudioFrameType = {}));
/* class_audioframe */
var AudioFrame = /** @class */ (function () {
    function AudioFrame() {
    }
    return AudioFrame;
}());
exports.AudioFrame = AudioFrame;
/* enum_audioframeposition */
var AudioFramePosition;
(function (AudioFramePosition) {
    /* enum_audioframeposition_AudioFramePositionNone */
    AudioFramePosition[AudioFramePosition["AudioFramePositionNone"] = 0] = "AudioFramePositionNone";
    /* enum_audioframeposition_AudioFramePositionPlayback */
    AudioFramePosition[AudioFramePosition["AudioFramePositionPlayback"] = 1] = "AudioFramePositionPlayback";
    /* enum_audioframeposition_AudioFramePositionRecord */
    AudioFramePosition[AudioFramePosition["AudioFramePositionRecord"] = 2] = "AudioFramePositionRecord";
    /* enum_audioframeposition_AudioFramePositionMixed */
    AudioFramePosition[AudioFramePosition["AudioFramePositionMixed"] = 4] = "AudioFramePositionMixed";
    /* enum_audioframeposition_AudioFramePositionBeforeMixing */
    AudioFramePosition[AudioFramePosition["AudioFramePositionBeforeMixing"] = 8] = "AudioFramePositionBeforeMixing";
    /* enum_audioframeposition_AudioFramePositionEarMonitoring */
    AudioFramePosition[AudioFramePosition["AudioFramePositionEarMonitoring"] = 16] = "AudioFramePositionEarMonitoring";
})(AudioFramePosition = exports.AudioFramePosition || (exports.AudioFramePosition = {}));
/* class_audioparams */
var AudioParams = /** @class */ (function () {
    function AudioParams() {
    }
    return AudioParams;
}());
exports.AudioParams = AudioParams;
/* class_audiospectrumdata */
var AudioSpectrumData = /** @class */ (function () {
    function AudioSpectrumData() {
    }
    return AudioSpectrumData;
}());
exports.AudioSpectrumData = AudioSpectrumData;
/* class_useraudiospectruminfo */
var UserAudioSpectrumInfo = /** @class */ (function () {
    function UserAudioSpectrumInfo() {
    }
    return UserAudioSpectrumInfo;
}());
exports.UserAudioSpectrumInfo = UserAudioSpectrumInfo;
/* enum_videoframeprocessmode */
var VideoFrameProcessMode;
(function (VideoFrameProcessMode) {
    /* enum_videoframeprocessmode_ProcessModeReadOnly */
    VideoFrameProcessMode[VideoFrameProcessMode["ProcessModeReadOnly"] = 0] = "ProcessModeReadOnly";
    /* enum_videoframeprocessmode_ProcessModeReadWrite */
    VideoFrameProcessMode[VideoFrameProcessMode["ProcessModeReadWrite"] = 1] = "ProcessModeReadWrite";
})(VideoFrameProcessMode = exports.VideoFrameProcessMode || (exports.VideoFrameProcessMode = {}));
/* enum_externalvideosourcetype */
var ExternalVideoSourceType;
(function (ExternalVideoSourceType) {
    /* enum_externalvideosourcetype_VideoFrame */
    ExternalVideoSourceType[ExternalVideoSourceType["VideoFrame"] = 0] = "VideoFrame";
    /* enum_externalvideosourcetype_EncodedVideoFrame */
    ExternalVideoSourceType[ExternalVideoSourceType["EncodedVideoFrame"] = 1] = "EncodedVideoFrame";
})(ExternalVideoSourceType = exports.ExternalVideoSourceType || (exports.ExternalVideoSourceType = {}));
/* enum_mediarecordercontainerformat */
var MediaRecorderContainerFormat;
(function (MediaRecorderContainerFormat) {
    /* enum_mediarecordercontainerformat_FormatMp4 */
    MediaRecorderContainerFormat[MediaRecorderContainerFormat["FormatMp4"] = 1] = "FormatMp4";
})(MediaRecorderContainerFormat = exports.MediaRecorderContainerFormat || (exports.MediaRecorderContainerFormat = {}));
/* enum_mediarecorderstreamtype */
var MediaRecorderStreamType;
(function (MediaRecorderStreamType) {
    /* enum_mediarecorderstreamtype_StreamTypeAudio */
    MediaRecorderStreamType[MediaRecorderStreamType["StreamTypeAudio"] = 1] = "StreamTypeAudio";
    /* enum_mediarecorderstreamtype_StreamTypeVideo */
    MediaRecorderStreamType[MediaRecorderStreamType["StreamTypeVideo"] = 2] = "StreamTypeVideo";
    /* enum_mediarecorderstreamtype_StreamTypeBoth */
    MediaRecorderStreamType[MediaRecorderStreamType["StreamTypeBoth"] = 3] = "StreamTypeBoth";
})(MediaRecorderStreamType = exports.MediaRecorderStreamType || (exports.MediaRecorderStreamType = {}));
/* enum_recorderstate */
var RecorderState;
(function (RecorderState) {
    /* enum_recorderstate_RecorderStateError */
    RecorderState[RecorderState["RecorderStateError"] = -1] = "RecorderStateError";
    /* enum_recorderstate_RecorderStateStart */
    RecorderState[RecorderState["RecorderStateStart"] = 2] = "RecorderStateStart";
    /* enum_recorderstate_RecorderStateStop */
    RecorderState[RecorderState["RecorderStateStop"] = 3] = "RecorderStateStop";
})(RecorderState = exports.RecorderState || (exports.RecorderState = {}));
/* enum_recordererrorcode */
var RecorderErrorCode;
(function (RecorderErrorCode) {
    /* enum_recordererrorcode_RecorderErrorNone */
    RecorderErrorCode[RecorderErrorCode["RecorderErrorNone"] = 0] = "RecorderErrorNone";
    /* enum_recordererrorcode_RecorderErrorWriteFailed */
    RecorderErrorCode[RecorderErrorCode["RecorderErrorWriteFailed"] = 1] = "RecorderErrorWriteFailed";
    /* enum_recordererrorcode_RecorderErrorNoStream */
    RecorderErrorCode[RecorderErrorCode["RecorderErrorNoStream"] = 2] = "RecorderErrorNoStream";
    /* enum_recordererrorcode_RecorderErrorOverMaxDuration */
    RecorderErrorCode[RecorderErrorCode["RecorderErrorOverMaxDuration"] = 3] = "RecorderErrorOverMaxDuration";
    /* enum_recordererrorcode_RecorderErrorConfigChanged */
    RecorderErrorCode[RecorderErrorCode["RecorderErrorConfigChanged"] = 4] = "RecorderErrorConfigChanged";
})(RecorderErrorCode = exports.RecorderErrorCode || (exports.RecorderErrorCode = {}));
/* class_mediarecorderconfiguration */
var MediaRecorderConfiguration = /** @class */ (function () {
    function MediaRecorderConfiguration() {
    }
    return MediaRecorderConfiguration;
}());
exports.MediaRecorderConfiguration = MediaRecorderConfiguration;
/* class_recorderinfo */
var RecorderInfo = /** @class */ (function () {
    function RecorderInfo() {
    }
    return RecorderInfo;
}());
exports.RecorderInfo = RecorderInfo;
