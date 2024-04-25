import { TypeGuard } from '../../_helpers/types/TypeGuard';
import { TypeAssert } from '../../_helpers/types/TypeAssert';
import { throwAssertError } from '../../_helpers/lib/throwAssertError';


export type DomainUserContacts = {
    email: string;
    phoneNumber: string;
}

export const isDomainUserContacts: TypeGuard<DomainUserContacts> = function (data: any): data is DomainUserContacts {
    if (typeof data !== 'object' || data === null) {
        return false;
    }

    if (
        typeof data['email'] !== 'string' ||
        typeof data['phoneNumber'] !== 'string'
    ) {
        return false;
    }

    return true;
};

export const assertDomainUserContacts: TypeAssert<DomainUserContacts> = function (data: any, variableName: string, typeName: string) {
    if (!isDomainUserContacts(data)) {
        throwAssertError(variableName, typeName);
    }
};