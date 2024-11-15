import { createTag } from "@/library/db/controllers/tag";
import { NextRequest, NextResponse } from "next/server";



export async function POST (req:NextRequest, res:NextResponse) {

    // validate request method
    if (req.method==="POST") {
        
        try {
            
            // access the request body
            const reqBody = await req.json();
            const {
                tag:{
                    name,
                }
            } = reqBody;

            // validate name provided from client
            if(!name || name === "") {
                return NextResponse.json({message:"Please provide a tag name. Empty strings are not acceptable."}, {status:500})
            }

            // create tag
            const tag = await createTag(name, req, res);

            // validate tag creation
            if (!tag) {
                return NextResponse.json({message:"There was an error creating tag. Feel free to try again."}, {status:500})
            } else {
                return NextResponse.json({message:`${name} tag successfully created!`, tag}, {status:200})
            }
        } catch (error) {
            return NextResponse.json({message:"There was an error creating tag. Feel free to try again."}, {status:500})
        }
    } else {
        return NextResponse.json({message:"Your request is unauthorized."}, {status:500})
    }
}