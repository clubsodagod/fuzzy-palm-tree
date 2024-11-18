import { PageWrapper } from '@/app/_hide/_components'
import { motion } from 'framer-motion'
import React, { RefObject } from 'react'
import styles from '../styles.module.css'
import { Button } from '@mui/material'

const ContactInformation:React.FC<{
    ctnRef:RefObject<HTMLDivElement>,
}> = ({
    ctnRef,
}) => {   
    return (
        <PageWrapper
        ctnRef={ctnRef} 
        id='lets-work-contact-information'
        >
            
            <motion.div className={`${styles.topTextCtn} top-text-ctn left`}>
                <motion.h1 className={`${styles.header} header left`} >
                    Get in Touch
                </motion.h1>
                <motion.h4 className={`${styles.subheader} subheader left`}>
                Connect with Me: I&apos;m Just a Call or Click Away
                </motion.h4>
            </motion.div>

            
            {/*  Bottom Section Ctn */}
            <motion.div 
            className={`${styles.btmHeroCtn} btm-hero-ctn left`}
            >

                {/*  Bottom Container for navigation buttons */}
                <motion.div className={`${styles.btmHeroCtn} btm-hero-ctn left`}>

                    <motion.h5 className={`${styles.excerpt} excerpt left`}>
                        Bringing Your Ideas to Life with Innovation and Expertise
                    </motion.h5>
                    <motion.div className={`${styles.btnCtn} btn-ctn leftBtn`}>
                        <Button variant='contained'>My Approach</Button>
                        <Button variant='outlined'>Featured Solutions</Button>
                    </motion.div>
                </motion.div>
            </motion.div>
        </PageWrapper>
    )
}

export default ContactInformation