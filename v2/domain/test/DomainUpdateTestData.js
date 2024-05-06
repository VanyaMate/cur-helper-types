"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainUpdateTestData = exports.isDomainUpdateTestData = void 0;
var throwAssertError_1 = require("../../_helpers/lib/throwAssertError");
var DomainTestFull_1 = require("./DomainTestFull");
var isDomainUpdateTestData = function (data, partial) {
    if (partial === void 0) { partial = true; }
    if (!(0, DomainTestFull_1.isDomainTestFull)(data, partial)) {
        return false;
    }
    return true;
};
exports.isDomainUpdateTestData = isDomainUpdateTestData;
var assertDomainUpdateTestData = function (data, variableName, typeName, partial) {
    if (partial === void 0) { partial = true; }
    if (!(0, exports.isDomainUpdateTestData)(data, partial)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainUpdateTestData = assertDomainUpdateTestData;
