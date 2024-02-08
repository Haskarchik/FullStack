import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import How_we_work from "../component/How_we_work/How_we_work";
import First_main_screen from "@/component/First_screen/First_main_screen";
import What_sites_we_develop from "@/component/What_sites_we_develop/What_sites_we_develop";
import Tehnology from "@/component/Tehnology/Tehnology";
import We_protect from "@/component/We_protect/We_protect";
import Why_choose_us from "@/component/Why_choose_us/Why_choose_us";
import What_services_we_offer from "@/component/What_services_we_offer/What_services_we_offer";
import Why_cooperate_with_us from "@/component/Why_cooperate_with_us/Why_cooperate_with_us";
import What_you_get from "@/component/What_you_get/What_you_get";
import What_do_SEO from "@/component/What_do_SEO/What_do_SEO";
import Stage_of_quiz_develop from "@/component/Stage_of_quiz_develop/Stage_of_quiz_develop";

export default function Home() {
  return (
    <main>
      <section>
        <What_do_SEO />
      </section>
      <section>
        <Stage_of_quiz_develop />
      </section>
      <section>
        <What_you_get />
      </section>
      <section>
        <Why_cooperate_with_us />
      </section>
      <section>
        <What_services_we_offer />
      </section>
      <section>
        <We_protect />
      </section>
      <section>
        <Why_choose_us />
      </section>
      <section>
        <How_we_work />
      </section>{" "}
      <section>
        <Tehnology />
      </section>{" "}
      <section>
        <What_sites_we_develop />
      </section>
      <section>
        <First_main_screen />
      </section>
    </main>
  );
}
