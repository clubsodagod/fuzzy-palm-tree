'use client'
import React, { useCallback, useEffect, useRef, useState } from 'react'
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
        if (typeof window !== 'undefined') {
            setWindowScrollHeight(ctnRef?.current?.scrollHeight! - window.innerHeight);
            setWindowHeight(window.innerHeight);
        }
    }, [ctnRef, setWindowScrollHeight, setWindowHeight]);



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
            />
        </MotionPageWrapper>
    )
}

export default AboutPage