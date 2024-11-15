import React, { RefObject } from 'react'
import styles from './investments.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from '@mui/material'
import PageWrapper from '../common/PageWrapper'
import OuterSceneWrapper from '../common/OuterSceneWrapper'
import { InvestmentAreaScene } from '@/app/_hide/investments/_components/scenes'

const InvestmentAreas:React.FC<{
    ctnRef?:RefObject<HTMLDivElement>,
}> = ({
    ctnRef,
}) => {
    
    return (
                <PageWrapper
                id='investments-area'
                ctnRef={ctnRef}
                >
                    
                    <div
                    className={`${styles.topTextCtn} right`} 
                    id='credentials'
                    >
                        <h2 className={`${styles.investHeader} header right`} id='credentials'>
                            Areas of Investment
                        </h2>
                        <h5 className={`${styles.investSubheader} subheader right`}>
                            Balancing Risk and Reward
                        </h5>                    
                    </div>

                    <div
                    className={`${styles.bottomCtn} right`} 
                    id='credentials'
                    >
                        <p className={`${styles.heroBtnCtnTxt}`} id='credentials'>
                            Creating Value, Building Communities: Focused Multifamily Investments in Michigan.
                        </p>

                        <motion.div
                        className={`${styles.btnCtn} rightBtn`}
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
    )
}

export default InvestmentAreas