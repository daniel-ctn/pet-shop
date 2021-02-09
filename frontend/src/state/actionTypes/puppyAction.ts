import PuppyModel from "../../models/puppies";

export enum PuppyActionTypes {
    PUPPY_LIST_REQUEST = 'PUPPY_LIST_REQUEST',
    PUPPY_LIST_SUCCESS = 'PUPPY_LIST_SUCCESS',
    PUPPY_LIST_ERROR = 'PUPPY_LIST_ERROR',
    SINGLE_PUPPY_REQUEST = 'SINGLE_PUPPY_REQUEST',
    SINGLE_PUPPY_SUCCESS = 'SINGLE_PUPPY_SUCCESS',
    SINGLE_PUPPY_ERROR = 'SINGLE_PUPPY_ERROR'
}

interface RequestPuppyListAction {
    type: typeof PuppyActionTypes.PUPPY_LIST_REQUEST
}

interface RequestPuppySuccessAction {
    type: typeof PuppyActionTypes.PUPPY_LIST_SUCCESS
    payload: PuppyModel[]
}

interface RequestPuppyErrorAction {
    type: typeof PuppyActionTypes.PUPPY_LIST_ERROR,
    payload: string
}

interface RequestSinglePuppyAction {
    type: typeof PuppyActionTypes.SINGLE_PUPPY_REQUEST
}

interface SinglePuppySuccessAction {
    type: typeof PuppyActionTypes.SINGLE_PUPPY_SUCCESS
    payload: PuppyModel
}

interface SinglePuppyErrorAction {
    type: typeof PuppyActionTypes.SINGLE_PUPPY_ERROR,
    payload: string
}

export type PuppyAction =
    RequestPuppyListAction
    | RequestPuppySuccessAction
    | RequestPuppyErrorAction
    | RequestSinglePuppyAction
    | SinglePuppySuccessAction
    | SinglePuppyErrorAction
