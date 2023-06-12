import React from "react";
import s from "./NotFound.module.scss";
import {NotFoundBlock} from "../../components";

export function NotFound() {
    return (
        <div className={s.root}>
           <NotFoundBlock />
        </div>
    );
}