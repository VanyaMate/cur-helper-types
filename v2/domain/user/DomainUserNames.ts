import { TypeGuard } from '../../_helpers/types/TypeGuard';
import { TypeAssert } from '../../_helpers/types/TypeAssert';
import { throwAssertError } from '../../_helpers/lib/throwAssertError';
import { validType } from '../../_helpers/lib/validType';


export type DomainUserNames = {
    firstName: string;
    lastName: string;
}

export const isDomainUserNames: TypeGuard<DomainUserNames> = function (data: any, partial: boolean = false): data is DomainUserNames {
    if (typeof data !== 'object' || data === null) {
        return false;
    }

    if (
        !validType(data['firstName'], 'string', partial) ||
        !validType(data['lastName'], 'string', partial)
    ) {
        return false;
    }

    return true;
};

export const assertDomainUserNames: TypeAssert<DomainUserNames> = function (data: any, variableName: string, typeName: string, partial: boolean = false) {
    if (!isDomainUserNames(data, partial)) {
        throwAssertError(variableName, typeName);
    }
};