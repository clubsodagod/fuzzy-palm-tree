import { fromEmail } from "@/library/const";
import { useRegisterHtmlContent } from "@/library/const/html-content/register";
import { createNewCredentialsUser } from "@/library/db/controllers/user";
import { NextRequest, NextResponse } from "next/server";
require('dotenv').config()



export async function POST(req:NextRequest, res:NextResponse) {

    // Check that request method is of type POST
    if (req.method !== 'POST') {
        return NextResponse.json({error:'Request is unauthorized.'}, {status:500})
    } else {

        try {
            
            const reqBody = await req.json()
            const { user } = reqBody;
            
            
            
            // validate user object is  available
            if ( !user ) {
                return NextResponse.json({message:"There was an error receiving the user data."}, {status:500})
            }

            // create new user
            const newUser = await createNewCredentialsUser(user);
            
            // validate new user is not an error message
            if(typeof newUser === 'string'){
                return NextResponse.json({message: newUser}, {status:500})
            }
            
            if(newUser === null){
                return NextResponse.json({message: "There was an error creating your account."}, {status:500})
            }

            // send verification email to new user
            let encodedPath ;
            let message = {
                to:user.email,
                from:fromEmail,
                subject:"Please verify your email.",
                text:'Please verify your email to gain more access.',
                html: useRegisterHtmlContent,
            };

            


            return NextResponse.json({message:'Successful.', user:newUser}, {status:200})     

        } catch (error) {

            console.log(error);
            return NextResponse.json({message: "There was an error with your request."}, {status:500})

        }



    }
}
