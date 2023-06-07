import React, {useEffect} from "react";
import {useSelector} from "react-redux";

import {RootState, useAppDispatch} from "../../redux/store";
import {fetchPizzas} from "../../redux/pizza/asyncActions";
import {Pizza, SearchPizzaParams} from "../../redux/pizza/types";


import {Sort, Categories, PizzaCard, Skeleton, NotFoundPizza} from "../../components";
import s from './Home.module.scss'
import axios from "axios";
import {getFilter} from "../../redux/filter/selector";
import {selectPizzaData} from "../../redux/pizza/selector";


export function Home() {
    const dispatch = useAppDispatch();

    const {status, items} = useSelector(selectPizzaData);
    const {homePageTitle, categoryId, searchValue, sortProperties} = useSelector(getFilter);

    const getPizzas = () => {
        const category = categoryId > 0 ? `&category=${categoryId}` : ''
        const search = searchValue ? `&search=${searchValue}` : ''
        const sort = sortProperties.type ? `&sortBy=${sortProperties.type}` : ''
        const order = sortProperties.order ? `&order=${sortProperties.order}` : ''

        const params: SearchPizzaParams = {category, search, sort, order}
        dispatch(fetchPizzas(params))

        window.scrollTo(0, 0);
    };

    useEffect(() => {
        getPizzas();
    }, [categoryId, sortProperties, searchValue])

    const skeletons = Array(4).fill(0).map((_, index: number) => <Skeleton key={index}/>)
    const pizzas = items.map((pizza: Pizza) =>
        <PizzaCard
            key={pizza.id}
            id={pizza.id}
            title={pizza.title}
            sizes={pizza.sizes}
            types={pizza.types}
            imageUrl={pizza.imageUrl}
            prices={pizza.prices}
        />
    )

    return (
        <>
            <div className={s.wrapper}>
                <div className={s.container}>
                    <div className={s.filter}>
                        <Categories id={categoryId}/>
                        <Sort/>
                    </div>
                    {status === "error" ? " " : <h1 className={s.title}>{homePageTitle}</h1>}
                    {
                        status === "error" ? (
                            <NotFoundPizza/>
                        ) : (
                            <div className={s.pizzas}>
                                {status === "pending" ? skeletons : pizzas}
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}