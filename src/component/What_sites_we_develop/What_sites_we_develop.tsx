import React from "react";
import style from "./What_sites_we_develop.module.scss";
import Image from "next/image";
import shop_bottom from "../../../public/image/What_sites_we_develop/shop_bottom.png";
import shop_top from "../../../public/image/What_sites_we_develop/shop_top.png";
import quiz from "../../../public/image/What_sites_we_develop/quiz.png";
import corporate_bottom from "../../../public/image/What_sites_we_develop/corporate_bottom.png";
import corporate_lock from "../../../public/image/What_sites_we_develop/corporate_lock.png";
import corporate_top from "../../../public/image/What_sites_we_develop/corporate_top.png";
import lending_top from "../../../public/image/What_sites_we_develop/lending_top.png";
import lending_text from "../../../public/image/What_sites_we_develop/lending_text.png";
import lending_back from "../../../public/image/What_sites_we_develop/lending_back.png";
import e_comerc_front from "../../../public/image/What_sites_we_develop/e_comerc_front.png";
import e_comerc_back from "../../../public/image/What_sites_we_develop/e_comerc_back.png";
import business_card_without_person from "../../../public/image/What_sites_we_develop/business_card_without_person.png";
import business_card_peron from "../../../public/image/What_sites_we_develop/business_card_peron.png";
import Link from "next/link";
import What_sites_we_develop_card from "./What_sites_we_develop_card";
export default function What_sites_we_develop() {
  return (
    <div className={style.What_sites_we_develop}>
      <div className={style.wrapper}>
        <h3 className={style.label}>Які сайти ми розробляємо</h3>
        <div className={style.cards_row}>
          <What_sites_we_develop_card name="Інтернет-магазин" link="#">
            <Image
              className={style.shop_bottom}
              src={shop_bottom}
              width={40}
              height={40}
              alt="Picture of the internet shop"
            />
            <Image
              className={style.shop_top}
              src={shop_top}
              width={40}
              height={40}
              alt="Picture of the internet shop"
            />
          </What_sites_we_develop_card>

          <What_sites_we_develop_card name="Корпоративний сайт" link="#">
            <Image
              className={style.corporate_bottom}
              src={corporate_bottom}
              width={40}
              height={40}
              alt="Picture of the corporate_bottom"
            />
            <Image
              className={style.corporate_lock}
              src={corporate_lock}
              width={40}
              height={40}
              alt="Picture of the corporate_lock"
            />
            <Image
              className={style.corporate_top}
              src={corporate_top}
              width={40}
              height={40}
              alt="Picture of the corporate_top"
            />
          </What_sites_we_develop_card>

          <What_sites_we_develop_card name="Landing Page" link="#">
            <Image
              className={style.lending_back}
              src={lending_back}
              width={40}
              height={40}
              alt="Picture of the lending_back"
            />
            <Image
              className={style.lending_text}
              src={lending_text}
              width={40}
              height={40}
              alt="Picture of the lending_text"
            />{" "}
            <Image
              className={style.lending_top}
              src={lending_top}
              width={40}
              height={40}
              alt="Picture of the lending_top"
            />
          </What_sites_we_develop_card>

          <What_sites_we_develop_card name="Сайт-квіз" link="#">
            <Image
              className={style.quiz}
              src={quiz}
              width={40}
              height={40}
              alt="Picture of the SITE quiz"
            />
          </What_sites_we_develop_card>

          <What_sites_we_develop_card name="Сайт-візитівка" link="#">
            <Image
              className={style.business_card_without_person}
              src={business_card_without_person}
              width={40}
              height={40}
              alt="Picture of the SITE quiz"
            />{" "}
            <Image
              className={style.business_card_peron}
              src={business_card_peron}
              width={40}
              height={40}
              alt="Picture of the SITE quiz"
            />
          </What_sites_we_develop_card>

          <What_sites_we_develop_card name="eCommerce проєкт" link="#">
            <Image
              className={style.e_comerc_front}
              src={e_comerc_front}
              width={40}
              height={40}
              alt="Picture of the e_comerc_front"
            />
            <Image
              className={style.e_comerc_back}
              src={e_comerc_back}
              width={40}
              height={40}
              alt="Picture of the e_comerc_back"
            />
          </What_sites_we_develop_card>
        </div>
      </div>
    </div>
  );
}
