import { PageWrapper } from '@/app/_components';
import { ExtendedPointUseCase, Point } from '@/library/const';
import { numberToWord } from '@/utility/functions';
import { Button, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import React, { RefObject, useState } from 'react';
import styles from '../styles.module.css'
import { MotionDivProps } from '@/app/_components/common/ScrollableItemCtn';
import { VoidOneParameterFunction, VoidTwoParameterFunction } from '../DigitalSolutionsHeroMain';
import { MotionDiv } from '@/app/_components/framer/MotionDiv';
import ButtonPro from '@/app/_components/common/buttons/ButtonPro';
import { MotionH4 } from '@/app/_components/framer/MotionH4';
import { MotionImg } from '@/app/_components/framer/MotionImg';
import { useScreenContext } from '@/app/_context/sub-context/ScreenContext';
import KeyboardDoubleArrowUpRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowUpRounded';






interface WebMobileApplicationsDynamicProps extends MotionDivProps {
    ctnRef: RefObject<HTMLDivElement>;
    scrollTo: VoidOneParameterFunction;
    goToPage: VoidTwoParameterFunction;
    factor: ExtendedPointUseCase;
    left: string;
    index: number;
}


const WebMobileApplicationsDynamic: React.FC<WebMobileApplicationsDynamicProps> = ({
    factor: {
        label,
        point,
        useCase, 
        photo
    },
    left,
    ctnRef,
    index,
    scrollTo, goToPage
}) => {


    const {
        currentBreakpoint,
    } = useScreenContext()

    const orientation = (['sm', 'md', 'lg']).includes(currentBreakpoint) ? "horizontal" : "vertical"
    const [animationComplete, setAnimationComplete] = useState(false);

    return (
        <PageWrapper
            ctnRef={ctnRef}
            id={`web-mobile-application-dynamic-${numberToWord(index)}`}
        >


            <MotionDiv
                className={`${styles.heroWrapper}`}
            >
                {/*  Top Typography Ctn */}
                <motion.div
                    className={`${styles.overviewCtn} overview-ctn`}
                >

                    <MotionDiv
                        className={`${styles.overviewFlexCtn} `}
                    >
                        <MotionH4
                            initial={{ opacity: 0, x: -250 }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: { duration: 2 }
                            }}
                            className={`${styles.storyText} story-text`}
                        >
                            {point}
                        </MotionH4>

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
                </motion.div>
            </MotionDiv>

            <div
                className='flex flex-col justify-center items-center'
            >
                <MotionDiv className={`${styles.btnCtn} btn-ctn justify-center flex gap-3`}>

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

export default WebMobileApplicationsDynamic