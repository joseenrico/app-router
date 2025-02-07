// How to post data in Next.js API routes
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const req = await request.json();
    return NextResponse.json({
        status: 200,
        message: "Success",
        data: req
    });
}