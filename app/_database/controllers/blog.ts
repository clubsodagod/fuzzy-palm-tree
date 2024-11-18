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
    slugPost: IBlogPopulated;
} | null>;

// Initialize the blog home page data.
export const getBlogs: InitBlogHomePageFunction = async () => {

    await connectToMongoDB()
    try {
        const featuredResponse = await fetch('https://fuzzy-palm-tree.vercel.app/api/blog/get/featured',);

        const allPostsResponse = await fetch('https://fuzzy-palm-tree.vercel.app/api/blog/get/all',);

        const slugResponse = await fetch('https://fuzzy-palm-tree.vercel.app/api/blog/get/slug?slug=sample-one',);

        // Validate responses by checking their status.
        if (featuredResponse.ok && allPostsResponse.ok && slugResponse.ok) {
            const featuredPosts = await featuredResponse.json().then((res) => res.featuredPosts as IBlogPopulated[]);
            const allPostsUnfiltered = await allPostsResponse.json().then((res) => res.posts as IBlogPopulated[]);
            const slugPost = await slugResponse.json().then((res) => res.post as IBlogPopulated);
            console.log(featuredPosts, '&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&');
            
            // Filter out posts that are already featured.
            const allPostsFiltered = allPostsUnfiltered.filter((p) => !p.featured);

            return { featuredPosts, allPosts:allPostsFiltered, slugPost };
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error initializing blog home page:', error);
        return null;
    }
};