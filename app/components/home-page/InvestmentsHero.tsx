'use client'

import { firstName, lastName, navItems } from '@/library/const'
import React, { useState } from 'react'
import { InvestmentScene } from '../scenes';
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from '@mui/material';
import styles from './home-page.module.css'
import OuterSceneWrapper from '../common/OuterSceneWrapper';
import PageWrapper from '../common/PageWrapper';

const InvestmentsHero = () => {
    const [index, setIndex] = useState<number>(0);


    return (
        
            <OuterSceneWrapper id='investments-hero'>
                    <motion.section className='three-scene' id='investments'>
                        <InvestmentScene />
                    </motion.section>

                    <PageWrapper 
                    id='investments-hero'
                    >
                        

                        <motion.div
                        className='text-box'
                        id='home'
                        >
                            <motion.h3
                            className={`${styles.heroH3}`}
                            id='investments'
                            initial={{
                                opacity: 0,
                                y:25,
                            }}
                            whileInView={{opacity:1,
                                y:0,
                                transition:{
                                    duration:1,
                                    delay:1.6,
                                }
                            }}>
                                The Investor
                            </motion.h3>
                            <motion.h6 className={`${styles.heroH6}`} id='investments'>
                            Building Wealth Together. One Investment at a Time.
                            </motion.h6>
                        </motion.div>


                        <motion.div className={`${styles.heroP_Ctn}`} id='investments'>

                            <motion.p className={`${styles.heroP}`} id='investments'>
                                Partner with <span className='my-name-text' id='investments'>Maliek Davis</span>, to explore the best opportunities in trading, value investing, and real estate for sustainable growth.
                            </motion.p>

                            <motion.div
                            className={`${styles.btnCtn}`}
                            id='home-investment-hero'
                            >

                                    <Button
                                    variant='outlined'
                                    className={`learn-more-btn`}
                                    id={'home-investment-hero'}
                                    href={'/investments'}
                                    >
                                        Learn More
                                    </Button>
                                    <Button
                                    variant='contained'
                                    className={`partnership-btn`}
                                    id={'home-investment-hero'}
                                    href={'/investments/partnership'}
                                    >
                                        Partnership
                                    </Button>
                                    
                            </motion.div>                
                        </motion.div>


                    </PageWrapper>                  
            </OuterSceneWrapper>

    )
}

export default InvestmentsHero