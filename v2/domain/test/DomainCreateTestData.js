"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainCreateTestData = exports.isDomainCreateTestData = void 0;
var throwAssertError_1 = require("../../_helpers/lib/throwAssertError");
var validType_1 = require("../../_helpers/lib/validType");
var isDomainCreateTestData = function (data, partial) {
    if (partial === void 0) { partial = false; }
    if (typeof data !== 'object' || data === null) {
        return false;
    }
    if (!(0, validType_1.validType)(data['themeId'], 'string', partial) ||
        !(0, validType_1.validType)(data['title'], 'string', partial) ||
        !(0, validType_1.validType)(data['additional'], 'string', true)) {
        return false;
    }
    return true;
};
exports.isDomainCreateTestData = isDomainCreateTestData;
var assertDomainCreateTestData = function (data, variableName, typeName, partial) {
    if (partial === void 0) { partial = false; }
    if (!(0, exports.isDomainCreateTestData)(data, partial)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainCreateTestData = assertDomainCreateTestData;
