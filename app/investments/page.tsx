"use client"

import React from 'react'
import { InvestmentApproach, InvestmentAreas, InvestmentPageHero } from '../components/investment-page'
import { AppContainer } from '../components'

const page = () => {
    return (
            <AppContainer>
                <InvestmentPageHero />
                <InvestmentApproach />
                <InvestmentAreas />
            </AppContainer>
    )
}

export default page