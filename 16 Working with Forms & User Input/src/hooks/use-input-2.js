// I am refactoring the code with useReducer (last lecture) in this file only
// the 'use-input-1' file is until lecture 14













import React, {useState, useReducer} from 'react';

const initialReducerState=
{
    enteredValue: "",
    isTouched: false
}
const reducerInput = (lastState, action)=>
{
    if(action.type === "INPUT") return {enteredValue: action.enteredValue, isTouched: lastState.isTouched}
    if(action.type === "BLUR") return {enteredValue: lastState.enteredValue, isTouched: action.isTouched}
    if(action.type === "RESET") return initialReducerState
    return initialReducerState;
}

const useInput2 =(validateFunction) =>
{
    // const [enteredValue, setEnteredValue] = useState('');
    // const [isTouched, setIsTouched] = useState(false);

    const [inputState, dispatch] = useReducer(reducerInput, initialReducerState);

    const valueIsValid = (validateFunction(inputState.enteredValue));
    const hasError = !valueIsValid && inputState.isTouched;

    const valueChangedHandler = (event)=>
    {
        dispatch({type: "INPUT", enteredValue: event.target.value})
        // setEnteredValue(event.target.value);
    }

    const inputBlurHandler = ()=>
    {
        dispatch({type: "BLUR", isTouched: true})
        // setIsTouched(true);
    }

    const reset = ()=>
    {
        dispatch({type: "RESET", isTouched: false})
        // setEnteredValue("");
        // setIsTouched(false);
    }

    return {
        reset,
        inputBlurHandler,
        valueChangedHandler,
        hasError,
        value: inputState.enteredValue,
        isValid: valueIsValid,
    }
}
export default useInput2;