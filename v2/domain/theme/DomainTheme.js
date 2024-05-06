"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainTheme = exports.isDomainTheme = void 0;
var throwAssertError_1 = require("../../_helpers/lib/throwAssertError");
var validType_1 = require("../../_helpers/lib/validType");
var isDomainTheme = function (data, partial) {
    if (partial === void 0) { partial = false; }
    if (typeof data !== 'object' || data === null) {
        return false;
    }
    if (!(0, validType_1.validType)(data['id'], 'string', partial) ||
        !(0, validType_1.validType)(data['publicId'], 'string', partial) ||
        !(0, validType_1.validType)(data['title'], 'string', partial) ||
        !(0, validType_1.validType)(data['additional'], 'string', partial)) {
        return false;
    }
    return true;
};
exports.isDomainTheme = isDomainTheme;
var assertDomainTheme = function (data, variableName, typeName, partial) {
    if (partial === void 0) { partial = false; }
    if (!(0, exports.isDomainTheme)(data, partial)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainTheme = assertDomainTheme;
