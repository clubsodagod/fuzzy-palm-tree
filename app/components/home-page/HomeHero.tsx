'use client'
import { firstName, lastName } from '@/library/const'
import React from 'react'
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
    scrollYPro:number
}> = ({
    scrollYProgress,
    scrollY,
    scrollYPro,
}) => {  


    const scale = useTransform(scrollYProgress,[0,0.2], [1,0]);
    const x = useTransform(scrollYProgress,[0,0.2],[0,25])
    const opacity = useTransform(scrollYProgress,[0,0.2], [1,0])

    return (
            <OuterSceneWrapper>    
                    <HomeMainHero />
                    <ProgrammerHero />
                    <InvestmentsHero />
                    <BlogHero />    
            </OuterSceneWrapper>

    )
}

export default HomeHero