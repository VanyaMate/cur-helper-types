import { TypeGuard } from '../../_helpers/types/TypeGuard';
import { TypeAssert } from '../../_helpers/types/TypeAssert';
import { throwAssertError } from '../../_helpers/lib/throwAssertError';
import { DomainTestFull, isDomainTestFull } from './DomainTestFull';


export type DomainUpdateTestData = Partial<Omit<DomainTestFull, 'id'>>;

export const isDomainUpdateTestData: TypeGuard<DomainUpdateTestData> = function (data: any, partial: boolean = true): data is DomainUpdateTestData {
    if (!isDomainTestFull(data, partial)) {
        return false;
    }

    return true;
};

export const assertDomainUpdateTestData: TypeAssert<DomainUpdateTestData> = function (data: any, variableName: string, typeName: string, partial: boolean = true) {
    if (!isDomainUpdateTestData(data, partial)) {
        throwAssertError(variableName, typeName);
    }
};