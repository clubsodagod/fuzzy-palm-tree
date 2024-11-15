import { createUserPortfolio, findAndAddExistingUserPortfolio } from "@/library/db/controllers/user";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import type { ObjectId } from "mongoose";



export async function POST (req:NextRequest, res:NextResponse) {

    // validate request method
    if (req.method == "POST") {

        // get params from url query
        const params = req.nextUrl.searchParams
        const userId = params.get('userId') as string;

        //  validate userId
        if (userId) {
            
            // create user portfolio
            const userPortfolio = await createUserPortfolio(userId as unknown as mongoose.Types.ObjectId);

            // validate userPortfolio
            if (userPortfolio) {
                
                // find and update user 
                const user = await findAndAddExistingUserPortfolio(
                    userId as unknown as ObjectId,
                    userPortfolio as unknown as ObjectId,
                );

                // validate user 
                if (user) {
                    return NextResponse.json(
                        {message:`User ${user.firstName}'s portfolio has been created successfully!`, user},
                        {status:200}
                    )
                } else {
                    return NextResponse.json(
                        {message:`There was an error creating portfolio for user. Please feel free to try again.`},
                        {status:500}
                    )
                }

            } else {
                return NextResponse.json(
                    {message:`There was an error creating portfolio for user. Please feel free to try again.`},
                    {status:500}
                )
            }
        } else {
            return NextResponse.json(
                {message:`There was an error creating portfolio for user. Please feel free to try again.`},
                {status:500}
            )
        }

    } else {
        return NextResponse.json(
            {message:`Your request is unauthorized.`}, 
            {status:500},
        )
    }
}