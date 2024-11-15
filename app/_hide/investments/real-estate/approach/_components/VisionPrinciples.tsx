'use client'
import { PageWrapper } from '@/app/_hide/_components'
import { longTermVisionPrinciples } from '@/library/const'
import { Principle } from '@/library/types/investment'
import { motion } from 'framer-motion'
import React, { RefObject, useRef } from 'react'
import styles from '../../../investments.module.css'

const VisionPrinciples:React.FC<{
    ctnRef:RefObject<HTMLDivElement>,
}> = ({
    ctnRef,
}) => {

    const visionRef = useRef<HTMLDivElement>(null);
    return (           
        <PageWrapper
        ctnRef={ctnRef}
        id='approach-vision-principles'
        >
        {/* Vision Principles */}
            <motion.div
            ref={visionRef}
            className={` ${styles.topTextCtn} left`}
            whileInView={{
                opacity:1
            }}
            initial={{
                opacity:0
            }}
            transition={{
                duration: 1.5,
                delay:0.5,
            }}>
            <h1 className={` ${styles.header} header left`} id='approach-page'>
                Vision for the Future
            </h1>
            <h6 className={`${styles.investSubheader} subheader left`} id='approach-page'>
                Sustainable Success, Lasting Relationships: Innovate, Adapt, Thrive
            </h6>
        </motion.div>

        <motion.div
        className={`${styles.principlesCtn} left`}
        >
            <h6 className={`${styles.subheader} subheader left`} id='approach-page'>
                Principles of Long Term Vision
            </h6>

            <ul
            className={`${styles.principles} left`}
            >
                {
                    longTermVisionPrinciples.map((p:Principle,i:number)=> (
                        <li key={`${p.key} : ${i}`} className={`${styles.principleKeyLI} left`}>
                            <span className={`${styles.fancyLIHeader}`}>
                                {p.key}
                            </span> {p.value}
                        </li>
                        )
                    )
                }
            </ul>

        </motion.div>
        </PageWrapper>
        
    )
}

export default VisionPrinciples