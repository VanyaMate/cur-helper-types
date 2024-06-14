export type DomainNews = {
    key: string;
    title: string;
    description: string;
    preview: string;
    date: string;
}

export type DomainNewsFull = DomainNews & {
    body: string;
}