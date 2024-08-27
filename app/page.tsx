'use client'

import { firstName, lastName } from "@/library/const";
import Image from "next/image";
import { BlogHero, Footer, HomeHero, InvestmentsHero, ProgrammerHero, AppContainer, HomeMainHero, OuterSceneWrapper } from "./components";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimate, useMotionValueEvent, useScroll, animate, useAnimationControls } from "framer-motion";
import React from "react";
import { HomeScene } from "./components/scenes";
import styles from './components/home-page/home-page.module.css'

export const gradientVariants = {
  'home-main': {background: `linear-gradient(to bottom, #323232, #3F3F3F, #1C1C1C)`,},
  'home-programmer': { background: 'linear-gradient(to right, #43cea2, #185a9d, #185a9d)' },
  'home-investment': { background: 'linear-gradient(to right, #1f4037, #99f2c8, #99f2c8)' },
  'home-blog': { background: 'linear-gradient(to right, #43cea2, #185a9d, #185a9d)' },
};

export default function Home() {

  let yProgress:number = 0
  const [scrollYPro, setScrollYPro] = React.useState<number>(yProgress)

  let scrollRef = useRef<HTMLDivElement>(null);
  let outerSceneRef = useRef<HTMLDivElement>(null)!;

  const { scrollYProgress, scrollY,  } = useScroll({target:scrollRef, offset: ['start end', 'end start']})


  useMotionValueEvent(scrollY, "change", (latest) => {
      console.log(latest, (scrollRef?.current?.scrollHeight! - (window ? window.innerHeight : 0) ))
      setScrollYPro(scrollRef?.current?.scrollHeight! - (window ? window.innerHeight : 0) );
  })


  const mainRef = useRef<HTMLDivElement>(null);
  const programmerRef = useRef<HTMLDivElement>(null);
  const investRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);





  const [currentSection, setCurrentSection] = useState<string>('');
  const controls = useAnimationControls();

  const syncScroll = (sourceDiv: HTMLDivElement, targetDiv: HTMLDivElement) => {
    
    targetDiv.scrollTop = sourceDiv.scrollTop;
  };

  const snapToTop = (element: Element) => {
    element.scrollIntoView({ behavior:"smooth", block: 'start' });
  };


  useEffect(() => {
    const refs = [
      { ref: mainRef, id: 'main' },
      { ref: programmerRef, id: 'programmer' },
      { ref: investRef, id: 'invest' },
      { ref: blogRef, id: 'blog' }
    ];

    const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.51, // Trigger when 50% of the element is in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setCurrentSection(id); // Update currentSection to the current ref's id
          controls.start(id); // Trigger the animation for the current section
        // console.log(entry.target.id);
        }
        
          
        // Check distance from top and snap to top if close enough
        if ( entry.boundingClientRect.top <= 100 ) {
          if(entry.boundingClientRect.top >= -100)
          console.log(entry.boundingClientRect.top);
          
          snapToTop(entry.target);
        }
      });
    }, observerOptions);

    refs.forEach(({ ref }) => {
      if (ref.current) {
        observer.observe(ref.current);
        
      }
    });

    return () => {
      refs.forEach(({ ref }) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [controls]);



  return (
    <AppContainer
    ctnRef={scrollRef}
    className={``}
    gradientVariants={gradientVariants}
    controls={controls}
    id="home-page-app-ctn"
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

      {/* <OuterSceneWrapper ctnRef={outerSceneRef} id="home-page-outer-scene-wrapper"> */}
        <HomeMainHero ctnRef={mainRef} />
        <ProgrammerHero ctnRef={programmerRef} />
        <InvestmentsHero ctnRef={investRef} />
        <BlogHero ctnRef={blogRef} />   
      {/* </OuterSceneWrapper> */}
 


    </AppContainer>
  );
}
