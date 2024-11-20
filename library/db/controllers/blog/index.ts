import { NextRequest, NextResponse } from "next/server";
import { connectToMongoDB } from "../../db";
import mongoose, { ObjectId } from "mongoose";
import slugify from "slugify";
import { Category } from "@mui/icons-material";
import { BlogModel, UserModel, CategoryModel, SubcategoryModel } from "@/app/_database/models";
import { BlogDocumentType, IBlog, IBlogPopulated } from "@/app/_database/models/blog";
import Author from "@/app/_database/models/author";
import Subcategory from "@/app/_database/models/subcategory";



// types
export type CreateBlogFunction = (blog:BlogDocumentType, req:NextRequest, res:NextResponse) => Promise<null|undefined|NextResponse|IBlog>;



// POST Route Controller Functions


    // create blog post function

export const createBlogPost:CreateBlogFunction = async(blogData,req,res) => {
    // validate request method
    if (req.method==="POST") {
        
        try {
            
            // connect to database
            await connectToMongoDB();
            console.log(blogData);
            
            // create blog post
            const blog =  new BlogModel();
            blog.title = blogData.title;
            blog.content = blogData.content;
            blog.category = blogData.category as unknown as mongoose.Types.ObjectId;
            blog.subcategories = blogData.subcategories as unknown as mongoose.Types.ObjectId[];
            blog.tags = blogData.tags;
            blog.featuredImg = blogData.featuredImg;
            blog.featuredVideo = blogData.featuredVideo;
            blog.author = blogData.user as unknown as mongoose.Types.ObjectId;
            blog.slug = slugify(blogData.title.toLowerCase());
            blog.save()
            console.log(blog);
            
            if (blog) {
                return blog
            } else {
                return NextResponse.json({message:"There was an issue creating blog post. Please feel free to try again."}, {status:500})
            }
        } catch (error) {
            return NextResponse.json({message:"There was an issue creating blog post. Please feel free to try again.", error:error}, {status:500})
        }
    } else {
        return NextResponse.json({message:"Your request is unauthorized."}, {status:500})
    }
}

export const findAuthor = async(userToFind:string) => {

    try {
        
        // connect to database
        await connectToMongoDB()

        // find user function
        const user = await Author.findOne({'user._id': userToFind}, {'User.$': 1},);
        console.log(user, 'placement');
        return user
    } catch (error) {
        return
    }
}


// GET featured blog post
export const getAllPosts = async() => {

    try {
        
        // connect to database
        await connectToMongoDB();

        await  UserModel.find()
        await CategoryModel.find()
        await Subcategory.find()
        // access featured blog posts
        const allPosts = await BlogModel.find().populate(['author','category','subcategories',]);
        console.log(allPosts);
        
        // validate featured blog posts 
        if (allPosts) {
            return allPosts as unknown as IBlogPopulated[]
        } else {
            return null
        }
    } catch (error) {
        return null
    }
}

// GET featured blog post
export const getFeaturedPosts = async() => {

    try {
        
        // connect to database
        await connectToMongoDB();

        await  UserModel.find()
        await CategoryModel.find()
        await Subcategory.find()
        // access featured blog posts
        const featuredPosts = await BlogModel.find({featured:true}).populate(['author','category','subcategories']);

        // validate featured blog posts 
        if (featuredPosts) {
            return featuredPosts as unknown as IBlogPopulated[]
        } else {
            return null
        }
    } catch (error) {
        return null
    }
}

export const getPostsOfCategory = async(id:string, featured:boolean) => {

    try {
        
        // connect to database
        await connectToMongoDB();

        await  UserModel.find()
        await CategoryModel.find()
        // access posts blog posts with category objectId
        const postsByCategory = await BlogModel.find({category:id, featured:featured}).populate(['author','category']);


        // validate blog posts 
        if (postsByCategory) {
            return postsByCategory
        } else {
            return null
        }
    } catch (error) {
        return null
    }
}
export const getPostBySlug = async(slug:string) => {

    try {
        
        // connect to database
        await connectToMongoDB();

        await  UserModel.find()
        await CategoryModel.find()
        await SubcategoryModel.find()
        // access posts blog posts with category objectId
        const postBySlug = await BlogModel.findOne({slug:slug,}).populate(['author','category','subcategories']);


        // validate blog posts 
        if (postBySlug) {
            // console.log(postBySlug);
            
            return postBySlug as unknown as IBlogPopulated
        } else {
            return null
        }
    } catch (error) {
        return null
    }
}