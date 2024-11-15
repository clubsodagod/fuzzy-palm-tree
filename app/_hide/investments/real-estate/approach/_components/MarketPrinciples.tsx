'use client'
import { PageWrapper } from '@/app/_hide/_components';
import { marketApproachPrinciples } from '@/library/const';
import { Principle } from '@/library/types/investment';
import { motion } from 'framer-motion';
import React, { RefObject, useRef } from 'react';
import styles from '../../../investments.module.css'

const MarketPrinciples:React.FC<{
    ctnRef:RefObject<HTMLDivElement>,
}> = ({
    ctnRef,
}) => {

    const criteriaRef = useRef<HTMLDivElement>(null);
    
    return (

        <PageWrapper 
        ctnRef={ctnRef}
        id='approach-market-principles' 
        >
        {/* Market Principles Component */}
            <motion.div
            ref={criteriaRef}
            className={` ${styles.marketApproachCtn} left`}
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
                <h1 className={` ${styles.header} header left`} id='approach-page'>
                    Market Approach
                </h1>
                <h6 className={`${styles.subheader} subheader left`} id='approach-page'>
                    Evolving with the Market: Data at Our Core, Community at Our Heart
                </h6>
            </motion.div>

            <motion.div
            className={`${styles.principlesCtn}`}
            >
                <h6 className={`${styles.subheader} subheader left`} id='approach-page'>
                    Principles of Market Approach
                </h6>

                <ul
                className={`${styles.principles} left`}
                >
                    {
                        marketApproachPrinciples.map((p:Principle,i:number)=> (
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

export default MarketPrinciples