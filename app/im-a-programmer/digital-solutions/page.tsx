'use client'


import { AppContainer } from '@/app/components';
import React, { useRef } from 'react'
import { DigitalSolutionsMain } from '../_components';
import { CustomSoftware, DataScienceAI, DigitalTransformation, Visuals, WebMobileApplications } from '../_components/digital-solutions';

const DigitalSolutionsPage = () => {
    
    const ctnRef = useRef<HTMLDivElement>(null);
    return (
        <AppContainer ctnRef={ctnRef}>
            
            <DigitalSolutionsMain />
            <CustomSoftware />
            <DataScienceAI />
            <WebMobileApplications />
            <DigitalTransformation />
            <Visuals />
        </AppContainer>
    )
}

export default DigitalSolutionsPage