'use client'
import React, { useEffect, useRef, useState } from 'react'
import styles from '../styles.module.css'
import { AppContainer } from '@/app/_hide/_components';
import CaseStudies from './CaseStudies';
import Demos from './Demos';
import PortfolioMainHero from './PortfolioMainHero';
import SocialValidation from './SocialValidation';
import { MotionDiv } from '@/app/_hide/_components/framer/MotionDiv';
import PortfolioScene from './scene/PortfolioScene';
import { useScreenContext } from '@/app/_hide/_context/sub-context/ScreenContext';
import { useScroll } from '@/app/_hide/_context/sub-context/ScrollContext';
import { scrollToSection } from '@/utility/common/scrollToSection';
import { useAnimationControls } from 'framer-motion';
import ScrollGradientUtil from '@/utility/common/ScrollGradientUtil';
import { ICaseStudy } from '@/app/_database/models/case-study';
import { ITechnicalApplication } from '@/app/_database/models/technicalApplication';
import { portfolioPageGradientAnimations } from '../../portfolio/_utils/animation-gradients';
import { usePortfolioPageRefs } from '../../portfolio/_utils/refs';

interface PortfolioModuleProps {
    technicalApplications: ITechnicalApplication[];
    caseStudies: ICaseStudy[];
}

const PortfolioModule: React.FC<PortfolioModuleProps> = ({
    technicalApplications, caseStudies
}) => {

    const [currentSection, setCurrentSection] = useState<string>('portfolio-main');
    const [caseStudy, setCaseStudy] = useState<ICaseStudy>(caseStudies[0]);

    const [index, setIndex] = useState<number>(0);
    const [link, setLink] = useState<string>('/images/desktop-pearl-box.png');

    const {
        windowScrollHeight, setWindowScrollHeight, scrollY, windowHeight, setWindowHeight, scrollYProgress
    } = useScroll();

    const controls = useAnimationControls();

    const {
        mainRef, caseStudiesRef, refs, ctnRef, bodyRef
    } = usePortfolioPageRefs();

    function scrollToSectionHandler(id: string) {
        scrollToSection(id, refs, currentSection);
    };

    ScrollGradientUtil({
        currentSection, setCurrentSection, refs, controls
    });

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
console.log(caseStudy);

    return (
        <AppContainer
            ctnRef={ctnRef}
            controls={controls}
            gradientVariants={portfolioPageGradientAnimations}
        >
            <PortfolioMainHero
                id='portfolio-main'
                scrollTo={scrollToSectionHandler}
                ctnRef={mainRef}
                technicalApplications={technicalApplications}
                scrollY={scrollY}
                index={index}
                setIndex={setIndex}
                link={link}
                setLink={setLink}

            />
            <CaseStudies
                ctnRef={caseStudiesRef}
                id='portfolio-case-studies'
                scrollTo={scrollToSectionHandler}
                caseStudies={caseStudies}
                caseStudy={caseStudy}
                setCaseStudy={setCaseStudy}
            />

            <PortfolioScene
                link={link}
                scrollY={scrollY}
                caseStudy={caseStudy}
            />

            {/* <Demos /> */}
            {/* <SocialValidation /> */}
            {/* <Visuals /> */}
        </AppContainer>
    )
}



export default PortfolioModule;