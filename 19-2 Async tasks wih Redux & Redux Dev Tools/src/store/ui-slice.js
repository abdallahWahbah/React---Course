// this file is created to hide or preview the cart when clicking on the cart button
import {createSlice} from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name: "ui",
    initialState: {cartIsVisible: false, notification: null}, // notification is used in APP component
    reducers:
    {
        toggle(state, action)
        {
            state.cartIsVisible = !state.cartIsVisible
        },
        showNotification(state, action)
        {
            state.notification = 
            {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message,
            }
        }
    }
});

export const uiActions = uiSlice.actions;
export default uiSlice;