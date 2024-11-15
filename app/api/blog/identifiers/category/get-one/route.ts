import { CategoryModel } from "@/app/_database/models";
import { getIdentifier } from "@/library/db/controllers/identifiers";
import { NextRequest, NextResponse } from "next/server";




export async function GET (req:NextRequest,res:NextResponse) {

    // validate request method
    if(req.method == "GET") {

        // get params from url query
        const params = req.nextUrl.searchParams
        const slug = params.get('slug') as string;

        // access category from url query
        const category = await getIdentifier(CategoryModel,slug);

        // validate data
        if (category) {
            return NextResponse.json({message:`Category ${category.name} successfully fetched!`, category}, {status:200})
        } else {
            return NextResponse.json({message:`There was an issue fetching category.`}, {status:500})
        }

    } else {
        return NextResponse.json({message:"Your request is unauthorized."}, {status:500})
    }
}