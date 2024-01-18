import React from "react";
import style from "./Why_choose_us.module.scss";
import Image from "next/image";
import main_image from "../../../public/image/Why_choose_us/Main_image.png";
import money from "../../../public/image/Why_choose_us/money.png";
import money_currency from "../../../public/image/Why_choose_us/money_currency.png";
import badge from "../../../public/image/Why_choose_us/badge1.png";
import badge_bottom from "../../../public/image/Why_choose_us/badge_bottom.png";
import bulb from "../../../public/image/Why_choose_us/bulb.png";
import bulb_light from "../../../public/image/Why_choose_us/bulb_light.png";
import cloud from "../../../public/image/Why_choose_us/cloud.png";
import computer from "../../../public/image/Why_choose_us/computer.png";
import computer_gear from "../../../public/image/Why_choose_us/computer_gear.png";
import frame from "../../../public/image/Why_choose_us/frame.png";
import content from "../../../public/image/Why_choose_us/content.png";
import head from "../../../public/image/Why_choose_us/head.png";
import lightning from "../../../public/image/Why_choose_us/lightning.png";

import Why_choose_us_card from "./Why_choose_us_card";

export default function Why_choose_us() {
  return (
    <div className={style.Why_choose_us}>
      <div className={style.wrapper}>
        <div className={style.Why_choose_us_label}>Чому обирають нас?</div>
        <div className={style.Why_choose_us_block_row}>
          <div className={style.cards_row}>
            <Why_choose_us_card
              label="Клієнтоорієнтованість"
              text="Глибоке розуміння бізнесу – наша перевага. Спеціалізуємося на створенні веб-сайтів, з важелем на конверсії та продажі."
            >
              <Image
                src={money}
                className={style.money}
                alt="Why_choose_us_block_image"
              />
              <Image
                src={money_currency}
                className={style.money_currency}
                alt="Why_choose_us_block_image"
              />
            </Why_choose_us_card>
            <Why_choose_us_card
              label="Креативність"
              text="Кожен сайт - унікальний шедевр мистецтва. Наш креативний дизайн привертає увагу і вражає інноваціями."
            >
              <Image
                src={bulb}
                className={style.bulb}
                alt="Why_choose_us_block_image"
              />
              <Image
                src={bulb_light}
                className={style.bulb_light}
                alt="Why_choose_us_block_image"
              />
            </Why_choose_us_card>
            <Why_choose_us_card
              label="Передові підходи і технології"
              text="Ми впроваджуємо передові технології для перетворення вашого веб-сайту в сучасну цифрову платформу."
            >
              <Image
                src={computer}
                className={style.computer}
                alt="Why_choose_us_block_image"
              />
              <Image
                src={computer_gear}
                className={style.computer_gear}
                alt="Why_choose_us_block_image"
              />
            </Why_choose_us_card>
            <Why_choose_us_card
              label="Готовність до викликів "
              text="Гарантуємо результативні рішення завдань та елегантний дизайн веб-сайту. Сучасність у кожному проєкті!"
            >
              <Image
                src={head}
                className={style.head}
                alt="Why_choose_us_block_image"
              />
              <Image
                src={cloud}
                className={style.cloud}
                alt="Why_choose_us_block_image"
              />
              <Image
                src={lightning}
                className={style.lightning}
                alt="Why_choose_us_block_image"
              />
            </Why_choose_us_card>
            <Why_choose_us_card
              label="Якісне та швидке виконання"
              text="Висока ефективність та швидкість – основа успіху у співпраці з нами. Індивідуальний підхід гарантований!"
            >
              <Image
                src={badge}
                className={style.badge}
                alt="Why_choose_us_block_image"
              />{" "}
              <Image
                src={badge_bottom}
                className={style.badge_bottom}
                alt="Why_choose_us_block_image"
              />
            </Why_choose_us_card>
            <Why_choose_us_card
              label="Ретельне тестування рішень"
              text="Ваш успіх – в наших надійних технологіях. Тестуємо кожен аспект, щоб гарантувати бездоганність."
            >
              <Image
                src={frame}
                className={style.frame}
                alt="Why_choose_us_block_image"
              />
              <Image
                src={content}
                className={style.content}
                alt="Why_choose_us_block_image"
              />
            </Why_choose_us_card>
          </div>
          <div className={style.Why_choose_us_block_image}>
            <Image
              src={main_image}
              className={style.money}
              alt="Why_choose_us_block_image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
