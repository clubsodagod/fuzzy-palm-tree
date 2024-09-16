import { NextRequest, NextResponse } from "next/server";
import { ITag } from "../../models/tag";
import { connectToMongoDB } from "../../db";
import { TagModel } from "../../models";



export type CreateTagFunction = (name:string, req:NextRequest, res:NextResponse) => Promise<ITag|null|NextResponse|undefined>;

export const createTag:CreateTagFunction = async(name,req,res) => {
    // validate request method
    if (req.method==="POST") {
        try {
            // connect to the database
            await connectToMongoDB()
            // create tag
            const tag = new TagModel({name});
            // validate tag creation
            if(tag){
                // save tag
                tag.save()
                return tag as ITag
            } else {
                return NextResponse.json({message:`There was an error creating ${name} tag. Please feel free to try again.`}, {status:500})
            }
        } catch (error) {
            return NextResponse.json({message:`There was an error creating ${name} tag. Please feel free to try again.`}, {status:500})
        }
    } else {
        return NextResponse.json({message:"Your request is unauthorized."}, {status:500})
    }
}