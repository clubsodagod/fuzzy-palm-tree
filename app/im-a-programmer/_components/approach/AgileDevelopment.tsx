'use client'

import React, { RefObject } from 'react'
import { PageWrapper } from '@/app/_components'
import { motion } from 'framer-motion';
import styles from '../styles.module.css';

const AgileDevelopment:React.FC<{
    ctnRef:RefObject<HTMLDivElement>,
}> = ({
    ctnRef,
}) => {   
    return (
        <PageWrapper
        ctnRef={ctnRef} 
        id='approach-agile-development'
        >

            <motion.div 
            className={`${styles.topHeroCtn} top-hero-ctn left`}
            >

                <motion.h1 className={`${styles.header} header left`} >
                    Agile Development
                </motion.h1>
                <motion.h2 className={`${styles.subheader} subheader left`} >
                    Innovating at the Speed of Change
                </motion.h2>
            </motion.div>
            
        </PageWrapper>
    )
}

export default AgileDevelopment