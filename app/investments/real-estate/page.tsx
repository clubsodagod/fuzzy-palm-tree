'use client'
import { AppContainer } from '@/app/components'
import { RealEstateAvailable, RealEstateCriteria, RealEstateCTA, RealEstatePageHero, RealEstatePosts } from '@/app/components/investment-page'
import React from 'react'

const page = () => {
    return (
        <AppContainer>
            <RealEstatePageHero />
            <RealEstateCriteria />
            <RealEstateAvailable />
            <RealEstateCTA />
            <RealEstatePosts />
        </AppContainer>
    )
}

export default page