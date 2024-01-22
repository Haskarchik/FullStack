import React from "react";
import styles from "./What_services_we_offer.module.scss";

interface InterfaceCard{
    name:string;
    text:string;
    children: React.ReactNode
}

export default function What_services_we_offer_card({children, name,text}:InterfaceCard) {
  return (
    <div className={styles.service_card}>
      <div className={styles.card_image}>
        {children}
      </div>
      <div className={styles.card_label}>
        {name}
      </div>
      <div className={styles.card_text}>
        {text}
      </div>
    </div>
  );
}
