import MotionPageWrapper from '@/app/_hide/_components/common/MotionPageWrapper';
import MotionSectionWrapper from '@/app/_hide/_components/common/MotionSectionWrapper';
import { MotionDiv } from '@/app/_hide/_components/framer/MotionDiv';
import { MotionH1 } from '@/app/_hide/_components/framer/MotionH1';
import { MotionImg } from '@/app/_hide/_components/framer/MotionImg';
import { MotionP } from '@/app/_hide/_components/framer/MotionP';
import { useScreenContext } from '@/app/_hide/_context/sub-context/ScreenContext';
import { getAllPosts, getPostBySlug } from '@/library/db/controllers/blog';
import { getAllPostsClient, getAllPostsSlugClient, getPostBySlugClient } from '@/utility/blog-section/blog-page-functions';
import { Avatar } from '@mui/material';
import React from 'react';
import parse from "html-react-parser";
import { getAllIdentifiers } from '@/library/db/controllers/identifiers';
import { CategoryModel } from '@/app/_database/models';
import { IBlog, IBlogPopulated } from '@/app/_database/models/blog';
import { ICategory } from '@/app/_database/models/category';


// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.

// Generate static paths for categories.
export async function generateStaticParams() {
    'use server'
    const postsResponse = await getAllPosts()
    const posts = postsResponse;
    const categoryResponse = await getAllIdentifiers(CategoryModel)
    const categories = categoryResponse

    
    return [
        categories?.map((c:ICategory)=>{
            posts?.map((p:IBlog)=>(
                {category:c.slug, post:p.slug}
            ))
        })
    ];
}

export default async function BlogSlugPage ({ params }: { params: { post: string } }) {

    // Fetch the post data based on the slug
    const post: IBlogPopulated | null = await getPostBySlugClient(params.post);
    
    // If post data doesn’t exist, Next.js will automatically handle 404 based on `dynamicParams`
    if (!post) {
        return {
            notFound: true,
        };
    }
    
    const {
        title,
        content,
        author,
        featuredImg,
        createdAt
    } = post;
    
    // Parse the HTML content only if post content exists
    const parsedContent = content ? parse(content) : null;

    return (
        <MotionPageWrapper>
            <MotionDiv className={`w-full h-[45vh] overflow-hidden`}>
                <MotionImg className={`object-cover w-full h-full`} src={featuredImg.portrait} />
            </MotionDiv>
            <MotionSectionWrapper>
                <MotionDiv>
                    <MotionH1>{title} Page</MotionH1>

                    {/* Author component */}
                    <MotionDiv className={`flex flex-row gap-[1vw] justify-center items-center`}>
                        <MotionDiv>
                            <Avatar label={`${author.firstName}`} />
                        </MotionDiv>
                        <MotionDiv>
                            <MotionP>{author.firstName} {author.lastName}</MotionP>
                            <MotionP>{new Date(createdAt).toLocaleString()}</MotionP>
                        </MotionDiv>
                    </MotionDiv>

                    {/* Content component */}
                    <MotionDiv>{parsedContent}</MotionDiv>
                </MotionDiv>
            </MotionSectionWrapper>
        </MotionPageWrapper>
    );
}
