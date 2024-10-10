import React from 'react'
import styles from '../components.module.css'
import { MotionDiv } from '@/app/components/framer/MotionDiv';
import { MotionH3 } from '@/app/components/framer/MotionH3';
import { ICategory } from '@/library/db/models/category';
import { MotionP } from '@/app/components/framer/MotionP';
import { IBlogPopulated } from '@/library/db/models/blog';
import BlogCard2D from '../BlogCard';
import { MotionH6 } from '@/app/components/framer/MotionH6';
import { MotionH5 } from '@/app/components/framer/MotionH5';


const CategoryHero: React.FC<{ 
    category: ICategory, featuredPosts: IBlogPopulated[], allPosts: IBlogPopulated[],
}> = ({ category, featuredPosts, allPosts }) => {

    return (
        <MotionDiv
            className={`${styles.categoryHeroWrapper} flex flex-col gap-[6vh]`}
        >

            <MotionDiv
                className={`flex flex-col`}
            >
                <MotionH3>
                    The Daily Davis
                </MotionH3>
                <MotionH5>
                    {category.name}
                </MotionH5>
                <MotionP>
                    {category.tagline}
                </MotionP>
            </MotionDiv>


            <MotionDiv
            className={`flex flex-col gap-[2vh]`}
            >
                <MotionH6>
                    Featured
                </MotionH6>
                <MotionDiv
                    className={`overflow-x-auto w-full flex flex-row `}
                >
                    {
                        featuredPosts.map((fP: IBlogPopulated, i: number) => {
                            return (
                                <MotionDiv key={`${fP._id}: ${i} ${fP.title}`}
                                    className={`mr-[3vw]`}
                                >
                                    <BlogCard2D
                                        blog={fP}
                                    />
                                </MotionDiv>
                            )
                        })
                    }

                </MotionDiv>
            </MotionDiv>

            <MotionDiv>
                <MotionH6>
                    All Posts
                </MotionH6>
                <MotionDiv
                    className={`overflow-x-auto w-full`}
                >
                    {
                        allPosts.map((fP: IBlogPopulated, i: number) => {
                            return (
                                <MotionDiv key={`${fP._id}: ${i} ${fP.title}`}>
                                    <BlogCard2D
                                        blog={fP}
                                    />
                                </MotionDiv>
                            )
                        })
                    }

                </MotionDiv>
            </MotionDiv>
        </MotionDiv>
    )
}



export default CategoryHero;