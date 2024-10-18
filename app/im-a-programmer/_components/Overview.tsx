'use client'


import React, { RefObject } from 'react';
import { PageWrapper } from '@/app/components';
import { motion } from 'framer-motion';
import styles from './styles.module.css';
import { Button } from '@mui/material';

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
        <div className={`${styles.imgWrapper}`} id='img-maliek_home'>
            <motion.img 
                src='/images/programmer.png' 
                className={`${styles.ftImg} `} 
                id='home' alt=''  
                initial={{
                    opacity: 0,
                    y:-200,
                }}
                whileInView={{opacity:1,
                    y:0,
                    transition:{
                        duration:1,
                        delay:2.4,
                    },
                }}
                exit={{opacity:0}}
                
            />
        </div>
            {/*  Top Typography Ctn */}
            <motion.div 
            className={`${styles.topHeroCtn} top-hero-ctn right`}
            >
                <motion.h1 
                className={`${styles.header} header right`}
                >
                    I&apos;m <span className={`${styles.myName} my-name`}>Maliek Davis</span>.

                </motion.h1>

                <motion.h3 className={`${styles.subheader} subheader right`}>
                    Much more than just a <span className={`$styles.dynamicText} dynamic-text`}>developer</span>.
                </motion.h3>
            </motion.div>
            

            {/*  Top Typography Ctn */}
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

export default Overview