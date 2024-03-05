import { RtcConnection } from '../ICmviotRtcEngineEx';
import { IBaseSpatialAudioEngine, ILocalSpatialAudioEngine, RemoteVoicePositionInfo, SpatialAudioZone } from '../ICmviotSpatialAudio';
export declare class IBaseSpatialAudioEngineImpl implements IBaseSpatialAudioEngine {
    release(): void;
    protected getApiTypeFromRelease(): string;
    setMaxAudioRecvCount(maxCount: number): number;
    protected getApiTypeFromSetMaxAudioRecvCount(maxCount: number): string;
    setAudioRecvRange(range: number): number;
    protected getApiTypeFromSetAudioRecvRange(range: number): string;
    setDistanceUnit(unit: number): number;
    protected getApiTypeFromSetDistanceUnit(unit: number): string;
    updateSelfPosition(position: number[], axisForward: number[], axisRight: number[], axisUp: number[]): number;
    protected getApiTypeFromUpdateSelfPosition(position: number[], axisForward: number[], axisRight: number[], axisUp: number[]): string;
    updateSelfPositionEx(position: number[], axisForward: number[], axisRight: number[], axisUp: number[], connection: RtcConnection): number;
    protected getApiTypeFromUpdateSelfPositionEx(position: number[], axisForward: number[], axisRight: number[], axisUp: number[], connection: RtcConnection): string;
    updatePlayerPositionInfo(playerId: number, positionInfo: RemoteVoicePositionInfo): number;
    protected getApiTypeFromUpdatePlayerPositionInfo(playerId: number, positionInfo: RemoteVoicePositionInfo): string;
    setParameters(params: string): number;
    protected getApiTypeFromSetParameters(params: string): string;
    muteLocalAudioStream(mute: boolean): number;
    protected getApiTypeFromMuteLocalAudioStream(mute: boolean): string;
    muteAllRemoteAudioStreams(mute: boolean): number;
    protected getApiTypeFromMuteAllRemoteAudioStreams(mute: boolean): string;
    setZones(zones: SpatialAudioZone[], zoneCount: number): number;
    protected getApiTypeFromSetZones(zones: SpatialAudioZone[], zoneCount: number): string;
    setPlayerAttenuation(playerId: number, attenuation: number, forceSet: boolean): number;
    protected getApiTypeFromSetPlayerAttenuation(playerId: number, attenuation: number, forceSet: boolean): string;
    muteRemoteAudioStream(uid: number, mute: boolean): number;
    protected getApiTypeFromMuteRemoteAudioStream(uid: number, mute: boolean): string;
}
export declare class ILocalSpatialAudioEngineImpl extends IBaseSpatialAudioEngineImpl implements ILocalSpatialAudioEngine {
    initialize(): number;
    protected getApiTypeFromInitialize(): string;
    updateRemotePosition(uid: number, posInfo: RemoteVoicePositionInfo): number;
    protected getApiTypeFromUpdateRemotePosition(uid: number, posInfo: RemoteVoicePositionInfo): string;
    updateRemotePositionEx(uid: number, posInfo: RemoteVoicePositionInfo, connection: RtcConnection): number;
    protected getApiTypeFromUpdateRemotePositionEx(uid: number, posInfo: RemoteVoicePositionInfo, connection: RtcConnection): string;
    removeRemotePosition(uid: number): number;
    protected getApiTypeFromRemoveRemotePosition(uid: number): string;
    removeRemotePositionEx(uid: number, connection: RtcConnection): number;
    protected getApiTypeFromRemoveRemotePositionEx(uid: number, connection: RtcConnection): string;
    clearRemotePositions(): number;
    protected getApiTypeFromClearRemotePositions(): string;
    clearRemotePositionsEx(connection: RtcConnection): number;
    protected getApiTypeFromClearRemotePositionsEx(connection: RtcConnection): string;
    setRemoteAudioAttenuation(uid: number, attenuation: number, forceSet: boolean): number;
    protected getApiTypeFromSetRemoteAudioAttenuation(uid: number, attenuation: number, forceSet: boolean): string;
}
//# sourceMappingURL=ICmviotSpatialAudioImpl.d.ts.map