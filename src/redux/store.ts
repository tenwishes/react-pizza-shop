import { configureStore } from '@reduxjs/toolkit'
// Здесь будут импортироваться все редюсеры
import filterSlice from "./filter/slice";
import cartSlice from "./cart/slice";
import pizzaSlice from "./pizza/slice";




import {useDispatch} from "react-redux";

export const store = configureStore({
    reducer: {
        filter: filterSlice.reducer,
        cart: cartSlice.reducer,
        pizza: pizzaSlice.reducer,
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>();
