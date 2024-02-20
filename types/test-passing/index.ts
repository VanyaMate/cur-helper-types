import {
    QuestionResult,
    QuestionSelect,
    QuestionThemes,
    QuestionType,
} from '../question';
import { With } from '../types';
import { TestShortType } from '../test';
import { UserType } from '../user';
import { ThemeShortType } from '../theme';


export type TestPassingResult =
    'no-result'
    | 'satis'
    | 'unsatis'
    | 'perfect';

export type TestPassingState =
    'process'
    | 'finished';

export type TestPassingType = {
    id: string;
    isPrivate: boolean;
    status: TestPassingState;
    startTime: number;
}

export type TestPassingProcess = {
    questions: With<QuestionType, [ QuestionSelect ]>[];
    remainingTime: number;
}

export type TestPassingResults = {
    result: TestPassingResult;
    rightAnswers: number;
    finishTime: number;
    questions: With<QuestionType, [ QuestionSelect, QuestionResult, QuestionThemes ]>[];
}

export type TestPassingResultsShort =
    {
        result: TestPassingResult;
        rightAnswers: number;
        finishTime: number;
        questionsAmount: number;
    };

export type TestPassingTestShort = {
    test: TestShortType;
}

export type TestPassingUserShort = {
    user: UserType;
}

export type TestPassingThemes = {
    themes: ThemeShortType[];
}

export type TestPassingShortInfo =
    Pick<TestPassingType, 'id' | 'status'>
    & TestPassingResultsShort;