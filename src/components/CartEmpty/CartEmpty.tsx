import React from 'react'
import s from './CartEmpty.module.scss'
import {cartIsEmpty} from "../../assets/icons";
import {Link} from "react-router-dom";

export function CartEmpty() {
    return (
        <div className={s.root}>
            <h1>Cart is empty 😕</h1>
            <span>Maybe you haven't added pizzas yet</span>
            <img src={cartIsEmpty} alt="Cart is empty" />
           <Link to={"/"}><button>Go back</button></Link>
        </div>
    )
}