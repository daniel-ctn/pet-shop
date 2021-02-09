import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import axios from "axios";

import {PuppyActionTypes} from "../actionTypes/puppyAction";

export const requestPuppyList = function (): ThunkAction<Promise<void>, {}, {}, AnyAction> {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        try {
            dispatch({type: PuppyActionTypes.PUPPY_LIST_REQUEST})

            const {data} = await axios.get('/api/puppy')

            dispatch({
                type: PuppyActionTypes.PUPPY_LIST_SUCCESS,
                payload: data
            })
            localStorage.setItem('puppy_list', JSON.stringify(data))
        } catch (e) {
            dispatch({
                type: PuppyActionTypes.PUPPY_LIST_ERROR,
                payload: e.response.data.message
            })
        }
    };
}

export const requestSinglePuppy = function (id: string): ThunkAction<Promise<void>, {}, {}, AnyAction> {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        try {
            dispatch({type: PuppyActionTypes.SINGLE_PUPPY_REQUEST})

            const {data} = await axios.get(`/api/puppy/${id}`)

            dispatch({
                type: PuppyActionTypes.SINGLE_PUPPY_SUCCESS,
                payload: data
            })
            localStorage.setItem('puppy_detail', JSON.stringify(data))
        } catch (e) {
            dispatch({
                type: PuppyActionTypes.SINGLE_PUPPY_ERROR,
                payload: e.message
            })
        }
    };
}


