import {UserInfo, UserRegister} from "../../models/user";

export enum userActionTypes {
    USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST',
    USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS',
    USER_REQUEST_ERROR = 'USER_REQUEST_ERROR',
    USER_LOGOUT = 'USER_LOGOUT',
    USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST',
    USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS',
    USER_DETAILS_REQUEST = 'USER_DETAILS_REQUEST',
    USER_DETAILS_SUCCESS = 'USER_DETAILS_SUCCESS',
    USER_UPDATE_REQUEST = 'USER_UPDATE_REQUEST',
    USER_UPDATE_SUCCESS = 'USER_UPDATE_SUCCESS'
}

interface Login {
    type: userActionTypes.USER_LOGIN_REQUEST
}

interface LoginSuccess {
    type: userActionTypes.USER_LOGIN_SUCCESS,
    payload: UserInfo
}

interface RequestError {
    type: userActionTypes.USER_REQUEST_ERROR,
    payload: string
}

interface Logout {
    type: userActionTypes.USER_LOGOUT
}

interface Register {
    type: userActionTypes.USER_REGISTER_REQUEST,
    payload: UserRegister
}

interface RegisterSuccess {
    type: userActionTypes.USER_REGISTER_SUCCESS,
    payload: UserInfo
}

interface GetUserDetails {
    type: userActionTypes.USER_DETAILS_REQUEST
}

interface GetUserDetailsSuccess {
    type: userActionTypes.USER_DETAILS_SUCCESS,
    payload: UserInfo
}

interface UpdateUser {
    type: userActionTypes.USER_UPDATE_REQUEST
}

interface UpdateUserSuccess {
    type: userActionTypes.USER_UPDATE_SUCCESS,
    payload: UserInfo
}

export type UserAction = Login | LoginSuccess | RequestError | Logout
    | Register | RegisterSuccess
    | GetUserDetails | GetUserDetailsSuccess
    | UpdateUser | UpdateUserSuccess
