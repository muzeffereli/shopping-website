import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    value: 1,
};

export const CounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        decrement: (state) => {
            state.value -= 1;
        },
        increment: (state) => {
            state.value += 1;
        },
        reset: (state) => {
            state.value = 1;
        }
    },
});

export const {decrement, increment, reset} = CounterSlice.actions;

export default CounterSlice.reducer;
