import ProductPage from "@/app/product/[[...slug]]/page";

export default function Layout({
    children,
    products,
    analytics,
    payments
}: {
    children: React.ReactNode,
    products: React.ReactNode,
    analytics: React.ReactNode,
    payments: React.ReactNode
}) {
    return (
        <div className="p-5">
            <div>
                {children}
            </div>
            <div className="mt-5 flex justify-center item-cenetr">
                {products}
                {analytics}
            </div>
            <div>{payments} </div>
        </div>
    )
}