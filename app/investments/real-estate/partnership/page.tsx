'use client'

import { AppContainer } from '@/app/_components'
import React, { useRef } from 'react'
import { RealEstatePartnerShip } from './_components'

const Page = () => {
    
    const ctnRef = useRef<HTMLDivElement>(null);
    return (
        
        <AppContainer ctnRef={ctnRef}>

            <RealEstatePartnerShip />
        </AppContainer>
    )
}

export default Page