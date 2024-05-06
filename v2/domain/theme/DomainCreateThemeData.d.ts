import { DomainTheme } from './DomainTheme';
import { TypeGuard } from '../../_helpers/types/TypeGuard';
import { TypeAssert } from '../../_helpers/types/TypeAssert';
import { Create } from '../../_helpers/types/Create';
export type DomainCreateThemeData = Create<Omit<DomainTheme, 'id'>, 'publicId' | 'title'>;
export declare const isDomainCreateThemeData: TypeGuard<DomainCreateThemeData>;
export declare const assertDomainCreateThemeData: TypeAssert<DomainCreateThemeData>;
