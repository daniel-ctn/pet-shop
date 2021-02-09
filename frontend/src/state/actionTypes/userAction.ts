import {UserModel} from "../../models/user";

export enum userActionTypes {
    USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST',
    USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS',
    USER_LOGIN_ERROR = 'USER_LOGIN_ERROR',
    USER_LOGOUT = 'USER_LOGOUT',
}

interface Login {
    type: userActionTypes.USER_LOGIN_REQUEST
}

interface LoginSuccess {
    type: userActionTypes.USER_LOGIN_SUCCESS,
    payload: UserModel
}

interface LoginError {
    type: userActionTypes.USER_LOGIN_ERROR,
    payload: string
}

interface Logout {
    type: userActionTypes.USER_LOGOUT
}

export type UserAction = Login | LoginSuccess | LoginError | Logout
