'use client'

import { AppContainer } from '@/app/components'
import React, { useRef } from 'react'
import { ApproachPageHero } from './_components'
import { ApproachScene } from '../../_components/scenes'
import { useMotionValueEvent, useScroll } from 'framer-motion'

const Page = () => {
    let yProgress:number = 0
    const [scrollYPro, setScrollYPro] = React.useState<number>(yProgress)

    const scrollRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress, scrollY,  } = useScroll({target:scrollRef, offset: ['start end', 'start end']})

    
    useMotionValueEvent(scrollY, "change", (latest) => {
        console.log(latest, (scrollRef?.current?.offsetHeight! - ( window ? window?.innerHeight : 0) ))
        setScrollYPro(scrollRef?.current?.offsetHeight! - (window ? window?.innerHeight : 0)  );
    })

    return (
        <AppContainer ctnRef={scrollRef}>

            <div className="three-scene" id="approach-page">
                <ApproachScene scrollYProgress={scrollYProgress} scrollY={scrollY} ctnHeightValue={scrollYPro}/>
            </div>

            <ApproachPageHero scrollYProgress={scrollYProgress} scrollY={scrollY} scrollYPro={scrollYPro} />
        </AppContainer>
    )
}

export default Page