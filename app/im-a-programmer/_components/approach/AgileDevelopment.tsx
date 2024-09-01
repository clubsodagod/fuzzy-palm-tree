'use client'

import React from 'react'
import { PageWrapper } from '@/app/components'
import { motion } from 'framer-motion';
import styles from '../styles.module.css';

const AgileDevelopment:React.FC<{}> = () => {
    return (
        <PageWrapper id='agile-development'>

            <motion.div 
            className={`${styles.topHeroCtn} top-hero-ctn`}
            >

                <motion.h1 className={`${styles.header} header`} >
                    Agile Development
                </motion.h1>
                <motion.h2 className={`${styles.subheader} subheader`} >
                    Innovating at the Speed of Change
                </motion.h2>
            </motion.div>
            
        </PageWrapper>
    )
}

export default AgileDevelopment