'use client'
import { firstName, lastName, missionStatement } from '@/library/const'
import React from 'react'
import { AnimatePresence, motion } from "framer-motion";
import ProgrammerScene from '../scenes/ProgrammerScene';
import styles from './home-page.module.css';
import { Button } from '@mui/material';
import OuterSceneWrapper from '../common/OuterSceneWrapper';
import PageWrapper from '../common/PageWrapper';

const ProgrammerHero = () => {
    return (
        <OuterSceneWrapper id='programmer'>


                {/* ThreeJS Scene */}
                <ProgrammerScene />

            {/* Readable Information */}
                <PageWrapper id='programmer'>

            {/* Top Text box */}
                    <motion.div
                    className='text-box'
                    id='home' 
                    >
                        <motion.h3
                        className={`${styles.heroH3}`}
                        >
                            The Developer
                        </motion.h3>
                        <motion.h6 
                        className={`${styles.heroH6}`} 
                        id='programmer'
                        >
                            Programming is art. Code is my medium.
                        </motion.h6>
                    </motion.div>


            {/* Bottom Text Box */}
                    <motion.div className={`${styles.heroP_Ctn}`} id='investments'>

                        <motion.p className={`${styles.heroP}`} id='programmer'>
                            {missionStatement}
                        </motion.p>
                        <motion.div
                        className={`${styles.btnCtn}`} id='programmer'
                        >

                                <Button
                                variant='outlined'
                                className={`learn-more-btn`}
                                id={'home-investment-hero'}
                                href={'/digital-solutions'}
                                >
                                    Learn More
                                </Button>
                                <Button
                                variant='contained'
                                className={`partnership-btn`}
                                id={'home-investment-hero'}
                                href={'/digital-solutions/lets-work'}
                                >
                                    Let&apos;s Work
                                </Button>
                                
                        </motion.div>                        
                    </motion.div>

                </PageWrapper>

        </OuterSceneWrapper>
    )
}

export default ProgrammerHero