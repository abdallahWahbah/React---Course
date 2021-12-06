// this file is created to hide or preview the cart when clicking on the cart button
import {createSlice} from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name: "ui",
    initialState: {cartIsVisible: false},
    reducers:
    {
        toggle(state, action)
        {
            state.cartIsVisible = !state.cartIsVisible
        }
    }
});

export const uiActions = uiSlice.actions;
export default uiSlice;