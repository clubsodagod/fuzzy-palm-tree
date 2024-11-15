"use client"
import React, { RefObject } from 'react'
import { AnimationControls, Variants } from 'framer-motion';
import { MotionDivProps } from '@/app/_library/types/common';
import { MotionDiv } from './framer/MotionDiv';


interface PageWrapperProps extends MotionDivProps {
    children: React.ReactNode,
    ctnRef?: RefObject<HTMLDivElement>,
    className?: string,
    controls?: AnimationControls,
    gradientVariants?: Variants,
    id?: string
}


const MotionSectionWrapper: React.FC<PageWrapperProps> = ({
    children,
    ctnRef,
    controls,
    gradientVariants,
    id,
    ...props
}) => {

    return (
        <MotionDiv
            {...props}
            className={`app-ctn `}
            ref={ctnRef}
            animate={controls}
            variants={gradientVariants}
            transition={{ duration: 1 }}
            id={id}
        >
            {children}
        </MotionDiv>
    )
}



export default MotionSectionWrapper;