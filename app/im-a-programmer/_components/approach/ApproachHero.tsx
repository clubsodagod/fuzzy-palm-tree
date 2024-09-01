'use client'
import React from 'react'
import { PageWrapper } from '@/app/components'
import styles from '../styles.module.css';
import { motion } from 'framer-motion';
import { Button } from '@mui/material';

const ApproachHero = () => {
    return (
        <PageWrapper id='digital-solutions-approach'>

            <motion.div 
            className={`${styles.topHeroCtn} top-hero-ctn`}
            >

                <motion.h1 className={`${styles.header} header`} >
                    My Approach
                </motion.h1>
                <motion.h4 className={`${styles.subheader} subheader`} >
                    Empowering Vision Through Technology
                </motion.h4>
            </motion.div>

            <motion.div 
            className={`${styles.btmHeroCtn} btm-hero-ctn`}
            >

                <motion.div className={`${styles.btnCtn} btn-ctn`}>
                    
                    <Button variant='outlined'>
                        Agile Development
                    </Button>
                </motion.div>
            </motion.div>
        </PageWrapper>
    )
}

export default ApproachHero