'use client'
import React from 'react'
import { AppContainer } from '../components'
import { 
    AreasOfPassion, 
    DigitalSolutionsMainHero, 
    LetsWork, 
    MyCraft,  
    PillarsOfCraft, 
    TheProcess, 
} from './_components'

const page = () => {
    return (
        <AppContainer>
            <DigitalSolutionsMainHero />
            <MyCraft />
            <PillarsOfCraft />
            <TheProcess />
            <AreasOfPassion />
            <LetsWork />
        </AppContainer>
    )
}

export default page