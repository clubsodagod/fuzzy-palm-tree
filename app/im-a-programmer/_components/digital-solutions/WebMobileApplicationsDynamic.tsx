import { PageWrapper } from '@/app/_hide/_components';
import { numberToWord } from '@/utility/functions';
import { Divider } from '@mui/material';
import React, { useState } from 'react';
import styles from '../styles.module.css'
import { MotionDiv } from '@/app/_hide/_components/framer/MotionDiv';
import { MotionH4 } from '@/app/_hide/_components/framer/MotionH4';
import { MotionImg } from '@/app/_hide/_components/framer/MotionImg';
import KeyboardDoubleArrowUpRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowUpRounded';
import { DynamicSectionProps } from '@/app/_library/types/common';
import { useAppContext } from '@/app/_context/AppContext';
import MotionPageWrapper from '@/app/_hide/_components/common/MotionPageWrapper';
import ButtonPro from '@/app/_components/common/ButtonPro';
import HeroButtonCtn from '@/app/_components/common/HeroButtonCtn';








const WebMobileApplicationsDynamic: React.FC<DynamicSectionProps> = ({
    exFactor,
    left,
    ctnRef,
    index,
    scrollTo,
}) => {


    const {
        screen: { currentBreakpoint, }
    } = useAppContext()

    const orientation = (['sm', 'md', 'lg']).includes(currentBreakpoint) ? "horizontal" : "vertical"

    return (
        <MotionPageWrapper
            ctnRef={ctnRef}
            id={`web-mobile-application-dynamic-${numberToWord(index ? index : 0)}`}
        >


            <MotionDiv
                className={`${styles.heroWrapper}`}
            >
                {/*  Top Typography Ctn */}
                <MotionDiv
                    className={`${styles.overviewCtn} overview-ctn`}
                >

                    <MotionDiv
                        className={`${styles.overviewFlexCtn} `}
                    >
                        <MotionDiv
                            className='blur-wrapper'
                            initial={{ opacity: 0, x: -250 }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: { duration: 2 }
                            }}
                        >
                            <MotionH4
                                initial={{ opacity: 0, x: -250 }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    transition: { duration: 2.25 }
                                }}
                                className={`${styles.storyText} story-text`}
                            >
                                {exFactor?.point}
                            </MotionH4>
                        </MotionDiv>


                        <MotionDiv>
                            <Divider orientation={orientation} variant="middle" flexItem className={`xl:h-[50vh]`} />
                        </MotionDiv>

                        <MotionDiv
                            initial={{ opacity: 0, x: 250 }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: { duration: 2 }
                            }}
                            className={`${styles.dynamicImgWrapper}`}
                        >
                            <MotionDiv
                                className='blur-wrapper'
                                initial={{ opacity: 0, x: 250 }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    transition: { duration: 2.25 }
                                }}
                            >
                                <MotionImg src={exFactor?.photo} className={`${styles.dynamicImg}`} />
                            </MotionDiv>
                        </MotionDiv>

                    </MotionDiv>
                </MotionDiv>
            </MotionDiv>

            <HeroButtonCtn>

                <ButtonPro
                    variant='outlined'
                    label={<KeyboardDoubleArrowUpRoundedIcon />}
                    color='secondary'
                    onClick={() => { scrollTo("top") }}
                />

                <ButtonPro
                    variant='outlined'
                    label="Previous"
                    color='primary'
                    onClick={() => { scrollTo('previous') }}
                />

                <ButtonPro
                    variant='outlined'
                    label='Next'
                    color='secondary'
                    onClick={() => { scrollTo('next') }}
                />

            </HeroButtonCtn>


        </MotionPageWrapper>


    )
}

export default WebMobileApplicationsDynamic