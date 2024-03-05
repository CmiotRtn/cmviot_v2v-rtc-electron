import { RenderModeType, VideoSourceType } from '../Private/CmviotMediaBase';
declare global {
    /**
     * Attributes of the Cmviot custom element.
     * You can use this custom element as follows:<cmviot-view video-source-type="{VideoSourceType.VideoSourceCamera}" channel-id="" uid="{0}"></cmviot-view>
     */
    interface CmviotView {
        /**
         * The type of the video source. See VideoSourceType .
         */
        'video-source-type': VideoSourceType;
        /**
         * The ID of the remote user.
         */
        'uid': number;
        /**
         * The channel name. This parameter signifies the channel in which users engage in real-time audio and video interaction. Under the premise of the same App ID, users who fill in the same channel ID enter the same channel for audio and video interaction. The string length must be less than 64 bytes. Supported characters:
         * All lowercase English letters: a to z.
         * All uppercase English letters: A to Z.
         * All numeric characters: 0 to 9.
         * Space
         * "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "<", "= ", ".", ">", "?", "@", "[", "]", "^", "_", "{", "}", "|", "~", ","
         */
        'channel-id': string;
        /**
         * The video display mode.
         */
        'renderer-content-mode': RenderModeType;
        /**
         * Whether to enable mirror mode when rendering video: true: Enable mirror mode.false: Do not enable mirror mode.
         */
        'renderer-mirror': boolean;
        /**
         * The inline style of elements. See style .
         */
        'style': any;
    }
    namespace JSX {
        /**
         * The custom HTML elements defined by Cmviot.
         */
        interface IntrinsicElements {
            /**
             * The name of the custom element, which supports rendering an CmviotView or HTMLElement object.
             */
            'cmviot-view': CmviotView | HTMLElement;
        }
    }
}
export default class CmviotView extends HTMLElement {
    isConnectedCallback: boolean;
    static get observedAttributes(): string[];
    get videoSourceType(): VideoSourceType;
    set videoSourceType(val: VideoSourceType);
    get uid(): number;
    set uid(val: number);
    get channelId(): string;
    set channelId(val: string);
    get renderContentMode(): RenderModeType;
    set renderContentMode(val: RenderModeType);
    get renderMirror(): boolean;
    set renderMirror(val: boolean);
    constructor();
    initializeRender: () => void;
    destroyRender: () => void;
    connectedCallback(): void;
    attributeChangedCallback(attrName: string, oldVal: any, newVal: any): void;
    disconnectedCallback(): void;
}
//# sourceMappingURL=CmviotView.d.ts.map