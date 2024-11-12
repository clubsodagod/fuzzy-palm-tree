'use client'

import React, { useEffect, useState } from 'react'
import { HeroProps } from './BioHero'
import { Header, HeroButtonCtn, PageWrapper } from '@/app/_components'
import styles from './styles.module.css'
import { MotionDiv } from '@/app/_components/framer/MotionDiv'
import { Typography } from '@mui/material'
import { missionStatement } from '@/library/const'
import ButtonPro from '@/app/_components/common/buttons/ButtonPro'
import MissionStatementScene from './scenes/mission-statement/MissionStatementScene'
import { useScroll } from '@/app/_context/sub-context/ScrollContext'

const MissionVision: React.FC<HeroProps> = ({
    ctnRef,
    id,
    scrollTo,
}) => {
    const {
        scrollY, windowScrollHeight, scrollYProgress
    } = useScroll()

    const [scrollYPro, setScrollYPro] = useState(scrollY.get())

    useEffect(()=> {
        if(scrollY)
            console.log(scrollY.get(), scrollYProgress.get());
            
        
        
        
    },[scrollY.get(),scrollYProgress.get()])

    return (
        <PageWrapper
            ctnRef={ctnRef}
            id={id}
        >
            <MotionDiv className={` h-full`}>

                <Header
                    headerLabel="My Mission"
                    tagLine='My Guide Forward'
                    size='md'
                />

                <MotionDiv className={`${styles.missionText}`}>
                    <Typography variant='h6'>
                        {missionStatement}
                    </Typography>
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
        </PageWrapper>
    )
}

export default MissionVision