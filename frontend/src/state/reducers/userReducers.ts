import {UserAction, userActionTypes} from "../actionTypes/userAction";
import {UserModel} from "../../models/user";

interface UserState {
    userInfo: UserModel | null,
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
            return {...state, loading: true}
        case userActionTypes.USER_LOGIN_SUCCESS:
            return {...state, loading: false, userInfo: action.payload}
        case userActionTypes.USER_LOGIN_ERROR:
            return {...state, loading: false, userInfo: null, error: action.payload}
        case userActionTypes.USER_LOGOUT:
            return initialState
        default:
            return state
    }
}
