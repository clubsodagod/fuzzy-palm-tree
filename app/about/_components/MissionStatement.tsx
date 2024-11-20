'use client'

import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { Typography } from '@mui/material'
import MissionStatementScene from './scenes/mission-statement/AboutScene'
import { HeroProps } from '@/app/_library/types/common'
import { useAppContext } from '@/app/_context/AppContext'
import MotionPageWrapper from '@/app/_components/common/MotionPageWrapper'
import { MotionDiv } from '@/app/_components/common/framer/MotionDiv'
import Header from '@/app/_components/common/Header'
import HeroButtonCtn from '@/app/_components/common/HeroButtonCtn'
import ButtonPro from '@/app/_components/common/ButtonPro'
import { missionStatement } from '@/library/const'

const MissionVision: React.FC<HeroProps> = ({
    ctnRef,
    id,
    scrollTo,
}) => {
    const {
        scroll: { scrollY, windowScrollHeight, scrollYProgress },
        screen: { currentBreakpoint }
    } = useAppContext()

    const [scrollYPro, setScrollYPro] = useState(scrollY.get())

    useEffect(() => {
        if (scrollY)
            console.log(scrollY.get(), scrollYProgress.get());




        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scrollY.get(), scrollYProgress.get()])

    return (
        <MotionPageWrapper
            ctnRef={ctnRef}
            id={id}
        >
            <MotionDiv className={` h-full`}>

                <Header
                    headerLabel="My Mission"
                    tagLine='My Guide Forward'
                    size={(['xs', 'sm',]).includes(currentBreakpoint) ? 'md' : 'lg'}
                />

                <MotionDiv className={`${styles.missionText} `}>
                    <MotionDiv
                    className='blur-wrapper'
                    >
                        <Typography variant='h4'>
                            {missionStatement}
                        </Typography>
                    </MotionDiv>
                </MotionDiv>


            </MotionDiv>
            <HeroButtonCtn>
                <ButtonPro
                    label={`About`}
                    size='small'
                    variant='contained'
                    color='primary'
                    className={`learn-more-btn`}
                    onClick={() => { scrollTo && scrollTo('about-bio') }}
                />
                <ButtonPro
                    color='secondary'
                    label={`Core Values`}
                    variant='contained'
                    className={`partnership-btn`}
                    onClick={() => { scrollTo && scrollTo('about-core-values') }}
                />
            </HeroButtonCtn>
        </MotionPageWrapper>
    )
}

export default MissionVision