"use client";

import { HeartIcon } from "@heroicons/react/24/solid";
import { IconButton } from "@material-tailwind/react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToWishlist } from "@/redux/features/wishlist/wishlistSlice";

export default function AddToWishlist({ id }: { id: number }) {
    const dispatch = useAppDispatch();
    const { wishlist } = useAppSelector((state) => state.wishlist);

    const isExist = wishlist.includes(id);

    return (
        <div>
            <IconButton variant={isExist ? "filled" : "outlined"} onClick={() => dispatch(addToWishlist(id))}>
                <HeartIcon className="w-5 h-5" />
            </IconButton>
        </div>
    );
}
