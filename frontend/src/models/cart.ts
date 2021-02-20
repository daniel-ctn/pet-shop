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
}
