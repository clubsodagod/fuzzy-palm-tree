'use client'



import React, { RefObject, useEffect, useState } from 'react';
import styles from './styles.module.css';
import { Chapter } from '@/library/const';
import MotionPageWrapper from '../../_components/common/MotionPageWrapper';
import { MotionDiv } from '@/app/_components/common/framer/MotionDiv';
import { MotionH4 } from '@/app/_components/common/framer/MotionH4';
import { DynamicSectionProps, HeroProps } from '@/app/_library/types/common';
import HeroButtonCtn from '@/app/_components/common/HeroButtonCtn';
import ButtonPro from '@/app/_components/common/ButtonPro';
import IconButton from '@/app/_components/common/IconButton';
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';



const OverViewTwo: React.FC<DynamicSectionProps> = ({
    chapter,
    ctnRef,
    id,
    scrollTo,
}) => {




    return (
        <MotionPageWrapper
            id={id}
            ctnRef={ctnRef}
        >


            {/*  Top Typography Ctn */}
            <MotionDiv
                className={`${styles.overviewCtn} overview-ctn`}
            >

                <MotionDiv
                    className='blur-wrapper'
                >
                    <MotionH4
                        className={`${styles.storyText} story-text`}
                    >
                        {chapter?.chapter}
                    </MotionH4>
                </MotionDiv>


            </MotionDiv>
                <HeroButtonCtn  className=''>
                    <IconButton
                        label={<ArrowCircleDownRoundedIcon onClick={() => { scrollTo('previous') }} />}
                        onClick={() => { scrollTo('previous') }}
                        down
                    />
                    <ButtonPro
                        variant='outlined'
                        label={`Why Digital Solutions`}
                        color='primary'
                        onClick={() => { scrollTo('programmer-why-digital') }}
                    />
                    <IconButton
                        label={<ArrowCircleDownRoundedIcon onClick={() => { scrollTo('next') }} />}
                        onClick={() => { scrollTo('next') }}
                    />
                </HeroButtonCtn>
        </MotionPageWrapper>
    )
}

export default OverViewTwo