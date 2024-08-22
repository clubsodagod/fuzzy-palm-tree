import React from 'react'
import styles from './investments.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from '@mui/material'

const InvestmentApproach = () => {
    return (
        <section className={`outerSceneWrapper`} id='investment-page'>  
            <AnimatePresence>
                <div
                className={`page-wrapper ${styles.pageWrapper}`}
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
                                href={'/investments'}
                                >
                                    Business Plan
                                </Button>
                                <Button
                                variant='contained'
                                className={`partnership-btn`}
                                id={'home-investment-hero'}
                                href={'/investments/partnership'}
                                >
                                    Financial Modeling
                                </Button>
                                
                        </motion.div>  
                    </div>

                </div>                
            </AnimatePresence>        

        </section>
    )
}

export default InvestmentApproach