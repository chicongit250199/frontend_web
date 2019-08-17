export interface User {
    id: number;
    username: string;
    full_name?: string;
    email: string;
    phone: string;
    created_date: string;
    last_logined: string;
    role?: USER_ROLE;
    address: string;
    city: string;
    country: string;

}


export enum STATUS {
    REGISTER = 1,
    UPLOADED = 2,
    VALIDATED = 3
}

export enum USER_ROLE {
    USER = 0,
    GARAGE_SHOP = 1,
    ADMIN = 2
}
