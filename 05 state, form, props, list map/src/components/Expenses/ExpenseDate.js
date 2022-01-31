import './ExpenseDate.css';

const ExpenseDate = (props) =>
{
    // var options = { year: 'numeric', month: 'long', day: 'numeric' };
    // const expenseDate = new Intl.DateTimeFormat("en-us", options).format(new Date());
    // console.log(expenseDate);

    const month = props.date.toLocaleString("en-us", {month: "long"});
    // const month = new Intl.DateTimeFormat("en-us", {month: "long"}).format(props.date)
    const day = props.date.toLocaleString("en-us", {day: "2-digit"});
    const year = props.date.getFullYear();

    return(
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    )
}
export default ExpenseDate;