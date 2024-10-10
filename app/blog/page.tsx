
import React, { useEffect, useRef, useState } from 'react'
import { AppContainer, SectionWrapper } from '../components';
import { motion } from 'framer-motion';
import styles from "./styles.module.css";
import { IBlog, IBlogPopulated } from '@/library/db/models/blog';
import { initBlogHomePageClient,} from '@/utility/blog-section/blog-page-functions';
import BlogCard2D from './_components/BlogCard';
import MotionPageWrapper from '../components/common/MotionPageWrapper';
import MotionSectionWrapper from '../components/common/MotionSectionWrapper';
import { MotionDiv } from '../components/framer/MotionDiv';
import { MotionH3 } from '../components/framer/MotionH3';
import { MotionH5 } from '../components/framer/MotionH5';
import { MotionH6 } from '../components/framer/MotionH6';
import { MotionP } from '../components/framer/MotionP';



// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 3600;



export default async function BlogPage() {

    // force creation at build time for SEO purposes
    const posts = await initBlogHomePageClient();
    // destructure posts object
    const {
        featuredPosts,
        allPosts
    } = posts!;


    return (
        <MotionPageWrapper>

            <MotionSectionWrapper>
                <MotionDiv
                    className={`${styles.headerWrapper}`}
                >
                    <MotionH3>
                        The Davis Daily
                    </MotionH3>
                    <MotionH6>
                        All of the latest articles surrounding various interest. Enjoy.
                    </MotionH6>
                </MotionDiv>

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

