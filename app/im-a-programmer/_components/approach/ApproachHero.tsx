'use client'
import React, { RefObject } from 'react'
import { PageWrapper } from '@/app/components'
import styles from '../styles.module.css';
import { motion } from 'framer-motion';
import { Button } from '@mui/material';

const ApproachHero:React.FC<{
    ctnRef:RefObject<HTMLDivElement>,
}> = ({
    ctnRef,
}) => {   
    return (
        <PageWrapper
        ctnRef={ctnRef} 
        id='approach-main'
        >

            <motion.div 
            className={`${styles.topHeroCtn} top-hero-ctn right`}
            >

                <motion.h1 className={`${styles.header} header right`} >
                    My Approach
                </motion.h1>
                <motion.h4 className={`${styles.subheader} subheader right`} >
                    Empowering Vision Through Technology
                </motion.h4>
            </motion.div>

            <motion.div 
            className={`${styles.btmHeroCtn} btm-hero-ctn right`}
            >

                <motion.div className={`${styles.btnCtn} btn-ctn rightBtn`}>
                    
                    <Button variant='outlined'>
                        Agile Development
                    </Button>
                </motion.div>
            </motion.div>
        </PageWrapper>
    )
}

export default ApproachHero