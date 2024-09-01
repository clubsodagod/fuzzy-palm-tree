'use client'

import React from 'react'
import styles from '../styles.module.css';
import { PageWrapper } from '@/app/components';
import { motion } from 'framer-motion';
import { Point } from '@/library/const';

const DesignThinkingDynamic:React.FC<{
    factor:Point,
    left:string
}> = ({
    factor:{
        label,
        point,
    },
    left
}) => {
    return (
        <PageWrapper id='design-thinking-dynamic'>
            

            {/*  Top Typography Ctn */}
            <motion.div 
            className={`${styles.pointCtn} point-ctn ${left !== '' && styles[left]} ${left}`}
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