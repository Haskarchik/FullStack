import React from "react";
import style from "./Stage_of_quiz_develop.module.scss";

interface cardInterface {
  name: string;
  count: string;
  content: string;
}

export default function Stage_of_quiz_develop_card({
  name,
  content,
  count,
}: cardInterface) {
  return (
    <div className={style.graph_card} style={{ justifyContent: `${content}` }}>
      <div className={style.card_count}>{count}</div>

      <div className={style.card_label}>{name}</div>
    </div>
  );
}
