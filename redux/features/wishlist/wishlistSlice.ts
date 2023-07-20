"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface WishlistState {
    wishlist: number[];
}

const initialState: WishlistState = {
    wishlist: [],
};

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist: (state, action: PayloadAction<number>) => {
            const isExist = state.wishlist.find((product) => product === action.payload);
            if (!isExist) {
                state.wishlist.push(action.payload);
            }
            localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
        },
        removeFromWishlist: (state, action: PayloadAction<number>) => {
            state.wishlist = state.wishlist.filter((product) => product !== action.payload);
            localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
        },
    },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
