import React, { useState } from "react";
import style from "./Stage_of_quiz_develop.module.scss";

interface cardInterface {
  name: string;
  content: string;
  styleName: string;
}

export default function Stage_of_quiz_develop_card({
  name,
  content,
  styleName,
}: cardInterface) {
  return (
    <div className={style.graph_card} style={{ justifyContent: `${content}` }}>
      <div className={style.card_count}>
        <div className={`${styleName}` + " " + style.number}>0</div>
      </div>
      <div className={style.card_label}>{name}</div>
    </div>
  );
}
