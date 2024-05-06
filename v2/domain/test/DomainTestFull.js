"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainTestFull = exports.isDomainTestFull = void 0;
var throwAssertError_1 = require("../../_helpers/lib/throwAssertError");
var DomainTestProperties_1 = require("./DomainTestProperties");
var DomainTest_1 = require("./DomainTest");
var isDomainTestFull = function (data, partial) {
    if (partial === void 0) { partial = false; }
    if (typeof data !== 'object' || data === null) {
        return false;
    }
    if (!(0, DomainTestProperties_1.isDomainTestProperties)(data.properties, partial) ||
        !(0, DomainTest_1.isDomainTest)(data, partial)) {
        return false;
    }
    return true;
};
exports.isDomainTestFull = isDomainTestFull;
var assertDomainTestFull = function (data, variableName, typeName, partial) {
    if (partial === void 0) { partial = false; }
    if (!(0, exports.isDomainTestFull)(data, partial)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainTestFull = assertDomainTestFull;
