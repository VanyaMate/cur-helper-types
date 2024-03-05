"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorCode = void 0;
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["NOT_FOUND"] = 10000] = "NOT_FOUND";
    ErrorCode[ErrorCode["NO_VALID_DATA"] = 20000] = "NO_VALID_DATA";
    ErrorCode[ErrorCode["NO_ACCESS"] = 30000] = "NO_ACCESS";
})(ErrorCode || (exports.ErrorCode = ErrorCode = {}));
