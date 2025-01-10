// src/store/quotesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const quotesSlice = createSlice({
    name: 'quotes',
    initialState: [
        "The only limit to our realization of tomorrow is our doubts of today.",
        "Success is not final; failure is not fatal: It is the courage to continue that counts.",
        "Don't watch the clock; do what it does. Keep going.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "Your time is limited, so don't waste it living someone else's life."
    ],
    reducers: {}
});

export const selectQuotes = (state) => state.quotes;
export default quotesSlice.reducer;
