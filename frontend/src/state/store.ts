import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk, {ThunkMiddleware} from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import puppyReducers from "./reducers/puppyReducers";
import {PuppyActionTypes} from "./actionTypes/puppyTypes";

const rootReducer = combineReducers({puppy: puppyReducers})

export type RootState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<RootState, PuppyActionTypes>)))

export default store
