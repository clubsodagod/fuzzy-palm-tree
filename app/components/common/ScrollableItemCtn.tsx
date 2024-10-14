'use client'

import React, { useRef } from 'react'
import styles from './styles.module.css'
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';
import { MotionDiv } from '../framer/MotionDiv';
import type { HTMLMotionProps } from 'framer-motion';

export type MotionDivProps = HTMLMotionProps<'div'>;

export interface ScrollableItemCtnProps extends MotionDivProps  {
    children:React.ReactNode,   
    elementRef:React.RefObject<HTMLDivElement>,
}

const ScrollableItemCtn: React.FC<ScrollableItemCtnProps> = ({
    children,
    elementRef,
    ...rest
}) => {
    const scrollCtnRef = useRef<HTMLDivElement>(null);
    // Function to scroll the container by the window width
    const scrollContainer = (direction: 'left' | 'right') => {
        if (scrollCtnRef?.current) {
            const scrollAmount = window.innerWidth * 0.5;
            if (direction === 'left') {
                scrollCtnRef.current.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth',
                });
            } else {
                scrollCtnRef.current.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth',
                });
            }
        }
    };

    return (
        <MotionDiv
            ref={elementRef}
            className={`${styles.scrollableCtnWrapper}`}
            {...rest}
        >
            <MotionDiv
                initial={{
                    opacity:0,
                }}
                whileInView={{
                    opacity:"100%",
                    transition:{
                        duration:2,
                    }
                }}
                whileHover={{
                    scale:1.25
                }}
                className={`${styles.leftArrowCtn}`}
                onClick={() => scrollContainer('left')} // Scroll left on click
            >
                <ArrowCircleDownRoundedIcon 
                    className={`${styles.leftArrow}`}
                />
            </MotionDiv>

            <div ref={scrollCtnRef} className={styles.childWrapper} >
                {children}
            </div>

            <MotionDiv
                initial={{
                    opacity:0,
                }}
                whileInView={{
                    opacity:"100%",
                    transition:{
                        duration:2.5,
                    }
                }}
                whileHover={{
                    scale:1.25
                }}
                className={`${styles.rightArrowCtn}`}
                onClick={() => scrollContainer('right')} // Scroll right on click
            >
                <ArrowCircleDownRoundedIcon 
                    className={`${styles.rightArrow}`}
                />
            </MotionDiv>
        </MotionDiv>
    );
}

export default ScrollableItemCtn;