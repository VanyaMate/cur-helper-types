import { TypeGuard } from '../../_helpers/types/TypeGuard';
import { TypeAssert } from '../../_helpers/types/TypeAssert';
import { throwAssertError } from '../../_helpers/lib/throwAssertError';
import { DomainTheme, isDomainTheme } from './DomainTheme';
import { validType } from '../../_helpers/lib/validType';


export type DomainThemeFull =
    {
        description: string;
        body: string;
        url: string;
    }
    & DomainTheme;

export const isDomainThemeFull: TypeGuard<DomainThemeFull> = function (data: any, partial: boolean = false): data is DomainThemeFull {
    if (typeof data !== 'object' || data === null) {
        return false;
    }

    if (
        !validType(data['description'], 'string', partial) ||
        !validType(data['body'], 'string', partial) ||
        !validType(data['url'], 'string', partial) ||
        !isDomainTheme(data, partial)
    ) {
        return false;
    }

    return true;
};

export const assertDomainThemeFull: TypeAssert<DomainThemeFull> = function (data: any, variableName: string, typeName: string, partial: boolean = false) {
    if (!isDomainThemeFull(data, partial)) {
        throwAssertError(variableName, typeName);
    }
};