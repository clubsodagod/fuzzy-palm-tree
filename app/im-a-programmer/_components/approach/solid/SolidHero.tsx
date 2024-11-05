"use client"
import React, { RefObject, useRef } from 'react'
import styles from '../../styles.module.css'
import { Header, PageWrapper, SectionWrapper } from '@/app/_components';
import { MotionDivProps } from '@/app/_components/common/ScrollableItemCtn';
import { MotionDiv } from '@/app/_components/framer/MotionDiv';
import { solidPrinciples } from '@/library/const';
import SolidCard from './SolidCard';
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';
import ButtonPro from '@/app/_components/common/buttons/ButtonPro';
import { motion } from 'framer-motion';

export interface SolidHeroProps extends MotionDivProps {
    ctnRef: RefObject<HTMLDivElement>;
    scrollTo: (id: string) => void;
}

const SolidHero: React.FC<SolidHeroProps> = ({
    ctnRef,
    scrollTo,
    ...props
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
            {...props}
        >
            <MotionDiv
                className={`${styles.solidHeroWrapper}`}
            >
                <Header
                    className='top-hero-ctn'
                    headerLabel={"SOLID"}
                    tagLine='Guiding Principles: The Roadmap to Clean Architecture'
                />

                <MotionDiv
                    className={`${styles.solidPrinciplesCtnWrapper}`}
                >


                    <MotionDiv
                        className={`${styles.solidPrinciplesCtn}`}
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
                            className={`${styles.solidPrinciplesScrollCtn} snap-x snap-mandatory`}
                        >
                            {
                                solidPrinciples.map((p, i: number) => {
                                    return (
                                        <MotionDiv key={`${i}: solid principle`}
                                            className={`${styles.solidCardWrapperOut} snap-center`}
                                        >
                                            <SolidCard
                                                principle={p}
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
                                label='To Top'
                                color='primary'
                                onClick={() => { scrollTo('approach-main') }}
                            />
                            
                            <ButtonPro
                                variant='contained'
                                label='Design Patterns'
                                color='secondary'
                                onClick={() => {scrollTo('approach-design-patterns') }}
                            />
                            
                        </motion.div>
                    </motion.div>




        </PageWrapper>
    )
}



export default SolidHero;