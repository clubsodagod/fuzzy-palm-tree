import { getAllIdentifiers } from "@/library/db/controllers/identifiers";
import { CategoryModel } from "@/library/db/models";
import { NextRequest, NextResponse } from "next/server";




export async function GET (req:NextRequest, res:NextResponse) {
    // validate request method
    if (req.method==="GET") {
        
        try {
            
            // get categories
            const categories = await getAllIdentifiers(req,res,CategoryModel);

            // validate categories
            if (categories) {
                // console.log("backend",await categories);
                // console.log(categories, "backend");
                
                return NextResponse.json(
                    {message:"Categories fetched successfully!", categories}, 
                    {status:200}
            )
            } else {
                return NextResponse.json({message:"There was an error getting categories. Please feel free to try again."}, {status:500})
            }
        } catch (error) {
            return NextResponse.json({message:"There was an error getting categories. Please feel free to try again."}, {status:500})
        }
    } else {
        return NextResponse.json({message:"Your request is unauthorized."}, {status:500})
    }
}