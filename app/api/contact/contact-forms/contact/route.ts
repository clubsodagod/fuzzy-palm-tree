import { newContactForm } from "@/library/db/controllers/contact-form";
import { NextRequest, NextResponse } from "next/server";



export async function POST(req: NextRequest, res: NextResponse) {

    if (req.method === "POST") {

        const reqBody = await req.json();
        const {
            form: {
                firstName, lastName, company,
                email, phone, reason,
                message
            }
        } = reqBody

        if (
            !firstName || !lastName || !email || !reason || !message
        ) {

            return NextResponse.json({message: "Please provide all required fields."}, {status:500})
        } else {

            const form = {
                firstName, lastName, company, email, phone, reason, message,
            }

            const contactForm = await newContactForm(form);

            if (contactForm) {
                
                return NextResponse.json(
                    {message:"Contact form successfully submitted. Looking forward to speaking with you!", contactForm}, 
                    { status: 200}
                )
            } else {
                
            }
        }
    } else {
        return NextResponse.json({ message: "Your request is unauthorized." }, { status: 500})
    }
}