export enum ErrorCode {
    NOT_FOUND     = 10000,
    NO_VALID_DATA = 20000,
    NO_ACCESS     = 30000,
}

export type ErrorType = (...messages: string[]) => ErrorMessageType;

export type ErrorMessageType = {
    messages: string[];
    code: ErrorCode;
}