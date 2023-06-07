export type Pizza = {
    id: number;
    title: string;
    prices: number[];
    imageUrl: string;
    sizes: number[];
    types: number[];
    rating: number;
    category: number;
};

export enum Status {
    PENDING = 'pending',
    SUCCESS = 'completed',
    ERROR = 'error',
}

export type SearchPizzaParams = {
    sort: string,
    order: string,
    category: string,
    search: string,
};

export interface PizzaSliceState {
    items: Pizza[];
    status: Status;
}