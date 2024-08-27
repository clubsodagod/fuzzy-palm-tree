'use client'

import React, { useRef } from 'react'
import { AppContainer } from '../components'
import { BioHero, CoreValues, MyMission } from './_components'

const Page = () => {
    
    const ctnRef = useRef<HTMLDivElement>(null);
    return (
        <AppContainer ctnRef={ctnRef}>
            <BioHero />
            <MyMission />
            <CoreValues />
        </AppContainer>
    )
}

export default Page