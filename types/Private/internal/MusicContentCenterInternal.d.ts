import { IMusicContentCenterEventHandler, IMusicPlayer, Music, MusicCollection } from '../ICmviotMusicContentCenter';
import { IMusicContentCenterEvent } from '../extension/ICmviotMusicContentCenterExtension';
import { IMusicContentCenterImpl, MusicCollectionImpl } from '../impl/ICmviotMusicContentCenterImpl';
import { MediaPlayerInternal } from './MediaPlayerInternal';
export declare class MusicContentCenterInternal extends IMusicContentCenterImpl {
    static _event_handlers: IMusicContentCenterEventHandler[];
    _addListenerPreCheck<EventType extends keyof IMusicContentCenterEvent>(eventType: EventType): boolean;
    addListener<EventType extends keyof IMusicContentCenterEvent>(eventType: EventType, listener: IMusicContentCenterEvent[EventType]): void;
    removeListener<EventType extends keyof IMusicContentCenterEvent>(eventType: EventType, listener?: IMusicContentCenterEvent[EventType]): void;
    removeAllListeners<EventType extends keyof IMusicContentCenterEvent>(eventType?: EventType): void;
    registerEventHandler(eventHandler: IMusicContentCenterEventHandler): number;
    unregisterEventHandler(): number;
    release(): void;
    createMusicPlayer(): IMusicPlayer;
    protected getApiTypeFromPreload(songCode: number): string;
}
export declare class MusicPlayerInternal extends MediaPlayerInternal implements IMusicPlayer {
    private readonly _musicPlayer;
    constructor(mediaPlayerId: number);
    openWithSongCode(songCode: number, startPos?: number): number;
}
export declare class MusicCollectionInternal extends MusicCollectionImpl {
    private readonly _musicCollection;
    constructor(musicCollection: MusicCollection);
    getCount(): number;
    getMusic(index: number): Music;
    getPage(): number;
    getPageSize(): number;
    getTotal(): number;
}
//# sourceMappingURL=MusicContentCenterInternal.d.ts.map