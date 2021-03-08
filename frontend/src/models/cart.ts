import PuppyModel from "./puppies";

export interface CartModel {
    puppy: PuppyModel,
    qty: number
}

export interface ShippingInfoModel {
    address: string;
    city: string;
    postalCode: number;
    country?: string;
    paymentMethod: string;
}

export interface PricesModel {
    itemsPrice: number;
    taxPrice: number;
    shippingPrice: number;
    totalPrice: number;
}

export interface OrderModel {
    _id? : string;
    orderItems: CartModel[];
    shippingAddress: {
        address: string;
        city: string;
        postalCode: number;
        country: string;
    },
    paymentMethod: string;
    prices: PricesModel;
}
