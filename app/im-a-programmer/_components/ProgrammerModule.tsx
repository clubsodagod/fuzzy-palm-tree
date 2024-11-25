'use client'
import { useAppContext } from '@/app/_context/AppContext';
import IntersectionWatcher from '@/app/_utility/window/IntersectionWatcher';
import WindowUpdater from '@/app/_utility/window/WindowUpdater';
import { overview, Chapter, importantFactors, Point } from '@/library/const';
import { scrollToSection } from '@/utility/common/scrollToSection';
import { numberToWord } from '@/utility/functions';
import { useProgrammerPageSectionRefs } from '@/utility/refs/programmer-page-refs';
import React from 'react'
import OverviewDynamic from './OverviewDynamic';
import Overview from './Overview';
import WhyDigitalSolutions from './WhyDigitalSolutions';
import WhyDigitalSolutionsDynamic from './WhyDigitalSolutionsDynamic';
import dynamic from 'next/dynamic';

const ProgrammerScene = dynamic(() => import('./three/ProgrammerScene'), {
    ssr: false, // Optional: Disable server-side rendering for this component
});

const ProgrammerModule = () => {

    const {
        appContainer: {
            currentSection
        }
    } = useAppContext();

    const {
        scrollRef, bodyRef, mainRef, overviewRef, overviewDynamicRefs, whyDigitalDynamicRefs, refs, areasRef, whyDigitalRef
    } = useProgrammerPageSectionRefs();


    function scrollToSectionHandler(id: string) {
        console.log(id);

        scrollToSection(id, refs, currentSection);
    };

    WindowUpdater(scrollRef);

    IntersectionWatcher({ refs });

    return (
        <>
            <Overview ctnRef={overviewRef} scrollTo={scrollToSectionHandler} id='programmer-main' />
            {
                overview.map((c: Chapter, i: number) => {
                    const currentRef = overviewDynamicRefs[i];
                    if (i % 2 === 0) {
                        return <OverviewDynamic scrollTo={scrollToSectionHandler}  ctnRef={currentRef} chapter={c} key={`chapter: ${i + 1}`} id={`programmer-overview-dynamic-${numberToWord(i)}`} index={i} />
                    } else {
                        return <OverviewDynamic scrollTo={scrollToSectionHandler}  ctnRef={currentRef} chapter={c} key={`chapter: ${i + 1}`} id={`programmer-overview-dynamic-${numberToWord(i)}`} index={i} />
                    }

                })
            }
            <WhyDigitalSolutions scrollTo={scrollToSectionHandler}  ctnRef={whyDigitalRef} id='programmer-why-digital' />
            {
                importantFactors.map((f: Point, i: number) => {
                    const currentRefWhyDigital = whyDigitalDynamicRefs[i];
                    if (i % 2 === 0) {
                        return <WhyDigitalSolutionsDynamic scrollTo={scrollToSectionHandler}  ctnRef={currentRefWhyDigital} id={`programmer-why-digital-dynamic-${numberToWord(i)}`} index={i} factor={f} key={`factoralt: ${i}`} />
                    } else {
                        return <WhyDigitalSolutionsDynamic scrollTo={scrollToSectionHandler}  ctnRef={currentRefWhyDigital} id={`programmer-why-digital-dynamic-${numberToWord(i)}`} index={i} factor={f} key={`factor: ${i}`} />
                    }

                })
            }
            <ProgrammerScene />
        </>
    )
}

export default ProgrammerModule