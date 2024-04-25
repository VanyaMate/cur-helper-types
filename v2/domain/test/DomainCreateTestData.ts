import { TypeGuard } from '../../_helpers/types/TypeGuard';
import { TypeAssert } from '../../_helpers/types/TypeAssert';
import { throwAssertError } from '../../_helpers/lib/throwAssertError';
import { Create } from '../../_helpers/types/Create';
import { validType } from '../../_helpers/lib/validType';
import { DomainTest } from './DomainTest';


export type DomainCreateTestData = Create<Omit<DomainTest, 'id'>, 'themeId' | 'title'>;

export const isDomainCreateTestData: TypeGuard<DomainCreateTestData> = function (data: any, partial: boolean = false): data is DomainCreateTestData {
    if (typeof data !== 'object' || data === null) {
        return false;
    }

    if (
        !validType(data['themeId'], 'string', partial) ||
        !validType(data['title'], 'string', partial) ||
        !validType(data['additional'], 'string', true)
    ) {
        return false;
    }

    return true;
};

export const assertDomainCreateTestData: TypeAssert<DomainCreateTestData> = function (data: any, variableName: string, typeName: string, partial: boolean = false) {
    if (!isDomainCreateTestData(data, partial)) {
        throwAssertError(variableName, typeName);
    }
};