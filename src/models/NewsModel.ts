export type Source = {
    id: string,
    name: string
}

export interface NewsModel {
    id: string;
    source?: Source;
    author?: string;
    title?: string;
    description?: string;
    url?: string;
    publishedAt?: string;
    urlToImage?: string;
    content?: string;
}