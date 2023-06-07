import {RootState} from "../store";

export const getFilter = (state: RootState) => state.filter;
export const getSort = (state: RootState) => state.filter.sortProperties;