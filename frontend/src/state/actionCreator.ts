import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import axios from "axios";

import {PuppyTypes} from "./actionTypes/puppyTypes";

export const requestPuppyList = function(): ThunkAction<Promise<void>, {}, {}, AnyAction> {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        try {
            dispatch({type: PuppyTypes.PUPPY_LIST_REQUEST})

            const {data} = await axios.get('/api/puppy')

            dispatch({
                type: PuppyTypes.PUPPY_LIST_SUCCESS,
                payload: data
            })
        } catch (e) {
            dispatch({
                type: PuppyTypes.PUPPY_LIST_ERROR,
                payload: e.response.data.message
            })
        }
    };
}

export const requestSinglePuppy = function(id: string): ThunkAction<Promise<void>, {}, {}, AnyAction> {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        try {
            dispatch({type: PuppyTypes.SINGLE_PUPPY_REQUEST})

            const {data} = await axios.get(`/api/puppy/${id}`)

            dispatch({
                type: PuppyTypes.SINGLE_PUPPY_SUCCESS,
                payload: data
            })
        } catch (e) {
            dispatch({
                type: PuppyTypes.SINGLE_PUPPY_ERROR,
                payload: e.response.data.message
            })
        }
    };
}


