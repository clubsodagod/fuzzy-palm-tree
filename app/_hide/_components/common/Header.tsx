"use client"
import React from "react";
import type { MotionDivProps } from "./ScrollableItemCtn";
import { MotionDiv } from "../framer/MotionDiv";
import { MotionH1 } from "../framer/MotionH1";
import { MotionH4 } from "../framer/MotionH4";
import styles from "./styles.module.css"
import { Typography } from "@mui/material";

interface HeaderProps extends MotionDivProps {
    headerLabel:any;
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
        className={`headerCtn ${className}`}
        >
            
            <MotionDiv>
                <Typography variant={variant}>
                    {headerLabel}
                </Typography>
            </MotionDiv>
            <MotionH4
            className="subheader"
            >
                {tagLine}
            </MotionH4>
        </MotionDiv>
    )
}

export default Header