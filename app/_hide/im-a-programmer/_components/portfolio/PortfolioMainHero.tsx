'use client'
import { Header, HeroButtonCtn, PageWrapper, ScrollableItemCtn } from '@/app/_hide/_components'
import MotionPageWrapper from '@/app/_hide/_components/common/MotionPageWrapper'
import { MotionDiv } from '@/app/_hide/_components/framer/MotionDiv'
import { HeroProps } from '@/app/_hide/about/_components/BioHero'
import { ITechnicalApplication } from '@/library/db/models/technicalApplication'
import { Badge, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import PortfolioCard from './PortfolioCard'
import PortfolioScene from './scene/PortfolioScene'
import ButtonPro from '@/app/_hide/_components/common/buttons/ButtonPro'
import { motion, MotionValue } from 'framer-motion'


interface PortfolioMainProps extends HeroProps {
    technicalApplications: ITechnicalApplication[];
    scrollY:MotionValue;
    link:string;
    setLink:React.Dispatch<string>;
    index:number;
    setIndex:React.Dispatch<number>;
};


const PortfolioMainHero: React.FC<PortfolioMainProps> = ({
    ctnRef,
    technicalApplications, scrollTo,
    scrollY,
    index,
    setIndex,
    link, setLink
}) => {

    let technicalApplicationsIndexTotal = technicalApplications.length - 1;
    const scrollRef = useRef(null);

    useEffect(() => {
        if (index >= 0) {
            setLink(technicalApplications[index].photos[0])
        }
    }, [index, technicalApplications, setLink])

    return (
        <PageWrapper
            ctnRef={ctnRef}
            id='portfolio-main'
        >

            <MotionDiv>

                <Header
                    headerLabel={`Portfolio`}
                    tagLine='My Collection of Digital Gems'
                    size='sm'
                />

                <MotionDiv className={`absolute w-full left-0 min-h-full pt-[6vh]`}>
                    <ScrollableItemCtn
                        elementRef={scrollRef}
                        portfolio
                        index={index}
                        setIndex={setIndex}
                        totalIndex={technicalApplicationsIndexTotal}
                    >
                        {
                            technicalApplications.map((tA, i: number) => {
                                return (
                                    <MotionDiv key={`${tA._id}: ${i}`}
                                        className='min-w-full  snap-x snap-mandatory px-2 pb-6 sm:px-[16.5vw] lg:px-[12vw] flex flex-col gap-3'
                                    >
                                        <PortfolioCard
                                            project={tA}
                                        />
                                    </MotionDiv>
                                )
                            })
                        }
                    </ScrollableItemCtn>
                </MotionDiv>

            </MotionDiv>


            <MotionDiv
                className='flex flex-col gap-3'
            >
                <HeroButtonCtn>
                    <ButtonPro
                        label={`Free Consultation`}
                        size='small'
                        variant='outlined'
                        color='secondary'
                        className={`learn-more-btn`}
                        onClick={() => { alert('Free consultation!') }}
                    />
                    <ButtonPro
                        color='primary'
                        label={`Case Studies`}
                        variant='contained'
                        className={`partnership-btn`}
                        onClick={() => { scrollTo && scrollTo('next') }}
                    />
                </HeroButtonCtn>

            </MotionDiv>

        </PageWrapper>
    )
}


export default PortfolioMainHero