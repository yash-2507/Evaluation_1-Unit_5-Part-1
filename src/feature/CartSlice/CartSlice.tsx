import { createSlice } from "@reduxjs/toolkit";
import data from "../../db.json";

interface sliceType {
    name: string;
    initialState: {};
    reducer: {};
}

const initialState = {
    cartItems: 0,
    data: data.products,
};

const cartSlice: sliceType = createSlice({
    name: "cart",
    initialState,
    reducers: {},
});

export default cartSlice.reducer;
