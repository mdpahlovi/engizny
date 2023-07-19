import Image from "next/image";
import { IProduct } from "@/types";
import { Card, CardHeader, CardBody, CardFooter, Button, IconButton } from "../Common/MTComponent";
import { HeartIcon } from "@heroicons/react/24/solid";

export default function ProductCard({ product }: { product: IProduct }) {
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
                <div>
                    <IconButton>
                        <HeartIcon className="w-5 h-5" />
                    </IconButton>
                </div>
                <Button size="sm" color="gray" fullWidth={true}>
                    Add to Cart
                </Button>
            </CardFooter>
        </Card>
    );
}
