import React from 'react'
import ContactModule from './_components/ContactModule'
import { ResolvingMetadata, Metadata } from 'next'
import { baseUrl } from '../_library/const/nav'




export const metadata: Metadata = {
    title: 'Contact | Maliek Davis',
    description: 'Get in touch with Maliek Davis for inquiries about technology solutions, real estate investment, or collaboration.',
    alternates: {
        canonical: '/contact',
        languages: {
            'en-US': '/en-US',
        },
    },
    category: 'maliek'
}

const ContactPage = () => {





    return (
        <>
            <ContactModule />
        </>
    )
}

export default ContactPage