import { TypeGuard } from '../../_helpers/types/TypeGuard';
import { TypeAssert } from '../../_helpers/types/TypeAssert';
import { throwAssertError } from '../../_helpers/lib/throwAssertError';


export type DomainUserNames = {
    firstName: string;
    lastName: string;
}

export const isDomainUserNames: TypeGuard<DomainUserNames> = function (data: any): data is DomainUserNames {
    if (typeof data !== 'object' || data === null) {
        return false;
    }

    if (
        typeof data['firstName'] !== 'string' ||
        typeof data['lastName'] !== 'string'
    ) {
        return false;
    }

    return true;
};

export const assertDomainUserNames: TypeAssert<DomainUserNames> = function (data: any, variableName: string, typeName: string) {
    if (!isDomainUserNames(data)) {
        throwAssertError(variableName, typeName);
    }
};