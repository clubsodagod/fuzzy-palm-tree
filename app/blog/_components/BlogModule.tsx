"use client"

import React from 'react'
import { IBlogPopulated } from '@/app/_database/models/blog'

import { useAppContext } from '@/app/_context/AppContext'

import IntersectionWatcher from '@/app/_utility/window/IntersectionWatcher'
import WindowUpdater from '@/app/_utility/window/WindowUpdater'
import { useBlogPageSectionRefs } from '../_utility/refs'
import BlogMainHero from './BlogMainHero'
import { scrollToSection } from '@/utility/common/scrollToSection'

export interface BlogModuleProps {
    featuredPosts: IBlogPopulated[] | undefined;
    allPosts: IBlogPopulated[] | undefined;
    slug: IBlogPopulated | undefined;
    id: string;
}

const BlogModule: React.FC<BlogModuleProps> = ({
    featuredPosts,
    allPosts,
    slug,
    id,
}) => {
    const {
        screen: { currentBreakpoint },
        appContainer:{scrollRef, currentSection}
    } = useAppContext()


    const {
        blogRef, refs, ctnRef, bodyRef 
    } = useBlogPageSectionRefs();

    function scrollToSectionHandler(id: string) {
        scrollToSection(id, refs, currentSection);
    };


    WindowUpdater(scrollRef);
    IntersectionWatcher({ refs });


    return (
        <>
        <BlogMainHero 
            featuredPosts={featuredPosts} allPosts={allPosts} id='blog-main' ctnRef={blogRef}
            scrollTo={scrollToSectionHandler}
        />
        </>
    )
}



export default BlogModule;