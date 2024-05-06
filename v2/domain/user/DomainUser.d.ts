import { TypeGuard } from '../../_helpers/types/TypeGuard';
import { TypeAssert } from '../../_helpers/types/TypeAssert';
export type DomainUser = {
    id: string;
    login: string;
    avatarUrl: string;
};
export declare const isDomainUser: TypeGuard<DomainUser>;
export declare const assertDomainUser: TypeAssert<DomainUser>;
