export type Create<Type, Fields extends keyof Type> =
    Pick<Type, Fields>
    & Partial<Omit<Type, Fields>>