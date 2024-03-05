"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputSeiData = exports.StreamingSrcState = exports.StreamingSrcErr = void 0;
require("./extension/ICmviotMediaStreamingSourceExtension");
/* enum_streamingsrcerr */
var StreamingSrcErr;
(function (StreamingSrcErr) {
    /* enum_streamingsrcerr_StreamingSrcErrNone */
    StreamingSrcErr[StreamingSrcErr["StreamingSrcErrNone"] = 0] = "StreamingSrcErrNone";
    /* enum_streamingsrcerr_StreamingSrcErrUnknown */
    StreamingSrcErr[StreamingSrcErr["StreamingSrcErrUnknown"] = 1] = "StreamingSrcErrUnknown";
    /* enum_streamingsrcerr_StreamingSrcErrInvalidParam */
    StreamingSrcErr[StreamingSrcErr["StreamingSrcErrInvalidParam"] = 2] = "StreamingSrcErrInvalidParam";
    /* enum_streamingsrcerr_StreamingSrcErrBadState */
    StreamingSrcErr[StreamingSrcErr["StreamingSrcErrBadState"] = 3] = "StreamingSrcErrBadState";
    /* enum_streamingsrcerr_StreamingSrcErrNoMem */
    StreamingSrcErr[StreamingSrcErr["StreamingSrcErrNoMem"] = 4] = "StreamingSrcErrNoMem";
    /* enum_streamingsrcerr_StreamingSrcErrBufferOverflow */
    StreamingSrcErr[StreamingSrcErr["StreamingSrcErrBufferOverflow"] = 5] = "StreamingSrcErrBufferOverflow";
    /* enum_streamingsrcerr_StreamingSrcErrBufferUnderflow */
    StreamingSrcErr[StreamingSrcErr["StreamingSrcErrBufferUnderflow"] = 6] = "StreamingSrcErrBufferUnderflow";
    /* enum_streamingsrcerr_StreamingSrcErrNotFound */
    StreamingSrcErr[StreamingSrcErr["StreamingSrcErrNotFound"] = 7] = "StreamingSrcErrNotFound";
    /* enum_streamingsrcerr_StreamingSrcErrTimeout */
    StreamingSrcErr[StreamingSrcErr["StreamingSrcErrTimeout"] = 8] = "StreamingSrcErrTimeout";
    /* enum_streamingsrcerr_StreamingSrcErrExpired */
    StreamingSrcErr[StreamingSrcErr["StreamingSrcErrExpired"] = 9] = "StreamingSrcErrExpired";
    /* enum_streamingsrcerr_StreamingSrcErrUnsupported */
    StreamingSrcErr[StreamingSrcErr["StreamingSrcErrUnsupported"] = 10] = "StreamingSrcErrUnsupported";
    /* enum_streamingsrcerr_StreamingSrcErrNotExist */
    StreamingSrcErr[StreamingSrcErr["StreamingSrcErrNotExist"] = 11] = "StreamingSrcErrNotExist";
    /* enum_streamingsrcerr_StreamingSrcErrExist */
    StreamingSrcErr[StreamingSrcErr["StreamingSrcErrExist"] = 12] = "StreamingSrcErrExist";
    /* enum_streamingsrcerr_StreamingSrcErrOpen */
    StreamingSrcErr[StreamingSrcErr["StreamingSrcErrOpen"] = 13] = "StreamingSrcErrOpen";
    /* enum_streamingsrcerr_StreamingSrcErrClose */
    StreamingSrcErr[StreamingSrcErr["StreamingSrcErrClose"] = 14] = "StreamingSrcErrClose";
    /* enum_streamingsrcerr_StreamingSrcErrRead */
    StreamingSrcErr[StreamingSrcErr["StreamingSrcErrRead"] = 15] = "StreamingSrcErrRead";
    /* enum_streamingsrcerr_StreamingSrcErrWrite */
    StreamingSrcErr[StreamingSrcErr["StreamingSrcErrWrite"] = 16] = "StreamingSrcErrWrite";
    /* enum_streamingsrcerr_StreamingSrcErrSeek */
    StreamingSrcErr[StreamingSrcErr["StreamingSrcErrSeek"] = 17] = "StreamingSrcErrSeek";
    /* enum_streamingsrcerr_StreamingSrcErrEof */
    StreamingSrcErr[StreamingSrcErr["StreamingSrcErrEof"] = 18] = "StreamingSrcErrEof";
    /* enum_streamingsrcerr_StreamingSrcErrCodecopen */
    StreamingSrcErr[StreamingSrcErr["StreamingSrcErrCodecopen"] = 19] = "StreamingSrcErrCodecopen";
    /* enum_streamingsrcerr_StreamingSrcErrCodecclose */
    StreamingSrcErr[StreamingSrcErr["StreamingSrcErrCodecclose"] = 20] = "StreamingSrcErrCodecclose";
    /* enum_streamingsrcerr_StreamingSrcErrCodecproc */
    StreamingSrcErr[StreamingSrcErr["StreamingSrcErrCodecproc"] = 21] = "StreamingSrcErrCodecproc";
})(StreamingSrcErr = exports.StreamingSrcErr || (exports.StreamingSrcErr = {}));
/* enum_streamingsrcstate */
var StreamingSrcState;
(function (StreamingSrcState) {
    /* enum_streamingsrcstate_StreamingSrcStateClosed */
    StreamingSrcState[StreamingSrcState["StreamingSrcStateClosed"] = 0] = "StreamingSrcStateClosed";
    /* enum_streamingsrcstate_StreamingSrcStateOpening */
    StreamingSrcState[StreamingSrcState["StreamingSrcStateOpening"] = 1] = "StreamingSrcStateOpening";
    /* enum_streamingsrcstate_StreamingSrcStateIdle */
    StreamingSrcState[StreamingSrcState["StreamingSrcStateIdle"] = 2] = "StreamingSrcStateIdle";
    /* enum_streamingsrcstate_StreamingSrcStatePlaying */
    StreamingSrcState[StreamingSrcState["StreamingSrcStatePlaying"] = 3] = "StreamingSrcStatePlaying";
    /* enum_streamingsrcstate_StreamingSrcStateSeeking */
    StreamingSrcState[StreamingSrcState["StreamingSrcStateSeeking"] = 4] = "StreamingSrcStateSeeking";
    /* enum_streamingsrcstate_StreamingSrcStateEof */
    StreamingSrcState[StreamingSrcState["StreamingSrcStateEof"] = 5] = "StreamingSrcStateEof";
    /* enum_streamingsrcstate_StreamingSrcStateError */
    StreamingSrcState[StreamingSrcState["StreamingSrcStateError"] = 6] = "StreamingSrcStateError";
})(StreamingSrcState = exports.StreamingSrcState || (exports.StreamingSrcState = {}));
/* class_inputseidata */
var InputSeiData = /** @class */ (function () {
    function InputSeiData() {
    }
    return InputSeiData;
}());
exports.InputSeiData = InputSeiData;
