"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaSource = exports.PlayerUpdatedInfo = exports.CacheStatistics = exports.MediaPlayerMetadataType = exports.SrcInfo = exports.PlayerStreamInfo = exports.PlayerPreloadEvent = exports.MediaPlayerEvent = exports.MediaStreamType = exports.MediaPlayerError = exports.MediaPlayerState = void 0;
require("./extension/CmviotMediaPlayerTypesExtension");
/* enum_mediaplayerstate */
var MediaPlayerState;
(function (MediaPlayerState) {
    /* enum_mediaplayerstate_PlayerStateIdle */
    MediaPlayerState[MediaPlayerState["PlayerStateIdle"] = 0] = "PlayerStateIdle";
    /* enum_mediaplayerstate_PlayerStateOpening */
    MediaPlayerState[MediaPlayerState["PlayerStateOpening"] = 1] = "PlayerStateOpening";
    /* enum_mediaplayerstate_PlayerStateOpenCompleted */
    MediaPlayerState[MediaPlayerState["PlayerStateOpenCompleted"] = 2] = "PlayerStateOpenCompleted";
    /* enum_mediaplayerstate_PlayerStatePlaying */
    MediaPlayerState[MediaPlayerState["PlayerStatePlaying"] = 3] = "PlayerStatePlaying";
    /* enum_mediaplayerstate_PlayerStatePaused */
    MediaPlayerState[MediaPlayerState["PlayerStatePaused"] = 4] = "PlayerStatePaused";
    /* enum_mediaplayerstate_PlayerStatePlaybackCompleted */
    MediaPlayerState[MediaPlayerState["PlayerStatePlaybackCompleted"] = 5] = "PlayerStatePlaybackCompleted";
    /* enum_mediaplayerstate_PlayerStatePlaybackAllLoopsCompleted */
    MediaPlayerState[MediaPlayerState["PlayerStatePlaybackAllLoopsCompleted"] = 6] = "PlayerStatePlaybackAllLoopsCompleted";
    /* enum_mediaplayerstate_PlayerStateStopped */
    MediaPlayerState[MediaPlayerState["PlayerStateStopped"] = 7] = "PlayerStateStopped";
    /* enum_mediaplayerstate_PlayerStatePausingInternal */
    MediaPlayerState[MediaPlayerState["PlayerStatePausingInternal"] = 50] = "PlayerStatePausingInternal";
    /* enum_mediaplayerstate_PlayerStateStoppingInternal */
    MediaPlayerState[MediaPlayerState["PlayerStateStoppingInternal"] = 51] = "PlayerStateStoppingInternal";
    /* enum_mediaplayerstate_PlayerStateSeekingInternal */
    MediaPlayerState[MediaPlayerState["PlayerStateSeekingInternal"] = 52] = "PlayerStateSeekingInternal";
    /* enum_mediaplayerstate_PlayerStateGettingInternal */
    MediaPlayerState[MediaPlayerState["PlayerStateGettingInternal"] = 53] = "PlayerStateGettingInternal";
    /* enum_mediaplayerstate_PlayerStateNoneInternal */
    MediaPlayerState[MediaPlayerState["PlayerStateNoneInternal"] = 54] = "PlayerStateNoneInternal";
    /* enum_mediaplayerstate_PlayerStateDoNothingInternal */
    MediaPlayerState[MediaPlayerState["PlayerStateDoNothingInternal"] = 55] = "PlayerStateDoNothingInternal";
    /* enum_mediaplayerstate_PlayerStateSetTrackInternal */
    MediaPlayerState[MediaPlayerState["PlayerStateSetTrackInternal"] = 56] = "PlayerStateSetTrackInternal";
    /* enum_mediaplayerstate_PlayerStateFailed */
    MediaPlayerState[MediaPlayerState["PlayerStateFailed"] = 100] = "PlayerStateFailed";
})(MediaPlayerState = exports.MediaPlayerState || (exports.MediaPlayerState = {}));
/* enum_mediaplayererror */
var MediaPlayerError;
(function (MediaPlayerError) {
    /* enum_mediaplayererror_PlayerErrorNone */
    MediaPlayerError[MediaPlayerError["PlayerErrorNone"] = 0] = "PlayerErrorNone";
    /* enum_mediaplayererror_PlayerErrorInvalidArguments */
    MediaPlayerError[MediaPlayerError["PlayerErrorInvalidArguments"] = -1] = "PlayerErrorInvalidArguments";
    /* enum_mediaplayererror_PlayerErrorInternal */
    MediaPlayerError[MediaPlayerError["PlayerErrorInternal"] = -2] = "PlayerErrorInternal";
    /* enum_mediaplayererror_PlayerErrorNoResource */
    MediaPlayerError[MediaPlayerError["PlayerErrorNoResource"] = -3] = "PlayerErrorNoResource";
    /* enum_mediaplayererror_PlayerErrorInvalidMediaSource */
    MediaPlayerError[MediaPlayerError["PlayerErrorInvalidMediaSource"] = -4] = "PlayerErrorInvalidMediaSource";
    /* enum_mediaplayererror_PlayerErrorUnknownStreamType */
    MediaPlayerError[MediaPlayerError["PlayerErrorUnknownStreamType"] = -5] = "PlayerErrorUnknownStreamType";
    /* enum_mediaplayererror_PlayerErrorObjNotInitialized */
    MediaPlayerError[MediaPlayerError["PlayerErrorObjNotInitialized"] = -6] = "PlayerErrorObjNotInitialized";
    /* enum_mediaplayererror_PlayerErrorCodecNotSupported */
    MediaPlayerError[MediaPlayerError["PlayerErrorCodecNotSupported"] = -7] = "PlayerErrorCodecNotSupported";
    /* enum_mediaplayererror_PlayerErrorVideoRenderFailed */
    MediaPlayerError[MediaPlayerError["PlayerErrorVideoRenderFailed"] = -8] = "PlayerErrorVideoRenderFailed";
    /* enum_mediaplayererror_PlayerErrorInvalidState */
    MediaPlayerError[MediaPlayerError["PlayerErrorInvalidState"] = -9] = "PlayerErrorInvalidState";
    /* enum_mediaplayererror_PlayerErrorUrlNotFound */
    MediaPlayerError[MediaPlayerError["PlayerErrorUrlNotFound"] = -10] = "PlayerErrorUrlNotFound";
    /* enum_mediaplayererror_PlayerErrorInvalidConnectionState */
    MediaPlayerError[MediaPlayerError["PlayerErrorInvalidConnectionState"] = -11] = "PlayerErrorInvalidConnectionState";
    /* enum_mediaplayererror_PlayerErrorSrcBufferUnderflow */
    MediaPlayerError[MediaPlayerError["PlayerErrorSrcBufferUnderflow"] = -12] = "PlayerErrorSrcBufferUnderflow";
    /* enum_mediaplayererror_PlayerErrorInterrupted */
    MediaPlayerError[MediaPlayerError["PlayerErrorInterrupted"] = -13] = "PlayerErrorInterrupted";
    /* enum_mediaplayererror_PlayerErrorNotSupported */
    MediaPlayerError[MediaPlayerError["PlayerErrorNotSupported"] = -14] = "PlayerErrorNotSupported";
    /* enum_mediaplayererror_PlayerErrorTokenExpired */
    MediaPlayerError[MediaPlayerError["PlayerErrorTokenExpired"] = -15] = "PlayerErrorTokenExpired";
    /* enum_mediaplayererror_PlayerErrorIpExpired */
    MediaPlayerError[MediaPlayerError["PlayerErrorIpExpired"] = -16] = "PlayerErrorIpExpired";
    /* enum_mediaplayererror_PlayerErrorUnknown */
    MediaPlayerError[MediaPlayerError["PlayerErrorUnknown"] = -17] = "PlayerErrorUnknown";
})(MediaPlayerError = exports.MediaPlayerError || (exports.MediaPlayerError = {}));
/* enum_mediastreamtype */
var MediaStreamType;
(function (MediaStreamType) {
    /* enum_mediastreamtype_StreamTypeUnknown */
    MediaStreamType[MediaStreamType["StreamTypeUnknown"] = 0] = "StreamTypeUnknown";
    /* enum_mediastreamtype_StreamTypeVideo */
    MediaStreamType[MediaStreamType["StreamTypeVideo"] = 1] = "StreamTypeVideo";
    /* enum_mediastreamtype_StreamTypeAudio */
    MediaStreamType[MediaStreamType["StreamTypeAudio"] = 2] = "StreamTypeAudio";
    /* enum_mediastreamtype_StreamTypeSubtitle */
    MediaStreamType[MediaStreamType["StreamTypeSubtitle"] = 3] = "StreamTypeSubtitle";
})(MediaStreamType = exports.MediaStreamType || (exports.MediaStreamType = {}));
/* enum_mediaplayerevent */
var MediaPlayerEvent;
(function (MediaPlayerEvent) {
    /* enum_mediaplayerevent_PlayerEventSeekBegin */
    MediaPlayerEvent[MediaPlayerEvent["PlayerEventSeekBegin"] = 0] = "PlayerEventSeekBegin";
    /* enum_mediaplayerevent_PlayerEventSeekComplete */
    MediaPlayerEvent[MediaPlayerEvent["PlayerEventSeekComplete"] = 1] = "PlayerEventSeekComplete";
    /* enum_mediaplayerevent_PlayerEventSeekError */
    MediaPlayerEvent[MediaPlayerEvent["PlayerEventSeekError"] = 2] = "PlayerEventSeekError";
    /* enum_mediaplayerevent_PlayerEventAudioTrackChanged */
    MediaPlayerEvent[MediaPlayerEvent["PlayerEventAudioTrackChanged"] = 5] = "PlayerEventAudioTrackChanged";
    /* enum_mediaplayerevent_PlayerEventBufferLow */
    MediaPlayerEvent[MediaPlayerEvent["PlayerEventBufferLow"] = 6] = "PlayerEventBufferLow";
    /* enum_mediaplayerevent_PlayerEventBufferRecover */
    MediaPlayerEvent[MediaPlayerEvent["PlayerEventBufferRecover"] = 7] = "PlayerEventBufferRecover";
    /* enum_mediaplayerevent_PlayerEventFreezeStart */
    MediaPlayerEvent[MediaPlayerEvent["PlayerEventFreezeStart"] = 8] = "PlayerEventFreezeStart";
    /* enum_mediaplayerevent_PlayerEventFreezeStop */
    MediaPlayerEvent[MediaPlayerEvent["PlayerEventFreezeStop"] = 9] = "PlayerEventFreezeStop";
    /* enum_mediaplayerevent_PlayerEventSwitchBegin */
    MediaPlayerEvent[MediaPlayerEvent["PlayerEventSwitchBegin"] = 10] = "PlayerEventSwitchBegin";
    /* enum_mediaplayerevent_PlayerEventSwitchComplete */
    MediaPlayerEvent[MediaPlayerEvent["PlayerEventSwitchComplete"] = 11] = "PlayerEventSwitchComplete";
    /* enum_mediaplayerevent_PlayerEventSwitchError */
    MediaPlayerEvent[MediaPlayerEvent["PlayerEventSwitchError"] = 12] = "PlayerEventSwitchError";
    /* enum_mediaplayerevent_PlayerEventFirstDisplayed */
    MediaPlayerEvent[MediaPlayerEvent["PlayerEventFirstDisplayed"] = 13] = "PlayerEventFirstDisplayed";
    /* enum_mediaplayerevent_PlayerEventReachCacheFileMaxCount */
    MediaPlayerEvent[MediaPlayerEvent["PlayerEventReachCacheFileMaxCount"] = 14] = "PlayerEventReachCacheFileMaxCount";
    /* enum_mediaplayerevent_PlayerEventReachCacheFileMaxSize */
    MediaPlayerEvent[MediaPlayerEvent["PlayerEventReachCacheFileMaxSize"] = 15] = "PlayerEventReachCacheFileMaxSize";
    /* enum_mediaplayerevent_PlayerEventTryOpenStart */
    MediaPlayerEvent[MediaPlayerEvent["PlayerEventTryOpenStart"] = 16] = "PlayerEventTryOpenStart";
    /* enum_mediaplayerevent_PlayerEventTryOpenSucceed */
    MediaPlayerEvent[MediaPlayerEvent["PlayerEventTryOpenSucceed"] = 17] = "PlayerEventTryOpenSucceed";
    /* enum_mediaplayerevent_PlayerEventTryOpenFailed */
    MediaPlayerEvent[MediaPlayerEvent["PlayerEventTryOpenFailed"] = 18] = "PlayerEventTryOpenFailed";
})(MediaPlayerEvent = exports.MediaPlayerEvent || (exports.MediaPlayerEvent = {}));
/* enum_playerpreloadevent */
var PlayerPreloadEvent;
(function (PlayerPreloadEvent) {
    /* enum_playerpreloadevent_PlayerPreloadEventBegin */
    PlayerPreloadEvent[PlayerPreloadEvent["PlayerPreloadEventBegin"] = 0] = "PlayerPreloadEventBegin";
    /* enum_playerpreloadevent_PlayerPreloadEventComplete */
    PlayerPreloadEvent[PlayerPreloadEvent["PlayerPreloadEventComplete"] = 1] = "PlayerPreloadEventComplete";
    /* enum_playerpreloadevent_PlayerPreloadEventError */
    PlayerPreloadEvent[PlayerPreloadEvent["PlayerPreloadEventError"] = 2] = "PlayerPreloadEventError";
})(PlayerPreloadEvent = exports.PlayerPreloadEvent || (exports.PlayerPreloadEvent = {}));
/* class_playerstreaminfo */
var PlayerStreamInfo = /** @class */ (function () {
    function PlayerStreamInfo() {
    }
    return PlayerStreamInfo;
}());
exports.PlayerStreamInfo = PlayerStreamInfo;
/* class_srcinfo */
var SrcInfo = /** @class */ (function () {
    function SrcInfo() {
    }
    return SrcInfo;
}());
exports.SrcInfo = SrcInfo;
/* enum_mediaplayermetadatatype */
var MediaPlayerMetadataType;
(function (MediaPlayerMetadataType) {
    /* enum_mediaplayermetadatatype_PlayerMetadataTypeUnknown */
    MediaPlayerMetadataType[MediaPlayerMetadataType["PlayerMetadataTypeUnknown"] = 0] = "PlayerMetadataTypeUnknown";
    /* enum_mediaplayermetadatatype_PlayerMetadataTypeSei */
    MediaPlayerMetadataType[MediaPlayerMetadataType["PlayerMetadataTypeSei"] = 1] = "PlayerMetadataTypeSei";
})(MediaPlayerMetadataType = exports.MediaPlayerMetadataType || (exports.MediaPlayerMetadataType = {}));
/* class_cachestatistics */
var CacheStatistics = /** @class */ (function () {
    function CacheStatistics() {
    }
    return CacheStatistics;
}());
exports.CacheStatistics = CacheStatistics;
/* class_playerupdatedinfo */
var PlayerUpdatedInfo = /** @class */ (function () {
    function PlayerUpdatedInfo() {
    }
    return PlayerUpdatedInfo;
}());
exports.PlayerUpdatedInfo = PlayerUpdatedInfo;
/* class_mediasource */
var MediaSource = /** @class */ (function () {
    function MediaSource() {
    }
    return MediaSource;
}());
exports.MediaSource = MediaSource;
