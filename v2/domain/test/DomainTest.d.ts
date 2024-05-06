import { TypeGuard } from '../../_helpers/types/TypeGuard';
import { TypeAssert } from '../../_helpers/types/TypeAssert';
export type DomainTest = {
    id: string;
    themeId: string;
    title: string;
    additional: string;
};
export declare const isDomainTest: TypeGuard<DomainTest>;
export declare const assertDomainTest: TypeAssert<DomainTest>;
