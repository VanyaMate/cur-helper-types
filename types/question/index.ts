import { Complexity } from '../enums';
import { QuestionAnswerType } from '../answer';
import { ThemeShortType } from '../theme';
import { Create, With } from '../types';


export type QuestionType = {
    id: string;
    enabled: boolean;
    title: string;
    description: string;
    body: string;
    complexity: Complexity;
    points: number;
}

export type QuestionFullType = With<QuestionType, [ QuestionAnswers, QuestionThemes ]>;

export type QuestionSelect = {
    selectId: string;
}

export type QuestionResult = {
    timeSpent: number;
    answerTime: number;
}

export type QuestionThemes = {
    themes: ThemeShortType[];
}

export type QuestionAnswers = {
    answers: QuestionAnswerType[];
}

export type QuestionCreateType = Create<QuestionType, 'title'>;
export type QuestionUpdateType = Partial<QuestionType>;
export type QuestionShortType = Pick<QuestionType, 'id' | 'title' | 'description' | 'complexity'>;
export type AdminQuestionShortType = Pick<QuestionType, 'id' | 'title' | 'description' | 'complexity' | 'enabled'>;