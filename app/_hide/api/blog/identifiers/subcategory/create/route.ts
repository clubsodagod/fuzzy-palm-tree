import { SubcategoryModel } from "@/app/_database/models";
import { createIdentifier } from "@/library/db/controllers/identifiers";
import { NextRequest, NextResponse } from "next/server";



export async function POST (req:NextRequest, res:NextResponse) {

    if(req.method==="POST") {

        try {

            // access subcategory from client
            const reqBody = await req.json()
            
            // destructure fields from the reqBody
            const {
                subcategory: {
                    name, description, photo, video, tagline            
                }
            } = reqBody;

            // validate fields are not undefined or empty strings
            if(!name||!description||!photo||!video||!tagline){
                return NextResponse.json({message:"You must provide all fields to create subcategory."})
            }
            console.log("here");
            let sc:string[] = []
            // initialize new subcategory
            const subcategory =  await createIdentifier(SubcategoryModel,name, tagline,description,photo, video,sc ,req, res);
            console.log(subcategory);
            
            // validate subcategory properly created
            if (subcategory) {
                // throw new Error('Subcategory failed to create. Please try again')
                return NextResponse.json({message:`The ${name} subcategory is now created!`, subcategory}, {status:200})
            } else {
                
                return NextResponse.json({message:"There was an error creating subcategory"}, {status:500})
                
            }

        } catch (error) {
            return NextResponse.json({message:"There was an error creating subcategory", error:error}, {status:500})
        }
    } else {
        return NextResponse.json({message:"Your request is unauthorized"}, {status:500})
    }
}