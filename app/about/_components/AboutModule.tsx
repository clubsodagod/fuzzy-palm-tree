'use client'
import { useAnimationControls } from 'framer-motion';
import React, { useState } from 'react'
import { useAboutSectionRefs } from '../_utils/refs';
import { scrollToSection } from '@/app/_utility/scroll/scroll-to-section';
import IntersectionWatcher from '@/app/_utility/window/IntersectionWatcher';
import WindowUpdater from '@/app/_utility/window/WindowUpdater';
import BioHero from './BioHero';
import { MissionStatement } from '.';
import CoreValueView from './CoreValueView';
import MyCoreValues from './MyCoreValues';
import { coreValues } from '@/library/const';
import MissionVision from './MissionStatement';
import AboutScene from './scenes/mission-statement/AboutScene';

const AboutModule = () => {

    const [currentSection, setCurrentSection] = useState<string>('');
    const [coreValue, setCoreValue] = useState<number>(0);

    const controls = useAnimationControls();

    const {
        bioRef, coreValuesRef, missionStatementRef, bodyRef, refs, ctnRef, scrollRef
    } = useAboutSectionRefs();


    function scrollToSectionHandler(id: string) {
        console.log(id);

        scrollToSection(id, refs, currentSection);
    };


    function carouselHandler(direction: string) {
        if (direction == 'left') {
            if (coreValue == 0) {
                setCoreValue(coreValues.length - 1);
            } else {
                setCoreValue(coreValue - 1);
            }
        } else {
            if (coreValue == coreValues.length - 1) {
                setCoreValue(0);
                return
            } else {
                setCoreValue(coreValue + 1);
            }

        }
    };

    WindowUpdater(scrollRef);
    IntersectionWatcher({ refs });

    return (
        <>
            <AboutScene value={coreValue} />
            <BioHero
                ctnRef={bioRef}
                id='about-bio'
                scrollTo={scrollToSectionHandler}
            />
            <MissionVision
                ctnRef={missionStatementRef}
                id='about-mission-statement'
                scrollTo={scrollToSectionHandler}
            />
            <MyCoreValues
                ctnRef={coreValuesRef}
                id='about-core-values'
                scrollTo={scrollToSectionHandler}
                value={coreValue}
                carouselHandler={carouselHandler}
            />
        </>

    )
}

export default AboutModule