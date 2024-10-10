import { createBlogPost } from "@/library/db/controllers/blog";
import { NextRequest, NextResponse } from "next/server";



export async function POST (req:NextRequest,res:NextResponse) {
    // validate request method
    if (req.method==="POST") {

        try {
            
            // access the request body
            const reqBody = await req.json();
            const {
                blog
            } = reqBody;

            // validate blog
            if (blog) {
                const post = await createBlogPost(blog,req,res);
                
                if (post) {
                    return NextResponse.json({message:`Successfully created blog post!`, blog:post}, {status:200})
                } else {
                    return NextResponse.json({message:"There was an error creating blog post.",}, {status:500})
                }
            } else {
                return NextResponse.json({message:"There was an error creating blog post. Please feel free to try again."}, {status:500});
            }
        } catch (error) {
            return NextResponse.json({message:"There was an error creating blog post. Please feel free to try again."}, {status:500});
        }
    } else {
        return NextResponse.json({message:"Your request is unauthorized."}, {status:500});
    }
}