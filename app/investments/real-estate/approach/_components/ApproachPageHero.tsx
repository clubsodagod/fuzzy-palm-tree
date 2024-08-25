'use client'

import { OuterSceneWrapper, PageWrapper } from '@/app/components'
import React, { RefObject, useEffect, useRef } from 'react'
import styles from '../../../investments.module.css'
import { ApproachScene } from '@/app/investments/_components/scenes'
import { motion, MotionValue, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import { useFrame } from '@react-three/fiber'
import { coreInvestmentPrinciples } from '@/library/const'
import { Principle } from '@/library/types/investment'







const ApproachPageHero:React.FC<{
    scrollYProgress:MotionValue,
    scrollY:MotionValue,
    scrollYPro:number
}> = ({
    scrollYProgress,
    scrollY,
    scrollYPro,
}) => {    
    const criteriaRef = useRef<HTMLDivElement>(null);
    const finModRef = useRef<HTMLDivElement>(null);
    const opacity = useTransform(scrollY, [0,  (window?.innerHeight * 1),  (window?.innerHeight * 2),2844 ], [1,0.81,0.5,0]);
    const scale = useTransform(scrollY, [0, (window?.innerHeight * 1), scrollYPro], [0.0625,0.04525,0.03125]);
    const x = useTransform(scrollY, [0,  (window?.innerHeight * 1),  (window?.innerHeight * 2),2844 ], [0,20,-40,0]);
    const y = useTransform(scrollY, [0,  (window?.innerHeight * 1),  (window?.innerHeight * 2),2844 ], [0,10,5,0]);

    



    // useMotionValueEvent(scrollYProgress, "change", (latest) => {
    //     console.log(latest)
    // })
    // useEffect(()=> {
        
    // },[scrollYProgress])

    return (
        
        <OuterSceneWrapper
        id='approach-page'
        >


            {/* Main View Hero   */}
            <PageWrapper id='approach1' >
                <motion.div
                    style={{opacity: opacity}}

                className={` ${styles.topTextCtn}`}
                >
                    <h1 className={` ${styles.investHeader}`} id='approach-page'>
                        The Approach
                    </h1>
                    <h6 className={`${styles.investSubheader}`} id='approach-page'>
                        Fueling Growth with Adaptive and Risk-Managed Investments
                    </h6>
                </motion.div>
            </PageWrapper>



            {/* Core Investment Principles Component */}
            <PageWrapper id='approach2' >
                <motion.div
                ref={criteriaRef}
                className={` ${styles.philosophyCtn}`}
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
                    <h1 className={` ${styles.investHeader}`} id='approach-page'>
                        Investment Philosophy & Strategy
                    </h1>
                </motion.div>

                <motion.div
                className={`${styles.principlesCtn}`}
                >
                    <h6 className={`${styles.investSubheader}`} id='approach-page'>
                        Core Investment Principles
                    </h6>

                    <ul
                    className={`${styles.principles}`}
                    >
                        {
                            coreInvestmentPrinciples.map((p:Principle,i:number)=> (
                                <li key={`${p.key} : ${i}`} className={`${styles.principleKeyLI}`}>
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


            {/* Market Principles Component */}
            <PageWrapper id='approach3' >
                <motion.div
                ref={criteriaRef}
                className={` ${styles.marketApproachCtn}`}
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
                    <h1 className={` ${styles.investHeader}`} id='approach-page'>
                        Market Approach
                    </h1>
                    <h6 className={`${styles.investSubheader}`} id='approach-page'>
                        Evolving with the Market: Data at Our Core, Community at Our Heart
                    </h6>
                </motion.div>

                <motion.div
                className={`${styles.principlesCtn}`}
                >
                    <h6 className={`${styles.investSubheader}`} id='approach-page'>
                        This is how I approach the market.
                    </h6>

                    <ul
                    className={`${styles.principles}`}
                    >
                        {
                            coreInvestmentPrinciples.map((p:Principle,i:number)=> (
                                <li key={`${p.key} : ${i}`} className={`${styles.principleKeyLI}`}>
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

            <PageWrapper id='approach4'>
                <motion.div
                ref={finModRef}
                className={` ${styles.topTextCtn}`}
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
                    <h1 className={` ${styles.investHeader}`} id='approach-page'>
                        Financial Model
                    </h1>
                    <h6 className={`${styles.investSubheader}`} id='approach-page'>
                        Maximizing Time. Accelerating your dollar.
                    </h6>
                </motion.div>
            </PageWrapper>

        </OuterSceneWrapper>
    )


}

export default ApproachPageHero