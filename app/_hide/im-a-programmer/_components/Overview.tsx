'use client'


import React, { RefObject } from 'react';
import { Header, PageWrapper } from '@/app/_hide/_components';
import { motion } from 'framer-motion';
import styles from './styles.module.css';
import { Button, Typography } from '@mui/material';
import { MotionDiv } from '@/app/_hide/_components/framer/MotionDiv';
import MotionPageWrapper from '../../_components/common/MotionPageWrapper';
import { MotionH5 } from '../../_components/framer/MotionH5';
import { MotionImg } from '@/app/_components/common/framer/MotionImg';
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';
import { HeroProps } from '@/app/_library/types/common';
import ButtonPro from '@/app/_components/common/ButtonPro';
import { MotionP } from '../../_components/framer/MotionP';
import HeroButtonCtn from '@/app/_components/common/HeroButtonCtn';
import IconButton from '@/app/_components/common/IconButton'
import { MotionH6 } from '@/app/_components/common/framer/MotionH6';
import { MotionH4 } from '../../_components/framer/MotionH4';

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

                <MotionP className={` right`} id='programmer'>
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