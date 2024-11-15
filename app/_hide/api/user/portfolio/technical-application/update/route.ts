import { NextRequest, NextResponse } from "next/server";


export async function PUT(req:NextRequest, res:NextResponse) {
    if (req.method == 'PUT') {
        return NextResponse.json({message:'Success', },{status:200})
    } else {
        return NextResponse.json({message:'Unauthorized', },{status:500})
        
    }
}