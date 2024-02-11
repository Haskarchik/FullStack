import style from "./Stage_of_quiz_develop.module.scss";
import Stage_of_quiz_develop_card from "./Stage_of_quiz_develop_card";

export default function Stage_of_quiz_develop() {
  return (
    <div className={style.Stage_of_quiz_develop}>
      <div className={style.wrapper}>
        <div className={style.label}>6 етапів розробки квізу</div>
        <div className={style.sub_label}>
          Використовуємо ряд перевірених методик, системно побудованих процесів
          і алгоритмів в комплексі з інноваційними технологіями, щоб створити
          якісний quiz, який сподобається і вам, і користувачам і ефективно
          вирішить бізнес- завдання.
        </div>
        <div className={style.graphik}>
          <Stage_of_quiz_develop_card
            styleName={style.one}
            content="flex-start"
            name="Розробка технічного
            завдання"
          ></Stage_of_quiz_develop_card>
          <Stage_of_quiz_develop_card
            styleName={style.two}
            content="flex-end"
            name="Розробка прототипу 
            і запитань до квізу"
          ></Stage_of_quiz_develop_card>
          <Stage_of_quiz_develop_card
            styleName={style.thri}
            content="flex-start"
            name="Розробка дизайну 
            сайту"
          ></Stage_of_quiz_develop_card>
          <Stage_of_quiz_develop_card
            styleName={style.four}
            content="flex-end"
            name="Налаштування 
            контекстної реклами"
          ></Stage_of_quiz_develop_card>
          <Stage_of_quiz_develop_card
            styleName={style.five}
            content="flex-start"
            name="Розробка функціоналу
            сайту"
          ></Stage_of_quiz_develop_card>
          <Stage_of_quiz_develop_card
            styleName={style.six}
            content="flex-end"
            name="Реліз проєкту"
          ></Stage_of_quiz_develop_card>
          <Stage_of_quiz_develop_card
            styleName={style.seven}
            content="flex-start"
            name="Супровід і 
            оптимізація"
          ></Stage_of_quiz_develop_card>
        </div>
      </div>
    </div>
  );
}
