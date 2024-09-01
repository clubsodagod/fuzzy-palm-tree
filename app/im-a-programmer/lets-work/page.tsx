'use client'


import { AppContainer } from '@/app/components';
import React, { useRef } from 'react'
import { ConsultationOffers, ContactInformation, LocationSocialLinks } from '../_components/lets-work';

const LetsWorkPage = () => {
    
    const ctnRef = useRef<HTMLDivElement>(null);
    return (
        <AppContainer ctnRef={ctnRef}>
            <ConsultationOffers />
            <ContactInformation />
            <LocationSocialLinks />
        </AppContainer>
    )
}

export default LetsWorkPage