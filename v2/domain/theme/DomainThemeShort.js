"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainThemeShort = exports.isDomainThemeShort = void 0;
var throwAssertError_1 = require("../../_helpers/lib/throwAssertError");
var validType_1 = require("../../_helpers/lib/validType");
var isDomainThemeShort = function (data, partial) {
    if (partial === void 0) { partial = false; }
    if (typeof data !== 'object' || data === null) {
        return false;
    }
    if (!(0, validType_1.validType)(data['id'], 'string', partial) ||
        !(0, validType_1.validType)(data['publicId'], 'string', partial) ||
        !(0, validType_1.validType)(data['title'], 'string', partial) ||
        !(0, validType_1.validType)(data['url'], 'string', partial) ||
        !(0, validType_1.validType)(data['additional'], 'string', partial) ||
        !(0, validType_1.validType)(data['description'], 'string', partial)) {
        return false;
    }
    return true;
};
exports.isDomainThemeShort = isDomainThemeShort;
var assertDomainThemeShort = function (data, variableName, typeName, partial) {
    if (partial === void 0) { partial = false; }
    if (!(0, exports.isDomainThemeShort)(data, partial)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainThemeShort = assertDomainThemeShort;
