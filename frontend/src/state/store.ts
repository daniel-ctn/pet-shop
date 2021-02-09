import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk, {ThunkMiddleware} from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

import puppyReducers from "./reducers/puppyReducers";
import {PuppyAction} from "./actionTypes/puppyAction";
import cartReducers from "./reducers/cartReducers";
import {userReducers} from "./reducers/userReducers";

const rootReducer = combineReducers({
    puppy: puppyReducers,
    cart: cartReducers,
    user: userReducers
})

export type RootState = ReturnType<typeof rootReducer>

// const userFromStorage = localStorage.getItem('user_info') ?? null
// const cartFromStorage = localStorage.getItem('cart') ?? null
// const puppyFromStorage = localStorage.getItem('puppy_list') ?? null

const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<RootState, PuppyAction>)))

export default store
