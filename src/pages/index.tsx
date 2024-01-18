import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import How_we_work from '../component/How_we_work/How_we_work'
import First_main_screen from '@/component/First_screen/First_main_screen'
import What_sites_we_develop from '@/component/What_sites_we_develop/What_sites_we_develop'
import Tehnology from '@/component/Tehnology/Tehnology'
import We_protect from '@/component/We_protect/We_protect'
import Why_choose_us from '@/component/Why_choose_us/Why_choose_us'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
        <section>
      <We_protect/>

      </section>
      <section>
      <Why_choose_us/>

      </section>
      <section>
      <How_we_work/>

      </section>  <section>
      <Tehnology/>

      </section> <section>
      <What_sites_we_develop/>

      </section>
    
    </main>
  )
}
