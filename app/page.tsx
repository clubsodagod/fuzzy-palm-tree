'use client'
import { BlogHero, InvestmentsHero, ProgrammerHero, AppContainer, HomeMainHero, ScrollableItemCtn, } from "./components";
import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, useAnimationControls, MotionValue, motionValue } from "framer-motion";
import React from "react";
import { HomeScene } from "./components/scenes";
import { useScroll as scroll } from "./context/sub-context/ScrollContext";
import { homePage as gradientVariants } from "@/library/const/animation-gradients";
import { useSectionRefs } from "@/utility/refs/home-page-refs";
import { log } from "console";
import { getAllPostsClient } from "@/utility/blog-section/blog-page-functions";
import { IBlogPopulated } from "@/library/db/models/blog";
import BlogCard2D from "./blog/_components/BlogCard";
import { MotionDiv } from "./components/framer/MotionDiv";
import styles from "./components/scenes/styles.module.css"
import { useScreenContext } from "./context/sub-context/ScreenContext";
import { MotionH6 } from "./components/framer/MotionH6";

const useDebouncedMotionValue = (motionValue: MotionValue<number>, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(motionValue.get());

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const updateDebouncedValue = (latest: number) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setDebouncedValue(latest);
      }, delay);
    };

    const unsubscribe = motionValue.onChange(updateDebouncedValue);

    // Cleanup on unmount
    return () => {
      clearTimeout(timeout);
      unsubscribe();
    };
  }, [motionValue, delay]);

  return debouncedValue;
};

export default function Home() {
  const [currentSection, setCurrentSection] = useState<string>('');
  const [posts, setPosts] = useState<IBlogPopulated[] | undefined>();

  const { scrollYPro, setScrollYPro, windowScrollHeight, setWindowScrollHeight, setWindowHeight, windowHeight } = scroll();


  const {
    isMobile,
  } = useScreenContext();

  // Use the custom hook to get the home-page refs for functionality
  const {
    mainRef, programmerRef, investRef, blogRef, refArrays, refs, scrollRef, bodyRef, threeRefs
  } = useSectionRefs();


  const ctnRef = React.useRef<HTMLDivElement>(null);
  // Transformation and animation values #framer-motion useScroll to determining 
  // positioning of the container being scrolled
  const { scrollYProgress, scrollY, } = useScroll({ target: bodyRef, offset: ['start end', 'end start'] })


  const controls = useAnimationControls();

  function snapToTop(element: Element) {
    element.scrollIntoView({ behavior: "smooth", block: 'start' });
  };

  async function initPost() {
    return await getAllPostsClient()
  }

  useEffect(() => {
    setScrollYPro(scrollRef?.current?.scrollHeight!);
    console.log(window?.innerHeight);

    setWindowHeight(window?.innerHeight);

    async function postsHandler() {
      setPosts(await initPost())
    }
    postsHandler()
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.65, // Trigger when 50% of the element is in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setCurrentSection(id); // Update currentSection to the current ref's id
          controls.start(id); // Trigger the animation for the current section
          snapToTop(entry.target);
        }


      });
    }, observerOptions);

    refs.forEach(({ ref }) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    if (scrollRef.current) {
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
    if (windowScrollHeight === 0) {
      setWindowScrollHeight(scrollRef?.current?.scrollHeight!);
    }
    if (windowHeight === 0) {
      setWindowHeight(window?.innerHeight);
    }
    { windowScrollHeight && windowScrollHeight }
  }, [windowScrollHeight, setWindowScrollHeight, scrollYPro, scrollRef, windowHeight, setWindowHeight]);

  return (
    <AppContainer
      bodyRef={bodyRef}
      ctnRef={scrollRef}
      controls={controls}
      gradientVariants={gradientVariants}
      id="home-page-app-ctn"
    >
      {
        windowHeight == 0 ?
          <MotionDiv
            className="flex justify-center align-items-center"
          >
            <MotionH6>
              loading assets...
            </MotionH6>
          </MotionDiv>
          :
          <>
            <HomeMainHero ctnRef={mainRef} />
            <ProgrammerHero ctnRef={programmerRef} />
            <InvestmentsHero ctnRef={investRef} />
            <BlogHero ctnRef={blogRef} />

            <div className='three-scene'>
              <HomeScene scrollYProgress={scrollYProgress} scrollY={scrollY} ctnHeightValue={scrollYPro} ctnRefs={threeRefs} />
            </div>
          </>
      }

    </AppContainer>
  );
};