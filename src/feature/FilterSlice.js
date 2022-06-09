import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
};

export const filterSlice = createSlice({
    name: "initialState",
    initialState,
    reducers: {
        addToFilter : (state,action)=>{
            state.products = action.payload
        },
    },
});

export const { addToFilter} = filterSlice.actions;

export default filterSlice.reducer;