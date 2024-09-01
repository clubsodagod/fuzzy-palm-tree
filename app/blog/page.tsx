'use client'

import React, { useRef } from 'react'
import { AppContainer } from '../components';

const BlogPage = () => {
    
    const ctnRef = useRef<HTMLDivElement>(null);
    return (
        <AppContainer ctnRef={ctnRef}>
            Blog Page
        </AppContainer>
    )
}

export default BlogPage