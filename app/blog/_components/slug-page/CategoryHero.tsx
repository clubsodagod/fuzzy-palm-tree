'use client'
import React from 'react'
import { IBlogPopulated } from '@/app/_database/models/blog';
import { ICategory } from '@/app/_database/models/category';
import MotionPageWrapper from '@/app/_components/common/MotionPageWrapper';
import Header from '@/app/_components/common/Header';
import BlogCard from '@/app/_components/common/blog/BlogCard';
import ScrollCtnWrapper from '@/app/_components/common/ScrollCtnWrapper';
import ScrollableItemCtn from '@/app/_components/common/ScrollableItemCtn';
import { Typography } from '@mui/material';
import { MotionDiv } from '@/app/_components/common/framer/MotionDiv';
import { useAppContext } from '@/app/_context/AppContext';
import { useBlogPageSectionRefs } from '../../_utility/refs';
import IntersectionWatcher from '@/app/_utility/window/IntersectionWatcher';
import WindowUpdater from '@/app/_utility/window/WindowUpdater';
import PostComingSoonCard from '@/app/_components/common/blog/PostComingSoonCard';

interface CategoryHeroProps {
    category: ICategory;
    featuredPosts: IBlogPopulated[];
    allPosts: IBlogPopulated[];
}

const CategoryHero: React.FC<CategoryHeroProps> = ({ category, featuredPosts, allPosts }) => {

    const {
        screen: { currentBreakpoint },
    } = useAppContext();

    const {
        blogCategoryFinanceRef, categoryFinanceRefs: refs, scrollRef
    } = useBlogPageSectionRefs()


    WindowUpdater(scrollRef);
    IntersectionWatcher({ refs });
    return (

        <MotionPageWrapper
            id={`blog-category-${category.slug}`}
            ctnRef={blogCategoryFinanceRef}
        >

            <Header
                headerLabel={`The Daily Davis`}
                size={(['xs', 'sm']).includes(currentBreakpoint) ? 'md' : 'lg'}
            />

            <MotionDiv className='hero-wrapper mt-[3vh] gap-3'>
                <Header
                    headerLabel={category.name.toUpperCase()}
                    tagLine={category.tagline}
                    size='sm'
                />



                <MotionDiv
                    className={`posts-ctn`}
                    id='blog-home'
                >
                    <Typography variant='h5' className={`text-center`}>
                        Featured
                    </Typography>
                    <ScrollCtnWrapper>

                        <ScrollableItemCtn
                            id='blog-posts-ctn'
                        >
                            <MotionDiv className='md:min-w-[12vw] h-full' />
                            {
                                featuredPosts.length > 0 ?
                                    <>
                                        {
                                            featuredPosts.map((fP: IBlogPopulated, i: number) => {
                                                return (
                                                    <MotionDiv key={`${fP._id}: ${i} ${fP.title}`}
                                                        className={`snap-x-wrapper `}
                                                    >
                                                        <BlogCard
                                                            post={fP}
                                                        />
                                                    </MotionDiv>
                                                )
                                            })
                                        }
                                    </>
                                    :
                                    <>
                                        <MotionDiv
                                            className={`snap-x-wrapper `}
                                        >
                                            <PostComingSoonCard
                                            />
                                        </MotionDiv>
                                    </>

                            }
                        </ScrollableItemCtn>
                    </ScrollCtnWrapper>
                </MotionDiv>

                <MotionDiv
                    className={`posts-ctn w-full`}
                    id='blog-home'
                >
                    <Typography variant='h6' className={`text-center`}>
                        All Posts
                    </Typography>
                    <ScrollCtnWrapper>
                        <ScrollableItemCtn
                            id={`blog-posts-ctn`}
                        >

                            <MotionDiv className='md:min-w-[12vw] h-full' />
                            {
                                allPosts.length > 0 ?
                                    <>
                                        {
                                            allPosts.map((fP: IBlogPopulated, i: number) => {
                                                return (

                                                    <MotionDiv key={`${fP._id}: ${i} ${fP.title}`}
                                                        className={`snap-x-wrapper lg:min-w-[25vw]`}
                                                        id='category-card'
                                                    >
                                                        <BlogCard
                                                            post={fP}
                                                        />
                                                    </MotionDiv>
                                                )
                                            })
                                        }
                                    </>
                                    :
                                    <>
                                        <MotionDiv
                                            className={`snap-x-wrapper `}
                                        >
                                            <PostComingSoonCard
                                            />
                                        </MotionDiv>
                                    </>
                            }

                        </ScrollableItemCtn>
                    </ScrollCtnWrapper>

                </MotionDiv>
            </MotionDiv>

        </MotionPageWrapper>

    )
}



export default CategoryHero;