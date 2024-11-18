'use client'

import React, { useRef } from 'react'
import styles from './styles.module.css'
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';
import type { HTMLMotionProps } from 'framer-motion';
import { useScroll } from '@/app/_hide/_context/sub-context/ScrollContext';
import { useScreenContext } from '@/app/_hide/_context/sub-context/ScreenContext';
import { useAppContext } from '@/app/_context/AppContext';
import { MotionDiv } from '@/app/_components/common/framer/MotionDiv';

export type MotionDivProps = HTMLMotionProps<'div'>;

export interface ScrollableItemCtnProps extends MotionDivProps {
    children: React.ReactNode,
    elementRef?: React.RefObject<HTMLDivElement>,
    portfolio?: boolean;
    setIndex?: React.Dispatch<number>;
    index?: number;
    totalIndex?: number;
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
        screen:{isMobile, currentBreakpoint}
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
                    if (index && totalIndex && setIndex) {
                        if (index == 0) {

                            setIndex(totalIndex);
                        } else {
                            setIndex(index - 1);
                        }
                    }
                }

                scrollCtnRef.current.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth',
                });

            } else {

                if (portfolio) {
                    if (index && totalIndex && setIndex) {
                        if (index == totalIndex) {
                            setIndex(0);
                        } else {
                            setIndex(index + 1);
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
                !(['xs', 'sm', 'md']).includes(currentBreakpoint) &&
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
                    <ArrowCircleDownRoundedIcon
                        className={`${styles.leftArrow}`}
                    />
                </MotionDiv>
            }


            <div ref={scrollCtnRef} className={styles.childWrapper} >
                {children}
            </div>


            {
                !(['xs', 'sm', 'md']).includes(currentBreakpoint) &&
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
                    <ArrowCircleDownRoundedIcon
                        className={`${styles.rightArrow}`}
                    />
                </MotionDiv>
            }

        </MotionDiv>
    );
}

export default ScrollableItemCtn;