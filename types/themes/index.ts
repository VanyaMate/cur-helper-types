import { ThemeShortType, ThemeType } from '../theme';
import { With } from '../types';
import { TestShortType, TestType } from '../test';
import { AdminTestThemeShort, TestShortResult } from '../tests';
import { AdminQuestionShortType, QuestionShortType, QuestionType } from '../question';


export type ThemeChildren = {
    children: ThemeShortType[]
}

export type ThemeNext = {
    next: ThemeShortType | null;
}

export type ThemePrev = {
    prev: ThemeShortType | null;
}

export type ThemeRecursiveChildren = {
    children: With<ThemeShortType, [ ThemeRecursiveChildren ]>[]
}

export type ThemeBreadcrumb = {
    breadcrumb: ThemeShortType[];
}

export type ThemeTests = {
    tests: TestType[];
}

export type ThemeTestsShort = {
    tests: TestShortType[];
}

export type ThemeTestsWithShortResults = {
    tests: With<TestType, [ TestShortResult ]>[]
}

export type AdminThemeTestsShort = {
    tests: AdminTestThemeShort[];
}

export type ThemeQuestions = {
    questions: QuestionType[];
}

export type ThemeQuestionsAmount = {
    questionsAmount: number;
}

export type ThemeQuestionsShort = {
    questions: QuestionShortType[];
}

export type AdminThemeQuestionsShort = {
    questions: AdminQuestionShortType[];
}

export type ThemeFullType =
    ThemeChildren
    & ThemeTestsWithShortResults
    & ThemeBreadcrumb
    & ThemeNext
    & ThemePrev
    & ThemeType;

export type ThemeChildrenType =
    ThemeRecursiveChildren
    & ThemeShortType
    & ThemeBreadcrumb;

export type ThemesType =
    ThemeRecursiveChildren
    & ThemeShortType;