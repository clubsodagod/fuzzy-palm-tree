import { IBlogPopulated } from "@/app/_database/models/blog";
import { getAllPosts } from "@/library/db/controllers/blog";
import { NextRequest, NextResponse } from "next/server";





export async function GET (req:NextRequest) {

    // validate request method
    if (req.method == "GET") {
        
        // access all posts from database
        const allPosts = await getAllPosts() as IBlogPopulated[];

        // validate all posts object
        if (allPosts) {
            console.log(allPosts);
            
            return NextResponse.json({message:"All posts fetched successfully!", posts:allPosts}, {status:200})
        } else {
            return NextResponse.json({message:"There was an error fetching posts."}, {status:500})
        }
    } else {
        return NextResponse.json({message:"Your request is unauthorized."}, {status:500})
    }
}