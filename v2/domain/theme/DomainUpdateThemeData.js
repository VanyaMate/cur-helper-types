"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainUpdateThemeData = exports.isDomainUpdateThemeData = void 0;
var DomainThemeFull_1 = require("./DomainThemeFull");
var throwAssertError_1 = require("../../_helpers/lib/throwAssertError");
var isDomainUpdateThemeData = function (data, partial) {
    if (partial === void 0) { partial = true; }
    if (!(0, DomainThemeFull_1.isDomainThemeFull)(data, partial)) {
        return false;
    }
    return true;
};
exports.isDomainUpdateThemeData = isDomainUpdateThemeData;
var assertDomainUpdateThemeData = function (data, variableName, typeName, partial) {
    if (partial === void 0) { partial = true; }
    if (!(0, exports.isDomainUpdateThemeData)(data, partial)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainUpdateThemeData = assertDomainUpdateThemeData;
