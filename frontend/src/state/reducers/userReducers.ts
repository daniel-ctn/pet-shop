import {UserAction, userActionTypes} from "../actionTypes";
import {UserInfo} from "../../models/user";

interface UserState {
    userInfo: UserInfo | null,
    loading: boolean,
    error: string
}

const initialState: UserState = {
    userInfo: null,
    loading: false,
    error: ''
}

export const userReducers = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case userActionTypes.USER_LOGIN_REQUEST:
            return {...state, loading: true, error: ''}
        case userActionTypes.USER_LOGIN_SUCCESS:
            return {...state, loading: false, userInfo: action.payload}
        case userActionTypes.USER_REQUEST_ERROR:
            return {...state, loading: false, userInfo: null, error: action.payload}
        case userActionTypes.USER_LOGOUT:
            return initialState
        case userActionTypes.USER_REGISTER_REQUEST:
            return {...state, loading: true, error: ''}
        case userActionTypes.USER_REGISTER_SUCCESS:
            return {...state, loading: false, userInfo: action.payload}
        case userActionTypes.USER_DETAILS_REQUEST:
            return {...state, loading: true, error: ''}
        case userActionTypes.USER_DETAILS_SUCCESS:
            return {...state, loading: false}
        case userActionTypes.USER_UPDATE_REQUEST:
            return {...state, loading: true, error: ''}
        case userActionTypes.USER_UPDATE_SUCCESS:
            return {...state, loading: false, userInfo: action.payload}
        default:
            return state
    }
}
