"use client";

import Image from "next/image";
import { products } from "@/public/data";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { removeFromWishlist } from "@/redux/features/wishlist/wishlistSlice";

export default function WishlistDrawer() {
    const dispatch = useAppDispatch();
    const { wishlist } = useAppSelector((state) => state.wishlist);

    const wishlists = products.filter((product) => wishlist.includes(product.id));

    return (
        <div className="px-8 py-6 space-y-6">
            <h3>Wishlists</h3>
            {wishlists.map(({ id, product }) => (
                <div key={id} className="flex items-center gap-4">
                    <Image src={product.images[0]} alt="" className="rounded-lg" width={64} height={64} />
                    <div className="w-full flex justify-between items-center gap-4">
                        <div>
                            <h4>{product.name}</h4>
                            <div className="flex gap-1">
                                <dt>Price:</dt>
                                <dd>${product.price}</dd>
                            </div>
                        </div>
                        <button onClick={() => dispatch(removeFromWishlist(id))}>
                            <TrashIcon className="w-5 h-5 cursor-pointer text-red-500" />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
