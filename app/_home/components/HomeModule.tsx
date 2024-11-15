'use client'
import { useHomeRefs } from '@/app/_utility/refs/home/home-refs'
import React from 'react'
import MainHomeHero from './MainHomeHero'
import HomeProgrammerSection from './HomeProgrammerSection'
import HomeBlogSection from './HomeBlogSection'
import { IBlogPopulated } from '@/app/_database/models/blog'
import WindowUpdater from '@/app/_utility/window/WindowUpdater'
import IntersectionWatcher from '@/app/_utility/window/IntersectionWatcher'
import { scrollToSection } from '@/app/_utility/scroll/scroll-to-section'
import { useAppContext } from '@/app/_context/AppContext'
import HomePageScene from './three/HomePageScene'

interface HomeModuleProps {
    featuredPosts: IBlogPopulated[] | undefined;
}

const HomeModule: React.FC<HomeModuleProps> = ({ featuredPosts }) => {


    const {
        appContainer:{
            currentSection
        }
    } = useAppContext();

    const {
        mainRef, programmerRef, blogRef, scrollRef, refs
    } = useHomeRefs()


    function scrollToSectionHandler(id: string) {
        console.log(id);
        
        scrollToSection(id, refs, currentSection);
    };
    
    WindowUpdater(scrollRef);
    IntersectionWatcher({ refs });

  
    return (
        <>
            <HomePageScene />
            <MainHomeHero ctnRef={mainRef} id='home-main' scrollTo={scrollToSectionHandler} />
            <HomeProgrammerSection ctnRef={programmerRef} id='home-programmer' scrollTo={scrollToSectionHandler} />
            <HomeBlogSection ctnRef={blogRef} id='home-blog' posts={featuredPosts} scrollTo={scrollToSectionHandler} />
        </>
    )
}

export default HomeModule