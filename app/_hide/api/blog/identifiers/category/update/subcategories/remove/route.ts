import { removeSubcategoriesOfCategory, updateIdentifier } from "@/library/db/controllers/identifiers";
import { connectToMongoDB } from "@/library/db/db";
import CategoryModel from "@/library/db/models/category";
import { ICategory } from "@/library/db/models/category";
import { getAllCategoriesClient } from "@/utility/blog-section/blog-page-functions";
import { NextRequest, NextResponse } from "next/server";



export async function PUT(req: NextRequest, {params}:any) {
    // validate request method
    if (req.method === "PUT") {

        try {

            // access request body
            const reqBody = await req.json();
            const {
                categoryId,
                subcategoryId
            } = reqBody;

            console.log(reqBody);

            // validate category from request body
            if (categoryId && subcategoryId) {
                const updatedCategory = await removeSubcategoriesOfCategory(req,  categoryId, subcategoryId);

                if (updatedCategory) {
                    return NextResponse.json(
                        { message: `Category updated successfully!`, updatedCategory },
                        { status: 200 }
                    )
                }


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