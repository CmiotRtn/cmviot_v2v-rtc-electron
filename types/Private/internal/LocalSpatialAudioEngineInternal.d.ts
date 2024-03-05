import { RtcConnection } from '../ICmviotRtcEngineEx';
import { RemoteVoicePositionInfo, SpatialAudioZone } from '../ICmviotSpatialAudio';
import { ILocalSpatialAudioEngineImpl } from '../impl/ICmviotSpatialAudioImpl';
export declare class LocalSpatialAudioEngineInternal extends ILocalSpatialAudioEngineImpl {
    protected getApiTypeFromRelease(): string;
    protected getApiTypeFromSetMaxAudioRecvCount(maxCount: number): string;
    protected getApiTypeFromSetAudioRecvRange(range: number): string;
    protected getApiTypeFromSetDistanceUnit(unit: number): string;
    protected getApiTypeFromUpdateSelfPosition(position: number[], axisForward: number[], axisRight: number[], axisUp: number[]): string;
    protected getApiTypeFromUpdateSelfPositionEx(position: number[], axisForward: number[], axisRight: number[], axisUp: number[], connection: RtcConnection): string;
    protected getApiTypeFromUpdatePlayerPositionInfo(playerId: number, positionInfo: RemoteVoicePositionInfo): string;
    protected getApiTypeFromSetParameters(params: string): string;
    protected getApiTypeFromMuteLocalAudioStream(mute: boolean): string;
    protected getApiTypeFromMuteAllRemoteAudioStreams(mute: boolean): string;
    protected getApiTypeFromSetZones(zones: SpatialAudioZone[], zoneCount: number): string;
    protected getApiTypeFromSetPlayerAttenuation(playerId: number, attenuation: number, forceSet: boolean): string;
    protected getApiTypeFromMuteRemoteAudioStream(uid: number, mute: boolean): string;
}
//# sourceMappingURL=LocalSpatialAudioEngineInternal.d.ts.map