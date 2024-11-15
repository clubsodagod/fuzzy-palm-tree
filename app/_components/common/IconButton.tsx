'use client'
import React from 'react'
import { MotionDiv } from '@/app/_components/common/framer/MotionDiv';
import { MotionDivProps } from '@/app/_library/types/common';



export interface ButtonProps extends MotionDivProps {
    label: React.ReactNode;
    down?:boolean;
}

const IconButton: React.FC<ButtonProps> = ({
    label,
    down,
    ...props
}) => {

    const className = down ? 'down' : ''

    return (
        <MotionDiv
        {...props}
        className={`btn-pro-wrapper ${className}`}
        >
                {label}
                
        </MotionDiv>
    )
}



export default IconButton;