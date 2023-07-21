import Link from "next/link";
import Image from "next/image";
import { IProduct } from "@/types";
import { Card, CardHeader, CardBody, CardFooter, Button } from "../Common/MTComponent";
import AddToWishlist from "../Common/AddToWishlist";

export default function ProductCard({ id, product }: { id: number; product: IProduct }) {
    const { images, name, price, description } = product;

    return (
        <Card>
            <CardHeader shadow={false} floated={false} className="h-60">
                <Image src={images[0]} alt="" className="w-full h-full object-cover" width={250} height={250} />
            </CardHeader>
            <CardBody>
                <div className="mb-2 flex items-center justify-between gap-4">
                    <h4>{name}</h4>
                    <h4>${price}</h4>
                </div>
                <h6 className="text-content/80">{description}</h6>
            </CardBody>
            <CardFooter className="pt-0 flex items-center gap-4">
                <AddToWishlist id={id} />
                <Link href={`/product/${id}`} className="w-full">
                    <Button size="sm" color="gray" fullWidth>
                        See Details
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
