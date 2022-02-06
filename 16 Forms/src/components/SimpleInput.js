import {useState} from 'react';
import useInput from '../hooks/use-input';

const SimpleInput = (props) => {

  // how to choose between useRef() and useState() when dealing with input
  // useRef() when you want to use the value when you submi tthe form ( if you want the value once )
  // useState() from instant validation (with every key stroke)
  // another reason to use useState() instead of useRef() if you want to reset the entered input
  // how to reset the input >>>> to put the value attribute in the input html element
  
  const {
    value: enteredName,
    hasError: nameInputHasError,
    isValid: enteredNameIsValid,
    valueChangedHandler: nameChangeHandler,
    reset: resetNameInput,
    inputBlurHandler: nameBlurHandler
  } =useInput(value => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    isValid: enteredEmailIsValid,
    valueChangedHandler: emailChangeHandler,
    reset: resetEmailInput,
    inputBlurHandler: emailBlurHandler
  } =useInput(value => value.includes("@"));

  let formIsValid = false;
  if(enteredNameIsValid && enteredEmailIsValid) formIsValid = true;


  const formSubmissionHandler=(event)=>
  {
    event.preventDefault();

    if(!formIsValid)
    {
      return;
    }
    resetNameInput();
    resetEmailInput();
  }
  const nameInputClasses = nameInputHasError ? "form-control invalid" : "form-control";
  const emailInputClasses = emailInputHasError ? "form-control invalid" : "form-control"; 

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name' 
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          // onBlur is called when the input loses focus
          value={enteredName}
        />
        {nameInputHasError && <p className="error-text">Name must not be valid</p>}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor='name'>Your Email</label>
        <input 
          type='text' 
          id='name' 
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          // onBlur is called when the input loses focus
          value={enteredEmail}
        />
        {emailInputHasError && <p className="error-text">Email must include "@"</p>}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
