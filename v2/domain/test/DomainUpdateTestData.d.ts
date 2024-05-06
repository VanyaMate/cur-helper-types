import { TypeGuard } from '../../_helpers/types/TypeGuard';
import { TypeAssert } from '../../_helpers/types/TypeAssert';
import { DomainTestFull } from './DomainTestFull';
export type DomainUpdateTestData = Partial<Omit<DomainTestFull, 'id'>>;
export declare const isDomainUpdateTestData: TypeGuard<DomainUpdateTestData>;
export declare const assertDomainUpdateTestData: TypeAssert<DomainUpdateTestData>;
