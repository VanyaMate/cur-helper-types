"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainUserContacts = exports.isDomainUserContacts = void 0;
var throwAssertError_1 = require("../../_helpers/lib/throwAssertError");
var validType_1 = require("../../_helpers/lib/validType");
var isDomainUserContacts = function (data, partial) {
    if (partial === void 0) { partial = false; }
    if (typeof data !== 'object' || data === null) {
        return false;
    }
    if (!(0, validType_1.validType)(data['email'], 'string', partial) ||
        !(0, validType_1.validType)(data['phoneNumber'], 'string', partial)) {
        return false;
    }
    return true;
};
exports.isDomainUserContacts = isDomainUserContacts;
var assertDomainUserContacts = function (data, variableName, typeName, partial) {
    if (partial === void 0) { partial = false; }
    if (!(0, exports.isDomainUserContacts)(data, partial)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainUserContacts = assertDomainUserContacts;
