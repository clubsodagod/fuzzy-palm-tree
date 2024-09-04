'use client'


import React, { RefObject } from 'react';
import { PageWrapper } from '@/app/components';
import { motion } from 'framer-motion';
import styles from './styles.module.css'
import { Button } from '@mui/material';



const WhyDigitalSolutions:React.FC<{
    ctnRef:RefObject<HTMLDivElement>,
}> = ({
    ctnRef,
}) => {

    return (
        
            <PageWrapper
            id='programmer-why-digital'
            ctnRef={ctnRef}
            >
                
                {/* Top Typography Containers */}
                <motion.div
                className={`${styles.topHeroCtn} top-hero-ctn right`}
                >
                    <motion.h1
                    className={`${styles.header} header right`}
                    >
                        The Power of Digital Solutions
                    </motion.h1>

                    <motion.h3
                    className={`${styles.subheader} subheader right`}
                    >
                        Harnessing the Power of Technology to Drive Success
                    </motion.h3>
                    
                </motion.div>

                {/*  Bottom Container for navigation buttons */}
                <motion.div 
                className={`${styles.btmHeroCtn} btm-hero-ctn right`}
                >

                    <motion.p className={`${styles.excerpt} excerpt right`}>
                        Discover how digital solutions can be just what you need.
                    </motion.p>
                    <motion.div className={`${styles.btnCtn} btnCtn rightBtn`}>

                        <Button variant="contained">
                            My Approach
                        </Button>

                        <Button variant="contained">
                            My Work
                        </Button>
                    </motion.div>
                </motion.div>

            </PageWrapper>
    )
}

export default WhyDigitalSolutions