import { createSlice } from '@reduxjs/toolkit'

var initialStateValue =  [{id:"100", name: "Kaushal", email: "k7kulkarni@gmail.com", username:"k7kaushal", address:{ street:"Sinhagad road", city:"Pune", zipcode:"411051", phone: "7030919999", website:"https://github.com/k7kaushal"}}];

export const userSlice = createSlice({
    name: "user",
    initialState: {value: initialStateValue},
    reducers: {
        adduser: (state, action) => {
            state.value = action.payload
        },
    },
});

export const {adduser} = userSlice.actions;

export default userSlice.reducer;