import { getFeaturedPosts } from "@/library/db/controllers/blog";
import { NextRequest, NextResponse } from "next/server";




export async function GET (req:NextRequest, res:NextResponse) {
    // validate request method
    if(req.method == "GET") {

        // access featured posts
        const featuredPosts = await getFeaturedPosts();

        // validate featured posts object 
        if (featuredPosts) {
            return NextResponse.json({message:"Featured posts successfully fetched.", featuredPosts}, {status:200})
        } else {
            return NextResponse.json({message:"There was an error fetching featured posts. Try reloading the page. Once or Twice."}, {status:500})
        }
    } else {
        return NextResponse.json({message:"Your request is unauthorized."}, {status:500})
    }
}