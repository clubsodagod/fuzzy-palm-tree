'use client'


import React, { RefObject } from 'react';
import { PageWrapper } from '@/app/components';
import { motion } from 'framer-motion';
import styles from './styles.module.css';

const Overview:React.FC<{
    ctnRef:RefObject<HTMLDivElement>,
}> = ({
    ctnRef,
}) => {
    return (
        <PageWrapper
        id='programmer-overview'
        ctnRef={ctnRef}
        >
            

            {/*  Top Typography Ctn */}
            <motion.div 
            className={`${styles.topHeroCtn} top-hero-ctn`}
            >
                <motion.h1 
                className={`${styles.header} header`}
                >
                    I&apos;m <span className={`${styles.myName} my-name`}>Maliek Davis</span>.

                </motion.h1>

                <motion.h3 className={`${styles.subheader} subheader`}>
                    Much more than just a <span className={`$styles.dynamicText} dynamic-text`}>developer</span>.
                </motion.h3>
            </motion.div>
            

            {/*  Top Typography Ctn */}
            <motion.div 
            className={`${styles.btmHeroCtn} btm-hero-ctn`}
            >

                <motion.h6 className={`${styles.excerpt} excerpt`}>
                —I&apos;m a digital innovator passionate about using computer science to make a real impact. I bring creativity and technical expertise together to offer a range of services that include custom software development, data science, and AI integration.
                </motion.h6>
            </motion.div>
        </PageWrapper>
    )
}

export default Overview