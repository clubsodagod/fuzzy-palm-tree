'use client'
import React, { useEffect, useState } from 'react'
import { AppContainer } from '@/app/_hide/_components';
import CaseStudies from './CaseStudies';
import PortfolioMainHero from './PortfolioMainHero';
import PortfolioScene from './scene/PortfolioScene';
import { useScroll } from '@/app/_hide/_context/sub-context/ScrollContext';
import { scrollToSection } from '@/utility/common/scrollToSection';
import { useAnimationControls } from 'framer-motion';
import ScrollGradientUtil from '@/utility/common/ScrollGradientUtil';
import { ICaseStudy } from '@/app/_database/models/case-study';
import { ITechnicalApplication } from '@/app/_database/models/technicalApplication';
import { usePortfolioPageRefs } from '../_utility/refs';
import { portfolioPageGradientAnimations } from '../_utility/animation-gradients';
import { useAppContext } from '@/app/_context/AppContext';

interface PortfolioModuleProps {
    technicalApplications: ITechnicalApplication[]|undefined|null;
    caseStudies: ICaseStudy[]|undefined|null;
}

const PortfolioModule: React.FC<PortfolioModuleProps> = ({
    technicalApplications, caseStudies
}) => {

    const [currentSection, setCurrentSection] = useState<string>('portfolio-main');
    const [caseStudy, setCaseStudy] = useState<ICaseStudy|undefined|null>(caseStudies && caseStudies[0]);

    const [index, setIndex] = useState<number>(0);
    const [link, setLink] = useState<string>('/images/desktop-pearl-box.png');

    const {
        scroll: { windowScrollHeight, setWindowScrollHeight, scrollY, windowHeight, setWindowHeight, scrollYProgress }
    } = useAppContext();

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
        <>
            <PortfolioMainHero
                id='portfolio-main'
                scrollTo={scrollToSectionHandler}
                ctnRef={mainRef}
                technicalApplications={technicalApplications ? technicalApplications : undefined}
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
                caseStudies={caseStudies ? caseStudies : undefined}
                caseStudy={caseStudy ? caseStudy : undefined}
                setCaseStudy={setCaseStudy}
            />

            <PortfolioScene
                link={link}
                scrollY={scrollY}
                caseStudy={caseStudy ? caseStudy : undefined}
            />

            {/* <Demos /> */}
            {/* <SocialValidation /> */}
            {/* <Visuals /> */}
        </>
    )
}



export default PortfolioModule;