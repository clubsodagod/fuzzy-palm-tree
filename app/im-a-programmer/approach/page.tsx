import React from 'react'
import ProgrammerApproachModule from '../_components/approach/ProgrammerApproachModule';
import { getAllTechnicalApplications, getAllTechnicalApplicationsClient } from '@/app/_database/controllers/technical-application';
import { getAllCaseStudies, getAllCaseStudiesClient } from '@/app/_database/controllers/case-study';
import { getBlogs } from '@/app/_database/controllers/blog';


// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 3600;



export default async function ProgrammerApproachPage() {

    const posts = await getBlogs();
    
    
    return (
        <ProgrammerApproachModule
        posts={posts?.featuredPosts}
        />
    )
}
