import { Button } from "@/components/Common/MTComponent";
import { categories } from "@/public/data";
import { products } from "@/public/data";
import ProductCard from "@/components/Home/ProductCard";

export default function Home() {
    return (
        <section className="my-10 space-y-8">
            <div className="flex gap-4 overflow-x-auto">
                <Button size="sm" className="whitespace-nowrap">
                    All Product
                </Button>
                {categories.map((category, idx) => (
                    <Button key={idx} size="sm" variant="outlined" className="whitespace-nowrap">
                        {category}
                    </Button>
                ))}
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map(({ id, product }, idx) => (
                    <ProductCard key={idx} id={id} product={product} />
                ))}
            </div>
        </section>
    );
}
