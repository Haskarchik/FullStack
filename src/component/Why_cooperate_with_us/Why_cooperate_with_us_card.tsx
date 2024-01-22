import React, { Children } from "react";
import style from "./Why_cooperate_with_us.module.scss";
interface InterfaceCard {
  name: string;
  text: string;
  children: React.ReactNode;
}

export default function Why_cooperate_with_us_card({
  children,
  name,
  text,
}: InterfaceCard) {
  return (
    <div className={style.card}>
      <div className={style.card_image}>{children}</div>
      <div className={style.card_label}>{name}</div>
      <div className={style.card_text}>{text}</div>
    </div>
  );
}
