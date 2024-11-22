

import CategoryHero from '../../_components/slug-page/CategoryHero';
import { connectToMongoDB } from '@/library/db/db';
import { CategoryModel } from '@/app/_database/models';
import { ICategory } from '@/app/_database/models/category';


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
        `https://fuzzy-palm-tree.vercel.app/api/blog/identifiers/category/get-one?slug=${params.category}`,
        { cache: 'no-store', method: "GET" } // To ensure fresh data is fetched
    );
    const data = await categoryResponse.json();
    const category = data.category;

    const featuredBlogResponse = await fetch(
        `https://fuzzy-palm-tree.vercel.app/api/blog/get/category?id=${category._id as unknown as string}&featured=true`,
        {
            cache: 'no-store',
            method: "GET",
        }
    );
    const ftData = await featuredBlogResponse.json()
    const featuredPosts = ftData.postsOfCategory;

    const allBlogResponse = await fetch(
        `https://fuzzy-palm-tree.vercel.app/api/blog/get/category?id=${category._id as unknown as string}&featured=false`,
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