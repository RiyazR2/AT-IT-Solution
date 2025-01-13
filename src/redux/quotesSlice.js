// src/store/quotesSlice.js
import { createSlice } from "@reduxjs/toolkit";

const quotesSlice = createSlice({
  name: "quotes",
  initialState: [
    "Your one-stop solution for all laptop and computer needs!",
    "Quality repairs, unbeatable prices, and trusted accessories!",
    "Keeping your devices running like new – every time!",
    "Fast, affordable, and professional laptop repairs – guaranteed!",
    "Where technology meets reliability – shop with us!",
    "For the latest tech, accessories, and expert services, visit us!",
    "Your trusted partner for all IT solutions and accessories.",
    "Upgrade your tech game with premium products and services.",
    "Explore the best deals on gadgets and accessories today!",
    "Revive your devices with expert care and top-notch service.",
  ],
  reducers: {},
});

export const selectQuotes = (state) => state.quotes;
export default quotesSlice.reducer;
