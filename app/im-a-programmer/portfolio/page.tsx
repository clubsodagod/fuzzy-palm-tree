

import React from 'react'
import { getAllTechnicalApplications } from '@/library/db/controllers/technical-applications';
import PortfolioModule from './_components/PortfolioModule';
import { getAllCaseStudies, } from '@/library/db/controllers/case-study';
import { ResolvingMetadata, Metadata } from 'next';

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 3600;


export const metadata: Metadata = {
    title: "Portfolio | Maliek Davis",
    description: "Explore Maliek Davis’ portfolio showcasing innovative software projects, technology solutions, and programming expertise.",
    alternates: {
        canonical: '/im-a-programmer/portfolio',
        languages: {
            'en-US': '/en-US',
        },
    },
    category: 'maliek portfolio'
}


export default async function PortfolioPage() {


    const technicalApplications = await getAllTechnicalApplications();
    const caseStudies = await getAllCaseStudies();


    return (
        <PortfolioModule technicalApplications={technicalApplications && technicalApplications} caseStudies={caseStudies && caseStudies} />
    )


}

