import { PageWrapper } from '@/app/_hide/_components'
import { numberToWord } from '@/utility/functions'
import React, { useState } from 'react';
import styles from '../styles.module.css';
import { MotionDiv } from '@/app/_hide/_components/framer/MotionDiv';
import { MotionH4 } from '@/app/_hide/_components/framer/MotionH4';
import { MotionImg } from '@/app/_hide/_components/framer/MotionImg';
import { Divider } from '@mui/material';
import KeyboardDoubleArrowUpRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowUpRounded';
import { DynamicSectionProps } from '@/app/_library/types/common';
import { useAppContext } from '@/app/_context/AppContext';
import ButtonPro from '@/app/_components/common/ButtonPro';






const DataScienceAIDynamic: React.FC<DynamicSectionProps> = ({
    exFactor,
    left,
    ctnRef,
    index, scrollTo, 
}) => {

    const {
        screen:{currentBreakpoint,}
    } = useAppContext()

    const orientation = (['sm', 'md', 'lg']).includes(currentBreakpoint) ? "horizontal" : "vertical"
    const [animationComplete, setAnimationComplete] = useState(false);

    return (
        <PageWrapper
            ctnRef={ctnRef}
            id={`data-science-ai-dynamic-${numberToWord(index ? index : 0)}`}
        >


            <MotionDiv
                className={`${styles.heroWrapper}`}
            >
                <MotionDiv
                    className={`${styles.overviewCtn} overview-ctn`}
                >
                    <MotionDiv
                        className={`${styles.overviewFlexCtn} `}
                    >


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
                        <MotionDiv>
                            <Divider orientation={orientation} variant="middle" flexItem className={`xl:h-[50vh]`} />
                        </MotionDiv>


                        <MotionH4
                            initial={{ opacity: 0, x: -250 }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: { duration: 2 }
                            }}
                            className={`${styles.storyText} story-text`}
                        >
                            {exFactor?.point}
                        </MotionH4>
                    </MotionDiv>

                </MotionDiv>
            </MotionDiv>



            <div
                className='flex flex-col justify-center items-center'
            >
                <MotionDiv className={`${styles.btnCtn} btn-ctn justify-center flex gap-3`}>

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
        </PageWrapper>

    )
}

export default DataScienceAIDynamic