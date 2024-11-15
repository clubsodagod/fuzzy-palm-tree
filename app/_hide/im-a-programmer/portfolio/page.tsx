

import { AppContainer } from '@/app/_hide/_components';
import React from 'react'
import { CaseStudies, Demos, PortfolioMainHero, SocialValidation, Visuals } from '../_components/portfolio';
import { getAllTechnicalApplications, getAllTechnicalApplicationsClient } from '@/library/db/controllers/technical-applications';
import PortfolioModule from '../_components/portfolio/PortfolioModule';
import { getAllCaseStudies, getAllCaseStudiesClient } from '@/library/db/controllers/case-study';

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 3600;



export default async function PortfolioPage () {

    
    const technicalApplications = await getAllTechnicalApplications();
    const caseStudies = await getAllCaseStudies();
    
    if (technicalApplications && caseStudies) {
        return (
            <PortfolioModule technicalApplications={technicalApplications} caseStudies={caseStudies}/>
        )        
    }

}

