import React from "react";
import style from "./What_you_get.module.scss";
import What_you_get_card from "./What_you_get_card";
import Image from "next/image";
import money from "../../../public/image/What_you_get/money.png";

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
            <Image className={style.img} src={money} alt="" />
          </What_you_get_card>
          <What_you_get_card
            name="Немає проєкту = немає 
оплати"
            text="Ви можете уникнути виплати зарплати розробникам, якщо у вас немає нового проєкту."
          >
            <Image className={style.img} src={money} alt="" />
          </What_you_get_card>
          <What_you_get_card
            name="Пропонуйте нові ідеї щодо послуг"
            text="ІТ-новинка щодо розробки у великому попиті. Обирайте нас для повних ІТ-рішень."
          >
            <Image className={style.img} src={money} alt="" />
          </What_you_get_card>{" "}
          <What_you_get_card
            name="Отримайте наш досвід, працюючи разом"
            text="Впродовж трьох років наші експерти здобули великого технологічного досвіду."
          >
            <Image className={style.img} src={money} alt="" />
          </What_you_get_card>{" "}
          <What_you_get_card
            name="Біле маркування 
та NDA"
            text="Безпека проєкту: абсолютне біле маркування, NDA щодо конфіденційності.

"
          >
            <Image className={style.img} src={money} alt="" />
          </What_you_get_card>{" "}
          <What_you_get_card
            name="Отримайте наш потенціал доставки"
            text="Ми орієнтуємося на розвиток через здатність найму 25-ти інженерів та 2ох менеджерів."
          >
            <Image className={style.img} src={money} alt="" />
          </What_you_get_card>{" "}
          <What_you_get_card
            name="Знайдення сучасного спеціаліста"
            text="Продуктивний департамент  рекрутингу, який націлений на швидкий пошук."
          >
            <Image className={style.img} src={money} alt="" />
          </What_you_get_card>{" "}
          <What_you_get_card
            name="Якість і підтримка протягом проєкту"
            text="Доставлений продукт, який має право на подальшу тех. підтримку від нас."
          >
            <Image className={style.img} src={money} alt="" />
          </What_you_get_card>
        </div>
      </div>
    </div>
  );
}
