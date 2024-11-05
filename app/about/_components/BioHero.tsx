/* eslint-disable @next/next/no-img-element */
'use client'
import { Header, HeroButtonCtn, OuterSceneWrapper, PageWrapper } from '@/app/_components';
import React, { RefObject, useState } from 'react';
import styles from './styles.module.css';
import { bio, bioImg } from '@/library/const';
import { Button, Typography } from '@mui/material';
import { animate, motion } from 'framer-motion';
import { MotionDiv } from '@/app/_components/framer/MotionDiv';
import ButtonPro from '@/app/_components/common/buttons/ButtonPro';
import { MotionImg } from '@/app/_components/framer/MotionImg';
import { VoidOneParameterFunction } from '@/app/im-a-programmer/_components/DigitalSolutionsHeroMain';


export interface HeroProps {
    ctnRef: RefObject<HTMLDivElement>,
    id: string,
    scrollTo?:VoidOneParameterFunction,
}


const BioHero: React.FC<HeroProps> = ({
    ctnRef,
    id,
    scrollTo,
}) => {

    const [storyTime, setStoryTime] = useState<boolean>(false);

    function readMoreHandler() {
        // set state of storyTime to opposite
        setStoryTime(!storyTime);
    }


    const variants = {
        storyTime: { opacity: 0.25, scale: 0.75, y: 50 },
        other: { opacity: 1, scale: 1 },
        clampedText: { opacity: 1, scale: 1 },
        hideClampedText: { opacity: 0, scale: 0 },
        storyTimeText: { opacity: 1, scale: 1 },
        hideStoryTimeText: { opacity: 0, scale: 0 },
    }


    return (
        <PageWrapper
            ctnRef={ctnRef}
            id={id}
        >
            <Header
                headerLabel="About"
                tagLine='Get to Know Me'
                size={storyTime ? 'md' : 'lg'}
            />
            <div style={{ color: 'whitesmoke', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                <div
                    className={`${styles.bioFlexCtn}`}
                >

                    <div
                        className={`${styles.bioImgWrapper}`}
                    >

                        <MotionImg
                            className={`${styles.bioImgMain}`} src={bioImg} alt='image of me'
                            variants={variants}
                            animate={storyTime ? 'storyTime' : 'other'}
                        />
                    </div>

                    {
                        storyTime &&
                        <MotionDiv
                            className={`${styles.storyTimeTextBox}`}
                            variants={variants}
                            animate={storyTime ? 'storyTimeText' : 'hideStoryTimeText'}
                        >
                            <Typography variant='body2'>
                                {bio}
                            </Typography>
                        </MotionDiv>
                    }

                </div>




            </div>

            <MotionDiv
                className='flex flex-col gap-1'
            >

                <MotionDiv
                    className={`${styles.bioTextBox} `}
                    variants={variants}
                    animate={!storyTime ? 'clampedText' : 'hideClampedText'}
                >
                    <Typography variant='subtitle2' className={`${styles.bioTextt}`}>
                        {bio}
                    </Typography>
                </MotionDiv>



                <MotionDiv
                    className='flex flex-col gap-3'
                >
                    <HeroButtonCtn>
                        <ButtonPro
                            onClick={() => readMoreHandler()}
                            label={!storyTime ? 'Read More' : 'Close'}
                            color='secondary'
                            variant='contained'
                            className={`learn-more-btn`}
                            id={'home-investment-hero'}
                        />
                        <ButtonPro
                            label={`My Mission`}
                            size='small'
                            variant='outlined'
                            color='secondary'
                            className={`learn-more-btn`}
                            onClick={()=>{scrollTo && scrollTo('about-mission-statement')}}
                        />
                        <ButtonPro
                            color='primary'
                            label={`Core Values`}
                            variant='contained'
                            className={`partnership-btn`}
                            onClick={()=>{scrollTo && scrollTo('about-core-values')}}
                        />
                    </HeroButtonCtn>

                </MotionDiv>

            </MotionDiv>
        </PageWrapper>
    )
}

export default BioHero