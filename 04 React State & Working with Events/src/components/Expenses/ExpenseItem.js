import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import {useState} from 'react';

// In React, we get only one parameter per component
const ExpenseItem = (props)=>
{
    const[title, setTitle] = useState(props.title);
    // useState returns 2 things in an array: the value and a function to udpate the value. So we are using destructuring

    const clickHandler = () =>
    {
        setTitle("Updated");
        // by calling the function in the state, we update the value and more important:
        // we call the function "ExpenseItem"
        // again cause it is not called more than one time (initializing) by itself
    }
    
    return (
    <Card className="expense-item">
        <ExpenseDate date={props.date} />   
        <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Cahnge title</button>
    </Card>
    )
}
export default ExpenseItem;