import { TypeGuard } from '../../_helpers/types/TypeGuard';
import { TypeAssert } from '../../_helpers/types/TypeAssert';
export type DomainUserState = {
    verified: boolean;
};
export declare const isDomainUserState: TypeGuard<DomainUserState>;
export declare const assertDomainUserState: TypeAssert<DomainUserState>;
