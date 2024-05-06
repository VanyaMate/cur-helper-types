import { TypeGuard } from '../../_helpers/types/TypeGuard';
import { TypeAssert } from '../../_helpers/types/TypeAssert';
import { DomainTheme } from './DomainTheme';
export type DomainThemeFull = {
    description: string;
    body: string;
    url: string;
} & DomainTheme;
export declare const isDomainThemeFull: TypeGuard<DomainThemeFull>;
export declare const assertDomainThemeFull: TypeAssert<DomainThemeFull>;
