'use client'
import { firstName, lastName, missionStatement } from '@/library/const'
import React, { RefObject } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import ProgrammerScene from '../scenes/ProgrammerScene';
import styles from './home-page.module.css';
import { Button } from '@mui/material';
import OuterSceneWrapper from '../common/OuterSceneWrapper';
import PageWrapper from '../common/PageWrapper';

const ProgrammerHero:React.FC<{
    ctnRef:RefObject<HTMLDivElement>,
}> = ({
    ctnRef,
}) => {

    return (
                <PageWrapper 
                ctnRef={ctnRef}
                id='home-programmer' key={'something different'}>

            {/* Top Text box */}
                    <motion.div
                    className={`${styles.topTextCtn} right`}
                    id='home' 
                    key={2}
                    >
                        <motion.h3
                        className={`${styles.heroH3} right`}
                        >
                            The Developer
                        </motion.h3>
                        <motion.h6 
                        className={`${styles.heroH6} right`} 
                        id='programmer'
                        >
                            Programming is art. Code is my medium.
                        </motion.h6>
                    </motion.div>


            {/* Bottom Text Box */}
                    <motion.div className={`${styles.heroP_Ctn} right`} id='investments'>

                        <motion.p className={`${styles.heroP} right`} id='programmer'>
                            {missionStatement}
                        </motion.p>
                        <motion.div
                        className={`${styles.btnCtn} rightBtn`} id='programmer'
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
    )
}

export default ProgrammerHero