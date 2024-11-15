'use client'


import { AppContainer } from '@/app/_hide/_components';
import React, { useEffect, useRef, useState } from 'react'
import { AgileDevelopment, AgileDevelopmentDynamic, ApproachHero, DesignPatterns,  DesignThinkingDynamic, ProcessWorkflow, TechnologyStack, WorkflowDynamic } from '../_components/approach';
import { agileDevelopment, designThinking, Point, workflow } from '@/library/const';
import { useProgrammerPageSectionRefs } from '@/utility/refs/programmer-page-refs';
import { useScroll, useMotionValueEvent, useAnimationControls } from 'framer-motion';
import { programmerGradientVariants } from '@/library/const/animation-gradients';
import SolidHero from '../_components/approach/solid/SolidHero';
import SDLCHero from '../_components/approach/sdlc/SDLCHero';
import GradientUseEffect from '@/app/_hide/_components/common/GradientUseEffect';
import { useRouter } from 'next/navigation';

const ApproachPage = () => {
    const router = useRouter();
    const {
        scrollRef, bodyRef, approachRefs: refs,
        approachMainRef, approachSolidRef, approachAgileDevDynamicRefs,
        designPatternsRef, designThinkingDynamicRefs, continuousLearningRef,
        sdlcRef, processFlowDynamicRefs,
    } = useProgrammerPageSectionRefs();

    const [scrollYPro, setScrollYPro] = React.useState<number>(0)
    const { scrollYProgress, scrollY, } = useScroll({ target: bodyRef, offset: ['start end', 'end start'] })

    useMotionValueEvent(scrollY, "change", (latest) => {
        // console.log(latest, (scrollRef?.current?.scrollHeight! - (window ? window.innerHeight : 0) ))
        setScrollYPro(scrollRef?.current?.scrollHeight! - (window ? window.innerHeight : 0));
    });

    const [currentSection, setCurrentSection] = useState<string>('');
    const controls = useAnimationControls();

    const snapToTop = (element: Element) => {
        element.scrollIntoView({ behavior: "auto", block: 'start' });
    };

    console.log(refs);

    function scrollToSection(id: string) {
        switch (id) {
            case "approach-main":
                refs[0].ref.current?.scrollIntoView({
                    block:"start", behavior:"auto",
                });
                break;
            case "approach-solid-principles":
                refs[1].ref.current?.scrollIntoView({
                    block:"start", behavior:"auto",
                });
                break;
            case "approach-design-patterns":
                refs[2].ref.current?.scrollIntoView({
                    block:"start", behavior:"auto",
                });
                break;
            case "approach-sdlc":
                refs[3].ref.current?.scrollIntoView({
                    block:"start", behavior:"auto",
                });
                break;

            default:
                break;
        }
    }

    function goToPage(id:string) {
        router.push(id);
    }

    GradientUseEffect({ controls, refs });


    return (
        <AppContainer
            ctnRef={scrollRef}
            bodyRef={bodyRef}
            gradientVariants={programmerGradientVariants}
            controls={controls}
        >

            <ApproachHero ctnRef={approachMainRef} scrollTo={scrollToSection} />
            <SolidHero ctnRef={approachSolidRef} scrollTo={scrollToSection} />
            <DesignPatterns ctnRef={designPatternsRef}  scrollTo={scrollToSection}/>
            <SDLCHero ctnRef={sdlcRef}  scrollTo={scrollToSection}/>

        </AppContainer>
    )
}

export default ApproachPage