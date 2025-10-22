export interface Review {
    id: number;
    user_email: string;
    stars: number;
    comment: string;
    bookId: number;
}

export interface Book {
    id: number;
    title: string;
    author: string;
    reviews: Review[];
}

export interface DjangoError {
    [key: string]: string[];
}

export const getValidationErrors = (errors: DjangoError): string[] => {
    return Object.entries(errors).flatMap(([fieldName, messages]) =>
        messages.map((message) => {
            const formattedFieldName =
                fieldName.charAt(0).toUpperCase() +
                fieldName.slice(1).replace(/_/g, " ");
            return `${formattedFieldName}: ${message}`;
        })
    );
};

export interface User {
    id: number;
    email: string;
    role: string;
}

export interface DecodedToken {
    email: string;
    exp: number;
    iat: number;
    groups: string[];
    sub: number;
}

export interface LoginRes {
    access: string;
    expires_in: number;
}

export interface RegisterRes {
    email: string;
}

export interface ReviewCreateReq {
    stars: number;
    comment: string;
    book: number;
}

export interface ReviewUpdateReq {
    stars: number;
    comment: string;
}

export interface BookCreateReq {
    title: string;
    author: string;
}

export interface BookUpdateReq {
    title: string;
    author: string;
}

export interface RegisterReq {
    email: string;
    password: string;
    confirm_password: string;
}

export interface LoginReq {
    email: string;
    password: string;
}
