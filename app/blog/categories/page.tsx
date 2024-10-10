import MotionPageWrapper from '@/app/components/common/MotionPageWrapper'
import MotionSectionWrapper from '@/app/components/common/MotionSectionWrapper'
import { MotionDiv } from '@/app/components/framer/MotionDiv'
import { MotionH1 } from '@/app/components/framer/MotionH1'
import { MotionH2 } from '@/app/components/framer/MotionH2'
import { MotionH3 } from '@/app/components/framer/MotionH3'
import { MotionH5 } from '@/app/components/framer/MotionH5'
import { MotionH6 } from '@/app/components/framer/MotionH6'
import { MotionP } from '@/app/components/framer/MotionP'
import { ICategoryPopulated } from '@/library/db/models/category'
import { getAllCategoriesClient } from '@/utility/blog-section/blog-page-functions'
import React from 'react'
import MotionCategoryCard from '../_components/MotionCategoryCard'
import styles from '../styles.module.css'

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
