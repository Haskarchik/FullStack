"use client";
import React, { useEffect, useState } from "react";
import style from "./Blog.module.scss";

interface SortOption {
  name: string;
  isActive: boolean;
}

const sortOptions: SortOption[] = [
  { name: "Дата", isActive: true },
  { name: "Ім’я", isActive: false },
  { name: "Перегляди", isActive: false },
];

export default function SortList() {
  const [activeOption, setActiveOption] = useState<SortOption>(sortOptions[0]);

  const handleFilterClick = (option: SortOption) => {
    sortOptions.map((e) => (e.isActive = false));
    option.isActive = !option.isActive;
    setActiveOption(option);
  };

  return (
    <div className={style.sort}>
      <div className={style.sort_label}>Сортувати за:</div>
      <ul className={style.sort_list}>
        {sortOptions.map((option) => (
          <li
            data-name={option.name}
            key={option.name}
            className={option.isActive ? style.active : ""}
            onClick={() => handleFilterClick(option)}
          >
            {option.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
