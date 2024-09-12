'use client'

import React, { RefObject } from 'react'
import styles from '../styles.module.css';
import { PageWrapper } from '@/app/components';
import { motion } from 'framer-motion';
import { Point } from '@/library/const';
import { numberToWord } from '@/utility/functions';

const DesignThinkingDynamic:React.FC<{
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
            id={`approach-design-thinking-dynamic-${numberToWord(index)}`}
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

export default DesignThinkingDynamic