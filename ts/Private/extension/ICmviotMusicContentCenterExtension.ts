import { IMusicContentCenterEventHandler } from '../ICmviotMusicContentCenter';

export type IMusicContentCenterEvent = IMusicContentCenterEventHandler;

declare module '../ICmviotMusicContentCenter' {
  interface IMusicContentCenter {
    _addListenerPreCheck<EventType extends keyof IMusicContentCenterEvent>(
      eventType: EventType
    ): boolean;

    /**
     * @ignore
     */
    addListener<EventType extends keyof IMusicContentCenterEvent>(
      eventType: EventType,
      listener: IMusicContentCenterEvent[EventType]
    ): void;

    /**
     * @ignore
     */
    removeListener<EventType extends keyof IMusicContentCenterEvent>(
      eventType: EventType,
      listener?: IMusicContentCenterEvent[EventType]
    ): void;

    /**
     * @ignore
     */
    removeAllListeners<EventType extends keyof IMusicContentCenterEvent>(
      eventType?: EventType
    ): void;
  }
}
