import Image from "next/image";
import { Carousel } from "../Common/MTComponent";

export default function ProductCarousel({ images }: { images: string[] }) {
    return (
        <Carousel className="rounded-xl border">
            {images.map((image, idx) => (
                <Image key={idx} src={image} alt="" className="w-full h-auto" width={500} height={500} />
            ))}
        </Carousel>
    );
}
