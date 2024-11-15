"use client"
import { MotionDivProps } from "@/app/_library/types/common";
import { Typography } from "@mui/material";
import React from "react";
import { MotionDiv } from "./framer/MotionDiv";

interface HeaderProps extends MotionDivProps {
    headerLabel:string|React.ReactNode|undefined;
    tagLine:string;
    right?:boolean;
    size?: 'sm' | 'md' | 'lg';
}

const Header: React.FC<HeaderProps> = (
    {headerLabel, tagLine, right, size, ...props}
) => {

    const className = right ? "right" : "left";

    const variant = size == 'sm' ? 'h3' : size == 'md' ? 'h2' : 'h1'

    return (
        <MotionDiv
        {...props}
        className={` header-wrapper ${className}`}
        >
            
            <MotionDiv>
                <Typography className={'header-text'} variant={variant}>
                    {headerLabel}
                </Typography>
            </MotionDiv>
            <Typography
            className={'subheader-text'}
            variant='subtitle1'
            >
                {tagLine}
            </Typography>
        </MotionDiv>
    )
}

export default Header