import { Header, PageWrapper } from '@/app/_hide/_components'
import { MotionDiv } from '@/app/_hide/_components/framer/MotionDiv'
import React, { RefObject, useRef } from 'react'
import styles from "../../styles.module.css"
import ButtonPro from '@/app/_hide/_components/common/buttons/ButtonPro'
import { motion } from 'framer-motion'
import { MotionDivProps } from '@/app/_hide/_components/common/ScrollableItemCtn';
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';
import SDLCCard from './SDLCCard'
import { sdlc } from '@/library/const'

export interface SDLCHeroProps extends MotionDivProps {
    ctnRef: RefObject<HTMLDivElement>;
    scrollTo: (id: string) => void;
}
const SDLCHero: React.FC<SDLCHeroProps> = ({
    ctnRef,
    scrollTo
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
        >

            <MotionDiv
                className={`${styles.heroWrapper}`}>

                <Header
                    headerLabel='Software Development Life Cycle'
                    tagLine='Mastering the Phases: From Idea to Deployment'
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

            {/* section scroll buttons */}
            <MotionDiv
                className={`${styles.btmHeroCtn} btm-hero-ctn left mt-auto`}
            >

                <MotionDiv className={`${styles.btnCtn} btn-ctn leftBtn flex gap-3`}>

                    <ButtonPro
                        variant='contained'
                        label='Design Patterns'
                        color='primary'
                        onClick={() => { scrollTo('approach-design-patterns') }}
                    />

                    <ButtonPro
                        variant='contained'
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