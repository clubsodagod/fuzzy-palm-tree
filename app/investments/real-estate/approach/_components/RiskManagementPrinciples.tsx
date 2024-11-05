'use client'
import { PageWrapper } from '@/app/_components'
import { riskManagementPrinciples } from '@/library/const'
import { Principle } from '@/library/types/investment'
import { motion } from 'framer-motion'
import React, { RefObject, useRef } from 'react'
import styles from '../../../investments.module.css'

const RiskManagementPrinciples:React.FC<{
    ctnRef:RefObject<HTMLDivElement>,
}> = ({
    ctnRef,
}) => {

    const visionRef = useRef<HTMLDivElement>(null);

    return (
        <PageWrapper
        ctnRef={ctnRef} 
        id='approach-risk-management-principles'
        >
        {/* Risk Management Principles */}
            <motion.div
            ref={visionRef}
            className={` ${styles.topTextCtn} right`}
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
            <h1 className={` ${styles.investHeader} right`} id='approach-page'>
                Mitigating Risk
            </h1>
            <h6 className={`${styles.investSubheader} right`} id='approach-page'>
                Balancing Safety and Growth: Proactive Management, Creative Solutions
            </h6>
        </motion.div>

        <motion.div
        className={`${styles.principlesCtn} right`}
        >
            <h6 className={`${styles.subheader} subheader right`} id='approach-page'>
                Principles of Risk Management
            </h6>

            <ul
            className={`${styles.principles} right`}
            >
                {
                    riskManagementPrinciples.map((p:Principle,i:number)=> (
                        <li key={`${p.key} : ${i}`} className={`${styles.principleKeyLI} right`}>
                            <span className={`${styles.fancyLIHeader} right`}>
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

export default RiskManagementPrinciples