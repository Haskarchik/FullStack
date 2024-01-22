import React from "react";
import style from "./What_you_get.module.scss";

interface CardInterface {
  name: string;
  text: string;
  children: React.ReactNode;
}

export default function What_you_get_card({
  name,
  text,
  children,
}: CardInterface) {
  return (
    <div className={style.card}>
      <div className={style.card_row}>
        <div className={style.card_image}>{children}</div>
        <div className={style.card_info}>
          <div className={style.card_label}>{name}</div>
          <div className={style.card_text}>{text}</div>
        </div>
      </div>
    </div>
  );
}
