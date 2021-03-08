import {CartModel, OrderModel, ShippingInfoModel} from "../../models/cart";
import {CartAction, CartActionTypes} from "../actionTypes";

interface CartState {
    cartItems: CartModel[],
    shippingInfo?: ShippingInfoModel,
    orderSuccess: boolean,
    order?: OrderModel,
    loading: boolean
}

const initialState: CartState = {
    cartItems: [],
    orderSuccess: false,
    loading: false
}

const cartReducers = (state: CartState = initialState, action: CartAction): CartState => {
    switch (action.type) {
        case CartActionTypes.CART_ADD_ITEM:
            const existedItem = state.cartItems.find(i => i.puppy._id === action.payload.puppy._id)
            if (existedItem) {
                return {...state, cartItems: state.cartItems.map(x => x.puppy._id === existedItem.puppy._id ? action.payload : x)}
            } else {
                return {...state, cartItems: [...state.cartItems, action.payload]}
            }
        case CartActionTypes.CART_REMOVE_ITEM:
            return {...state, cartItems: state.cartItems.filter(i => i.puppy._id !== action.payload)}
        case CartActionTypes.SAVE_SHIPPING_INFO:
            return {...state, shippingInfo: action.payload}
        case CartActionTypes.PLACE_ORDER:
            return {...state, order: action.payload, orderSuccess: true}
        default:
            return state
    }
}

export default cartReducers
