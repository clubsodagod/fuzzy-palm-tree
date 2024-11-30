import React from 'react'
import DigitalSolutionsModule from './_components/DigitalSolutionsModule'
import { ResolvingMetadata, Metadata } from 'next'



export const metadata: Metadata = {
    title: "Digital Solutions | Maliek Davis",
    description: "Explore innovative digital solutions by Maliek Davis for technology, software development, and process automation.",
    alternates: {
        canonical: '/im-a-programmer/digital-solutions',
        languages: {
            'en-US': '/en-US',
        },
    },
    category: 'digital solutions'
}


const DigitalSolutionsPage = () => {


    return (
        <DigitalSolutionsModule />
    )
}

export default DigitalSolutionsPage