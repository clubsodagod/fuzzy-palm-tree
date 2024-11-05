'use client'
import React, { useRef, useState } from 'react'
import { AppContainer } from '../_components'
import { BioHero, CoreValues, MissionStatement } from './_components'
import MotionPageWrapper from '../_components/common/MotionPageWrapper'
import { useAnimationControls } from 'framer-motion'
import { useAboutSectionRefs } from './_utils/refs'
import ScrollGradientUtil from '@/utility/common/ScrollGradientUtil'
import { aboutPageGradientAnimations } from './_utils/animation-gradients'
import { scrollToSection } from '@/utility/common/scrollToSection'

const Page = () => {

    const [currentSection, setCurrentSection] = useState<string>('');

    const controls = useAnimationControls();

    const {
        bioRef, coreValuesRef, missionStatementRef,bodyRef, refs
    } = useAboutSectionRefs();

    ScrollGradientUtil({
        currentSection,setCurrentSection, refs, controls
    })

    function scrollToSectionHandler (id:string) {
        scrollToSection(id,refs, currentSection);
    };

    return (
        <MotionPageWrapper
            controls={controls}
            gradientVariants={aboutPageGradientAnimations}
        >

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
            ctnRef={coreValuesRef}
            id='about-core-values'
            scrollTo={scrollToSectionHandler}
            />
        </MotionPageWrapper>
    )
}

export default Page