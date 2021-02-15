export interface UserInfo {
    id: string;
    name: string;
    email: string;
    isAdmin: boolean
}

export interface UserRegister {
    name: string;
    email: string;
    password: string;
}
