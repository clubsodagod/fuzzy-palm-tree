'use client'
import React, { RefObject } from 'react'
import styles from '../investments.module.css'
import OuterSceneWrapper from '../../common/OuterSceneWrapper'
import PageWrapper from '../../common/PageWrapper'
import { Button } from '@mui/material'
import HeroButtonCtn from '../../common/HeroButtonCtn'

const RealEstatePageHero:React.FC<{
    ctnRef:RefObject<HTMLDivElement>,
}> = ({
    ctnRef,
}) => {   
    return (
            <PageWrapper
            id='real-estate-main'
            ctnRef={ctnRef}
            >

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
                                href={'/investments/real-estate/areas-of-investment/criteria'}
                                >
                                    My Criteria
                                </Button>
                                <Button
                                variant='contained'
                                className={`partnership-btn`}
                                id={'home-investment-hero'}
                                href={'/investments/real-estate/business-plan/investment-goals'}
                                >
                                    See My Goals
                                </Button>                        
                    </HeroButtonCtn>
                </div>
            </PageWrapper>

    )
}

export default RealEstatePageHero