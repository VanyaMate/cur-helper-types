import { TypeGuard } from '../../_helpers/types/TypeGuard';
import { TypeAssert } from '../../_helpers/types/TypeAssert';
import { throwAssertError } from '../../_helpers/lib/throwAssertError';


export type DomainUser = {
    id: string;
    login: string;
    avatarUrl: string;
}

export const isDomainUser: TypeGuard<DomainUser> = function (data: any): data is DomainUser {
    if (typeof data !== 'object' || data === null) {
        return false;
    }

    if (
        typeof data['id'] !== 'string' ||
        typeof data['login'] !== 'string' ||
        typeof data['avatarUrl'] !== 'string'
    ) {
        return false;
    }

    return true;
};

export const assertDomainUser: TypeAssert<DomainUser> = function (data: any, variableName: string, typeName: string) {
    if (!isDomainUser(data)) {
        throwAssertError(variableName, typeName);
    }
};