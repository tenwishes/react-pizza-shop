export type FilterType = {
    categoryId: number,
    searchValue: string,
    homePageTitle: string,
    sortProperties: SortPropertiesType
}

export type SortPropertiesType = {
    name: string,
    type: string,
    order: string
}

export interface FilterSliceState {
    searchValue: string;
    categoryId: number;
    currentPage: number;
    sort: SortPropertiesType;
}