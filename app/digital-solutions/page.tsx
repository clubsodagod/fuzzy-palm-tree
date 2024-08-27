'use client'
import React, { useRef } from 'react'
import { AppContainer } from '../components'
import { 
    AreasOfPassion, 
    DigitalSolutionsMainHero, 
    LetsWork, 
    MyCraft,  
    PillarsOfCraft, 
    TheProcess, 
} from './_components'

const Page = () => {
    
    const ctnRef = useRef<HTMLDivElement>(null);
    return (
        <AppContainer ctnRef={ctnRef}>
            <DigitalSolutionsMainHero />
            <MyCraft />
            <PillarsOfCraft />
            <TheProcess />
            <AreasOfPassion />
            <LetsWork />
        </AppContainer>
    )
}

export default Page