'use client'
import React, { RefObject, useEffect } from 'react';
import Footer from './Footer';
import { AnimatePresence, AnimationControls, Variants } from 'framer-motion';
import { Navbar } from '..';
import { motion } from 'framer-motion';


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
    const keyframes = `
        @keyframes gradientAnimation {
            0% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
            100% {
                background-position: 0% 50%;
            }
        }
    `;


    return (
                <AnimatePresence>
                <body ref={bodyRef}>
                    <Navbar/>
                    <motion.div 
                    className={`app-ctn ${className}`} 
                    ref={ctnRef}
                    initial={gradientVariants?.main as any}
                    animate={controls}
                    variants={gradientVariants}
                    transition={{ duration: 2 }}
                    id={id}
                    >
                        {children} 
                    </motion.div>
                        
                </body>       
                </AnimatePresence>  

    )
}

export default AppContainer