import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CartType, CartItemsType} from "./types";
import {v1} from "uuid";
import {PizzaAddType} from "../../components";

const initialState: CartType = {
    totalPrice: 0,
    totalCount: 0,
    items: []
}

const getTotalPrice = (arr: CartItemsType[]) => {
    return arr.reduce((sum: number, obj: CartItemsType) => obj.price * obj.count + sum, 0)
}

const getTotalCount = (arr: CartItemsType[]) => {
    return arr.reduce((sum: number, obj: CartItemsType) => obj.count + sum, 0)
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state, action: PayloadAction<PizzaAddType>) {
            const newItem = {
                id: action.payload.id,
                uuid: v1(),
                title: action.payload.title,
                price: action.payload.price,
                imageUrl: action.payload.imageUrl,
                size: action.payload.size,
                type: action.payload.type,
                count: 1
            }
            const findItem = state.items.find((item) => {
                return item.id === action.payload.id && item.size === action.payload.size && item.type === action.payload.type
            })
            if (findItem) {
                findItem.count++
                state.totalPrice = getTotalPrice(state.items)
                state.totalCount =  getTotalCount(state.items)
            } else {
                state.items = [...state.items, newItem]
                state.totalPrice = getTotalPrice(state.items)
                state.totalCount =  getTotalCount(state.items)
            }
        },
        removeItemFromCart(state, action: PayloadAction<string>) {
            state.items = state.items.filter((item) => item.uuid !== action.payload)
            state.totalPrice = getTotalPrice(state.items)
            state.totalCount =  getTotalCount(state.items)
        },
        addItemCount(state, action: PayloadAction<string>) {
            const findItem = state.items.find((item) => item.uuid === action.payload)
            if (findItem) {
                findItem.count++
                state.totalPrice = getTotalPrice(state.items)
                state.totalCount =  getTotalCount(state.items)
            }
        },
        removeItemCount(state, action: PayloadAction<string>) {
            const findItem = state.items.find((item) => item.uuid === action.payload)
            if (findItem) {
                findItem.count--
                state.totalPrice = getTotalPrice(state.items)
                state.totalCount =  getTotalCount(state.items)
            }
        },
        clearItemsFromCart(state) {
            state.items = []
            state.totalPrice = getTotalPrice(state.items)
            state.totalCount =  getTotalCount(state.items)
        }
    }
});

export const {addItemToCart, removeItemFromCart, clearItemsFromCart, addItemCount, removeItemCount} = cartSlice.actions;

export default cartSlice;

