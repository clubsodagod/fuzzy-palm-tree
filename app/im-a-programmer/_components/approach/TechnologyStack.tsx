'use client'


import React, { RefObject } from 'react';
import { PageWrapper } from '@/app/components';
import { motion } from 'framer-motion';
import styles from '../styles.module.css';

const TechnologyStack:React.FC<{
    ctnRef:RefObject<HTMLDivElement>,
}> = ({
    ctnRef,
}) => {   
    return (
        <PageWrapper
        ctnRef={ctnRef} 
        id='approach-technology-stack'
        >

            <motion.div 
            className={`${styles.topHeroCtn} top-hero-ctn`}
            >

                <motion.h1 className={`${styles.header} header`} >
                    Technology Stack
                </motion.h1>
                <motion.h2 className={`${styles.subheader} subheader`} >
                    Leveraging cutting-edge tools to craft innovative solutions.
                </motion.h2>
            </motion.div>
            
        </PageWrapper>
    )
}

export default TechnologyStack