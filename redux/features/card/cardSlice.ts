"use client";

import { CardState } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IProductCard {
    cards: CardState[];
}

const initialState: IProductCard = {
    cards: [],
};

export const cardSlice = createSlice({
    name: "card",
    initialState,
    reducers: {
        addToCard: (state, action: PayloadAction<CardState>) => {
            const isExist = state.cards.find((product) => product.product === action.payload.product);
            if (isExist) {
                isExist.quantity = isExist.quantity! + 1;
            } else {
                state.cards.push({ ...action.payload, quantity: 1 });
            }
            localStorage.setItem("card", JSON.stringify(state.cards));
        },
        removeOne: (state, action: PayloadAction<number>) => {
            const isExist = state.cards.find((product) => product.product === action.payload);
            if (isExist && isExist.quantity! > 1) {
                isExist.quantity = isExist.quantity! - 1;
            } else {
                state.cards = state.cards.filter((product) => product.product !== action.payload);
            }
            localStorage.setItem("card", JSON.stringify(state.cards));
        },
        removeFromCard: (state, action: PayloadAction<number>) => {
            state.cards = state.cards.filter((product) => product.product !== action.payload);
            localStorage.setItem("card", JSON.stringify(state.cards));
        },
    },
});

export const { addToCard, removeOne, removeFromCard } = cardSlice.actions;

export default cardSlice.reducer;
