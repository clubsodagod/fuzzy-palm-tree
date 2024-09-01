'use client'
import { BlogHero, InvestmentsHero, ProgrammerHero, AppContainer, HomeMainHero, } from "./components";
import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, useAnimationControls } from "framer-motion";
import React from "react";
import { HomeScene } from "./components/scenes";
import { useScroll as scroll } from "./context/sub-context/ScrollContext";
import { homePage as gradientVariants } from "@/library/const/animation-gradients";


export default function Home() {

  const { scrollYPro, setScrollYPro, windowScrollHeight,setWindowScrollHeight } = scroll();

  const scrollRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLBodyElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const programmerRef = useRef<HTMLDivElement>(null);
  const investRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);
  const threeRefs = useRef<React.RefObject<HTMLDivElement>[]>([]);
  const refArrays: React.RefObject<HTMLDivElement>[] = [mainRef,programmerRef,investRef,blogRef];
  const refArraysCount = [mainRef,programmerRef,investRef,blogRef].length;
  for (let i = 0; i < refArraysCount; i++) {
    if(!threeRefs.current[i]) {
      threeRefs.current[i] = refArrays[i]
    }
    
  }

  const { scrollYProgress, scrollY,  } = useScroll({target:bodyRef, offset: ['start end', 'end start']})


  useMotionValueEvent(scrollY, "change", (latest) => {
      console.log(latest, (scrollRef?.current?.scrollHeight! - (window ? window.innerHeight : 0) ));
      setScrollYPro(scrollRef?.current?.scrollHeight! - (window ? window.innerHeight : 0) );
  });

  const [currentSection, setCurrentSection] = useState<string>('');
  const controls = useAnimationControls();


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
          snapToTop(entry.target);
        console.log(entry.target.id);
        }
        

      });
    }, observerOptions);

    refs.forEach(({ ref }) => {
      if (ref.current) {
        observer.observe(ref.current);
        
      }
    });

      if (scrollRef.current){
        scrollRef.current.scrollTop = 1
      }

    return () => {
      refs.forEach(({ ref }) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [controls]);

  useEffect(() => {
    if(windowScrollHeight === 0) {
      setWindowScrollHeight(scrollRef?.current?.scrollHeight! - (window ? window.innerHeight : 0) );
    }
    {windowScrollHeight && windowScrollHeight}
  }, [windowScrollHeight, setWindowScrollHeight, scrollYPro])


  return (
    <AppContainer
    bodyRef={bodyRef}
    ctnRef={scrollRef}
    controls={controls}
    gradientVariants={gradientVariants}
    id="home-page-app-ctn"
    >



        <HomeMainHero ctnRef={mainRef} />
        <ProgrammerHero ctnRef={programmerRef} />
        <InvestmentsHero ctnRef={investRef} />
        <BlogHero ctnRef={blogRef} />   
 
      <HomeScene scrollYProgress={scrollYProgress} scrollY={scrollY} ctnHeightValue={scrollYPro} ctnRefs={threeRefs}/>


    </AppContainer>
  );
}


