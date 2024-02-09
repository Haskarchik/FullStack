import React, { useState } from "react";
import style from "./Stage_of_quiz_develop.module.scss";

interface cardInterface {
  name: string;
  count: any;
  content: string;
  styleName: string;
}

export default function Stage_of_quiz_develop_card({
  name,
  content,
  count,
  styleName,
}: cardInterface) {
  const [state, setState] = useState(false)
  console.log(styleName);
  
  return (
    <div className={style.graph_card} style={{ justifyContent: `${content}` }}
    onMouseEnter={ e=> setState(true)}
    onMouseLeave={e=> setState(false)}>
   
      <div className={style.card_count}>
        <div className={state ? style.number + " " + styleName : style.number}>0</div>
      </div>

      <div className={style.card_label}>{name}</div>
    </div>
  );
}
