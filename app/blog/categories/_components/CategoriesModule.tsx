'use client'
import { getAllCategoriesClient } from '@/utility/blog-section/blog-page-functions'
import React from 'react'
import styles from '../../styles.module.css'
import { ICategoryPopulated } from '@/app/_database/models/category'
import { MotionDiv } from '@/app/_components/common/framer/MotionDiv'
import { MotionH2 } from '@/app/_components/common/framer/MotionH2'
import { MotionH6 } from '@/app/_components/common/framer/MotionH6'
import MotionPageWrapper from '@/app/_components/common/MotionPageWrapper'
import MotionSectionWrapper from '@/app/_components/common/SectionWrapper'
import MotionCategoryCard from '../../_components/MotionCategoryCard'
import Header from '@/app/_components/common/Header'
import ScrollCtnWrapper from '@/app/_components/common/ScrollCtnWrapper'
import ScrollableItemCtn from '@/app/_components/common/ScrollableItemCtn'
import { useAppContext } from '@/app/_context/AppContext'
import { useBlogPageSectionRefs } from '../../_utility/refs'
import IntersectionWatcher from '@/app/_utility/window/IntersectionWatcher'
import WindowUpdater from '@/app/_utility/window/WindowUpdater'

interface CategoriesModuleProps {
    categories: ICategoryPopulated[] | null;
}

const CategoriesModule: React.FC<CategoriesModuleProps> = ({ categories }) => {


    // handle url string function
    function url(slug: string) {
        return `/blog/categories/${slug}`
    }

    const {
        screen:{currentBreakpoint},
    } = useAppContext();

    const {
        mainCategoriesRef,categoriesRefs:refs,scrollRef
    } = useBlogPageSectionRefs();

    WindowUpdater(scrollRef);
    IntersectionWatcher({ refs });


    return (
        <MotionPageWrapper
            id='blog-categories-main'
            ctnRef={mainCategoriesRef}
        >

            {/* main hero component */}

            <Header
                headerLabel={`Categories`}
                tagLine={`Exploring With A Destination In Mind`}
                size={(['xs','sm']).includes(currentBreakpoint) ? 'md' : 'lg'}
            />


            {/* category cards */}
            <MotionDiv
                className='posts-ctn'
                id='blog-home'
            >

                <ScrollCtnWrapper>

                    <ScrollableItemCtn
                        id='blog-posts-ctn'
                        >
                        {
                            categories && categories.length > 0 &&
                            <>
                                {
                                    categories.map((c: ICategoryPopulated, i: number) => {
                                        return (
                                            <MotionDiv key={`${c._id} : ${i}`} className={`snap-x-wrapper ${styles.categoriesSnapX} sm:mr-[6vw]`}>
                                                <MotionCategoryCard category={c} />
                                            </MotionDiv>
                                        )
                                    })
                                }
                            </>

                        }
                    </ScrollableItemCtn>
                </ScrollCtnWrapper>
            </MotionDiv>


        </MotionPageWrapper>
    )
}

export default CategoriesModule