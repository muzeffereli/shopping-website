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

// Action creators are generated for each case reducer function
export const { addData} = personalinfoSlice.actions;

export default personalinfoSlice.reducer;