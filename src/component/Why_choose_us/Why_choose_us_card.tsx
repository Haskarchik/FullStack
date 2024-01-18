import React from "react";
import style from "./Why_choose_us.module.scss";


interface CardInterface{
    label:string;
    text:string;
    children:React.ReactNode
}

export default function Why_choose_us_card({label, text,children}:CardInterface) {
  return (
    <div className={style.card}>
      <div className={style.card_image}>
      {children}
      </div>
      <div className={style.card_label}>{label}</div>
      <div className={style.card_text}>
       {text}
      </div>
    </div>
  );
}
