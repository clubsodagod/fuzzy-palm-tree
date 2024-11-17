import { PageWrapper } from '@/app/_hide/_components'
import { numberToWord } from '@/utility/functions'
import { motion } from 'framer-motion'
import React, { useState } from 'react';
import styles from '../styles.module.css';
import KeyboardDoubleArrowUpRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowUpRounded';
import { MotionH4 } from '@/app/_hide/_components/framer/MotionH4';
import { MotionImg } from '@/app/_hide/_components/framer/MotionImg';
import { Divider } from '@mui/material';
import { DynamicSectionProps } from '@/app/_library/types/common';
import { useAppContext } from '@/app/_context/AppContext';
import MotionPageWrapper from '@/app/_hide/_components/common/MotionPageWrapper';
import { MotionDiv } from '@/app/_components/common/framer/MotionDiv';
import ButtonPro from '@/app/_components/common/ButtonPro';
import HeroButtonCtn from '@/app/_components/common/HeroButtonCtn';







const DigitalTransformationConsultingDynamic: React.FC<DynamicSectionProps> = ({
    exFactor,
    left,
    ctnRef,
    index,
    scrollTo,
}) => {


    const {
        screen: { currentBreakpoint, }
    } = useAppContext()

    const orientation = (['sm', 'md', 'lg']).includes(currentBreakpoint) ? "horizontal" : "vertical";

    return (
        <MotionPageWrapper
            ctnRef={ctnRef}
            id={`digital-transformation-dynamic-${numberToWord(index ? index : 0)}`}
        >


            <MotionDiv className={`${styles.heroWrapper}`}>
                {/*  Top Typography Ctn */}
                <MotionDiv
                    className={`${styles.overviewCtn} overview-ctn`}
                >


                    <MotionDiv
                        className={`${styles.overviewFlexCtn} `}
                    >


                        <MotionDiv
                            initial={{ opacity: 0, x: -250 }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: { duration: 2 }
                            }}
                            className={`${styles.dynamicImgWrapper}`}
                        >
                            <MotionDiv className='blur-wrapper'
                                initial={{ opacity: 0, x: -250 }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    transition: { duration: 2.25 }
                                }}
                            >
                                <MotionImg src={exFactor?.photo} className={`${styles.dynamicImg}`} />

                            </MotionDiv></MotionDiv>


                        <MotionDiv>
                            <Divider orientation={orientation} variant="middle" flexItem className={`xl:h-[50vh]`} />
                        </MotionDiv>

                        <MotionDiv className='blur-wrapper'
                            initial={{ opacity: 0, x: 250 }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: { duration: 2 }
                            }}
                        >
                            <MotionH4
                                initial={{ opacity: 0, x: 250 }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    transition: { duration: 2.5 }
                                }}
                                className={`${styles.storyText} story-text`}
                            >
                                {exFactor?.point}
                            </MotionH4>
                        </MotionDiv>


                    </MotionDiv>


                </MotionDiv>
            </MotionDiv>


            <HeroButtonCtn >

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
                    label={index != 2 ? "Next" : "To Top"}
                    color='secondary'
                    onClick={index != 2 ? () => { scrollTo('next') } : () => { scrollTo('digital-solutions-main') }}
                />

            </HeroButtonCtn>




        </MotionPageWrapper>
    )
}

export default DigitalTransformationConsultingDynamic