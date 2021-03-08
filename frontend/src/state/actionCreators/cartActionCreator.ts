import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import axios from "axios";

import {CartActionTypes} from "../actionTypes";
import {CartModel, OrderModel, PricesModel, ShippingInfoModel} from "../../models/cart";

export const addItemToCart = function(id:string, qty: number): ThunkAction<Promise<void>, {}, {}, AnyAction> {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        try {
            const {data} = await axios.get(`/api/puppy/${id}`)
            const cartItems: CartModel = {
                puppy: data,
                qty
            }
            dispatch({
                type: CartActionTypes.CART_ADD_ITEM,
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
        type: CartActionTypes.CART_REMOVE_ITEM,
        payload: id
    }
}

export const saveShippingAddress = function(info: ShippingInfoModel): ThunkAction<Promise<void>, {}, {}, AnyAction> {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        try {
            dispatch({
                type: CartActionTypes.SAVE_SHIPPING_INFO,
                payload: info
            })

            // localStorage.setItem('shippingInfo', JSON.stringify(info))
        } catch (e) {
            console.log(e)
        }
    };
}

export const createOrder = function(info: ShippingInfoModel, items: CartModel[], prices: PricesModel, token: string): ThunkAction<Promise<void>, {}, {}, AnyAction> {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        try {
            const payload: OrderModel = {
                orderItems: items,
                shippingAddress: {
                    address: info.address,
                    city: info.city,
                    postalCode: info.postalCode,
                    country: info.country || ''
                },
                paymentMethod: info.paymentMethod,
                prices
            }

            const {data} = await axios.post('/api/order', payload,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                })

            dispatch({
                type: CartActionTypes.PLACE_ORDER,
                payload: data
            })
        } catch (e) {
            console.log(e)
        }
    }
}
