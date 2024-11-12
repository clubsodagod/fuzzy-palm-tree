'use client'
import React, { useEffect, useRef, useState } from 'react'
import { AppContainer } from '../_components'
import { BioHero, CoreValues, MissionStatement } from './_components'
import MotionPageWrapper from '../_components/common/MotionPageWrapper'
import { useAnimationControls } from 'framer-motion'
import { useAboutSectionRefs } from './_utils/refs'
import ScrollGradientUtil from '@/utility/common/ScrollGradientUtil'
import { aboutPageGradientAnimations } from './_utils/animation-gradients'
import { scrollToSection } from '@/utility/common/scrollToSection'
import { useScroll } from '../_context/sub-context/ScrollContext'
import { MotionDiv } from '../_components/framer/MotionDiv'
import MissionStatementScene from './_components/scenes/mission-statement/MissionStatementScene'
import { CoreValue, coreValues } from '@/library/const'

const AboutPage = () => {

    const [currentSection, setCurrentSection] = useState<string>('');
    const [coreValue, setCoreValue] = useState<number>(0);

    const controls = useAnimationControls();

    const {
        bioRef, coreValuesRef, missionStatementRef,bodyRef, refs, ctnRef
    } = useAboutSectionRefs();

    ScrollGradientUtil({
        currentSection,setCurrentSection, refs, controls
    })

    function scrollToSectionHandler (id:string) {
        scrollToSection(id,refs, currentSection);
    };
    
    const {
        windowScrollHeight, setWindowScrollHeight, scrollY, windowHeight, setWindowHeight, scrollYProgress
    } = useScroll();



    function carouselHandler(direction:string) {
        if (direction == 'left') {
            if (coreValue == 0) {
                setCoreValue(coreValues.length - 1);
            } else {
                setCoreValue(coreValue-1);
            }
        } else {
            if (coreValue == coreValues.length - 1) {
                setCoreValue(0);
                return
            } else {
                setCoreValue(coreValue+1);
            }
            
        }
    }

	useEffect(() => {
		if (windowScrollHeight === 0) {
			setWindowScrollHeight(ctnRef?.current?.scrollHeight! - window.innerHeight);
		}
		if (windowHeight === 0) {
			setWindowHeight(window?.innerHeight);
			console.log(window.innerHeight);

		}
		{ windowScrollHeight && windowScrollHeight }
		{ windowHeight && windowHeight }
	}, [windowScrollHeight, setWindowScrollHeight, ctnRef, windowHeight, setWindowHeight]);

    const prime = scrollY.get();
    const pastPrime = scrollY.getPrevious();
    const scalingFactor = () => Math.min(Math.max(window?.innerWidth / 1920, window?.innerWidth > 700 && window?.innerWidth < window?.innerHeight ? 0.8 : 0.6), 3);

    useEffect(() => {

        const functionHandler = () => {
            if (prime !== pastPrime) {

                console.log(scalingFactor());
            }
        };

        functionHandler();

    }, [pastPrime, prime, scalingFactor]);

    return (
        <MotionPageWrapper
            ctnRef={ctnRef}
            controls={controls}
            gradientVariants={aboutPageGradientAnimations}
        >
        <MotionDiv
            className={`left-0 absolute w-full`}
        >
            <MissionStatementScene
                scrollY={scrollY}
                value={coreValue}
            />
        </MotionDiv>

            <BioHero 
            ctnRef={bioRef}
            id='about-bio'
            scrollTo={scrollToSectionHandler}
            />
            <MissionStatement  
            ctnRef={missionStatementRef}
            id='about-mission-statement'
            scrollTo={scrollToSectionHandler}
            />
            <CoreValues 
            scrollY={scrollY}
            scrollYProgress={scrollYProgress}
            ctnRef={coreValuesRef}
            id='about-core-values'
            scrollTo={scrollToSectionHandler}
            value={coreValue}
            carouselHandler={carouselHandler}
            scalingFactor={scalingFactor()}
            />
        </MotionPageWrapper>
    )
}

export default AboutPage