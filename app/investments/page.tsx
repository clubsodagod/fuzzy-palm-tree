"use client"

import React, { useRef } from 'react'
import { InvestmentApproach, InvestmentAreas, InvestmentPageHero } from '../components/investment-page'
import { AppContainer } from '../components'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import InvestmentWorldScene from './_components/scenes/InvestmentWorldScene'

const Page = () => {
    
    const ctnRef = useRef<HTMLDivElement>(null);

    let yProgress:number = 0

    const [scrollYPro, setScrollYPro] = React.useState<number>(yProgress)

    const { scrollYProgress, scrollY,  } = useScroll({target:ctnRef, offset: ['start end', 'start end']})

    
    useMotionValueEvent(scrollY, "change", (latest) => {
        console.log(latest, (ctnRef?.current?.offsetHeight! - window.innerHeight  ))
        setScrollYPro(ctnRef?.current?.offsetHeight! - window.innerHeight  );
    })

    return (
            <AppContainer
            ctnRef={ctnRef}
            >
                <motion.section className={`three-scene`} id='investment-page'>
                    <InvestmentWorldScene scrollY={scrollY} scrollYProgress={scrollYProgress} ctnHeightValue={scrollYPro} />
                </motion.section>
                <InvestmentPageHero />
            </AppContainer>
    )
}

export default Page