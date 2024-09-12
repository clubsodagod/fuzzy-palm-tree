'use client'
import React, { RefObject, useEffect } from 'react';
import Footer from './Footer';
import { AnimatePresence, AnimationControls, Variants } from 'framer-motion';
import { Navbar } from '..';
import { motion } from 'framer-motion';


const PageContainer:React.FC<{
    children:React.ReactNode, 
    bodyRef?:RefObject<HTMLBodyElement>,
    ctnRef?:RefObject<HTMLBodyElement>, 
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
                <AnimatePresence>
                    <motion.body 
                        className={`app-ctn ${className}`} 
                        ref={ctnRef}
                        initial={gradientVariants?.main as any}
                        animate={controls}
                        variants={gradientVariants}
                        transition={{ duration: 2 }}
                        id={id}
                        >
                            <Navbar/>
                            {children} 
                        </motion.body>
                             

                </AnimatePresence>  

    )
}

export default PageContainer