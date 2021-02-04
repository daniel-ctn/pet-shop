import PuppyModel from "../../models/puppies";
import {PuppyActionTypes, PuppyTypes} from "../actionTypes/puppyTypes";

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

const puppyReducers = (state: PuppyState = initialState, action: PuppyActionTypes): PuppyState => {
    switch (action.type) {
        case PuppyTypes.PUPPY_LIST_REQUEST:
            return {loading: true, puppies: []}
        case PuppyTypes.PUPPY_LIST_SUCCESS:
            return {loading: false, puppies: action.payload}
        case PuppyTypes.PUPPY_LIST_ERROR:
            return {loading: false, puppies: [], error: action.payload}
        case PuppyTypes.SINGLE_PUPPY_REQUEST:
            return {loading: true, puppies: []}
        case PuppyTypes.SINGLE_PUPPY_SUCCESS:
            return {loading: false, currentPuppy: action.payload}
        case PuppyTypes.SINGLE_PUPPY_ERROR:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export default puppyReducers
