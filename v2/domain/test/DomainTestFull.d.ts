import { TypeGuard } from '../../_helpers/types/TypeGuard';
import { TypeAssert } from '../../_helpers/types/TypeAssert';
import { DomainTestProperties } from './DomainTestProperties';
import { DomainTest } from './DomainTest';
export type DomainTestFull = {
    properties: DomainTestProperties;
} & DomainTest;
export declare const isDomainTestFull: TypeGuard<DomainTestFull>;
export declare const assertDomainTestFull: TypeAssert<DomainTestFull>;
