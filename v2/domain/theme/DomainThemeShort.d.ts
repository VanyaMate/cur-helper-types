import { TypeGuard } from '../../_helpers/types/TypeGuard';
import { TypeAssert } from '../../_helpers/types/TypeAssert';
import { DomainThemeFull } from './DomainThemeFull';
export type DomainThemeShort = Pick<DomainThemeFull, 'id' | 'publicId' | 'title' | 'url' | 'additional' | 'description'>;
export declare const isDomainThemeShort: TypeGuard<DomainThemeShort>;
export declare const assertDomainThemeShort: TypeAssert<DomainThemeShort>;
