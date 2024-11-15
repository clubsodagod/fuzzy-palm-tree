import { connectToMongoDB } from "../db";
import Blog, { IBlogPopulated } from "../models/blog";
import CategoryModel from "../models/category";
import User from "../models/user";

// GET featured blog post
export const getAllPosts = async() => {

    try {
        
        // connect to database
        await connectToMongoDB();

        await  User.find()
        await CategoryModel.find()
        // access featured blog posts
        const allPosts = await Blog.find().populate(['author','category']);

        // validate featured blog posts 
        if (allPosts) {
            return allPosts
        } else {
            return null
        }
    } catch (error) {
        console.log(error);
        
        return null
    }
}

export type InitBlogHomePageFunction = () => Promise<{
    featuredPosts: IBlogPopulated[];
    allPosts: IBlogPopulated[];
} | null>;

// Initialize the blog home page data.
export const getBlogs: InitBlogHomePageFunction = async () => {
    try {
        const featuredResponse = await fetch('https://fuzzy-palm-tree.vercel.app/api/blog/get/featured',);

        const allPostsResponse = await fetch('https://fuzzy-palm-tree.vercel.app/api/blog/get/all',);

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