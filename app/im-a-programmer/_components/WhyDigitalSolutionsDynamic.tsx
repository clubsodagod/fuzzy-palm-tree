import React, { RefObject, useRef } from 'react'
import { PageWrapper } from '@/app/components'
import { Point } from '@/library/const'
import { motion } from 'framer-motion'
import styles from './styles.module.css';
import { numberToWord } from '@/utility/functions';

const WhyDigitalSolutionsDynamic:React.FC<{
    factor:Point;
    ctnRef?:RefObject<HTMLDivElement>;
    index:number;
    id:string;
}> = ({
    factor:{
        label,
        point,
    },
    ctnRef,
    index,
    id,
}) => {


    const alignment = (index % 2) === 0 ? 'left' : 'right';
    return (
        <PageWrapper
        id={id}
        ctnRef={ctnRef}
        >
            

            {/*  Top Typography Ctn */}
            <motion.div 
            className={`${styles.pointCtn}  point-ctn  `}
            >
                <motion.h3 
                className={`${styles.subheader}  subheader ${alignment}`}
                >
                    {label}
                </motion.h3>

                <motion.h6
                className={`${styles.storyText} ${alignment} story-text`}
                >
                    {point}
                </motion.h6>

            </motion.div>
        </PageWrapper>
    )
}

export default WhyDigitalSolutionsDynamic