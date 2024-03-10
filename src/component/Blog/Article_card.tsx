import React, { useEffect, useState } from "react";
import style from "./Blog.module.scss";
import Link from "next/link";
import Image from "next/image";
import Image1 from "../../../public/image/Blog/Articles_img/1.png";
import Image2 from "../../../public/image/Blog/Articles_img/2.png";
import Image3 from "../../../public/image/Blog/Articles_img/3.png";
import Image4 from "../../../public/image/Blog/Articles_img/4.png";
import Image5 from "../../../public/image/Blog/Articles_img/5.png";
import Image6 from "../../../public/image/Blog/Articles_img/6.png";
import Image7 from "../../../public/image/Blog/Articles_img/7.png";
import Image8 from "../../../public/image/Blog/Articles_img/8.png";

interface BlogPost {
  image: any;
  name: string;
  date: string;
  descrip: string;
  timeToRead: number;
  category: string;
  views: number;
}

export default function Article_card() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([
    {
      image: Image1,
      name: "Заголовок 1",
      date: "30.12.2023",
      descrip:
        "Короткий опис 1 ************* ***************************** *************** ************************ ************* **********...",
      timeToRead: 120,
      category: "Web Design",
      views: 1234,
    },
    {
      image: Image2,
      name: "Заголовок 2",
      date: "Дата 2",
      descrip: "Короткий опис 2",
      timeToRead: 7,
      category: "SEO",
      views: 5678,
    },
    {
      image: Image3,
      name: "Заголовок 3",
      date: "Дата 3",
      descrip: "Короткий опис 3",
      timeToRead: 3,
      category: "Огляди",
      views: 9012,
    },
    {
      image: Image4,
      name: "Заголовок 4",
      date: "Дата 4",
      descrip: "Короткий опис 4",
      timeToRead: 10,
      category: "Інструкції",
      views: 3456,
    },
    {
      image: Image5,
      name: "Заголовок 5",
      date: "Дата 5",
      descrip: "Короткий опис 5",
      timeToRead: 6,
      category: "Рекомендації",
      views: 7890,
    },
    {
      image: Image6,
      name: "Заголовок 6",
      date: "Дата 6",
      descrip: "Короткий опис 6",
      timeToRead: 2,
      category: "Саморозвиток",
      views: 12345,
    },
    {
      image: Image7,
      name: "Заголовок 7",
      date: "Дата 7",
      descrip: "Короткий опис 7",
      timeToRead: 4,
      category: "Кулінарія",
      views: 6789,
    },
    {
      image: Image8,
      name: "Заголовок 8",
      date: "Дата 8",
      descrip: "Короткий опис 8",
      timeToRead: 8,
      category: "Подорожі",
      views: 101112,
    },
  ]);

  useEffect(() => {
    // Замінити на динамічне завантаження даних
    // ...
  }, []);

  const handleViewsUpdate = (updatedViews: number, blogPost: BlogPost) => {
    const updatedBlogPosts = [...blogPosts];
    const postIndex = updatedBlogPosts.findIndex(
      (post) => post.views === blogPost.views
    );
    if (postIndex !== -1) {
      updatedBlogPosts[postIndex].views = updatedViews;
      setBlogPosts(updatedBlogPosts);
    }
  };

  return (
    <>
      {blogPosts.map((post) => (
        <div key={post.views + post.timeToRead} className={style.article_card}>
          <Link href={'/article_page/1'}>
            <div className={style.card_image}>
              <Image
                src={post.image}
                alt={post.name + " Image"}
      
              />
            </div>
          </Link>
          
          <div className={style.info}>
          <Link href={""}>
            <div className={style.card_main_info}>
              <div className={style.card_label}>{post.name}</div>
              <div className={style.card_short_text}>{post.descrip} </div>
              <div className={style.card_views}>
                {post.views}
                <span> переглядів</span>
              </div>
            </div>
          </Link>
            <div className={style.card_more_info}>
              <div className={style.category}>{post.category}</div>
              <div className={style.card_date_post}>{post.date}</div>
              <div className={style.card_time}>{post.timeToRead} хв</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
