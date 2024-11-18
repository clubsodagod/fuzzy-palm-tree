"use client"
import React, { RefObject } from 'react'
import styles from './styles.module.css'
import { AnimationControls, Variants } from 'framer-motion';
import { MotionDiv } from './framer/MotionDiv';


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



export default MotionPageWrapper;