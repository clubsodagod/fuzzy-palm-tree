
import { AppContainer } from '@/app/components';
import { AnimatePresencePro } from '@/app/components/framer/AnimatePresencePro';
import { MotionDiv } from '@/app/components/framer/MotionDiv';
import { ICategory } from '@/library/db/models/category'
import { useRef } from 'react';
import slugify from 'slugify';
import CategoryHero from '../../_components/slug-page/CategoryHero';
import MotionPageWrapper from '@/app/components/common/MotionPageWrapper';
import MotionSectionWrapper from '@/app/components/common/MotionSectionWrapper';


// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 60;

// Next.js will server-render the page on-demand.
export const dynamicParams = true // or false, to 404 on unknown paths

// Generate static paths for categories.
export async function generateStaticParams() {
    const categoryResponse = await fetch('http://localhost:3000/api/blog/identifiers/category/get-all');
    const categories = await categoryResponse.json();

    return categories.categories.map((category: ICategory) => ({
        category: category.slug,
    }));
}

// Page component for the category.
export default async function Page({ params }: { params: { category: string } }) {

    const categoryResponse = await fetch(
        `http://localhost:3000/api/blog/identifiers/category/get-one?slug=${params.category}`,
        { cache: 'no-store', method: "GET" } // To ensure fresh data is fetched
    );
    const data = await categoryResponse.json();
    const category = data.category;

    const featuredBlogResponse = await fetch(
        `http://localhost:3000/api/blog/get/category?id=${category._id as unknown as string}&featured=true`,
        {
            cache: 'no-store',
            method: "GET",
        }
    );
    const ftData = await featuredBlogResponse.json()
    const featuredPosts = ftData.postsOfCategory;

    const allBlogResponse = await fetch(
        `http://localhost:3000/api/blog/get/category?id=${category._id as unknown as string}&featured=false`,
        {
            cache: 'no-store',
            method: "GET",
        }
    );
    const allPostsData = await allBlogResponse.json()
    const allPosts = allPostsData.postsOfCategory;

    // Return a loading state or error handling if needed
    if (!category) {
        return <body><div>Category not found</div></body>;
    }


    return (
        <MotionPageWrapper>
            <MotionSectionWrapper>
                <CategoryHero category={category} featuredPosts={featuredPosts} allPosts={allPosts} />
            </MotionSectionWrapper>
        </MotionPageWrapper>
    );
}