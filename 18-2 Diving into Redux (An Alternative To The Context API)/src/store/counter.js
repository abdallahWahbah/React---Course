import {createSlice} from '@reduxjs/toolkit';


const defaultCounterState = {counter: 0, showCounter: true}

const counterSlice = createSlice({
    name: "counter", 
    initialState: defaultCounterState,
    reducers:
    {
        increment(lastState, action) 
        {
            lastState.counter++;
        },
        decrement(lastState)
        {
            lastState.counter--;
        },
        increase(lastState, action)
        {
            lastState.counter += action.payload;
        },
        toggleCounter(lastState)
        {
            lastState.showCounter = !lastState.showCounter;
        }
    }
});

export const counterActions = counterSlice.actions; // methods that we defined in the slice reducers ... increase, decrease, ecrement, toggleCounter
export default counterSlice;