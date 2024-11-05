'use client'


import React from 'react'
import { HeroProps } from './BioHero'
import { Header, HeroButtonCtn, PageWrapper } from '@/app/_components'
import ButtonPro from '@/app/_components/common/buttons/ButtonPro'
import { MotionDiv } from '@/app/_components/framer/MotionDiv'
import { missionStatement } from '@/library/const'
import { Typography } from '@mui/material'

const MyCoreValues:React.FC<HeroProps> = ({
    ctnRef, id, scrollTo
}) => {
    return (
        <PageWrapper
            ctnRef={ctnRef}
            id={id}
        >
            <MotionDiv className={` h-full`}>

                <Header
                    headerLabel="Core Values"
                    tagLine='The Core of Being'
                    size='md'
                />

                

            </MotionDiv>
                    <HeroButtonCtn>
                        <ButtonPro
                            label={`Mission Statement`}
                            size='small'
                            variant='contained'
                            color='primary'
                            className={`learn-more-btn`}
                            onClick={()=>{scrollTo && scrollTo('about-mission-statement')}}
                        />
                        <ButtonPro
                            color='secondary'
                            label={`Bio`}
                            variant='contained'
                            className={`partnership-btn`}
                            onClick={()=>{scrollTo && scrollTo('top')}}
                        />
                    </HeroButtonCtn>
        </PageWrapper>)
}

export default MyCoreValues