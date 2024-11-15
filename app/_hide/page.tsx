'use client'
import { BlogHero, InvestmentsHero, ProgrammerHero, AppContainer, HomeMainHero, ScrollableItemCtn, } from "./_components";
import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, useAnimationControls, MotionValue, motionValue } from "framer-motion";
import React from "react";
import { HomeScene } from "./_components/scenes";
import { useScroll as scroll } from "./_context/sub-context/ScrollContext";
import { homePage as gradientVariants } from "@/library/const/animation-gradients";
import { RefIDObject, useSectionRefs } from "@/utility/refs/home-page-refs";
import { log } from "console";
import { getAllPostsClient } from "@/utility/blog-section/blog-page-functions";
import BlogCard2D from "./blog/_components/BlogCard";
import { MotionDiv } from "./_components/framer/MotionDiv";
import styles from "./components/scenes/styles.module.css"
import { useScreenContext } from "./_context/sub-context/ScreenContext";
import { MotionH6 } from "./_components/framer/MotionH6";
import { IBlogPopulated } from "../_database/models/blog";


export default function Home() {
  const [currentSection, setCurrentSection] = useState<string>('');
  const [posts, setPosts] = useState<IBlogPopulated[] | undefined>();

  const { windowScrollHeight, setWindowScrollHeight, setWindowHeight, windowHeight } = scroll();


  const {
    isMobile,
  } = useScreenContext();

  // Use the custom hook to get the home-page refs for functionality
  const {
    mainRef, programmerRef, investRef, blogRef, refArrays, refs, scrollRef, bodyRef, threeRefs
  } = useSectionRefs();


  // Transformation and animation values #framer-motion useScroll 
  const { scrollYProgress, scrollY, } = useScroll({ target: bodyRef, offset: ['start end', 'end start'] })


  const controls = useAnimationControls();

  function snapToTop(element: Element) {
    element.scrollIntoView({ behavior: "smooth", block: 'start' });
  };

  async function initPost() {
    return await getAllPostsClient()
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToSection = (index: number, refs: RefIDObject[]) => {
    if (refs[index] && refs[index].ref.current) {
      refs[index].ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollThreshold = 150;


  useEffect(() => {

    let accumulatedDeltaY = 0; // Accumulate scroll deltas to reduce sensitivity

    const handleScroll = (event: WheelEvent) => {
      accumulatedDeltaY += event.deltaY;

      // Only scroll when deltaY exceeds the threshold
      if (Math.abs(accumulatedDeltaY) > scrollThreshold) {
        if (accumulatedDeltaY > 0) {
          // Scrolling down
          setCurrentIndex((prevIndex) =>
            Math.min(prevIndex + 1, refs.length - 1)
          );
        } else {
          // Scrolling up
          setCurrentIndex((prevIndex) =>
            Math.max(prevIndex - 1, 0)
          );
        }
        accumulatedDeltaY = 0; // Reset after scrolling
      }
    };

    window.addEventListener('wheel', handleScroll);

    scrollToSection(currentIndex, refs); // Scroll when the index changes

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [currentIndex, refs]);

  useEffect(() => {
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


    return () => {
      refs.forEach(({ ref }) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [controls, refs, ]);


  useEffect(() => {
    if (windowScrollHeight === 0) {
      setWindowScrollHeight(scrollRef?.current?.scrollHeight!);
    }
    if (windowHeight === 0) {
      setWindowHeight(window?.innerHeight);
    }
    { windowScrollHeight && windowScrollHeight }
  }, [windowScrollHeight, setWindowScrollHeight, scrollRef, windowHeight, setWindowHeight]);

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
              <HomeScene scrollYProgress={scrollYProgress} scrollY={scrollY} ctnRefs={threeRefs} />
            </div>
          </>
      }

    </AppContainer>
  );
};