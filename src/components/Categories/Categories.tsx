import React, {memo} from 'react';
import s from './Categories.module.scss'
import {useDispatch} from "react-redux";
import {setCategoryId} from "../../redux/filter/slice";

type CategoriesPropsType = {
    id: number;
};

const categories = ['All', 'Meat', 'Vegetarian', 'Cheese', 'Sweet'];

export const Categories = memo(function Categories({id}: CategoriesPropsType) {
    const dispatch = useDispatch()
    return (
        <div className={s.categories}>
            <ul>
                {categories.map((category, i) => (
                    <li key={i}
                        onClick={() => dispatch(setCategoryId({index: i, name: category}))}
                        className={id === i ? s.active : ''}>
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
}
)