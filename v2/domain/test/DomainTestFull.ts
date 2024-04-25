import { TypeGuard } from '../../_helpers/types/TypeGuard';
import { TypeAssert } from '../../_helpers/types/TypeAssert';
import { throwAssertError } from '../../_helpers/lib/throwAssertError';
import { DomainTestProperties, isDomainTestProperties } from './DomainTestProperties';
import { DomainTest, isDomainTest } from './DomainTest';


export type DomainTestFull =
    {
        properties: DomainTestProperties;
    }
    & DomainTest;

export const isDomainTestFull: TypeGuard<DomainTestFull> = function (data: any, partial: boolean = false): data is DomainTestFull {
    if (typeof data !== 'object' || data === null) {
        return false;
    }

    if (
        !isDomainTestProperties(data.properties, partial) ||
        !isDomainTest(data, partial)
    ) {
        return false;
    }

    return true;
};

export const assertDomainTestFull: TypeAssert<DomainTestFull> = function (data: any, variableName: string, typeName: string, partial: boolean = false) {
    if (!isDomainTestFull(data, partial)) {
        throwAssertError(variableName, typeName);
    }
};