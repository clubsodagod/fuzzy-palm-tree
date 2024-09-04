'use client'
import { BlogHero, InvestmentsHero, ProgrammerHero, AppContainer, HomeMainHero, } from "./components";
import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, useAnimationControls } from "framer-motion";
import React from "react";
import { HomeScene } from "./components/scenes";
import { useScroll as scroll } from "./context/sub-context/ScrollContext";
import { homePage as gradientVariants } from "@/library/const/animation-gradients";
import { useSectionRefs } from "@/utility/refs/home-page-refs";


export default function Home() {
  const [currentSection, setCurrentSection] = useState<string>('');

  const { scrollYPro, setScrollYPro, windowScrollHeight,setWindowScrollHeight } = scroll();


  // Use the custom hook to get the home-page refs for functionality
    const { 
      mainRef, programmerRef, investRef, blogRef, refArrays, refs, scrollRef, bodyRef, threeRefs
    } = useSectionRefs();
  

    // Transformation and animation values #framer-motion useScroll to determining 
    // positioning of the container being scrolled
  const { scrollYProgress, scrollY,  } = useScroll({target:bodyRef, offset: ['start end', 'end start']})


  useMotionValueEvent(scrollY, "change", (latest) => {
      // console.log(latest, (scrollRef?.current?.scrollHeight! - (window ? window.innerHeight : 0) ));
      setScrollYPro(scrollRef?.current?.scrollHeight! - (window ? window.innerHeight : 0) );
  });

  const controls = useAnimationControls();

  const snapToTop = (element: Element) => {
    element.scrollIntoView({ behavior:"smooth", block: 'start' });
  };

  useEffect(() => {
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
  }, [controls, refs, scrollRef]);

  useEffect(() => {
    if(windowScrollHeight === 0) {
      setWindowScrollHeight(scrollRef?.current?.scrollHeight! - (window ? window.innerHeight : 0) );
    }
    {windowScrollHeight && windowScrollHeight}
  }, [windowScrollHeight, setWindowScrollHeight, scrollYPro, scrollRef]);

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
};