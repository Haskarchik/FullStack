import React from "react";
import style from "./What_you_get.module.scss";
import What_you_get_card from "./What_you_get_card";
import Image from "next/image";
import money from "../../../public/image/What_you_get/money.png";
import man from "../../../public/image/What_you_get/man.png";
import man_head from "../../../public/image/What_you_get/man_head.png";
import notebook from "../../../public/image/What_you_get/notebook.png";
import notebook_note from "../../../public/image/What_you_get/notebook_note.png";
import rocket from "../../../public/image/What_you_get/rocket.png";
import rocket_active_fire from "../../../public/image/What_you_get/rocket_active_fire.png";
import rocket_fire from "../../../public/image/What_you_get/rocket_fire.png";
import shield from "../../../public/image/What_you_get/shield.png";
import shield_Daw from "../../../public/image/What_you_get/shield_Daw.png";
import some_bottom from "../../../public/image/What_you_get/some_bottom.png";
import some_center from "../../../public/image/What_you_get/some_center.png";
import some_gear from "../../../public/image/What_you_get/some_gear.png";
import card from "../../../public/image/What_you_get/card.png";
import lighting from "../../../public/image/What_you_get/lighting.png";

export default function What_you_get() {
  return (
    <div className={style.What_you_get}>
      <div className={style.wrapper}>
        <div className={style.label}>Що Ви отримаєте?</div>
        <div className={style.card_row}>
          <What_you_get_card
            name="До 30% економії ваших коштів"
            text="Мінімізуйте ваші фінансові витрати, відмовляючись від найму розробників."
          >
            <Image className={style.money} src={money} alt="" />
          </What_you_get_card>
          <What_you_get_card
            name="Немає проєкту = немає 
оплати"
            text="Ви можете уникнути виплати зарплати розробникам, якщо у вас немає нового проєкту."
          >
            <Image className={style.card} src={card} alt="" />
          </What_you_get_card>
          <What_you_get_card
            name="Пропонуйте нові ідеї щодо послуг"
            text="ІТ-новинка щодо розробки у великому попиті. Обирайте нас для повних ІТ-рішень."
          >
            <Image className={style.rocket} src={rocket} alt="" />
            <Image className={style.rocket_fire} src={rocket_fire} alt="" />
            <Image
              className={style.rocket_active_fire}
              src={rocket_active_fire}
              alt=""
            />
          </What_you_get_card>{" "}
          <What_you_get_card
            name="Отримайте наш досвід, працюючи разом"
            text="Впродовж трьох років наші експерти здобули великого технологічного досвіду."
          >
            <Image className={style.notebook} src={notebook} alt="" />
            <Image className={style.notebook_note} src={notebook_note} alt="" />
          </What_you_get_card>{" "}
          <What_you_get_card
            name="Біле маркування 
та NDA"
            text="Безпека проєкту: абсолютне біле маркування, NDA щодо конфіденційності.

"
          >
            <Image className={style.shield} src={shield} alt="" />
            <Image className={style.shield_Daw} src={shield_Daw} alt="" />
          </What_you_get_card>{" "}
          <What_you_get_card
            name="Отримайте наш потенціал доставки"
            text="Ми орієнтуємося на розвиток через здатність найму 25-ти інженерів та 2ох менеджерів."
          >
            <Image className={style.lighting} src={lighting} alt="" />
          </What_you_get_card>{" "}
          <What_you_get_card
            name="Знайдення сучасного спеціаліста"
            text="Продуктивний департамент  рекрутингу, який націлений на швидкий пошук."
          >
            <Image className={style.man_head} src={man_head} alt="" />

            <Image className={style.man} src={man} alt="" />
          </What_you_get_card>{" "}
          <What_you_get_card
            name="Якість і підтримка протягом проєкту"
            text="Доставлений продукт, який має право на подальшу тех. підтримку від нас."
          >
            <Image className={style.some_center} src={some_center} alt="" />
            <Image className={style.some_bottom} src={some_bottom} alt="" />
            <Image className={style.some_gear} src={some_gear} alt="" />
          </What_you_get_card>
        </div>
      </div>
    </div>
  );
}
