'use client'

import React, { useRef } from 'react'
import { AppContainer } from '@/app/_components';


const DigitalSolutionsMain = () => {
    
    const ctnRef = useRef<HTMLDivElement>(null);
    return (
        <AppContainer ctnRef={ctnRef}>
            {''}
        </AppContainer>
    )
}

export default DigitalSolutionsMain