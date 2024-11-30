import React from 'react'
import ProgrammerApproachModule from '../_components/approach/ProgrammerApproachModule';
import { getBlogs } from '@/app/_database/controllers/blog';
import { ResolvingMetadata, Metadata } from 'next';


// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 3600;


export const metadata: Metadata = {
  title: "Approach | Maliek Davis",
  description: "Learn Maliek Davis’ approach to software development, focusing on clean architecture, agile methods, and continuous improvement.",
  alternates: {
    canonical: '/im-a-programmer/approach',
    languages: {
      'en-US': '/en-US',
    },
  },
  category: 'maliek approach'
}

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
