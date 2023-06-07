export type CartType = {
    totalPrice: number;
    totalCount: number;
    items: CartItemsType[];
}

export type CartItemsType = {
    id: number;
    uuid: string;
    title: string;
    price: number;
    imageUrl: string;
    size: number;
    type: string;
    count: number;
}