import React from 'react'
import AboutModule from './_components/AboutModule'
import { ResolvingMetadata, Metadata } from 'next'




export const metadata: Metadata = {
    title: 'About | Maliek Davis',
    description: "Learn more about Maliek Davis, his journey as a software engineer, investor, and entrepreneur.",
    alternates: {
        canonical: '/about',
        languages: {
            'en-US': '/en-US',
        },
    },
    category: 'maliek'
}



const AboutPage = () => {
    return (
        <AboutModule />
    )
}

export default AboutPage