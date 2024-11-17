import Header from '@/app/_components/common/Header';
import HeroButtonCtn from '@/app/_components/common/HeroButtonCtn';
import ScrollableItemCtn from '@/app/_components/common/ScrollableItemCtn';
import ScrollCtnWrapper from '@/app/_components/common/ScrollCtnWrapper';
import { useAppContext } from '@/app/_context/AppContext';
import { ICaseStudy } from '@/app/_database/models/case-study';
import { PageWrapper } from '@/app/_hide/_components';
import ButtonPro from '@/app/_hide/_components/common/buttons/ButtonPro';
import { MotionDiv } from '@/app/_hide/_components/framer/MotionDiv';
import { HeroProps } from '@/app/_hide/about/_components/BioHero';
import React from 'react'

interface PortfolioMainProps extends HeroProps {
    caseStudies: ICaseStudy[] | undefined | null;
    caseStudy: ICaseStudy | undefined | null;
    setCaseStudy: React.Dispatch<ICaseStudy>
};
const CaseStudies: React.FC<PortfolioMainProps> = ({
    caseStudies, scrollTo, ctnRef, id,
    caseStudy, setCaseStudy
}) => {

    const {
        screen: { currentBreakpoint }
    } = useAppContext();

    return (
        <PageWrapper
            ctnRef={ctnRef}
            id={id}
        >

            <MotionDiv>
                <Header
                    headerLabel={`Case Studies`}
                    tagLine='The Thinking Behind the Solution'
                    size={(['xs', 'sm']).includes(currentBreakpoint) ? 'md' : 'lg'}
                />

       
                        <ScrollCtnWrapper>
                            <ScrollableItemCtn>
                                {
                                    caseStudies?.map((c, i: number) => (
                                        <MotionDiv
                                            key={`${i}:${c.title}`}
                                            className='min-w-[45vw] sm:min-w-[22.5vw] flex justify-center items-center'
                                        >
                                            <ButtonPro
                                                label={`${c.title}`}
                                                size='small'
                                                variant='contained'
                                                color={i % 2 == 0 ? 'secondary' : 'primary'}
                                                className={`learn-more-btn`}
                                                onClick={() => { setCaseStudy && setCaseStudy(c) }}
                                            />
                                        </MotionDiv>

                                    ))
                                }
                            </ScrollableItemCtn>
                        </ScrollCtnWrapper>
            </MotionDiv>

            <MotionDiv
                className='flex flex-col gap-3'
            >
                <HeroButtonCtn>
                    <ButtonPro
                        label={`Portfolio`}
                        size='small'
                        variant='outlined'
                        color='secondary'
                        className={`learn-more-btn`}
                        onClick={() => { scrollTo && scrollTo('previous') }}
                    />
                    <ButtonPro
                        color='primary'
                        label={`Reviews`}
                        variant='contained'
                        className={`partnership-btn`}
                        onClick={() => { scrollTo && scrollTo('next') }}
                    />
                </HeroButtonCtn>

            </MotionDiv>
        </PageWrapper>
    )
}

export default CaseStudies