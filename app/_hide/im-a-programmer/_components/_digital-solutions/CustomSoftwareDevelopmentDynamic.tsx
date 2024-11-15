'use client'
import React, { RefObject, useEffect, useState } from 'react';
import { ExtendedPointUseCase, Point } from '@/library/const';
import { PageWrapper } from '@/app/_hide/_components';
import { numberToWord } from '@/utility/functions';
import { motion } from 'framer-motion';
import styles from '../styles.module.css';
import ButtonPro from '@/app/_hide/_components/common/buttons/ButtonPro';
import { MotionDiv } from '@/app/_hide/_components/framer/MotionDiv';
import { MotionDivProps } from '@/app/_hide/_components/common/ScrollableItemCtn';
import { VoidOneParameterFunction, VoidTwoParameterFunction } from '../DigitalSolutionsHeroMain';
import KeyboardDoubleArrowUpRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowUpRounded';
import { Divider } from '@mui/material';
import { MotionImg } from '@/app/_hide/_components/framer/MotionImg';
import { useScreenContext } from '@/app/_hide/_context/sub-context/ScreenContext';


interface CustomSoftwareDevelopmentDynamicProps extends MotionDivProps {
    ctnRef: RefObject<HTMLDivElement>;
    scrollTo: VoidOneParameterFunction;
    goToPage: VoidTwoParameterFunction;
    factor: ExtendedPointUseCase;
    left: string;
    index: number;
}


const CustomSoftwareDevelopmentDynamic: React.FC<CustomSoftwareDevelopmentDynamicProps> = ({
    factor: {
        label,
        point,
        useCase,
        photo,
    },
    left,
    ctnRef,
    index,
    scrollTo,
    goToPage,
}) => {

    const {
        currentBreakpoint,
    } = useScreenContext()

    const orientation = (['sm', 'md', 'lg']).includes(currentBreakpoint) ? "horizontal" : "vertical"

    const [id, setId] = useState<string>(`custom-software-dynamic-${numberToWord(index)}`);
    const [animationComplete, setAnimationComplete] = useState(false);

    useEffect(() => {

        setId(id)
    }, [id]);

    return (
        <PageWrapper
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
                            {point}
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
                            <MotionImg src={photo} className={`${styles.dynamicImg}`} />
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
                        color='primary'
                        onClick={() => { scrollTo("top") }}
                    />

                    <ButtonPro
                        variant='contained'
                        label="Previous"
                        color='primary'
                        onClick={() => { scrollTo('previous') }}
                    />

                    <ButtonPro
                        variant='contained'
                        label='Next'
                        color='secondary'
                        onClick={() => { scrollTo('next') }}
                    />

                </MotionDiv>
            </div>


        </PageWrapper>

    )
}

export default CustomSoftwareDevelopmentDynamic