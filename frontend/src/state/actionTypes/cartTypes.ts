import {CartModel} from "../../models/cart";

export enum CartTypes {
    CART_ADD_ITEM = 'CART_ADD_ITEM',
    CART_REMOVE_ITEM = 'CART_REMOVE_ITEM'
}

interface AddCartItemAction {
    type: CartTypes.CART_ADD_ITEM,
    payload: CartModel
}

interface RemoveCartItemAction {
    type: CartTypes.CART_REMOVE_ITEM,
    payload: string
}

export type CartActionTypes = AddCartItemAction | RemoveCartItemAction


