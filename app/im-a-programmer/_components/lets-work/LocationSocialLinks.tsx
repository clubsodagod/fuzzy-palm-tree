import { PageWrapper } from '@/app/_hide/_components';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import React, { RefObject } from 'react';
import styles from '../styles.module.css';

const LocationSocialLinks:React.FC<{
    ctnRef:RefObject<HTMLDivElement>,
}> = ({
    ctnRef,
}) => {   
    return (

        <PageWrapper
        ctnRef={ctnRef} 
        id='lets-work-location-information'
        >
            
            <motion.div className={`${styles.topTextCtn} top-text-ctn right`}>
                <motion.h1 className={`${styles.header} header right`} >
                    Follow Us Online
                </motion.h1>
                <motion.h4 className={`${styles.subheader} subheader right`}>
                    Follow Us for the Latest in Digital Innovation
                </motion.h4>
            </motion.div>

            
            {/*  Bottom Section Ctn */}
            <motion.div 
            className={`${styles.btmHeroCtn} btm-hero-ctn right`}
            >

                {/*  Bottom Container for navigation buttons */}
                <motion.div className={`${styles.btmHeroCtn} btm-hero-ctn right`}>

                    <motion.h5 className={`${styles.excerpt} excerpt right`}>
                        Stay connected with us on social media for industry insights and company updates.
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

export default LocationSocialLinks