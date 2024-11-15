'use client'
import React, { RefObject} from 'react';
import { AnimationControls, Variants } from 'framer-motion';
import { MotionDiv } from '../framer/MotionDiv';


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
                        transition={{ duration: 0.9 }}
                        id={id}
                        >
                            {children} 
                        </MotionDiv>           
    )
}

export default AppContainer