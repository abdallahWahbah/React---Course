import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

const emailReducer = (lastState, action)=>
{
  if(action.type === "USER_INPUT")
  { 
    return {value: action.val, isValid: action.val.includes('@')}
  }
  if(action.type === "INPUT_BLUR")
  { 
    return {value: lastState.value, isValid: lastState.value.includes('@')}
  }
  return {value: '', isValid: false};
}
const passwordReducer = (lastState, action)=>
{
  if(action.type === "USER_INPUT")
  { 
    return {value: action.val, isValid: action.val.trim().length > 6}
  }
  if(action.type === "INPUT_BLUR")
  { 
    return {value: lastState.value, isValid: lastState.value.trim().length > 6}
  }
  return {value: '', isValid: false};
}


const Login = (props) => {

  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid: undefined});
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value:'', isValid: undefined});
  // we use reducer when we have a state that depends on another state (complex states)


  const {isValid: emailIsValid} = emailState;
  const {isValid: passwordIsValid} =passwordState;

  useEffect(()=> // is called after every component render cycle يعني بيتنفذ اخر حاجة في الصفحة دي
  { 
    // the idea here is to set validity only if the user stops writing after .5 seconds
    // if you typed too quickly (less than .5 seconds between each key stroke), the setTimeout func will not be called(called only once (at the last key stroke))
    const identifier = setTimeout(()=>
    {
      console.log('CHECKING VALIDITY');
      setFormIsValid(
        emailIsValid && passwordIsValid
      );
    }, 500);
    // cleanup function
    return () => 
    {
      console.log('CLEANUP');
      clearTimeout(identifier);
    };
    // whenever the "useEffect" func runs, before it runs, except for the first time it runs
    // the cleanup func will run (the return func) (cleanup func is not called in the first time (only before what is after the first time))
    // it is not run before the first useEffect execution
  }, [emailIsValid, passwordIsValid]) 


  const emailChangeHandler = (event) => {
    dispatchEmail({type: "USER_INPUT", val:event.target.value})
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: "USER_INPUT", val:event.target.value})
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: "INPUT_BLUR"});
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: "INPUT_BLUR"})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input 
        id="email" 
        label="E-mail" 
        type="email" 
        isValid={emailIsValid} 
        value={emailState.value} 
        onChange={emailChangeHandler}
        onBlur={validateEmailHandler}
        ></Input>
        <Input 
        id="password" 
        label="Password" 
        type="password" 
        isValid={passwordIsValid} 
        value={passwordState.value} 
        onChange={passwordChangeHandler}
        onBlur={validatePasswordHandler}
        ></Input>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
