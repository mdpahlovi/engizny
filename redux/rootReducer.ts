import { combineReducers } from "@reduxjs/toolkit";
import cardReducer from "./features/card/cardSlice";
import navToggleReducer from "./features/navbar/toggleNavSlice";
import wishlistReducer from "./features/wishlist/wishlistSlice";

export const rootReducer = combineReducers({
    toggleNav: navToggleReducer,
    card: cardReducer,
    wishlist: wishlistReducer,
});
