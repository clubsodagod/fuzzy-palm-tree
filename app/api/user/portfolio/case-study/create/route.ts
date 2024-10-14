import { createNewCaseStudy } from "@/library/db/controllers/case-study";
import { NextRequest, NextResponse } from "next/server";



export async function POST (req:NextRequest,res:NextResponse) {

    // validate request method
    if(req.method == "POST") {

        //  access the req.body
        const reqBody = await req.json()

        // access  case study object
        const {
            caseStudy
        } = reqBody;
        
        // validate caseStudy
        if (caseStudy) {
            
            // create new case study document
            const newCaseStudyDocument = await createNewCaseStudy(caseStudy);

            // validate newCaseStudyDocument 
            if (newCaseStudyDocument) {
                return NextResponse.json({message:`'${newCaseStudyDocument.title}' case study document successfully created!`, caseStudy:newCaseStudyDocument}, {status:200})
            } else {
                return NextResponse.json({message:"There was an error creating case study. Please feel free to try again."}, {status:500})
            }
        } else {
            return NextResponse.json({message:"Please provide a case study to create."}, {status:500})
        }
    } else {
        return NextResponse.json({message:"Your request is unauthorized."}, {status:500})
    }
}