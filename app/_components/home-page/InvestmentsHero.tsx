'use client'

import { firstName, lastName, navItems } from '@/library/const'
import React, { RefObject, useState } from 'react'
import { InvestmentScene } from '../scenes';
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from '@mui/material';
import styles from './home-page.module.css'
import OuterSceneWrapper from '../common/OuterSceneWrapper';
import PageWrapper from '../common/PageWrapper';
import Header from '../common/Header';

const InvestmentsHero: React.FC<{
    ctnRef: RefObject<HTMLDivElement>,
}> = ({
    ctnRef,
}) => {

        const [index, setIndex] = useState<number>(0);


        return (
            <PageWrapper
                ctnRef={ctnRef}
                id='home-investment'
            >


                <Header
                    headerLabel='The Investor'
                    tagLine='Building Wealth Together. One Investment at a Time.'
                    size='md'
                />


                <motion.div className={`${styles.heroP_Ctn} left`} id='investments'>

                    <motion.p className={`${styles.heroP} left`} id='investments'>
                        Partner with <span className='my-name-text' id='investments'>Maliek Davis</span>, to explore the best opportunities in trading, value investing, and real estate for sustainable growth.
                    </motion.p>

                    <motion.div
                        className={`${styles.btnCtn} leftBtn`}
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
                            href={'/investments/real-estate/partnership'}
                        >
                            Partnership
                        </Button>

                    </motion.div>
                </motion.div>


            </PageWrapper>
        )
    }

export default InvestmentsHero