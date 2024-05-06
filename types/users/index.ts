import { UserType } from '../user/index';
import {
    TestResultShortType,
} from '../test-passing/index';


export type UserProfileData = {
    user: UserType;
    testsResults: TestResultShortType[];
}