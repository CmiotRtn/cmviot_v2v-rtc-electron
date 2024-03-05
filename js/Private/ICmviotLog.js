"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogConfig = exports.LogFilterType = exports.LogLevel = void 0;
require("./extension/ICmviotLogExtension");
/* enum_loglevel */
var LogLevel;
(function (LogLevel) {
    /* enum_loglevel_LogLevelNone */
    LogLevel[LogLevel["LogLevelNone"] = 0] = "LogLevelNone";
    /* enum_loglevel_LogLevelInfo */
    LogLevel[LogLevel["LogLevelInfo"] = 1] = "LogLevelInfo";
    /* enum_loglevel_LogLevelWarn */
    LogLevel[LogLevel["LogLevelWarn"] = 2] = "LogLevelWarn";
    /* enum_loglevel_LogLevelError */
    LogLevel[LogLevel["LogLevelError"] = 4] = "LogLevelError";
    /* enum_loglevel_LogLevelFatal */
    LogLevel[LogLevel["LogLevelFatal"] = 8] = "LogLevelFatal";
    /* enum_loglevel_LogLevelApiCall */
    LogLevel[LogLevel["LogLevelApiCall"] = 16] = "LogLevelApiCall";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
/* enum_logfiltertype */
var LogFilterType;
(function (LogFilterType) {
    /* enum_logfiltertype_LogFilterOff */
    LogFilterType[LogFilterType["LogFilterOff"] = 0] = "LogFilterOff";
    /* enum_logfiltertype_LogFilterDebug */
    LogFilterType[LogFilterType["LogFilterDebug"] = 2063] = "LogFilterDebug";
    /* enum_logfiltertype_LogFilterInfo */
    LogFilterType[LogFilterType["LogFilterInfo"] = 15] = "LogFilterInfo";
    /* enum_logfiltertype_LogFilterWarn */
    LogFilterType[LogFilterType["LogFilterWarn"] = 14] = "LogFilterWarn";
    /* enum_logfiltertype_LogFilterError */
    LogFilterType[LogFilterType["LogFilterError"] = 12] = "LogFilterError";
    /* enum_logfiltertype_LogFilterCritical */
    LogFilterType[LogFilterType["LogFilterCritical"] = 8] = "LogFilterCritical";
    /* enum_logfiltertype_LogFilterMask */
    LogFilterType[LogFilterType["LogFilterMask"] = 2063] = "LogFilterMask";
})(LogFilterType = exports.LogFilterType || (exports.LogFilterType = {}));
/* class_logconfig */
var LogConfig = /** @class */ (function () {
    function LogConfig() {
    }
    return LogConfig;
}());
exports.LogConfig = LogConfig;
