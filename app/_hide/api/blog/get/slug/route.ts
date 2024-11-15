import { getPostBySlug } from "@/library/db/controllers/blog";
import { NextRequest, NextResponse } from "next/server";




export async function GET(req:NextRequest, res:NextResponse) {
    
    // validate request method
    if (req.method == "GET") {

        // get params from url query
        const params = req.nextUrl.searchParams
        const slug = params.get('slug') as string;

        // validate url query params
        if (slug && slug != '') {
            // access post by slug
            const postBySlug = await getPostBySlug(slug);      
            
            // validate post by slug object
            if (postBySlug) {
                return NextResponse.json({message:"Successfully fetched post.", post:postBySlug}, {status:200})
            } else {
                return NextResponse.json({message:"There was an error fetching post. Please try again."}, {status:500})
            }
        } else {
            return NextResponse.json({message:"Please provide an adequate parameter! Error."}, {status:500})
        }

    } else {
        return NextResponse.json({message:"Your request is unauthorized."}, {status:500})
    }
}