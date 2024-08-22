'use client'

import React from 'react'
import styles from './styles.module.css'
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';

const ScrollableItemCtn:React.FC<{
    children:React.ReactNode,   
    elementRef:React.RefObject<HTMLDivElement>,
}> = ({
    children,
    elementRef,
}) => {
    return (
        <div
        ref={elementRef}
        className={`${styles.scrollableCtnWrapper}`}
        >

            <div
            className={`${styles.leftArrowCtn}`}
            >
                <ArrowCircleDownRoundedIcon 
                className={`${styles.leftArrow}`}
                />
            </div>

                <div className={styles.childWrapper}>
                    {children}
                </div>

            <div
            className={`${styles.rightArrowCtn}`}
            >
                <ArrowCircleDownRoundedIcon 
                className={`${styles.rightArrow}`}
                />
            </div>
            
        </div>
    )
}

export default ScrollableItemCtn