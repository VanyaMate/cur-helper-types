import { DomainThemeShort } from './DomainThemeShort';
import { TypeGuard } from '../../_helpers/types/TypeGuard';
import { TypeAssert } from '../../_helpers/types/TypeAssert';
export type DomainThemeBranch = DomainThemeShort | null;
export declare const isDomainThemeBranch: TypeGuard<DomainThemeBranch>;
export declare const assertDomainThemeBranch: TypeAssert<DomainThemeBranch>;
