import { TypeGuard } from '../../_helpers/types/TypeGuard';
import { TypeAssert } from '../../_helpers/types/TypeAssert';
import { Create } from '../../_helpers/types/Create';
import { DomainTest } from './DomainTest';
export type DomainCreateTestData = Create<Omit<DomainTest, 'id'>, 'themeId' | 'title'>;
export declare const isDomainCreateTestData: TypeGuard<DomainCreateTestData>;
export declare const assertDomainCreateTestData: TypeAssert<DomainCreateTestData>;
