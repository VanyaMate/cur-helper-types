"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainThemeFull = exports.isDomainThemeFull = void 0;
var throwAssertError_1 = require("../../_helpers/lib/throwAssertError");
var DomainTheme_1 = require("./DomainTheme");
var validType_1 = require("../../_helpers/lib/validType");
var isDomainThemeFull = function (data, partial) {
    if (partial === void 0) { partial = false; }
    if (typeof data !== 'object' || data === null) {
        return false;
    }
    if (!(0, validType_1.validType)(data['description'], 'string', partial) ||
        !(0, validType_1.validType)(data['body'], 'string', partial) ||
        !(0, validType_1.validType)(data['url'], 'string', partial) ||
        !(0, DomainTheme_1.isDomainTheme)(data, partial)) {
        return false;
    }
    return true;
};
exports.isDomainThemeFull = isDomainThemeFull;
var assertDomainThemeFull = function (data, variableName, typeName, partial) {
    if (partial === void 0) { partial = false; }
    if (!(0, exports.isDomainThemeFull)(data, partial)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainThemeFull = assertDomainThemeFull;
