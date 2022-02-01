import {useState} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) =>
{
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();
    
    const AddUserHandler=(event)=>
    {
        event.preventDefault();
        if(enteredUsername.trim().length ===0 || enteredAge.trim().length === 0)
        {
            setError({
                title: "Invalid input", 
                message: "Please enter a valid name and age (non-empty values)"
            })
            return;
        }
        if(+enteredAge < 1)
        {
            setError({
                title: "Invalid age",
                message: "Please enter a valid age ( > 0)"
            })
            return;
        }
        // console.log(enteredUsername, enteredAge);
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername("");
        setEnteredAge("");
    }
    const usernameChangeHandler = (event)=>
    {
        setEnteredUsername(event.target.value);
    }
    const ageChangeHandler = (event)=>
    {
        setEnteredAge(event.target.value);
    }
    const handleError =() => setError(null);

    return (
        <div>
            {error && <ErrorModal title={error.title} message = {error.message} onCloseError = {handleError}/>}
            <Card className = {classes.input}>
                <form onSubmit={AddUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}></input>
                    {/* we put the value attribute because without it, the UI will not be updated when you reset the values.
                        the values will be resetted in the useState only but not in the UI */}
                    <label htmlFor="userage">Age (Years)</label>
                    <input id="userage" type="number" value={enteredAge} onChange={ageChangeHandler}></input>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>  
        </div>
    );
}
export default AddUser;