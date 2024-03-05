import './extension/ICmviotLogExtension';
export declare enum LogLevel {
    LogLevelNone = 0,
    LogLevelInfo = 1,
    LogLevelWarn = 2,
    LogLevelError = 4,
    LogLevelFatal = 8,
    LogLevelApiCall = 16
}
export declare enum LogFilterType {
    LogFilterOff = 0,
    LogFilterDebug = 2063,
    LogFilterInfo = 15,
    LogFilterWarn = 14,
    LogFilterError = 12,
    LogFilterCritical = 8,
    LogFilterMask = 2063
}
export declare class LogConfig {
    filePath?: string;
    fileSizeInKB?: number;
    level?: LogLevel;
}
//# sourceMappingURL=ICmviotLog.d.ts.map