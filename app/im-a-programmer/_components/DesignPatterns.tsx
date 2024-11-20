'use client'
import React, { RefObject, useRef } from 'react'
import { motion } from 'framer-motion'
import styles from './styles.module.css'
import { Typography } from '@mui/material'
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';
import { designPatterns } from '@/library/const'
import ButtonPro from '@/app/_components/common/ButtonPro'
import HeroButtonCtn from '@/app/_components/common/HeroButtonCtn'
import ScrollCtnWrapper from '@/app/_components/common/ScrollCtnWrapper'
import ScrollableItemCtn from '@/app/_components/common/ScrollableItemCtn'
import DesignPatternCard from './approach/design-patterns/DesignPatternCard'
import MotionPageWrapper from '@/app/_components/common/MotionPageWrapper'
import { MotionDiv } from '@/app/_components/common/framer/MotionDiv'
import { Header } from '@/app/_hide/_components'

const DesignPatterns: React.FC<{
    ctnRef: RefObject<HTMLDivElement>,
    scrollTo: (id: string) => void;
}> = ({
    ctnRef,
    scrollTo,
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
            <MotionPageWrapper
                ctnRef={ctnRef}
                id='approach-design-thinking'
            >

                <MotionDiv
                    className={`hero-wrapper`}
                >
                    <Header
                        className='top-hero-ctn'
                        headerLabel='Design Patterns'
                        tagLine='Mastering Design Patterns: Code Once, Scale Infinitely'
                        right={true}
                    />


                    <MotionDiv
                        className={`${styles.designPatternsCtnWrapper}`}
                    >


                        <MotionDiv
                            className={`${styles.designPatternsCtn}`}
                        >
                            <ScrollCtnWrapper>
                                <ScrollableItemCtn
                                id='programmer-approach-design-section'
                            className={`${styles.designPatternsScrollCtn} snap-x snap-mandatory`}
                            >
                        {
                            designPatterns.creation.map((p, i: number) => {
                                return (
                                    <MotionDiv key={`${i}: design principle`}
                                        className={`${styles.creationWrapper} snap-center`}
                                    >
                                        <DesignPatternCard
                                            pattern={p}
                                        />
                                    </MotionDiv>
                                )
                            })
                        }
                        {
                            designPatterns.behavioral.map((p, i: number) => {
                                return (
                                    <MotionDiv key={`${i}: solid principle`}
                                        className={`${styles.behavioralWrapper} snap-center`}
                                    >
                                        <DesignPatternCard
                                            pattern={p}
                                        />
                                    </MotionDiv>
                                )
                            })
                        }
                        {
                            designPatterns.structural.map((p, i: number) => {
                                return (
                                    <MotionDiv key={`${i}: solid principle`}
                                        className={`${styles.structuralWrapper} snap-center`}
                                    >
                                        <DesignPatternCard
                                            pattern={p}
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

                <MotionDiv className='  w-full'>
                        <HeroButtonCtn className={``}>
                        <ButtonPro
                                variant='outlined'
                                label='SOLID'
                                color='primary'
                                onClick={() => { scrollTo('approach-solid-principles') }}
                            />
                            
                            <ButtonPro
                                variant='outlined'
                                label='SDLC'
                                color='secondary'
                                onClick={() => {scrollTo('approach-sdlc') }}
                            />
                            
                        </HeroButtonCtn>
                    </MotionDiv>




            </MotionPageWrapper>
        )
    }

export default DesignPatterns