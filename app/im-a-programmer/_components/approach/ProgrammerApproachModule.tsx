'use client'
import { useAppContext } from '@/app/_context/AppContext';
import IntersectionWatcher from '@/app/_utility/window/IntersectionWatcher';
import WindowUpdater from '@/app/_utility/window/WindowUpdater';
import { scrollToSection } from '@/app/_utility/scroll/scroll-to-section';
import { useProgrammerPageSectionRefs } from '../../_utility/refs';
import React from 'react'
import { IBlogPopulated } from '@/app/_database/models/blog';
import ApproachHero from '../ApproachHero';
import DesignPatterns from '../DesignPatterns';
import SDLCHero from './sdlc/SDLCHero';
import SolidHero from './solid/SolidHero';

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

            <ApproachHero posts={posts} ctnRef={approachMainRef} scrollTo={scrollToSectionHandler} id='approach-main' />
            <SolidHero ctnRef={approachSolidRef} scrollTo={scrollToSectionHandler} id='approach-solid-principles' />
            <DesignPatterns ctnRef={designPatternsRef} scrollTo={scrollToSectionHandler} id='approach-design-patterns' />
            <SDLCHero ctnRef={sdlcRef} scrollTo={scrollToSectionHandler} id='approach-sdlc' />
        </>
    )
}

export default ProgrammerApproachModule