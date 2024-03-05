"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudienceLatencyLevelType = exports.QualityAdaptIndication = exports.ClientRoleType = exports.RtcStats = exports.WatermarkOptions = exports.WatermarkRatio = exports.Rectangle = exports.SimulcastStreamConfig = exports.SimulcastStreamMode = exports.DataStreamConfig = exports.VideoEncoderConfiguration = exports.CodecCapInfo = exports.CodecCapLevels = exports.CodecCapMask = exports.VideoMirrorModeType = exports.AdvanceOptions = exports.EncodingPreference = exports.CompressionPreference = exports.EncodedVideoFrameInfo = exports.VideoSubscriptionOptions = exports.VideoStreamType = exports.H264PacketizeMode = exports.AudioPcmDataInfo = exports.EncodedAudioFrameInfo = exports.EncodedAudioFrameAdvancedSettings = exports.WatermarkFitMode = exports.AudioEncodingType = exports.AudioCodecType = exports.SenderOptions = exports.TCcMode = exports.VideoCodecType = exports.VideoCodecCapabilityLevel = exports.ScreenCaptureFramerateCapability = exports.VideoDimensions = exports.DegradationPreference = exports.OrientationMode = exports.VideoFrameType = exports.FrameHeight = exports.FrameWidth = exports.FrameRate = exports.VideoOrientation = exports.FitModeType = exports.QualityType = exports.InterfaceIdType = exports.UserOfflineReasonType = exports.AudioSessionOperationRestriction = exports.LicenseErrorType = exports.ErrorCodeType = exports.WarnCodeType = exports.ChannelProfileType = void 0;
exports.WlAccStats = exports.WlaccSuggestAction = exports.WlaccMessageReason = exports.ClientRoleChangeFailedReason = exports.ConnectionChangedReasonType = exports.LastmileProbeResult = exports.LastmileProbeOneWayResult = exports.LastmileProbeResultState = exports.LastmileProbeConfig = exports.VideoTranscoderError = exports.LocalTranscoderConfiguration = exports.TranscodingVideoStream = exports.LiveTranscoding = exports.TranscodingUser = exports.ConnectionStateType = exports.LiveStreamAdvancedFeature = exports.RtcImage = exports.RtmpStreamingEvent = exports.RtmpStreamPublishErrorType = exports.RtmpStreamPublishState = exports.LocalAudioStats = exports.AudioCodecProfileType = exports.VideoCodecProfileType = exports.VideoCodecTypeForStream = exports.AudioSampleRateType = exports.Packet = exports.DeviceInfo = exports.AudioVolumeInfo = exports.RemoteVideoDownscaleLevel = exports.VideoTrackInfo = exports.RemoteUserState = exports.RemoteVideoStateReason = exports.RemoteVideoState = exports.RemoteAudioStateReason = exports.RemoteAudioState = exports.LocalVideoStreamError = exports.LocalVideoStreamState = exports.LocalAudioStreamError = exports.LocalAudioStreamState = exports.CaptureBrightnessLevelType = exports.VideoApplicationScenarioType = exports.ScreenScenarioType = exports.VideoContentHint = exports.VideoFormat = exports.AudioScenarioType = exports.AudioProfileType = exports.AudioAinsMode = exports.ExperiencePoorReason = exports.ExperienceQualityType = exports.ClientRoleOptions = void 0;
exports.EarMonitoringFilterType = exports.UserInfo = exports.EchoTestConfiguration = exports.StreamPublishState = exports.StreamSubscribeState = exports.MaxUserAccountLengthType = exports.PermissionType = exports.UploadErrorReason = exports.EncryptionErrorType = exports.EncryptionConfig = exports.EncryptionMode = exports.DownlinkNetworkInfo = exports.PeerDownlinkInfo = exports.UplinkNetworkInfo = exports.ChannelMediaRelayConfiguration = exports.ChannelMediaInfo = exports.ChannelMediaRelayState = exports.ChannelMediaRelayEvent = exports.ChannelMediaRelayError = exports.AreaCodeEx = exports.AreaCode = exports.AudioEncodedFrameObserverConfig = exports.AudioRecordingConfiguration = exports.AudioEncodedFrameObserverPosition = exports.AudioFileRecordingType = exports.AudioRecordingQualityType = exports.ScreenCaptureParameters = exports.HeadphoneEqualizerPreset = exports.VoiceConversionPreset = exports.AudioEffectPreset = exports.VoiceBeautifierPreset = exports.AudioTrackConfig = exports.AudioTrackType = exports.SegmentationProperty = exports.SegModelType = exports.VirtualBackgroundSource = exports.BackgroundBlurDegree = exports.BackgroundSourceType = exports.ColorEnhanceOptions = exports.VideoDenoiserOptions = exports.VideoDenoiserLevel = exports.VideoDenoiserMode = exports.LowlightEnhanceOptions = exports.LowLightEnhanceLevel = exports.LowLightEnhanceMode = exports.BeautyOptions = exports.LighteningContrastLevel = exports.VideoCanvas = exports.VideoViewSetupMode = exports.NetworkType = void 0;
exports.SpatialAudioParams = exports.LocalAccessPointConfiguration = exports.AdvancedConfigInfo = exports.LogUploadServerInfo = exports.LocalProxyMode = exports.RecorderStreamInfo = exports.ConfigFetchType = exports.VideoRenderingTracingInfo = exports.MediaTraceEvent = exports.ScreenCaptureParameters2 = exports.ScreenAudioParameters = exports.ScreenVideoParameters = exports.ThreadPriorityType = void 0;
require("./extension/CmviotBaseExtension");
/* enum_channelprofiletype */
var ChannelProfileType;
(function (ChannelProfileType) {
    /* enum_channelprofiletype_ChannelProfileCommunication */
    ChannelProfileType[ChannelProfileType["ChannelProfileCommunication"] = 0] = "ChannelProfileCommunication";
    /* enum_channelprofiletype_ChannelProfileLiveBroadcasting */
    ChannelProfileType[ChannelProfileType["ChannelProfileLiveBroadcasting"] = 1] = "ChannelProfileLiveBroadcasting";
    /* enum_channelprofiletype_ChannelProfileGame */
    ChannelProfileType[ChannelProfileType["ChannelProfileGame"] = 2] = "ChannelProfileGame";
    /* enum_channelprofiletype_ChannelProfileCloudGaming */
    ChannelProfileType[ChannelProfileType["ChannelProfileCloudGaming"] = 3] = "ChannelProfileCloudGaming";
    /* enum_channelprofiletype_ChannelProfileCommunication1v1 */
    ChannelProfileType[ChannelProfileType["ChannelProfileCommunication1v1"] = 4] = "ChannelProfileCommunication1v1";
})(ChannelProfileType = exports.ChannelProfileType || (exports.ChannelProfileType = {}));
/* enum_warncodetype */
var WarnCodeType;
(function (WarnCodeType) {
    /* enum_warncodetype_WarnInvalidView */
    WarnCodeType[WarnCodeType["WarnInvalidView"] = 8] = "WarnInvalidView";
    /* enum_warncodetype_WarnInitVideo */
    WarnCodeType[WarnCodeType["WarnInitVideo"] = 16] = "WarnInitVideo";
    /* enum_warncodetype_WarnPending */
    WarnCodeType[WarnCodeType["WarnPending"] = 20] = "WarnPending";
    /* enum_warncodetype_WarnNoAvailableChannel */
    WarnCodeType[WarnCodeType["WarnNoAvailableChannel"] = 103] = "WarnNoAvailableChannel";
    /* enum_warncodetype_WarnLookupChannelTimeout */
    WarnCodeType[WarnCodeType["WarnLookupChannelTimeout"] = 104] = "WarnLookupChannelTimeout";
    /* enum_warncodetype_WarnLookupChannelRejected */
    WarnCodeType[WarnCodeType["WarnLookupChannelRejected"] = 105] = "WarnLookupChannelRejected";
    /* enum_warncodetype_WarnOpenChannelTimeout */
    WarnCodeType[WarnCodeType["WarnOpenChannelTimeout"] = 106] = "WarnOpenChannelTimeout";
    /* enum_warncodetype_WarnOpenChannelRejected */
    WarnCodeType[WarnCodeType["WarnOpenChannelRejected"] = 107] = "WarnOpenChannelRejected";
    /* enum_warncodetype_WarnSwitchLiveVideoTimeout */
    WarnCodeType[WarnCodeType["WarnSwitchLiveVideoTimeout"] = 111] = "WarnSwitchLiveVideoTimeout";
    /* enum_warncodetype_WarnSetClientRoleTimeout */
    WarnCodeType[WarnCodeType["WarnSetClientRoleTimeout"] = 118] = "WarnSetClientRoleTimeout";
    /* enum_warncodetype_WarnOpenChannelInvalidTicket */
    WarnCodeType[WarnCodeType["WarnOpenChannelInvalidTicket"] = 121] = "WarnOpenChannelInvalidTicket";
    /* enum_warncodetype_WarnOpenChannelTryNextVos */
    WarnCodeType[WarnCodeType["WarnOpenChannelTryNextVos"] = 122] = "WarnOpenChannelTryNextVos";
    /* enum_warncodetype_WarnChannelConnectionUnrecoverable */
    WarnCodeType[WarnCodeType["WarnChannelConnectionUnrecoverable"] = 131] = "WarnChannelConnectionUnrecoverable";
    /* enum_warncodetype_WarnChannelConnectionIpChanged */
    WarnCodeType[WarnCodeType["WarnChannelConnectionIpChanged"] = 132] = "WarnChannelConnectionIpChanged";
    /* enum_warncodetype_WarnChannelConnectionPortChanged */
    WarnCodeType[WarnCodeType["WarnChannelConnectionPortChanged"] = 133] = "WarnChannelConnectionPortChanged";
    /* enum_warncodetype_WarnChannelSocketError */
    WarnCodeType[WarnCodeType["WarnChannelSocketError"] = 134] = "WarnChannelSocketError";
    /* enum_warncodetype_WarnAudioMixingOpenError */
    WarnCodeType[WarnCodeType["WarnAudioMixingOpenError"] = 701] = "WarnAudioMixingOpenError";
    /* enum_warncodetype_WarnAdmRuntimePlayoutWarning */
    WarnCodeType[WarnCodeType["WarnAdmRuntimePlayoutWarning"] = 1014] = "WarnAdmRuntimePlayoutWarning";
    /* enum_warncodetype_WarnAdmRuntimeRecordingWarning */
    WarnCodeType[WarnCodeType["WarnAdmRuntimeRecordingWarning"] = 1016] = "WarnAdmRuntimeRecordingWarning";
    /* enum_warncodetype_WarnAdmRecordAudioSilence */
    WarnCodeType[WarnCodeType["WarnAdmRecordAudioSilence"] = 1019] = "WarnAdmRecordAudioSilence";
    /* enum_warncodetype_WarnAdmPlayoutMalfunction */
    WarnCodeType[WarnCodeType["WarnAdmPlayoutMalfunction"] = 1020] = "WarnAdmPlayoutMalfunction";
    /* enum_warncodetype_WarnAdmRecordMalfunction */
    WarnCodeType[WarnCodeType["WarnAdmRecordMalfunction"] = 1021] = "WarnAdmRecordMalfunction";
    /* enum_warncodetype_WarnAdmRecordAudioLowlevel */
    WarnCodeType[WarnCodeType["WarnAdmRecordAudioLowlevel"] = 1031] = "WarnAdmRecordAudioLowlevel";
    /* enum_warncodetype_WarnAdmPlayoutAudioLowlevel */
    WarnCodeType[WarnCodeType["WarnAdmPlayoutAudioLowlevel"] = 1032] = "WarnAdmPlayoutAudioLowlevel";
    /* enum_warncodetype_WarnAdmWindowsNoDataReadyEvent */
    WarnCodeType[WarnCodeType["WarnAdmWindowsNoDataReadyEvent"] = 1040] = "WarnAdmWindowsNoDataReadyEvent";
    /* enum_warncodetype_WarnApmHowling */
    WarnCodeType[WarnCodeType["WarnApmHowling"] = 1051] = "WarnApmHowling";
    /* enum_warncodetype_WarnAdmGlitchState */
    WarnCodeType[WarnCodeType["WarnAdmGlitchState"] = 1052] = "WarnAdmGlitchState";
    /* enum_warncodetype_WarnAdmImproperSettings */
    WarnCodeType[WarnCodeType["WarnAdmImproperSettings"] = 1053] = "WarnAdmImproperSettings";
    /* enum_warncodetype_WarnAdmWinCoreNoRecordingDevice */
    WarnCodeType[WarnCodeType["WarnAdmWinCoreNoRecordingDevice"] = 1322] = "WarnAdmWinCoreNoRecordingDevice";
    /* enum_warncodetype_WarnAdmWinCoreNoPlayoutDevice */
    WarnCodeType[WarnCodeType["WarnAdmWinCoreNoPlayoutDevice"] = 1323] = "WarnAdmWinCoreNoPlayoutDevice";
    /* enum_warncodetype_WarnAdmWinCoreImproperCaptureRelease */
    WarnCodeType[WarnCodeType["WarnAdmWinCoreImproperCaptureRelease"] = 1324] = "WarnAdmWinCoreImproperCaptureRelease";
})(WarnCodeType = exports.WarnCodeType || (exports.WarnCodeType = {}));
/* enum_errorcodetype */
var ErrorCodeType;
(function (ErrorCodeType) {
    /* enum_errorcodetype_ErrOk */
    ErrorCodeType[ErrorCodeType["ErrOk"] = 0] = "ErrOk";
    /* enum_errorcodetype_ErrFailed */
    ErrorCodeType[ErrorCodeType["ErrFailed"] = 1] = "ErrFailed";
    /* enum_errorcodetype_ErrInvalidArgument */
    ErrorCodeType[ErrorCodeType["ErrInvalidArgument"] = 2] = "ErrInvalidArgument";
    /* enum_errorcodetype_ErrNotReady */
    ErrorCodeType[ErrorCodeType["ErrNotReady"] = 3] = "ErrNotReady";
    /* enum_errorcodetype_ErrNotSupported */
    ErrorCodeType[ErrorCodeType["ErrNotSupported"] = 4] = "ErrNotSupported";
    /* enum_errorcodetype_ErrRefused */
    ErrorCodeType[ErrorCodeType["ErrRefused"] = 5] = "ErrRefused";
    /* enum_errorcodetype_ErrBufferTooSmall */
    ErrorCodeType[ErrorCodeType["ErrBufferTooSmall"] = 6] = "ErrBufferTooSmall";
    /* enum_errorcodetype_ErrNotInitialized */
    ErrorCodeType[ErrorCodeType["ErrNotInitialized"] = 7] = "ErrNotInitialized";
    /* enum_errorcodetype_ErrInvalidState */
    ErrorCodeType[ErrorCodeType["ErrInvalidState"] = 8] = "ErrInvalidState";
    /* enum_errorcodetype_ErrNoPermission */
    ErrorCodeType[ErrorCodeType["ErrNoPermission"] = 9] = "ErrNoPermission";
    /* enum_errorcodetype_ErrTimedout */
    ErrorCodeType[ErrorCodeType["ErrTimedout"] = 10] = "ErrTimedout";
    /* enum_errorcodetype_ErrCanceled */
    ErrorCodeType[ErrorCodeType["ErrCanceled"] = 11] = "ErrCanceled";
    /* enum_errorcodetype_ErrTooOften */
    ErrorCodeType[ErrorCodeType["ErrTooOften"] = 12] = "ErrTooOften";
    /* enum_errorcodetype_ErrBindSocket */
    ErrorCodeType[ErrorCodeType["ErrBindSocket"] = 13] = "ErrBindSocket";
    /* enum_errorcodetype_ErrNetDown */
    ErrorCodeType[ErrorCodeType["ErrNetDown"] = 14] = "ErrNetDown";
    /* enum_errorcodetype_ErrJoinChannelRejected */
    ErrorCodeType[ErrorCodeType["ErrJoinChannelRejected"] = 17] = "ErrJoinChannelRejected";
    /* enum_errorcodetype_ErrLeaveChannelRejected */
    ErrorCodeType[ErrorCodeType["ErrLeaveChannelRejected"] = 18] = "ErrLeaveChannelRejected";
    /* enum_errorcodetype_ErrAlreadyInUse */
    ErrorCodeType[ErrorCodeType["ErrAlreadyInUse"] = 19] = "ErrAlreadyInUse";
    /* enum_errorcodetype_ErrAborted */
    ErrorCodeType[ErrorCodeType["ErrAborted"] = 20] = "ErrAborted";
    /* enum_errorcodetype_ErrInitNetEngine */
    ErrorCodeType[ErrorCodeType["ErrInitNetEngine"] = 21] = "ErrInitNetEngine";
    /* enum_errorcodetype_ErrResourceLimited */
    ErrorCodeType[ErrorCodeType["ErrResourceLimited"] = 22] = "ErrResourceLimited";
    /* enum_errorcodetype_ErrInvalidAppId */
    ErrorCodeType[ErrorCodeType["ErrInvalidAppId"] = 101] = "ErrInvalidAppId";
    /* enum_errorcodetype_ErrInvalidChannelName */
    ErrorCodeType[ErrorCodeType["ErrInvalidChannelName"] = 102] = "ErrInvalidChannelName";
    /* enum_errorcodetype_ErrNoServerResources */
    ErrorCodeType[ErrorCodeType["ErrNoServerResources"] = 103] = "ErrNoServerResources";
    /* enum_errorcodetype_ErrTokenExpired */
    ErrorCodeType[ErrorCodeType["ErrTokenExpired"] = 109] = "ErrTokenExpired";
    /* enum_errorcodetype_ErrInvalidToken */
    ErrorCodeType[ErrorCodeType["ErrInvalidToken"] = 110] = "ErrInvalidToken";
    /* enum_errorcodetype_ErrConnectionInterrupted */
    ErrorCodeType[ErrorCodeType["ErrConnectionInterrupted"] = 111] = "ErrConnectionInterrupted";
    /* enum_errorcodetype_ErrConnectionLost */
    ErrorCodeType[ErrorCodeType["ErrConnectionLost"] = 112] = "ErrConnectionLost";
    /* enum_errorcodetype_ErrNotInChannel */
    ErrorCodeType[ErrorCodeType["ErrNotInChannel"] = 113] = "ErrNotInChannel";
    /* enum_errorcodetype_ErrSizeTooLarge */
    ErrorCodeType[ErrorCodeType["ErrSizeTooLarge"] = 114] = "ErrSizeTooLarge";
    /* enum_errorcodetype_ErrBitrateLimit */
    ErrorCodeType[ErrorCodeType["ErrBitrateLimit"] = 115] = "ErrBitrateLimit";
    /* enum_errorcodetype_ErrTooManyDataStreams */
    ErrorCodeType[ErrorCodeType["ErrTooManyDataStreams"] = 116] = "ErrTooManyDataStreams";
    /* enum_errorcodetype_ErrStreamMessageTimeout */
    ErrorCodeType[ErrorCodeType["ErrStreamMessageTimeout"] = 117] = "ErrStreamMessageTimeout";
    /* enum_errorcodetype_ErrSetClientRoleNotAuthorized */
    ErrorCodeType[ErrorCodeType["ErrSetClientRoleNotAuthorized"] = 119] = "ErrSetClientRoleNotAuthorized";
    /* enum_errorcodetype_ErrDecryptionFailed */
    ErrorCodeType[ErrorCodeType["ErrDecryptionFailed"] = 120] = "ErrDecryptionFailed";
    /* enum_errorcodetype_ErrInvalidUserId */
    ErrorCodeType[ErrorCodeType["ErrInvalidUserId"] = 121] = "ErrInvalidUserId";
    /* enum_errorcodetype_ErrClientIsBannedByServer */
    ErrorCodeType[ErrorCodeType["ErrClientIsBannedByServer"] = 123] = "ErrClientIsBannedByServer";
    /* enum_errorcodetype_ErrEncryptedStreamNotAllowedPublish */
    ErrorCodeType[ErrorCodeType["ErrEncryptedStreamNotAllowedPublish"] = 130] = "ErrEncryptedStreamNotAllowedPublish";
    /* enum_errorcodetype_ErrLicenseCredentialInvalid */
    ErrorCodeType[ErrorCodeType["ErrLicenseCredentialInvalid"] = 131] = "ErrLicenseCredentialInvalid";
    /* enum_errorcodetype_ErrInvalidUserAccount */
    ErrorCodeType[ErrorCodeType["ErrInvalidUserAccount"] = 134] = "ErrInvalidUserAccount";
    /* enum_errorcodetype_ErrModuleNotFound */
    ErrorCodeType[ErrorCodeType["ErrModuleNotFound"] = 157] = "ErrModuleNotFound";
    /* enum_errorcodetype_ErrCertRaw */
    ErrorCodeType[ErrorCodeType["ErrCertRaw"] = 157] = "ErrCertRaw";
    /* enum_errorcodetype_ErrCertJsonPart */
    ErrorCodeType[ErrorCodeType["ErrCertJsonPart"] = 158] = "ErrCertJsonPart";
    /* enum_errorcodetype_ErrCertJsonInval */
    ErrorCodeType[ErrorCodeType["ErrCertJsonInval"] = 159] = "ErrCertJsonInval";
    /* enum_errorcodetype_ErrCertJsonNomem */
    ErrorCodeType[ErrorCodeType["ErrCertJsonNomem"] = 160] = "ErrCertJsonNomem";
    /* enum_errorcodetype_ErrCertCustom */
    ErrorCodeType[ErrorCodeType["ErrCertCustom"] = 161] = "ErrCertCustom";
    /* enum_errorcodetype_ErrCertCredential */
    ErrorCodeType[ErrorCodeType["ErrCertCredential"] = 162] = "ErrCertCredential";
    /* enum_errorcodetype_ErrCertSign */
    ErrorCodeType[ErrorCodeType["ErrCertSign"] = 163] = "ErrCertSign";
    /* enum_errorcodetype_ErrCertFail */
    ErrorCodeType[ErrorCodeType["ErrCertFail"] = 164] = "ErrCertFail";
    /* enum_errorcodetype_ErrCertBuf */
    ErrorCodeType[ErrorCodeType["ErrCertBuf"] = 165] = "ErrCertBuf";
    /* enum_errorcodetype_ErrCertNull */
    ErrorCodeType[ErrorCodeType["ErrCertNull"] = 166] = "ErrCertNull";
    /* enum_errorcodetype_ErrCertDuedate */
    ErrorCodeType[ErrorCodeType["ErrCertDuedate"] = 167] = "ErrCertDuedate";
    /* enum_errorcodetype_ErrCertRequest */
    ErrorCodeType[ErrorCodeType["ErrCertRequest"] = 168] = "ErrCertRequest";
    /* enum_errorcodetype_ErrPcmsendFormat */
    ErrorCodeType[ErrorCodeType["ErrPcmsendFormat"] = 200] = "ErrPcmsendFormat";
    /* enum_errorcodetype_ErrPcmsendBufferoverflow */
    ErrorCodeType[ErrorCodeType["ErrPcmsendBufferoverflow"] = 201] = "ErrPcmsendBufferoverflow";
    /* enum_errorcodetype_ErrLoginAlreadyLogin */
    ErrorCodeType[ErrorCodeType["ErrLoginAlreadyLogin"] = 428] = "ErrLoginAlreadyLogin";
    /* enum_errorcodetype_ErrLoadMediaEngine */
    ErrorCodeType[ErrorCodeType["ErrLoadMediaEngine"] = 1001] = "ErrLoadMediaEngine";
    /* enum_errorcodetype_ErrAdmGeneralError */
    ErrorCodeType[ErrorCodeType["ErrAdmGeneralError"] = 1005] = "ErrAdmGeneralError";
    /* enum_errorcodetype_ErrAdmInitPlayout */
    ErrorCodeType[ErrorCodeType["ErrAdmInitPlayout"] = 1008] = "ErrAdmInitPlayout";
    /* enum_errorcodetype_ErrAdmStartPlayout */
    ErrorCodeType[ErrorCodeType["ErrAdmStartPlayout"] = 1009] = "ErrAdmStartPlayout";
    /* enum_errorcodetype_ErrAdmStopPlayout */
    ErrorCodeType[ErrorCodeType["ErrAdmStopPlayout"] = 1010] = "ErrAdmStopPlayout";
    /* enum_errorcodetype_ErrAdmInitRecording */
    ErrorCodeType[ErrorCodeType["ErrAdmInitRecording"] = 1011] = "ErrAdmInitRecording";
    /* enum_errorcodetype_ErrAdmStartRecording */
    ErrorCodeType[ErrorCodeType["ErrAdmStartRecording"] = 1012] = "ErrAdmStartRecording";
    /* enum_errorcodetype_ErrAdmStopRecording */
    ErrorCodeType[ErrorCodeType["ErrAdmStopRecording"] = 1013] = "ErrAdmStopRecording";
    /* enum_errorcodetype_ErrVdmCameraNotAuthorized */
    ErrorCodeType[ErrorCodeType["ErrVdmCameraNotAuthorized"] = 1501] = "ErrVdmCameraNotAuthorized";
})(ErrorCodeType = exports.ErrorCodeType || (exports.ErrorCodeType = {}));
/* enum_licenseerrortype */
var LicenseErrorType;
(function (LicenseErrorType) {
    /* enum_licenseerrortype_LicenseErrInvalid */
    LicenseErrorType[LicenseErrorType["LicenseErrInvalid"] = 1] = "LicenseErrInvalid";
    /* enum_licenseerrortype_LicenseErrExpire */
    LicenseErrorType[LicenseErrorType["LicenseErrExpire"] = 2] = "LicenseErrExpire";
    /* enum_licenseerrortype_LicenseErrMinutesExceed */
    LicenseErrorType[LicenseErrorType["LicenseErrMinutesExceed"] = 3] = "LicenseErrMinutesExceed";
    /* enum_licenseerrortype_LicenseErrLimitedPeriod */
    LicenseErrorType[LicenseErrorType["LicenseErrLimitedPeriod"] = 4] = "LicenseErrLimitedPeriod";
    /* enum_licenseerrortype_LicenseErrDiffDevices */
    LicenseErrorType[LicenseErrorType["LicenseErrDiffDevices"] = 5] = "LicenseErrDiffDevices";
    /* enum_licenseerrortype_LicenseErrInternal */
    LicenseErrorType[LicenseErrorType["LicenseErrInternal"] = 99] = "LicenseErrInternal";
})(LicenseErrorType = exports.LicenseErrorType || (exports.LicenseErrorType = {}));
/* enum_audiosessionoperationrestriction */
var AudioSessionOperationRestriction;
(function (AudioSessionOperationRestriction) {
    /* enum_audiosessionoperationrestriction_AudioSessionOperationRestrictionNone */
    AudioSessionOperationRestriction[AudioSessionOperationRestriction["AudioSessionOperationRestrictionNone"] = 0] = "AudioSessionOperationRestrictionNone";
    /* enum_audiosessionoperationrestriction_AudioSessionOperationRestrictionSetCategory */
    AudioSessionOperationRestriction[AudioSessionOperationRestriction["AudioSessionOperationRestrictionSetCategory"] = 1] = "AudioSessionOperationRestrictionSetCategory";
    /* enum_audiosessionoperationrestriction_AudioSessionOperationRestrictionConfigureSession */
    AudioSessionOperationRestriction[AudioSessionOperationRestriction["AudioSessionOperationRestrictionConfigureSession"] = 2] = "AudioSessionOperationRestrictionConfigureSession";
    /* enum_audiosessionoperationrestriction_AudioSessionOperationRestrictionDeactivateSession */
    AudioSessionOperationRestriction[AudioSessionOperationRestriction["AudioSessionOperationRestrictionDeactivateSession"] = 4] = "AudioSessionOperationRestrictionDeactivateSession";
    /* enum_audiosessionoperationrestriction_AudioSessionOperationRestrictionAll */
    AudioSessionOperationRestriction[AudioSessionOperationRestriction["AudioSessionOperationRestrictionAll"] = 128] = "AudioSessionOperationRestrictionAll";
})(AudioSessionOperationRestriction = exports.AudioSessionOperationRestriction || (exports.AudioSessionOperationRestriction = {}));
/* enum_userofflinereasontype */
var UserOfflineReasonType;
(function (UserOfflineReasonType) {
    /* enum_userofflinereasontype_UserOfflineQuit */
    UserOfflineReasonType[UserOfflineReasonType["UserOfflineQuit"] = 0] = "UserOfflineQuit";
    /* enum_userofflinereasontype_UserOfflineDropped */
    UserOfflineReasonType[UserOfflineReasonType["UserOfflineDropped"] = 1] = "UserOfflineDropped";
    /* enum_userofflinereasontype_UserOfflineBecomeAudience */
    UserOfflineReasonType[UserOfflineReasonType["UserOfflineBecomeAudience"] = 2] = "UserOfflineBecomeAudience";
})(UserOfflineReasonType = exports.UserOfflineReasonType || (exports.UserOfflineReasonType = {}));
/* enum_interfaceidtype */
var InterfaceIdType;
(function (InterfaceIdType) {
    /* enum_interfaceidtype_CmviotIidAudioDeviceManager */
    InterfaceIdType[InterfaceIdType["CmviotIidAudioDeviceManager"] = 1] = "CmviotIidAudioDeviceManager";
    /* enum_interfaceidtype_CmviotIidVideoDeviceManager */
    InterfaceIdType[InterfaceIdType["CmviotIidVideoDeviceManager"] = 2] = "CmviotIidVideoDeviceManager";
    /* enum_interfaceidtype_CmviotIidParameterEngine */
    InterfaceIdType[InterfaceIdType["CmviotIidParameterEngine"] = 3] = "CmviotIidParameterEngine";
    /* enum_interfaceidtype_CmviotIidMediaEngine */
    InterfaceIdType[InterfaceIdType["CmviotIidMediaEngine"] = 4] = "CmviotIidMediaEngine";
    /* enum_interfaceidtype_CmviotIidAudioEngine */
    InterfaceIdType[InterfaceIdType["CmviotIidAudioEngine"] = 5] = "CmviotIidAudioEngine";
    /* enum_interfaceidtype_CmviotIidVideoEngine */
    InterfaceIdType[InterfaceIdType["CmviotIidVideoEngine"] = 6] = "CmviotIidVideoEngine";
    /* enum_interfaceidtype_CmviotIidRtcConnection */
    InterfaceIdType[InterfaceIdType["CmviotIidRtcConnection"] = 7] = "CmviotIidRtcConnection";
    /* enum_interfaceidtype_CmviotIidSignalingEngine */
    InterfaceIdType[InterfaceIdType["CmviotIidSignalingEngine"] = 8] = "CmviotIidSignalingEngine";
    /* enum_interfaceidtype_CmviotIidMediaEngineRegulator */
    InterfaceIdType[InterfaceIdType["CmviotIidMediaEngineRegulator"] = 9] = "CmviotIidMediaEngineRegulator";
    /* enum_interfaceidtype_CmviotIidCloudSpatialAudio */
    InterfaceIdType[InterfaceIdType["CmviotIidCloudSpatialAudio"] = 10] = "CmviotIidCloudSpatialAudio";
    /* enum_interfaceidtype_CmviotIidLocalSpatialAudio */
    InterfaceIdType[InterfaceIdType["CmviotIidLocalSpatialAudio"] = 11] = "CmviotIidLocalSpatialAudio";
    /* enum_interfaceidtype_CmviotIidStateSync */
    InterfaceIdType[InterfaceIdType["CmviotIidStateSync"] = 13] = "CmviotIidStateSync";
    /* enum_interfaceidtype_CmviotIidMetachatService */
    InterfaceIdType[InterfaceIdType["CmviotIidMetachatService"] = 14] = "CmviotIidMetachatService";
    /* enum_interfaceidtype_CmviotIidMusicContentCenter */
    InterfaceIdType[InterfaceIdType["CmviotIidMusicContentCenter"] = 15] = "CmviotIidMusicContentCenter";
    /* enum_interfaceidtype_CmviotIidH265Transcoder */
    InterfaceIdType[InterfaceIdType["CmviotIidH265Transcoder"] = 16] = "CmviotIidH265Transcoder";
})(InterfaceIdType = exports.InterfaceIdType || (exports.InterfaceIdType = {}));
/* enum_qualitytype */
var QualityType;
(function (QualityType) {
    /* enum_qualitytype_QualityUnknown */
    QualityType[QualityType["QualityUnknown"] = 0] = "QualityUnknown";
    /* enum_qualitytype_QualityExcellent */
    QualityType[QualityType["QualityExcellent"] = 1] = "QualityExcellent";
    /* enum_qualitytype_QualityGood */
    QualityType[QualityType["QualityGood"] = 2] = "QualityGood";
    /* enum_qualitytype_QualityPoor */
    QualityType[QualityType["QualityPoor"] = 3] = "QualityPoor";
    /* enum_qualitytype_QualityBad */
    QualityType[QualityType["QualityBad"] = 4] = "QualityBad";
    /* enum_qualitytype_QualityVbad */
    QualityType[QualityType["QualityVbad"] = 5] = "QualityVbad";
    /* enum_qualitytype_QualityDown */
    QualityType[QualityType["QualityDown"] = 6] = "QualityDown";
    /* enum_qualitytype_QualityUnsupported */
    QualityType[QualityType["QualityUnsupported"] = 7] = "QualityUnsupported";
    /* enum_qualitytype_QualityDetecting */
    QualityType[QualityType["QualityDetecting"] = 8] = "QualityDetecting";
})(QualityType = exports.QualityType || (exports.QualityType = {}));
/* enum_fitmodetype */
var FitModeType;
(function (FitModeType) {
    /* enum_fitmodetype_ModeCover */
    FitModeType[FitModeType["ModeCover"] = 1] = "ModeCover";
    /* enum_fitmodetype_ModeContain */
    FitModeType[FitModeType["ModeContain"] = 2] = "ModeContain";
})(FitModeType = exports.FitModeType || (exports.FitModeType = {}));
/* enum_videoorientation */
var VideoOrientation;
(function (VideoOrientation) {
    /* enum_videoorientation_VideoOrientation0 */
    VideoOrientation[VideoOrientation["VideoOrientation0"] = 0] = "VideoOrientation0";
    /* enum_videoorientation_VideoOrientation90 */
    VideoOrientation[VideoOrientation["VideoOrientation90"] = 90] = "VideoOrientation90";
    /* enum_videoorientation_VideoOrientation180 */
    VideoOrientation[VideoOrientation["VideoOrientation180"] = 180] = "VideoOrientation180";
    /* enum_videoorientation_VideoOrientation270 */
    VideoOrientation[VideoOrientation["VideoOrientation270"] = 270] = "VideoOrientation270";
})(VideoOrientation = exports.VideoOrientation || (exports.VideoOrientation = {}));
/* enum_framerate */
var FrameRate;
(function (FrameRate) {
    /* enum_framerate_FrameRateFps1 */
    FrameRate[FrameRate["FrameRateFps1"] = 1] = "FrameRateFps1";
    /* enum_framerate_FrameRateFps7 */
    FrameRate[FrameRate["FrameRateFps7"] = 7] = "FrameRateFps7";
    /* enum_framerate_FrameRateFps10 */
    FrameRate[FrameRate["FrameRateFps10"] = 10] = "FrameRateFps10";
    /* enum_framerate_FrameRateFps15 */
    FrameRate[FrameRate["FrameRateFps15"] = 15] = "FrameRateFps15";
    /* enum_framerate_FrameRateFps24 */
    FrameRate[FrameRate["FrameRateFps24"] = 24] = "FrameRateFps24";
    /* enum_framerate_FrameRateFps30 */
    FrameRate[FrameRate["FrameRateFps30"] = 30] = "FrameRateFps30";
    /* enum_framerate_FrameRateFps60 */
    FrameRate[FrameRate["FrameRateFps60"] = 60] = "FrameRateFps60";
})(FrameRate = exports.FrameRate || (exports.FrameRate = {}));
/* enum_framewidth */
var FrameWidth;
(function (FrameWidth) {
    /* enum_framewidth_FrameWidth960 */
    FrameWidth[FrameWidth["FrameWidth960"] = 960] = "FrameWidth960";
})(FrameWidth = exports.FrameWidth || (exports.FrameWidth = {}));
/* enum_frameheight */
var FrameHeight;
(function (FrameHeight) {
    /* enum_frameheight_FrameHeight540 */
    FrameHeight[FrameHeight["FrameHeight540"] = 540] = "FrameHeight540";
})(FrameHeight = exports.FrameHeight || (exports.FrameHeight = {}));
/* enum_videoframetype */
var VideoFrameType;
(function (VideoFrameType) {
    /* enum_videoframetype_VideoFrameTypeBlankFrame */
    VideoFrameType[VideoFrameType["VideoFrameTypeBlankFrame"] = 0] = "VideoFrameTypeBlankFrame";
    /* enum_videoframetype_VideoFrameTypeKeyFrame */
    VideoFrameType[VideoFrameType["VideoFrameTypeKeyFrame"] = 3] = "VideoFrameTypeKeyFrame";
    /* enum_videoframetype_VideoFrameTypeDeltaFrame */
    VideoFrameType[VideoFrameType["VideoFrameTypeDeltaFrame"] = 4] = "VideoFrameTypeDeltaFrame";
    /* enum_videoframetype_VideoFrameTypeBFrame */
    VideoFrameType[VideoFrameType["VideoFrameTypeBFrame"] = 5] = "VideoFrameTypeBFrame";
    /* enum_videoframetype_VideoFrameTypeDroppableFrame */
    VideoFrameType[VideoFrameType["VideoFrameTypeDroppableFrame"] = 6] = "VideoFrameTypeDroppableFrame";
    /* enum_videoframetype_VideoFrameTypeUnknow */
    VideoFrameType[VideoFrameType["VideoFrameTypeUnknow"] = 7] = "VideoFrameTypeUnknow";
})(VideoFrameType = exports.VideoFrameType || (exports.VideoFrameType = {}));
/* enum_orientationmode */
var OrientationMode;
(function (OrientationMode) {
    /* enum_orientationmode_OrientationModeAdaptive */
    OrientationMode[OrientationMode["OrientationModeAdaptive"] = 0] = "OrientationModeAdaptive";
    /* enum_orientationmode_OrientationModeFixedLandscape */
    OrientationMode[OrientationMode["OrientationModeFixedLandscape"] = 1] = "OrientationModeFixedLandscape";
    /* enum_orientationmode_OrientationModeFixedPortrait */
    OrientationMode[OrientationMode["OrientationModeFixedPortrait"] = 2] = "OrientationModeFixedPortrait";
})(OrientationMode = exports.OrientationMode || (exports.OrientationMode = {}));
/* enum_degradationpreference */
var DegradationPreference;
(function (DegradationPreference) {
    /* enum_degradationpreference_MaintainQuality */
    DegradationPreference[DegradationPreference["MaintainQuality"] = 0] = "MaintainQuality";
    /* enum_degradationpreference_MaintainFramerate */
    DegradationPreference[DegradationPreference["MaintainFramerate"] = 1] = "MaintainFramerate";
    /* enum_degradationpreference_MaintainBalanced */
    DegradationPreference[DegradationPreference["MaintainBalanced"] = 2] = "MaintainBalanced";
    /* enum_degradationpreference_MaintainResolution */
    DegradationPreference[DegradationPreference["MaintainResolution"] = 3] = "MaintainResolution";
    /* enum_degradationpreference_Disabled */
    DegradationPreference[DegradationPreference["Disabled"] = 100] = "Disabled";
})(DegradationPreference = exports.DegradationPreference || (exports.DegradationPreference = {}));
/* class_videodimensions */
var VideoDimensions = /** @class */ (function () {
    function VideoDimensions() {
    }
    return VideoDimensions;
}());
exports.VideoDimensions = VideoDimensions;
/* enum_screencaptureframeratecapability */
var ScreenCaptureFramerateCapability;
(function (ScreenCaptureFramerateCapability) {
    /* enum_screencaptureframeratecapability_ScreenCaptureFramerateCapability15Fps */
    ScreenCaptureFramerateCapability[ScreenCaptureFramerateCapability["ScreenCaptureFramerateCapability15Fps"] = 0] = "ScreenCaptureFramerateCapability15Fps";
    /* enum_screencaptureframeratecapability_ScreenCaptureFramerateCapability30Fps */
    ScreenCaptureFramerateCapability[ScreenCaptureFramerateCapability["ScreenCaptureFramerateCapability30Fps"] = 1] = "ScreenCaptureFramerateCapability30Fps";
    /* enum_screencaptureframeratecapability_ScreenCaptureFramerateCapability60Fps */
    ScreenCaptureFramerateCapability[ScreenCaptureFramerateCapability["ScreenCaptureFramerateCapability60Fps"] = 2] = "ScreenCaptureFramerateCapability60Fps";
})(ScreenCaptureFramerateCapability = exports.ScreenCaptureFramerateCapability || (exports.ScreenCaptureFramerateCapability = {}));
/* enum_videocodeccapabilitylevel */
var VideoCodecCapabilityLevel;
(function (VideoCodecCapabilityLevel) {
    /* enum_videocodeccapabilitylevel_CodecCapabilityLevelUnspecified */
    VideoCodecCapabilityLevel[VideoCodecCapabilityLevel["CodecCapabilityLevelUnspecified"] = -1] = "CodecCapabilityLevelUnspecified";
    /* enum_videocodeccapabilitylevel_CodecCapabilityLevelBasicSupport */
    VideoCodecCapabilityLevel[VideoCodecCapabilityLevel["CodecCapabilityLevelBasicSupport"] = 5] = "CodecCapabilityLevelBasicSupport";
    /* enum_videocodeccapabilitylevel_CodecCapabilityLevel1080p30fps */
    VideoCodecCapabilityLevel[VideoCodecCapabilityLevel["CodecCapabilityLevel1080p30fps"] = 10] = "CodecCapabilityLevel1080p30fps";
    /* enum_videocodeccapabilitylevel_CodecCapabilityLevel1080p60fps */
    VideoCodecCapabilityLevel[VideoCodecCapabilityLevel["CodecCapabilityLevel1080p60fps"] = 20] = "CodecCapabilityLevel1080p60fps";
    /* enum_videocodeccapabilitylevel_CodecCapabilityLevel4k60fps */
    VideoCodecCapabilityLevel[VideoCodecCapabilityLevel["CodecCapabilityLevel4k60fps"] = 30] = "CodecCapabilityLevel4k60fps";
})(VideoCodecCapabilityLevel = exports.VideoCodecCapabilityLevel || (exports.VideoCodecCapabilityLevel = {}));
/* enum_videocodectype */
var VideoCodecType;
(function (VideoCodecType) {
    /* enum_videocodectype_VideoCodecNone */
    VideoCodecType[VideoCodecType["VideoCodecNone"] = 0] = "VideoCodecNone";
    /* enum_videocodectype_VideoCodecVp8 */
    VideoCodecType[VideoCodecType["VideoCodecVp8"] = 1] = "VideoCodecVp8";
    /* enum_videocodectype_VideoCodecH264 */
    VideoCodecType[VideoCodecType["VideoCodecH264"] = 2] = "VideoCodecH264";
    /* enum_videocodectype_VideoCodecH265 */
    VideoCodecType[VideoCodecType["VideoCodecH265"] = 3] = "VideoCodecH265";
    /* enum_videocodectype_VideoCodecGeneric */
    VideoCodecType[VideoCodecType["VideoCodecGeneric"] = 6] = "VideoCodecGeneric";
    /* enum_videocodectype_VideoCodecGenericH264 */
    VideoCodecType[VideoCodecType["VideoCodecGenericH264"] = 7] = "VideoCodecGenericH264";
    /* enum_videocodectype_VideoCodecAv1 */
    VideoCodecType[VideoCodecType["VideoCodecAv1"] = 12] = "VideoCodecAv1";
    /* enum_videocodectype_VideoCodecVp9 */
    VideoCodecType[VideoCodecType["VideoCodecVp9"] = 13] = "VideoCodecVp9";
    /* enum_videocodectype_VideoCodecGenericJpeg */
    VideoCodecType[VideoCodecType["VideoCodecGenericJpeg"] = 20] = "VideoCodecGenericJpeg";
})(VideoCodecType = exports.VideoCodecType || (exports.VideoCodecType = {}));
/* enum_tccmode */
var TCcMode;
(function (TCcMode) {
    /* enum_tccmode_CcEnabled */
    TCcMode[TCcMode["CcEnabled"] = 0] = "CcEnabled";
    /* enum_tccmode_CcDisabled */
    TCcMode[TCcMode["CcDisabled"] = 1] = "CcDisabled";
})(TCcMode = exports.TCcMode || (exports.TCcMode = {}));
/* class_senderoptions */
var SenderOptions = /** @class */ (function () {
    function SenderOptions() {
    }
    return SenderOptions;
}());
exports.SenderOptions = SenderOptions;
/* enum_audiocodectype */
var AudioCodecType;
(function (AudioCodecType) {
    /* enum_audiocodectype_AudioCodecOpus */
    AudioCodecType[AudioCodecType["AudioCodecOpus"] = 1] = "AudioCodecOpus";
    /* enum_audiocodectype_AudioCodecPcma */
    AudioCodecType[AudioCodecType["AudioCodecPcma"] = 3] = "AudioCodecPcma";
    /* enum_audiocodectype_AudioCodecPcmu */
    AudioCodecType[AudioCodecType["AudioCodecPcmu"] = 4] = "AudioCodecPcmu";
    /* enum_audiocodectype_AudioCodecG722 */
    AudioCodecType[AudioCodecType["AudioCodecG722"] = 5] = "AudioCodecG722";
    /* enum_audiocodectype_AudioCodecAaclc */
    AudioCodecType[AudioCodecType["AudioCodecAaclc"] = 8] = "AudioCodecAaclc";
    /* enum_audiocodectype_AudioCodecHeaac */
    AudioCodecType[AudioCodecType["AudioCodecHeaac"] = 9] = "AudioCodecHeaac";
    /* enum_audiocodectype_AudioCodecJc1 */
    AudioCodecType[AudioCodecType["AudioCodecJc1"] = 10] = "AudioCodecJc1";
    /* enum_audiocodectype_AudioCodecHeaac2 */
    AudioCodecType[AudioCodecType["AudioCodecHeaac2"] = 11] = "AudioCodecHeaac2";
    /* enum_audiocodectype_AudioCodecLpcnet */
    AudioCodecType[AudioCodecType["AudioCodecLpcnet"] = 12] = "AudioCodecLpcnet";
})(AudioCodecType = exports.AudioCodecType || (exports.AudioCodecType = {}));
/* enum_audioencodingtype */
var AudioEncodingType;
(function (AudioEncodingType) {
    /* enum_audioencodingtype_AudioEncodingTypeAac16000Low */
    AudioEncodingType[AudioEncodingType["AudioEncodingTypeAac16000Low"] = 65793] = "AudioEncodingTypeAac16000Low";
    /* enum_audioencodingtype_AudioEncodingTypeAac16000Medium */
    AudioEncodingType[AudioEncodingType["AudioEncodingTypeAac16000Medium"] = 65794] = "AudioEncodingTypeAac16000Medium";
    /* enum_audioencodingtype_AudioEncodingTypeAac32000Low */
    AudioEncodingType[AudioEncodingType["AudioEncodingTypeAac32000Low"] = 66049] = "AudioEncodingTypeAac32000Low";
    /* enum_audioencodingtype_AudioEncodingTypeAac32000Medium */
    AudioEncodingType[AudioEncodingType["AudioEncodingTypeAac32000Medium"] = 66050] = "AudioEncodingTypeAac32000Medium";
    /* enum_audioencodingtype_AudioEncodingTypeAac32000High */
    AudioEncodingType[AudioEncodingType["AudioEncodingTypeAac32000High"] = 66051] = "AudioEncodingTypeAac32000High";
    /* enum_audioencodingtype_AudioEncodingTypeAac48000Medium */
    AudioEncodingType[AudioEncodingType["AudioEncodingTypeAac48000Medium"] = 66306] = "AudioEncodingTypeAac48000Medium";
    /* enum_audioencodingtype_AudioEncodingTypeAac48000High */
    AudioEncodingType[AudioEncodingType["AudioEncodingTypeAac48000High"] = 66307] = "AudioEncodingTypeAac48000High";
    /* enum_audioencodingtype_AudioEncodingTypeOpus16000Low */
    AudioEncodingType[AudioEncodingType["AudioEncodingTypeOpus16000Low"] = 131329] = "AudioEncodingTypeOpus16000Low";
    /* enum_audioencodingtype_AudioEncodingTypeOpus16000Medium */
    AudioEncodingType[AudioEncodingType["AudioEncodingTypeOpus16000Medium"] = 131330] = "AudioEncodingTypeOpus16000Medium";
    /* enum_audioencodingtype_AudioEncodingTypeOpus48000Medium */
    AudioEncodingType[AudioEncodingType["AudioEncodingTypeOpus48000Medium"] = 131842] = "AudioEncodingTypeOpus48000Medium";
    /* enum_audioencodingtype_AudioEncodingTypeOpus48000High */
    AudioEncodingType[AudioEncodingType["AudioEncodingTypeOpus48000High"] = 131843] = "AudioEncodingTypeOpus48000High";
})(AudioEncodingType = exports.AudioEncodingType || (exports.AudioEncodingType = {}));
/* enum_watermarkfitmode */
var WatermarkFitMode;
(function (WatermarkFitMode) {
    /* enum_watermarkfitmode_FitModeCoverPosition */
    WatermarkFitMode[WatermarkFitMode["FitModeCoverPosition"] = 0] = "FitModeCoverPosition";
    /* enum_watermarkfitmode_FitModeUseImageRatio */
    WatermarkFitMode[WatermarkFitMode["FitModeUseImageRatio"] = 1] = "FitModeUseImageRatio";
})(WatermarkFitMode = exports.WatermarkFitMode || (exports.WatermarkFitMode = {}));
/* class_encodedaudioframeadvancedsettings */
var EncodedAudioFrameAdvancedSettings = /** @class */ (function () {
    function EncodedAudioFrameAdvancedSettings() {
    }
    return EncodedAudioFrameAdvancedSettings;
}());
exports.EncodedAudioFrameAdvancedSettings = EncodedAudioFrameAdvancedSettings;
/* class_encodedaudioframeinfo */
var EncodedAudioFrameInfo = /** @class */ (function () {
    function EncodedAudioFrameInfo() {
    }
    return EncodedAudioFrameInfo;
}());
exports.EncodedAudioFrameInfo = EncodedAudioFrameInfo;
/* class_audiopcmdatainfo */
var AudioPcmDataInfo = /** @class */ (function () {
    function AudioPcmDataInfo() {
    }
    return AudioPcmDataInfo;
}());
exports.AudioPcmDataInfo = AudioPcmDataInfo;
/* enum_h264packetizemode */
var H264PacketizeMode;
(function (H264PacketizeMode) {
    /* enum_h264packetizemode_NonInterleaved */
    H264PacketizeMode[H264PacketizeMode["NonInterleaved"] = 0] = "NonInterleaved";
    /* enum_h264packetizemode_SingleNalUnit */
    H264PacketizeMode[H264PacketizeMode["SingleNalUnit"] = 1] = "SingleNalUnit";
})(H264PacketizeMode = exports.H264PacketizeMode || (exports.H264PacketizeMode = {}));
/* enum_videostreamtype */
var VideoStreamType;
(function (VideoStreamType) {
    /* enum_videostreamtype_VideoStreamHigh */
    VideoStreamType[VideoStreamType["VideoStreamHigh"] = 0] = "VideoStreamHigh";
    /* enum_videostreamtype_VideoStreamLow */
    VideoStreamType[VideoStreamType["VideoStreamLow"] = 1] = "VideoStreamLow";
})(VideoStreamType = exports.VideoStreamType || (exports.VideoStreamType = {}));
/* class_videosubscriptionoptions */
var VideoSubscriptionOptions = /** @class */ (function () {
    function VideoSubscriptionOptions() {
    }
    return VideoSubscriptionOptions;
}());
exports.VideoSubscriptionOptions = VideoSubscriptionOptions;
/* class_encodedvideoframeinfo */
var EncodedVideoFrameInfo = /** @class */ (function () {
    function EncodedVideoFrameInfo() {
    }
    return EncodedVideoFrameInfo;
}());
exports.EncodedVideoFrameInfo = EncodedVideoFrameInfo;
/* enum_compressionpreference */
var CompressionPreference;
(function (CompressionPreference) {
    /* enum_compressionpreference_PreferLowLatency */
    CompressionPreference[CompressionPreference["PreferLowLatency"] = 0] = "PreferLowLatency";
    /* enum_compressionpreference_PreferQuality */
    CompressionPreference[CompressionPreference["PreferQuality"] = 1] = "PreferQuality";
})(CompressionPreference = exports.CompressionPreference || (exports.CompressionPreference = {}));
/* enum_encodingpreference */
var EncodingPreference;
(function (EncodingPreference) {
    /* enum_encodingpreference_PreferAuto */
    EncodingPreference[EncodingPreference["PreferAuto"] = -1] = "PreferAuto";
    /* enum_encodingpreference_PreferSoftware */
    EncodingPreference[EncodingPreference["PreferSoftware"] = 0] = "PreferSoftware";
    /* enum_encodingpreference_PreferHardware */
    EncodingPreference[EncodingPreference["PreferHardware"] = 1] = "PreferHardware";
})(EncodingPreference = exports.EncodingPreference || (exports.EncodingPreference = {}));
/* class_advanceoptions */
var AdvanceOptions = /** @class */ (function () {
    function AdvanceOptions() {
    }
    return AdvanceOptions;
}());
exports.AdvanceOptions = AdvanceOptions;
/* enum_videomirrormodetype */
var VideoMirrorModeType;
(function (VideoMirrorModeType) {
    /* enum_videomirrormodetype_VideoMirrorModeAuto */
    VideoMirrorModeType[VideoMirrorModeType["VideoMirrorModeAuto"] = 0] = "VideoMirrorModeAuto";
    /* enum_videomirrormodetype_VideoMirrorModeEnabled */
    VideoMirrorModeType[VideoMirrorModeType["VideoMirrorModeEnabled"] = 1] = "VideoMirrorModeEnabled";
    /* enum_videomirrormodetype_VideoMirrorModeDisabled */
    VideoMirrorModeType[VideoMirrorModeType["VideoMirrorModeDisabled"] = 2] = "VideoMirrorModeDisabled";
})(VideoMirrorModeType = exports.VideoMirrorModeType || (exports.VideoMirrorModeType = {}));
/* enum_codeccapmask */
var CodecCapMask;
(function (CodecCapMask) {
    /* enum_codeccapmask_CodecCapMaskNone */
    CodecCapMask[CodecCapMask["CodecCapMaskNone"] = 0] = "CodecCapMaskNone";
    /* enum_codeccapmask_CodecCapMaskHwDec */
    CodecCapMask[CodecCapMask["CodecCapMaskHwDec"] = 1] = "CodecCapMaskHwDec";
    /* enum_codeccapmask_CodecCapMaskHwEnc */
    CodecCapMask[CodecCapMask["CodecCapMaskHwEnc"] = 2] = "CodecCapMaskHwEnc";
    /* enum_codeccapmask_CodecCapMaskSwDec */
    CodecCapMask[CodecCapMask["CodecCapMaskSwDec"] = 4] = "CodecCapMaskSwDec";
    /* enum_codeccapmask_CodecCapMaskSwEnc */
    CodecCapMask[CodecCapMask["CodecCapMaskSwEnc"] = 8] = "CodecCapMaskSwEnc";
})(CodecCapMask = exports.CodecCapMask || (exports.CodecCapMask = {}));
/* class_codeccaplevels */
var CodecCapLevels = /** @class */ (function () {
    function CodecCapLevels() {
    }
    return CodecCapLevels;
}());
exports.CodecCapLevels = CodecCapLevels;
/* class_codeccapinfo */
var CodecCapInfo = /** @class */ (function () {
    function CodecCapInfo() {
    }
    return CodecCapInfo;
}());
exports.CodecCapInfo = CodecCapInfo;
/* class_videoencoderconfiguration */
var VideoEncoderConfiguration = /** @class */ (function () {
    function VideoEncoderConfiguration() {
    }
    return VideoEncoderConfiguration;
}());
exports.VideoEncoderConfiguration = VideoEncoderConfiguration;
/* class_datastreamconfig */
var DataStreamConfig = /** @class */ (function () {
    function DataStreamConfig() {
    }
    return DataStreamConfig;
}());
exports.DataStreamConfig = DataStreamConfig;
/* enum_simulcaststreammode */
var SimulcastStreamMode;
(function (SimulcastStreamMode) {
    /* enum_simulcaststreammode_AutoSimulcastStream */
    SimulcastStreamMode[SimulcastStreamMode["AutoSimulcastStream"] = -1] = "AutoSimulcastStream";
    /* enum_simulcaststreammode_DisableSimulcastStream */
    SimulcastStreamMode[SimulcastStreamMode["DisableSimulcastStream"] = 0] = "DisableSimulcastStream";
    /* enum_simulcaststreammode_EnableSimulcastStream */
    SimulcastStreamMode[SimulcastStreamMode["EnableSimulcastStream"] = 1] = "EnableSimulcastStream";
})(SimulcastStreamMode = exports.SimulcastStreamMode || (exports.SimulcastStreamMode = {}));
/* class_simulcaststreamconfig */
var SimulcastStreamConfig = /** @class */ (function () {
    function SimulcastStreamConfig() {
    }
    return SimulcastStreamConfig;
}());
exports.SimulcastStreamConfig = SimulcastStreamConfig;
/* class_rectangle */
var Rectangle = /** @class */ (function () {
    function Rectangle() {
    }
    return Rectangle;
}());
exports.Rectangle = Rectangle;
/* class_watermarkratio */
var WatermarkRatio = /** @class */ (function () {
    function WatermarkRatio() {
    }
    return WatermarkRatio;
}());
exports.WatermarkRatio = WatermarkRatio;
/* class_watermarkoptions */
var WatermarkOptions = /** @class */ (function () {
    function WatermarkOptions() {
    }
    return WatermarkOptions;
}());
exports.WatermarkOptions = WatermarkOptions;
/* class_rtcstats */
var RtcStats = /** @class */ (function () {
    function RtcStats() {
    }
    return RtcStats;
}());
exports.RtcStats = RtcStats;
/* enum_clientroletype */
var ClientRoleType;
(function (ClientRoleType) {
    /* enum_clientroletype_ClientRoleBroadcaster */
    ClientRoleType[ClientRoleType["ClientRoleBroadcaster"] = 1] = "ClientRoleBroadcaster";
    /* enum_clientroletype_ClientRoleAudience */
    ClientRoleType[ClientRoleType["ClientRoleAudience"] = 2] = "ClientRoleAudience";
})(ClientRoleType = exports.ClientRoleType || (exports.ClientRoleType = {}));
/* enum_qualityadaptindication */
var QualityAdaptIndication;
(function (QualityAdaptIndication) {
    /* enum_qualityadaptindication_AdaptNone */
    QualityAdaptIndication[QualityAdaptIndication["AdaptNone"] = 0] = "AdaptNone";
    /* enum_qualityadaptindication_AdaptUpBandwidth */
    QualityAdaptIndication[QualityAdaptIndication["AdaptUpBandwidth"] = 1] = "AdaptUpBandwidth";
    /* enum_qualityadaptindication_AdaptDownBandwidth */
    QualityAdaptIndication[QualityAdaptIndication["AdaptDownBandwidth"] = 2] = "AdaptDownBandwidth";
})(QualityAdaptIndication = exports.QualityAdaptIndication || (exports.QualityAdaptIndication = {}));
/* enum_audiencelatencyleveltype */
var AudienceLatencyLevelType;
(function (AudienceLatencyLevelType) {
    /* enum_audiencelatencyleveltype_AudienceLatencyLevelLowLatency */
    AudienceLatencyLevelType[AudienceLatencyLevelType["AudienceLatencyLevelLowLatency"] = 1] = "AudienceLatencyLevelLowLatency";
    /* enum_audiencelatencyleveltype_AudienceLatencyLevelUltraLowLatency */
    AudienceLatencyLevelType[AudienceLatencyLevelType["AudienceLatencyLevelUltraLowLatency"] = 2] = "AudienceLatencyLevelUltraLowLatency";
})(AudienceLatencyLevelType = exports.AudienceLatencyLevelType || (exports.AudienceLatencyLevelType = {}));
/* class_clientroleoptions */
var ClientRoleOptions = /** @class */ (function () {
    function ClientRoleOptions() {
    }
    return ClientRoleOptions;
}());
exports.ClientRoleOptions = ClientRoleOptions;
/* enum_experiencequalitytype */
var ExperienceQualityType;
(function (ExperienceQualityType) {
    /* enum_experiencequalitytype_ExperienceQualityGood */
    ExperienceQualityType[ExperienceQualityType["ExperienceQualityGood"] = 0] = "ExperienceQualityGood";
    /* enum_experiencequalitytype_ExperienceQualityBad */
    ExperienceQualityType[ExperienceQualityType["ExperienceQualityBad"] = 1] = "ExperienceQualityBad";
})(ExperienceQualityType = exports.ExperienceQualityType || (exports.ExperienceQualityType = {}));
/* enum_experiencepoorreason */
var ExperiencePoorReason;
(function (ExperiencePoorReason) {
    /* enum_experiencepoorreason_ExperienceReasonNone */
    ExperiencePoorReason[ExperiencePoorReason["ExperienceReasonNone"] = 0] = "ExperienceReasonNone";
    /* enum_experiencepoorreason_RemoteNetworkQualityPoor */
    ExperiencePoorReason[ExperiencePoorReason["RemoteNetworkQualityPoor"] = 1] = "RemoteNetworkQualityPoor";
    /* enum_experiencepoorreason_LocalNetworkQualityPoor */
    ExperiencePoorReason[ExperiencePoorReason["LocalNetworkQualityPoor"] = 2] = "LocalNetworkQualityPoor";
    /* enum_experiencepoorreason_WirelessSignalPoor */
    ExperiencePoorReason[ExperiencePoorReason["WirelessSignalPoor"] = 4] = "WirelessSignalPoor";
    /* enum_experiencepoorreason_WifiBluetoothCoexist */
    ExperiencePoorReason[ExperiencePoorReason["WifiBluetoothCoexist"] = 8] = "WifiBluetoothCoexist";
})(ExperiencePoorReason = exports.ExperiencePoorReason || (exports.ExperiencePoorReason = {}));
/* enum_audioainsmode */
var AudioAinsMode;
(function (AudioAinsMode) {
    /* enum_audioainsmode_AinsModeBalanced */
    AudioAinsMode[AudioAinsMode["AinsModeBalanced"] = 0] = "AinsModeBalanced";
    /* enum_audioainsmode_AinsModeAggressive */
    AudioAinsMode[AudioAinsMode["AinsModeAggressive"] = 1] = "AinsModeAggressive";
    /* enum_audioainsmode_AinsModeUltralowlatency */
    AudioAinsMode[AudioAinsMode["AinsModeUltralowlatency"] = 2] = "AinsModeUltralowlatency";
})(AudioAinsMode = exports.AudioAinsMode || (exports.AudioAinsMode = {}));
/* enum_audioprofiletype */
var AudioProfileType;
(function (AudioProfileType) {
    /* enum_audioprofiletype_AudioProfileDefault */
    AudioProfileType[AudioProfileType["AudioProfileDefault"] = 0] = "AudioProfileDefault";
    /* enum_audioprofiletype_AudioProfileSpeechStandard */
    AudioProfileType[AudioProfileType["AudioProfileSpeechStandard"] = 1] = "AudioProfileSpeechStandard";
    /* enum_audioprofiletype_AudioProfileMusicStandard */
    AudioProfileType[AudioProfileType["AudioProfileMusicStandard"] = 2] = "AudioProfileMusicStandard";
    /* enum_audioprofiletype_AudioProfileMusicStandardStereo */
    AudioProfileType[AudioProfileType["AudioProfileMusicStandardStereo"] = 3] = "AudioProfileMusicStandardStereo";
    /* enum_audioprofiletype_AudioProfileMusicHighQuality */
    AudioProfileType[AudioProfileType["AudioProfileMusicHighQuality"] = 4] = "AudioProfileMusicHighQuality";
    /* enum_audioprofiletype_AudioProfileMusicHighQualityStereo */
    AudioProfileType[AudioProfileType["AudioProfileMusicHighQualityStereo"] = 5] = "AudioProfileMusicHighQualityStereo";
    /* enum_audioprofiletype_AudioProfileIot */
    AudioProfileType[AudioProfileType["AudioProfileIot"] = 6] = "AudioProfileIot";
    /* enum_audioprofiletype_AudioProfileNum */
    AudioProfileType[AudioProfileType["AudioProfileNum"] = 7] = "AudioProfileNum";
})(AudioProfileType = exports.AudioProfileType || (exports.AudioProfileType = {}));
/* enum_audioscenariotype */
var AudioScenarioType;
(function (AudioScenarioType) {
    /* enum_audioscenariotype_AudioScenarioDefault */
    AudioScenarioType[AudioScenarioType["AudioScenarioDefault"] = 0] = "AudioScenarioDefault";
    /* enum_audioscenariotype_AudioScenarioGameStreaming */
    AudioScenarioType[AudioScenarioType["AudioScenarioGameStreaming"] = 3] = "AudioScenarioGameStreaming";
    /* enum_audioscenariotype_AudioScenarioChatroom */
    AudioScenarioType[AudioScenarioType["AudioScenarioChatroom"] = 5] = "AudioScenarioChatroom";
    /* enum_audioscenariotype_AudioScenarioChorus */
    AudioScenarioType[AudioScenarioType["AudioScenarioChorus"] = 7] = "AudioScenarioChorus";
    /* enum_audioscenariotype_AudioScenarioMeeting */
    AudioScenarioType[AudioScenarioType["AudioScenarioMeeting"] = 8] = "AudioScenarioMeeting";
    /* enum_audioscenariotype_AudioScenarioNum */
    AudioScenarioType[AudioScenarioType["AudioScenarioNum"] = 9] = "AudioScenarioNum";
})(AudioScenarioType = exports.AudioScenarioType || (exports.AudioScenarioType = {}));
/* class_videoformat */
var VideoFormat = /** @class */ (function () {
    function VideoFormat() {
    }
    return VideoFormat;
}());
exports.VideoFormat = VideoFormat;
/* enum_videocontenthint */
var VideoContentHint;
(function (VideoContentHint) {
    /* enum_videocontenthint_ContentHintNone */
    VideoContentHint[VideoContentHint["ContentHintNone"] = 0] = "ContentHintNone";
    /* enum_videocontenthint_ContentHintMotion */
    VideoContentHint[VideoContentHint["ContentHintMotion"] = 1] = "ContentHintMotion";
    /* enum_videocontenthint_ContentHintDetails */
    VideoContentHint[VideoContentHint["ContentHintDetails"] = 2] = "ContentHintDetails";
})(VideoContentHint = exports.VideoContentHint || (exports.VideoContentHint = {}));
/* enum_screenscenariotype */
var ScreenScenarioType;
(function (ScreenScenarioType) {
    /* enum_screenscenariotype_ScreenScenarioDocument */
    ScreenScenarioType[ScreenScenarioType["ScreenScenarioDocument"] = 1] = "ScreenScenarioDocument";
    /* enum_screenscenariotype_ScreenScenarioGaming */
    ScreenScenarioType[ScreenScenarioType["ScreenScenarioGaming"] = 2] = "ScreenScenarioGaming";
    /* enum_screenscenariotype_ScreenScenarioVideo */
    ScreenScenarioType[ScreenScenarioType["ScreenScenarioVideo"] = 3] = "ScreenScenarioVideo";
    /* enum_screenscenariotype_ScreenScenarioRdc */
    ScreenScenarioType[ScreenScenarioType["ScreenScenarioRdc"] = 4] = "ScreenScenarioRdc";
})(ScreenScenarioType = exports.ScreenScenarioType || (exports.ScreenScenarioType = {}));
/* enum_videoapplicationscenariotype */
var VideoApplicationScenarioType;
(function (VideoApplicationScenarioType) {
    /* enum_videoapplicationscenariotype_ApplicationScenarioGeneral */
    VideoApplicationScenarioType[VideoApplicationScenarioType["ApplicationScenarioGeneral"] = 0] = "ApplicationScenarioGeneral";
    /* enum_videoapplicationscenariotype_ApplicationScenarioMeeting */
    VideoApplicationScenarioType[VideoApplicationScenarioType["ApplicationScenarioMeeting"] = 1] = "ApplicationScenarioMeeting";
})(VideoApplicationScenarioType = exports.VideoApplicationScenarioType || (exports.VideoApplicationScenarioType = {}));
/* enum_capturebrightnessleveltype */
var CaptureBrightnessLevelType;
(function (CaptureBrightnessLevelType) {
    /* enum_capturebrightnessleveltype_CaptureBrightnessLevelInvalid */
    CaptureBrightnessLevelType[CaptureBrightnessLevelType["CaptureBrightnessLevelInvalid"] = -1] = "CaptureBrightnessLevelInvalid";
    /* enum_capturebrightnessleveltype_CaptureBrightnessLevelNormal */
    CaptureBrightnessLevelType[CaptureBrightnessLevelType["CaptureBrightnessLevelNormal"] = 0] = "CaptureBrightnessLevelNormal";
    /* enum_capturebrightnessleveltype_CaptureBrightnessLevelBright */
    CaptureBrightnessLevelType[CaptureBrightnessLevelType["CaptureBrightnessLevelBright"] = 1] = "CaptureBrightnessLevelBright";
    /* enum_capturebrightnessleveltype_CaptureBrightnessLevelDark */
    CaptureBrightnessLevelType[CaptureBrightnessLevelType["CaptureBrightnessLevelDark"] = 2] = "CaptureBrightnessLevelDark";
})(CaptureBrightnessLevelType = exports.CaptureBrightnessLevelType || (exports.CaptureBrightnessLevelType = {}));
/* enum_localaudiostreamstate */
var LocalAudioStreamState;
(function (LocalAudioStreamState) {
    /* enum_localaudiostreamstate_LocalAudioStreamStateStopped */
    LocalAudioStreamState[LocalAudioStreamState["LocalAudioStreamStateStopped"] = 0] = "LocalAudioStreamStateStopped";
    /* enum_localaudiostreamstate_LocalAudioStreamStateRecording */
    LocalAudioStreamState[LocalAudioStreamState["LocalAudioStreamStateRecording"] = 1] = "LocalAudioStreamStateRecording";
    /* enum_localaudiostreamstate_LocalAudioStreamStateEncoding */
    LocalAudioStreamState[LocalAudioStreamState["LocalAudioStreamStateEncoding"] = 2] = "LocalAudioStreamStateEncoding";
    /* enum_localaudiostreamstate_LocalAudioStreamStateFailed */
    LocalAudioStreamState[LocalAudioStreamState["LocalAudioStreamStateFailed"] = 3] = "LocalAudioStreamStateFailed";
})(LocalAudioStreamState = exports.LocalAudioStreamState || (exports.LocalAudioStreamState = {}));
/* enum_localaudiostreamerror */
var LocalAudioStreamError;
(function (LocalAudioStreamError) {
    /* enum_localaudiostreamerror_LocalAudioStreamErrorOk */
    LocalAudioStreamError[LocalAudioStreamError["LocalAudioStreamErrorOk"] = 0] = "LocalAudioStreamErrorOk";
    /* enum_localaudiostreamerror_LocalAudioStreamErrorFailure */
    LocalAudioStreamError[LocalAudioStreamError["LocalAudioStreamErrorFailure"] = 1] = "LocalAudioStreamErrorFailure";
    /* enum_localaudiostreamerror_LocalAudioStreamErrorDeviceNoPermission */
    LocalAudioStreamError[LocalAudioStreamError["LocalAudioStreamErrorDeviceNoPermission"] = 2] = "LocalAudioStreamErrorDeviceNoPermission";
    /* enum_localaudiostreamerror_LocalAudioStreamErrorDeviceBusy */
    LocalAudioStreamError[LocalAudioStreamError["LocalAudioStreamErrorDeviceBusy"] = 3] = "LocalAudioStreamErrorDeviceBusy";
    /* enum_localaudiostreamerror_LocalAudioStreamErrorRecordFailure */
    LocalAudioStreamError[LocalAudioStreamError["LocalAudioStreamErrorRecordFailure"] = 4] = "LocalAudioStreamErrorRecordFailure";
    /* enum_localaudiostreamerror_LocalAudioStreamErrorEncodeFailure */
    LocalAudioStreamError[LocalAudioStreamError["LocalAudioStreamErrorEncodeFailure"] = 5] = "LocalAudioStreamErrorEncodeFailure";
    /* enum_localaudiostreamerror_LocalAudioStreamErrorNoRecordingDevice */
    LocalAudioStreamError[LocalAudioStreamError["LocalAudioStreamErrorNoRecordingDevice"] = 6] = "LocalAudioStreamErrorNoRecordingDevice";
    /* enum_localaudiostreamerror_LocalAudioStreamErrorNoPlayoutDevice */
    LocalAudioStreamError[LocalAudioStreamError["LocalAudioStreamErrorNoPlayoutDevice"] = 7] = "LocalAudioStreamErrorNoPlayoutDevice";
    /* enum_localaudiostreamerror_LocalAudioStreamErrorInterrupted */
    LocalAudioStreamError[LocalAudioStreamError["LocalAudioStreamErrorInterrupted"] = 8] = "LocalAudioStreamErrorInterrupted";
    /* enum_localaudiostreamerror_LocalAudioStreamErrorRecordInvalidId */
    LocalAudioStreamError[LocalAudioStreamError["LocalAudioStreamErrorRecordInvalidId"] = 9] = "LocalAudioStreamErrorRecordInvalidId";
    /* enum_localaudiostreamerror_LocalAudioStreamErrorPlayoutInvalidId */
    LocalAudioStreamError[LocalAudioStreamError["LocalAudioStreamErrorPlayoutInvalidId"] = 10] = "LocalAudioStreamErrorPlayoutInvalidId";
})(LocalAudioStreamError = exports.LocalAudioStreamError || (exports.LocalAudioStreamError = {}));
/* enum_localvideostreamstate */
var LocalVideoStreamState;
(function (LocalVideoStreamState) {
    /* enum_localvideostreamstate_LocalVideoStreamStateStopped */
    LocalVideoStreamState[LocalVideoStreamState["LocalVideoStreamStateStopped"] = 0] = "LocalVideoStreamStateStopped";
    /* enum_localvideostreamstate_LocalVideoStreamStateCapturing */
    LocalVideoStreamState[LocalVideoStreamState["LocalVideoStreamStateCapturing"] = 1] = "LocalVideoStreamStateCapturing";
    /* enum_localvideostreamstate_LocalVideoStreamStateEncoding */
    LocalVideoStreamState[LocalVideoStreamState["LocalVideoStreamStateEncoding"] = 2] = "LocalVideoStreamStateEncoding";
    /* enum_localvideostreamstate_LocalVideoStreamStateFailed */
    LocalVideoStreamState[LocalVideoStreamState["LocalVideoStreamStateFailed"] = 3] = "LocalVideoStreamStateFailed";
})(LocalVideoStreamState = exports.LocalVideoStreamState || (exports.LocalVideoStreamState = {}));
/* enum_localvideostreamerror */
var LocalVideoStreamError;
(function (LocalVideoStreamError) {
    /* enum_localvideostreamerror_LocalVideoStreamErrorOk */
    LocalVideoStreamError[LocalVideoStreamError["LocalVideoStreamErrorOk"] = 0] = "LocalVideoStreamErrorOk";
    /* enum_localvideostreamerror_LocalVideoStreamErrorFailure */
    LocalVideoStreamError[LocalVideoStreamError["LocalVideoStreamErrorFailure"] = 1] = "LocalVideoStreamErrorFailure";
    /* enum_localvideostreamerror_LocalVideoStreamErrorDeviceNoPermission */
    LocalVideoStreamError[LocalVideoStreamError["LocalVideoStreamErrorDeviceNoPermission"] = 2] = "LocalVideoStreamErrorDeviceNoPermission";
    /* enum_localvideostreamerror_LocalVideoStreamErrorDeviceBusy */
    LocalVideoStreamError[LocalVideoStreamError["LocalVideoStreamErrorDeviceBusy"] = 3] = "LocalVideoStreamErrorDeviceBusy";
    /* enum_localvideostreamerror_LocalVideoStreamErrorCaptureFailure */
    LocalVideoStreamError[LocalVideoStreamError["LocalVideoStreamErrorCaptureFailure"] = 4] = "LocalVideoStreamErrorCaptureFailure";
    /* enum_localvideostreamerror_LocalVideoStreamErrorEncodeFailure */
    LocalVideoStreamError[LocalVideoStreamError["LocalVideoStreamErrorEncodeFailure"] = 5] = "LocalVideoStreamErrorEncodeFailure";
    /* enum_localvideostreamerror_LocalVideoStreamErrorCaptureInbackground */
    LocalVideoStreamError[LocalVideoStreamError["LocalVideoStreamErrorCaptureInbackground"] = 6] = "LocalVideoStreamErrorCaptureInbackground";
    /* enum_localvideostreamerror_LocalVideoStreamErrorCaptureMultipleForegroundApps */
    LocalVideoStreamError[LocalVideoStreamError["LocalVideoStreamErrorCaptureMultipleForegroundApps"] = 7] = "LocalVideoStreamErrorCaptureMultipleForegroundApps";
    /* enum_localvideostreamerror_LocalVideoStreamErrorDeviceNotFound */
    LocalVideoStreamError[LocalVideoStreamError["LocalVideoStreamErrorDeviceNotFound"] = 8] = "LocalVideoStreamErrorDeviceNotFound";
    /* enum_localvideostreamerror_LocalVideoStreamErrorDeviceDisconnected */
    LocalVideoStreamError[LocalVideoStreamError["LocalVideoStreamErrorDeviceDisconnected"] = 9] = "LocalVideoStreamErrorDeviceDisconnected";
    /* enum_localvideostreamerror_LocalVideoStreamErrorDeviceInvalidId */
    LocalVideoStreamError[LocalVideoStreamError["LocalVideoStreamErrorDeviceInvalidId"] = 10] = "LocalVideoStreamErrorDeviceInvalidId";
    /* enum_localvideostreamerror_LocalVideoStreamErrorDeviceSystemPressure */
    LocalVideoStreamError[LocalVideoStreamError["LocalVideoStreamErrorDeviceSystemPressure"] = 101] = "LocalVideoStreamErrorDeviceSystemPressure";
    /* enum_localvideostreamerror_LocalVideoStreamErrorScreenCaptureWindowMinimized */
    LocalVideoStreamError[LocalVideoStreamError["LocalVideoStreamErrorScreenCaptureWindowMinimized"] = 11] = "LocalVideoStreamErrorScreenCaptureWindowMinimized";
    /* enum_localvideostreamerror_LocalVideoStreamErrorScreenCaptureWindowClosed */
    LocalVideoStreamError[LocalVideoStreamError["LocalVideoStreamErrorScreenCaptureWindowClosed"] = 12] = "LocalVideoStreamErrorScreenCaptureWindowClosed";
    /* enum_localvideostreamerror_LocalVideoStreamErrorScreenCaptureWindowOccluded */
    LocalVideoStreamError[LocalVideoStreamError["LocalVideoStreamErrorScreenCaptureWindowOccluded"] = 13] = "LocalVideoStreamErrorScreenCaptureWindowOccluded";
    /* enum_localvideostreamerror_LocalVideoStreamErrorScreenCaptureWindowNotSupported */
    LocalVideoStreamError[LocalVideoStreamError["LocalVideoStreamErrorScreenCaptureWindowNotSupported"] = 20] = "LocalVideoStreamErrorScreenCaptureWindowNotSupported";
    /* enum_localvideostreamerror_LocalVideoStreamErrorScreenCaptureFailure */
    LocalVideoStreamError[LocalVideoStreamError["LocalVideoStreamErrorScreenCaptureFailure"] = 21] = "LocalVideoStreamErrorScreenCaptureFailure";
    /* enum_localvideostreamerror_LocalVideoStreamErrorScreenCaptureNoPermission */
    LocalVideoStreamError[LocalVideoStreamError["LocalVideoStreamErrorScreenCaptureNoPermission"] = 22] = "LocalVideoStreamErrorScreenCaptureNoPermission";
    /* enum_localvideostreamerror_LocalVideoStreamErrorScreenCapturePaused */
    LocalVideoStreamError[LocalVideoStreamError["LocalVideoStreamErrorScreenCapturePaused"] = 23] = "LocalVideoStreamErrorScreenCapturePaused";
    /* enum_localvideostreamerror_LocalVideoStreamErrorScreenCaptureResumed */
    LocalVideoStreamError[LocalVideoStreamError["LocalVideoStreamErrorScreenCaptureResumed"] = 24] = "LocalVideoStreamErrorScreenCaptureResumed";
    /* enum_localvideostreamerror_LocalVideoStreamErrorScreenCaptureWindowHidden */
    LocalVideoStreamError[LocalVideoStreamError["LocalVideoStreamErrorScreenCaptureWindowHidden"] = 25] = "LocalVideoStreamErrorScreenCaptureWindowHidden";
    /* enum_localvideostreamerror_LocalVideoStreamErrorScreenCaptureWindowRecoverFromHidden */
    LocalVideoStreamError[LocalVideoStreamError["LocalVideoStreamErrorScreenCaptureWindowRecoverFromHidden"] = 26] = "LocalVideoStreamErrorScreenCaptureWindowRecoverFromHidden";
    /* enum_localvideostreamerror_LocalVideoStreamErrorScreenCaptureWindowRecoverFromMinimized */
    LocalVideoStreamError[LocalVideoStreamError["LocalVideoStreamErrorScreenCaptureWindowRecoverFromMinimized"] = 27] = "LocalVideoStreamErrorScreenCaptureWindowRecoverFromMinimized";
})(LocalVideoStreamError = exports.LocalVideoStreamError || (exports.LocalVideoStreamError = {}));
/* enum_remoteaudiostate */
var RemoteAudioState;
(function (RemoteAudioState) {
    /* enum_remoteaudiostate_RemoteAudioStateStopped */
    RemoteAudioState[RemoteAudioState["RemoteAudioStateStopped"] = 0] = "RemoteAudioStateStopped";
    /* enum_remoteaudiostate_RemoteAudioStateStarting */
    RemoteAudioState[RemoteAudioState["RemoteAudioStateStarting"] = 1] = "RemoteAudioStateStarting";
    /* enum_remoteaudiostate_RemoteAudioStateDecoding */
    RemoteAudioState[RemoteAudioState["RemoteAudioStateDecoding"] = 2] = "RemoteAudioStateDecoding";
    /* enum_remoteaudiostate_RemoteAudioStateFrozen */
    RemoteAudioState[RemoteAudioState["RemoteAudioStateFrozen"] = 3] = "RemoteAudioStateFrozen";
    /* enum_remoteaudiostate_RemoteAudioStateFailed */
    RemoteAudioState[RemoteAudioState["RemoteAudioStateFailed"] = 4] = "RemoteAudioStateFailed";
})(RemoteAudioState = exports.RemoteAudioState || (exports.RemoteAudioState = {}));
/* enum_remoteaudiostatereason */
var RemoteAudioStateReason;
(function (RemoteAudioStateReason) {
    /* enum_remoteaudiostatereason_RemoteAudioReasonInternal */
    RemoteAudioStateReason[RemoteAudioStateReason["RemoteAudioReasonInternal"] = 0] = "RemoteAudioReasonInternal";
    /* enum_remoteaudiostatereason_RemoteAudioReasonNetworkCongestion */
    RemoteAudioStateReason[RemoteAudioStateReason["RemoteAudioReasonNetworkCongestion"] = 1] = "RemoteAudioReasonNetworkCongestion";
    /* enum_remoteaudiostatereason_RemoteAudioReasonNetworkRecovery */
    RemoteAudioStateReason[RemoteAudioStateReason["RemoteAudioReasonNetworkRecovery"] = 2] = "RemoteAudioReasonNetworkRecovery";
    /* enum_remoteaudiostatereason_RemoteAudioReasonLocalMuted */
    RemoteAudioStateReason[RemoteAudioStateReason["RemoteAudioReasonLocalMuted"] = 3] = "RemoteAudioReasonLocalMuted";
    /* enum_remoteaudiostatereason_RemoteAudioReasonLocalUnmuted */
    RemoteAudioStateReason[RemoteAudioStateReason["RemoteAudioReasonLocalUnmuted"] = 4] = "RemoteAudioReasonLocalUnmuted";
    /* enum_remoteaudiostatereason_RemoteAudioReasonRemoteMuted */
    RemoteAudioStateReason[RemoteAudioStateReason["RemoteAudioReasonRemoteMuted"] = 5] = "RemoteAudioReasonRemoteMuted";
    /* enum_remoteaudiostatereason_RemoteAudioReasonRemoteUnmuted */
    RemoteAudioStateReason[RemoteAudioStateReason["RemoteAudioReasonRemoteUnmuted"] = 6] = "RemoteAudioReasonRemoteUnmuted";
    /* enum_remoteaudiostatereason_RemoteAudioReasonRemoteOffline */
    RemoteAudioStateReason[RemoteAudioStateReason["RemoteAudioReasonRemoteOffline"] = 7] = "RemoteAudioReasonRemoteOffline";
})(RemoteAudioStateReason = exports.RemoteAudioStateReason || (exports.RemoteAudioStateReason = {}));
/* enum_remotevideostate */
var RemoteVideoState;
(function (RemoteVideoState) {
    /* enum_remotevideostate_RemoteVideoStateStopped */
    RemoteVideoState[RemoteVideoState["RemoteVideoStateStopped"] = 0] = "RemoteVideoStateStopped";
    /* enum_remotevideostate_RemoteVideoStateStarting */
    RemoteVideoState[RemoteVideoState["RemoteVideoStateStarting"] = 1] = "RemoteVideoStateStarting";
    /* enum_remotevideostate_RemoteVideoStateDecoding */
    RemoteVideoState[RemoteVideoState["RemoteVideoStateDecoding"] = 2] = "RemoteVideoStateDecoding";
    /* enum_remotevideostate_RemoteVideoStateFrozen */
    RemoteVideoState[RemoteVideoState["RemoteVideoStateFrozen"] = 3] = "RemoteVideoStateFrozen";
    /* enum_remotevideostate_RemoteVideoStateFailed */
    RemoteVideoState[RemoteVideoState["RemoteVideoStateFailed"] = 4] = "RemoteVideoStateFailed";
})(RemoteVideoState = exports.RemoteVideoState || (exports.RemoteVideoState = {}));
/* enum_remotevideostatereason */
var RemoteVideoStateReason;
(function (RemoteVideoStateReason) {
    /* enum_remotevideostatereason_RemoteVideoStateReasonInternal */
    RemoteVideoStateReason[RemoteVideoStateReason["RemoteVideoStateReasonInternal"] = 0] = "RemoteVideoStateReasonInternal";
    /* enum_remotevideostatereason_RemoteVideoStateReasonNetworkCongestion */
    RemoteVideoStateReason[RemoteVideoStateReason["RemoteVideoStateReasonNetworkCongestion"] = 1] = "RemoteVideoStateReasonNetworkCongestion";
    /* enum_remotevideostatereason_RemoteVideoStateReasonNetworkRecovery */
    RemoteVideoStateReason[RemoteVideoStateReason["RemoteVideoStateReasonNetworkRecovery"] = 2] = "RemoteVideoStateReasonNetworkRecovery";
    /* enum_remotevideostatereason_RemoteVideoStateReasonLocalMuted */
    RemoteVideoStateReason[RemoteVideoStateReason["RemoteVideoStateReasonLocalMuted"] = 3] = "RemoteVideoStateReasonLocalMuted";
    /* enum_remotevideostatereason_RemoteVideoStateReasonLocalUnmuted */
    RemoteVideoStateReason[RemoteVideoStateReason["RemoteVideoStateReasonLocalUnmuted"] = 4] = "RemoteVideoStateReasonLocalUnmuted";
    /* enum_remotevideostatereason_RemoteVideoStateReasonRemoteMuted */
    RemoteVideoStateReason[RemoteVideoStateReason["RemoteVideoStateReasonRemoteMuted"] = 5] = "RemoteVideoStateReasonRemoteMuted";
    /* enum_remotevideostatereason_RemoteVideoStateReasonRemoteUnmuted */
    RemoteVideoStateReason[RemoteVideoStateReason["RemoteVideoStateReasonRemoteUnmuted"] = 6] = "RemoteVideoStateReasonRemoteUnmuted";
    /* enum_remotevideostatereason_RemoteVideoStateReasonRemoteOffline */
    RemoteVideoStateReason[RemoteVideoStateReason["RemoteVideoStateReasonRemoteOffline"] = 7] = "RemoteVideoStateReasonRemoteOffline";
    /* enum_remotevideostatereason_RemoteVideoStateReasonAudioFallback */
    RemoteVideoStateReason[RemoteVideoStateReason["RemoteVideoStateReasonAudioFallback"] = 8] = "RemoteVideoStateReasonAudioFallback";
    /* enum_remotevideostatereason_RemoteVideoStateReasonAudioFallbackRecovery */
    RemoteVideoStateReason[RemoteVideoStateReason["RemoteVideoStateReasonAudioFallbackRecovery"] = 9] = "RemoteVideoStateReasonAudioFallbackRecovery";
    /* enum_remotevideostatereason_RemoteVideoStateReasonVideoStreamTypeChangeToLow */
    RemoteVideoStateReason[RemoteVideoStateReason["RemoteVideoStateReasonVideoStreamTypeChangeToLow"] = 10] = "RemoteVideoStateReasonVideoStreamTypeChangeToLow";
    /* enum_remotevideostatereason_RemoteVideoStateReasonVideoStreamTypeChangeToHigh */
    RemoteVideoStateReason[RemoteVideoStateReason["RemoteVideoStateReasonVideoStreamTypeChangeToHigh"] = 11] = "RemoteVideoStateReasonVideoStreamTypeChangeToHigh";
    /* enum_remotevideostatereason_RemoteVideoStateReasonSdkInBackground */
    RemoteVideoStateReason[RemoteVideoStateReason["RemoteVideoStateReasonSdkInBackground"] = 12] = "RemoteVideoStateReasonSdkInBackground";
    /* enum_remotevideostatereason_RemoteVideoStateReasonCodecNotSupport */
    RemoteVideoStateReason[RemoteVideoStateReason["RemoteVideoStateReasonCodecNotSupport"] = 13] = "RemoteVideoStateReasonCodecNotSupport";
})(RemoteVideoStateReason = exports.RemoteVideoStateReason || (exports.RemoteVideoStateReason = {}));
/* enum_remoteuserstate */
var RemoteUserState;
(function (RemoteUserState) {
    /* enum_remoteuserstate_UserStateMuteAudio */
    RemoteUserState[RemoteUserState["UserStateMuteAudio"] = 1] = "UserStateMuteAudio";
    /* enum_remoteuserstate_UserStateMuteVideo */
    RemoteUserState[RemoteUserState["UserStateMuteVideo"] = 2] = "UserStateMuteVideo";
    /* enum_remoteuserstate_UserStateEnableVideo */
    RemoteUserState[RemoteUserState["UserStateEnableVideo"] = 16] = "UserStateEnableVideo";
    /* enum_remoteuserstate_UserStateEnableLocalVideo */
    RemoteUserState[RemoteUserState["UserStateEnableLocalVideo"] = 256] = "UserStateEnableLocalVideo";
})(RemoteUserState = exports.RemoteUserState || (exports.RemoteUserState = {}));
/* class_videotrackinfo */
var VideoTrackInfo = /** @class */ (function () {
    function VideoTrackInfo() {
    }
    return VideoTrackInfo;
}());
exports.VideoTrackInfo = VideoTrackInfo;
/* enum_remotevideodownscalelevel */
var RemoteVideoDownscaleLevel;
(function (RemoteVideoDownscaleLevel) {
    /* enum_remotevideodownscalelevel_RemoteVideoDownscaleLevelNone */
    RemoteVideoDownscaleLevel[RemoteVideoDownscaleLevel["RemoteVideoDownscaleLevelNone"] = 0] = "RemoteVideoDownscaleLevelNone";
    /* enum_remotevideodownscalelevel_RemoteVideoDownscaleLevel1 */
    RemoteVideoDownscaleLevel[RemoteVideoDownscaleLevel["RemoteVideoDownscaleLevel1"] = 1] = "RemoteVideoDownscaleLevel1";
    /* enum_remotevideodownscalelevel_RemoteVideoDownscaleLevel2 */
    RemoteVideoDownscaleLevel[RemoteVideoDownscaleLevel["RemoteVideoDownscaleLevel2"] = 2] = "RemoteVideoDownscaleLevel2";
    /* enum_remotevideodownscalelevel_RemoteVideoDownscaleLevel3 */
    RemoteVideoDownscaleLevel[RemoteVideoDownscaleLevel["RemoteVideoDownscaleLevel3"] = 3] = "RemoteVideoDownscaleLevel3";
    /* enum_remotevideodownscalelevel_RemoteVideoDownscaleLevel4 */
    RemoteVideoDownscaleLevel[RemoteVideoDownscaleLevel["RemoteVideoDownscaleLevel4"] = 4] = "RemoteVideoDownscaleLevel4";
})(RemoteVideoDownscaleLevel = exports.RemoteVideoDownscaleLevel || (exports.RemoteVideoDownscaleLevel = {}));
/* class_audiovolumeinfo */
var AudioVolumeInfo = /** @class */ (function () {
    function AudioVolumeInfo() {
    }
    return AudioVolumeInfo;
}());
exports.AudioVolumeInfo = AudioVolumeInfo;
/* class_deviceinfo */
var DeviceInfo = /** @class */ (function () {
    function DeviceInfo() {
    }
    return DeviceInfo;
}());
exports.DeviceInfo = DeviceInfo;
/* class_packet */
var Packet = /** @class */ (function () {
    function Packet() {
    }
    return Packet;
}());
exports.Packet = Packet;
/* enum_audiosampleratetype */
var AudioSampleRateType;
(function (AudioSampleRateType) {
    /* enum_audiosampleratetype_AudioSampleRate32000 */
    AudioSampleRateType[AudioSampleRateType["AudioSampleRate32000"] = 32000] = "AudioSampleRate32000";
    /* enum_audiosampleratetype_AudioSampleRate44100 */
    AudioSampleRateType[AudioSampleRateType["AudioSampleRate44100"] = 44100] = "AudioSampleRate44100";
    /* enum_audiosampleratetype_AudioSampleRate48000 */
    AudioSampleRateType[AudioSampleRateType["AudioSampleRate48000"] = 48000] = "AudioSampleRate48000";
})(AudioSampleRateType = exports.AudioSampleRateType || (exports.AudioSampleRateType = {}));
/* enum_videocodectypeforstream */
var VideoCodecTypeForStream;
(function (VideoCodecTypeForStream) {
    /* enum_videocodectypeforstream_VideoCodecH264ForStream */
    VideoCodecTypeForStream[VideoCodecTypeForStream["VideoCodecH264ForStream"] = 1] = "VideoCodecH264ForStream";
    /* enum_videocodectypeforstream_VideoCodecH265ForStream */
    VideoCodecTypeForStream[VideoCodecTypeForStream["VideoCodecH265ForStream"] = 2] = "VideoCodecH265ForStream";
})(VideoCodecTypeForStream = exports.VideoCodecTypeForStream || (exports.VideoCodecTypeForStream = {}));
/* enum_videocodecprofiletype */
var VideoCodecProfileType;
(function (VideoCodecProfileType) {
    /* enum_videocodecprofiletype_VideoCodecProfileBaseline */
    VideoCodecProfileType[VideoCodecProfileType["VideoCodecProfileBaseline"] = 66] = "VideoCodecProfileBaseline";
    /* enum_videocodecprofiletype_VideoCodecProfileMain */
    VideoCodecProfileType[VideoCodecProfileType["VideoCodecProfileMain"] = 77] = "VideoCodecProfileMain";
    /* enum_videocodecprofiletype_VideoCodecProfileHigh */
    VideoCodecProfileType[VideoCodecProfileType["VideoCodecProfileHigh"] = 100] = "VideoCodecProfileHigh";
})(VideoCodecProfileType = exports.VideoCodecProfileType || (exports.VideoCodecProfileType = {}));
/* enum_audiocodecprofiletype */
var AudioCodecProfileType;
(function (AudioCodecProfileType) {
    /* enum_audiocodecprofiletype_AudioCodecProfileLcAac */
    AudioCodecProfileType[AudioCodecProfileType["AudioCodecProfileLcAac"] = 0] = "AudioCodecProfileLcAac";
    /* enum_audiocodecprofiletype_AudioCodecProfileHeAac */
    AudioCodecProfileType[AudioCodecProfileType["AudioCodecProfileHeAac"] = 1] = "AudioCodecProfileHeAac";
    /* enum_audiocodecprofiletype_AudioCodecProfileHeAacV2 */
    AudioCodecProfileType[AudioCodecProfileType["AudioCodecProfileHeAacV2"] = 2] = "AudioCodecProfileHeAacV2";
})(AudioCodecProfileType = exports.AudioCodecProfileType || (exports.AudioCodecProfileType = {}));
/* class_localaudiostats */
var LocalAudioStats = /** @class */ (function () {
    function LocalAudioStats() {
    }
    return LocalAudioStats;
}());
exports.LocalAudioStats = LocalAudioStats;
/* enum_rtmpstreampublishstate */
var RtmpStreamPublishState;
(function (RtmpStreamPublishState) {
    /* enum_rtmpstreampublishstate_RtmpStreamPublishStateIdle */
    RtmpStreamPublishState[RtmpStreamPublishState["RtmpStreamPublishStateIdle"] = 0] = "RtmpStreamPublishStateIdle";
    /* enum_rtmpstreampublishstate_RtmpStreamPublishStateConnecting */
    RtmpStreamPublishState[RtmpStreamPublishState["RtmpStreamPublishStateConnecting"] = 1] = "RtmpStreamPublishStateConnecting";
    /* enum_rtmpstreampublishstate_RtmpStreamPublishStateRunning */
    RtmpStreamPublishState[RtmpStreamPublishState["RtmpStreamPublishStateRunning"] = 2] = "RtmpStreamPublishStateRunning";
    /* enum_rtmpstreampublishstate_RtmpStreamPublishStateRecovering */
    RtmpStreamPublishState[RtmpStreamPublishState["RtmpStreamPublishStateRecovering"] = 3] = "RtmpStreamPublishStateRecovering";
    /* enum_rtmpstreampublishstate_RtmpStreamPublishStateFailure */
    RtmpStreamPublishState[RtmpStreamPublishState["RtmpStreamPublishStateFailure"] = 4] = "RtmpStreamPublishStateFailure";
    /* enum_rtmpstreampublishstate_RtmpStreamPublishStateDisconnecting */
    RtmpStreamPublishState[RtmpStreamPublishState["RtmpStreamPublishStateDisconnecting"] = 5] = "RtmpStreamPublishStateDisconnecting";
})(RtmpStreamPublishState = exports.RtmpStreamPublishState || (exports.RtmpStreamPublishState = {}));
/* enum_rtmpstreampublisherrortype */
var RtmpStreamPublishErrorType;
(function (RtmpStreamPublishErrorType) {
    /* enum_rtmpstreampublisherrortype_RtmpStreamPublishErrorOk */
    RtmpStreamPublishErrorType[RtmpStreamPublishErrorType["RtmpStreamPublishErrorOk"] = 0] = "RtmpStreamPublishErrorOk";
    /* enum_rtmpstreampublisherrortype_RtmpStreamPublishErrorInvalidArgument */
    RtmpStreamPublishErrorType[RtmpStreamPublishErrorType["RtmpStreamPublishErrorInvalidArgument"] = 1] = "RtmpStreamPublishErrorInvalidArgument";
    /* enum_rtmpstreampublisherrortype_RtmpStreamPublishErrorEncryptedStreamNotAllowed */
    RtmpStreamPublishErrorType[RtmpStreamPublishErrorType["RtmpStreamPublishErrorEncryptedStreamNotAllowed"] = 2] = "RtmpStreamPublishErrorEncryptedStreamNotAllowed";
    /* enum_rtmpstreampublisherrortype_RtmpStreamPublishErrorConnectionTimeout */
    RtmpStreamPublishErrorType[RtmpStreamPublishErrorType["RtmpStreamPublishErrorConnectionTimeout"] = 3] = "RtmpStreamPublishErrorConnectionTimeout";
    /* enum_rtmpstreampublisherrortype_RtmpStreamPublishErrorInternalServerError */
    RtmpStreamPublishErrorType[RtmpStreamPublishErrorType["RtmpStreamPublishErrorInternalServerError"] = 4] = "RtmpStreamPublishErrorInternalServerError";
    /* enum_rtmpstreampublisherrortype_RtmpStreamPublishErrorRtmpServerError */
    RtmpStreamPublishErrorType[RtmpStreamPublishErrorType["RtmpStreamPublishErrorRtmpServerError"] = 5] = "RtmpStreamPublishErrorRtmpServerError";
    /* enum_rtmpstreampublisherrortype_RtmpStreamPublishErrorTooOften */
    RtmpStreamPublishErrorType[RtmpStreamPublishErrorType["RtmpStreamPublishErrorTooOften"] = 6] = "RtmpStreamPublishErrorTooOften";
    /* enum_rtmpstreampublisherrortype_RtmpStreamPublishErrorReachLimit */
    RtmpStreamPublishErrorType[RtmpStreamPublishErrorType["RtmpStreamPublishErrorReachLimit"] = 7] = "RtmpStreamPublishErrorReachLimit";
    /* enum_rtmpstreampublisherrortype_RtmpStreamPublishErrorNotAuthorized */
    RtmpStreamPublishErrorType[RtmpStreamPublishErrorType["RtmpStreamPublishErrorNotAuthorized"] = 8] = "RtmpStreamPublishErrorNotAuthorized";
    /* enum_rtmpstreampublisherrortype_RtmpStreamPublishErrorStreamNotFound */
    RtmpStreamPublishErrorType[RtmpStreamPublishErrorType["RtmpStreamPublishErrorStreamNotFound"] = 9] = "RtmpStreamPublishErrorStreamNotFound";
    /* enum_rtmpstreampublisherrortype_RtmpStreamPublishErrorFormatNotSupported */
    RtmpStreamPublishErrorType[RtmpStreamPublishErrorType["RtmpStreamPublishErrorFormatNotSupported"] = 10] = "RtmpStreamPublishErrorFormatNotSupported";
    /* enum_rtmpstreampublisherrortype_RtmpStreamPublishErrorNotBroadcaster */
    RtmpStreamPublishErrorType[RtmpStreamPublishErrorType["RtmpStreamPublishErrorNotBroadcaster"] = 11] = "RtmpStreamPublishErrorNotBroadcaster";
    /* enum_rtmpstreampublisherrortype_RtmpStreamPublishErrorTranscodingNoMixStream */
    RtmpStreamPublishErrorType[RtmpStreamPublishErrorType["RtmpStreamPublishErrorTranscodingNoMixStream"] = 13] = "RtmpStreamPublishErrorTranscodingNoMixStream";
    /* enum_rtmpstreampublisherrortype_RtmpStreamPublishErrorNetDown */
    RtmpStreamPublishErrorType[RtmpStreamPublishErrorType["RtmpStreamPublishErrorNetDown"] = 14] = "RtmpStreamPublishErrorNetDown";
    /* enum_rtmpstreampublisherrortype_RtmpStreamPublishErrorInvalidAppid */
    RtmpStreamPublishErrorType[RtmpStreamPublishErrorType["RtmpStreamPublishErrorInvalidAppid"] = 15] = "RtmpStreamPublishErrorInvalidAppid";
    /* enum_rtmpstreampublisherrortype_RtmpStreamPublishErrorInvalidPrivilege */
    RtmpStreamPublishErrorType[RtmpStreamPublishErrorType["RtmpStreamPublishErrorInvalidPrivilege"] = 16] = "RtmpStreamPublishErrorInvalidPrivilege";
    /* enum_rtmpstreampublisherrortype_RtmpStreamUnpublishErrorOk */
    RtmpStreamPublishErrorType[RtmpStreamPublishErrorType["RtmpStreamUnpublishErrorOk"] = 100] = "RtmpStreamUnpublishErrorOk";
})(RtmpStreamPublishErrorType = exports.RtmpStreamPublishErrorType || (exports.RtmpStreamPublishErrorType = {}));
/* enum_rtmpstreamingevent */
var RtmpStreamingEvent;
(function (RtmpStreamingEvent) {
    /* enum_rtmpstreamingevent_RtmpStreamingEventFailedLoadImage */
    RtmpStreamingEvent[RtmpStreamingEvent["RtmpStreamingEventFailedLoadImage"] = 1] = "RtmpStreamingEventFailedLoadImage";
    /* enum_rtmpstreamingevent_RtmpStreamingEventUrlAlreadyInUse */
    RtmpStreamingEvent[RtmpStreamingEvent["RtmpStreamingEventUrlAlreadyInUse"] = 2] = "RtmpStreamingEventUrlAlreadyInUse";
    /* enum_rtmpstreamingevent_RtmpStreamingEventAdvancedFeatureNotSupport */
    RtmpStreamingEvent[RtmpStreamingEvent["RtmpStreamingEventAdvancedFeatureNotSupport"] = 3] = "RtmpStreamingEventAdvancedFeatureNotSupport";
    /* enum_rtmpstreamingevent_RtmpStreamingEventRequestTooOften */
    RtmpStreamingEvent[RtmpStreamingEvent["RtmpStreamingEventRequestTooOften"] = 4] = "RtmpStreamingEventRequestTooOften";
})(RtmpStreamingEvent = exports.RtmpStreamingEvent || (exports.RtmpStreamingEvent = {}));
/* class_rtcimage */
var RtcImage = /** @class */ (function () {
    function RtcImage() {
    }
    return RtcImage;
}());
exports.RtcImage = RtcImage;
/* class_livestreamadvancedfeature */
var LiveStreamAdvancedFeature = /** @class */ (function () {
    function LiveStreamAdvancedFeature() {
    }
    return LiveStreamAdvancedFeature;
}());
exports.LiveStreamAdvancedFeature = LiveStreamAdvancedFeature;
/* enum_connectionstatetype */
var ConnectionStateType;
(function (ConnectionStateType) {
    /* enum_connectionstatetype_ConnectionStateDisconnected */
    ConnectionStateType[ConnectionStateType["ConnectionStateDisconnected"] = 1] = "ConnectionStateDisconnected";
    /* enum_connectionstatetype_ConnectionStateConnecting */
    ConnectionStateType[ConnectionStateType["ConnectionStateConnecting"] = 2] = "ConnectionStateConnecting";
    /* enum_connectionstatetype_ConnectionStateConnected */
    ConnectionStateType[ConnectionStateType["ConnectionStateConnected"] = 3] = "ConnectionStateConnected";
    /* enum_connectionstatetype_ConnectionStateReconnecting */
    ConnectionStateType[ConnectionStateType["ConnectionStateReconnecting"] = 4] = "ConnectionStateReconnecting";
    /* enum_connectionstatetype_ConnectionStateFailed */
    ConnectionStateType[ConnectionStateType["ConnectionStateFailed"] = 5] = "ConnectionStateFailed";
})(ConnectionStateType = exports.ConnectionStateType || (exports.ConnectionStateType = {}));
/* class_transcodinguser */
var TranscodingUser = /** @class */ (function () {
    function TranscodingUser() {
    }
    return TranscodingUser;
}());
exports.TranscodingUser = TranscodingUser;
/* class_livetranscoding */
var LiveTranscoding = /** @class */ (function () {
    function LiveTranscoding() {
    }
    return LiveTranscoding;
}());
exports.LiveTranscoding = LiveTranscoding;
/* class_transcodingvideostream */
var TranscodingVideoStream = /** @class */ (function () {
    function TranscodingVideoStream() {
    }
    return TranscodingVideoStream;
}());
exports.TranscodingVideoStream = TranscodingVideoStream;
/* class_localtranscoderconfiguration */
var LocalTranscoderConfiguration = /** @class */ (function () {
    function LocalTranscoderConfiguration() {
    }
    return LocalTranscoderConfiguration;
}());
exports.LocalTranscoderConfiguration = LocalTranscoderConfiguration;
/* enum_videotranscodererror */
var VideoTranscoderError;
(function (VideoTranscoderError) {
    /* enum_videotranscodererror_VtErrOk */
    VideoTranscoderError[VideoTranscoderError["VtErrOk"] = 0] = "VtErrOk";
    /* enum_videotranscodererror_VtErrVideoSourceNotReady */
    VideoTranscoderError[VideoTranscoderError["VtErrVideoSourceNotReady"] = 1] = "VtErrVideoSourceNotReady";
    /* enum_videotranscodererror_VtErrInvalidVideoSourceType */
    VideoTranscoderError[VideoTranscoderError["VtErrInvalidVideoSourceType"] = 2] = "VtErrInvalidVideoSourceType";
    /* enum_videotranscodererror_VtErrInvalidImagePath */
    VideoTranscoderError[VideoTranscoderError["VtErrInvalidImagePath"] = 3] = "VtErrInvalidImagePath";
    /* enum_videotranscodererror_VtErrUnsupportImageFormat */
    VideoTranscoderError[VideoTranscoderError["VtErrUnsupportImageFormat"] = 4] = "VtErrUnsupportImageFormat";
    /* enum_videotranscodererror_VtErrInvalidLayout */
    VideoTranscoderError[VideoTranscoderError["VtErrInvalidLayout"] = 5] = "VtErrInvalidLayout";
    /* enum_videotranscodererror_VtErrInternal */
    VideoTranscoderError[VideoTranscoderError["VtErrInternal"] = 20] = "VtErrInternal";
})(VideoTranscoderError = exports.VideoTranscoderError || (exports.VideoTranscoderError = {}));
/* class_lastmileprobeconfig */
var LastmileProbeConfig = /** @class */ (function () {
    function LastmileProbeConfig() {
    }
    return LastmileProbeConfig;
}());
exports.LastmileProbeConfig = LastmileProbeConfig;
/* enum_lastmileproberesultstate */
var LastmileProbeResultState;
(function (LastmileProbeResultState) {
    /* enum_lastmileproberesultstate_LastmileProbeResultComplete */
    LastmileProbeResultState[LastmileProbeResultState["LastmileProbeResultComplete"] = 1] = "LastmileProbeResultComplete";
    /* enum_lastmileproberesultstate_LastmileProbeResultIncompleteNoBwe */
    LastmileProbeResultState[LastmileProbeResultState["LastmileProbeResultIncompleteNoBwe"] = 2] = "LastmileProbeResultIncompleteNoBwe";
    /* enum_lastmileproberesultstate_LastmileProbeResultUnavailable */
    LastmileProbeResultState[LastmileProbeResultState["LastmileProbeResultUnavailable"] = 3] = "LastmileProbeResultUnavailable";
})(LastmileProbeResultState = exports.LastmileProbeResultState || (exports.LastmileProbeResultState = {}));
/* class_lastmileprobeonewayresult */
var LastmileProbeOneWayResult = /** @class */ (function () {
    function LastmileProbeOneWayResult() {
    }
    return LastmileProbeOneWayResult;
}());
exports.LastmileProbeOneWayResult = LastmileProbeOneWayResult;
/* class_lastmileproberesult */
var LastmileProbeResult = /** @class */ (function () {
    function LastmileProbeResult() {
    }
    return LastmileProbeResult;
}());
exports.LastmileProbeResult = LastmileProbeResult;
/* enum_connectionchangedreasontype */
var ConnectionChangedReasonType;
(function (ConnectionChangedReasonType) {
    /* enum_connectionchangedreasontype_ConnectionChangedConnecting */
    ConnectionChangedReasonType[ConnectionChangedReasonType["ConnectionChangedConnecting"] = 0] = "ConnectionChangedConnecting";
    /* enum_connectionchangedreasontype_ConnectionChangedJoinSuccess */
    ConnectionChangedReasonType[ConnectionChangedReasonType["ConnectionChangedJoinSuccess"] = 1] = "ConnectionChangedJoinSuccess";
    /* enum_connectionchangedreasontype_ConnectionChangedInterrupted */
    ConnectionChangedReasonType[ConnectionChangedReasonType["ConnectionChangedInterrupted"] = 2] = "ConnectionChangedInterrupted";
    /* enum_connectionchangedreasontype_ConnectionChangedBannedByServer */
    ConnectionChangedReasonType[ConnectionChangedReasonType["ConnectionChangedBannedByServer"] = 3] = "ConnectionChangedBannedByServer";
    /* enum_connectionchangedreasontype_ConnectionChangedJoinFailed */
    ConnectionChangedReasonType[ConnectionChangedReasonType["ConnectionChangedJoinFailed"] = 4] = "ConnectionChangedJoinFailed";
    /* enum_connectionchangedreasontype_ConnectionChangedLeaveChannel */
    ConnectionChangedReasonType[ConnectionChangedReasonType["ConnectionChangedLeaveChannel"] = 5] = "ConnectionChangedLeaveChannel";
    /* enum_connectionchangedreasontype_ConnectionChangedInvalidAppId */
    ConnectionChangedReasonType[ConnectionChangedReasonType["ConnectionChangedInvalidAppId"] = 6] = "ConnectionChangedInvalidAppId";
    /* enum_connectionchangedreasontype_ConnectionChangedInvalidChannelName */
    ConnectionChangedReasonType[ConnectionChangedReasonType["ConnectionChangedInvalidChannelName"] = 7] = "ConnectionChangedInvalidChannelName";
    /* enum_connectionchangedreasontype_ConnectionChangedInvalidToken */
    ConnectionChangedReasonType[ConnectionChangedReasonType["ConnectionChangedInvalidToken"] = 8] = "ConnectionChangedInvalidToken";
    /* enum_connectionchangedreasontype_ConnectionChangedTokenExpired */
    ConnectionChangedReasonType[ConnectionChangedReasonType["ConnectionChangedTokenExpired"] = 9] = "ConnectionChangedTokenExpired";
    /* enum_connectionchangedreasontype_ConnectionChangedRejectedByServer */
    ConnectionChangedReasonType[ConnectionChangedReasonType["ConnectionChangedRejectedByServer"] = 10] = "ConnectionChangedRejectedByServer";
    /* enum_connectionchangedreasontype_ConnectionChangedSettingProxyServer */
    ConnectionChangedReasonType[ConnectionChangedReasonType["ConnectionChangedSettingProxyServer"] = 11] = "ConnectionChangedSettingProxyServer";
    /* enum_connectionchangedreasontype_ConnectionChangedRenewToken */
    ConnectionChangedReasonType[ConnectionChangedReasonType["ConnectionChangedRenewToken"] = 12] = "ConnectionChangedRenewToken";
    /* enum_connectionchangedreasontype_ConnectionChangedClientIpAddressChanged */
    ConnectionChangedReasonType[ConnectionChangedReasonType["ConnectionChangedClientIpAddressChanged"] = 13] = "ConnectionChangedClientIpAddressChanged";
    /* enum_connectionchangedreasontype_ConnectionChangedKeepAliveTimeout */
    ConnectionChangedReasonType[ConnectionChangedReasonType["ConnectionChangedKeepAliveTimeout"] = 14] = "ConnectionChangedKeepAliveTimeout";
    /* enum_connectionchangedreasontype_ConnectionChangedRejoinSuccess */
    ConnectionChangedReasonType[ConnectionChangedReasonType["ConnectionChangedRejoinSuccess"] = 15] = "ConnectionChangedRejoinSuccess";
    /* enum_connectionchangedreasontype_ConnectionChangedLost */
    ConnectionChangedReasonType[ConnectionChangedReasonType["ConnectionChangedLost"] = 16] = "ConnectionChangedLost";
    /* enum_connectionchangedreasontype_ConnectionChangedEchoTest */
    ConnectionChangedReasonType[ConnectionChangedReasonType["ConnectionChangedEchoTest"] = 17] = "ConnectionChangedEchoTest";
    /* enum_connectionchangedreasontype_ConnectionChangedClientIpAddressChangedByUser */
    ConnectionChangedReasonType[ConnectionChangedReasonType["ConnectionChangedClientIpAddressChangedByUser"] = 18] = "ConnectionChangedClientIpAddressChangedByUser";
    /* enum_connectionchangedreasontype_ConnectionChangedSameUidLogin */
    ConnectionChangedReasonType[ConnectionChangedReasonType["ConnectionChangedSameUidLogin"] = 19] = "ConnectionChangedSameUidLogin";
    /* enum_connectionchangedreasontype_ConnectionChangedTooManyBroadcasters */
    ConnectionChangedReasonType[ConnectionChangedReasonType["ConnectionChangedTooManyBroadcasters"] = 20] = "ConnectionChangedTooManyBroadcasters";
    /* enum_connectionchangedreasontype_ConnectionChangedLicenseValidationFailure */
    ConnectionChangedReasonType[ConnectionChangedReasonType["ConnectionChangedLicenseValidationFailure"] = 21] = "ConnectionChangedLicenseValidationFailure";
    /* enum_connectionchangedreasontype_ConnectionChangedCertificationVeryfyFailure */
    ConnectionChangedReasonType[ConnectionChangedReasonType["ConnectionChangedCertificationVeryfyFailure"] = 22] = "ConnectionChangedCertificationVeryfyFailure";
})(ConnectionChangedReasonType = exports.ConnectionChangedReasonType || (exports.ConnectionChangedReasonType = {}));
/* enum_clientrolechangefailedreason */
var ClientRoleChangeFailedReason;
(function (ClientRoleChangeFailedReason) {
    /* enum_clientrolechangefailedreason_ClientRoleChangeFailedTooManyBroadcasters */
    ClientRoleChangeFailedReason[ClientRoleChangeFailedReason["ClientRoleChangeFailedTooManyBroadcasters"] = 1] = "ClientRoleChangeFailedTooManyBroadcasters";
    /* enum_clientrolechangefailedreason_ClientRoleChangeFailedNotAuthorized */
    ClientRoleChangeFailedReason[ClientRoleChangeFailedReason["ClientRoleChangeFailedNotAuthorized"] = 2] = "ClientRoleChangeFailedNotAuthorized";
    /* enum_clientrolechangefailedreason_ClientRoleChangeFailedRequestTimeOut */
    ClientRoleChangeFailedReason[ClientRoleChangeFailedReason["ClientRoleChangeFailedRequestTimeOut"] = 3] = "ClientRoleChangeFailedRequestTimeOut";
    /* enum_clientrolechangefailedreason_ClientRoleChangeFailedConnectionFailed */
    ClientRoleChangeFailedReason[ClientRoleChangeFailedReason["ClientRoleChangeFailedConnectionFailed"] = 4] = "ClientRoleChangeFailedConnectionFailed";
})(ClientRoleChangeFailedReason = exports.ClientRoleChangeFailedReason || (exports.ClientRoleChangeFailedReason = {}));
/* enum_wlaccmessagereason */
var WlaccMessageReason;
(function (WlaccMessageReason) {
    /* enum_wlaccmessagereason_WlaccMessageReasonWeakSignal */
    WlaccMessageReason[WlaccMessageReason["WlaccMessageReasonWeakSignal"] = 0] = "WlaccMessageReasonWeakSignal";
    /* enum_wlaccmessagereason_WlaccMessageReasonChannelCongestion */
    WlaccMessageReason[WlaccMessageReason["WlaccMessageReasonChannelCongestion"] = 1] = "WlaccMessageReasonChannelCongestion";
})(WlaccMessageReason = exports.WlaccMessageReason || (exports.WlaccMessageReason = {}));
/* enum_wlaccsuggestaction */
var WlaccSuggestAction;
(function (WlaccSuggestAction) {
    /* enum_wlaccsuggestaction_WlaccSuggestActionCloseToWifi */
    WlaccSuggestAction[WlaccSuggestAction["WlaccSuggestActionCloseToWifi"] = 0] = "WlaccSuggestActionCloseToWifi";
    /* enum_wlaccsuggestaction_WlaccSuggestActionConnectSsid */
    WlaccSuggestAction[WlaccSuggestAction["WlaccSuggestActionConnectSsid"] = 1] = "WlaccSuggestActionConnectSsid";
    /* enum_wlaccsuggestaction_WlaccSuggestActionCheck5g */
    WlaccSuggestAction[WlaccSuggestAction["WlaccSuggestActionCheck5g"] = 2] = "WlaccSuggestActionCheck5g";
    /* enum_wlaccsuggestaction_WlaccSuggestActionModifySsid */
    WlaccSuggestAction[WlaccSuggestAction["WlaccSuggestActionModifySsid"] = 3] = "WlaccSuggestActionModifySsid";
})(WlaccSuggestAction = exports.WlaccSuggestAction || (exports.WlaccSuggestAction = {}));
/* class_wlaccstats */
var WlAccStats = /** @class */ (function () {
    function WlAccStats() {
    }
    return WlAccStats;
}());
exports.WlAccStats = WlAccStats;
/* enum_networktype */
var NetworkType;
(function (NetworkType) {
    /* enum_networktype_NetworkTypeUnknown */
    NetworkType[NetworkType["NetworkTypeUnknown"] = -1] = "NetworkTypeUnknown";
    /* enum_networktype_NetworkTypeDisconnected */
    NetworkType[NetworkType["NetworkTypeDisconnected"] = 0] = "NetworkTypeDisconnected";
    /* enum_networktype_NetworkTypeLan */
    NetworkType[NetworkType["NetworkTypeLan"] = 1] = "NetworkTypeLan";
    /* enum_networktype_NetworkTypeWifi */
    NetworkType[NetworkType["NetworkTypeWifi"] = 2] = "NetworkTypeWifi";
    /* enum_networktype_NetworkTypeMobile2g */
    NetworkType[NetworkType["NetworkTypeMobile2g"] = 3] = "NetworkTypeMobile2g";
    /* enum_networktype_NetworkTypeMobile3g */
    NetworkType[NetworkType["NetworkTypeMobile3g"] = 4] = "NetworkTypeMobile3g";
    /* enum_networktype_NetworkTypeMobile4g */
    NetworkType[NetworkType["NetworkTypeMobile4g"] = 5] = "NetworkTypeMobile4g";
    /* enum_networktype_NetworkTypeMobile5g */
    NetworkType[NetworkType["NetworkTypeMobile5g"] = 6] = "NetworkTypeMobile5g";
})(NetworkType = exports.NetworkType || (exports.NetworkType = {}));
/* enum_videoviewsetupmode */
var VideoViewSetupMode;
(function (VideoViewSetupMode) {
    /* enum_videoviewsetupmode_VideoViewSetupReplace */
    VideoViewSetupMode[VideoViewSetupMode["VideoViewSetupReplace"] = 0] = "VideoViewSetupReplace";
    /* enum_videoviewsetupmode_VideoViewSetupAdd */
    VideoViewSetupMode[VideoViewSetupMode["VideoViewSetupAdd"] = 1] = "VideoViewSetupAdd";
    /* enum_videoviewsetupmode_VideoViewSetupRemove */
    VideoViewSetupMode[VideoViewSetupMode["VideoViewSetupRemove"] = 2] = "VideoViewSetupRemove";
})(VideoViewSetupMode = exports.VideoViewSetupMode || (exports.VideoViewSetupMode = {}));
/* class_videocanvas */
var VideoCanvas = /** @class */ (function () {
    function VideoCanvas() {
    }
    return VideoCanvas;
}());
exports.VideoCanvas = VideoCanvas;
/* enum_lighteningcontrastlevel */
var LighteningContrastLevel;
(function (LighteningContrastLevel) {
    /* enum_lighteningcontrastlevel_LighteningContrastLow */
    LighteningContrastLevel[LighteningContrastLevel["LighteningContrastLow"] = 0] = "LighteningContrastLow";
    /* enum_lighteningcontrastlevel_LighteningContrastNormal */
    LighteningContrastLevel[LighteningContrastLevel["LighteningContrastNormal"] = 1] = "LighteningContrastNormal";
    /* enum_lighteningcontrastlevel_LighteningContrastHigh */
    LighteningContrastLevel[LighteningContrastLevel["LighteningContrastHigh"] = 2] = "LighteningContrastHigh";
})(LighteningContrastLevel = exports.LighteningContrastLevel || (exports.LighteningContrastLevel = {}));
/* class_beautyoptions */
var BeautyOptions = /** @class */ (function () {
    function BeautyOptions() {
    }
    return BeautyOptions;
}());
exports.BeautyOptions = BeautyOptions;
/* enum_lowlightenhancemode */
var LowLightEnhanceMode;
(function (LowLightEnhanceMode) {
    /* enum_lowlightenhancemode_LowLightEnhanceAuto */
    LowLightEnhanceMode[LowLightEnhanceMode["LowLightEnhanceAuto"] = 0] = "LowLightEnhanceAuto";
    /* enum_lowlightenhancemode_LowLightEnhanceManual */
    LowLightEnhanceMode[LowLightEnhanceMode["LowLightEnhanceManual"] = 1] = "LowLightEnhanceManual";
})(LowLightEnhanceMode = exports.LowLightEnhanceMode || (exports.LowLightEnhanceMode = {}));
/* enum_lowlightenhancelevel */
var LowLightEnhanceLevel;
(function (LowLightEnhanceLevel) {
    /* enum_lowlightenhancelevel_LowLightEnhanceLevelHighQuality */
    LowLightEnhanceLevel[LowLightEnhanceLevel["LowLightEnhanceLevelHighQuality"] = 0] = "LowLightEnhanceLevelHighQuality";
    /* enum_lowlightenhancelevel_LowLightEnhanceLevelFast */
    LowLightEnhanceLevel[LowLightEnhanceLevel["LowLightEnhanceLevelFast"] = 1] = "LowLightEnhanceLevelFast";
})(LowLightEnhanceLevel = exports.LowLightEnhanceLevel || (exports.LowLightEnhanceLevel = {}));
/* class_lowlightenhanceoptions */
var LowlightEnhanceOptions = /** @class */ (function () {
    function LowlightEnhanceOptions() {
    }
    return LowlightEnhanceOptions;
}());
exports.LowlightEnhanceOptions = LowlightEnhanceOptions;
/* enum_videodenoisermode */
var VideoDenoiserMode;
(function (VideoDenoiserMode) {
    /* enum_videodenoisermode_VideoDenoiserAuto */
    VideoDenoiserMode[VideoDenoiserMode["VideoDenoiserAuto"] = 0] = "VideoDenoiserAuto";
    /* enum_videodenoisermode_VideoDenoiserManual */
    VideoDenoiserMode[VideoDenoiserMode["VideoDenoiserManual"] = 1] = "VideoDenoiserManual";
})(VideoDenoiserMode = exports.VideoDenoiserMode || (exports.VideoDenoiserMode = {}));
/* enum_videodenoiserlevel */
var VideoDenoiserLevel;
(function (VideoDenoiserLevel) {
    /* enum_videodenoiserlevel_VideoDenoiserLevelHighQuality */
    VideoDenoiserLevel[VideoDenoiserLevel["VideoDenoiserLevelHighQuality"] = 0] = "VideoDenoiserLevelHighQuality";
    /* enum_videodenoiserlevel_VideoDenoiserLevelFast */
    VideoDenoiserLevel[VideoDenoiserLevel["VideoDenoiserLevelFast"] = 1] = "VideoDenoiserLevelFast";
    /* enum_videodenoiserlevel_VideoDenoiserLevelStrength */
    VideoDenoiserLevel[VideoDenoiserLevel["VideoDenoiserLevelStrength"] = 2] = "VideoDenoiserLevelStrength";
})(VideoDenoiserLevel = exports.VideoDenoiserLevel || (exports.VideoDenoiserLevel = {}));
/* class_videodenoiseroptions */
var VideoDenoiserOptions = /** @class */ (function () {
    function VideoDenoiserOptions() {
    }
    return VideoDenoiserOptions;
}());
exports.VideoDenoiserOptions = VideoDenoiserOptions;
/* class_colorenhanceoptions */
var ColorEnhanceOptions = /** @class */ (function () {
    function ColorEnhanceOptions() {
    }
    return ColorEnhanceOptions;
}());
exports.ColorEnhanceOptions = ColorEnhanceOptions;
/* enum_backgroundsourcetype */
var BackgroundSourceType;
(function (BackgroundSourceType) {
    /* enum_backgroundsourcetype_BackgroundNone */
    BackgroundSourceType[BackgroundSourceType["BackgroundNone"] = 0] = "BackgroundNone";
    /* enum_backgroundsourcetype_BackgroundColor */
    BackgroundSourceType[BackgroundSourceType["BackgroundColor"] = 1] = "BackgroundColor";
    /* enum_backgroundsourcetype_BackgroundImg */
    BackgroundSourceType[BackgroundSourceType["BackgroundImg"] = 2] = "BackgroundImg";
    /* enum_backgroundsourcetype_BackgroundBlur */
    BackgroundSourceType[BackgroundSourceType["BackgroundBlur"] = 3] = "BackgroundBlur";
    /* enum_backgroundsourcetype_BackgroundVideo */
    BackgroundSourceType[BackgroundSourceType["BackgroundVideo"] = 4] = "BackgroundVideo";
})(BackgroundSourceType = exports.BackgroundSourceType || (exports.BackgroundSourceType = {}));
/* enum_backgroundblurdegree */
var BackgroundBlurDegree;
(function (BackgroundBlurDegree) {
    /* enum_backgroundblurdegree_BlurDegreeLow */
    BackgroundBlurDegree[BackgroundBlurDegree["BlurDegreeLow"] = 1] = "BlurDegreeLow";
    /* enum_backgroundblurdegree_BlurDegreeMedium */
    BackgroundBlurDegree[BackgroundBlurDegree["BlurDegreeMedium"] = 2] = "BlurDegreeMedium";
    /* enum_backgroundblurdegree_BlurDegreeHigh */
    BackgroundBlurDegree[BackgroundBlurDegree["BlurDegreeHigh"] = 3] = "BlurDegreeHigh";
})(BackgroundBlurDegree = exports.BackgroundBlurDegree || (exports.BackgroundBlurDegree = {}));
/* class_virtualbackgroundsource */
var VirtualBackgroundSource = /** @class */ (function () {
    function VirtualBackgroundSource() {
    }
    return VirtualBackgroundSource;
}());
exports.VirtualBackgroundSource = VirtualBackgroundSource;
/* enum_segmodeltype */
var SegModelType;
(function (SegModelType) {
    /* enum_segmodeltype_SegModelAi */
    SegModelType[SegModelType["SegModelAi"] = 1] = "SegModelAi";
    /* enum_segmodeltype_SegModelGreen */
    SegModelType[SegModelType["SegModelGreen"] = 2] = "SegModelGreen";
})(SegModelType = exports.SegModelType || (exports.SegModelType = {}));
/* class_segmentationproperty */
var SegmentationProperty = /** @class */ (function () {
    function SegmentationProperty() {
    }
    return SegmentationProperty;
}());
exports.SegmentationProperty = SegmentationProperty;
/* enum_audiotracktype */
var AudioTrackType;
(function (AudioTrackType) {
    /* enum_audiotracktype_AudioTrackInvalid */
    AudioTrackType[AudioTrackType["AudioTrackInvalid"] = -1] = "AudioTrackInvalid";
    /* enum_audiotracktype_AudioTrackMixable */
    AudioTrackType[AudioTrackType["AudioTrackMixable"] = 0] = "AudioTrackMixable";
    /* enum_audiotracktype_AudioTrackDirect */
    AudioTrackType[AudioTrackType["AudioTrackDirect"] = 1] = "AudioTrackDirect";
})(AudioTrackType = exports.AudioTrackType || (exports.AudioTrackType = {}));
/* class_audiotrackconfig */
var AudioTrackConfig = /** @class */ (function () {
    function AudioTrackConfig() {
    }
    return AudioTrackConfig;
}());
exports.AudioTrackConfig = AudioTrackConfig;
/* enum_voicebeautifierpreset */
var VoiceBeautifierPreset;
(function (VoiceBeautifierPreset) {
    /* enum_voicebeautifierpreset_VoiceBeautifierOff */
    VoiceBeautifierPreset[VoiceBeautifierPreset["VoiceBeautifierOff"] = 0] = "VoiceBeautifierOff";
    /* enum_voicebeautifierpreset_ChatBeautifierMagnetic */
    VoiceBeautifierPreset[VoiceBeautifierPreset["ChatBeautifierMagnetic"] = 16843008] = "ChatBeautifierMagnetic";
    /* enum_voicebeautifierpreset_ChatBeautifierFresh */
    VoiceBeautifierPreset[VoiceBeautifierPreset["ChatBeautifierFresh"] = 16843264] = "ChatBeautifierFresh";
    /* enum_voicebeautifierpreset_ChatBeautifierVitality */
    VoiceBeautifierPreset[VoiceBeautifierPreset["ChatBeautifierVitality"] = 16843520] = "ChatBeautifierVitality";
    /* enum_voicebeautifierpreset_SingingBeautifier */
    VoiceBeautifierPreset[VoiceBeautifierPreset["SingingBeautifier"] = 16908544] = "SingingBeautifier";
    /* enum_voicebeautifierpreset_TimbreTransformationVigorous */
    VoiceBeautifierPreset[VoiceBeautifierPreset["TimbreTransformationVigorous"] = 16974080] = "TimbreTransformationVigorous";
    /* enum_voicebeautifierpreset_TimbreTransformationDeep */
    VoiceBeautifierPreset[VoiceBeautifierPreset["TimbreTransformationDeep"] = 16974336] = "TimbreTransformationDeep";
    /* enum_voicebeautifierpreset_TimbreTransformationMellow */
    VoiceBeautifierPreset[VoiceBeautifierPreset["TimbreTransformationMellow"] = 16974592] = "TimbreTransformationMellow";
    /* enum_voicebeautifierpreset_TimbreTransformationFalsetto */
    VoiceBeautifierPreset[VoiceBeautifierPreset["TimbreTransformationFalsetto"] = 16974848] = "TimbreTransformationFalsetto";
    /* enum_voicebeautifierpreset_TimbreTransformationFull */
    VoiceBeautifierPreset[VoiceBeautifierPreset["TimbreTransformationFull"] = 16975104] = "TimbreTransformationFull";
    /* enum_voicebeautifierpreset_TimbreTransformationClear */
    VoiceBeautifierPreset[VoiceBeautifierPreset["TimbreTransformationClear"] = 16975360] = "TimbreTransformationClear";
    /* enum_voicebeautifierpreset_TimbreTransformationResounding */
    VoiceBeautifierPreset[VoiceBeautifierPreset["TimbreTransformationResounding"] = 16975616] = "TimbreTransformationResounding";
    /* enum_voicebeautifierpreset_TimbreTransformationRinging */
    VoiceBeautifierPreset[VoiceBeautifierPreset["TimbreTransformationRinging"] = 16975872] = "TimbreTransformationRinging";
    /* enum_voicebeautifierpreset_UltraHighQualityVoice */
    VoiceBeautifierPreset[VoiceBeautifierPreset["UltraHighQualityVoice"] = 17039616] = "UltraHighQualityVoice";
})(VoiceBeautifierPreset = exports.VoiceBeautifierPreset || (exports.VoiceBeautifierPreset = {}));
/* enum_audioeffectpreset */
var AudioEffectPreset;
(function (AudioEffectPreset) {
    /* enum_audioeffectpreset_AudioEffectOff */
    AudioEffectPreset[AudioEffectPreset["AudioEffectOff"] = 0] = "AudioEffectOff";
    /* enum_audioeffectpreset_RoomAcousticsKtv */
    AudioEffectPreset[AudioEffectPreset["RoomAcousticsKtv"] = 33620224] = "RoomAcousticsKtv";
    /* enum_audioeffectpreset_RoomAcousticsVocalConcert */
    AudioEffectPreset[AudioEffectPreset["RoomAcousticsVocalConcert"] = 33620480] = "RoomAcousticsVocalConcert";
    /* enum_audioeffectpreset_RoomAcousticsStudio */
    AudioEffectPreset[AudioEffectPreset["RoomAcousticsStudio"] = 33620736] = "RoomAcousticsStudio";
    /* enum_audioeffectpreset_RoomAcousticsPhonograph */
    AudioEffectPreset[AudioEffectPreset["RoomAcousticsPhonograph"] = 33620992] = "RoomAcousticsPhonograph";
    /* enum_audioeffectpreset_RoomAcousticsVirtualStereo */
    AudioEffectPreset[AudioEffectPreset["RoomAcousticsVirtualStereo"] = 33621248] = "RoomAcousticsVirtualStereo";
    /* enum_audioeffectpreset_RoomAcousticsSpacial */
    AudioEffectPreset[AudioEffectPreset["RoomAcousticsSpacial"] = 33621504] = "RoomAcousticsSpacial";
    /* enum_audioeffectpreset_RoomAcousticsEthereal */
    AudioEffectPreset[AudioEffectPreset["RoomAcousticsEthereal"] = 33621760] = "RoomAcousticsEthereal";
    /* enum_audioeffectpreset_RoomAcoustics3dVoice */
    AudioEffectPreset[AudioEffectPreset["RoomAcoustics3dVoice"] = 33622016] = "RoomAcoustics3dVoice";
    /* enum_audioeffectpreset_RoomAcousticsVirtualSurroundSound */
    AudioEffectPreset[AudioEffectPreset["RoomAcousticsVirtualSurroundSound"] = 33622272] = "RoomAcousticsVirtualSurroundSound";
    /* enum_audioeffectpreset_VoiceChangerEffectUncle */
    AudioEffectPreset[AudioEffectPreset["VoiceChangerEffectUncle"] = 33685760] = "VoiceChangerEffectUncle";
    /* enum_audioeffectpreset_VoiceChangerEffectOldman */
    AudioEffectPreset[AudioEffectPreset["VoiceChangerEffectOldman"] = 33686016] = "VoiceChangerEffectOldman";
    /* enum_audioeffectpreset_VoiceChangerEffectBoy */
    AudioEffectPreset[AudioEffectPreset["VoiceChangerEffectBoy"] = 33686272] = "VoiceChangerEffectBoy";
    /* enum_audioeffectpreset_VoiceChangerEffectSister */
    AudioEffectPreset[AudioEffectPreset["VoiceChangerEffectSister"] = 33686528] = "VoiceChangerEffectSister";
    /* enum_audioeffectpreset_VoiceChangerEffectGirl */
    AudioEffectPreset[AudioEffectPreset["VoiceChangerEffectGirl"] = 33686784] = "VoiceChangerEffectGirl";
    /* enum_audioeffectpreset_VoiceChangerEffectPigking */
    AudioEffectPreset[AudioEffectPreset["VoiceChangerEffectPigking"] = 33687040] = "VoiceChangerEffectPigking";
    /* enum_audioeffectpreset_VoiceChangerEffectHulk */
    AudioEffectPreset[AudioEffectPreset["VoiceChangerEffectHulk"] = 33687296] = "VoiceChangerEffectHulk";
    /* enum_audioeffectpreset_StyleTransformationRnb */
    AudioEffectPreset[AudioEffectPreset["StyleTransformationRnb"] = 33751296] = "StyleTransformationRnb";
    /* enum_audioeffectpreset_StyleTransformationPopular */
    AudioEffectPreset[AudioEffectPreset["StyleTransformationPopular"] = 33751552] = "StyleTransformationPopular";
    /* enum_audioeffectpreset_PitchCorrection */
    AudioEffectPreset[AudioEffectPreset["PitchCorrection"] = 33816832] = "PitchCorrection";
})(AudioEffectPreset = exports.AudioEffectPreset || (exports.AudioEffectPreset = {}));
/* enum_voiceconversionpreset */
var VoiceConversionPreset;
(function (VoiceConversionPreset) {
    /* enum_voiceconversionpreset_VoiceConversionOff */
    VoiceConversionPreset[VoiceConversionPreset["VoiceConversionOff"] = 0] = "VoiceConversionOff";
    /* enum_voiceconversionpreset_VoiceChangerNeutral */
    VoiceConversionPreset[VoiceConversionPreset["VoiceChangerNeutral"] = 50397440] = "VoiceChangerNeutral";
    /* enum_voiceconversionpreset_VoiceChangerSweet */
    VoiceConversionPreset[VoiceConversionPreset["VoiceChangerSweet"] = 50397696] = "VoiceChangerSweet";
    /* enum_voiceconversionpreset_VoiceChangerSolid */
    VoiceConversionPreset[VoiceConversionPreset["VoiceChangerSolid"] = 50397952] = "VoiceChangerSolid";
    /* enum_voiceconversionpreset_VoiceChangerBass */
    VoiceConversionPreset[VoiceConversionPreset["VoiceChangerBass"] = 50398208] = "VoiceChangerBass";
    /* enum_voiceconversionpreset_VoiceChangerCartoon */
    VoiceConversionPreset[VoiceConversionPreset["VoiceChangerCartoon"] = 50398464] = "VoiceChangerCartoon";
    /* enum_voiceconversionpreset_VoiceChangerChildlike */
    VoiceConversionPreset[VoiceConversionPreset["VoiceChangerChildlike"] = 50398720] = "VoiceChangerChildlike";
    /* enum_voiceconversionpreset_VoiceChangerPhoneOperator */
    VoiceConversionPreset[VoiceConversionPreset["VoiceChangerPhoneOperator"] = 50398976] = "VoiceChangerPhoneOperator";
    /* enum_voiceconversionpreset_VoiceChangerMonster */
    VoiceConversionPreset[VoiceConversionPreset["VoiceChangerMonster"] = 50399232] = "VoiceChangerMonster";
    /* enum_voiceconversionpreset_VoiceChangerTransformers */
    VoiceConversionPreset[VoiceConversionPreset["VoiceChangerTransformers"] = 50399488] = "VoiceChangerTransformers";
    /* enum_voiceconversionpreset_VoiceChangerGroot */
    VoiceConversionPreset[VoiceConversionPreset["VoiceChangerGroot"] = 50399744] = "VoiceChangerGroot";
    /* enum_voiceconversionpreset_VoiceChangerDarthVader */
    VoiceConversionPreset[VoiceConversionPreset["VoiceChangerDarthVader"] = 50400000] = "VoiceChangerDarthVader";
    /* enum_voiceconversionpreset_VoiceChangerIronLady */
    VoiceConversionPreset[VoiceConversionPreset["VoiceChangerIronLady"] = 50400256] = "VoiceChangerIronLady";
    /* enum_voiceconversionpreset_VoiceChangerShinChan */
    VoiceConversionPreset[VoiceConversionPreset["VoiceChangerShinChan"] = 50400512] = "VoiceChangerShinChan";
    /* enum_voiceconversionpreset_VoiceChangerGirlishMan */
    VoiceConversionPreset[VoiceConversionPreset["VoiceChangerGirlishMan"] = 50400768] = "VoiceChangerGirlishMan";
    /* enum_voiceconversionpreset_VoiceChangerChipmunk */
    VoiceConversionPreset[VoiceConversionPreset["VoiceChangerChipmunk"] = 50401024] = "VoiceChangerChipmunk";
})(VoiceConversionPreset = exports.VoiceConversionPreset || (exports.VoiceConversionPreset = {}));
/* enum_headphoneequalizerpreset */
var HeadphoneEqualizerPreset;
(function (HeadphoneEqualizerPreset) {
    /* enum_headphoneequalizerpreset_HeadphoneEqualizerOff */
    HeadphoneEqualizerPreset[HeadphoneEqualizerPreset["HeadphoneEqualizerOff"] = 0] = "HeadphoneEqualizerOff";
    /* enum_headphoneequalizerpreset_HeadphoneEqualizerOverear */
    HeadphoneEqualizerPreset[HeadphoneEqualizerPreset["HeadphoneEqualizerOverear"] = 67108865] = "HeadphoneEqualizerOverear";
    /* enum_headphoneequalizerpreset_HeadphoneEqualizerInear */
    HeadphoneEqualizerPreset[HeadphoneEqualizerPreset["HeadphoneEqualizerInear"] = 67108866] = "HeadphoneEqualizerInear";
})(HeadphoneEqualizerPreset = exports.HeadphoneEqualizerPreset || (exports.HeadphoneEqualizerPreset = {}));
/* class_screencaptureparameters */
var ScreenCaptureParameters = /** @class */ (function () {
    function ScreenCaptureParameters() {
    }
    return ScreenCaptureParameters;
}());
exports.ScreenCaptureParameters = ScreenCaptureParameters;
/* enum_audiorecordingqualitytype */
var AudioRecordingQualityType;
(function (AudioRecordingQualityType) {
    /* enum_audiorecordingqualitytype_AudioRecordingQualityLow */
    AudioRecordingQualityType[AudioRecordingQualityType["AudioRecordingQualityLow"] = 0] = "AudioRecordingQualityLow";
    /* enum_audiorecordingqualitytype_AudioRecordingQualityMedium */
    AudioRecordingQualityType[AudioRecordingQualityType["AudioRecordingQualityMedium"] = 1] = "AudioRecordingQualityMedium";
    /* enum_audiorecordingqualitytype_AudioRecordingQualityHigh */
    AudioRecordingQualityType[AudioRecordingQualityType["AudioRecordingQualityHigh"] = 2] = "AudioRecordingQualityHigh";
    /* enum_audiorecordingqualitytype_AudioRecordingQualityUltraHigh */
    AudioRecordingQualityType[AudioRecordingQualityType["AudioRecordingQualityUltraHigh"] = 3] = "AudioRecordingQualityUltraHigh";
})(AudioRecordingQualityType = exports.AudioRecordingQualityType || (exports.AudioRecordingQualityType = {}));
/* enum_audiofilerecordingtype */
var AudioFileRecordingType;
(function (AudioFileRecordingType) {
    /* enum_audiofilerecordingtype_AudioFileRecordingMic */
    AudioFileRecordingType[AudioFileRecordingType["AudioFileRecordingMic"] = 1] = "AudioFileRecordingMic";
    /* enum_audiofilerecordingtype_AudioFileRecordingPlayback */
    AudioFileRecordingType[AudioFileRecordingType["AudioFileRecordingPlayback"] = 2] = "AudioFileRecordingPlayback";
    /* enum_audiofilerecordingtype_AudioFileRecordingMixed */
    AudioFileRecordingType[AudioFileRecordingType["AudioFileRecordingMixed"] = 3] = "AudioFileRecordingMixed";
})(AudioFileRecordingType = exports.AudioFileRecordingType || (exports.AudioFileRecordingType = {}));
/* enum_audioencodedframeobserverposition */
var AudioEncodedFrameObserverPosition;
(function (AudioEncodedFrameObserverPosition) {
    /* enum_audioencodedframeobserverposition_AudioEncodedFrameObserverPositionRecord */
    AudioEncodedFrameObserverPosition[AudioEncodedFrameObserverPosition["AudioEncodedFrameObserverPositionRecord"] = 1] = "AudioEncodedFrameObserverPositionRecord";
    /* enum_audioencodedframeobserverposition_AudioEncodedFrameObserverPositionPlayback */
    AudioEncodedFrameObserverPosition[AudioEncodedFrameObserverPosition["AudioEncodedFrameObserverPositionPlayback"] = 2] = "AudioEncodedFrameObserverPositionPlayback";
    /* enum_audioencodedframeobserverposition_AudioEncodedFrameObserverPositionMixed */
    AudioEncodedFrameObserverPosition[AudioEncodedFrameObserverPosition["AudioEncodedFrameObserverPositionMixed"] = 3] = "AudioEncodedFrameObserverPositionMixed";
})(AudioEncodedFrameObserverPosition = exports.AudioEncodedFrameObserverPosition || (exports.AudioEncodedFrameObserverPosition = {}));
/* class_audiorecordingconfiguration */
var AudioRecordingConfiguration = /** @class */ (function () {
    function AudioRecordingConfiguration() {
    }
    return AudioRecordingConfiguration;
}());
exports.AudioRecordingConfiguration = AudioRecordingConfiguration;
/* class_audioencodedframeobserverconfig */
var AudioEncodedFrameObserverConfig = /** @class */ (function () {
    function AudioEncodedFrameObserverConfig() {
    }
    return AudioEncodedFrameObserverConfig;
}());
exports.AudioEncodedFrameObserverConfig = AudioEncodedFrameObserverConfig;
/* enum_areacode */
var AreaCode;
(function (AreaCode) {
    /* enum_areacode_AreaCodeCn */
    AreaCode[AreaCode["AreaCodeCn"] = 1] = "AreaCodeCn";
    /* enum_areacode_AreaCodeNa */
    AreaCode[AreaCode["AreaCodeNa"] = 2] = "AreaCodeNa";
    /* enum_areacode_AreaCodeEu */
    AreaCode[AreaCode["AreaCodeEu"] = 4] = "AreaCodeEu";
    /* enum_areacode_AreaCodeAs */
    AreaCode[AreaCode["AreaCodeAs"] = 8] = "AreaCodeAs";
    /* enum_areacode_AreaCodeJp */
    AreaCode[AreaCode["AreaCodeJp"] = 16] = "AreaCodeJp";
    /* enum_areacode_AreaCodeIn */
    AreaCode[AreaCode["AreaCodeIn"] = 32] = "AreaCodeIn";
    /* enum_areacode_AreaCodeGlob */
    AreaCode[AreaCode["AreaCodeGlob"] = 4294967295] = "AreaCodeGlob";
})(AreaCode = exports.AreaCode || (exports.AreaCode = {}));
/* enum_areacodeex */
var AreaCodeEx;
(function (AreaCodeEx) {
    /* enum_areacodeex_AreaCodeOc */
    AreaCodeEx[AreaCodeEx["AreaCodeOc"] = 64] = "AreaCodeOc";
    /* enum_areacodeex_AreaCodeSa */
    AreaCodeEx[AreaCodeEx["AreaCodeSa"] = 128] = "AreaCodeSa";
    /* enum_areacodeex_AreaCodeAf */
    AreaCodeEx[AreaCodeEx["AreaCodeAf"] = 256] = "AreaCodeAf";
    /* enum_areacodeex_AreaCodeKr */
    AreaCodeEx[AreaCodeEx["AreaCodeKr"] = 512] = "AreaCodeKr";
    /* enum_areacodeex_AreaCodeHkmc */
    AreaCodeEx[AreaCodeEx["AreaCodeHkmc"] = 1024] = "AreaCodeHkmc";
    /* enum_areacodeex_AreaCodeUs */
    AreaCodeEx[AreaCodeEx["AreaCodeUs"] = 2048] = "AreaCodeUs";
    /* enum_areacodeex_AreaCodeOvs */
    AreaCodeEx[AreaCodeEx["AreaCodeOvs"] = 4294967294] = "AreaCodeOvs";
})(AreaCodeEx = exports.AreaCodeEx || (exports.AreaCodeEx = {}));
/* enum_channelmediarelayerror */
var ChannelMediaRelayError;
(function (ChannelMediaRelayError) {
    /* enum_channelmediarelayerror_RelayOk */
    ChannelMediaRelayError[ChannelMediaRelayError["RelayOk"] = 0] = "RelayOk";
    /* enum_channelmediarelayerror_RelayErrorServerErrorResponse */
    ChannelMediaRelayError[ChannelMediaRelayError["RelayErrorServerErrorResponse"] = 1] = "RelayErrorServerErrorResponse";
    /* enum_channelmediarelayerror_RelayErrorServerNoResponse */
    ChannelMediaRelayError[ChannelMediaRelayError["RelayErrorServerNoResponse"] = 2] = "RelayErrorServerNoResponse";
    /* enum_channelmediarelayerror_RelayErrorNoResourceAvailable */
    ChannelMediaRelayError[ChannelMediaRelayError["RelayErrorNoResourceAvailable"] = 3] = "RelayErrorNoResourceAvailable";
    /* enum_channelmediarelayerror_RelayErrorFailedJoinSrc */
    ChannelMediaRelayError[ChannelMediaRelayError["RelayErrorFailedJoinSrc"] = 4] = "RelayErrorFailedJoinSrc";
    /* enum_channelmediarelayerror_RelayErrorFailedJoinDest */
    ChannelMediaRelayError[ChannelMediaRelayError["RelayErrorFailedJoinDest"] = 5] = "RelayErrorFailedJoinDest";
    /* enum_channelmediarelayerror_RelayErrorFailedPacketReceivedFromSrc */
    ChannelMediaRelayError[ChannelMediaRelayError["RelayErrorFailedPacketReceivedFromSrc"] = 6] = "RelayErrorFailedPacketReceivedFromSrc";
    /* enum_channelmediarelayerror_RelayErrorFailedPacketSentToDest */
    ChannelMediaRelayError[ChannelMediaRelayError["RelayErrorFailedPacketSentToDest"] = 7] = "RelayErrorFailedPacketSentToDest";
    /* enum_channelmediarelayerror_RelayErrorServerConnectionLost */
    ChannelMediaRelayError[ChannelMediaRelayError["RelayErrorServerConnectionLost"] = 8] = "RelayErrorServerConnectionLost";
    /* enum_channelmediarelayerror_RelayErrorInternalError */
    ChannelMediaRelayError[ChannelMediaRelayError["RelayErrorInternalError"] = 9] = "RelayErrorInternalError";
    /* enum_channelmediarelayerror_RelayErrorSrcTokenExpired */
    ChannelMediaRelayError[ChannelMediaRelayError["RelayErrorSrcTokenExpired"] = 10] = "RelayErrorSrcTokenExpired";
    /* enum_channelmediarelayerror_RelayErrorDestTokenExpired */
    ChannelMediaRelayError[ChannelMediaRelayError["RelayErrorDestTokenExpired"] = 11] = "RelayErrorDestTokenExpired";
})(ChannelMediaRelayError = exports.ChannelMediaRelayError || (exports.ChannelMediaRelayError = {}));
/* enum_channelmediarelayevent */
var ChannelMediaRelayEvent;
(function (ChannelMediaRelayEvent) {
    /* enum_channelmediarelayevent_RelayEventNetworkDisconnected */
    ChannelMediaRelayEvent[ChannelMediaRelayEvent["RelayEventNetworkDisconnected"] = 0] = "RelayEventNetworkDisconnected";
    /* enum_channelmediarelayevent_RelayEventNetworkConnected */
    ChannelMediaRelayEvent[ChannelMediaRelayEvent["RelayEventNetworkConnected"] = 1] = "RelayEventNetworkConnected";
    /* enum_channelmediarelayevent_RelayEventPacketJoinedSrcChannel */
    ChannelMediaRelayEvent[ChannelMediaRelayEvent["RelayEventPacketJoinedSrcChannel"] = 2] = "RelayEventPacketJoinedSrcChannel";
    /* enum_channelmediarelayevent_RelayEventPacketJoinedDestChannel */
    ChannelMediaRelayEvent[ChannelMediaRelayEvent["RelayEventPacketJoinedDestChannel"] = 3] = "RelayEventPacketJoinedDestChannel";
    /* enum_channelmediarelayevent_RelayEventPacketSentToDestChannel */
    ChannelMediaRelayEvent[ChannelMediaRelayEvent["RelayEventPacketSentToDestChannel"] = 4] = "RelayEventPacketSentToDestChannel";
    /* enum_channelmediarelayevent_RelayEventPacketReceivedVideoFromSrc */
    ChannelMediaRelayEvent[ChannelMediaRelayEvent["RelayEventPacketReceivedVideoFromSrc"] = 5] = "RelayEventPacketReceivedVideoFromSrc";
    /* enum_channelmediarelayevent_RelayEventPacketReceivedAudioFromSrc */
    ChannelMediaRelayEvent[ChannelMediaRelayEvent["RelayEventPacketReceivedAudioFromSrc"] = 6] = "RelayEventPacketReceivedAudioFromSrc";
    /* enum_channelmediarelayevent_RelayEventPacketUpdateDestChannel */
    ChannelMediaRelayEvent[ChannelMediaRelayEvent["RelayEventPacketUpdateDestChannel"] = 7] = "RelayEventPacketUpdateDestChannel";
    /* enum_channelmediarelayevent_RelayEventPacketUpdateDestChannelRefused */
    ChannelMediaRelayEvent[ChannelMediaRelayEvent["RelayEventPacketUpdateDestChannelRefused"] = 8] = "RelayEventPacketUpdateDestChannelRefused";
    /* enum_channelmediarelayevent_RelayEventPacketUpdateDestChannelNotChange */
    ChannelMediaRelayEvent[ChannelMediaRelayEvent["RelayEventPacketUpdateDestChannelNotChange"] = 9] = "RelayEventPacketUpdateDestChannelNotChange";
    /* enum_channelmediarelayevent_RelayEventPacketUpdateDestChannelIsNull */
    ChannelMediaRelayEvent[ChannelMediaRelayEvent["RelayEventPacketUpdateDestChannelIsNull"] = 10] = "RelayEventPacketUpdateDestChannelIsNull";
    /* enum_channelmediarelayevent_RelayEventVideoProfileUpdate */
    ChannelMediaRelayEvent[ChannelMediaRelayEvent["RelayEventVideoProfileUpdate"] = 11] = "RelayEventVideoProfileUpdate";
    /* enum_channelmediarelayevent_RelayEventPauseSendPacketToDestChannelSuccess */
    ChannelMediaRelayEvent[ChannelMediaRelayEvent["RelayEventPauseSendPacketToDestChannelSuccess"] = 12] = "RelayEventPauseSendPacketToDestChannelSuccess";
    /* enum_channelmediarelayevent_RelayEventPauseSendPacketToDestChannelFailed */
    ChannelMediaRelayEvent[ChannelMediaRelayEvent["RelayEventPauseSendPacketToDestChannelFailed"] = 13] = "RelayEventPauseSendPacketToDestChannelFailed";
    /* enum_channelmediarelayevent_RelayEventResumeSendPacketToDestChannelSuccess */
    ChannelMediaRelayEvent[ChannelMediaRelayEvent["RelayEventResumeSendPacketToDestChannelSuccess"] = 14] = "RelayEventResumeSendPacketToDestChannelSuccess";
    /* enum_channelmediarelayevent_RelayEventResumeSendPacketToDestChannelFailed */
    ChannelMediaRelayEvent[ChannelMediaRelayEvent["RelayEventResumeSendPacketToDestChannelFailed"] = 15] = "RelayEventResumeSendPacketToDestChannelFailed";
})(ChannelMediaRelayEvent = exports.ChannelMediaRelayEvent || (exports.ChannelMediaRelayEvent = {}));
/* enum_channelmediarelaystate */
var ChannelMediaRelayState;
(function (ChannelMediaRelayState) {
    /* enum_channelmediarelaystate_RelayStateIdle */
    ChannelMediaRelayState[ChannelMediaRelayState["RelayStateIdle"] = 0] = "RelayStateIdle";
    /* enum_channelmediarelaystate_RelayStateConnecting */
    ChannelMediaRelayState[ChannelMediaRelayState["RelayStateConnecting"] = 1] = "RelayStateConnecting";
    /* enum_channelmediarelaystate_RelayStateRunning */
    ChannelMediaRelayState[ChannelMediaRelayState["RelayStateRunning"] = 2] = "RelayStateRunning";
    /* enum_channelmediarelaystate_RelayStateFailure */
    ChannelMediaRelayState[ChannelMediaRelayState["RelayStateFailure"] = 3] = "RelayStateFailure";
})(ChannelMediaRelayState = exports.ChannelMediaRelayState || (exports.ChannelMediaRelayState = {}));
/* class_channelmediainfo */
var ChannelMediaInfo = /** @class */ (function () {
    function ChannelMediaInfo() {
    }
    return ChannelMediaInfo;
}());
exports.ChannelMediaInfo = ChannelMediaInfo;
/* class_channelmediarelayconfiguration */
var ChannelMediaRelayConfiguration = /** @class */ (function () {
    function ChannelMediaRelayConfiguration() {
    }
    return ChannelMediaRelayConfiguration;
}());
exports.ChannelMediaRelayConfiguration = ChannelMediaRelayConfiguration;
/* class_uplinknetworkinfo */
var UplinkNetworkInfo = /** @class */ (function () {
    function UplinkNetworkInfo() {
    }
    return UplinkNetworkInfo;
}());
exports.UplinkNetworkInfo = UplinkNetworkInfo;
/* class_peerdownlinkinfo */
var PeerDownlinkInfo = /** @class */ (function () {
    function PeerDownlinkInfo() {
    }
    return PeerDownlinkInfo;
}());
exports.PeerDownlinkInfo = PeerDownlinkInfo;
/* class_downlinknetworkinfo */
var DownlinkNetworkInfo = /** @class */ (function () {
    function DownlinkNetworkInfo() {
    }
    return DownlinkNetworkInfo;
}());
exports.DownlinkNetworkInfo = DownlinkNetworkInfo;
/* enum_encryptionmode */
var EncryptionMode;
(function (EncryptionMode) {
    /* enum_encryptionmode_Aes128Xts */
    EncryptionMode[EncryptionMode["Aes128Xts"] = 1] = "Aes128Xts";
    /* enum_encryptionmode_Aes128Ecb */
    EncryptionMode[EncryptionMode["Aes128Ecb"] = 2] = "Aes128Ecb";
    /* enum_encryptionmode_Aes256Xts */
    EncryptionMode[EncryptionMode["Aes256Xts"] = 3] = "Aes256Xts";
    /* enum_encryptionmode_Sm4128Ecb */
    EncryptionMode[EncryptionMode["Sm4128Ecb"] = 4] = "Sm4128Ecb";
    /* enum_encryptionmode_Aes128Gcm */
    EncryptionMode[EncryptionMode["Aes128Gcm"] = 5] = "Aes128Gcm";
    /* enum_encryptionmode_Aes256Gcm */
    EncryptionMode[EncryptionMode["Aes256Gcm"] = 6] = "Aes256Gcm";
    /* enum_encryptionmode_Aes128Gcm2 */
    EncryptionMode[EncryptionMode["Aes128Gcm2"] = 7] = "Aes128Gcm2";
    /* enum_encryptionmode_Aes256Gcm2 */
    EncryptionMode[EncryptionMode["Aes256Gcm2"] = 8] = "Aes256Gcm2";
    /* enum_encryptionmode_ModeEnd */
    EncryptionMode[EncryptionMode["ModeEnd"] = 9] = "ModeEnd";
})(EncryptionMode = exports.EncryptionMode || (exports.EncryptionMode = {}));
/* class_encryptionconfig */
var EncryptionConfig = /** @class */ (function () {
    function EncryptionConfig() {
    }
    return EncryptionConfig;
}());
exports.EncryptionConfig = EncryptionConfig;
/* enum_encryptionerrortype */
var EncryptionErrorType;
(function (EncryptionErrorType) {
    /* enum_encryptionerrortype_EncryptionErrorInternalFailure */
    EncryptionErrorType[EncryptionErrorType["EncryptionErrorInternalFailure"] = 0] = "EncryptionErrorInternalFailure";
    /* enum_encryptionerrortype_EncryptionErrorDecryptionFailure */
    EncryptionErrorType[EncryptionErrorType["EncryptionErrorDecryptionFailure"] = 1] = "EncryptionErrorDecryptionFailure";
    /* enum_encryptionerrortype_EncryptionErrorEncryptionFailure */
    EncryptionErrorType[EncryptionErrorType["EncryptionErrorEncryptionFailure"] = 2] = "EncryptionErrorEncryptionFailure";
})(EncryptionErrorType = exports.EncryptionErrorType || (exports.EncryptionErrorType = {}));
/* enum_uploaderrorreason */
var UploadErrorReason;
(function (UploadErrorReason) {
    /* enum_uploaderrorreason_UploadSuccess */
    UploadErrorReason[UploadErrorReason["UploadSuccess"] = 0] = "UploadSuccess";
    /* enum_uploaderrorreason_UploadNetError */
    UploadErrorReason[UploadErrorReason["UploadNetError"] = 1] = "UploadNetError";
    /* enum_uploaderrorreason_UploadServerError */
    UploadErrorReason[UploadErrorReason["UploadServerError"] = 2] = "UploadServerError";
})(UploadErrorReason = exports.UploadErrorReason || (exports.UploadErrorReason = {}));
/* enum_permissiontype */
var PermissionType;
(function (PermissionType) {
    /* enum_permissiontype_RecordAudio */
    PermissionType[PermissionType["RecordAudio"] = 0] = "RecordAudio";
    /* enum_permissiontype_Camera */
    PermissionType[PermissionType["Camera"] = 1] = "Camera";
    /* enum_permissiontype_ScreenCapture */
    PermissionType[PermissionType["ScreenCapture"] = 2] = "ScreenCapture";
})(PermissionType = exports.PermissionType || (exports.PermissionType = {}));
/* enum_maxuseraccountlengthtype */
var MaxUserAccountLengthType;
(function (MaxUserAccountLengthType) {
    /* enum_maxuseraccountlengthtype_MaxUserAccountLength */
    MaxUserAccountLengthType[MaxUserAccountLengthType["MaxUserAccountLength"] = 256] = "MaxUserAccountLength";
})(MaxUserAccountLengthType = exports.MaxUserAccountLengthType || (exports.MaxUserAccountLengthType = {}));
/* enum_streamsubscribestate */
var StreamSubscribeState;
(function (StreamSubscribeState) {
    /* enum_streamsubscribestate_SubStateIdle */
    StreamSubscribeState[StreamSubscribeState["SubStateIdle"] = 0] = "SubStateIdle";
    /* enum_streamsubscribestate_SubStateNoSubscribed */
    StreamSubscribeState[StreamSubscribeState["SubStateNoSubscribed"] = 1] = "SubStateNoSubscribed";
    /* enum_streamsubscribestate_SubStateSubscribing */
    StreamSubscribeState[StreamSubscribeState["SubStateSubscribing"] = 2] = "SubStateSubscribing";
    /* enum_streamsubscribestate_SubStateSubscribed */
    StreamSubscribeState[StreamSubscribeState["SubStateSubscribed"] = 3] = "SubStateSubscribed";
})(StreamSubscribeState = exports.StreamSubscribeState || (exports.StreamSubscribeState = {}));
/* enum_streampublishstate */
var StreamPublishState;
(function (StreamPublishState) {
    /* enum_streampublishstate_PubStateIdle */
    StreamPublishState[StreamPublishState["PubStateIdle"] = 0] = "PubStateIdle";
    /* enum_streampublishstate_PubStateNoPublished */
    StreamPublishState[StreamPublishState["PubStateNoPublished"] = 1] = "PubStateNoPublished";
    /* enum_streampublishstate_PubStatePublishing */
    StreamPublishState[StreamPublishState["PubStatePublishing"] = 2] = "PubStatePublishing";
    /* enum_streampublishstate_PubStatePublished */
    StreamPublishState[StreamPublishState["PubStatePublished"] = 3] = "PubStatePublished";
})(StreamPublishState = exports.StreamPublishState || (exports.StreamPublishState = {}));
/* class_echotestconfiguration */
var EchoTestConfiguration = /** @class */ (function () {
    function EchoTestConfiguration() {
    }
    return EchoTestConfiguration;
}());
exports.EchoTestConfiguration = EchoTestConfiguration;
/* class_userinfo */
var UserInfo = /** @class */ (function () {
    function UserInfo() {
    }
    return UserInfo;
}());
exports.UserInfo = UserInfo;
/* enum_earmonitoringfiltertype */
var EarMonitoringFilterType;
(function (EarMonitoringFilterType) {
    /* enum_earmonitoringfiltertype_EarMonitoringFilterNone */
    EarMonitoringFilterType[EarMonitoringFilterType["EarMonitoringFilterNone"] = 1] = "EarMonitoringFilterNone";
    /* enum_earmonitoringfiltertype_EarMonitoringFilterBuiltInAudioFilters */
    EarMonitoringFilterType[EarMonitoringFilterType["EarMonitoringFilterBuiltInAudioFilters"] = 2] = "EarMonitoringFilterBuiltInAudioFilters";
    /* enum_earmonitoringfiltertype_EarMonitoringFilterNoiseSuppression */
    EarMonitoringFilterType[EarMonitoringFilterType["EarMonitoringFilterNoiseSuppression"] = 4] = "EarMonitoringFilterNoiseSuppression";
})(EarMonitoringFilterType = exports.EarMonitoringFilterType || (exports.EarMonitoringFilterType = {}));
/* enum_threadprioritytype */
var ThreadPriorityType;
(function (ThreadPriorityType) {
    /* enum_threadprioritytype_Lowest */
    ThreadPriorityType[ThreadPriorityType["Lowest"] = 0] = "Lowest";
    /* enum_threadprioritytype_Low */
    ThreadPriorityType[ThreadPriorityType["Low"] = 1] = "Low";
    /* enum_threadprioritytype_Normal */
    ThreadPriorityType[ThreadPriorityType["Normal"] = 2] = "Normal";
    /* enum_threadprioritytype_High */
    ThreadPriorityType[ThreadPriorityType["High"] = 3] = "High";
    /* enum_threadprioritytype_Highest */
    ThreadPriorityType[ThreadPriorityType["Highest"] = 4] = "Highest";
    /* enum_threadprioritytype_Critical */
    ThreadPriorityType[ThreadPriorityType["Critical"] = 5] = "Critical";
})(ThreadPriorityType = exports.ThreadPriorityType || (exports.ThreadPriorityType = {}));
/* class_screenvideoparameters */
var ScreenVideoParameters = /** @class */ (function () {
    function ScreenVideoParameters() {
    }
    return ScreenVideoParameters;
}());
exports.ScreenVideoParameters = ScreenVideoParameters;
/* class_screenaudioparameters */
var ScreenAudioParameters = /** @class */ (function () {
    function ScreenAudioParameters() {
    }
    return ScreenAudioParameters;
}());
exports.ScreenAudioParameters = ScreenAudioParameters;
/* class_screencaptureparameters2 */
var ScreenCaptureParameters2 = /** @class */ (function () {
    function ScreenCaptureParameters2() {
    }
    return ScreenCaptureParameters2;
}());
exports.ScreenCaptureParameters2 = ScreenCaptureParameters2;
/* enum_mediatraceevent */
var MediaTraceEvent;
(function (MediaTraceEvent) {
    /* enum_mediatraceevent_MediaTraceEventVideoRendered */
    MediaTraceEvent[MediaTraceEvent["MediaTraceEventVideoRendered"] = 0] = "MediaTraceEventVideoRendered";
    /* enum_mediatraceevent_MediaTraceEventVideoDecoded */
    MediaTraceEvent[MediaTraceEvent["MediaTraceEventVideoDecoded"] = 1] = "MediaTraceEventVideoDecoded";
})(MediaTraceEvent = exports.MediaTraceEvent || (exports.MediaTraceEvent = {}));
/* class_videorenderingtracinginfo */
var VideoRenderingTracingInfo = /** @class */ (function () {
    function VideoRenderingTracingInfo() {
    }
    return VideoRenderingTracingInfo;
}());
exports.VideoRenderingTracingInfo = VideoRenderingTracingInfo;
/* enum_configfetchtype */
var ConfigFetchType;
(function (ConfigFetchType) {
    /* enum_configfetchtype_ConfigFetchTypeInitialize */
    ConfigFetchType[ConfigFetchType["ConfigFetchTypeInitialize"] = 1] = "ConfigFetchTypeInitialize";
    /* enum_configfetchtype_ConfigFetchTypeJoinChannel */
    ConfigFetchType[ConfigFetchType["ConfigFetchTypeJoinChannel"] = 2] = "ConfigFetchTypeJoinChannel";
})(ConfigFetchType = exports.ConfigFetchType || (exports.ConfigFetchType = {}));
/* class_recorderstreaminfo */
var RecorderStreamInfo = /** @class */ (function () {
    function RecorderStreamInfo() {
    }
    return RecorderStreamInfo;
}());
exports.RecorderStreamInfo = RecorderStreamInfo;
/* enum_localproxymode */
var LocalProxyMode;
(function (LocalProxyMode) {
    /* enum_localproxymode_ConnectivityFirst */
    LocalProxyMode[LocalProxyMode["ConnectivityFirst"] = 0] = "ConnectivityFirst";
    /* enum_localproxymode_LocalOnly */
    LocalProxyMode[LocalProxyMode["LocalOnly"] = 1] = "LocalOnly";
})(LocalProxyMode = exports.LocalProxyMode || (exports.LocalProxyMode = {}));
/* class_loguploadserverinfo */
var LogUploadServerInfo = /** @class */ (function () {
    function LogUploadServerInfo() {
    }
    return LogUploadServerInfo;
}());
exports.LogUploadServerInfo = LogUploadServerInfo;
/* class_advancedconfiginfo */
var AdvancedConfigInfo = /** @class */ (function () {
    function AdvancedConfigInfo() {
    }
    return AdvancedConfigInfo;
}());
exports.AdvancedConfigInfo = AdvancedConfigInfo;
/* class_localaccesspointconfiguration */
var LocalAccessPointConfiguration = /** @class */ (function () {
    function LocalAccessPointConfiguration() {
    }
    return LocalAccessPointConfiguration;
}());
exports.LocalAccessPointConfiguration = LocalAccessPointConfiguration;
/* class_spatialaudioparams */
var SpatialAudioParams = /** @class */ (function () {
    function SpatialAudioParams() {
    }
    return SpatialAudioParams;
}());
exports.SpatialAudioParams = SpatialAudioParams;
