import { Header, PageWrapper } from '@/app/_hide/_components'
import { MotionDiv } from '@/app/_hide/_components/framer/MotionDiv'
import React, { RefObject, useRef } from 'react'
import styles from "../../styles.module.css"
import ButtonPro from '@/app/_components/common/ButtonPro'
import { motion } from 'framer-motion'
import { MotionDivProps } from '@/app/_hide/_components/common/ScrollableItemCtn';
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';
import SDLCCard from './SDLCCard'
import { sdlc } from '@/library/const'
import ScrollCtnWrapper from '@/app/_components/common/ScrollCtnWrapper'
import ScrollableItemCtn from '@/app/_components/common/ScrollableItemCtn'
import { HeroProps } from '@/app/_library/types/common'


const SDLCHero: React.FC<HeroProps> = ({
    ctnRef,
    scrollTo,
    id,
}) => {

    const scrollCtnRef = useRef<HTMLDivElement>(null);
    // Function to scroll the container by the window width

    const scrollContainer = (direction: 'left' | 'right') => {
        if (scrollCtnRef?.current) {
            const scrollAmount = window?.innerWidth * 0.25;
            if (direction === 'left') {
                scrollCtnRef.current.scrollBy({
                    left: -scrollAmount,
                    behavior: 'auto',
                });
            } else {
                scrollCtnRef.current.scrollBy({
                    left: scrollAmount,
                    behavior: 'auto',
                });
            }
        }
    };


    return (
        <PageWrapper
            ctnRef={ctnRef}
            id={id}
        >

            <MotionDiv
                className={`${styles.heroWrapper}`}>

                <Header
                    headerLabel='Software Development Life Cycle'
                    tagLine='Mastering the Phases: From Idea to Deployment'
                    size='sm'
                />

                <MotionDiv
                    className={`${styles.solidPrinciplesCtnWrapper}`}
                >


                    <MotionDiv
                        className={`${styles.solidPrinciplesCtn}`}
                    >
                        <ScrollCtnWrapper>
                            <ScrollableItemCtn
                                id='programmer-approach-sdlc-section'
                            >
                                {
                                    sdlc.map((p, i: number) => {
                                        return (
                                            <MotionDiv key={`${i}: solid principle`}
                                                className={`${styles.solidCardWrapperOut} snap-center`}
                                            >
                                                <SDLCCard
                                                    phase={p} index={i}
                                                />
                                            </MotionDiv>
                                        )
                                    })
                                }
                            </ScrollableItemCtn>
                        </ScrollCtnWrapper>
                    </MotionDiv>
                </MotionDiv>
            </MotionDiv>

            {/* section scroll buttons */}
            <MotionDiv
                className={`${styles.btmHeroCtn} btm-hero-ctn left mt-auto`}
            >

                <MotionDiv className={`${styles.btnCtn} btn-ctn leftBtn flex gap-3`}>

                    <ButtonPro
                        variant='outlined'
                        label='Design Patterns'
                        color='primary'
                        onClick={() => { scrollTo('approach-design-patterns') }}
                    />

                    <ButtonPro
                        variant='outlined'
                        label='To Top'
                        color='secondary'
                        onClick={() => { scrollTo('approach-main') }}
                    />

                </MotionDiv>
            </MotionDiv>
        </PageWrapper>
    )
}

export default SDLCHero