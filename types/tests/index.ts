import { With } from '../types';
import { TestShortType } from '../test';
import { TestPassingShortInfo } from '../test-passing';
import { ThemeShortType } from '../theme';


export type TestChildren = {
    children: TestShortType[];
}

export type TestChildrenWithResults = {
    children: With<TestShortType, [ TestChildren, TestShortType ]>[]
}

export type TestShortResult = {
    shortResult: TestPassingShortInfo | null
}

export type TestThemeShort = {
    theme: ThemeShortType;
}

export type TestQuestionsThemesShort = {
    themes: ThemeShortType[];
}