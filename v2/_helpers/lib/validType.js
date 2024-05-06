"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validType = void 0;
var validType = function (value, type, partial) {
    return (partial && value === undefined) || typeof value === type;
};
exports.validType = validType;
