
import { getAllPostsClient, getAllPostsSlugClient, getPostBySlugClient } from '@/utility/blog-section/blog-page-functions';
import React from 'react';
import parse from "html-react-parser";
import { CategoryModel } from '@/app/_database/models';
import Blog, { IBlog, IBlogPopulated } from '@/app/_database/models/blog';
import { ICategory } from '@/app/_database/models/category';
import SlugPageModule from './_components/SlugPageModule';
import { connectToMongoDB } from '@/library/db/db';
import { ResolvingMetadata, Metadata } from 'next';


// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 3600;

// Next.js will server-render the page on-demand.
export const dynamicParams = true // or false, to 404 on unknown paths

type Props = {
    params: { post: string, category:string }
}
export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {

    await connectToMongoDB();

    // read route params

    // fetch data
    const postResponse = await getPostBySlugClient(params.post);
    const post = postResponse;



    return {
        title: `${post.title} | Maliek Davis`,
        description:post.description,
        alternates: {
            canonical: `/blog/categories/${params.category}/${params.post}`,
            languages: {
                'en-US': '/en-US',
            },
        },
        category: post.category
    }
}
// Generate static paths for categories.
export async function generateStaticParams() {

    await connectToMongoDB();
    const postsResponse = await Blog.find();
    const posts = postsResponse;
    const categoryResponse = await CategoryModel.find();
    const categories = categoryResponse;

    console.log();


    return [
        categories?.map((c: ICategory) => {
            posts?.map((p: IBlog) => (
                { category: c.slug, post: p.slug }
            ))
        })
    ];
}

export default async function BlogSlugPage({ params }: { params: { post: string, category:string } }) {

    // Fetch the post data based on the slug
    const post: IBlogPopulated | null = await getPostBySlugClient(params.post);

    return (
        <SlugPageModule
            post={post}
        />

    );
}
