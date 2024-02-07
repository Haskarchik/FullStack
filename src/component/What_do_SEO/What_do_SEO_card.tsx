import React from "react";
import style from './What_do_SEO.module.scss'

interface cardInterface{
    name:string;
    children:React.ReactNode;
    content:string;
    top:string
}

export default function What_do_SEO_card({name,children,content,top}:cardInterface) {
  return <div className={style.graph_card}  style={{ justifyContent: `${content}` }}>
    <div className={style.card_img} data-content={top} >
        {children}
    </div>
    <div className={style.card_label}>
        {name}
    </div>
  </div>;
}
