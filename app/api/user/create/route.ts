import { fromEmail } from "@/library/const";
import { createNewCredentialsUser } from "@/library/db/controllers/user";
import { connectToMongoDB } from "@/library/db/db";
import User from "@/library/db/models/user";
import { error } from "console";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { text } from "stream/consumers";
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
                // res.status(500).json({message:"There was an error recieving the user data."})
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
                html: '',
            };



            return NextResponse.json({message:'Successful.', user:newUser}, {status:200})     

        } catch (error) {

            console.log(error);
            return NextResponse.json({message: "There was an error with your request."}, {status:500})

        }



    }
}
