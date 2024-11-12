import React, { useRef } from 'react'
import { ScrollableItemCtnProps } from '@/app/_components/common/ScrollableItemCtn';
import { MotionDiv } from '@/app/_components/framer/MotionDiv';
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';
import { VoidOneParameterFunction } from '@/app/im-a-programmer/_components/DigitalSolutionsHeroMain';
import styles from '../../_components/common/styles.module.css';


interface CoreValuesCarouselProps extends ScrollableItemCtnProps {
    carouselHandler: VoidOneParameterFunction,
}

const CoreValueView: React.FC<CoreValuesCarouselProps> = ({
    children,
    elementRef,
    carouselHandler,
    ...rest
}) => {
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
                className={`${styles.leftAboutArrowCtn}`}
                onClick={() => scrollContainer('left')} // Scroll left on click
            >
                <ArrowCircleDownRoundedIcon 
                    className={`${styles.leftArrow}`}
                />
            </MotionDiv>

            <div ref={scrollCtnRef} className={styles.aboutChildWrapper} >
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
                className={`${styles.rightAboutArrowCtn}`}
                onClick={() => scrollContainer('right')} // Scroll right on click
            >
                <ArrowCircleDownRoundedIcon 
                    className={`${styles.rightArrow}`}
                />
            </MotionDiv>
        </MotionDiv>
    );
}



export default CoreValueView;