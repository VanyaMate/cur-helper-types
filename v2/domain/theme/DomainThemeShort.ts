import { TypeGuard } from '../../_helpers/types/TypeGuard';
import { TypeAssert } from '../../_helpers/types/TypeAssert';
import { throwAssertError } from '../../_helpers/lib/throwAssertError';
import { DomainThemeFull, isDomainThemeFull } from './DomainThemeFull';
import { validType } from '../../_helpers/lib/validType';


export type DomainThemeShort = Pick<DomainThemeFull, 'id' | 'publicId' | 'title' | 'url' | 'additional' | 'description'>

export const isDomainThemeShort: TypeGuard<DomainThemeShort> = function (data: any, partial: boolean = false): data is DomainThemeShort {
    if (typeof data !== 'object' || data === null) {
        return false;
    }

    if (
        !validType(data['id'], 'string', partial) ||
        !validType(data['publicId'], 'string', partial) ||
        !validType(data['title'], 'string', partial) ||
        !validType(data['url'], 'string', partial) ||
        !validType(data['additional'], 'string', partial) ||
        !validType(data['description'], 'string', partial)
    ) {
        return false;
    }

    return true;
};

export const assertDomainThemeShort: TypeAssert<DomainThemeShort> = function (data: any, variableName: string, typeName: string, partial: boolean = false) {
    if (!isDomainThemeShort(data, partial)) {
        throwAssertError(variableName, typeName);
    }
};