'use client'


import React, { RefObject } from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.css';
import { Button, Typography } from '@mui/material';
import MotionPageWrapper from '../../_components/common/MotionPageWrapper';
import { MotionImg } from '@/app/_components/common/framer/MotionImg';
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';
import { HeroProps } from '@/app/_library/types/common';
import ButtonPro from '@/app/_components/common/ButtonPro';
import HeroButtonCtn from '@/app/_components/common/HeroButtonCtn';
import IconButton from '@/app/_components/common/IconButton'
import { MotionDiv } from '@/app/_components/common/framer/MotionDiv';
import { MotionH4 } from '@/app/_components/common/framer/MotionH4';
import { MotionP } from '@/app/_components/common/framer/MotionP';
import { Header } from '@/app/_hide/_components';

const Overview: React.FC<HeroProps> = ({
    ctnRef, scrollTo, id
}) => {

    return (
        <MotionPageWrapper
            id={id}
            ctnRef={ctnRef}
        >

            <MotionDiv className={`${styles.imgWrapper}`} id='img-maliek_home'>
                <MotionImg
                    src='/images/programmer.png'
                    className={`${styles.ftImg} `}
                    id='home' alt=''
                    initial={{
                        opacity: 0,
                        y: -200,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 1,
                            delay: 0.5,
                        },
                    }}
                    exit={{ opacity: 0 }}

                />
            </MotionDiv>


            {/*  Top Typography Ctn */}

            <MotionDiv
                className='hero-wrapper'
            >
                <Header
                size='sm'
                    headerLabel={<Typography variant='h2'
                        className={`right`}
                    >
                        I&apos;m <span className={`my-name`}>Maliek Davis</span>

                    </Typography>}
                    tagLine={<MotionH4
                        className={`right`}
                    >
                        Much More Than Just Another <span className={`dynamic-text`}>Developer</span>
                    </MotionH4>}
                />
            </MotionDiv>

            <MotionDiv className={`btm-hero-ctn-wrapper right`} >

                <MotionP className={``} id='programmer'>
                    Bringing Your Ideas to Life with Innovation and Expertise
                </MotionP>
                <HeroButtonCtn  className=' right-btn-ctn'>
                    <ButtonPro
                        variant='contained'
                        label={`Approach`}
                        color='primary'
                        href={'/im-a-programmer/approach'}
                    />
                    <ButtonPro
                        variant='contained'
                        label={`Portfolio`}
                        color='secondary'
                        href={'/im-a-programmer/portfolio'}
                    />
                    <IconButton
                        label={<ArrowCircleDownRoundedIcon onClick={() => { scrollTo('next') }} />}
                        onClick={() => { scrollTo('next') }}
                    />
                </HeroButtonCtn>
            </MotionDiv>


        </MotionPageWrapper>
    )
}

export default Overview