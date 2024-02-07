import React from "react";
import style from "./What_do_SEO.module.scss";
import Image from "next/image";
import gear from "../../../public/image/What_do_SEO/gear.png";
import speaker_left_part from "../../../public/image/What_do_SEO/speaker_left_part.png";
import speaker_right_part from "../../../public/image/What_do_SEO/speaker_right_part.png";
import statistics from "../../../public/image/What_do_SEO/statistics.png";
import statistics_line from "../../../public/image/What_do_SEO/statistics_line.png";
import face from "../../../public/image/What_do_SEO/face.png";
import face_board from "../../../public/image/What_do_SEO/face_board.png";
import first_img from "../../../public/image/What_do_SEO/Stat.jpg";
import second_img from "../../../public/image/What_do_SEO/second_img.jpg";
import What_do_SEO_card from "./What_do_SEO_card";
export default function What_do_SEO() {
  return (
    <div className={style.What_do_SEO}>
      <div className={style.wrapper}>
        <div className={style.label}>
          Які задачі вирішує ЅЕO-просування сайту
        </div>
        <div className={style.graphik}>
          <What_do_SEO_card
          top=" -20px"
          content="flex-end"
            name="Підвищення впізнаваності
            бренду"
          >
            <Image className={style.face} src={face} alt="face" />
            <Image className={style.face_board} src={face_board} alt="face_board" />
          </What_do_SEO_card>
          <What_do_SEO_card
          top=""
          content="flex-start"
            name="Значне зростання продажіві збільшення
            конверсії вашого бізнесу"
          >
            <Image className={style.statistics} src={statistics} alt="statistics" />
            <Image className={style.statistics_line} src={statistics_line} alt="statistics_line" />
          </What_do_SEO_card>
          <What_do_SEO_card
          top=""
          content="flex-end"
            name="Залучення нових потенційних клієнтів або збільшення вже існуючого потоку користувачів"
          >
            <Image className={style.speaker_left_part} src={speaker_left_part} alt="speaker_left_part" />
            <Image className={style.speaker_right_part} src={speaker_right_part} alt="speaker_right_part" />
          </What_do_SEO_card>
          <What_do_SEO_card
          top=""
          content="flex-start"
            name="Комплексна розкрутка 
нового проєкту"
          >
            <Image className={style.gear} src={gear} alt="gear" />
          </What_do_SEO_card>
        </div>
        <div className={style.images}>
          <Image src={first_img} alt="" />
          <Image src={second_img} alt="" />
        </div>
      </div>
    </div>
  );
}
