import './extension/ICmviotRhythmPlayerExtension';
export declare enum RhythmPlayerStateType {
    RhythmPlayerStateIdle = 810,
    RhythmPlayerStateOpening = 811,
    RhythmPlayerStateDecoding = 812,
    RhythmPlayerStatePlaying = 813,
    RhythmPlayerStateFailed = 814
}
export declare enum RhythmPlayerErrorType {
    RhythmPlayerErrorOk = 0,
    RhythmPlayerErrorFailed = 1,
    RhythmPlayerErrorCanNotOpen = 801,
    RhythmPlayerErrorCanNotPlay = 802,
    RhythmPlayerErrorFileOverDurationLimit = 803
}
export declare class CmviotRhythmPlayerConfig {
    beatsPerMeasure?: number;
    beatsPerMinute?: number;
}
//# sourceMappingURL=ICmviotRhythmPlayer.d.ts.map