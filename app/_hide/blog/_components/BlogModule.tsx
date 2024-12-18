"use client"

import React from 'react'
import styles from '../styles.module.css'
import { Header, ScrollableItemCtn } from '@/app/_hide/_components'
import MotionPageWrapper from '@/app/_hide/_components/common/MotionPageWrapper'
import MotionSectionWrapper from '@/app/_hide/_components/common/MotionSectionWrapper'
import { MotionDiv } from '@/app/_hide/_components/framer/MotionDiv'
import { MotionH5 } from '@/app/_hide/_components/framer/MotionH5'
import { MotionP } from '@/app/_hide/_components/framer/MotionP'
import BlogCard2D from './BlogCard'
import { IBlogPopulated } from '@/app/_database/models/blog'

export interface BlogModuleProps {
    featuredPosts: IBlogPopulated[];
    allPosts: IBlogPopulated[];
}

const BlogModule: React.FC<BlogModuleProps> = ({
    featuredPosts,
    allPosts
}) => {

    return (
        <MotionPageWrapper>

            <MotionSectionWrapper>

                <Header
                    headerLabel={`The Daily Davis`}
                    tagLine='Fresh. Relevant. Mind Expanding.'
                />



                {/* Featured Posts Hero Component */}
                <MotionDiv
                    className={`${styles.sectionCtn}`}
                >
                    <MotionDiv
                        className={`${styles.sectionHeaderCtn}`}
                    >
                        <MotionH5
                            className={`${styles.sectionHeaderTxt} font-bold`}
                        >
                            Featured Posts
                        </MotionH5>
                    </MotionDiv>

                    <ScrollableItemCtn
                    >
                        {
                            featuredPosts.length > 0 ?
                                <>
                                    {
                                        featuredPosts.map((p: IBlogPopulated, i: number) => {
                                            return (
                                                <MotionDiv
                                                    key={`${p._id}`}
                                                >
                                                    <BlogCard2D
                                                        blog={p}
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

                </MotionDiv>


                {/* All Posts Hero Component */}
                <MotionDiv
                    className={`${styles.sectionCtn}`}
                >
                    <MotionDiv
                        className={`${styles.sectionHeaderCtn}`}
                    >
                        <MotionH5
                            className={`${styles.sectionHeaderTxt} font-bold`}
                        >
                            All Posts
                        </MotionH5>
                    </MotionDiv>

                    {
                        featuredPosts.length > 0 ?
                            <>
                                {
                                    allPosts.map((p: IBlogPopulated, i: number) => {
                                        return (
                                            <MotionDiv
                                                key={`${p._id}`}
                                            >
                                                <BlogCard2D
                                                    blog={p}
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
                </MotionDiv>

            </MotionSectionWrapper>

        </MotionPageWrapper>
    )
}



export default BlogModule;