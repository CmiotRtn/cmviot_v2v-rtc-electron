import './extension/ICmviotMediaPlayerSourceExtension';
import { MediaPlayerError, MediaPlayerEvent, MediaPlayerState, PlayerPreloadEvent, PlayerUpdatedInfo, SrcInfo } from './CmviotMediaPlayerTypes';
export interface IMediaPlayerSourceObserver {
    onPlayerSourceStateChanged?(state: MediaPlayerState, ec: MediaPlayerError): void;
    onPositionChanged?(positionMs: number): void;
    onPlayerEvent?(eventCode: MediaPlayerEvent, elapsedTime: number, message: string): void;
    onMetaData?(data: Uint8Array, length: number): void;
    onPlayBufferUpdated?(playCachedBuffer: number): void;
    onPreloadEvent?(src: string, event: PlayerPreloadEvent): void;
    onCompleted?(): void;
    onCmviotCDNTokenWillExpire?(): void;
    onPlayerSrcInfoChanged?(from: SrcInfo, to: SrcInfo): void;
    onPlayerInfoUpdated?(info: PlayerUpdatedInfo): void;
    onAudioVolumeIndication?(volume: number): void;
}
//# sourceMappingURL=ICmviotMediaPlayerSource.d.ts.map