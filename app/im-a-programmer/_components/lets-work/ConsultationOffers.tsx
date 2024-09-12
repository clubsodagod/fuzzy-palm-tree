import { PageWrapper } from '@/app/components';
import React, { RefObject } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles.module.css';
import { Button } from '@mui/material';

const ConsultationOffers:React.FC<{
    ctnRef:RefObject<HTMLDivElement>,
}> = ({
    ctnRef,
}) => {   
    return (
        <PageWrapper
        ctnRef={ctnRef} 
        id='lets-work-consultation'
        >
            
            <motion.div className={`${styles.topTextCtn} top-text-ctn right`}>
                <motion.h1 className={`${styles.header} header right`} >
                    Schedule Your Free Digital Consultation
                </motion.h1>
                <motion.h4 className={`${styles.subheader} subheader right`}>
                    Start Your Digital Transformation with a Free Consultation!
                </motion.h4>
            </motion.div>

            
            {/*  Bottom Section Ctn */}
            <motion.div 
            className={`${styles.btmHeroCtn} btm-hero-ctn right`}
            >

                {/*  Bottom Container for navigation buttons */}
                <motion.div className={`${styles.btmHeroCtn} btm-hero-ctn right`}>

                    <motion.h5 className={styles.excerpt}>
                        Bringing Your Ideas to Life with Innovation and Expertise
                    </motion.h5>
                    <motion.div className={`${styles.btnCtn} btn-ctn rightBtn`}>
                        <Button variant='contained'>My Approach</Button>
                        <Button variant='outlined'>Featured Solutions</Button>
                    </motion.div>
                </motion.div>
            </motion.div>
        </PageWrapper>
        
    )
}

export default ConsultationOffers