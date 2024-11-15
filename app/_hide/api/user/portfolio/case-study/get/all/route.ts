import { getAllCaseStudies } from "@/library/db/controllers/case-study";
import { getAllTechnicalApplications } from "@/library/db/controllers/technical-applications";
import { NextRequest, NextResponse } from "next/server";




export async function GET(req: NextRequest, res: NextResponse) {

    // validate request method
    if (req.method == "GET") {

        // access case studies controller
        const caseStudies = await getAllCaseStudies();

        // validate case studies
        if (caseStudies) {
            return NextResponse.json({ message: "Successfully fetched case studies.", caseStudies }, { status: 200 })
        } else {
            return NextResponse.json(
                { message: "There was a problem fetching case studies. Please feel free to try again." },
                { status: 500 }
            )
        }

    } else {
        return NextResponse.json({ message: "Your request is not authorized." }, { status: 500 })
    }
}