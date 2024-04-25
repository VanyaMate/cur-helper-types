import { TypeGuard } from '../../_helpers/types/TypeGuard';
import { TypeAssert } from '../../_helpers/types/TypeAssert';
import { throwAssertError } from '../../_helpers/lib/throwAssertError';
import { validType } from '../../_helpers/lib/validType';


export type DomainTheme = {
    id: string;
    publicId: string;
    title: string;
    additional: string;
}

export const isDomainTheme: TypeGuard<DomainTheme> = function (data: any, partial: boolean = false): data is DomainTheme {
    if (typeof data !== 'object' || data === null) {
        return false;
    }

    if (
        !validType(data['id'], 'string', partial) ||
        !validType(data['publicId'], 'string', partial) ||
        !validType(data['title'], 'string', partial) ||
        !validType(data['additional'], 'string', partial)
    ) {
        return false;
    }

    return true;
};

export const assertDomainTheme: TypeAssert<DomainTheme> = function (data: any, variableName: string, typeName: string, partial: boolean = false) {
    if (!isDomainTheme(data, partial)) {
        throwAssertError(variableName, typeName);
    }
};