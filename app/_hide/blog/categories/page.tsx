import MotionPageWrapper from '@/app/_hide/_components/common/MotionPageWrapper'
import MotionSectionWrapper from '@/app/_hide/_components/common/MotionSectionWrapper'
import { MotionDiv } from '@/app/_hide/_components/framer/MotionDiv'
import { MotionH1 } from '@/app/_hide/_components/framer/MotionH1'
import { MotionH2 } from '@/app/_hide/_components/framer/MotionH2'
import { MotionH3 } from '@/app/_hide/_components/framer/MotionH3'
import { MotionH5 } from '@/app/_hide/_components/framer/MotionH5'
import { MotionH6 } from '@/app/_hide/_components/framer/MotionH6'
import { MotionP } from '@/app/_hide/_components/framer/MotionP'
import { getAllCategoriesClient } from '@/utility/blog-section/blog-page-functions'
import React from 'react'
import MotionCategoryCard from '../_components/MotionCategoryCard'
import styles from '../styles.module.css'
import { ICategoryPopulated } from '@/app/_database/models/category'

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
                    categories && categories.length > 0 &&
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
