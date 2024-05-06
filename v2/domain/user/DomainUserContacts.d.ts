import { TypeGuard } from '../../_helpers/types/TypeGuard';
import { TypeAssert } from '../../_helpers/types/TypeAssert';
export type DomainUserContacts = {
    email: string;
    phoneNumber: string;
};
export declare const isDomainUserContacts: TypeGuard<DomainUserContacts>;
export declare const assertDomainUserContacts: TypeAssert<DomainUserContacts>;
