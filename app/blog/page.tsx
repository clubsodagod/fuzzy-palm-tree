import React from 'react'
import { getBlogs } from '../_database/controllers/blog';
import BlogModule from './_components/BlogModule';
import { getPostBySlug } from '@/library/db/controllers/blog';
import { ResolvingMetadata, Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Blog | Maliek Davis',
    description: "Explore the blog by Maliek Davis, covering topics in technology, real estate, and finance.",
    alternates: {
        canonical: '/blog',
        languages: {
            'en-US': '/en-US',
        },
    },
    category: 'blog'
}


export default async function BlogPage() {


    // force creation at build time for SEO purposes
    const posts = await getBlogs();

    // destructure posts object
    const featuredPosts = posts?.featuredPosts;
    const allPosts = posts?.allPosts;
    const slugPost = posts?.slugPost;






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
