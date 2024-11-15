import { NextRequest, NextResponse } from "next/server";
import { useSession, getSession, signIn } from "next-auth/react"



export async function POST(req:NextRequest, res:NextResponse) {
    
    // validate request type
    if(req.method === "POST") {

        try {
            // access user credentials in client
            const reqBody = await req.json();
            
            // destructure body object of req
            const { authorization:{credential, secret}} = reqBody;

            // access session object
            const userSession = await getSession();

            // validate user is null
            if(userSession!==null){
                return NextResponse.json({message:"There is already an active session."}, {status:500})
            }

            // nextAuth authentication 
            try {
                await signIn('credentials', {
                    credential:credential, secret:secret
                }).then(()=>{
                    return NextResponse.json({message:"Successfully authenticated!"}, {status:200})
                });
            } catch (error) {
                return NextResponse.json({message:"There was an error authenticating the login. Please try again."}, {status:500})
            }


            return NextResponse.json({},{status:200})            
        } catch (error) {
            return NextResponse.json({message:error}, {status:500})
        }

        

    } else {
        return NextResponse.json({message:"Your request is unauthorized."}, {status:500})
    }
}