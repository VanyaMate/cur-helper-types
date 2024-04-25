import { TypeGuard } from '../../_helpers/types/TypeGuard';
import { TypeAssert } from '../../_helpers/types/TypeAssert';
import { throwAssertError } from '../../_helpers/lib/throwAssertError';
import { validType } from '../../_helpers/lib/validType';


export type DomainUserContacts = {
    email: string;
    phoneNumber: string;
}

export const isDomainUserContacts: TypeGuard<DomainUserContacts> = function (data: any, partial: boolean = false): data is DomainUserContacts {
    if (typeof data !== 'object' || data === null) {
        return false;
    }

    if (
        !validType(data['email'], 'string', partial) ||
        !validType(data['phoneNumber'], 'string', partial)
    ) {
        return false;
    }

    return true;
};

export const assertDomainUserContacts: TypeAssert<DomainUserContacts> = function (data: any, variableName: string, typeName: string, partial: boolean = false) {
    if (!isDomainUserContacts(data, partial)) {
        throwAssertError(variableName, typeName);
    }
};