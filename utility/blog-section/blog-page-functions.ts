import { Router } from "next/router";
import { InitDataFunction } from "../admin/identifiers/create-card";
import parse from "html-react-parser";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { IBlogPopulated } from "@/app/_database/models/blog";
import { ICategoryPopulated } from "@/app/_database/models/category";


export type InitBlogHomePageFunction = () => Promise<{
    featuredPosts: IBlogPopulated[];
    allPosts: IBlogPopulated[];
} | null>;

// Initialize the blog home page data.
export const initBlogHomePage: InitBlogHomePageFunction = async () => {
    try {
        const featuredResponse = await fetch('https://fuzzy-palm-tree.vercel.app//api/blog/get/featured', {
            method: 'GET', cache:'no-store'
        });

        const allPostsResponse = await fetch('https://fuzzy-palm-tree.vercel.app/api/blog/get/all', {
            method: 'GET', cache:'no-store'
        });

        // Validate responses by checking their status.
        if (featuredResponse.ok && allPostsResponse.ok) {
            const featuredPosts = await featuredResponse.json().then((res) => res.featuredPosts as IBlogPopulated[]);
            const allPostsUnfiltered = await allPostsResponse.json().then((res) => res.posts as IBlogPopulated[]);

            // Filter out posts that are already featured.
            const allPostsFiltered = allPostsUnfiltered.filter((p) => !p.featured);

            return { featuredPosts, allPosts:allPostsFiltered };
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error initializing blog home page:', error);
        return null;
    }
};


// get all posts
export async function getAllPostsClient() {

    const postsResponse = await fetch('http://localhost:3000/api/blog/get/all',
        { cache: 'no-store', method: "GET" });
    const posts = await postsResponse.json().then((res) => res.posts);

    return posts
}
// get all posts
export async function getAllPostsSlugClient() {

    const postsResponse = await fetch('http://localhost:3000/api/blog/get/all',
        {  method: "GET", cache:'force-cache' });
    const posts = await postsResponse.json().then((res) => res.posts);

    return posts
}

// get post by slug
export async function getPostBySlugClient(slug: string) {

    const postResponse = await fetch(`http://localhost:3000/api/blog/get/slug?slug=${slug}`,
        { cache: 'no-store', method: "GET" });
    const post = await postResponse.json().then((res) => res.post);
    console.log(post);

    return post
}

// get all categories client function
export async function getAllCategoriesClient() {

    // use fetch request to get categories
    const categoriesResponse = await fetch('http://localhost:3000/api/blog/identifiers/category/get-all', {
        method: "GET", cache: "no-store",
    });

    // validate response
    if (categoriesResponse.ok) {
        const categories = await categoriesResponse.json().then((res) => res.categories);
        return categories as ICategoryPopulated[]
    } else {
        return null
    }
}
// get all categories client function
export async function getAllCategories() {

    // use fetch request to get categories
    const categoriesResponse = await fetch('https://fuzzy-palm-tree.vercel.app/api/blog/identifiers/category/get-all', {
        method: "GET"
    });

    // validate response
    if (categoriesResponse.ok) {
        const categories = await categoriesResponse.json().then((res) => res.categories);
        return categories
    } else {
        return null
    }
}


// get all categories client function
export async function getAllCategoriesDynamicClient() {

    // use fetch request to get categories
    const categoriesResponse = await fetch('http://localhost:3000/api/blog/identifiers/category/get-all', {
        method: "GET", cache: "no-store",
    });

    // validate response
    if (categoriesResponse.ok) {
        const categories = await categoriesResponse.json().then((res) => res.categories);
        return categories
    } else {
        return null
    }
}

// route handler 
export async function goTo(router: AppRouterInstance, url: string) {
    return router.push(url);
}