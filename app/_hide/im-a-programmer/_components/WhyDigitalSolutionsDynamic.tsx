import React, { RefObject, useRef } from 'react'
import { PageWrapper } from '@/app/_hide/_components'
import { importantFactors, Point } from '@/library/const'
import { motion } from 'framer-motion'
import styles from './styles.module.css';
import { numberToWord } from '@/utility/functions';
import { DynamicSectionProps } from '@/app/_library/types/common';
import { MotionDiv } from '@/app/_components/common/framer/MotionDiv';
import { MotionH3 } from '@/app/_components/common/framer/MotionH3';
import { MotionH6 } from '@/app/_components/common/framer/MotionH6';
import { Typography } from '@mui/material';
import HeroButtonCtn from '@/app/_components/common/HeroButtonCtn';
import IconButton from '@/app/_components/common/IconButton';
import ButtonPro from '@/app/_components/common/ButtonPro';
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';
import KeyboardDoubleArrowUpRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowUpRounded';
import MotionPageWrapper from '../../_components/common/MotionPageWrapper';

const WhyDigitalSolutionsDynamic: React.FC<DynamicSectionProps> = ({
    factor,
    ctnRef,
    index,
    scrollTo,
    id,
}) => {

    const point = factor?.point;
    const label = factor?.label;

    const alignment = (index && index % 2) === 0 ? 'left' : 'right';
    return (
        <MotionPageWrapper
            id={id}
            ctnRef={ctnRef}
        >


            {/*  Top Typography Ctn */}
            <MotionDiv
                className={`overview-ctn  `}
            >
                <MotionDiv className='blur-wrapper flex flex-col gap-3 text-center'>
                    <Typography
                        variant='h3'
                        className={`${alignment}`}
                    >
                        {label}
                    </Typography>

                    <Typography
                        variant='subtitle1'
                        className={`${alignment}`}
                    >
                        {point}
                    </Typography>
                </MotionDiv>
            </MotionDiv>

            <HeroButtonCtn className=''>
                <IconButton
                    label={<ArrowCircleDownRoundedIcon onClick={() => { scrollTo('previous') }} />}
                    onClick={() => { scrollTo('previous') }}
                    down
                />
                <ButtonPro
                    variant='contained'
                    label={`Overview`}
                    color='primary'
                    onClick={() => { scrollTo('top') }}
                />
                {
                    index === importantFactors.length - 1 ?
                        <IconButton
                            label={<KeyboardDoubleArrowUpRoundedIcon onClick={() => { scrollTo('next') }} />}
                            onClick={() => { scrollTo('next') }}
                        />
                        :
                        <IconButton
                            label={<ArrowCircleDownRoundedIcon onClick={() => { scrollTo('next') }} />}
                            onClick={() => { scrollTo('next') }}
                        />
                }

            </HeroButtonCtn>
        </MotionPageWrapper>
    )
}

export default WhyDigitalSolutionsDynamic