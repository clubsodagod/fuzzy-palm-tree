'use client'
import React, { RefObject } from 'react'
import { PageWrapper } from '@/app/components'
import { motion } from 'framer-motion'
import styles from '../styles.module.css'

const DesignThinking:React.FC<{
    ctnRef:RefObject<HTMLDivElement>,
}> = ({
    ctnRef,
}) => {   
    return (
        <PageWrapper
        ctnRef={ctnRef} 
        id='approach-design-thinking'
        >

            <motion.div 
            className={`${styles.topHeroCtn} top-hero-ctn left`}
            >

                    <motion.h1 className={`${styles.header} header left`} >
                        Design Thinking
                    </motion.h1>
                    <motion.h2 className={`${styles.subheader} subheader left`} >
                        Empathy-Driven Design for User-Centric Solutions
                    </motion.h2>
            </motion.div>
        
        </PageWrapper>
    )
}

export default DesignThinking