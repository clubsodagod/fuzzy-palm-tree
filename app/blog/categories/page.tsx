import { getAllCategoriesClient } from '@/utility/blog-section/blog-page-functions'
import React from 'react'
import MotionCategoryCard from '../_components/MotionCategoryCard'
import styles from '../_components/styles.module.css'
import { ICategoryPopulated } from '@/app/_database/models/category'
import { MotionDiv } from '@/app/_components/common/framer/MotionDiv'
import { MotionH2 } from '@/app/_components/common/framer/MotionH2'
import { MotionH6 } from '@/app/_components/common/framer/MotionH6'
import MotionPageWrapper from '@/app/_components/common/MotionPageWrapper'
import MotionSectionWrapper from '@/app/_components/common/SectionWrapper'

export default async function CategoriesPage() {

    const categories = await getAllCategoriesClient();

    // handle url string function
    function url(slug: string) {
        return `/blog/categories/${slug}`
    }



    return (
        <MotionPageWrapper>
            <MotionSectionWrapper>

                {/* main hero component */}
                <MotionDiv
                    className={`${styles.categoryPageMainHero}`}
                >
                    <MotionH2>
                        Categories
                    </MotionH2>
                    <MotionH6>
                        Exploring with a destination in mind
                    </MotionH6>
                </MotionDiv>

                {/* category cards */}
                {
                    categories.length > 0 &&
                    <MotionDiv
                    className={`${styles.categoriesCardCtn}`}
                    >
                        {
                            categories.map((c: ICategoryPopulated, i: number) => {
                                return (
                                    <MotionDiv key={`${c._id} : ${i}`}>
                                        <MotionCategoryCard category={c} />
                                    </MotionDiv>
                                )
                            })
                        }
                    </MotionDiv>
                }

            </MotionSectionWrapper>
        </MotionPageWrapper>
    )
}
