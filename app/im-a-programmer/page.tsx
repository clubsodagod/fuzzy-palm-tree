'use client'
import React, { useEffect, useState } from 'react'
import { AppContainer } from '../components'
import { WhyDigitalSolutions, Overview, OverviewDynamic, WhyDigitalSolutionsDynamic } from './_components';
import { Chapter, importantFactors, overview, Point } from '@/library/const';
import { useScroll, useMotionValueEvent, useAnimationControls } from 'framer-motion';
import { useProgrammerPageSectionRefs } from '@/utility/refs/programmer-page-refs';
import { programmerGradientVariants as gradientVariants } from '@/library/const/animation-gradients';

const ImAProgrammerPage = () => {

    const {
        scrollRef, bodyRef, mainRef, overviewRef, overviewAltRef, whyDigitalAltRef, refs, areasRef, whyDigitalRef
    } = useProgrammerPageSectionRefs();

    const [scrollYPro, setScrollYPro] = React.useState<number>(0)
    const { scrollYProgress, scrollY,  } = useScroll({target:bodyRef, offset: ['start end', 'end start']})

    useMotionValueEvent(scrollY, "change", (latest) => {
        // console.log(latest, (scrollRef?.current?.scrollHeight! - (window ? window.innerHeight : 0) ))
        setScrollYPro(scrollRef?.current?.scrollHeight! - (window ? window.innerHeight : 0) );
    });

    const [currentSection, setCurrentSection] = useState<string>('');
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

        {
            refs.forEach((ref)=> {
                if(ref){
                    console.log(ref.ref.current)
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


    return (
        <AppContainer
        ctnRef={scrollRef}
        bodyRef={bodyRef}
        gradientVariants={gradientVariants}
        controls={controls}
        >
            <Overview ctnRef={overviewRef}/>
            {
                overview.map((c:Chapter, i:number)=> {
                    if (i%2 === 0) {
                        return <OverviewDynamic chapter={c} key={`chapter: ${i+1}`}  id='programmer-overview-alt' index={i}/>
                    } else {
                        return <OverviewDynamic chapter={c} key={`chapter: ${i+1}`}  id='programmer-overview' index={i}/>
                    }
                    
                })
            }
            <WhyDigitalSolutions ctnRef={whyDigitalRef}/>
            {
                importantFactors.map((f:Point, i:number)=> {
                    if (i%2 === 0) {
                        return <WhyDigitalSolutionsDynamic index={i} factor={f}  key={`factoralt: ${i}`}/>
                    } else {
                        return <WhyDigitalSolutionsDynamic index={i} factor={f}  key={`factor: ${i}`}/>
                    }
                    
                })
            }
            {/* <RealWorldImpact />
            <HomeVisuals /> */}
        </AppContainer>
    )
}

export default ImAProgrammerPage