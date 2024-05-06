"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainCommonError = exports.isDomainCommonError = void 0;
var throwAssertError_1 = require("../../_helpers/lib/throwAssertError");
var isDomainCommonError = function (data) {
    if (typeof data !== 'object' || data === null) {
        return false;
    }
    if (typeof data.code !== 'number' ||
        !(Array.isArray(data.messages) &&
            data.messages.every(function (message) { return typeof message === 'string'; }))) {
        return false;
    }
    return true;
};
exports.isDomainCommonError = isDomainCommonError;
var assertDomainCommonError = function (data, variableName, typeName) {
    if (!(0, exports.isDomainCommonError)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainCommonError = assertDomainCommonError;
