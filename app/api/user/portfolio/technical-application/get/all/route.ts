import { getAllTechnicalApplications } from "@/library/db/controllers/technical-applications";
import { NextRequest, NextResponse } from "next/server";




export async function GET(req: NextRequest, res: NextResponse) {

    // validate request method
    if (req.method == "GET") {

        // access technical applications controller
        const technicalApplications = await getAllTechnicalApplications();

        // validate technical applications
        if (technicalApplications) {
            return NextResponse.json({ message: "Successfully fetched technical applications.", technicalApplications }, { status: 200 })
        } else {
            return NextResponse.json(
                { message: "There was a problem fetching technical applications. Please feel free to try again." },
                { status: 500 }
            )
        }

    } else {
        return NextResponse.json({ message: "Your request is not authorized." }, { status: 500 })
    }
}