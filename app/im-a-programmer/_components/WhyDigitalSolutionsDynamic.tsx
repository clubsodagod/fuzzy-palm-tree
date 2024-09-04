import React, { RefObject } from 'react'
import { PageWrapper } from '@/app/components'
import { Point } from '@/library/const'
import { motion } from 'framer-motion'
import styles from './styles.module.css';

const WhyDigitalSolutionsDynamic:React.FC<{
    factor:Point,
    ctnRef?:RefObject<HTMLDivElement>,
    index:number,
}> = ({
    factor:{
        label,
        point,
    },
    ctnRef,
    index,
}) => {

    const alignment = (index % 2) === 0 ? 'left' : 'right';
    return (
        <PageWrapper
        id={index%2===0 ? 'programmer-why-digital-alt' : 'programmer-why-digital'}
        ctnRef={ctnRef}
        >
            

            {/*  Top Typography Ctn */}
            <motion.div 
            className={`${styles.pointCtn}  point-ctn  `}
            >
                <motion.h2 
                className={`${styles.subheader}  subheader ${alignment}`}
                >
                    {label}
                </motion.h2>

                <motion.h4 
                className={`${styles.storyText} ${alignment} story-text`}
                >
                    {point}
                </motion.h4>

            </motion.div>
        </PageWrapper>
    )
}

export default WhyDigitalSolutionsDynamic