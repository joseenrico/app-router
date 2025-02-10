import ProductPage from "@/app/product/[[...slug]]/page";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

const data = [
    {
        id: 1,
        title: 'Sepatu Baru',
        price: 1199000,
        image:
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/44f222ab-96b6-43b9-82e7-9a1bd888611d/NIKE+COURT+VISION+LO.png"
    },
    {
        id: 2,
        title: 'Sepatu Nike',
        price: 1520000,
        image:
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/zfxux6teg42i7ecqsggx/GRANDSTAND+II.png"
    }
]

export async function GET(request: NextApiRequest) {
    const { searchParams } = new URL(request.url || '');
    const id = searchParams.get('id');
    if (id) {
        const detailProduct = data.find((product) => product.id === Number(id));
        if (detailProduct) {
            return NextResponse.json({
                status: 200,
                message: "Success",
                data: detailProduct,
            });
        }
        return NextResponse.json({
            status: 404,
            message: "Not Found",
            data: {},
        });
    }

    return NextResponse.json({ status: 200, message: "Success", data });
}