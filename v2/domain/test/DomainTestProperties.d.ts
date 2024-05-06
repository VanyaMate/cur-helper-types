import { TypeGuard } from '../../_helpers/types/TypeGuard';
import { TypeAssert } from '../../_helpers/types/TypeAssert';
export type DomainTestProperties = {
    timeToPass: number;
    questionsAmount: number;
    unsatisfactoryScore: number;
    satisfactoryScore: number;
    perfectScore: number;
};
export declare const isDomainTestProperties: TypeGuard<DomainTestProperties>;
export declare const assertDomainTestProperties: TypeAssert<DomainTestProperties>;
