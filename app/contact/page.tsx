'use client'
import React, { useEffect, useState } from 'react'
import LetsWorkHero from '../im-a-programmer/lets-work/_components/LetsWorkHero'
import { useProgrammerPageSectionRefs } from '@/utility/refs/programmer-page-refs';
import { useScroll, useAnimationControls } from 'framer-motion';
import IntersectionWatcher from '../_utility/window/IntersectionWatcher';
import WindowUpdater from '../_utility/window/WindowUpdater';

const ContactPage = () => {

    const {
        scrollRef, bodyRef, ctaRefs: refs,
        ctaConsultationRef, contactInfoRef, locationInfoRef,
    } = useProgrammerPageSectionRefs();



    WindowUpdater(scrollRef);

    IntersectionWatcher({ refs });





    return (
        <>
            <LetsWorkHero id='lets-work-main-pro'  ctnRef={ctaConsultationRef} />
        </>
    )
}

export default ContactPage