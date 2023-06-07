import React, {useState} from 'react'
import s from './PizzaCard.module.scss'
import '../styles/button.scss'
import {useDispatch, useSelector} from "react-redux";
import {addItemToCart} from "../../redux/cart/slice";
import {RootState} from "../../redux/store";
import {CartItemsType} from "../../redux/cart/types";

type PizzaCardPropsType = {
    id: number;
    title: string;
    prices: number[];
    imageUrl: string;
    types: number[];
    sizes: number[];
}

export type PizzaAddType = {
    id: number
    title: string
    price: number
    size: number
    imageUrl: string,
    type: string
}

const typesNames = ['thin', 'traditional'];

export function PizzaCard({id, title, prices, imageUrl, types, sizes}: PizzaCardPropsType) {
    const dispatch = useDispatch();
    const [activeType, setActiveType] = useState(0);
    const [activeSize, setActiveSize] = useState(0);

    const cartItems = useSelector((state: RootState) => state.cart.items.filter((item: CartItemsType) => item.id === id));
    const cartItemsCount = cartItems.reduce((sum: number, item: CartItemsType) => sum + item.count, 0);

    const onClickAdd = () => {
        dispatch(addItemToCart({
            id,
            title,
            price: prices[activeSize],
            imageUrl,
            size: sizes[activeSize],
            type: typesNames[activeType],
        }));
    }

    return (
        <>
            <div className={s.wrapper}>
                <div className={s.card} key={id}>
                    <img className={s.img} src={imageUrl} alt={"pizza"}/>
                    <h4 className={s.title}>{title}</h4>
                    <div className={s.selector}>
                        <ul>
                            {types.map((typeId: number) => (
                                <li
                                    key={typeId}
                                    onClick={() => setActiveType(typeId)}
                                    className={activeType === typeId ? s.active : ''}>
                                    {typesNames[typeId]}
                                </li>
                            ))}
                        </ul>
                        <ul>
                            {sizes.map((size: number, i: number) => (
                                <li
                                    key={size}
                                    onClick={() => setActiveSize(i)}
                                    className={activeSize === i ? s.active : ''}>
                                    {size} cm.
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={s.bottom}>
                        <div className={s.price}>{prices[activeSize]}€</div>
                        <button className="button button--outline button--add" onClick={onClickAdd}>
                            <svg
                                className={s.addIcon}
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                    fill="white"
                                />
                            </svg>
                            <span>Add to cart</span>
                            {cartItemsCount > 0 && <i>{cartItemsCount}</i>}
                        </button>
                    </div>
                </div>
            </div>
        </>

    )
}