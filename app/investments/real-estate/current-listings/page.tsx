'use client'

import { AppContainer } from '@/app/components'
import React, { useRef } from 'react'
import { CurrentListings } from './_components'

const Page = () => {
    
    const ctnRef = useRef<HTMLDivElement>(null);


    return (
        <AppContainer ctnRef={ctnRef}>
            <CurrentListings />
        </AppContainer>
    )

}

export default Page