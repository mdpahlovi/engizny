"use client";

import { configureStore } from "@reduxjs/toolkit";
import navToggleReducer from "./features/navbar/toggleNavSlice";
import cardReducer from "./features/card/cardSlice";
import wishlistReducer from "./features/wishlist/wishlistSlice";

export const store = configureStore({
    reducer: {
        toggleNav: navToggleReducer,
        card: cardReducer,
        wishlist: wishlistReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
