import { Create } from '../types';


export type QuestionAnswerType = {
    id: string;
    enabled: boolean;
    title: string;
    description: string;
    correct: boolean;
    questionId: string;
}

export type QuestionAnswerCreateType = Create<QuestionAnswerType, 'title' | 'correct' | 'questionId'>;
export type QuestionAnswerUpdateType = Partial<Omit<QuestionAnswerType, 'id' | 'correct' | 'questionId'>>;
export type QuestionAnswerShortType = Pick<QuestionAnswerType, 'id' | 'title'>;
export type AdminQuestionAnswerShortType = Pick<QuestionAnswerType, 'id' | 'enabled' | 'title' | 'correct'>;