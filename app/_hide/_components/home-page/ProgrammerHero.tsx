'use client'
import { firstName, lastName, missionStatement } from '@/library/const'
import React, { RefObject } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import ProgrammerScene from '../scenes/ProgrammerScene';
import styles from './home-page.module.css';
import { Button } from '@mui/material';
import OuterSceneWrapper from '../common/OuterSceneWrapper';
import PageWrapper from '../common/PageWrapper';
import Header from '../common/Header';

const ProgrammerHero: React.FC<{
    ctnRef: RefObject<HTMLDivElement>,
}> = ({
    ctnRef,
}) => {

        return (
            <PageWrapper
                ctnRef={ctnRef}
                id='home-programmer' key={'something different'}>

                <Header
                    headerLabel='The Developer'
                    tagLine='Programming is art. Code is my medium.'
                    size='md'
                    right={true}
                />

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
                            href={'/im-a-programmer'}
                        >
                            Learn More
                        </Button>
                        <Button
                            variant='contained'
                            className={`partnership-btn`}
                            id={'home-investment-hero'}
                            href={'/im-a-programmer/lets-work'}
                        >
                            Let&apos;s Work
                        </Button>

                    </motion.div>
                </motion.div>

            </PageWrapper>
        )
    }

export default ProgrammerHero