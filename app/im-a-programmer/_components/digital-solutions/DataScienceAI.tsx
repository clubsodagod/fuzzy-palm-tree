import { PageWrapper } from '@/app/components'
import { motion } from 'framer-motion'
import React, { RefObject } from 'react'
import styles from '../styles.module.css'
import { Button } from '@mui/material'

const DataScienceAI:React.FC<{
    ctnRef?:RefObject<HTMLDivElement>,
}> = ({
    ctnRef,
}) => {
    return (
            <PageWrapper 
            ctnRef={ctnRef} 
            id='data-science-ai'
            >

                {/*  Top Typography Ctn */}
                <motion.div 
                className={`${styles.topHeroCtn} top-hero-ctn left`}
                >
                    <motion.h1 
                    className={`${styles.header} header left`}
                    >
                        AI Solutions
                    </motion.h1>

                    <motion.h5 className={`${styles.subheader} subheader left`}>
                        AI and Data Science: Driving Smart Business Decisions
                    </motion.h5>
                </motion.div>
                

                {/*  Top Typography Ctn */}
                <motion.div 
                className={`${styles.btmHeroCtn} btm-hero-ctn left`}
                >

                    {/*  Bottom Container for navigation buttons */}
                    <motion.div className={`${styles.btmHeroCtn} btm-hero-ctn left`}>

                        <motion.h5 className={styles.excerpt}>
                            Whether you need a tailored CRM, ERP, or any other business application, our custom software solutions deliver functionality that enhances efficiency and scales with your growth.
                        </motion.h5>
                        <motion.div className={`${styles.btnCtn} btn-ctn leftBtn`}>
                            <Button variant='contained'>See AI in Action</Button>
                            <Button variant='outlined'>Request Free Consultation</Button>
                        </motion.div>
                    </motion.div>
                </motion.div>
        
            </PageWrapper>
    )
}

export default DataScienceAI