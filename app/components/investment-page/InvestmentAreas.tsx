import React from 'react'
import styles from './investments.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from '@mui/material'
import PageWrapper from '../common/PageWrapper'
import OuterSceneWrapper from '../common/OuterSceneWrapper'
import { InvestmentAreaScene } from '@/app/investments/_components/scenes'

const InvestmentAreas = () => {
    return (
        <OuterSceneWrapper id='credentials'>
                    <motion.section className={`three-scene`} id='investment-page'>
                        <InvestmentAreaScene />
                    </motion.section>
                <PageWrapper
                id='credentials'
                >
                    
                    <div
                    className={`${styles.topTextCtn}`} 
                    id='credentials'
                    >
                        <h2 className={`${styles.investHeader}`} id='credentials'>
                            Areas of Investment
                        </h2>
                        <h5 className={`${styles.investSubheader}`}>
                            Balancing Risk and Reward.
                        </h5>                    
                    </div>

                    <div
                    className={`${styles.bottomCtn}`} 
                    id='credentials'
                    >
                        <p className={`${styles.heroBtnCtnTxt}`} id='credentials'>
                            Creating Value, Building Communities: Focused Multifamily Investments in Michigan.
                        </p>

                        <motion.div
                        className={`${styles.btnCtn}`}
                        id='home-investment-hero'
                        >

                                <Button
                                variant='outlined'
                                className={`learn-more-btn`}
                                id={'home-investment-hero'}
                                href={'/investments/real-estate/areas-of-investment/criteria'}
                                >
                                    Criteria
                                </Button>
                                <Button
                                variant='contained'
                                className={`partnership-btn`}
                                id={'home-investment-hero'}
                                href={'/investments/real-estate/business-plan/investment-goals'}
                                >
                                    Investment Goals
                                </Button>
                                
                        </motion.div> 
                    </div>

                </PageWrapper>                 

        </OuterSceneWrapper>
    )
}

export default InvestmentAreas