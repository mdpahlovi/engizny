"use client";

import { createSlice } from "@reduxjs/toolkit";

interface ToggleNavState {
    open: boolean;
    cardDrawer: boolean;
    wishlistDrawer: boolean;
}

const initialState: ToggleNavState = {
    open: false,
    cardDrawer: false,
    wishlistDrawer: false,
};

export const toggleNavSlice = createSlice({
    name: "toggleNav",
    initialState,
    reducers: {
        toggleOpen: (state) => {
            state.open = true;
        },
        toggleClose: (state) => {
            state.open = false;
        },
        toggleCardDrawer: (state) => {
            state.cardDrawer = !state.cardDrawer;
        },
        toggleWishlistDrawer: (state) => {
            state.wishlistDrawer = !state.wishlistDrawer;
        },
    },
});

export const { toggleOpen, toggleClose, toggleCardDrawer, toggleWishlistDrawer } = toggleNavSlice.actions;

export default toggleNavSlice.reducer;
