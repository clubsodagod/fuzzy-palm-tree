

import CategoryHero from '../../_components/slug-page/CategoryHero';
import { connectToMongoDB } from '@/library/db/db';
import { CategoryModel, SubcategoryModel } from '@/app/_database/models';
import { ICategory } from '@/app/_database/models/category';
import { getPostBySlugClient } from '@/utility/blog-section/blog-page-functions';
import { ResolvingMetadata, Metadata } from 'next';
import { getIdentifier } from '@/library/db/controllers/identifiers';
import { baseUrl } from '@/app/_library/const/nav';


// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 3600;

// Next.js will server-render the page on-demand.
export const dynamicParams = false // or false, to 404 on unknown paths

type Props = {
    params: { post: string, category: string }
}
export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {

    await connectToMongoDB();

    // fetch data
    await connectToMongoDB();
    await SubcategoryModel.find()
    const categoryResponse = await CategoryModel.findOne({ slug: params.category }).populate('subcategories');
    const category  = categoryResponse;



    return {
        title: `Blog - ${category?.name} | Maliek Davis`,
        description: category?.description,
        alternates: {
            canonical: `/blog/categories/${params.category}`,
            languages: {
                'en-US': '/en-US',
            },
        },
        category: category?.name
    }
}
// Generate static paths for categories.
export async function generateStaticParams() {

    await connectToMongoDB()
    const categoryResponse = await CategoryModel.find();
    const categories = categoryResponse


    return categories.map((category: ICategory) => ({
        category: category.slug,
    }));
}

// DynamicCategoryPage component for the category.
export default async function DynamicCategoryPage({ params }: { params: { category: string } }) {

    const categoryResponse = await fetch(
        `${baseUrl}/api/blog/identifiers/category/get-one?slug=${params.category}`,
        { cache: 'no-store', method: "GET" } // To ensure fresh data is fetched
    );
    const data = await categoryResponse.json();
    const category = data.category;

    const featuredBlogResponse = await fetch(
        `${baseUrl}/api/blog/get/category?id=${category._id as unknown as string}&featured=true`,
        {
            cache: 'no-store',
            method: "GET",
        }
    );
    const ftData = await featuredBlogResponse.json()
    const featuredPosts = ftData.postsOfCategory;

    const allBlogResponse = await fetch(
        `${baseUrl}/api/blog/get/category?id=${category._id as unknown as string}&featured=false`,
        {
            cache: 'no-store',
            method: "GET",
        }
    );
    const allPostsData = await allBlogResponse.json()
    const allPosts = allPostsData.postsOfCategory;




    return (

        <CategoryHero category={category} featuredPosts={featuredPosts} allPosts={allPosts} />
    );
}