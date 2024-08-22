import React from 'react'
import { AppContainer } from '../components'
import { BioHero, CoreValues, MyMission } from './_components'

const page = () => {
    return (
        <AppContainer>
            <BioHero />
            <MyMission />
            <CoreValues />
        </AppContainer>
    )
}

export default page