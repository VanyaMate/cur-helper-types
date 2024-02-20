import { ThemeShortType } from '../theme';
import { With } from '../types';
import { TestShortType, TestType } from '../test';
import { TestShortResult } from '../tests';
import { QuestionShortType, QuestionType } from '../question';


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

export type ThemeQuestions = {
    questions: QuestionType[];
}

export type ThemeQuestionsAmount = {
    questionsAmount: number;
}

export type ThemeQuestionsShort = {
    questions: QuestionShortType[];
}