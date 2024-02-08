import React from "react";
import style from "./Stage_of_quiz_develop.module.scss";
import Stage_of_quiz_develop_card from "./Stage_of_quiz_develop_card";

export default function Stage_of_quiz_develop() {
  return (
    <div className={style.Stage_of_quiz_develop}>
      <div className={style.wrapper}>
        <div className={style.label}>
          Які задачі вирішує ЅЕO-просування сайту
        </div>
        <div className={style.graphik}>
          <Stage_of_quiz_develop_card
            count="01"
            content="flex-start"
            name="Розробка технічного
            завдання"
          ></Stage_of_quiz_develop_card>
          <Stage_of_quiz_develop_card
            count="02"
            content="flex-end"
            name="Розробка прототипу 
            і запитань до квізу"
          ></Stage_of_quiz_develop_card>
          <Stage_of_quiz_develop_card
            count="03"
            content="flex-start"
            name="Розробка дизайну 
            сайту"
          ></Stage_of_quiz_develop_card>
          <Stage_of_quiz_develop_card
            count="04"
            content="flex-end"
            name="Налаштування 
            контекстної реклами"
          ></Stage_of_quiz_develop_card>
          <Stage_of_quiz_develop_card
            count="05"
            content="flex-start"
            name="Розробка функціоналу
            сайту"
          ></Stage_of_quiz_develop_card>
          <Stage_of_quiz_develop_card
            count="06"
            content="flex-end"
            name="Реліз проєкту"
          ></Stage_of_quiz_develop_card>
          <Stage_of_quiz_develop_card
            count="07"
            content="flex-start"
            name="Супровід і 
            оптимізація"
          ></Stage_of_quiz_develop_card>
        </div>
      </div>
    </div>
  );
}
