'use client'
import React, { RefObject, useRef } from 'react'
import styles from '../../../investments.module.css'
import { PageWrapper } from '@/app/_components';
import { coreInvestmentPrinciples } from '@/library/const';
import { Principle } from '@/library/types/investment';
import { motion } from 'framer-motion';

const CoreInvestmentPrinciples:React.FC<{
    ctnRef:RefObject<HTMLDivElement>,
}> = ({
    ctnRef,
}) => {

    const criteriaRef = useRef<HTMLDivElement>(null);

    return (

        <PageWrapper 
        ctnRef={ctnRef}
        id='approach-core-investment-principles' 
        >
        {/* Core Investment Principles Component */}
            <motion.div
            ref={criteriaRef}
            className={` ${styles.topTextCtn} right`}
            id='principlesCtnOne'
            whileInView={{
                opacity:1
            }}
            initial={{
                opacity:0
            }}
            transition={{
                duration: 1.5,
                delay:0.5,
            }}
            >
                <h1 className={` ${styles.header} header right`} id='approach-page'>
                    Investment Philosophy & Strategy
                </h1>
            </motion.div>

            <motion.div
            className={`${styles.heroP_Ctn} right`}
            >
                <h6 className={`${styles.subheader} subheader right`} id='approach-page'>
                    Core Investment Principles
                </h6>

                <ul
                className={`${styles.principles} right`}
                >
                    {
                        coreInvestmentPrinciples.map((p:Principle,i:number)=> (
                            <li key={`${p.key} : ${i}`} className={`${styles.principleKeyLI} right`}>
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

export default CoreInvestmentPrinciples