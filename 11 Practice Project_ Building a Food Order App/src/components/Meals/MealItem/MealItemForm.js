import {useRef, useState} from 'react'
import Input from "../../UI/Input";
import classes from './MealItemForm.module.css';

const MealItemForm =(props)=>
{
    const amountInputRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(true);

    const submitHandler=(event)=>
    {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        
        if(
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 20)
        {
            setAmountIsValid(false);
            return;   
        }
        props.onAddAmount(enteredAmountNumber);
    }

    return(
        <form className={classes.form} onSubmit ={submitHandler}> 
            <Input
                ref={amountInputRef}            
                // {/* make sure to forwardRef in the Input component cause the Input is a customed component (the lesson you ignored the last section) */}
                label="Amount"
                input={
                    {
                        id: "amount",
                        type: "number",
                        min: "1",
                        max: "20",
                        defaultValue: "1",
                        step: "1"
                    }
                }
            ></Input>
            <button>+ Add</button>
            {!amountIsValid && <p>Enter a valid number(1-20)</p>}
        </form>
    )
}
export default MealItemForm;