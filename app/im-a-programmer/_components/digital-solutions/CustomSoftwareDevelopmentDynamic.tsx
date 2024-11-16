'use client'
import React, { useState } from 'react';
import { numberToWord } from '@/utility/functions';
import { motion } from 'framer-motion';
import styles from '../styles.module.css';
import { MotionDiv } from '@/app/_hide/_components/framer/MotionDiv';
import KeyboardDoubleArrowUpRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowUpRounded';
import { Divider } from '@mui/material';
import { MotionImg } from '@/app/_hide/_components/framer/MotionImg';
import { useAppContext } from '@/app/_context/AppContext';
import { DynamicSectionProps } from '@/app/_library/types/common';
import MotionPageWrapper from '@/app/_hide/_components/common/MotionPageWrapper';
import ButtonPro from '@/app/_components/common/ButtonPro';




const CustomSoftwareDevelopmentDynamic: React.FC<DynamicSectionProps> = ({
    exFactor,
    ctnRef,
    index,
    scrollTo,
}) => {
    console.log(exFactor);
    
    const {
        screen:{currentBreakpoint},
    } = useAppContext()

    const orientation = (['sm', 'md', 'lg']).includes(currentBreakpoint) ? "horizontal" : "vertical"

    const [id, setId] = useState<string>(`custom-software-dynamic-${numberToWord(index ? index : 0)}`);


    return (
        <MotionPageWrapper
            ctnRef={ctnRef}
            id={id}
        >

            {/*  Top Typography Ctn */}
            <motion.div
                className={`${styles.heroWrapper} `}
            >

                <MotionDiv
                    className={`${styles.overviewCtn}`}
                >
                    <MotionDiv
                        className={`${styles.overviewFlexCtn} flex-row-reverse`}
                    >

                        <motion.h4
                            initial={{ opacity: 0, x: -250 }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: { duration: 2 }
                            }}
                            className={`${styles.storyText} story-text`}
                        >
                            {exFactor?.point}
                        </motion.h4>

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
                            <MotionImg src={exFactor?.photo} className={`${styles.dynamicImg}`} />
                        </MotionDiv>
                    </MotionDiv>

                </MotionDiv>

            </motion.div>

            <div
                className='flex flex-col justify-center items-center'
            >
                <MotionDiv className={`${styles.btnCtn} btn-ctn  flex gap-3`}>

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

                </MotionDiv>
            </div>


        </MotionPageWrapper>

    )
}

export default CustomSoftwareDevelopmentDynamic