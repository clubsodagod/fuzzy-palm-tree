'use client'


import React, { RefObject } from 'react'
import { OuterSceneWrapper, PageWrapper } from '@/app/components'
import { motion } from 'framer-motion';
import styles from './styles.module.css'
import { Button } from '@mui/material';

const DigitalSolutionsHeroMain:React.FC<{
    ctnRef?:RefObject<HTMLDivElement>,
}> = ({
    ctnRef,
}) => {
    return (
            <PageWrapper ctnRef={ctnRef} id='programmer-main'>
                
                {/* Top Typography Containers */}
                <motion.div
                className={`${styles.topHeroCtn} top-hero-ctn`}
                >
                    <motion.h1
                    className={`${styles.header} header`}
                    >
                        I&apos;m a Programmer
                    </motion.h1>
                    <motion.h3 className={`${styles.subheader} subheader`}>
                        Bringing Your Ideas to Life with Innovation and Expertise
                    </motion.h3>
                </motion.div>

                {/*  Bottom Container for navigation buttons */}
                <motion.div className={`${styles.btmHeroCtn} btm-hero-ctn`}>

                    <motion.h5 className={styles.excerpt}>

                    </motion.h5>
                    <motion.div className={`${styles.btnCtn} btn-ctn`}>
                        <Button variant='contained'>My Approach</Button>
                        <Button variant='outlined'>Featured Solutions</Button>
                    </motion.div>
                </motion.div>
            </PageWrapper>
    )
}

export default DigitalSolutionsHeroMain