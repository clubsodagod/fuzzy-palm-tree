'use client'
import { AppContainer } from '@/app/_hide/_components';
import React, { useEffect, useRef, useState } from 'react'
import { useProgrammerPageSectionRefs } from '@/utility/refs/programmer-page-refs';
import { useScroll, useMotionValueEvent, useAnimationControls } from 'framer-motion';
import { programmerGradientVariants } from '@/library/const/animation-gradients';
import LetsWorkHero from './_components/LetsWorkHero';
import WindowUpdater from '@/app/_utility/window/WindowUpdater';
import IntersectionWatcher from '@/app/_utility/window/IntersectionWatcher';

const LetsWorkPage = () => {

    const {
        scrollRef, bodyRef, ctaRefs: refs,
        ctaConsultationRef, contactInfoRef, locationInfoRef,
    } = useProgrammerPageSectionRefs();


    const [currentSection, setCurrentSection] = useState<string>('');


    WindowUpdater(scrollRef);
    IntersectionWatcher({ refs });



    return (
        <>
            <LetsWorkHero ctnRef={ctaConsultationRef} />
        </>
    )
}

export default LetsWorkPage