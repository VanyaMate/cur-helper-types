export declare enum ErrorCode {
    NOT_FOUND = 10000,
    NO_VALID_DATA = 20000,
    NO_ACCESS = 30000
}
export type ErrorType = (errors: ErrorMessageType[]) => ErrorResponseType;
export type ErrorMessageType = {
    target: string;
    messages: string[];
};
export type ErrorResponseType = {
    errors: ErrorMessageType[];
    code: ErrorCode;
};
export interface IErrorCaller {
    notFound(messages: ErrorMessageType[]): ErrorResponseType;
    noValidData(messages: ErrorMessageType[]): ErrorResponseType;
    noAccess(messages: ErrorMessageType[]): ErrorResponseType;
}
