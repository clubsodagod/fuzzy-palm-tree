'use client'
import React, { RefObject, useRef } from 'react'
import { Header, PageWrapper } from '@/app/_hide/_components'
import { motion } from 'framer-motion'
import styles from '../styles.module.css'
import { Typography } from '@mui/material'
import { MotionDiv } from '@/app/_hide/_components/framer/MotionDiv'
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';
import DesignPatternCard from './design-patterns/DesignPatternCard'
import { designPatterns } from '@/library/const'
import ButtonPro from '@/app/_hide/_components/common/buttons/ButtonPro'

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
            <PageWrapper
                ctnRef={ctnRef}
                id='approach-design-thinking'
            >

                <MotionDiv
                    className={`${styles.heroWrapper}`}
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

                            {/* left arrow component */}
                            <MotionDiv
                                initial={{
                                    opacity: 0,
                                }}
                                whileInView={{
                                    opacity: "100%",
                                    transition: {
                                        duration: 2,
                                    }
                                }}
                                whileHover={{
                                    scale: 1.25
                                }}
                                className={`${styles.leftArrowSolidCtn}`}
                                onClick={() => scrollContainer('left')} // Scroll left on click
                            >
                                <ArrowCircleDownRoundedIcon
                                    className={`${styles.leftSolidArrow}`}
                                />
                            </MotionDiv>


                        {/* overflow container */}
                        <div
                            ref={scrollCtnRef}
                            className={`${styles.designPatternsScrollCtn} snap-x snap-mandatory`}
                        >
                        {
                            designPatterns.creation.map((p, i: number) => {
                                return (
                                    <MotionDiv key={`${i}: solid principle`}
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
                        </div>

                            {/* right arrow component */}
                            <MotionDiv
                                initial={{
                                    opacity: 0,
                                }}
                                whileInView={{
                                    opacity: "100%",
                                    transition: {
                                        duration: 2.5,
                                    }
                                }}
                                whileHover={{
                                    scale: 1.25
                                }}
                                className={`${styles.rightArrowSolidCtn}`}
                                onClick={() => scrollContainer('right')} // Scroll right on click
                            >
                                <ArrowCircleDownRoundedIcon
                                    className={`${styles.rightSolidArrow}`}
                                />
                            </MotionDiv>

                        </MotionDiv>
                    </MotionDiv>


                </MotionDiv>
                    <motion.div
                        className={`${styles.btmHeroCtn} btm-hero-ctn left mt-auto`}
                    >

                        <motion.div className={`${styles.btnCtn} btn-ctn leftBtn flex gap-3`}>

                        <ButtonPro
                                variant='contained'
                                label='SOLID'
                                color='primary'
                                onClick={() => { scrollTo('approach-solid-principles') }}
                            />
                            
                            <ButtonPro
                                variant='contained'
                                label='SDLC'
                                color='secondary'
                                onClick={() => {scrollTo('approach-sdlc') }}
                            />
                            
                        </motion.div>
                    </motion.div>




            </PageWrapper>
        )
    }

export default DesignPatterns