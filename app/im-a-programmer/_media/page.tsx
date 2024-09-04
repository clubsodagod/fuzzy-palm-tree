'use client'

import { AppContainer } from '@/app/components';
import React, { useRef } from 'react'

const MediaPage = () => {
    
    const ctnRef = useRef<HTMLDivElement>(null);
    return (
        <AppContainer ctnRef={ctnRef}>
            {''}
        </AppContainer>
    )
}

export default MediaPage