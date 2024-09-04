'use client'

import { AppContainer } from '@/app/components'
import React, { useEffect, useRef, useState } from 'react'
import { ApproachPageHero, CoreInvestmentPrinciples, RiskManagementPrinciples, VisionPrinciples, MarketPrinciples } from './_components'
import { ApproachScene } from '../../_components/scenes'
import { useAnimationControls, useMotionValueEvent, useScroll } from 'framer-motion'
import { useInvestmentsPageSectionRefs } from '@/utility/refs/investments-page-refs'
import { useScroll as scroll } from '@/app/context/sub-context/ScrollContext'
import { investmentRealEstateApproachPage as gradientVariants } from '@/library/const/animation-gradients'

const Page = () => {
    const [currentSection, setCurrentSection] = useState<string>('');

    const { 
        approachMainRef, coreInvestmentRef, 
        marketPrinciplesRef, riskManagementRef, 
        visionPrinciplesRef, approachCtnRef:ctnRef, approachRefs:refs 
    } = useInvestmentsPageSectionRefs();

    const { scrollYPro, setScrollYPro, windowScrollHeight,setWindowScrollHeight } = scroll();

    const { scrollY, } = useScroll({target:ctnRef, offset: ['start end', 'start end']});

    const controls = useAnimationControls();

    const snapToTop = (element: Element) => {
        element.scrollIntoView({ behavior:"smooth", block: 'start' });
    };
    
    useMotionValueEvent(scrollY, "change", (latest) => {
        // console.log(latest, (ctnRef?.current?.offsetHeight! - window.innerHeight  ))
        setScrollYPro(ctnRef?.current?.offsetHeight! - (window ? window.innerHeight : 0)  );
    });

    useEffect(() => {
        if(windowScrollHeight === 0) {
            setWindowScrollHeight(ctnRef?.current?.scrollHeight! - (window ? window.innerHeight : 0) );
        }
        {windowScrollHeight && windowScrollHeight}
    }, [windowScrollHeight, setWindowScrollHeight, scrollYPro, ctnRef]);

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

    return (
        <AppContainer 
        id='investments-real-estate-approach'
        gradientVariants={gradientVariants}
        controls={controls}
        ctnRef={ctnRef}
        >

            {/* <div className="three-scene" id="approach-page">
                <ApproachScene scrollYProgress={scrollYProgress} scrollY={scrollY} ctnHeightValue={scrollYPro}/>
            </div> */}

            <ApproachPageHero ctnRef={approachMainRef} />
            <CoreInvestmentPrinciples ctnRef={coreInvestmentRef} />
            <MarketPrinciples ctnRef={marketPrinciplesRef} />
            <RiskManagementPrinciples ctnRef={riskManagementRef} />
            <VisionPrinciples ctnRef={visionPrinciplesRef} />
        </AppContainer>
    )
}

export default Page