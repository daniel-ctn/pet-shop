import {CartModel, OrderModel, ShippingInfoModel} from "../../models/cart";

export enum CartActionTypes {
    CART_ADD_ITEM = 'CART_ADD_ITEM',
    CART_REMOVE_ITEM = 'CART_REMOVE_ITEM',
    SAVE_SHIPPING_INFO = 'SAVE_SHIPPING_INFO',
    PLACE_ORDER = 'PLACE_ORDER'
}

interface AddCartItemAction {
    type: CartActionTypes.CART_ADD_ITEM,
    payload: CartModel
}

interface RemoveCartItemAction {
    type: CartActionTypes.CART_REMOVE_ITEM,
    payload: string
}

interface SaveShippingInfoAction {
    type: CartActionTypes.SAVE_SHIPPING_INFO,
    payload: ShippingInfoModel
}

interface PlaceOrderAction {
    type: CartActionTypes.PLACE_ORDER,
    payload: OrderModel
}

export type CartAction = AddCartItemAction | RemoveCartItemAction | SaveShippingInfoAction |
    PlaceOrderAction


