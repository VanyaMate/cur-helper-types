import { With } from '../types';
import { TestShortType, TestType } from '../test';
import { TestPassingShortInfo } from '../test-passing';
import { ThemeShortType } from '../theme';
import { ThemeTestsWithShortResults } from '../themes';
import { AdminQuestionShortType, QuestionShortType } from '../question';


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

export type TestQuestionsShort = {
    questions: QuestionShortType[];
}

export type AdminTestQuestionsShort = {
    questions: AdminQuestionShortType[];
}

export type TestFullType = With<TestType, [ TestShortResult, TestThemeShort, TestQuestionsThemesShort ]>;
export type TestListType = With<ThemeShortType, [ ThemeTestsWithShortResults ]>;