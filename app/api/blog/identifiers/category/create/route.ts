import { createIdentifier } from "@/library/db/controllers/identifiers";
import { CategoryModel } from "@/library/db/models";
import { NextRequest, NextResponse } from "next/server";



export async function POST (req:NextRequest, res:NextResponse) {

    if(req.method==="POST") {

        try {

            // access category from client
            const reqBody = await req.json()
            
            // destructure fields from the reqBody
            const {
                category: {
                    name, description, photo, video, tagline, subcategories            
                }
            } = reqBody;

            // validate fields are not undefined or empty strings
            if(!name||!description||!photo||!video||!tagline||!subcategories){
                return NextResponse.json({message:"You must provide all fields to create category."})
            }

            // initialize new category
            const category =  await createIdentifier(CategoryModel,name, tagline,description,photo, video,subcategories,req, res);

            // validate category properly created
            if (!category) {
                return NextResponse.json({message:"There was an error creating category", }, {status:500})
            } else {
                // successfully created category return to client
                return NextResponse.json({message:`The ${name} category is now created!`, category}, {status:200})
            }

        } catch (error) {
            return NextResponse.json({message:"There was an error creating category", error:error}, {status:500})
        }
    } else {
        return NextResponse.json({message:"Your request is unauthorized."}, {status:500})
    }
}