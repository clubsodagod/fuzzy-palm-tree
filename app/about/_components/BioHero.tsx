/* eslint-disable @next/next/no-img-element */
'use client'
import { HeroButtonCtn, OuterSceneWrapper, PageWrapper } from '@/app/components';
import React from 'react';
import styles from './styles.module.css';
import { bio, bioImg } from '@/library/const';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';



const BioHero = () => {


    return (
        <OuterSceneWrapper
        id='about'
        >
            <PageWrapper>
                <div style={{color:'whitesmoke', display:'flex', flexDirection:'column', justifyContent:'center'}}>

                    <div
                    className={`${styles.bioFlexCtn}`}
                    >
                        
                        <div
                        className={`${styles.bioImgWrapper}`}
                        >

                            <img className={`${styles.bioImgMain}`} src={bioImg} alt='image of me'/>
                        </div>
                        <div className={`${styles.bioTxtCtn}`}>
                            <h1>
                                About <span className="my-name-text" id="bio">Maliek</span> 
                            </h1>  
                            <h5>
                                The Scientist, The Developer, The Artist.
                            </h5>
                            <p className={`${styles.bioBioTxt}`}>
                                {bio}
                            </p>
                        </div>

                    </div>

                    <HeroButtonCtn>
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
                    </HeroButtonCtn>

                </div>
            </PageWrapper>
        </OuterSceneWrapper>
    )
}

export default BioHero