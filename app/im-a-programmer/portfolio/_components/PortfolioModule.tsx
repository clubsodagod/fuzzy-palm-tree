'use client'
import React, { useEffect, useState } from 'react'
import { AppContainer } from '@/app/_hide/_components';
import CaseStudies from './CaseStudies';
import PortfolioMainHero from './PortfolioMainHero';
import PortfolioScene from './scene/PortfolioScene';
import { scrollToSection } from '@/utility/common/scrollToSection';
import { useAnimationControls } from 'framer-motion';
import ScrollGradientUtil from '@/utility/common/ScrollGradientUtil';
import { ICaseStudy } from '@/app/_database/models/case-study';
import { ITechnicalApplication } from '@/app/_database/models/technicalApplication';
import { usePortfolioPageRefs } from '../_utils/refs';
import { portfolioPageGradientAnimations } from '../_utils/animation-gradients';
import { useAppContext } from '@/app/_context/AppContext';
import IntersectionWatcher from '@/app/_utility/window/IntersectionWatcher';
import WindowUpdater from '@/app/_utility/window/WindowUpdater';

interface PortfolioModuleProps {
    technicalApplications: ITechnicalApplication[]|undefined|null;
    caseStudies: ICaseStudy[]|undefined|null;
}

const PortfolioModule: React.FC<PortfolioModuleProps> = ({
    technicalApplications, caseStudies
}) => {

    const [caseStudy, setCaseStudy] = useState<ICaseStudy|undefined|null>(caseStudies && caseStudies[0]);

    const [index, setIndex] = useState<number>(0);
    const [link, setLink] = useState<string>('/images/desktop-pearl-box.png');



    const {
        appContainer:{
            currentSection, scrollRef
        }
    } = useAppContext();



    const {
        mainRef, caseStudiesRef, refs, ctnRef, bodyRef, 
    } = usePortfolioPageRefs();

    function scrollToSectionHandler(id: string) {
        scrollToSection(id, refs, currentSection);
    };




    WindowUpdater(scrollRef);
    IntersectionWatcher({ refs });

    return (
        <>
            <PortfolioScene
                link={link}
                caseStudy={caseStudy ? caseStudy : undefined}
            />
            <PortfolioMainHero
                id='portfolio-main'
                scrollTo={scrollToSectionHandler}
                ctnRef={mainRef}
                technicalApplications={technicalApplications ? technicalApplications : undefined}
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


            {/* <Demos /> */}
            {/* <SocialValidation /> */}
            {/* <Visuals /> */}
        </>
    )
}



export default PortfolioModule;