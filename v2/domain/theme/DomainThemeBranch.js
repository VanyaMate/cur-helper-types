"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainThemeBranch = exports.isDomainThemeBranch = void 0;
var DomainThemeShort_1 = require("./DomainThemeShort");
var throwAssertError_1 = require("../../_helpers/lib/throwAssertError");
var isDomainThemeBranch = function (data, partial) {
    if (partial === void 0) { partial = false; }
    if (data === null) {
        return true;
    }
    if (typeof data !== 'object') {
        return false;
    }
    if (!(0, DomainThemeShort_1.isDomainThemeShort)(data, partial)) {
        return false;
    }
    return true;
};
exports.isDomainThemeBranch = isDomainThemeBranch;
var assertDomainThemeBranch = function (data, variableName, typeName, partial) {
    if (partial === void 0) { partial = false; }
    if (!(0, exports.isDomainThemeBranch)(data, partial)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainThemeBranch = assertDomainThemeBranch;
