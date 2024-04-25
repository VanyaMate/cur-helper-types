import { TypeGuard } from '../../_helpers/types/TypeGuard';
import { TypeAssert } from '../../_helpers/types/TypeAssert';
import { throwAssertError } from '../../_helpers/lib/throwAssertError';
import { validType } from '../../_helpers/lib/validType';


export type DomainUser = {
    id: string;
    login: string;
    avatarUrl: string;
}

export const isDomainUser: TypeGuard<DomainUser> = function (data: any, partial: boolean = false): data is DomainUser {
    if (typeof data !== 'object' || data === null) {
        return false;
    }

    if (
        !validType(data['id'], 'string', partial) ||
        !validType(data['login'], 'string', partial) ||
        !validType(data['avatarUrl'], 'string', partial)
    ) {
        return false;
    }

    return true;
};

export const assertDomainUser: TypeAssert<DomainUser> = function (data: any, variableName: string, typeName: string, partial: boolean = false) {
    if (!isDomainUser(data, partial)) {
        throwAssertError(variableName, typeName);
    }
};