import { PageWrapper } from '@/app/components'
import React, { RefObject } from 'react'
import { motion } from 'framer-motion'
import styles from '../styles.module.css'
import { Button } from '@mui/material'

const CustomSoftwareDevelopment:React.FC<{
    ctnRef:RefObject<HTMLDivElement>,
}> = ({
    ctnRef,
}) => {
    return (
            <PageWrapper 
            ctnRef={ctnRef} 
            id='custom-software'
            >

                {/*  Top Typography Ctn */}
                <motion.div 
                className={`${styles.topHeroCtn} top-hero-ctn right`}
                >
                    <motion.h1 
                    className={`${styles.header} header right`}
                    >
                        Tailored Software Solutions

                    </motion.h1>

                    <motion.h5 className={`${styles.subheader} subheader right`}>
                        Your Vision, Our Code: Custom Software Development
                    </motion.h5>
                </motion.div>
                

                {/*  Top Typography Ctn */}
                <motion.div 
                className={`${styles.btmHeroCtn} btm-hero-ctn right`}
                >

                    {/*  Bottom Container for navigation buttons */}
                    <motion.div className={`${styles.btmHeroCtn} btm-hero-ctn right`}>

                        <motion.h5 className={styles.excerpt}>
                        Whether you need a tailored CRM, ERP, or any other business application, our custom software solutions deliver functionality that enhances efficiency and scales with your growth.
                        </motion.h5>
                        <motion.div className={`${styles.btnCtn} btn-ctn rightBtn`}>
                            <Button variant='contained'>Get a Quote</Button>
                            <Button variant='outlined'>Request Free Consultation</Button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </PageWrapper>
    )
}

export default CustomSoftwareDevelopment