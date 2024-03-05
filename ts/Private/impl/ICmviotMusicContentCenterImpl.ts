import {
  IMusicContentCenter,
  IMusicContentCenterEventHandler,
  IMusicPlayer,
  Music,
  MusicCacheInfo,
  MusicChartCollection,
  MusicChartInfo,
  MusicCollection,
  MusicContentCenterConfiguration,
} from '../ICmviotMusicContentCenter';

import { IMediaPlayerImpl } from './ICmviotMediaPlayerImpl';

// @ts-ignore
export class MusicChartCollectionImpl implements MusicChartCollection {
  getCount(): number {
    const apiType = this.getApiTypeFromGetCount();
    const jsonParams = {};
    const jsonResults = callIrisApi.call(this, apiType, jsonParams);
    return jsonResults.result;
  }

  protected getApiTypeFromGetCount(): string {
    return 'MusicChartCollection_getCount';
  }

  get(index: number): MusicChartInfo {
    const apiType = this.getApiTypeFromGet(index);
    const jsonParams = {
      index: index,
      toJSON: () => {
        return {
          index: index,
        };
      },
    };
    const jsonResults = callIrisApi.call(this, apiType, jsonParams);
    return jsonResults.result;
  }

  protected getApiTypeFromGet(index: number): string {
    return 'MusicChartCollection_get';
  }
}

// @ts-ignore
export class MusicCollectionImpl implements MusicCollection {
  getCount(): number {
    const apiType = this.getApiTypeFromGetCount();
    const jsonParams = {};
    const jsonResults = callIrisApi.call(this, apiType, jsonParams);
    return jsonResults.result;
  }

  protected getApiTypeFromGetCount(): string {
    return 'MusicCollection_getCount';
  }

  getTotal(): number {
    const apiType = this.getApiTypeFromGetTotal();
    const jsonParams = {};
    const jsonResults = callIrisApi.call(this, apiType, jsonParams);
    return jsonResults.result;
  }

  protected getApiTypeFromGetTotal(): string {
    return 'MusicCollection_getTotal';
  }

  getPage(): number {
    const apiType = this.getApiTypeFromGetPage();
    const jsonParams = {};
    const jsonResults = callIrisApi.call(this, apiType, jsonParams);
    return jsonResults.result;
  }

  protected getApiTypeFromGetPage(): string {
    return 'MusicCollection_getPage';
  }

  getPageSize(): number {
    const apiType = this.getApiTypeFromGetPageSize();
    const jsonParams = {};
    const jsonResults = callIrisApi.call(this, apiType, jsonParams);
    return jsonResults.result;
  }

  protected getApiTypeFromGetPageSize(): string {
    return 'MusicCollection_getPageSize';
  }

  getMusic(index: number): Music {
    const apiType = this.getApiTypeFromGetMusic(index);
    const jsonParams = {
      index: index,
      toJSON: () => {
        return {
          index: index,
        };
      },
    };
    const jsonResults = callIrisApi.call(this, apiType, jsonParams);
    return jsonResults.result;
  }

  protected getApiTypeFromGetMusic(index: number): string {
    return 'MusicCollection_getMusic';
  }
}

export function processIMusicContentCenterEventHandler(
  handler: IMusicContentCenterEventHandler,
  event: string,
  jsonParams: any
) {
  switch (event) {
    case 'onMusicChartsResult':
      if (handler.onMusicChartsResult !== undefined) {
        handler.onMusicChartsResult(
          jsonParams.requestId,
          jsonParams.result,
          jsonParams.errorCode
        );
      }
      break;

    case 'onMusicCollectionResult':
      if (handler.onMusicCollectionResult !== undefined) {
        handler.onMusicCollectionResult(
          jsonParams.requestId,
          jsonParams.result,
          jsonParams.errorCode
        );
      }
      break;

    case 'onLyricResult':
      if (handler.onLyricResult !== undefined) {
        handler.onLyricResult(
          jsonParams.requestId,
          jsonParams.songCode,
          jsonParams.lyricUrl,
          jsonParams.errorCode
        );
      }
      break;

    case 'onSongSimpleInfoResult':
      if (handler.onSongSimpleInfoResult !== undefined) {
        handler.onSongSimpleInfoResult(
          jsonParams.requestId,
          jsonParams.songCode,
          jsonParams.simpleInfo,
          jsonParams.errorCode
        );
      }
      break;

    case 'onPreLoadEvent':
      if (handler.onPreLoadEvent !== undefined) {
        handler.onPreLoadEvent(
          jsonParams.requestId,
          jsonParams.songCode,
          jsonParams.percent,
          jsonParams.lyricUrl,
          jsonParams.status,
          jsonParams.errorCode
        );
      }
      break;
  }
}

// @ts-ignore
export class IMusicPlayerImpl extends IMediaPlayerImpl implements IMusicPlayer {
  openWithSongCode(songCode: number, startPos: number = 0): number {
    const apiType = this.getApiTypeFromOpenWithSongCode(songCode, startPos);
    const jsonParams = {
      songCode: songCode,
      startPos: startPos,
      toJSON: () => {
        return {
          songCode: songCode,
          startPos: startPos,
        };
      },
    };
    const jsonResults = callIrisApi.call(this, apiType, jsonParams);
    return jsonResults.result;
  }

  protected getApiTypeFromOpenWithSongCode(
    songCode: number,
    startPos: number = 0
  ): string {
    return 'MusicPlayer_openWithSongCode';
  }
}

// @ts-ignore
export class IMusicContentCenterImpl implements IMusicContentCenter {
  initialize(configuration: MusicContentCenterConfiguration): number {
    const apiType = this.getApiTypeFromInitialize(configuration);
    const jsonParams = {
      configuration: configuration,
      toJSON: () => {
        return {
          configuration: configuration,
        };
      },
    };
    const jsonResults = callIrisApi.call(this, apiType, jsonParams);
    return jsonResults.result;
  }

  protected getApiTypeFromInitialize(
    configuration: MusicContentCenterConfiguration
  ): string {
    return 'MusicContentCenter_initialize';
  }

  renewToken(token: string): number {
    const apiType = this.getApiTypeFromRenewToken(token);
    const jsonParams = {
      token: token,
      toJSON: () => {
        return {
          token: token,
        };
      },
    };
    const jsonResults = callIrisApi.call(this, apiType, jsonParams);
    return jsonResults.result;
  }

  protected getApiTypeFromRenewToken(token: string): string {
    return 'MusicContentCenter_renewToken';
  }

  release(): void {
    const apiType = this.getApiTypeFromRelease();
    const jsonParams = {};
    callIrisApi.call(this, apiType, jsonParams);
  }

  protected getApiTypeFromRelease(): string {
    return 'MusicContentCenter_release';
  }

  registerEventHandler(eventHandler: IMusicContentCenterEventHandler): number {
    const apiType = this.getApiTypeFromRegisterEventHandler(eventHandler);
    const jsonParams = {
      eventHandler: eventHandler,
      toJSON: () => {
        return {};
      },
    };
    const jsonResults = callIrisApi.call(this, apiType, jsonParams);
    return jsonResults.result;
  }

  protected getApiTypeFromRegisterEventHandler(
    eventHandler: IMusicContentCenterEventHandler
  ): string {
    return 'MusicContentCenter_registerEventHandler';
  }

  unregisterEventHandler(): number {
    const apiType = this.getApiTypeFromUnregisterEventHandler();
    const jsonParams = {};
    const jsonResults = callIrisApi.call(this, apiType, jsonParams);
    return jsonResults.result;
  }

  protected getApiTypeFromUnregisterEventHandler(): string {
    return 'MusicContentCenter_unregisterEventHandler';
  }

  createMusicPlayer(): IMusicPlayer {
    const apiType = this.getApiTypeFromCreateMusicPlayer();
    const jsonParams = {};
    const jsonResults = callIrisApi.call(this, apiType, jsonParams);
    return jsonResults.result;
  }

  protected getApiTypeFromCreateMusicPlayer(): string {
    return 'MusicContentCenter_createMusicPlayer';
  }

  getMusicCharts(): string {
    const apiType = this.getApiTypeFromGetMusicCharts();
    const jsonParams = {};
    const jsonResults = callIrisApi.call(this, apiType, jsonParams);
    const requestId = jsonResults.requestId;
    return requestId;
  }

  protected getApiTypeFromGetMusicCharts(): string {
    return 'MusicContentCenter_getMusicCharts';
  }

  getMusicCollectionByMusicChartId(
    musicChartId: number,
    page: number,
    pageSize: number,
    jsonOption?: string
  ): string {
    const apiType = this.getApiTypeFromGetMusicCollectionByMusicChartId(
      musicChartId,
      page,
      pageSize,
      jsonOption
    );
    const jsonParams = {
      musicChartId: musicChartId,
      page: page,
      pageSize: pageSize,
      jsonOption: jsonOption,
      toJSON: () => {
        return {
          musicChartId: musicChartId,
          page: page,
          pageSize: pageSize,
          jsonOption: jsonOption,
        };
      },
    };
    const jsonResults = callIrisApi.call(this, apiType, jsonParams);
    const requestId = jsonResults.requestId;
    return requestId;
  }

  protected getApiTypeFromGetMusicCollectionByMusicChartId(
    musicChartId: number,
    page: number,
    pageSize: number,
    jsonOption?: string
  ): string {
    return 'MusicContentCenter_getMusicCollectionByMusicChartId';
  }

  searchMusic(
    keyWord: string,
    page: number,
    pageSize: number,
    jsonOption?: string
  ): string {
    const apiType = this.getApiTypeFromSearchMusic(
      keyWord,
      page,
      pageSize,
      jsonOption
    );
    const jsonParams = {
      keyWord: keyWord,
      page: page,
      pageSize: pageSize,
      jsonOption: jsonOption,
      toJSON: () => {
        return {
          keyWord: keyWord,
          page: page,
          pageSize: pageSize,
          jsonOption: jsonOption,
        };
      },
    };
    const jsonResults = callIrisApi.call(this, apiType, jsonParams);
    const requestId = jsonResults.requestId;
    return requestId;
  }

  protected getApiTypeFromSearchMusic(
    keyWord: string,
    page: number,
    pageSize: number,
    jsonOption?: string
  ): string {
    return 'MusicContentCenter_searchMusic';
  }

  preload(songCode: number): string {
    const apiType = this.getApiTypeFromPreload(songCode);
    const jsonParams = {
      songCode: songCode,
      toJSON: () => {
        return {
          songCode: songCode,
        };
      },
    };
    const jsonResults = callIrisApi.call(this, apiType, jsonParams);
    const requestId = jsonResults.requestId;
    return requestId;
  }

  protected getApiTypeFromPreload(songCode: number): string {
    return 'MusicContentCenter_preload';
  }

  removeCache(songCode: number): number {
    const apiType = this.getApiTypeFromRemoveCache(songCode);
    const jsonParams = {
      songCode: songCode,
      toJSON: () => {
        return {
          songCode: songCode,
        };
      },
    };
    const jsonResults = callIrisApi.call(this, apiType, jsonParams);
    return jsonResults.result;
  }

  protected getApiTypeFromRemoveCache(songCode: number): string {
    return 'MusicContentCenter_removeCache';
  }

  getCaches(): { cacheInfo: MusicCacheInfo[]; cacheInfoSize: number } {
    const apiType = this.getApiTypeFromGetCaches();
    const jsonParams = {};
    const jsonResults = callIrisApi.call(this, apiType, jsonParams);
    const cacheInfo = jsonResults.cacheInfo;
    const cacheInfoSize = jsonResults.cacheInfoSize;
    return {
      cacheInfo,
      cacheInfoSize,
    };
  }

  protected getApiTypeFromGetCaches(): string {
    return 'MusicContentCenter_getCaches';
  }

  isPreloaded(songCode: number): boolean {
    const apiType = this.getApiTypeFromIsPreloaded(songCode);
    const jsonParams = {
      songCode: songCode,
      toJSON: () => {
        return {
          songCode: songCode,
        };
      },
    };
    const jsonResults = callIrisApi.call(this, apiType, jsonParams);
    return jsonResults.result;
  }

  protected getApiTypeFromIsPreloaded(songCode: number): string {
    return 'MusicContentCenter_isPreloaded';
  }

  getLyric(songCode: number, lyricType: number = 0): string {
    const apiType = this.getApiTypeFromGetLyric(songCode, lyricType);
    const jsonParams = {
      songCode: songCode,
      LyricType: lyricType,
      toJSON: () => {
        return {
          songCode: songCode,
          LyricType: lyricType,
        };
      },
    };
    const jsonResults = callIrisApi.call(this, apiType, jsonParams);
    const requestId = jsonResults.requestId;
    return requestId;
  }

  protected getApiTypeFromGetLyric(
    songCode: number,
    lyricType: number = 0
  ): string {
    return 'MusicContentCenter_getLyric';
  }

  getSongSimpleInfo(songCode: number): string {
    const apiType = this.getApiTypeFromGetSongSimpleInfo(songCode);
    const jsonParams = {
      songCode: songCode,
      toJSON: () => {
        return {
          songCode: songCode,
        };
      },
    };
    const jsonResults = callIrisApi.call(this, apiType, jsonParams);
    const requestId = jsonResults.requestId;
    return requestId;
  }

  protected getApiTypeFromGetSongSimpleInfo(songCode: number): string {
    return 'MusicContentCenter_getSongSimpleInfo';
  }

  getInternalSongCode(songCode: number, jsonOption: string): number {
    const apiType = this.getApiTypeFromGetInternalSongCode(
      songCode,
      jsonOption
    );
    const jsonParams = {
      songCode: songCode,
      jsonOption: jsonOption,
      toJSON: () => {
        return {
          songCode: songCode,
          jsonOption: jsonOption,
        };
      },
    };
    const jsonResults = callIrisApi.call(this, apiType, jsonParams);
    const internalSongCode = jsonResults.internalSongCode;
    return internalSongCode;
  }

  protected getApiTypeFromGetInternalSongCode(
    songCode: number,
    jsonOption: string
  ): string {
    return 'MusicContentCenter_getInternalSongCode';
  }
}

import { callIrisApi } from '../internal/IrisApiEngine';
