import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

// In React, we get only one parameter per component
const ExpenseItem = (props)=>
{

    // var options = { year: 'numeric', month: 'long', day: 'numeric' };
    // const expenseDate = new Intl.DateTimeFormat("en-us", options).format(new Date());
    
    return (
    <Card className="expense-item">
        <ExpenseDate date={props.date} />   
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>
    </Card>
    )
}
export default ExpenseItem;