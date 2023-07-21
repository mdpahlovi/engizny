"use client";

import Image from "next/image";
import { products } from "@/public/data";
import { TrashIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCard, removeFromCard, removeOne } from "@/redux/features/card/cardSlice";

export default function CardDrawer() {
    const dispatch = useAppDispatch();
    const { cards } = useAppSelector((state) => state.card);

    const cardIds = cards.map((card) => card.product);
    const productCard = products.filter((product) => cardIds.includes(product.id));

    return (
        <div className="px-8 py-6 space-y-6">
            <h3>Cards</h3>
            {productCard.map(({ id, product }) => {
                const card = cards.find((card) => card.product === id);
                const { quantity, size, color } = card!;

                return (
                    <div key={id} className="flex items-center gap-4">
                        <Image src={product.images[0]} alt="" className="rounded-lg" width={128} height={128} />
                        <div className="w-full flex justify-between items-center gap-4">
                            <div>
                                <h4>{product.name}</h4>
                                <div className="flex gap-1">
                                    <dt>Price:</dt>
                                    <dd>${product.price}</dd>
                                </div>
                                <div className="flex gap-1">
                                    <dt>Quantity:</dt>
                                    <dd className="text-red-500">{quantity}</dd>
                                </div>
                                <div className="flex gap-1">
                                    <dt>Size:</dt>
                                    <dd>{size}</dd>
                                </div>
                                <div className="flex gap-1">
                                    <dt>Color:</dt>
                                    <dd>{color}</dd>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2.5">
                                <button onClick={() => dispatch(addToCard({ product: id, size, color }))}>
                                    <PlusIcon className="w-5 h-5 cursor-pointer" />
                                </button>
                                <button onClick={() => dispatch(removeFromCard(id))}>
                                    <TrashIcon className="w-5 h-5 cursor-pointer text-red-500" />
                                </button>
                                <button onClick={() => dispatch(removeOne(id))}>
                                    <MinusIcon className="w-5 h-5 cursor-pointer" />
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
