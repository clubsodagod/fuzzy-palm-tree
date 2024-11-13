import MotionPageWrapper from '@/app/_components/common/MotionPageWrapper'
import MotionSectionWrapper from '@/app/_components/common/MotionSectionWrapper'
import { MotionDiv } from '@/app/_components/framer/MotionDiv'
import { MotionH1 } from '@/app/_components/framer/MotionH1'
import { MotionH2 } from '@/app/_components/framer/MotionH2'
import { MotionH3 } from '@/app/_components/framer/MotionH3'
import { MotionH5 } from '@/app/_components/framer/MotionH5'
import { MotionH6 } from '@/app/_components/framer/MotionH6'
import { MotionP } from '@/app/_components/framer/MotionP'
import CategoryModel, { ICategoryPopulated } from '@/library/db/models/category'
import { getAllCategoriesClient } from '@/utility/blog-section/blog-page-functions'
import React from 'react'
import MotionCategoryCard from '../_components/MotionCategoryCard'
import styles from '../styles.module.css'
import { connect } from 'http2'
import { connectToMongoDB } from '@/library/db/db'
import { SubcategoryModel } from '@/library/db/models'

export default async function CategoriesPage() {

    await connectToMongoDB()
    await SubcategoryModel.find()
    const categoriesResponse = await CategoryModel.find().populate('subcategories') as unknown as ICategoryPopulated[];

    let categories

    if (categories) {
        categories = categoriesResponse
    }

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
