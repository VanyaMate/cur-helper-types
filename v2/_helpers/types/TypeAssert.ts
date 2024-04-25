export type TypeAssert<T> = {
    (data: any, variableName: string, typeName: string, partial: true): asserts data is Partial<T>;
    (data: any, variableName: string, typeName: string, partial?: false): asserts data is T;
    (data: any, variableName: string, typeName: string, partial?: boolean): asserts data is T;
};