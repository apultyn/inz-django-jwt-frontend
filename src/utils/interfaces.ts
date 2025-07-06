export interface Review {
    id: number;
    author_email: string;
    stars: number;
    comment: string;
    book: number;
}

export interface Book {
    id: number;
    title: string;
    author: string;
    reviews: Review[];
}

export interface SpringError {
    detail: string;
    description: string | null;
    violations: string[] | null;
}

export interface ReceivedToken {
    email: string;
    exp: number;
    iat: number;
    value: string;
    groups: { name: string }[];
}

export interface DecodedToken {
    email: string;
    exp: number;
    iat: number;
    value: string;
    groups: string[];
}
