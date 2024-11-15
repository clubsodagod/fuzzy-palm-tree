import { createNewCaseStudy } from "@/library/db/controllers/case-study";
import { createNewProperty } from "@/library/db/controllers/property";
import { createNewTechnicalApplication } from "@/library/db/controllers/technical-applications";
import { NextRequest, NextResponse } from "next/server";



export async function POST (req:NextRequest,res:NextResponse) {

    // validate request method
    if(req.method == "POST") {

        //  access the req.body
        const reqBody = await req.json()

        // access property object
        const {
            property
        } = reqBody;
        
        // validate technicalApplication
        if (property) {
            
            // create new case study document
            const newPropertyDocument = await createNewProperty(property);

            // validate newTechnicalApplicationDocument 
            if (newPropertyDocument) {
                return NextResponse.json({message:`'${newPropertyDocument.address}' property document successfully created!`, property:newPropertyDocument}, {status:200})
            } else {
                return NextResponse.json({message:"There was an error creating property document. Please feel free to try again."}, {status:500})
            }
        } else {
            return NextResponse.json({message:"Please provide a property to create."}, {status:500})
        }
    } else {
        return NextResponse.json({message:"Your request is unauthorized."}, {status:500})
    }
}