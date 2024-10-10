"use client"
import React, { RefObject } from 'react'
import styles from './styles.module.css'
import { AnimatePresencePro } from '../framer/AnimatePresencePro';
import { Navbar } from '..';
import { MotionDiv } from '../framer/MotionDiv';
import { AnimationControls, Variants } from 'framer-motion';


const MotionPageWrapper: React.FC<{
    children: React.ReactNode,
    bodyRef?: RefObject<HTMLBodyElement>,
    ctnRef?: RefObject<HTMLDivElement>,
    className?: string,
    animate?: Animation,
    controls?: AnimationControls,
    gradientVariants?: Variants,
    id?: string
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
            <AnimatePresencePro>
                <body>
                    <Navbar />
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
                </body>
            </AnimatePresencePro>
        )
    }



export default MotionPageWrapper;