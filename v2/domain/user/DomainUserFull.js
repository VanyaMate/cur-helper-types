"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainUserFull = exports.isDomainUserFull = void 0;
var throwAssertError_1 = require("../../_helpers/lib/throwAssertError");
var DomainUser_1 = require("./DomainUser");
var DomainUserContacts_1 = require("./DomainUserContacts");
var DomainUserNames_1 = require("./DomainUserNames");
var DomainUserState_1 = require("./DomainUserState");
var isDomainUserFull = function (data, partial) {
    if (partial === void 0) { partial = false; }
    if (typeof data !== 'object' || data === null) {
        return false;
    }
    if (!(0, DomainUserContacts_1.isDomainUserContacts)(data.contacts, partial) ||
        !(0, DomainUserNames_1.isDomainUserNames)(data.names, partial) ||
        !(0, DomainUserState_1.isDomainUserState)(data.state, partial) ||
        !(0, DomainUser_1.isDomainUser)(data, partial)) {
        return false;
    }
    return true;
};
exports.isDomainUserFull = isDomainUserFull;
var assertDomainUserFull = function (data, variableName, typeName, partial) {
    if (partial === void 0) { partial = false; }
    if (!(0, exports.isDomainUserFull)(data, partial)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainUserFull = assertDomainUserFull;
