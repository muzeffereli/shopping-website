import commerce from "../lib/Ecommerce";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    basket: [],
    status: "idle",
    error: null
};

export const fetchBasket = createAsyncThunk("/basket", async () => {
    return await commerce.cart
        .retrieve()
        .then((cart) => cart.line_items);
});

export const deleteItem = createAsyncThunk("basket/delete",
    async (id) => {
        return await commerce.cart.remove(id).then((res) => res.cart.line_items);
    });

export const addItem = createAsyncThunk("basket/add",
    async (obj) => {
        let data = await commerce.cart.add(obj.id, obj.quantity, obj.detail);
        return data.cart;
    });

export const updateBasket = createAsyncThunk(
    "basket/updateBasket",
    async (obj) => {
        let data = await commerce.cart.update(obj.id, {quantity: obj.quantity});
        return data.cart;
    }
);

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchBasket.fulfilled, (state, action) => {
                state.status = "success";
                state.basket = action.payload;
            })
            .addCase(addItem.fulfilled, (state, action) => {
                state.basket = action.payload.line_items;
            })
            .addCase(deleteItem.fulfilled, (state, action) => {
                state.basket = action.payload.line_items;
                state.status = "idle";
            })
            .addCase(updateBasket.fulfilled, (state, action) => {
                state.status = "idle";
            });
    }
});

export default basketSlice.reducer;