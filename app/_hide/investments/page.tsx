"use client"

import React, { useEffect, useRef, useState } from 'react'
import { InvestmentApproach, InvestmentAreas, InvestmentPageHero } from '../_components/investment-page'
import { AppContainer, PageWrapper } from '../_components'
import { motion, useAnimationControls, useMotionValueEvent, useScroll } from 'framer-motion'
import InvestmentWorldScene from './_components/scenes/InvestmentWorldScene';
import { investmentsPage as gradientVariants } from '@/library/const/animation-gradients'
import { useInvestmentsPageSectionRefs } from '@/utility/refs/investments-page-refs'
import { InvestmentsPageExperience } from '../_components/experiences';
import { useScroll as scroll } from '../_context/sub-context/ScrollContext';


const InvestmentsPage = () => {

    const [currentSection, setCurrentSection] = useState<string>('');

    const { mainRef, areasRef, approachRef, ctnRef, refs } = useInvestmentsPageSectionRefs();

    const {  windowScrollHeight, setWindowScrollHeight, windowHeight, setWindowHeight } = scroll();
    const { scrollYProgress, scrollY, } = useScroll({ target: ctnRef, offset: ['start end', 'start end'] })




    const controls = useAnimationControls();

    const snapToTop = (element: Element) => {
        element.scrollIntoView({ behavior: "smooth", block: 'start' });
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
                    // snapToTop(entry.target);
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
        if (windowScrollHeight === 0) {
            setWindowScrollHeight(ctnRef?.current?.scrollHeight! - (window ? window.innerHeight : 0));
        }
        if (windowHeight === 0) {
            setWindowHeight(window?.innerHeight);
        }
        { windowScrollHeight && windowScrollHeight }
    }, [windowScrollHeight, setWindowScrollHeight,  ctnRef, windowHeight,setWindowHeight]);


    return (
        <AppContainer
            ctnRef={ctnRef}
            gradientVariants={gradientVariants}
            controls={controls}
            id='investments-page'
        >

            <InvestmentsPageExperience scrollY={scrollY} scrollYProgress={scrollYProgress} ctnHeightValue={windowScrollHeight} />

            <InvestmentPageHero ctnRef={mainRef} />
            <InvestmentApproach ctnRef={approachRef} />
            <InvestmentAreas ctnRef={areasRef} />

        </AppContainer>
    )
}

export default InvestmentsPage