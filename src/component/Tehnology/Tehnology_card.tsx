import Image, { StaticImageData } from "next/image";
import React from "react";
import style from "./Tehnology.module.scss";

interface TehnologyProps {
  label: string;
  text: string;
  children: React.ReactChild | React.ReactNode;
}

export default function Tehnology_card({

  label,
  text,
  children,
}: TehnologyProps) {
  return (
    <div className={style.card}>
      <div className={style.card_image}>
      {children}

      </div>
      <div className={style.card_content}>
        <div className={style.card_label}>{label}</div>
        <div className={style.card_text}>{text}</div>
      </div>
    </div>
  );
}
