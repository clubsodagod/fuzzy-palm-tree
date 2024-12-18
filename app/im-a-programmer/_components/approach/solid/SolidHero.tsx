"use client"
import React, { RefObject, useRef } from 'react'
import styles from '../../styles.module.css'
import { solidPrinciples } from '@/library/const';
import SolidCard from './SolidCard';
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';
import ButtonPro from '@/app/_components/common/ButtonPro';
import { motion } from 'framer-motion';
import ScrollableItemCtn from '@/app/_components/common/ScrollableItemCtn';
import ScrollCtnWrapper from '@/app/_components/common/ScrollCtnWrapper';
import { MotionDiv } from '@/app/_components/common/framer/MotionDiv';
import { PageWrapper } from '@/app/_hide/_components';
import Header from '@/app/_components/common/Header';
import { HeroProps } from '@/app/_library/types/common';



const SolidHero: React.FC<HeroProps> = ({
    ctnRef,
    scrollTo,
    id,
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
            id={id}
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
                        <ScrollCtnWrapper>
                            <ScrollableItemCtn
                            elementRef={scrollCtnRef}
                                id='programmer-approach-design-section'
                            >

                                {
                                    solidPrinciples.map((p, i: number) => {
                                        return (
                                            <MotionDiv key={`${i}: solid principle`}
                                                className={`${styles.creationWrapper} snap-center `}
                                            >
                                                <SolidCard
                                                    principle={p}
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
            <motion.div
                className={`${styles.btmHeroCtn} btm-hero-ctn left mt-auto`}
            >

                <motion.div className={`${styles.btnCtn} btn-ctn leftBtn flex gap-3`}>

                    <ButtonPro
                        variant='outlined'
                        label='To Top'
                        color='primary'
                        onClick={() => { scrollTo('approach-main') }}
                    />

                    <ButtonPro
                        variant='outlined'
                        label='Design Patterns'
                        color='secondary'
                        onClick={() => { scrollTo('approach-design-patterns') }}
                    />

                </motion.div>
            </motion.div>




        </PageWrapper>
    )
}



export default SolidHero;