import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: null,
}

export const RegisterSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        checkstatus : (state,action) => {
            state.value = action.payload
        },
    },
})

export const { checkstatus } = RegisterSlice.actions

export default RegisterSlice.reducer
