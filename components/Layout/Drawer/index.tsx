"use client";

import CardDrawer from "./CardDrawer";
import WishlistDrawer from "./WishlistDrawer";
import { Drawer } from "../../Common/MTComponent";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toggleCardDrawer, toggleWishlistDrawer } from "@/redux/features/navbar/toggleNavSlice";

export default function AllDrawers() {
    const dispatch = useAppDispatch();
    const { wishlistDrawer, cardDrawer } = useAppSelector((state) => state.toggleNav);

    return (
        <>
            <Drawer placement="right" size={448} open={wishlistDrawer} onClose={() => dispatch(toggleWishlistDrawer())}>
                <WishlistDrawer />
            </Drawer>
            <Drawer placement="right" size={448} open={cardDrawer} onClose={() => dispatch(toggleCardDrawer())}>
                <CardDrawer />
            </Drawer>
        </>
    );
}
