import React from "react";
import style from "./Tehnology.module.scss";
import Image from "next/image";
import tehnology_image from "../../../public/image/Tehnology/tehnology_image.png";
import pencil from "../../../public/image/Tehnology/iconoir_design-pencil.png";
import check from "../../../public/image/Tehnology/check.png";
import check_arrow from "../../../public/image/Tehnology/check_arow.png";
import cpu from "../../../public/image/Tehnology/cpu.png";
import cpu_border from "../../../public/image/Tehnology/cpu_border.png";
import fluent_content from "../../../public/image/Tehnology/fluent_content.png";
import fluent_content_gear from "../../../public/image/Tehnology/fluent_content_gear.png";
import data from "../../../public/image/Tehnology/icon-park-outline_data-four.png";
import java from "../../../public/image/Tehnology/java.png";
import java_piece from "../../../public/image/Tehnology/java_piece.png";
import java_text from "../../../public/image/Tehnology/java_text.png";

import Tehnology_card from "./Tehnology_card";
export default function Tehnology() {
  return (
    <div className={style.Tehnology}>
      <div className={style.wrapper}>
        <div className={style.label_block}>
          <h2 className={style.label}>Технології</h2>
          <div className={style.text}>
            Наша компанія має великий досвід у розробці спеціалізованих
            програмних інженерних рішень, використовуючи різноманітні технології
            для забезпечення надійності і безпеки.
          </div>
        </div>
        <div className={style.tehnology_row}>
          <div className={style.image}>
            <Image
              src={tehnology_image}
              width={400}
              height={500}
              alt="Picture of the tehnology "
            />
          </div>
          <div className={style.cards_row}>
            <Tehnology_card
              label={"Design"}
              text={
                "Adobe PS | Adobe AE | Adobe XD | Figma | Zeplin | ProtoPie"
              }
            >
              <Image
                className={style.pencil}
                src={pencil}
                width={40}
                height={40}
                alt="Picture of the tehnology "
              />
            </Tehnology_card>{" "}
            <Tehnology_card
              label={"Frontend"}
              text={
                "HTML & CSS| Angular.js| React.js|Vue.js| Next.js| jQuery | Svelte"
              }
            >
              <Image
                className={style.cpu}
                src={cpu}
                width={40}
                height={40}
                alt="Picture of the tehnology "
              />{" "}
              <Image
                className={style.cpu_border}
                src={cpu_border}
                width={40}
                height={40}
                alt="Picture of the tehnology "
              />
            </Tehnology_card>{" "}
            <Tehnology_card
              label={"Backend"}
              text={"PHP | Python| Rust | Java | Node.js | Ruby | С# | C++"}
            >
              <Image
                className={style.java}
                src={java}
                width={40}
                height={40}
                alt="Picture of the tehnology "
              /> <Image
              className={style.java_piece}
              src={java_piece}
              width={40}
              height={40}
              alt="Picture of the tehnology "
            />
              <Image
                className={style.java_text}
                src={java_text}
                width={40}
                height={40}
                alt="Picture of the tehnology "
              />
            </Tehnology_card>{" "}
            <Tehnology_card
              label={"Database"}
              text={
                "MongoDB | Oracle DB | Maria DB | MySQL| Postgre SQL"
              }
            >
              <Image
                className={style.data}
                src={data}
                width={40}
                height={40}
                alt="Picture of the tehnology "
              />
            </Tehnology_card>{" "}
            <Tehnology_card
              label={"eCommerce and CMS"}
              text={
                "Magento| Shopify| WordPress| OpenCart| Wix"
              }
            >
              <Image
                className={style.fluent_content}
                src={fluent_content}
                width={40}
                height={40}
                alt="Picture of the tehnology "
              /><Image
              className={style.fluent_content_gear}
              src={fluent_content_gear}
              width={20}
              height={20}
              alt="Picture of the tehnology "
            />
            </Tehnology_card>
            <Tehnology_card
              label={"Testing"}
              text={"JUnit| Cypress| Postman|TestRail| Selenium"}
            >
              <Image
                className={style.check}
                src={check}
                width={40}
                height={40}
                alt="Picture of the tehnology "
              />
              <Image
                className={style.check_arrow}
                src={check_arrow}
                width={40}
                height={40}
                alt="Picture of the tehnology "
              />
            </Tehnology_card>
          </div>
        </div>
      </div>
    </div>
  );
}
