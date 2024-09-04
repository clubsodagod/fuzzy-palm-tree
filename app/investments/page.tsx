"use client"

import React, { useEffect, useRef, useState } from 'react'
import { InvestmentApproach, InvestmentAreas, InvestmentPageHero } from '../components/investment-page'
import { AppContainer, PageWrapper } from '../components'
import { motion, useAnimationControls, useMotionValueEvent, useScroll } from 'framer-motion'
import InvestmentWorldScene from './_components/scenes/InvestmentWorldScene';
import { investmentsPage as gradientVariants } from '@/library/const/animation-gradients'
import { useInvestmentsPageSectionRefs } from '@/utility/refs/investments-page-refs'
import { InvestmentsPageExperience } from '../components/experiences';
import { useScroll as scroll } from '../context/sub-context/ScrollContext';


const InvestmentsPage = () => {
    
    const [currentSection, setCurrentSection] = useState<string>('');

    const { mainRef, areasRef, approachRef, ctnRef, refs } = useInvestmentsPageSectionRefs();

    const { scrollYPro, setScrollYPro, windowScrollHeight,setWindowScrollHeight } = scroll();
    const { scrollYProgress, scrollY,  } = useScroll({target:ctnRef, offset: ['start end', 'start end']})

    
    useMotionValueEvent(scrollY, "change", (latest) => {
        // console.log(latest, (ctnRef?.current?.offsetHeight! - window.innerHeight  ))
        setScrollYPro(ctnRef?.current?.offsetHeight! - (window ? window.innerHeight : 0)  );
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
            console.log(id);
            
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

        return () => {
            refs.forEach(({ ref }) => {
                if (ref.current) {
                observer.unobserve(ref.current);
                }
            });
        };
    }, [controls, refs]);

    useEffect(() => {
        if(windowScrollHeight === 0) {
            setWindowScrollHeight(ctnRef?.current?.scrollHeight! - (window ? window.innerHeight : 0) );
        }
        {windowScrollHeight && windowScrollHeight}
    }, [windowScrollHeight, setWindowScrollHeight, scrollYPro, ctnRef]);


    return (
        <AppContainer
        ctnRef={ctnRef}
        gradientVariants={gradientVariants}
        controls={controls}
        id='investments-page'
        >
                
            <InvestmentsPageExperience scrollY={scrollY} scrollYProgress={scrollYProgress} ctnHeightValue={scrollYPro} />

            <InvestmentPageHero ctnRef={mainRef} />               
            <InvestmentApproach ctnRef={approachRef} />
            <InvestmentAreas ctnRef={areasRef} />
                
        </AppContainer>
    )
}

export default InvestmentsPage