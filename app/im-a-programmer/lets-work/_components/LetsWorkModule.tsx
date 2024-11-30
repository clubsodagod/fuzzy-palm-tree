'use client'

import IntersectionWatcher from '@/app/_utility/window/IntersectionWatcher';
import WindowUpdater from '@/app/_utility/window/WindowUpdater';
import { useProgrammerPageSectionRefs } from '@/utility/refs/programmer-page-refs';
import React, { useState } from 'react'
import LetsWorkHero from './LetsWorkHero';

const LetsWorkModule = () => {

    const {
        scrollRef, bodyRef, ctaRefs: refs,
        ctaConsultationRef, contactInfoRef, locationInfoRef,
    } = useProgrammerPageSectionRefs();


    const [currentSection, setCurrentSection] = useState<string>('');


    WindowUpdater(scrollRef);
    IntersectionWatcher({ refs });

    return (
            <LetsWorkHero ctnRef={ctaConsultationRef} />
    )
}

export default LetsWorkModule