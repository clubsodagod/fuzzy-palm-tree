'use client'
import React, { RefObject, useEffect } from 'react';
import Footer from './Footer';
import { AnimatePresence, AnimationControls, Variants } from 'framer-motion';
import { Navbar } from '..';
import { motion } from 'framer-motion';


const AppContainer:React.FC<{
    children:React.ReactNode, 
    ctnRef?:RefObject<HTMLDivElement>, 
    className?: string,
    animate?: Animation,
    controls?: AnimationControls,
    gradientVariants?: Variants,
    
}> = ({
    children, 
    ctnRef,
    className,
    animate,
    controls,
    gradientVariants,
}) => {


    return (
                <AnimatePresence>
                <body >
                    <Navbar/>
                    <motion.div 
                    className={`app-ctn ${className}`} 
                    ref={ctnRef}
                    initial={gradientVariants?.main as any}
                    animate={controls}
                    variants={gradientVariants}
                    transition={{ duration: 2 }}
                    >
                        {children} 
                    </motion.div>
                        
                </body>       
                </AnimatePresence>  

    )
}

export default AppContainer