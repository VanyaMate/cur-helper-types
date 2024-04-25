export type TypeGuard<T> = {
    (data: unknown, partial: true): data is Partial<T>;
    (data: unknown, partial?: false): data is T;
    (data: unknown, partial?: boolean): data is T;
};