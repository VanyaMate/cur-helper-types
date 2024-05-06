"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainUser = exports.isDomainUser = void 0;
var throwAssertError_1 = require("../../_helpers/lib/throwAssertError");
var validType_1 = require("../../_helpers/lib/validType");
var isDomainUser = function (data, partial) {
    if (partial === void 0) { partial = false; }
    if (typeof data !== 'object' || data === null) {
        return false;
    }
    if (!(0, validType_1.validType)(data['id'], 'string', partial) ||
        !(0, validType_1.validType)(data['login'], 'string', partial) ||
        !(0, validType_1.validType)(data['avatarUrl'], 'string', partial)) {
        return false;
    }
    return true;
};
exports.isDomainUser = isDomainUser;
var assertDomainUser = function (data, variableName, typeName, partial) {
    if (partial === void 0) { partial = false; }
    if (!(0, exports.isDomainUser)(data, partial)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainUser = assertDomainUser;
