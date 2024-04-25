import { TypeGuard } from '../../_helpers/types/TypeGuard';
import { TypeAssert } from '../../_helpers/types/TypeAssert';
import { throwAssertError } from '../../_helpers/lib/throwAssertError';


export type DomainUserState = {
    verified: boolean;
}

export const isDomainUserState: TypeGuard<DomainUserState> = function (data: any): data is DomainUserState {
    if (typeof data !== 'object' || data === null) {
        return false;
    }

    if (
        typeof data['verified'] !== 'boolean'
    ) {
        return false;
    }

    return true;
};

export const assertDomainUserState: TypeAssert<DomainUserState> = function (data: any, variableName: string, typeName: string) {
    if (!isDomainUserState(data)) {
        throwAssertError(variableName, typeName);
    }
};