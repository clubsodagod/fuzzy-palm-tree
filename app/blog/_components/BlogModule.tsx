"use client"

import React from 'react'
import styles from './styles.module.css'
import BlogCard2D from './BlogCard'
import { IBlogPopulated } from '@/app/_database/models/blog'
import MotionPageWrapper from '@/app/_components/common/MotionPageWrapper'
import { MotionDiv } from '@/app/_components/common/framer/MotionDiv'
import { MotionH5 } from '@/app/_components/common/framer/MotionH5'
import { MotionP } from '@/app/_components/common/framer/MotionP'
import { HeroProps } from '@/app/_library/types/common'
import BlogCard from '@/app/_components/common/blog/BlogCard'
import ScrollCtnWrapper from '@/app/_components/common/ScrollCtnWrapper'
import ScrollableItemCtn from '@/app/_components/common/ScrollableItemCtn'
import Header from '@/app/_components/common/Header'
import { useAppContext } from '@/app/_context/AppContext'
import { MotionH4 } from '@/app/_components/common/framer/MotionH4'
import { Typography } from '@mui/material'
import { BlogModel, CategoryModel, SubcategoryModel, UserModel } from '@/app/_database/models'
import { connectToMongoDB } from '@/app/_database/db'

export interface BlogModuleProps {
    featuredPosts: IBlogPopulated[] | undefined;
    allPosts: IBlogPopulated[] | undefined;
    slug: IBlogPopulated | undefined;
    id: string;
}

const BlogModule: React.FC<BlogModuleProps> = ({
    featuredPosts,
    allPosts,
    slug,
    id,
}) => {
    const {
        screen: { currentBreakpoint }
    } = useAppContext()

    // console.log(slug, featuredPosts);
    
    // const singlePost = async () => {
    //     await connectToMongoDB();
    //     await UserModel.find();
    //     await CategoryModel.find()
    //     await SubcategoryModel.find()
    //     const res = await BlogModel.findOne().populate('subcategories')
    //     console.log(res);
        
    //     return res
    // }
    
    // console.log(singlePost());
    

    return (
        <MotionPageWrapper
            id={id}
        >

            {/* <MotionDiv
                className='hero-wrapper'
            > */}

            <Header
                headerLabel={`The Daily Davis`}
                tagLine='Fresh. Relevant. Mind Expanding.'
                size={(['xs', 'sm', 'md']).includes(currentBreakpoint) ? 'md' : 'lg'}
            />



            <MotionDiv
                className={`${styles.sectionHeaderCtn}`}
            >
                <Typography variant='h5'>Featured Posts</Typography>

            </MotionDiv>
            {/* Featured Posts Hero Component */}

            {/* </MotionDiv> */}
            <MotionDiv
                className={`posts-ctn `}
                id='blog-home'
            >

                <ScrollCtnWrapper>
                    <ScrollableItemCtn
                        id='blog-posts-ctn'
                    >
                        {
                            featuredPosts && featuredPosts.length > 0 ?
                                <>
                                    {
                                        featuredPosts?.map((p: IBlogPopulated, i: number) => {
                                            return (
                                                <MotionDiv
                                                    key={`${p._id}`}
                                                    className='snap-x-wrapper'
                                                >
                                                    <BlogCard
                                                        post={p}
                                                        id='blog-page-featured'
                                                    />
                                                </MotionDiv>

                                            )
                                        })
                                    }
                                </>
                                :
                                <MotionP>
                                    On the search for those articles...
                                </MotionP>
                        }
                    </ScrollableItemCtn>
                </ScrollCtnWrapper>


            </MotionDiv>


            <MotionDiv
                className={`${styles.sectionHeaderCtn}`}
            >
                <Typography variant='h5'>Latest</Typography>

            </MotionDiv>
            {/* All Posts Hero Component */}
            <MotionDiv
                className={`posts-ctn`}
                id='blog-home'
            >

                <ScrollCtnWrapper>
                    <MotionDiv></MotionDiv>
                    <ScrollableItemCtn
                        id='blog-posts-ctn'
                    >
                        {
                            allPosts && allPosts.length > 0 ?
                                <>
                                    {
                                        allPosts.map((p: IBlogPopulated, i: number) => {
                                            return (
                                                <MotionDiv
                                                    key={`${p._id}`}
                                                >
                                                    <BlogCard
                                                        id='blog-page-latest'
                                                        post={p}
                                                    />
                                                </MotionDiv>

                                            )
                                        })
                                    }
                                </>
                                :
                                <MotionP>
                                    On the search for those articles...
                                </MotionP>
                        }
                    </ScrollableItemCtn>
                </ScrollCtnWrapper>

            </MotionDiv>

        </MotionPageWrapper>
    )
}



export default BlogModule;