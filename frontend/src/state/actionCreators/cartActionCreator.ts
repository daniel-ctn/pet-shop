import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import axios from "axios";

import {CartTypes} from "../actionTypes/cartTypes";
import {CartModel} from "../../models/cart";

export const addItemToCart = function(id:string, qty: number): ThunkAction<Promise<void>, {}, {}, AnyAction> {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        try {
            const {data} = await axios.get(`/api/puppy/${id}`)
            const cartItems: CartModel = {
                puppy: data,
                qty
            }
            dispatch({
                type: CartTypes.CART_ADD_ITEM,
                payload: cartItems
            })
            // localStorage.setItem('cartItems', JSON.stringify(cartItems))
        } catch (e) {
            console.log(e)
        }
    };
}

export const removeCartItem = (id: string) => {
    return {
        type: CartTypes.CART_REMOVE_ITEM,
        payload: id
    }
}