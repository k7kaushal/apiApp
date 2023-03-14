import { createSlice } from '@reduxjs/toolkit'

const initialStateValue =  "";

export const themeSlice = createSlice({
    name: "theme",
    initialState: {value: initialStateValue},
    reducers: {
        changecolor : (state, action) => {
            state.value = action.payload
        },
    },
});

export const {changecolor} = themeSlice.actions;

export default themeSlice.reducer;