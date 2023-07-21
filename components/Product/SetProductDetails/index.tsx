"use client";

import Section from "./Section";
import { useState } from "react";
import getSize from "@/helpers/getSize";
import getColor from "@/helpers/getColor";
import { IconButton } from "@/components/Common/MTComponent";
import AddToWishlist from "@/components/Common/AddToWishlist";
import AddToCard from "@/components/Common/AddToCard";

export default function SetProductDetails({ id, sizes, colors }: { id: number; sizes: string[]; colors: string[] }) {
    const [mySize, setMySize] = useState(sizes[0]);
    const [myColor, setMyColor] = useState(colors[0]);

    return (
        <>
            <Section title="Size">
                {sizes.map((size, idx) => (
                    <IconButton key={idx} variant={mySize === size ? "filled" : "outlined"} onClick={() => setMySize(size)}>
                        {getSize(size)}
                    </IconButton>
                ))}
            </Section>
            <Section title="Colors">
                {colors.map((color, idx) => (
                    <IconButton key={idx} variant={myColor === color ? "filled" : "outlined"} onClick={() => setMyColor(color)}>
                        <div className={`w-4 h-4 ${getColor(color)}`} />
                    </IconButton>
                ))}
            </Section>
            <div className="flex gap-4 pt-2">
                <AddToCard id={id} size={mySize} color={myColor} />
                <AddToWishlist id={id} />
            </div>
        </>
    );
}
