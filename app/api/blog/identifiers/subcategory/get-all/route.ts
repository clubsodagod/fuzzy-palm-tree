import { getAllIdentifiers } from "@/library/db/controllers/identifiers";
import { SubcategoryModel } from "@/library/db/models";
import { NextRequest, NextResponse } from "next/server";




export async function GET (req:NextRequest, res:NextResponse) {
    // validate request method
    if (req.method==="GET") {
        
        try {
            
            // get subcategories
            const subcategories = await getAllIdentifiers(req,res,SubcategoryModel);
            
            // validate subcategories
            if (subcategories) {
                return NextResponse.json({message:"Subcategories fetched successfully!", subcategories}, {status:200})
            } else {
                return NextResponse.json({message:"There was an error getting subcategories. Please feel free to try again."}, {status:500})
            }
        } catch (error) {
            return NextResponse.json({message:"There was an error getting subcategories. Please feel free to try again."}, {status:500})
        }
    } else {
        return NextResponse.json({message:"Your request is unauthorized."}, {status:500})
    }
}