import { DomainThemeShort, isDomainThemeShort } from './DomainThemeShort';
import { TypeGuard } from '../../_helpers/types/TypeGuard';
import { TypeAssert } from '../../_helpers/types/TypeAssert';
import { throwAssertError } from '../../_helpers/lib/throwAssertError';


export type DomainThemeBranch =
    DomainThemeShort
    | null;

export const isDomainThemeBranch: TypeGuard<DomainThemeBranch> = function (data: any, partial: boolean = false): data is DomainThemeBranch {
    if (data === null) {
        return true;
    }

    if (typeof data !== 'object') {
        return false;
    }

    if (!isDomainThemeShort(data, partial)) {
        return false;
    }

    return true;
};

export const assertDomainThemeBranch: TypeAssert<DomainThemeBranch> = function (data: any, variableName: string, typeName: string, partial: boolean = false) {
    if (!isDomainThemeBranch(data, partial)) {
        throwAssertError(variableName, typeName);
    }
};