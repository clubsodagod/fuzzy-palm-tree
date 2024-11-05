import React, { RefObject } from 'react'
import styles from './investments.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from '@mui/material'
import OuterSceneWrapper from '../common/OuterSceneWrapper'
import PageWrapper from '../common/PageWrapper'
import { ApproachScene } from '@/app/investments/_components/scenes'

const InvestmentApproach:React.FC<{
    ctnRef?:RefObject<HTMLDivElement>,
}> = ({
    ctnRef,
}) => {
    return (
                <PageWrapper
                id='investments-approach'
                ctnRef={ctnRef}
                >
                    
                    <div
                    className={`${styles.topTextCtn} left`} 
                    id='approach'
                    >
                        <h2 className={`${styles.investHeader} header left`} id='approach'>
                            Investing Approach
                        </h2>
                        <h6 className={`${styles.investSubheader} subheader left`}>
                            Giving velocity to my dollars
                        </h6>                    
                    </div>

                    <div
                    className={`${styles.bottomCtn} left`} 
                    id='approach'
                    >
                        <p className={`${styles.heroBtnCtnTxt} tagline`} id='approach'>
                            Give your money some motion.
                        </p>

                        <motion.div
                        className={`${styles.btnCtn} leftBtn`}
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

    )
}

export default InvestmentApproach