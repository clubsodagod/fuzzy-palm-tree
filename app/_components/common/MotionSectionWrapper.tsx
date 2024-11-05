"use client"
import React, { RefObject } from 'react'
import styles from './styles.module.css';
import { MotionDiv } from '../framer/MotionDiv';
import { motion, MotionProps } from "framer-motion";
import { MotionSection } from '../framer/MotionSection';

interface MotionSectionWrapperProps extends MotionProps {
    children: React.ReactNode;
    id?: string;
    ctnRef?: RefObject<HTMLDivElement>;
}

const MotionSectionWrapper: React.FC<MotionSectionWrapperProps> = ({
    children,
    id,
    ctnRef,
    ...motionProps // Spread motion props to capture any additional motion properties
}) => {
    return (
        <MotionSection
            className={`${styles.sectionWrapper} section-wrapper`}
            {...motionProps}
        >
            {children}
        </MotionSection>
    );
};



export default MotionSectionWrapper;