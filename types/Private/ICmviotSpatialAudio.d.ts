import './extension/ICmviotSpatialAudioExtension';
import { RtcConnection } from './ICmviotRtcEngineEx';
export declare class RemoteVoicePositionInfo {
    position?: number[];
    forward?: number[];
}
export declare class SpatialAudioZone {
    zoneSetId?: number;
    position?: number[];
    forward?: number[];
    right?: number[];
    up?: number[];
    forwardLength?: number;
    rightLength?: number;
    upLength?: number;
    audioAttenuation?: number;
}
export declare abstract class IBaseSpatialAudioEngine {
    abstract release(): void;
    abstract setMaxAudioRecvCount(maxCount: number): number;
    abstract setAudioRecvRange(range: number): number;
    abstract setDistanceUnit(unit: number): number;
    abstract updateSelfPosition(position: number[], axisForward: number[], axisRight: number[], axisUp: number[]): number;
    abstract updateSelfPositionEx(position: number[], axisForward: number[], axisRight: number[], axisUp: number[], connection: RtcConnection): number;
    abstract updatePlayerPositionInfo(playerId: number, positionInfo: RemoteVoicePositionInfo): number;
    abstract setParameters(params: string): number;
    abstract muteLocalAudioStream(mute: boolean): number;
    abstract muteAllRemoteAudioStreams(mute: boolean): number;
    abstract setZones(zones: SpatialAudioZone[], zoneCount: number): number;
    abstract setPlayerAttenuation(playerId: number, attenuation: number, forceSet: boolean): number;
    abstract muteRemoteAudioStream(uid: number, mute: boolean): number;
}
export declare abstract class ILocalSpatialAudioEngine extends IBaseSpatialAudioEngine {
    abstract initialize(): number;
    abstract updateRemotePosition(uid: number, posInfo: RemoteVoicePositionInfo): number;
    abstract updateRemotePositionEx(uid: number, posInfo: RemoteVoicePositionInfo, connection: RtcConnection): number;
    abstract removeRemotePosition(uid: number): number;
    abstract removeRemotePositionEx(uid: number, connection: RtcConnection): number;
    abstract clearRemotePositions(): number;
    abstract clearRemotePositionsEx(connection: RtcConnection): number;
    abstract setRemoteAudioAttenuation(uid: number, attenuation: number, forceSet: boolean): number;
}
//# sourceMappingURL=ICmviotSpatialAudio.d.ts.map