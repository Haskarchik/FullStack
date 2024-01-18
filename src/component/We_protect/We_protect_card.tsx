import React from "react";
import style from "./We_protect.module.scss";

interface CardInterface{
    count:string;
    name:string;
    text:string;
    children:React.ReactChild | React.ReactNode
}

export default function We_protect_card({name, text, children, count}: CardInterface) {
  return (
    <div className={style.card}>
      <div className={style.card_image}>
        {children}
      </div>
      <div className={style.card_information}>
        <div className={style.card_name_block}>
          <div className={style.card_count}>{count}</div>
          <div className={style.card_name}>{name}</div>
        </div>
        <div className={style.card_text}>
         {text}
        </div>
      </div>
    </div>
  );
}
