import React, { useRef, useState } from "react";
import style from "./How_we_work.module.scss";
import Image from "next/image";
import head from "../../../public/image/How_we_work/head.png";
import gear from "../../../public/image/How_we_work/gear.png";
import radar from "../../../public/image/How_we_work/radar.png";
import radar_line from "../../../public/image/How_we_work/radar_line.png";
import wrench from "../../../public/image/How_we_work/wrench.png";
import rocket from "../../../public/image/How_we_work/rocket.png";
import pc from "../../../public/image/How_we_work/pc.png";
import pc_line from "../../../public/image/How_we_work/pc_line.png";
import pencil from "../../../public/image/How_we_work/pencil.png";
import rocket_fire from "../../../public/image/How_we_work/rocket_fire.png";
import rocket_active_fire from "../../../public/image/How_we_work/rocket_active_fire.png";
import arrow from "../../../public/image/How_we_work/arrow.png";

export default function How_we_work() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const left = useRef("90px");
  const data = useRef("opened");

  function chooseText(datatype: string) {
    !open ? setOpen(true) : "";
    switch (datatype) {
      case "Research":
        setText(
          "У цьому етапі основний акцент робиться на розумінні цілей проєкту, цільової аудиторії та вимог. Це включає збір інформації шляхом зустрічей, обговорень та досліджень. Визначається обсяг проєкту, розробляється стратегія для забезпечення відповідності веб-сайту задуманої меті. Головні результати включають концепцію проєкту, персони користувачів, карту сайту, аналіз конкурентів, рекомендації, прогнозування та оцінку."
        );

        {
          data.current == "Research" ? setOpen(!open) : "";
          left.current = "100px";
          data.current = datatype;
        }

        break;
      case "Design":
        setText(
          "У цьому етапі основний акцент робиться на створенні зовнішнього вигляду та користувацького інтерфейсу веб-сайту. Дизайнери визначають колірну палітру, шрифти, макети та структуру сторінок. Вони також враховують важливі аспекти користувацького досвіду, забезпечуючи зручну навігацію та естетично привабливий вигляд. Ну і звісно ж,  дизайнери враховують адаптивність та інтерактивність для оптимізації користувацького взаємодії."
        );
        {
          data.current == "Design" ? setOpen(!open) : console.log(data);
          left.current = "365px";
          data.current = datatype;
        }
        break;
      case "Development":
        setText(
          "У цьому етапі основний акцент робиться на розумінні унікальних потреб вашого бізнесу та досягненні оптимальної функціональності. Наша команда експертів готова взятися за будь-який тип веб-проєкту, починаючи від створення захоплюючих сайтів-квізів, що залучають аудиторію і підвищують взаємодію, і закінчуючи потужними інтернет-магазинами, які забезпечують ефективний електронний комерційний процес."
        );
        data.current == datatype ? setOpen(!open) : "";
        left.current = "630px";
        data.current = datatype;
        break;
      case "Launching":
        setText(
          "У цьому етапі основний акцент робиться на підготовці веб-сайту до його публічного доступу. Це включає у себе завантаження контенту, налаштування хостингу та доменного імені, а також виконання останніх перевірок на помилки та безпеку. Після завершення цього етапу сайт стає доступним для відвідувачів, забезпечуючи їм позитивний досвід взаємодії, надійність в роботі та ефективність управління контентом."
        );
        data.current == datatype ? setOpen(!open) : "";
        left.current = "890px";
        data.current = datatype;
        break;
      case "Support":
        setText(
          "У цьому етапі основний акцент робиться на підтримці та подальшому розвитку веб-сайту. Адміністратори та розробники відслідковують роботу сайту, виправляють помилки, оновлюють вміст та функціональність відповідно до змінних потреб користувачів. Підтримка може також включати в себе оптимізацію продуктивності, захист від потенційних загроз, сприяючи стійкості та ефективності, а також вдосконалення користувацького досвіду."
        );
        data.current == datatype ? setOpen(!open) : "";
        left.current = "1150px";
        data.current = datatype;
        break;
      default:
        setOpen(false);
        break;
    }
  }
  return (
    <section className={style.How_we_work}>
      <div className={style.wrapper}>
        <div className={style.label}>Як ми працюємо</div>
        <div className={style.card_row}>
          <div className={style.images}>
            <div className={style.picture}>
              <Image
                className={style.radar}
                src={radar}
                width={100}
                height={100}
                alt="Picture of the radar"
              />{" "}
              <Image
                className={style.radar_line}
                src={radar_line}
                width={100}
                height={100}
                alt="Picture of the radar_line"
              />
            </div>
            <div className={style.picture}>
              <div className={style.pc_hover}>
                <Image
                  className={style.pc}
                  src={pc}
                  width={100}
                  height={100}
                  alt="Picture of the pc"
                />{" "}
                <Image
                  className={style.pencil}
                  src={pencil}
                  width={100}
                  height={100}
                  alt="Picture of the pc"
                />
                <Image
                  className={style.pc_line}
                  src={pc_line}
                  width={100}
                  height={100}
                  alt="Picture of the pc"
                />
              </div>
            </div>
            <div className={style.picture}>
              <Image
                src={head}
                width={100}
                height={100}
                alt="Picture of the head"
              />{" "}
              <Image
                className={style.active_gear}
                src={gear}
                width={100}
                height={100}
                alt="Picture of the gear"
              />
            </div>
            <div className={style.picture}>
              <Image
                className={style.rocket}
                src={rocket}
                width={100}
                height={100}
                alt="Picture of the rocket"
              />{" "}
              <Image
                className={style.rocket_fire}
                src={rocket_fire}
                width={100}
                height={100}
                alt="Picture of the rocket_fire"
              />{" "}
              <Image
                className={style.rocket_active_fire}
                src={rocket_active_fire}
                width={100}
                height={100}
                alt="Picture of the rocket_active_fire"
              />
            </div>
            <div className={style.picture}>
              <Image
                className={style.wrench}
                src={wrench}
                width={100}
                height={100}
                alt="Picture of the wrench"
              />
            </div>
          </div>
          <div className={style.btns_to_images}>
            <button
              onClick={(e) => {
                chooseText("Research");
              }}
              className={style.card_label}
            >
              Дослідження
            </button>
            <button
              onClick={(e) => {
                chooseText("Design");
              }}
              className={style.card_label}
            >
              Дизайн
            </button>
            <button
              onClick={(e) => {
                chooseText("Development");
              }}
              className={style.card_label}
            >
              Розробка
            </button>
            <button
              onClick={(e) => {
                chooseText("Launching");
              }}
              className={style.card_label}
            >
              Запуск
            </button>
            <button
              onClick={(e) => {
                chooseText("Support");
              }}
              className={style.card_label}
            >
              Підтримка
            </button>
          </div>
        </div>
        <div
          className={
            open
              ? style.card_description + " " + style.open
              : style.card_description
          }
        >
          <Image
            className={style.arrow}
            style={{ left: left.current }}
            src={arrow}
            width={30}
            height={22}
            alt="Picture of the arrow"
          />
          <p className={style.text}>{text}</p>
        </div>
        <button
          className={
            open ? style.btn_order + " " + style.hide : style.btn_order
          }
        >
          Замовити веб-сайт
        </button>
      </div>
    </section>
  );
}
