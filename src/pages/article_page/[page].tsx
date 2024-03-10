import Image from "next/image";
import React from "react";
import styles from "./Article_page.module.scss";
import { useRouter } from "next/router";
import Image6 from "../../../public/image/Blog/Articles_img/6.png";

export default function page() {
  const router = useRouter();

  return (
    <div className={styles.Article_page}>
      <div className={styles.wrapper}>
        <div className={styles.article_label}>Вступний заголовок статті</div>
        <p className={styles.sub_label_text}>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id es Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id es
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id es Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id es
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id es Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id es
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id es Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id es
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id es Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id es
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id es Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id es
        </p>
        <div className={styles.picture_block}>
          <Image src={Image6} alt="" />
        </div>
        <div className={styles.sub_label}>Вступний підзаголовок статті</div>
        <p className={styles.last_text}>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id es Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id es
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id es Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id es
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id es Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id es
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id es Excepteur sint occaecat cupidatat
          non
        </p>
        <div className={styles.more_articles}>
          <div className={styles.more_articles_label}>Схожі статті</div>
          <div className={styles.more_articles_card_row}>
            <div className={styles.card}>
              <div className={styles.card_image}>
                <Image src={Image6} alt="" />
              </div>
              <div className={styles.card_label}>Назва глави блогу</div>
              <div className={styles.card_text}>
                **************** *********** ******* ***************
                ************...
              </div>
              <div className={styles.card_more_info}>
                <div className={styles.card_views}>50 342</div>
                <div className={styles.card_time}>20 хв</div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.card_image}>
                <Image src={Image6} alt="" />
              </div>
              <div className={styles.card_label}>Назва глави блогу</div>
              <div className={styles.card_text}>
                **************** *********** ******* ***************
                ************...
              </div>
              <div className={styles.card_more_info}>
                <div className={styles.card_views}>50 342</div>
                <div className={styles.card_time}>20 хв</div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.card_image}>
                <Image src={Image6} alt="" />
              </div>
              <div className={styles.card_label}>Назва глави блогу</div>
              <div className={styles.card_text}>
                **************** *********** ******* ***************
                ************...
              </div>
              <div className={styles.card_more_info}>
                <div className={styles.card_views}>50 342</div>
                <div className={styles.card_time}>20 хв</div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.card_image}>
                <Image src={Image6} alt="" />
              </div>
              <div className={styles.card_label}>Назва глави блогу</div>
              <div className={styles.card_text}>
                **************** *********** ******* ***************
                ************...
              </div>
              <div className={styles.card_more_info}>
                <div className={styles.card_views}>50 342</div>
                <div className={styles.card_time}>20 хв</div>
              </div>
            </div>
          </div>
          <button className={styles.more_button}>Більше</button>
        </div>
      </div>
    </div>
  );
}
