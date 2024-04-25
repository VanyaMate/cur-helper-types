import { TypeGuard } from '../../_helpers/types/TypeGuard';
import { TypeAssert } from '../../_helpers/types/TypeAssert';
import { throwAssertError } from '../../_helpers/lib/throwAssertError';
import { validType } from '../../_helpers/lib/validType';


export type DomainUserState = {
    verified: boolean;
}

export const isDomainUserState: TypeGuard<DomainUserState> = function (data: any, partial: boolean = false): data is DomainUserState {
    if (typeof data !== 'object' || data === null) {
        return false;
    }

    if (
        !validType(data['verified'], 'boolean', partial)
    ) {
        return false;
    }

    return true;
};

export const assertDomainUserState: TypeAssert<DomainUserState> = function (data: any, variableName: string, typeName: string, partial: boolean = false) {
    if (!isDomainUserState(data, partial)) {
        throwAssertError(variableName, typeName);
    }
};