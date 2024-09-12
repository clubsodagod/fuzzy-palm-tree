'use client'
import React, { RefObject, useRef } from 'react';
import styles from '../investments.module.css';
import PageWrapper from '../../common/PageWrapper';
import { Button } from '@mui/material';
import HeroButtonCtn from '../../common/HeroButtonCtn';
import { motion } from 'framer-motion';

const RealEstateAvailable:React.FC<{
    ctnRef:RefObject<HTMLDivElement>,
}> = ({
    ctnRef,
}) => {   

    const containerRef = useRef<HTMLDivElement>(null);
    
    return (
                <PageWrapper
                id='real-estate-available'
                ctnRef={ctnRef}
                >
                    

                    <div
                    className={` ${styles.topTextCtn}`}
                    >
                        <h1 className={` ${styles.investHeader}`}>
                            Assets for Sale
                        </h1>
                        <h6>
                            Take a look. There&apos;s returns in your future.
                        </h6>
                    </div>


                    <div
                    className={`${styles.txtBtnCtn}`}
                    >
                        
                        <p className={`${styles.heroBtnCtnTxt}`} >

                            
                        </p>
                        <HeroButtonCtn>
                                    <Button
                                    variant='outlined'
                                    className={`learn-more-btn`}
                                    id={'home-investment-hero'}
                                    href={'/investments'}
                                    >
                                        Make an Offer
                                    </Button>
                                    <Button
                                    variant='contained'
                                    className={`partnership-btn`}
                                    id={'home-investment-hero'}
                                    href={'/investments/partnership'}
                                    >
                                        More Information
                                    </Button>                        
                        </HeroButtonCtn>
                    </div>
                    


                </PageWrapper>
    )
}

export default RealEstateAvailable