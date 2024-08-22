import React from 'react'
import styles from './investments.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from '@mui/material'

const InvestmentAreas = () => {
    return (
        <section className={`outerSceneWrapper `} id='home'>  
            <AnimatePresence>
                <div
                className={`${styles.pageWrapper}`}
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
                                href={'/investments'}
                                >
                                    My Mission
                                </Button>
                                <Button
                                variant='contained'
                                className={`partnership-btn`}
                                id={'home-investment-hero'}
                                href={'/investments/partnership'}
                                >
                                    Core Values
                                </Button>
                                
                        </motion.div> 
                    </div>

                </div>                
            </AnimatePresence>        

        </section>
    )
}

export default InvestmentAreas