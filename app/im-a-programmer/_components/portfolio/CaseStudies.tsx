import { Header, HeroButtonCtn, PageWrapper } from '@/app/_components';
import ButtonPro from '@/app/_components/common/buttons/ButtonPro';
import { MotionDiv } from '@/app/_components/framer/MotionDiv';
import { HeroProps } from '@/app/about/_components/BioHero';
import { ICaseStudy } from '@/library/db/models/case-study';
import React from 'react'

interface PortfolioMainProps extends HeroProps {
    caseStudies: ICaseStudy[];
    caseStudy:ICaseStudy;
    setCaseStudy:React.Dispatch<ICaseStudy>
};
const CaseStudies: React.FC<PortfolioMainProps> = ({
    caseStudies, scrollTo, ctnRef, id,
    caseStudy, setCaseStudy
}) => {
    return (
        <PageWrapper
            ctnRef={ctnRef}
            id={id}
        >

            <MotionDiv>
                <Header
                    headerLabel={`Case Studies`}
                    tagLine='The Thinking Behind the Solution'
                />

                <MotionDiv
                    className='flex flex-col gap-3'
                >
                    <HeroButtonCtn>
                        {
                            caseStudies.map((c,i:number) => (
                                <ButtonPro
                                key={`${i}:${c.title}`}
                                    label={`${c.title}`}
                                    size='small'
                                    variant='contained'
                                    color={i%2 == 0 ? 'secondary' : 'primary'}
                                    className={`learn-more-btn`}
                                    onClick={() => { setCaseStudy && setCaseStudy(c)}}
                                />
                            ))
                        }

                     
                    </HeroButtonCtn>

                </MotionDiv>
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