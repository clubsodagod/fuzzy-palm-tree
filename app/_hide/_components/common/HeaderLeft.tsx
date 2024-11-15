"use client"
import React from "react";
import type { MotionDivProps } from "./ScrollableItemCtn";
import { MotionDiv } from "../framer/MotionDiv";
import { MotionH1 } from "../framer/MotionH1";
import { MotionH4 } from "../framer/MotionH4";
import styles from "./styles.module.css"
import { Typography } from "@mui/material";

interface HeaderLeftProps extends MotionDivProps {
    headerLabel:string;
    tagLine:string;
}

const HeaderLeft: React.FC<HeaderLeftProps> = (
    {headerLabel, tagLine, ...props}
) => {

    return (
        <MotionDiv
        {...props}
        className="headerCtn left"
        >
            
            <MotionDiv
            >
                <Typography variant="h2">
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

export default HeaderLeft