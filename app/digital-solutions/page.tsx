import React from 'react'
import { AppContainer } from '../components'
import { DigitalSolutionsMainHero, LetsWork, MyCraft,  PillarsOfCraft, TheProcess } from './_components'

const page = () => {
    return (
        <AppContainer>
            <DigitalSolutionsMainHero />
            <MyCraft />
            <PillarsOfCraft />
            <TheProcess />
            <LetsWork />
        </AppContainer>
    )
}

export default page