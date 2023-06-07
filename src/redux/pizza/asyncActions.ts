import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {Pizza, SearchPizzaParams} from './types';
import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
    'pizza/fetchPizzas',
    async (params) => {
        const {sort, order, category, search} = params;
        const {data} = await axios.get<Pizza[]>(`${import.meta.env.VITE_PIZZA_API_URL}${category}${sort}${order}${search}`);
        return data;
    },
);