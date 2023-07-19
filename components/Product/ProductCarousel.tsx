"use client";

import Image from "next/image";
import { Carousel } from "../Common/MTComponent";
import { GlassMagnifier } from "react-image-magnifiers";

export default function ProductCarousel({ images }: { images: string[] }) {
    return (
        <Carousel
            className="rounded-xl border"
            navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                        <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                activeIndex === i ? "bg-content w-8" : "bg-content/20 w-4"
                            }`}
                            onClick={() => setActiveIndex(i)}
                        />
                    ))}
                </div>
            )}
        >
            {images.map((image, idx) => (
                <GlassMagnifier key={idx} imageSrc={image} imageAlt="" magnifierSize="480px" magnifierBorderSize={1} />
            ))}
        </Carousel>
    );
}
