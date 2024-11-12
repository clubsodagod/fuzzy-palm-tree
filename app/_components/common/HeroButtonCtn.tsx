'use client'


import React from 'react'
import styles from '../investment-page/investments.module.css'
import { motion } from 'framer-motion';
import { MotionDiv } from '../framer/MotionDiv';

const HeroButtonCtn:React.FC<{
    children:React.ReactNode,
    id?:string,
}> = ({
    children,
    id,
}) => {
    return (
        <MotionDiv
        className={`${styles.btnCtn} z-50`}
        id={id}>
            {children}
        </MotionDiv>
    )
}

export default HeroButtonCtn