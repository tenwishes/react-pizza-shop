import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {FilterType, SortPropertiesType} from "./types";
import {RootState} from "../store";

const initialState: FilterType = {
    categoryId: 0,
    searchValue: "",
    homePageTitle: "All",
    sortProperties: {
        name: "popularity (↓)",
        type: "rating",
        order: "desc"
    }
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId: (state, action: PayloadAction<{index: number, name: string}>) => {
            state.categoryId = action.payload.index
            state.homePageTitle = action.payload.name
        },
        setSort: (state, action: PayloadAction<SortPropertiesType>) => {
            state.sortProperties = action.payload
        },
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload
        }
    }
});

export const {setCategoryId, setSort, setSearchValue} = filterSlice.actions;

export default filterSlice;