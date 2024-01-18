import React from "react";
import style from "./What_sites_we_develop.module.scss";
import Link from "next/link";

interface CardProps {
  name: string;
  link: string;
  children: React.ReactChild | React.ReactNode;
}
export default function What_sites_we_develop_card({
  name,
  link,
  children,
}: CardProps) {
  return (
    <Link href={link}>
      <div className={style.card}>
        <div className={style.card_row}>
          <div className={style.image}>{children}</div>
          <span>{name} </span>
        </div>
        <button className={style.card_btn}></button>
      </div>
    </Link>
  );
}
