'use client'
import React, { RefObject, useEffect } from 'react';
import Footer from './Footer';
import { AnimatePresence, AnimationControls, Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import { AnimatePresencePro } from '../framer/AnimatePresencePro';
import { MotionDiv } from '../framer/MotionDiv';
import Navbar from './Navbar';


const AppContainer:React.FC<{
    children:React.ReactNode, 
    bodyRef?:RefObject<HTMLBodyElement>,
    ctnRef?:RefObject<HTMLDivElement>, 
    className?: string,
    animate?: Animation,
    controls?: AnimationControls,
    gradientVariants?: Variants,
    id?:string
}> = ({
    children, 
    bodyRef,
    ctnRef,
    className,
    animate,
    controls,
    gradientVariants,
    id
}) => {


    return (
                        <MotionDiv 
                        className={`app-ctn ${className}`} 
                        ref={ctnRef}
                        initial={gradientVariants?.main as any}
                        animate={controls}
                        variants={gradientVariants}
                        transition={{ duration: 2 }}
                        id={id}
                        >
                            {children} 
                        </MotionDiv>           
    )
}

export default AppContainer