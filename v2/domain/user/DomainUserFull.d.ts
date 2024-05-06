import { TypeGuard } from '../../_helpers/types/TypeGuard';
import { TypeAssert } from '../../_helpers/types/TypeAssert';
import { DomainUser } from './DomainUser';
import { DomainUserContacts } from './DomainUserContacts';
import { DomainUserNames } from './DomainUserNames';
import { DomainUserState } from './DomainUserState';
export type DomainUserFull = {
    contacts: DomainUserContacts;
    names: DomainUserNames;
    state: DomainUserState;
} & DomainUser;
export declare const isDomainUserFull: TypeGuard<DomainUserFull>;
export declare const assertDomainUserFull: TypeAssert<DomainUserFull>;
