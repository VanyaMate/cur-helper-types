export enum ErrorCode {
    NOT_FOUND     = 10000,
    NO_VALID_DATA = 20000,
    NO_ACCESS     = 30000,
}

export type ErrorType = (...messages: string[]) => ErrorResponseType;

export type ErrorMessageType = {
    target: string;
    messages: string[];
}

export type ErrorResponseType = {
    errors: ErrorMessageType[];
    code: ErrorCode;
}

export interface IErrorCaller {
    notFound (...messages: string[]): ErrorResponseType;

    noValidData (...messages: string[]): ErrorResponseType;

    noAccess (...messages: string[]): ErrorResponseType;
}