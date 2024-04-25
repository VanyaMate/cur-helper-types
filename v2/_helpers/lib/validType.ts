export const validType = function (value: any, type: string, partial?: boolean): boolean {
    return (partial && value === undefined) || typeof value === type;
};