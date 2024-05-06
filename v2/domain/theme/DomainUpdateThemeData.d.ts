import { DomainThemeFull } from './DomainThemeFull';
import { TypeGuard } from '../../_helpers/types/TypeGuard';
import { TypeAssert } from '../../_helpers/types/TypeAssert';
export type DomainUpdateThemeData = Partial<Omit<DomainThemeFull, 'id'>>;
export declare const isDomainUpdateThemeData: TypeGuard<DomainUpdateThemeData>;
export declare const assertDomainUpdateThemeData: TypeAssert<DomainUpdateThemeData>;
