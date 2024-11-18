import React from 'react'
import { getBlogs } from '../_database/controllers/blog';
import BlogModule from './_components/BlogModule';
import { getPostBySlug } from '@/library/db/controllers/blog';

export default async function BlogPage() {


    // force creation at build time for SEO purposes
    const posts = await getBlogs();

    // destructure posts object
    const featuredPosts = posts?.featuredPosts;
    const allPosts = posts?.allPosts;
    const slugPost = posts?.slugPost;
    
    

    console.log(featuredPosts, '......###########################################EDDDDDDDDDDDDD#');
    


    return (
        <>
            <BlogModule 
            allPosts={allPosts}
            featuredPosts={featuredPosts}
            slug={slugPost}
            id='blog-main'
            />
        </>
    )
}
