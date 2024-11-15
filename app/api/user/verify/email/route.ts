import { connectToMongoDB } from "@/library/db/db";
import { UserModel } from "@/library/db/models";
import { type NextRequest, NextResponse } from "next/server";



export async function PUT(req:NextRequest, res:NextResponse) {

    // incoming request validation
    if(req.method === "PUT") {

        try {
            
            // get params from url query
            const params = req.nextUrl.searchParams
            const username = params.get('username') as string;
            const token = params.get('token') as string;
            console.log(username, token);
            
            // validate token and username url query parameters
            if(token === "" || username === "") {
                throw new Error('There was an issue reading the token or username. Feel Free to request a new link.');
            }
            // connect to database
            await connectToMongoDB();

            // find user in database
            const user = await UserModel.findOne({username:username});
            console.log(user);
            
            // validate user against token
            if(!user || user.verificationToken !== token) {
                throw new Error('Invalid expiration token.');
            }

            // create timestamp
            const currentTimestamp = new Date();

            // validate token expiration
            if(currentTimestamp > user.verificationTokenExpiration) {
                throw new Error('Verification token has expired.');
            }

            // update verified email property of user and save
            const updatedUser = await UserModel.findOneAndUpdate({username:username}, {emailVerified:true, verificationTokenExpiration: new Date()}, {new:true});

            // if(!updatedUser){
            //     throw new Error('No user found. There was an error validating the token.')
            // }

            // return response
            return NextResponse.json({message:`Email successfully verified.`, updatedUser}, {status:200})
        } catch (error) {
            return NextResponse.json({message:"There was an error creating the user.", error:error}, {status:500},)
        }
    } else {
        return NextResponse.json({message:"Your request is unauthorized."}, {status:500})
    }
}