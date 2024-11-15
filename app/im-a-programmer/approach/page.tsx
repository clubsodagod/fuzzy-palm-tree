import React from 'react'
import ProgrammerApproachModule from '../_components/approach/ProgrammerApproachModule';
import { getAllTechnicalApplications, getAllTechnicalApplicationsClient } from '@/app/_database/controllers/technical-application';
import { getAllCaseStudies, getAllCaseStudiesClient } from '@/app/_database/controllers/case-study';


// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 3600;



export default async function ProgrammerApproachPage() {

    const technicalApplications = await getAllTechnicalApplicationsClient();
    const caseStudies = await getAllCaseStudiesClient();
    
    console.log(caseStudies, technicalApplications);
    
    return (
        <ProgrammerApproachModule
            caseStudies={caseStudies}
            technicalApplications={technicalApplications}
        />
    )
}
