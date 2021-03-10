import {CartModel, OrderModel, ShippingInfoModel} from "../../models/cart";

export enum CartActionTypes {
    CART_ADD_ITEM = 'CART_ADD_ITEM',
    CART_REMOVE_ITEM = 'CART_REMOVE_ITEM',
    SAVE_SHIPPING_INFO = 'SAVE_SHIPPING_INFO',
    PLACE_ORDER = 'PLACE_ORDER',
    GET_ORDER = 'GET_ORDER',
    ORDER_PAY = 'ORDER_PAY'
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

interface GetOrderAction {
    type: CartActionTypes.GET_ORDER,
    payload: OrderModel
}

interface OrderPayAction {
    type: CartActionTypes.ORDER_PAY,
    payload: boolean
}

export type CartAction = AddCartItemAction | RemoveCartItemAction | SaveShippingInfoAction |
    PlaceOrderAction | GetOrderAction | OrderPayAction


