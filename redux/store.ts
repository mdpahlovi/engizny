"use client";

import { configureStore } from "@reduxjs/toolkit";
import navToggleReducer from "./features/navbar/toggleNavSlice";

export const store = configureStore({
    reducer: {
        toggleNav: navToggleReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
