import {useState} from 'react';

const useInput = (validateValue)=>
{
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangedHandler=(event)=>
    {
        setEnteredValue(event.target.value);
        // the state is not updated immediately, so if you used enteredName, you will use the old one
        // console.log(enteredName, event.target.value)
    }

    const inputBlurHandler = (event)=>
    {
        setIsTouched(true);
    }

    const reset=() =>
    {
        setEnteredValue("");
        setIsTouched(false);
    }

    return{
        value: enteredValue,
        hasError,
        isValid: valueIsValid,
        valueChangedHandler,
        inputBlurHandler,
        reset
    }
}
export default useInput;