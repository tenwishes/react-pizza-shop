import React from 'react';
import s from './NotFoundPizza.module.scss'

export function NotFoundPizza(){
    return (
        <div className={s.NotFoundPizza}>
            <h2>Error ⚠️</h2>
            <span>Failed to get pizzas, please try again later.</span>
        </div>
    )
}