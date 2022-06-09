import commerce from "../lib/Ecommerce";
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    products: [], status: "idle", error: null
}

export const fetchProducts = createAsyncThunk("products/fetchProducts", async (filter) => {
    let data = await commerce.products
        .list({
            category_slug: [filter.toLowerCase()], limit: 100
        })
        .then((res) => res.data);
    return data;
})

export const productsSlice = createSlice({
    name: "products", initialState, reducers: {}, extraReducers(builder) {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.status = "loading";
        })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "success";
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = "failed";
                state.products = action.error.message;
            })
    }
})

export default productsSlice.reducer;