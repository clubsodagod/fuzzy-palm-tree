"use client"
import React, { RefObject } from 'react'
import styles from './styles.module.css';
import { MotionDiv } from '../framer/MotionDiv';


const MotionSectionWrapper: React.FC<{
    children:React.ReactNode,
    id?:string,
    ctnRef?:RefObject<HTMLDivElement>
}> = ({
    children,
    id,
    ctnRef
}) => {

    return (
        <MotionDiv
        ref={ctnRef!}
        id={id?id:''}
        className={`${styles.sectionWrapper} section-wrapper`}
        >
            {/* name */}
            {children}
        </MotionDiv>
    )
}



export default MotionSectionWrapper;