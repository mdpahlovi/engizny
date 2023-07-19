import { products } from "@/public/data";
import { IProductData } from "@/types";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { Button, IconButton } from "@/components/Common/MTComponent";
import getSize from "@/helpers/getSize";
import getColor from "@/helpers/getColor";
import { HeartIcon } from "@heroicons/react/24/solid";
import ProductCarousel from "@/components/Product/ProductCarousel";
import Section from "@/components/Product/Section";

export default function ProductDetails({ params }: { params: Params }) {
    const productData: IProductData | undefined = products.find((product) => product.id === Number(params.id));

    if (productData === undefined) {
        return <section className="my-10">Product Not Find By This {params.id} Id </section>;
    } else {
        const { id, product, reviews } = productData;
        const { images, name, price, description, category, colors, sizes } = product;

        return (
            <section className="my-10 flex flex-col md:flex-row lg:items-center gap-8 lg:gap-16">
                <div className="max-w-full md:max-w-xs lg:max-w-md">
                    <ProductCarousel images={images} />
                </div>
                <div className="w-full space-y-6">
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <h3>{name}</h3>
                            <h3>${price}</h3>
                        </div>
                        <h6>{description}</h6>
                    </div>
                    <Section title="Category">
                        {category.map((cate, idx) => (
                            <Button key={idx} size="sm" variant="outlined">
                                {cate}
                            </Button>
                        ))}
                    </Section>
                    <Section title="Size">
                        {sizes.map((size, idx) => (
                            <IconButton key={idx}>{getSize(size)}</IconButton>
                        ))}
                    </Section>
                    <Section title="Colors">
                        {colors.map((color, idx) => (
                            <IconButton key={idx}>
                                <div className={`w-4 h-4 ${getColor(color)}`} />
                            </IconButton>
                        ))}
                    </Section>
                    <div className="flex gap-4 pt-2">
                        <Button size="sm" color="gray">
                            Add To Card
                        </Button>
                        <div>
                            <IconButton>
                                <HeartIcon className="w-5 h-5" />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
