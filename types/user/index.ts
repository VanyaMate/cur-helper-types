import { TestPassingResults, TestPassingType } from '../test-passing';
import { RoleType } from '../role';
import { Create, With } from '../types';


export type UserType = {
    id: string;
    login: string;
    avatarUrl: string;
    email: string;
    firstName: string;
    lastName: string;
    verified: boolean;
    role: RoleType | null;
}

export type UserTestPassing = {
    testPassing: With<TestPassingType, [ TestPassingResults ]>[];
}

export type UserCreateType =
    Create<Omit<UserType, 'role'>, 'login'>
    & { password: string };
export type UserUpdateType = Partial<Omit<UserType, 'role'>>;