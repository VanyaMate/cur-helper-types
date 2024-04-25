import { DomainTheme, isDomainTheme } from './DomainTheme';
import { TypeGuard } from '../../_helpers/types/TypeGuard';
import { TypeAssert } from '../../_helpers/types/TypeAssert';
import { throwAssertError } from '../../_helpers/lib/throwAssertError';
import { Create } from '../../_helpers/types/Create';
import { validType } from '../../_helpers/lib/validType';


export type DomainCreateThemeData = Create<Omit<DomainTheme, 'id'>, 'publicId' | 'title'>

export const isDomainCreateThemeData: TypeGuard<DomainCreateThemeData> = function (data: any, partial: boolean = false): data is DomainCreateThemeData {
    if (typeof data !== 'object' || data === null) {
        return false;
    }

    if (
        !isDomainTheme(data, true) ||
        !validType(data['publicId'], 'string', partial) ||
        !validType(data['title'], 'string', partial)
    ) {
        return false;
    }

    return true;
};

export const assertDomainCreateThemeData: TypeAssert<DomainCreateThemeData> = function (data: any, variableName: string, typeName: string, partial: boolean = false) {
    if (!isDomainCreateThemeData(data, partial)) {
        throwAssertError(variableName, typeName);
    }
};