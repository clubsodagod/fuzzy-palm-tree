import { getFeaturedPosts, getPostsOfCategory } from "@/library/db/controllers/blog";
import { IBlog } from "@/library/db/models/blog";
import { NextRequest, NextResponse } from "next/server";




export async function GET (req:NextRequest, res:NextResponse) {
    // validate request method
    if(req.method == "GET") {

        // get params from url query
        const params = req.nextUrl.searchParams
        const id = params.get('id') as string;
        const feature = params.get('featured') as string;

        let featured 

        if (feature === "true") {
            featured = true;
        } else {
            featured = false;
        }
        
        // access featured posts
        const postsOfCategory = await getPostsOfCategory(id, featured);

        // validate featured posts object 
        if (postsOfCategory) {
            return NextResponse.json({message:`Posts successfully fetched.`, postsOfCategory}, {status:200})
        } else {
            return NextResponse.json({message:"There was an error fetching featured posts. Try reloading the page. Once or Twice."}, {status:500})
        }
    } else {
        return NextResponse.json({message:"Your request is unauthorized."}, {status:500})
    }
}