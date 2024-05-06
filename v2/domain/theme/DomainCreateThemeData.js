"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainCreateThemeData = exports.isDomainCreateThemeData = void 0;
var DomainTheme_1 = require("./DomainTheme");
var throwAssertError_1 = require("../../_helpers/lib/throwAssertError");
var validType_1 = require("../../_helpers/lib/validType");
var isDomainCreateThemeData = function (data, partial) {
    if (partial === void 0) { partial = false; }
    if (typeof data !== 'object' || data === null) {
        return false;
    }
    if (!(0, DomainTheme_1.isDomainTheme)(data, true) ||
        !(0, validType_1.validType)(data['publicId'], 'string', partial) ||
        !(0, validType_1.validType)(data['title'], 'string', partial)) {
        return false;
    }
    return true;
};
exports.isDomainCreateThemeData = isDomainCreateThemeData;
var assertDomainCreateThemeData = function (data, variableName, typeName, partial) {
    if (partial === void 0) { partial = false; }
    if (!(0, exports.isDomainCreateThemeData)(data, partial)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainCreateThemeData = assertDomainCreateThemeData;
