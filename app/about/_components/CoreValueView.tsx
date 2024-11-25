'use client'
import React, { useRef } from 'react'
import { ScrollableItemCtnProps } from '@/app/_hide/_components/common/ScrollableItemCtn';
import { MotionDiv } from '@/app/_hide/_components/framer/MotionDiv';
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';
import styles from '../../_components/common/scrollable-item-ctn.module.css';
import { useAppContext } from '@/app/_context/AppContext';
import { VoidOneParameterFunction } from '@/app/_library/types/common';


interface CoreValuesCarouselProps extends ScrollableItemCtnProps {
    carouselHandler: VoidOneParameterFunction,
}

const CoreValueView: React.FC<CoreValuesCarouselProps> = ({
    children,
    elementRef,
    carouselHandler,
    ...rest
}) => {

    const {
        screen:{currentBreakpoint}
    } = useAppContext()

    const scrollCtnRef = useRef<HTMLDivElement>(null);
    // Function to scroll the container by the window width
    const scrollContainer = (direction: 'left' | 'right') => {
        carouselHandler(direction);
    };

    const ctnRef = useRef(null);
    return (
        <MotionDiv
            ref={elementRef ? elementRef : ctnRef}
            className={`${styles.scrollableCtnWrapper}`}
            {...rest}
        >

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

            <div ref={scrollCtnRef} className={styles.aboutChildWrapper} >
                {children}
            </div>


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

        </MotionDiv>
    );
}



export default CoreValueView;