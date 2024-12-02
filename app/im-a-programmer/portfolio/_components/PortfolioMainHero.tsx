'use client'
import React, { useEffect, useRef, useState } from 'react'
import PortfolioCard from './PortfolioCard'
import { MotionValue } from 'framer-motion'
import { ITechnicalApplication } from '@/app/_database/models/technicalApplication'
import ButtonPro from '@/app/_components/common/ButtonPro'
import { MotionDiv } from '@/app/_components/common/framer/MotionDiv'
import { HeroProps } from '@/app/_library/types/common'
import Header from '@/app/_components/common/Header'
import ScrollableItemCtn from '@/app/_components/common/ScrollableItemCtn'
import HeroButtonCtn from '@/app/_components/common/HeroButtonCtn'
import ScrollCtnWrapper from '@/app/_components/common/ScrollCtnWrapper'
import { useAppContext } from '@/app/_context/AppContext'
import MotionPageWrapper from '@/app/_components/common/MotionPageWrapper'


interface PortfolioMainProps extends HeroProps {
    technicalApplications: ITechnicalApplication[] | undefined | null;
    link: string;
    setLink: React.Dispatch<string>;
};


const PortfolioMainHero: React.FC<PortfolioMainProps> = ({
    ctnRef,
    technicalApplications, scrollTo, link, setLink
}) => {

    const [index, setIndex] = useState<number>(0);
    const {
        scroll: { scrollY },
        screen: { currentBreakpoint }
    } = useAppContext();

    let technicalApplicationsIndexTotal = technicalApplications && technicalApplications.length - 1;
    const scrollRef = useRef(null);

    function handleSetIndex(value:number) {
        setIndex(value);
        console.log(index);
        
    }

    useEffect(() => {
        if (index >= 0 && technicalApplications) {
            setLink(technicalApplications[index].photos[0])
        }
        console.log(`index:${index}`);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index])

    return (
        <MotionPageWrapper
            ctnRef={ctnRef}
            id='portfolio-main'
        >

            <MotionDiv
            >

                <Header
                    className=''
                    headerLabel={`Portfolio`}
                    tagLine='My Collection of Digital Gems'
                    size={(['xs',]).includes(currentBreakpoint) ? 'md' : 'lg'}
                />

                <ScrollCtnWrapper>
                    <ScrollableItemCtn
                        elementRef={scrollRef}
                        portfolio
                        index={index}
                        setIndex={handleSetIndex}
                        id='programmer-portfolio-main'
                        totalIndex={technicalApplicationsIndexTotal ? technicalApplicationsIndexTotal : 0}
                    >

                        <MotionDiv
                            className='min-w-full  snap-x snap-mandatory px-2 pb-6 sm:px-[16.5vw] pt-[3vh]  flex flex-col gap-3'
                        >
                            <PortfolioCard
                                project={(technicalApplications!)[index]}
                            />
                        </MotionDiv>
                    </ScrollableItemCtn>
                </ScrollCtnWrapper>


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

        </MotionPageWrapper>
    )
}


export default PortfolioMainHero