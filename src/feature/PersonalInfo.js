import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
};

export const personalinfoSlice = createSlice({
    name: "personalInfo",
    initialState,
    reducers: {
        addData : (state, action)=>{
            state.value = action.payload
        }
    },
});

export const { addData} = personalinfoSlice.actions;

export default personalinfoSlice.reducer;