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

export interface FullOrderModel extends OrderModel{
    _id? : string;
    isPaid?: boolean;
    paidAt?: string;
    isDelivered?: boolean;
    deliveredAt?: string;
    user?: string;
}

export interface PaymentResultModel {
    id: string;
    status: string;
    update_time: string;
    email_address: string;
}
