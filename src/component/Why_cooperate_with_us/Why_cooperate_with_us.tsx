import React from "react";
import Why_cooperate_with_us_card from "./Why_cooperate_with_us_card";
import style from "./Why_cooperate_with_us.module.scss";
import Image from "next/image";
import wrench from "../../../public/image/Why_cooperate_with_us/wrench.png";
import spidometr from "../../../public/image/Why_cooperate_with_us/spidometr.png";
import light from "../../../public/image/Why_cooperate_with_us/light.png";
import light_center from "../../../public/image/Why_cooperate_with_us/light_center.png";
import light_white from "../../../public/image/Why_cooperate_with_us/light_white.png";
import money from "../../../public/image/Why_cooperate_with_us/money.png";
export default function Why_cooperate_with_us() {
  return (
    <div className={style.Why_cooperate_with_us}>
      <div className={style.wrapper}>
        <div className={style.label}>Чому варто співпрацювати з нами?</div>
        <div className={style.card_row}>
          <Why_cooperate_with_us_card
            name="Професійність"
            text="Досвід та, звісно ж, потужність у створенні інноваційних веб-проєктів з його унікальністю."
          >
            <Image src={money} alt="" />
          </Why_cooperate_with_us_card>
          <Why_cooperate_with_us_card
            name="Творчість"
            text="Ми розробляємо унікальний та сучасний вигляд  веб-сайту, враховуючи його особливості."
          >
            <Image className={style.light_white} src={light_white} alt="" />
            <Image className={style.light_center} src={light_center} alt="" />
          </Why_cooperate_with_us_card>
          <Why_cooperate_with_us_card
            name="Підтримка"
            text="Ми гарантуємо якісний сервіс для вашого сайту. Окрім того, звісно ж технічну підтримку."
          >
            <Image
              className={style.wrench}
              src={wrench}
              width={100}
              height={100}
              alt="Picture of the wrench"
            />
          </Why_cooperate_with_us_card>
          <Why_cooperate_with_us_card
            name="Швидкість роботи"
            text="Ми забезпечуємо оперативне завантаження сторінок сайту. Це наша ключова перевага."
          >
            <Image src={spidometr} alt="spidometr" />
          </Why_cooperate_with_us_card>
        </div>
      </div>
    </div>
  );
}
