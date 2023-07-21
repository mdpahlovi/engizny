import { IProductData } from "@/types";
import { products } from "@/public/data";
import { Button } from "@/components/Common/MTComponent";
import ProductCarousel from "@/components/Product/ProductCarousel";
import Section from "@/components/Product/SetProductDetails/Section";
import SetProductDetails from "@/components/Product/SetProductDetails";

export default function ProductDetails({ params }: { params: { id: string } }) {
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
                    <SetProductDetails id={id} sizes={sizes} colors={colors} />
                </div>
            </section>
        );
    }
}
