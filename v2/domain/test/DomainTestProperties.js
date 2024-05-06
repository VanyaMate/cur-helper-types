"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainTestProperties = exports.isDomainTestProperties = void 0;
var throwAssertError_1 = require("../../_helpers/lib/throwAssertError");
var validType_1 = require("../../_helpers/lib/validType");
var isDomainTestProperties = function (data, partial) {
    if (partial === void 0) { partial = false; }
    if (typeof data !== 'object' || data === null) {
        return false;
    }
    if (!(0, validType_1.validType)(data['timeToPass'], 'number', partial) ||
        !(0, validType_1.validType)(data['questionsAmount'], 'number', partial) ||
        !(0, validType_1.validType)(data['unsatisfactoryScore'], 'number', partial) ||
        !(0, validType_1.validType)(data['satisfactoryScore'], 'number', partial) ||
        !(0, validType_1.validType)(data['perfectScore'], 'number', partial)) {
        return false;
    }
    return true;
};
exports.isDomainTestProperties = isDomainTestProperties;
var assertDomainTestProperties = function (data, variableName, typeName, partial) {
    if (partial === void 0) { partial = false; }
    if (!(0, exports.isDomainTestProperties)(data, partial)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainTestProperties = assertDomainTestProperties;
