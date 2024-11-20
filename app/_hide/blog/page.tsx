
import React from 'react'
import { initBlogHomePage, } from '@/utility/blog-section/blog-page-functions';
import BlogModule from './_components/BlogModule';



// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 3600;


export default async function BlogPage() {

    // force creation at build time for SEO purposes
    const posts = await initBlogHomePage();
    // destructure posts object
    const {
        featuredPosts,
        allPosts
    } = posts!;


    if (featuredPosts && allPosts) {
        return  (
            <BlogModule 
            featuredPosts={featuredPosts}
            allPosts={allPosts}
            />
        )
    }
}

