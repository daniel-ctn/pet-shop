import {CartModel} from "../../models/cart";

export enum CartActionTypes {
    CART_ADD_ITEM = 'CART_ADD_ITEM',
    CART_REMOVE_ITEM = 'CART_REMOVE_ITEM'
}

interface AddCartItemAction {
    type: CartActionTypes.CART_ADD_ITEM,
    payload: CartModel
}

interface RemoveCartItemAction {
    type: CartActionTypes.CART_REMOVE_ITEM,
    payload: string
}

export type CartAction = AddCartItemAction | RemoveCartItemAction


