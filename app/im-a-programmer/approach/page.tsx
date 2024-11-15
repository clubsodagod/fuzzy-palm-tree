import React from 'react'
import ProgrammerApproachModule from '../_components/approach/ProgrammerApproachModule';
import { getBlogs } from '@/app/_database/controllers/blog';


// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 3600;



export default async function ProgrammerApproachPage() {

    

  // force creation at build time for SEO purposes
  const posts = await getBlogs();
  // destructure posts object
  const featuredPosts = posts?.featuredPosts;
  // const allPosts = posts?.allPosts;

    
    return (
        <ProgrammerApproachModule
        posts={featuredPosts}
        />
    )
}
