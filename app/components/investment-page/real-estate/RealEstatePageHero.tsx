'use client'
import React from 'react'
import styles from '../investments.module.css'
import OuterSceneWrapper from '../../common/OuterSceneWrapper'
import PageWrapper from '../../common/PageWrapper'
import { Button } from '@mui/material'
import HeroButtonCtn from '../../common/HeroButtonCtn'

const RealEstatePageHero = () => {
    return (
        <OuterSceneWrapper id='real-estate-page'>

            <PageWrapper>

                <div
                className={` ${styles.topTextCtn}`}
                >
                    <h1 className={` ${styles.investHeader}`}>
                        Multifamily Real Estate Investing
                    </h1>
                    <h6>
                        With the thought of tomorrow in mind, investing in communities today.
                    </h6>
                </div>


                <div
                className={`investment-page-txt-btn-ctn ${styles.txtBtnCtn}`}
                >
                    
                    <p className={`${styles.heroBtnCtnTxt}`} >

                        Options tailored to your level risk tolerance. Real Returns.
                    </p>
                    <HeroButtonCtn>
                                <Button
                                variant='outlined'
                                className={`learn-more-btn`}
                                id={'home-investment-hero'}
                                href={'/investments'}
                                >
                                    My Criteria
                                </Button>
                                <Button
                                variant='contained'
                                className={`partnership-btn`}
                                id={'home-investment-hero'}
                                href={'/investments/partnership'}
                                >
                                    See My Goals
                                </Button>                        
                    </HeroButtonCtn>
                </div>
            </PageWrapper>
        </OuterSceneWrapper>

    )
}

export default RealEstatePageHero