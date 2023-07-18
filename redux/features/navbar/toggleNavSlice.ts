"use client";

import { createSlice } from "@reduxjs/toolkit";

interface ToggleNavState {
    open: boolean;
}

const initialState: ToggleNavState = {
    open: false,
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
    },
});

export const { toggleOpen, toggleClose } = toggleNavSlice.actions;

export default toggleNavSlice.reducer;
