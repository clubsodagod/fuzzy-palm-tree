import { NextRequest, NextResponse } from "next/server";
import { BlogDocumentType, IBlog } from "../../models/blog";
import { connectToMongoDB } from "../../db";
import { BlogModel } from "../../models";
import mongoose, { ObjectId } from "mongoose";
import Author from "../../models/author";
import { IUser } from "../../models/user";


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

            console.log(blog, "ddddd");
            

            return blog
        } catch (error) {
            return NextResponse.json({message:"There was an issue creating blog post. Please feel free to try again.", error:error}, 
                {status:500})
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

