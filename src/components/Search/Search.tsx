import React, {ChangeEvent, FormEvent, useCallback} from "react";
import {debounce} from "lodash";
import {useDispatch} from "react-redux";
import {setSearchValue} from "../../redux/filter/slice";
import s from './Search.module.scss'

export function Search() {
    const dispatch = useDispatch()

    const [value, setValue] = React.useState<string>('')
    const inputRef = React.useRef<HTMLInputElement>(null)
    const searchDebounce = useCallback(
        debounce((value: string) => {
            dispatch(setSearchValue(value))
        }, 300), [],
    )

    const onClickClear = () => {
        console.log('click')
        dispatch(setSearchValue(''))
        setValue('')
        inputRef.current?.focus()
    }

    const onChangeHandler = (value: string) => {
        setValue(value)
        searchDebounce(value)
    }

    return (
        <div className={s.input}>
            <svg className={s.icon} enableBackground="new 0 0 32 32" version="1.1" viewBox="0 0 32 32" ><path d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z" id="XMLID_223_"/></svg>
            <input
                ref={inputRef}
                value={value}
                className={s.field}
                placeholder="Search..."
                onChange={(event: ChangeEvent<HTMLInputElement>) => {onChangeHandler(event.currentTarget.value)}}
            />
            {value &&
                <svg onClick={onClickClear} className={s.clearIcon} height="200" id="Layer_1" viewBox="0 0 200 200"><path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z"/></svg>
            }
        </div>
    )
}