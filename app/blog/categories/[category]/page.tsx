
import { AppContainer } from '@/app/_components';
import { AnimatePresencePro } from '@/app/_components/framer/AnimatePresencePro';
import { MotionDiv } from '@/app/_components/framer/MotionDiv';
import CategoryModel, { ICategory } from '@/library/db/models/category'
import { useRef } from 'react';
import slugify from 'slugify';
import CategoryHero from '../../_components/slug-page/CategoryHero';
import MotionPageWrapper from '@/app/_components/common/MotionPageWrapper';
import MotionSectionWrapper from '@/app/_components/common/MotionSectionWrapper';
import { getAllIdentifiers } from '@/library/db/controllers/identifiers';
import { connectToMongoDB } from '@/library/db/db';


// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 3600;

// Next.js will server-render the page on-demand.
export const dynamicParams = false // or false, to 404 on unknown paths

// Generate static paths for categories.
export async function generateStaticParams() {
    
    await connectToMongoDB()
    const categoryResponse = await CategoryModel.find();
    const categories = categoryResponse

    
    return categories.map((category: ICategory) => ({
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
        <AppContainer>
            <MotionSectionWrapper>
                <CategoryHero category={category} featuredPosts={featuredPosts} allPosts={allPosts} />
            </MotionSectionWrapper>
        </AppContainer>
    );
}