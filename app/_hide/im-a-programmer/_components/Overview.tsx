'use client'


import React, { RefObject } from 'react';
import { Header, PageWrapper } from '@/app/_hide/_components';
import { motion } from 'framer-motion';
import styles from './styles.module.css';
import { Button, Typography } from '@mui/material';
import { MotionDiv } from '@/app/_hide/_components/framer/MotionDiv';

const Overview: React.FC<{
    ctnRef: RefObject<HTMLDivElement>,
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
                            y: -200,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 1,
                                delay: 2.4,
                            },
                        }}
                        exit={{ opacity: 0 }}

                    />
                </div>


                {/*  Top Typography Ctn */}
                <motion.div
                    className={`${styles.topHeroCtn} top-hero-ctn right`}
                >
                    <MotionDiv>
                        <Typography variant='h2'
                            className={`${styles.header} header right`}
                        >
                            I&apos;m <span className={`${styles.myName} my-name`}>Maliek Davis</span>

                        </Typography>
                    </MotionDiv>


                    <MotionDiv>
                        <Typography
                            variant='h6'
                            className={`${styles.subheader} subheader right`}
                        >
                            Much More Than Just Another <span className={`$styles.dynamicText} dynamic-text`}>Developer</span>
                        </Typography>
                    </MotionDiv>


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
                            <Button variant='contained' href={'/im-a-programmer/approach'}>My Approach</Button>
                            <Button variant='outlined' href={'/im-a-programmer/portfolio'}>Featured Solutions</Button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </PageWrapper>
        )
    }

export default Overview