import { TypeGuard } from '../../_helpers/types/TypeGuard';
import { TypeAssert } from '../../_helpers/types/TypeAssert';
export type DomainUserNames = {
    firstName: string;
    lastName: string;
};
export declare const isDomainUserNames: TypeGuard<DomainUserNames>;
export declare const assertDomainUserNames: TypeAssert<DomainUserNames>;
