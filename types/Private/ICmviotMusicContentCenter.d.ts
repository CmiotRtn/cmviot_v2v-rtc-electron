import './extension/ICmviotMusicContentCenterExtension';
import { IMediaPlayer } from './ICmviotMediaPlayer';
export declare enum PreloadStatusCode {
    KPreloadStatusCompleted = 0,
    KPreloadStatusFailed = 1,
    KPreloadStatusPreloading = 2,
    KPreloadStatusRemoved = 3
}
export declare enum MusicContentCenterStatusCode {
    KMusicContentCenterStatusOk = 0,
    KMusicContentCenterStatusErr = 1,
    KMusicContentCenterStatusErrGateway = 2,
    KMusicContentCenterStatusErrPermissionAndResource = 3,
    KMusicContentCenterStatusErrInternalDataParse = 4,
    KMusicContentCenterStatusErrMusicLoading = 5,
    KMusicContentCenterStatusErrMusicDecryption = 6,
    KMusicContentCenterStatusErrHttpInternalError = 7
}
export declare class MusicChartInfo {
    chartName?: string;
    id?: number;
}
export declare enum MusicCacheStatusType {
    MusicCacheStatusTypeCached = 0,
    MusicCacheStatusTypeCaching = 1
}
export declare class MusicCacheInfo {
    songCode?: number;
    status?: MusicCacheStatusType;
}
export declare abstract class MusicChartCollection {
    abstract getCount(): number;
    abstract get(index: number): MusicChartInfo;
}
export declare class MvProperty {
    resolution?: string;
    bandwidth?: string;
}
export declare class ClimaxSegment {
    startTimeMs?: number;
    endTimeMs?: number;
}
export declare class Music {
    songCode?: number;
    name?: string;
    singer?: string;
    poster?: string;
    releaseTime?: string;
    durationS?: number;
    type?: number;
    pitchType?: number;
    lyricCount?: number;
    lyricList?: number[];
    climaxSegmentCount?: number;
    climaxSegmentList?: ClimaxSegment[];
    mvPropertyCount?: number;
    mvPropertyList?: MvProperty[];
}
export declare abstract class MusicCollection {
    abstract getCount(): number;
    abstract getTotal(): number;
    abstract getPage(): number;
    abstract getPageSize(): number;
    abstract getMusic(index: number): Music;
}
export interface IMusicContentCenterEventHandler {
    onMusicChartsResult?(requestId: string, result: MusicChartInfo[], errorCode: MusicContentCenterStatusCode): void;
    onMusicCollectionResult?(requestId: string, result: MusicCollection, errorCode: MusicContentCenterStatusCode): void;
    onLyricResult?(requestId: string, songCode: number, lyricUrl: string, errorCode: MusicContentCenterStatusCode): void;
    onSongSimpleInfoResult?(requestId: string, songCode: number, simpleInfo: string, errorCode: MusicContentCenterStatusCode): void;
    onPreLoadEvent?(requestId: string, songCode: number, percent: number, lyricUrl: string, status: PreloadStatusCode, errorCode: MusicContentCenterStatusCode): void;
}
export declare class MusicContentCenterConfiguration {
    appId?: string;
    token?: string;
    mccUid?: number;
    maxCacheSize?: number;
    mccDomain?: string;
}
export declare abstract class IMusicPlayer extends IMediaPlayer {
    abstract openWithSongCode(songCode: number, startPos?: number): number;
}
export declare abstract class IMusicContentCenter {
    abstract initialize(configuration: MusicContentCenterConfiguration): number;
    abstract renewToken(token: string): number;
    abstract release(): void;
    abstract registerEventHandler(eventHandler: IMusicContentCenterEventHandler): number;
    abstract unregisterEventHandler(): number;
    abstract createMusicPlayer(): IMusicPlayer;
    abstract getMusicCharts(): string;
    abstract getMusicCollectionByMusicChartId(musicChartId: number, page: number, pageSize: number, jsonOption?: string): string;
    abstract searchMusic(keyWord: string, page: number, pageSize: number, jsonOption?: string): string;
    abstract preload(songCode: number): string;
    abstract removeCache(songCode: number): number;
    abstract getCaches(): {
        cacheInfo: MusicCacheInfo[];
        cacheInfoSize: number;
    };
    abstract isPreloaded(songCode: number): boolean;
    abstract getLyric(songCode: number, lyricType?: number): string;
    abstract getSongSimpleInfo(songCode: number): string;
    abstract getInternalSongCode(songCode: number, jsonOption: string): number;
}
//# sourceMappingURL=ICmviotMusicContentCenter.d.ts.map