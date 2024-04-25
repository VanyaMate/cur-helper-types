import { TypeGuard } from '../../_helpers/types/TypeGuard';
import { TypeAssert } from '../../_helpers/types/TypeAssert';
import { throwAssertError } from '../../_helpers/lib/throwAssertError';
import { DomainUser, isDomainUser } from './DomainUser';
import { DomainUserContacts, isDomainUserContacts } from './DomainUserContacts';
import { DomainUserNames, isDomainUserNames } from './DomainUserNames';
import { DomainUserState, isDomainUserState } from './DomainUserState';


export type DomainUserFull =
    {
        contacts: DomainUserContacts,
        names: DomainUserNames,
        state: DomainUserState
    }
    & DomainUser;

export const isDomainUserFull: TypeGuard<DomainUserFull> = function (data: any, partial: boolean = false): data is DomainUserFull {
    if (typeof data !== 'object' || data === null) {
        return false;
    }

    if (
        !isDomainUserContacts(data.contacts, partial) ||
        !isDomainUserNames(data.names, partial) ||
        !isDomainUserState(data.state, partial) ||
        !isDomainUser(data, partial)
    ) {
        return false;
    }

    return true;
};

export const assertDomainUserFull: TypeAssert<DomainUserFull> = function (data: any, variableName: string, typeName: string, partial: boolean = false) {
    if (!isDomainUserFull(data, partial)) {
        throwAssertError(variableName, typeName);
    }
};