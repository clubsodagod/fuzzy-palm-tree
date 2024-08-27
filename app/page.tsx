'use client'

import { firstName, lastName } from "@/library/const";
import Image from "next/image";
import { BlogHero, Footer, HomeHero, InvestmentsHero, ProgrammerHero, AppContainer } from "./components";
import { useRef } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import React from "react";
import { HomeScene } from "./components/scenes";
import styles from './components/home-page/home-page.module.css'

export default function Home() {

  let yProgress:number = 0
  const [scrollYPro, setScrollYPro] = React.useState<number>(yProgress)

  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress, scrollY,  } = useScroll({target:scrollRef, offset: ['start end', 'start end']})

  
  useMotionValueEvent(scrollY, "change", (latest) => {
      console.log(latest, (scrollRef?.current?.offsetHeight! ))
      setScrollYPro(scrollRef?.current?.offsetHeight! );
  })


  return (
    <AppContainer
    ctnRef={scrollRef}
    >

      <div className={`${styles.imgWrapper}`} id='img-maliek_home'>
          <motion.img 
              src='/images/programmer.png' 
              className={`${styles.ftImg}`} 
              id='home' alt=''  
              initial={{
                  opacity: 0,
                  y:-200,
              }}
              whileInView={{opacity:1,
                  y:0,
                  transition:{
                      duration:1,
                      delay:2.4,
                  },
              }}
              exit={{opacity:0}}
              
          />
      </div>

      <HomeScene scrollYProgress={scrollYProgress} scrollY={scrollY} ctnHeightValue={scrollYPro}/>

      <HomeHero scrollYProgress={scrollYProgress} scrollY={scrollY} scrollYPro={scrollYPro} />

    </AppContainer>
  );
}
