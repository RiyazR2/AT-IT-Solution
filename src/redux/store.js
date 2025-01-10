import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import quotesReducer from './quotesSlice';

export const store = configureStore({
    reducer: {
        products: productSlice,
        quotes: quotesReducer

    },
});
