/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { bio, bioImg } from '@/library/const';
import { Typography } from '@mui/material';
import { HeroProps } from '@/app/_library/types/common';
import Header from '@/app/_components/common/Header';
import MotionPageWrapper from '@/app/_components/common/MotionPageWrapper';
import ButtonPro from '@/app/_components/common/ButtonPro';
import { MotionDiv } from '@/app/_components/common/framer/MotionDiv';
import { MotionImg } from '@/app/_components/common/framer/MotionImg';
import HeroButtonCtn from '@/app/_components/common/HeroButtonCtn';




const BioHero: React.FC<HeroProps> = ({
    ctnRef,
    id,
    scrollTo,
}) => {

    const [storyTime, setStoryTime] = useState<boolean>(false);
    const [scalingFactor, setScalingFactor] = useState<number>(1)

    function readMoreHandler() {
        // set state of storyTime to opposite
        setStoryTime(!storyTime);
    }

    const variants = {
        storyTime: { opacity: 0.25, scale: 0.75, y: 65 * scalingFactor },
        other: { opacity: 1, scale: 1 },
        clampedText: { opacity: 1, scale: 1 },
        hideClampedText: { opacity: 0, scale: 0 },
        storyTimeText: { opacity: 1, scale: 1 },
        hideStoryTimeText: { opacity: 0, scale: 0 },
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {

            const mainScalingFactor = window && Math.min(Math.max(window?.innerWidth / 480, 0.2), 100);

            if (mainScalingFactor !== scalingFactor) {
                setScalingFactor(mainScalingFactor);
            }
        }

    }, [scalingFactor])
    
    return (
        <MotionPageWrapper
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
                            onClick={() => { scrollTo && scrollTo('about-mission-statement') }}
                        />
                        <ButtonPro
                            color='primary'
                            label={`Core Values`}
                            variant='contained'
                            className={`partnership-btn`}
                            onClick={() => { scrollTo && scrollTo('about-core-values') }}
                        />
                    </HeroButtonCtn>

                </MotionDiv>

            </MotionDiv>
        </MotionPageWrapper>
    )

}

export default BioHero