import MotionPageWrapper from '@/app/components/common/MotionPageWrapper';
import MotionSectionWrapper from '@/app/components/common/MotionSectionWrapper';
import { MotionDiv } from '@/app/components/framer/MotionDiv';
import { MotionH1 } from '@/app/components/framer/MotionH1';
import { MotionImg } from '@/app/components/framer/MotionImg';
import { MotionP } from '@/app/components/framer/MotionP';
import { useScreenContext } from '@/app/context/sub-context/ScreenContext';
import { getPostBySlug } from '@/library/db/controllers/blog';
import { IBlog, IBlogPopulated } from '@/library/db/models/blog';
import { getAllPostsClient, getPostBySlugClient } from '@/utility/blog-section/blog-page-functions';
import { Avatar } from '@mui/material';
import React from 'react';
import parse from "html-react-parser";


// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 60;

// Next.js will server-render the page on-demand.
export const dynamicParams = true // or false, to 404 on unknown paths

// Generate static paths for categories.
export async function generateStaticParams() {
    const posts = await getAllPostsClient()
    
    return posts.map((post: IBlogPopulated) => ({
        post: post.slug,
    }));
}

export default async function page ({ params }: { params: { post: string } }) {

    const post:IBlogPopulated = await getPostBySlugClient(params.post);
    
    const {
        title,
        content,
        author,
        featuredImg,
        featuredVideo,
        category,
        subcategories,
        tags,
        createdAt
    } = post;
    
    const parsedContent = parse(content);
    

    return (
        <MotionPageWrapper>
            <MotionDiv
                className={`w-full h-[45vh]  overflow-hidden`}
            >
                <MotionImg className={`object-cover w-full h-full`} src={featuredImg.portrait} />
            </MotionDiv>
            <MotionSectionWrapper>
                <MotionDiv>
                    <MotionH1>
                        {post?.title} Page
                    </MotionH1>


                    {/* author component */}
                    <MotionDiv
                        className={`flex flex-row gap-[1vw] justify-center items-center`}
                    >
                        <MotionDiv>
                            <Avatar label={`${author.firstName}`} />
                        </MotionDiv>

                        <MotionDiv>
                            <MotionP>{author.firstName} {author.lastName}</MotionP>
                            <MotionP>{createdAt.toLocaleString()}</MotionP>
                        </MotionDiv>
                    </MotionDiv>

                    {/* content component */}
                    <MotionDiv>
                        {parsedContent}
                    </MotionDiv>
                </MotionDiv>
            </MotionSectionWrapper>
        </MotionPageWrapper>
    )
}
