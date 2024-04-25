import { TypeGuard } from '../../_helpers/types/TypeGuard';
import { TypeAssert } from '../../_helpers/types/TypeAssert';
import { throwAssertError } from '../../_helpers/lib/throwAssertError';
import { validType } from '../../_helpers/lib/validType';


export type DomainTestProperties = {
    timeToPass: number;
    questionsAmount: number;
    unsatisfactoryScore: number;
    satisfactoryScore: number;
    perfectScore: number;
}

export const isDomainTestProperties: TypeGuard<DomainTestProperties> = function (data: any, partial: boolean = false): data is DomainTestProperties {
    if (typeof data !== 'object' || data === null) {
        return false;
    }

    if (
        !validType(data['timeToPass'], 'number', partial) ||
        !validType(data['questionsAmount'], 'number', partial) ||
        !validType(data['unsatisfactoryScore'], 'number', partial) ||
        !validType(data['satisfactoryScore'], 'number', partial) ||
        !validType(data['perfectScore'], 'number', partial)
    ) {
        return false;
    }

    return true;
};

export const assertDomainTestProperties: TypeAssert<DomainTestProperties> = function (data: any, variableName: string, typeName: string, partial: boolean = false) {
    if (!isDomainTestProperties(data, partial)) {
        throwAssertError(variableName, typeName);
    }
};