'use client'
import React, { useEffect, useState } from 'react'
import { AppContainer, ScrollableItemCtn } from '../components'
import { WhyDigitalSolutions, Overview, OverviewDynamic, WhyDigitalSolutionsDynamic } from './_components';
import { Chapter, importantFactors, overview, Point } from '@/library/const';
import { useScroll, useMotionValueEvent, useAnimationControls, MotionValue } from 'framer-motion';
import { useProgrammerPageSectionRefs } from '@/utility/refs/programmer-page-refs';
import { programmerGradientVariants as gradientVariants } from '@/library/const/animation-gradients';
import MainProgrammerScene from './_components/scenes/MainProgrammerScene';
import { useScroll as scroll } from '../context/sub-context/ScrollContext';
import { numberToWord } from '@/utility/functions';
import { useScreenContext } from '../context/sub-context/ScreenContext';

const ImAProgrammerPage = () => {

    const {
        isMobile,
    } = useScreenContext();

    const { scrollYPro, setScrollYPro, windowScrollHeight, setWindowScrollHeight, setWindowHeight, windowHeight } = scroll();

    const {
        scrollRef, bodyRef, mainRef, overviewRef, overviewDynamicRefs, whyDigitalDynamicRefs, refs, areasRef, whyDigitalRef
    } = useProgrammerPageSectionRefs();
    
    const ctnRef = React.useRef<HTMLDivElement>(null);


    const { scrollYProgress, scrollY, } = useScroll({ target: bodyRef, offset: ['start end', 'end start'] })


    const [currentSection, setCurrentSection] = useState<string>('');
    const controls = useAnimationControls();

    const snapToTop = (element: Element) => {
        element.scrollIntoView({ behavior: "smooth", block: 'start' });
    };

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
                    console.log(id);
                    setCurrentSection(id); // Update currentSection to the current ref's id
                    controls.start(id); // Trigger the animation for the current section
                    snapToTop(entry.target);
                    // console.log(entry.target.id);
                }


            });
        }, observerOptions);

        refs.forEach(({ ref }) => {
            if (ref.current) {
                observer.observe(ref.current);

            }
        });

        {
            refs.forEach((ref) => {
                if (ref) {
                    // console.log(ref.ref.current)
                }
            })
        }

        return () => {
            refs.forEach(({ ref }) => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            });
        };
    }, [controls, refs]);

    useEffect(() => {
        if (windowScrollHeight === 0) {
            setWindowScrollHeight(scrollRef?.current?.scrollHeight!);
        }
        if (windowHeight === 0) {
            setWindowHeight(window?.innerHeight);
        }
        { windowScrollHeight && windowScrollHeight }
        { windowHeight && windowHeight }
    }, [windowScrollHeight, setWindowScrollHeight, scrollYPro, scrollRef, windowHeight, setWindowHeight]);

    return (
        <AppContainer
            ctnRef={scrollRef}
            bodyRef={bodyRef}
            gradientVariants={gradientVariants}
            controls={controls}
        >


            <Overview ctnRef={overviewRef} />
            {
                overview.map((c: Chapter, i: number) => {
                    const currentRef = overviewDynamicRefs[i];
                    if (i % 2 === 0) {
                        return <OverviewDynamic ctnRef={currentRef} chapter={c} key={`chapter: ${i + 1}`} id={`programmer-overview-dynamic-${numberToWord(i)}`} index={i} />
                    } else {
                        return <OverviewDynamic ctnRef={currentRef} chapter={c} key={`chapter: ${i + 1}`} id={`programmer-overview-dynamic-${numberToWord(i)}`} index={i} />
                    }

                })
            }
            <WhyDigitalSolutions ctnRef={whyDigitalRef} />
            {
                importantFactors.map((f: Point, i: number) => {
                    const currentRefWhyDigital = whyDigitalDynamicRefs[i];
                    if (i % 2 === 0) {
                        return <WhyDigitalSolutionsDynamic ctnRef={currentRefWhyDigital} id={`programmer-why-digital-dynamic-${numberToWord(i)}`} index={i} factor={f} key={`factoralt: ${i}`} />
                    } else {
                        return <WhyDigitalSolutionsDynamic ctnRef={currentRefWhyDigital} id={`programmer-why-digital-dynamic-${numberToWord(i)}`} index={i} factor={f} key={`factor: ${i}`} />
                    }

                })
            }
            {/* <RealWorldImpact />
            <HomeVisuals /> */}
            <div className='three-scene'>
                <MainProgrammerScene scrollY={scrollY} />
            </div>
        </AppContainer>
    )
}

export default ImAProgrammerPage