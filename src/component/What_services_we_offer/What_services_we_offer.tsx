import React from "react";
import style from "./What_services_we_offer.module.scss";
import What_services_we_offer_card from "./What_services_we_offer_card";
import Image from "next/image";
import pencil from "../../../public/image/What_services_we_offer/iconoir_design-pencil.png";
import check from "../../../public/image/What_services_we_offer/check.png";
import check_arrow from "../../../public/image/What_services_we_offer/check_arow.png";
import clipboard_clear from "../../../public/image/What_services_we_offer/clipboard_claer.png";
import clipboard_top from "../../../public/image/What_services_we_offer/clipboard_top.png";

export default function What_services_we_offer() {
  return (
    <div className={style.What_services_we_offer}>
      <div className={style.wrapper}>
        <div className={style.label}>Які послуги ми пропонуємо</div>
        <div className={style.service_row}>
          <What_services_we_offer_card
            name="Дизайн сайту"
            text="Розробляємо яскравий та вражаючий UІ дизафйн. Приділяємо особливу увагу Mobile First. Тому, не зволікай співпрацювати з нами."
          >
            <Image
              className={style.pencil}
              src={pencil}
              width={50}
              height={50}
              alt="Picture of the tehnology "
            />
          </What_services_we_offer_card>
          <What_services_we_offer_card
            name="Розробка прототипу"
            text="Ми творимо високоякісний UX-дизайн, уважно аналізуємо взаємодію користувача з контентом для максимальної зручності."
          >
            <Image
              className={style.clipboard_clear}
              src={clipboard_clear}
              alt="clipboard"
            />
             <Image
              className={style.clipboard_top}
              src={clipboard_top}
              alt="clipboard"
            />
          </What_services_we_offer_card>
          <What_services_we_offer_card
            name="Фірмовий стиль  "
            text="Ми розробляємо унікальний корпоративний стиль, охоплюючи лого, фірмові кольори, шрифти та інші ключові елементи."
          >
            <Image
              className={style.check}
              src={check}
              width={50}
              height={50}
              alt="Picture of the tehnology "
            />
            <Image
              className={style.check_arrow}
              src={check_arrow}
              width={50}
              height={50}
              alt="Picture of the tehnology "
            />
          </What_services_we_offer_card>
        </div>
      </div>
    </div>
  );
}
