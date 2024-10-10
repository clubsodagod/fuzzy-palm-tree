
import React, { useRef } from 'react'
import { AppContainer } from '../components'
import { BioHero, CoreValues} from './_components'
import MotionPageWrapper from '../components/common/MotionPageWrapper'

const Page = () => {
    
    return (
        <MotionPageWrapper>
            
            <BioHero />
            <CoreValues />
        </MotionPageWrapper>
    )
}

export default Page