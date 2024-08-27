'use client'
import { AppContainer } from '@/app/components'
import { RealEstateAvailable, RealEstateCriteria, RealEstateCTA, RealEstatePageHero, RealEstatePosts } from '@/app/components/investment-page'
import React, { useRef } from 'react'

const Page = () => {
    
    const ctnRef = useRef<HTMLDivElement>(null);
    return (
        <AppContainer ctnRef={ctnRef}>
            <RealEstatePageHero />
            <RealEstateCriteria />
            <RealEstateAvailable />
            <RealEstateCTA />
            <RealEstatePosts />
        </AppContainer>
    )
}

export default Page