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
import CategoriesModule from './_components/CategoriesModule'
import { ResolvingMetadata, Metadata } from 'next'



export const metadata: Metadata = {
    title: 'Categories | Maliek Davis',
    description: "Browse blog categories by Maliek Davis, featuring posts on technology and business.",
    alternates: {
        canonical: '/blog/categories',
        languages: {
            'en-US': '/en-US',
        },
    },
    category: 'blog'
}


export default async function CategoriesPage() {

    const res = await getAllCategoriesClient();

    const categories = res


    console.log(res);



    return (
        <CategoriesModule
            categories={categories}
        />
    )
}
