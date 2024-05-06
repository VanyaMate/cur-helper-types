import { TypeGuard } from '../../_helpers/types/TypeGuard';
import { TypeAssert } from '../../_helpers/types/TypeAssert';
export type DomainCommonError = {
    code: number;
    messages: string[];
};
export declare const isDomainCommonError: TypeGuard<DomainCommonError>;
export declare const assertDomainCommonError: TypeAssert<DomainCommonError>;
