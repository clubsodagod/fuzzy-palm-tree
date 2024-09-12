'use client'

import { motion } from 'framer-motion'
import React, { RefObject } from 'react'
import styles from './investments.module.css';
import { Button } from '@mui/material';
import PageWrapper from '../common/PageWrapper';

const InvestmentPageHero:React.FC<{
    ctnRef?:RefObject<HTMLDivElement>,
}> = ({
    ctnRef,
}) => {
    return (
        <PageWrapper
        ctnRef={ctnRef}
        id='investments-main'
        >
            

            <div
            className={` ${styles.topTextCtn} right`}
            >
                <h1 className={` ${styles.investHeader} header`}>
                    Investments
                </h1>
                <h6 className={`${styles.investSubheader} subheader right`}>
                    It&apos;s  more than money. It&apos;s Life.
                </h6>
            </div>


            <div
            className={`investment-page-txt-btn-ctn ${styles.txtBtnCtn} right`}
            >
                
                <p className={`${styles.heroBtnCtnTxt} right`} >

                    This is sample content pertaining to my overall thoughts surrounding investments.
                </p>

                <motion.div
                className={`${styles.btnCtn} rightBtn`}
                id='home-investment-hero'
                >

                        <Button
                        variant='outlined'
                        className={`learn-more-btn`}
                        id={'home-investment-hero'}
                        href={'/investments/real-estate/current-listings'}
                        >
                            Current Listings
                        </Button>
                        <Button
                        variant='contained'
                        className={`partnership-btn`}
                        id={'home-investment-hero'}
                        href={'/investments/real-estate/partnership'}
                        >
                            Let&apos;s Chat
                        </Button>
                        
                </motion.div>  
            </div>
            


        </PageWrapper>
    )
}

export default InvestmentPageHero