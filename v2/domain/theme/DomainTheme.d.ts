import { TypeGuard } from '../../_helpers/types/TypeGuard';
import { TypeAssert } from '../../_helpers/types/TypeAssert';
export type DomainTheme = {
    id: string;
    publicId: string;
    title: string;
    additional: string;
};
export declare const isDomainTheme: TypeGuard<DomainTheme>;
export declare const assertDomainTheme: TypeAssert<DomainTheme>;
