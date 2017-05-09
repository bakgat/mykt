export interface IBook {
    _id: string;
    title: string;
    authors?: [string];
    publishers?: [string];
    isbn: string;
    summary?: string;
    publishedDate?: string;
    pageCount?: number;
    language?: string;
    notes?: string;
    groups?: [string];
    tags?: [string];
    age?: {
        min: number;
        max?: number
    };
    imageLinks?: {
        smallThumbnail: string;
        thumbnail: string;
    };
}
