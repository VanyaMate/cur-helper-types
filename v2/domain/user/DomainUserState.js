"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainUserState = exports.isDomainUserState = void 0;
var throwAssertError_1 = require("../../_helpers/lib/throwAssertError");
var validType_1 = require("../../_helpers/lib/validType");
var isDomainUserState = function (data, partial) {
    if (partial === void 0) { partial = false; }
    if (typeof data !== 'object' || data === null) {
        return false;
    }
    if (!(0, validType_1.validType)(data['verified'], 'boolean', partial)) {
        return false;
    }
    return true;
};
exports.isDomainUserState = isDomainUserState;
var assertDomainUserState = function (data, variableName, typeName, partial) {
    if (partial === void 0) { partial = false; }
    if (!(0, exports.isDomainUserState)(data, partial)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainUserState = assertDomainUserState;
