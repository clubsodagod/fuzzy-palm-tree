'use client'


import React from 'react'
import { MotionDiv } from './framer/MotionDiv'
import { MotionDivProps } from '@/app/_library/types/common'


interface HeroButtonCtnProps extends MotionDivProps {
    children: React.ReactNode;
    id?:string;
}

const HeroButtonCtn:React.FC<HeroButtonCtnProps> = ({
    children,
    id,
    ...props
}) => {
    const {className} = props
    const classNames = props.className  ? `${props.className} btn-ctn` : 'btn-ctn';
    return (
        <MotionDiv
        {...props}
        className={classNames}
        id={id}>
            {children}
        </MotionDiv>
    )
}

export default HeroButtonCtn