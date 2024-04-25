import { DomainThemeFull, isDomainThemeFull } from './DomainThemeFull';
import { TypeGuard } from '../../_helpers/types/TypeGuard';
import { TypeAssert } from '../../_helpers/types/TypeAssert';
import { throwAssertError } from '../../_helpers/lib/throwAssertError';


export type DomainUpdateThemeData = Partial<Omit<DomainThemeFull, 'id'>>

export const isDomainUpdateThemeData: TypeGuard<DomainUpdateThemeData> = function (data: any, partial: boolean = true): data is DomainUpdateThemeData {
    if (!isDomainThemeFull(data, partial)) {
        return false;
    }

    return true;
};

export const assertDomainUpdateThemeData: TypeAssert<DomainUpdateThemeData> = function (data: any, variableName: string, typeName: string, partial: boolean = true) {
    if (!isDomainUpdateThemeData(data, partial)) {
        throwAssertError(variableName, typeName);
    }
};