'use client'

import { AppContainer } from '@/app/components';
import React, { useRef } from 'react'
import { CaseStudies, Demos, PortfolioMainHero, SocialValidation, Visuals } from '../_components/portfolio';

const PortfolioPage = () => {
    
    const ctnRef = useRef<HTMLDivElement>(null);
    return (
        <AppContainer ctnRef={ctnRef}>
            <PortfolioMainHero />
            <CaseStudies />
            <Demos />
            <SocialValidation />
            {/* <Visuals /> */}
        </AppContainer>
    )
}

export default PortfolioPage