import React from "react";
import style from "./We_protect.module.scss";
import Image from "next/image";
import main_image from "../../../public/image/We_protect/person.png";
import hourglass_clear from "../../../public/image/We_protect/hourglass_clear.png";
import hourglass_send from "../../../public/image/We_protect/hourglass_send.png";
import money from "../../../public/image/We_protect/money1.png";
import money_top from "../../../public/image/We_protect/money_top.png";
import We_protect_card from "./We_protect_card";
export default function We_protect() {
  return (
    <div className={style.We_protect}>
      <div className={style.wrapper}>
        <div className={style.We_protect_row}>
          <div className={style.content}>
            <div className={style.content_label}>
              <h2 className={style.label}>Ми захищаємо вас від двох пасток</h2>
              <p className={style.sub_label}>
                Відповідно до дослідження McKinsey Oxford
              </p>
            </div>
            <div className={style.content_row}>
              <We_protect_card
                count="01"
                name="Захист від перевитрати"
                text="Перед початком роботи ми узгоджуємо фіксовану суму, щоб уникнути непорозумінь і непередбачених витрат. З нами ви точно знаєте, скільки коштуватиме ваш проект і можете спокійно працювати над його виконанням. Проте, якщо ви бажаєте додати нові функціональності, ми готові узгодити додаткові витрати за ці зміни в роботі."
              >
                {" "}
                <Image
                  src={money}
                  className={style.money_and_back_1}
                  alt="money_and_back"
                />
                <Image className={style.money_top} src={money_top} alt="" />
              </We_protect_card>
              <We_protect_card
                count="02"
                name="Захист від перевищення часу"
                text="Ми фіксуємо чіткий графік для вашого проєкту, проводимо ретельний аналіз та планування вимог, щоб уникнути можливих затримок. Завдяки нашому підходу ви завжди матимете чітке уявлення про терміни завершення, що дозволяє управляти очікуваннями та забезпечує успішну реалізацію проєкту в обумовлені строки."
              >
                <Image
                  src={hourglass_clear}
                  className={style.hourglass_clear}
                  alt="hourglass_clear"
                />
                <Image
                  src={hourglass_send}
                  className={style.hourglass_send}
                  alt="hourglass_send"
                />
              </We_protect_card>
            </div>
          </div>
          <div className={style.main_image}>
            <Image src={main_image} width={400} height={450} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
