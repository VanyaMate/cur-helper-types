import { throwAssertError } from '../../_helpers/lib/throwAssertError';
import { TypeGuard } from '../../_helpers/types/TypeGuard';
import { TypeAssert } from '../../_helpers/types/TypeAssert';


export type DomainCommonError = {
    code: number;
    messages: string[];
}

export const isDomainCommonError: TypeGuard<DomainCommonError> = function (data: any): data is DomainCommonError {
    if (typeof data !== 'object' || data === null) {
        return false;
    }

    if (
        typeof data.code !== 'number' ||
        !(
            Array.isArray(data.messages) &&
            data.messages.every((message: any) => typeof message === 'string')
        )
    ) {
        return false;
    }

    return true;
};

export const assertDomainCommonError: TypeAssert<DomainCommonError> = function (data: any, variableName: string, typeName: string) {
    if (!isDomainCommonError(data)) {
        throwAssertError(variableName, typeName);
    }
};