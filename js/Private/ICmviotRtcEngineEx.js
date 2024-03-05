"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.IRtcEngineEx = exports.RtcConnection = void 0;
require("./extension/ICmviotRtcEngineExExtension");
var ICmviotRtcEngine_1 = require("./ICmviotRtcEngine");
/* class_rtcconnection */
var RtcConnection = /** @class */ (function () {
    function RtcConnection() {
    }
    return RtcConnection;
}());
exports.RtcConnection = RtcConnection;
/* class_irtcengineex */
var IRtcEngineEx = /** @class */ (function (_super) {
    __extends(IRtcEngineEx, _super);
    function IRtcEngineEx() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return IRtcEngineEx;
}(ICmviotRtcEngine_1.IRtcEngine));
exports.IRtcEngineEx = IRtcEngineEx;
