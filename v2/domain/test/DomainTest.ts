import { TypeGuard } from '../../_helpers/types/TypeGuard';
import { TypeAssert } from '../../_helpers/types/TypeAssert';
import { throwAssertError } from '../../_helpers/lib/throwAssertError';
import { validType } from '../../_helpers/lib/validType';


export type DomainTest = {
    id: string;
    themeId: string;
    title: string;
    additional: string;
}

export const isDomainTest: TypeGuard<DomainTest> = function (data: any, partial: boolean = false): data is DomainTest {
    if (typeof data !== 'object' || data === null) {
        return false;
    }

    if (
        !validType(data['id'], 'string', partial) ||
        !validType(data['themeId'], 'string', partial) ||
        !validType(data['title'], 'string', partial) ||
        !validType(data['additional'], 'string', partial)
    ) {
        return false;
    }

    return true;
};

export const assertDomainTest: TypeAssert<DomainTest> = function (data: any, variableName: string, typeName: string, partial: boolean = false) {
    if (!isDomainTest(data, partial)) {
        throwAssertError(variableName, typeName);
    }
};