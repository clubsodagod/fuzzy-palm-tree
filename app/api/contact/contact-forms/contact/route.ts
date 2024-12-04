import { ContactDocumentType } from "@/app/_database/models/contact";
import ContactDetails from "@/app/emails/ContactDetails";
import ThanksForContactingMe from "@/app/emails/ThanksForContactingMe";
import { newContactForm } from "@/library/db/controllers/contact-form";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from 'resend';


const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: NextRequest, res: NextResponse) {
    console.log(process.env.NEXT_PUBLIC_RESEND_API_KEY);
    

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

            return NextResponse.json({ message: "Please provide all required fields." }, { status: 500 })
        } else {

            const form: ContactDocumentType = {
                firstName, lastName, company, email, phone, reason, message,
            }

            const contactForm = await newContactForm(form);

            // send email to recipient
            const { data, error } = await resend.emails.send({
                from: 'continuous-innovation@maliek-davis.com',
                to: [`${email}`],
                subject: `${firstName}, We'll chat soon!`,
                react: ThanksForContactingMe(firstName) as React.ReactElement,
            });

            // send response to maliek
            const { data:data2, error:error2 } = await resend.emails.send({
                from: 'continuous-innovation@maliek-davis.com',
                to: [`continuous-innovation@maliek-davis.com`, `maliekjdavis24@gmail.com`],
                subject: `${firstName} ${lastName} just contacted you for ${reason}! Follow-up soon.`,
                react: ContactDetails({form}) as React.ReactElement,
            });

            // 

            if (contactForm && data && data2) {

                return NextResponse.json(
                    { message: "Contact form successfully submitted. Looking forward to speaking with you!", contactForm, email:data },
                    { status: 200 }
                )
            } else {
                return NextResponse.json({ message: "There was an error fulfilling your request.", error }, { status: 500 })
            }
        }
    } else {
        return NextResponse.json({ message: "Your request is unauthorized." }, { status: 500 })
    }
}