import PuppyModel from "../../models/puppies";

export enum PuppyTypes {
    PUPPY_LIST_REQUEST = 'PUPPY_LIST_REQUEST',
    PUPPY_LIST_SUCCESS = 'PUPPY_LIST_SUCCESS',
    PUPPY_LIST_ERROR = 'PUPPY_LIST_ERROR',
    SINGLE_PUPPY_REQUEST = 'SINGLE_PUPPY_REQUEST',
    SINGLE_PUPPY_SUCCESS = 'SINGLE_PUPPY_SUCCESS',
    SINGLE_PUPPY_ERROR = 'SINGLE_PUPPY_ERROR'
}

interface RequestPuppyListAction {
    type: typeof PuppyTypes.PUPPY_LIST_REQUEST
}

interface RequestPuppySuccessAction {
    type: typeof PuppyTypes.PUPPY_LIST_SUCCESS
    payload: PuppyModel[]
}

interface RequestPuppyErrorAction {
    type: typeof PuppyTypes.PUPPY_LIST_ERROR,
    payload: string
}

interface RequestSinglePuppyAction {
    type: typeof PuppyTypes.SINGLE_PUPPY_REQUEST
}

interface SinglePuppySuccessAction {
    type: typeof PuppyTypes.SINGLE_PUPPY_SUCCESS
    payload: PuppyModel
}

interface SinglePuppyErrorAction {
    type: typeof PuppyTypes.SINGLE_PUPPY_ERROR,
    payload: string
}

export type PuppyActionTypes =
    RequestPuppyListAction
    | RequestPuppySuccessAction
    | RequestPuppyErrorAction
    | RequestSinglePuppyAction
    | SinglePuppySuccessAction
    | SinglePuppyErrorAction
