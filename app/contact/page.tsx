'use client'


import React, { useRef } from 'react'
import { AppContainer } from '../components';

const ContactPage = () => {
    
    const ctnRef = useRef<HTMLDivElement>(null);
    return (
        <AppContainer ctnRef={ctnRef}>
            Contact Page
        </AppContainer>
    )
}

export default ContactPage