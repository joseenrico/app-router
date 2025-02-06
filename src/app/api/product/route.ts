import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(request: NextApiRequest) {
    const { searchParams } = new URL(request.url || '');
    const id = searchParams.get('id');
    console.log(id);
    const data = [
        {
            id: 1,
            name: 'Sepatu Baru',
            price: 100000
        }
    ]
    return NextResponse.json({ status: 200, message: "Success", data });
}