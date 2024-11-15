import React from 'react'
import { MotionDivProps } from '@/app/_library/types/common';
import { MotionDiv } from './framer/MotionDiv';

interface ScrollCtnWrapperProps extends MotionDivProps {
    children: React.ReactNode;
}

const ScrollCtnWrapper: React.FC<ScrollCtnWrapperProps> = ({
    children,
    ...props
}) => {

    const classNames = props.className ? props.className : 'scroll-ctn-wrapper';

    return (
        <MotionDiv
            {...props}
            className={`${classNames}`}
        >
            {children}
        </MotionDiv>
    )
}



export default ScrollCtnWrapper;