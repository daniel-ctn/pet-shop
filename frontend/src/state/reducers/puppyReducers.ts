import PuppyModel from "../../models/puppies";
import {PuppyAction, PuppyAction} from "../actionTypes/puppyAction";

interface PuppyState {
    puppies?: PuppyModel[],
    currentPuppy?: PuppyModel,
    loading: boolean,
    error?: string
}

const initialState: PuppyState = {
    puppies: [],
    loading: false
}

const puppyReducers = (state: PuppyState = initialState, action: PuppyAction): PuppyState => {
    switch (action.type) {
        case PuppyActionTypes.PUPPY_LIST_REQUEST:
            return {loading: true, puppies: []}
        case PuppyActionTypes.PUPPY_LIST_SUCCESS:
            return {loading: false, puppies: action.payload}
        case PuppyActionTypes.PUPPY_LIST_ERROR:
            return {loading: false, puppies: [], error: action.payload}
        case PuppyActionTypes.SINGLE_PUPPY_REQUEST:
            return {loading: true, puppies: []}
        case PuppyActionTypes.SINGLE_PUPPY_SUCCESS:
            return {loading: false, currentPuppy: action.payload}
        case PuppyActionTypes.SINGLE_PUPPY_ERROR:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export default puppyReducers
