import ProductPage from "@/app/product/page";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

const data = [
    {
        id: 1,
        title: 'Nike Court Vision Low',
        price: 1069000,
        image:
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/44f222ab-96b6-43b9-82e7-9a1bd888611d/NIKE+COURT+VISION+LO.png"
    },
    {
        id: 2,
        title: "Nike Air Force 1'07",
        price: 1549000,
        image:
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/350e7f3a-979a-402b-9396-a8a998dd76ab/AIR+FORCE+1+%2707.png"
    },
    {
        id: 3,
        title: 'Nike P-600',    
        price: 1520000,
        image:
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fa1bceaf-21bc-44b5-853b-33eac3c34e2b/WMNS+NIKE+P-6000.png"
    },
    {
        id: 4,
        title: 'Nike P-600',    
        price: 1520000,
        image:
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fa1bceaf-21bc-44b5-853b-33eac3c34e2b/WMNS+NIKE+P-6000.png"
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