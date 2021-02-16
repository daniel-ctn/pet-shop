export interface UserInfo {
    id: string;
    name: string;
    email: string;
    isAdmin: boolean;
    token: string;
}

export interface UserRegister {
    name: string;
    email: string;
    password: string;
}

export interface UserDetails extends UserInfo{
    password: string;
}
