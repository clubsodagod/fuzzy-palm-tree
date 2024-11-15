'use client'
import { useAppContext } from '@/app/_context/AppContext';
import MotionPageWrapper from '@/app/_hide/_components/common/MotionPageWrapper';
import IntersectionWatcher from '@/app/_utility/window/IntersectionWatcher';
import WindowUpdater from '@/app/_utility/window/WindowUpdater';
import { scrollToSection } from '@/app/_utility/scroll/scroll-to-section';
import { useProgrammerPageSectionRefs } from '../../_utility/refs';
import React from 'react'
import { ApproachHero, DesignPatterns } from '@/app/_hide/im-a-programmer/_components/approach';
import SDLCHero from '@/app/_hide/im-a-programmer/_components/approach/sdlc/SDLCHero';
import SolidHero from '@/app/_hide/im-a-programmer/_components/approach/solid/SolidHero';
import { IBlogPopulated } from '@/app/_database/models/blog';

interface ProgrammerApproachModuleProps {
    posts:IBlogPopulated[]|undefined;
}

const ProgrammerApproachModule: React.FC<ProgrammerApproachModuleProps> = ({
    posts,
}) => {

    const {
        appContainer: {
            currentSection
        }
    } = useAppContext();

    const {
        scrollRef, approachRefs: refs,
        approachMainRef, approachSolidRef, designPatternsRef, sdlcRef,
    } = useProgrammerPageSectionRefs();

    function scrollToSectionHandler(id: string) {
        console.log(id);

        scrollToSection(id, refs, currentSection);
    };

    WindowUpdater(scrollRef);

    IntersectionWatcher({ refs });


    return (
        <>

            <ApproachHero posts={posts} ctnRef={approachMainRef} scrollTo={scrollToSectionHandler} id='programmer-approach-main' />
            <SolidHero ctnRef={approachSolidRef} scrollTo={scrollToSectionHandler} />
            <DesignPatterns ctnRef={designPatternsRef} scrollTo={scrollToSectionHandler} />
            <SDLCHero ctnRef={sdlcRef} scrollTo={scrollToSectionHandler} />
        </>
    )
}

export default ProgrammerApproachModule