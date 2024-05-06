"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainUserNames = exports.isDomainUserNames = void 0;
var throwAssertError_1 = require("../../_helpers/lib/throwAssertError");
var validType_1 = require("../../_helpers/lib/validType");
var isDomainUserNames = function (data, partial) {
    if (partial === void 0) { partial = false; }
    if (typeof data !== 'object' || data === null) {
        return false;
    }
    if (!(0, validType_1.validType)(data['firstName'], 'string', partial) ||
        !(0, validType_1.validType)(data['lastName'], 'string', partial)) {
        return false;
    }
    return true;
};
exports.isDomainUserNames = isDomainUserNames;
var assertDomainUserNames = function (data, variableName, typeName, partial) {
    if (partial === void 0) { partial = false; }
    if (!(0, exports.isDomainUserNames)(data, partial)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainUserNames = assertDomainUserNames;
