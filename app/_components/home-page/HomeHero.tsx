'use client'
import { firstName, lastName } from '@/library/const'
import React, { RefObject, useRef } from 'react'
import { HomeScene } from '../scenes'
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import Image from 'next/image'
import { AnimatePresence, motion, MotionValue, useScroll, useTransform, } from 'framer-motion';
import styles from './home-page.module.css'
import OuterSceneWrapper from '../common/OuterSceneWrapper';
import PageWrapper from '../common/PageWrapper';
import { BlogHero, HomeMainHero, InvestmentsHero, ProgrammerHero } from '..';

const HomeHero:React.FC<{
    scrollYProgress:MotionValue,
    scrollY:MotionValue,
    scrollYPro:number,
    ctnRef: RefObject<HTMLDivElement>,
}> = ({
    scrollYProgress,
    scrollY,
    scrollYPro,
    ctnRef,
}) => {  


    const mainRef = useRef<HTMLDivElement>(null);
    const programmerRef = useRef<HTMLDivElement>(null);
    const investRef = useRef<HTMLDivElement>(null);
    const blogRef = useRef<HTMLDivElement>(null);

    return (
            <OuterSceneWrapper ctnRef={ctnRef}>    
                    <HomeMainHero ctnRef={mainRef} />
                    <ProgrammerHero ctnRef={programmerRef} />
                    <InvestmentsHero ctnRef={investRef} />
                    <BlogHero ctnRef={blogRef} />    
            </OuterSceneWrapper>

    )
}

export default HomeHero