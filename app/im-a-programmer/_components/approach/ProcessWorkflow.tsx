'use client'


import React from 'react';
import { PageWrapper } from '@/app/components';
import { motion } from 'framer-motion';
import styles from '../styles.module.css'

const ProcessWorkflow:React.FC<{}> = () => {
    return (
        <PageWrapper id='design-thinking'>

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