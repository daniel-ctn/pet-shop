import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import axios from "axios";
import {userActionTypes} from "../actionTypes/userAction";

export const login = function (email: string, password: string): ThunkAction<Promise<void>, {}, {}, AnyAction> {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        try {
            dispatch({type: userActionTypes.USER_LOGIN_REQUEST})

            const {data} = await axios.post('/api/user/login', {email, password},
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

            dispatch({
                type: userActionTypes.USER_LOGIN_SUCCESS,
                payload: data
            })

            // localStorage.setItem('user_info', JSON.stringify(data))
        } catch (e) {
            dispatch({
                type: userActionTypes.USER_LOGIN_ERROR,
                payload: e.response.data.message
            })
        }
    };
}

export const logout = () => {
    return {type: userActionTypes.USER_LOGOUT}
}

export const register = function (name: string, email: string, password: string):
    ThunkAction<Promise<void>, {}, {}, AnyAction> {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        try {
            dispatch({type: userActionTypes.USER_REGISTER_REQUEST})

            const {data} = await axios.post('/api/user',
                {name, email, password},
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

            dispatch({
                type: userActionTypes.USER_REGISTER_SUCCESS,
                payload: data
            })

            // localStorage.setItem('user_info', JSON.stringify(data))
        } catch (e) {
            dispatch({
                type: userActionTypes.USER_REGISTER_ERROR,
                payload: e.response.data.message
            })
        }
    };
}

