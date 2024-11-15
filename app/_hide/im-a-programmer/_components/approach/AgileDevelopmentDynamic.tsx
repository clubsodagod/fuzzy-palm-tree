'use client'


import React, { RefObject } from 'react'
import { PageWrapper } from '@/app/_hide/_components'
import { Point } from '@/library/const'
import { motion } from 'framer-motion'
import styles from '../styles.module.css';
import { numberToWord } from '@/utility/functions'

const AgileDevelopmentDynamic:React.FC<{
    factor:Point,
    left:string,
    ctnRef:RefObject<HTMLDivElement>,
    index:number
}> = ({
    factor:{
        label,
        point,
    },
    left,
    ctnRef,
    index
}) => {

        return (
            <PageWrapper
            ctnRef={ctnRef} 
            id={`approach-agile-development-dynamic-${numberToWord(index)}`}
            >
            

            {/*  Top Typography Ctn */}
            <motion.div 
            className={`${styles.pointCtn} point-ctn `}
            >
                <motion.h2 
                className={`${styles.subheader} subheader ${left !== '' && styles[left]} ${left}`}
                >
                    {label}
                </motion.h2>

                <motion.h4 
                className={`${styles.storyText} story-text ${left !== '' && styles[left]} ${left}`}
                >
                    {point}
                </motion.h4>

            </motion.div>
        </PageWrapper>
    )
}

export default AgileDevelopmentDynamic