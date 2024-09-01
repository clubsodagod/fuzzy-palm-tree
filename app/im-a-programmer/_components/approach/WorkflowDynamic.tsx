
'use client'

import React from 'react'
import { PageWrapper } from '@/app/components'
import { Point } from '@/library/const'
import { motion } from 'framer-motion';
import styles from '../styles.module.css';

const WorkflowDynamic:React.FC<{
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

export default WorkflowDynamic