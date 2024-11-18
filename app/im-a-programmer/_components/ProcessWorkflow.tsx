'use client'


import React, { RefObject } from 'react';
import { PageWrapper } from '@/app/_hide/_components';
import { motion } from 'framer-motion';
import styles from '../styles.module.css'

const ProcessWorkflow:React.FC<{
    ctnRef:RefObject<HTMLDivElement>,
}> = ({
    ctnRef,
}) => {   
    return (
        <PageWrapper
        ctnRef={ctnRef} 
        id='approach-process-flow'
        >

            <motion.div 
            className={`${styles.topHeroCtn} top-hero-ctn`}
            >

                <motion.h1 className={`${styles.header} header`} >
                    My Process
                </motion.h1>
                <motion.h2 className={`${styles.subheader} subheader`} >
                    From Concept to Completion: A Guided Journey
                </motion.h2>
            </motion.div>
            
        </PageWrapper>
    )
}

export default ProcessWorkflow