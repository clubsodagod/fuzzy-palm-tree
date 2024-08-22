import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { InvestmentPageHeroScene } from '../scenes'
import styles from './investments.module.css'
import { Button } from '@mui/material'

const InvestmentPageHero = () => {
    return (
        <section className={`outerSceneWrapper `} id='home'>  
            <AnimatePresence>
                <motion.section className={`three-scene`} id='investment-page'>
                    <InvestmentPageHeroScene />
                </motion.section>
                <div
                className={`${styles.pageWrapper}`}
                id='investment-page'
                >
                    

                    <div
                    className={` ${styles.topTextCtn}`}
                    >
                        <h1 className={` ${styles.investHeader}`}>
                            Investments
                        </h1>
                        <h6 className={`${styles.investSubheader}`}>
                            It&apos;s  more than money. Its&apos;s Life.
                        </h6>
                    </div>


                    <div
                    className={`investment-page-txt-btn-ctn ${styles.txtBtnCtn}`}
                    >
                        
                        <p className={`${styles.heroBtnCtnTxt}`} >

                            This is sample content pertaining to my overall thoughts surrounding investments.
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
                                    Current Listings
                                </Button>
                                <Button
                                variant='contained'
                                className={`partnership-btn`}
                                id={'home-investment-hero'}
                                href={'/investments/partnership'}
                                >
                                    Let&apos;s Chat
                                </Button>
                                
                        </motion.div>  
                    </div>
                    


                </div>                
            </AnimatePresence>        

        </section>
    )
}

export default InvestmentPageHero