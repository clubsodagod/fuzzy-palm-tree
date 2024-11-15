import { CategoryModel } from "@/app/_database/models";
import { updateIdentifier } from "@/library/db/controllers/identifiers";
import { connectToMongoDB } from "@/library/db/db";
import { getAllCategoriesClient, getAllCategoriesDynamicClient } from "@/utility/blog-section/blog-page-functions";
import { NextRequest, NextResponse } from "next/server";



export async function PUT(req: NextRequest, res: NextResponse, ) {
    // validate request method
    if (req.method === "PUT") {

        try {

            // access request body
            const reqBody = await req.json();
            const {
                category
            } = reqBody;

            // validate category from request body
            if (category) {
                const updatedCategory = await updateIdentifier(req, res, CategoryModel, category);

                // 

                return NextResponse.json(
                    { message: `Category updated successfully!`, updatedCategory },
                    { status: 200 }
                )
            } else {
                return NextResponse.json(
                    { message: "Information to update category not provided." },
                    { status: 500 }
                )
            }

        } catch (error) {
            return NextResponse.json(
                { message: "There was an error updating category. Please feel free to try again." },
                { status: 500 }
            )
        }
    } else {
        return NextResponse.json({ message: "Your request is unauthorized." }, { status: 500 })
    }
}