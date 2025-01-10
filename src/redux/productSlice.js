import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [
        { name: "Laptops", items: ["Dell", "HP", "Lenovo", "Mac", "Acer"] },
        { name: "Desktops", items: ["Dell", "HP", "Lenovo", "Acer"] },
        { name: "Printers/Scanners", items: ["All"] },
        { name: "Accessories", items: ["Mouse", "Keyboards", "Webcams", "Cables"] },
    ],
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
});

export default productSlice.reducer;
