import { createNewCaseStudy } from "@/library/db/controllers/case-study";
import { createNewTechnicalApplication } from "@/library/db/controllers/technical-applications";
import { NextRequest, NextResponse } from "next/server";



export async function POST (req:NextRequest,res:NextResponse) {

    // validate request method
    if(req.method == "POST") {

        //  access the req.body
        const reqBody = await req.json()

        // access  technical application object
        const {
            technicalApplication
        } = reqBody;
        
        // validate technicalApplication
        if (technicalApplication) {
            
            // create new case study document
            const newTechnicalApplicationDocument = await createNewTechnicalApplication(technicalApplication);

            // validate newTechnicalApplicationDocument 
            if (newTechnicalApplicationDocument) {
                return NextResponse.json({message:`'${newTechnicalApplicationDocument.name}' technical application document successfully created!`, technicalApplication:newTechnicalApplicationDocument}, {status:200})
            } else {
                return NextResponse.json({message:"There was an error creating technical application document. Please feel free to try again."}, {status:500})
            }
        } else {
            return NextResponse.json({message:"Please provide a technical application to create."}, {status:500})
        }
    } else {
        return NextResponse.json({message:"Your request is unauthorized."}, {status:500})
    }
}