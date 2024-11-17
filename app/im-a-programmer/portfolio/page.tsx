

import React from 'react'
import { getAllTechnicalApplications } from '@/library/db/controllers/technical-applications';
import PortfolioModule from './_components/PortfolioModule';
import { getAllCaseStudies, } from '@/library/db/controllers/case-study';

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 3600;



export default async function PortfolioPage () {

    
    const technicalApplications = await getAllTechnicalApplications();
    const caseStudies = await getAllCaseStudies();
    
    
        return (
            <PortfolioModule technicalApplications={technicalApplications && technicalApplications} caseStudies={caseStudies && caseStudies}/>
        )        
   

}

