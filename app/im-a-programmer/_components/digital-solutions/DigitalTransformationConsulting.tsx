import { PageWrapper } from '@/app/components';
import React, { RefObject } from 'react';
import styles from '../styles.module.css';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';

const DigitalTransformationConsulting:React.FC<{
    ctnRef?:RefObject<HTMLDivElement>,
}> = ({
    ctnRef,
}) => {
    return (
            <PageWrapper 
            ctnRef={ctnRef} 
            id='digital-transformation'
            >

            {/*  Top Typography Ctn */}
            <motion.div 
            className={`${styles.topHeroCtn} top-hero-ctn left`}
            >
                <motion.h1 
                className={`${styles.header} header left`}
                >
                    Digital Transformations

                </motion.h1>

                <motion.h5 className={`${styles.subheader} subheader left`}>
                Adapt, Innovate, and Lead with a Digital Transformation
                </motion.h5>
            </motion.div>
            

            {/*  Top Typography Ctn */}
            <motion.div 
            className={`${styles.btmHeroCtn} btm-hero-ctn left`}
            >

                {/*  Bottom Container for navigation buttons */}
                <motion.div className={`${styles.btmHeroCtn} btm-hero-ctn left`}>

                    <motion.h5 className={styles.excerpt}>
                        Digital transformation is not just about technology. It&apos;s about changing the way you do business. Our digital transformation services help you modernize operations, improve customer engagement, and drive innovation.                    </motion.h5>
                    <motion.div className={`${styles.btnCtn} btn-ctn leftBtn`}>
                        <Button variant='contained'>Get an App Quote</Button>
                        <Button variant='outlined'>Free Project Consultation</Button>
                    </motion.div>
                </motion.div>
            </motion.div>
            </PageWrapper>
    )
}

export default DigitalTransformationConsulting