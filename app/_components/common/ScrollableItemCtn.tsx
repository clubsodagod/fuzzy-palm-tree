'use client'

import React, { useRef } from 'react'
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';
import type { HTMLMotionProps } from 'framer-motion';
import { useAppContext } from '@/app/_context/AppContext';
import { MotionDiv } from './framer/MotionDiv';
import styles from './scrollable-item-ctn.module.css'

export type MotionDivProps = HTMLMotionProps<'div'>;

export interface ScrollableItemCtnProps extends MotionDivProps {
    children: React.ReactNode,
    elementRef?: React.RefObject<HTMLDivElement>,
    portfolio?: boolean;
    setIndex?: (value: number) => void|null;
    index?: number|null;
    totalIndex?: number|null;
}

const ScrollableItemCtn: React.FC<ScrollableItemCtnProps> = ({
    children,
    elementRef,
    portfolio,
    setIndex,
    totalIndex,
    index,
    ...rest
}) => {
    const {
        screen: { isMobile, currentBreakpoint },
    } = useAppContext()
    const scrollCtnRef = useRef<HTMLDivElement>(null);


    // Function to scroll the container by the window width
    const scrollContainer = (direction: 'left' | 'right') => {
        if (scrollCtnRef?.current) {
            let scrollAmount: number;
            if (portfolio) {
                scrollAmount = window.innerWidth;
            } else {
                scrollAmount = window.innerWidth * (isMobile ? 1 : 0.5);
            }

            if (direction === 'left') {

                if (portfolio) {
                    console.log('left portfolio');


                    if (index == 0) {
                        if (setIndex) {
                            setIndex(totalIndex!)!;
                        }
                    } else {
                        if (setIndex) {
                            setIndex(index! - 1);
                        }
                    }
                }

                scrollCtnRef.current.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth',
                });

            } else {

                if (portfolio) {
                    if (index == totalIndex) {
                        console.log(index, 'index');
                        if (setIndex) {
                            setIndex(0);
                        }
                    } else {
                        console.log(index, 'index');
                        if (setIndex) {
                            setIndex(index! + 1);
                        }
                    }
                }
                scrollCtnRef.current.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth',
                });
            }

        }
    };

    const ctnRef = useRef(null);

    return (
        <MotionDiv
            ref={elementRef ? elementRef : ctnRef}
            className={`${styles.scrollableCtnWrapper}`}
            {...rest}
        >
            {
                portfolio &&
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
                    className={`${styles.leftArrowCtn} ${styles.bottomBtn}`}
                    onClick={() => scrollContainer('left')} // Scroll left on click
                >
                    <MotionDiv
                        className={`${styles.arrowWrapper}`}
                    >
                        <ArrowCircleDownRoundedIcon
                            className={`${styles.leftArrow}`}
                        />
                    </MotionDiv>
                </MotionDiv>
            }
            {
                !(['xs', 'sm', 'md']).includes(currentBreakpoint) && !portfolio &&
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
                    className={`${styles.leftArrowCtn}`}
                    onClick={() => scrollContainer('left')} // Scroll left on click
                >
                    <MotionDiv
                        className={`${styles.arrowWrapper}`}
                    >
                        <ArrowCircleDownRoundedIcon
                            className={`${styles.leftArrow}`}
                        />
                    </MotionDiv>
                </MotionDiv>
            }


            <div ref={scrollCtnRef} id={rest.id ? rest.id : ''}
                className={` ${rest.id == 'programmer-approach-solid-hero' || rest.id == 'programmer-approach-sdlc-section' ? styles['solidChildWrapper']
                        : rest.id == 'programmer-approach-design-section' ? styles['designPatternsChildWrapper']
                            : rest.id == 'blog-posts-ctn' ? styles['blogChildWrapper'] : rest.id == 'programmer-portfolio-main' ? styles['portfolioChildWrapper'] : rest.id == 'about-resume-main' ? styles['technologiesChildWrapper'] : styles.childWrapper} overflow-x-hidden`
                }
            >
                {children}
            </div>


            {
                portfolio &&
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
                    className={`${styles.rightArrowCtn} ${styles.bottomBtn}`}
                    onClick={() => scrollContainer('right')} // Scroll right on click
                >
                    <MotionDiv
                        className={`${styles.arrowWrapper}`}
                    >
                        <ArrowCircleDownRoundedIcon
                            className={`${styles.rightArrow}`}
                        />
                    </MotionDiv>

                </MotionDiv>
            }
            {
                !(['xs', 'sm', 'md']).includes(currentBreakpoint) && !portfolio &&
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
                    className={`${styles.rightArrowCtn}`}
                    onClick={() => scrollContainer('right')} // Scroll right on click
                >
                    <MotionDiv
                        className={`${styles.arrowWrapper}`}
                    >
                        <ArrowCircleDownRoundedIcon
                            className={`${styles.rightArrow}`}
                        />
                    </MotionDiv>

                </MotionDiv>
            }

        </MotionDiv>
    );
}

export default ScrollableItemCtn;