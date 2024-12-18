'use client'
import { MotionDiv } from '@/app/_components/common/framer/MotionDiv'
import { MotionImg } from '@/app/_components/common/framer/MotionImg'
import Header from '@/app/_components/common/Header'
import MotionPageWrapper from '@/app/_components/common/SectionWrapper'
import { HeroProps } from '@/app/_library/types/common'
import React from 'react'
import styles from './styles.module.css'
import HeroButtonCtn from '@/app/_components/common/HeroButtonCtn'
import ButtonPro from '../../_components/common/ButtonPro'
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';
import IconButton from '@/app/_components/common/IconButton'

const MainHomeHero: React.FC<HeroProps> = ({
    ctnRef,
    scrollTo,
    ...props
}) => {
    return (
        <MotionPageWrapper
            ctnRef={ctnRef}
            {...props}
        >
            <MotionDiv
                className='hero-wrapper'
            >
                <Header
                    headerLabel={'Maliek Davis'}
                    tagLine='Where Innovation Meets Opportunity'
                />
            </MotionDiv>


            <MotionDiv>
                <HeroButtonCtn >
                    <ButtonPro
                        variant='contained'
                        label={`I'm A Programmer`}
                        color='primary'
                        href='/im-a-programmer'
                            className={`learn-more-btn`}
                            id={'home-investment-hero'}
                    />
                    <ButtonPro
                        variant='contained'
                        label={`About`}
                        color='secondary'
                        href='/about'
                            className={`learn-more-btn`}
                            id={'home-investment-hero'}
                    />
                    <IconButton
                        label={<ArrowCircleDownRoundedIcon onClick={() => { scrollTo('next') }} />}
                    />
                </HeroButtonCtn>
            </MotionDiv>


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

        </MotionPageWrapper>
    )
}

export default MainHomeHero