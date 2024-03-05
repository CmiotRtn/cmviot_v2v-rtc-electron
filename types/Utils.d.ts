import { VideoSourceType } from './Private/CmviotMediaBase';
import { CmviotEnvType, FormatRendererVideoConfig, RendererVideoConfig } from './Types';
/**
 * @ignore
 */
export declare const TAG = "[Cmviot]: ";
/**
 * @ignore
 */
export declare const DEBUG_TAG = "[Cmviot Debug]: ";
/**
 * @ignore
 */
export declare const deprecate: (originApi?: string, replaceApi?: string) => void;
/**
 * @ignore
 */
export declare const logWarn: (msg: string, ...optParams: any[]) => void;
/**
 * @ignore
 */
export declare const logError: (msg: string, ...optParams: any[]) => void;
/**
 * @ignore
 */
export declare const logInfo: (msg: string, ...optParams: any[]) => void;
/**
 * @ignore
 */
export declare const logDebug: (msg: string, ...optParams: any[]) => void;
/**
 * @ignore
 */
export declare const parseJSON: (jsonString: string) => any;
/**
 * @ignore
 */
export declare const objsKeysToLowerCase: (array: Array<any>) => void;
/**
 * @ignore
 */
export declare const formatConfigByVideoSourceType: (videoSourceType?: VideoSourceType, originChannelId?: string, originUid?: number) => {
    uid: number;
    channelId: string;
    videoSourceType: VideoSourceType;
};
/**
 * @ignore
 */
export declare const getDefaultRendererVideoConfig: (config: RendererVideoConfig) => FormatRendererVideoConfig;
/**
 * @ignore
 */
export declare function classMix(...mixins: any[]): any;
/**
 * @ignore
 */
export declare const CmviotEnv: CmviotEnvType;
//# sourceMappingURL=Utils.d.ts.map