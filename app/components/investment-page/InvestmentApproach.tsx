import React from 'react'
import styles from './investments.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from '@mui/material'
import OuterSceneWrapper from '../common/OuterSceneWrapper'
import PageWrapper from '../common/PageWrapper'
import { ApproachScene } from '@/app/investments/_components/scenes'

const InvestmentApproach = () => {
    return (
        <OuterSceneWrapper id='investment-page'>
                <motion.section className={`three-scene`} id='investment-page'>
                    <ApproachScene />
                </motion.section>  
                <PageWrapper
                id='approach'
                >
                    
                    <div
                    className={`${styles.topTextCtn}`} 
                    id='approach'
                    >
                        <h2 className={`${styles.investHeader}`} id='approach'>
                            Investing Approach
                        </h2>
                        <h6 className={`${styles.investSubheader}`}>
                            Giving velocity to my dollars.
                        </h6>                    
                    </div>

                    <div
                    className={`${styles.bottomCtn}`} 
                    id='approach'
                    >
                        <p className={`${styles.heroBtnCtnTxt}`} id='approach'>
                            Give your money some motion.
                        </p>

                        <motion.div
                        className={`${styles.btnCtn}`}
                        id='home-investment-hero'
                        >

                                <Button
                                variant='outlined'
                                className={`learn-more-btn`}
                                id={'home-investment-hero'}
                                href={'/investments/real-estate/business-plan'}
                                >
                                    Business Plan
                                </Button>
                                <Button
                                variant='contained'
                                className={`partnership-btn`}
                                id={'home-investment-hero'}
                                href={'/investments/real-estate/approach'}
                                >
                                    Financial Modeling
                                </Button>
                                
                        </motion.div>  
                    </div>

                </PageWrapper>                 

        </OuterSceneWrapper>
    )
}

export default InvestmentApproach