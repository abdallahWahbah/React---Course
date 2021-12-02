import useInput2 from '../hooks/use-input-2';

const BasicForm = (props) => {

  const {
    reset: resetFirstName,
    inputBlurHandler: firstNameBlurHandler,
    valueChangedHandler: firstNameChangeHandler,
    hasError: firstNameHasError,
    value: firstName,
    isValid: firstNameIsValid
  } = useInput2(value => value.trim() !== "");

  const {
    reset: resetSecondName,
    inputBlurHandler: secondNameBlurHandler,
    valueChangedHandler: secondNameChangeHandler,
    hasError: secondNameHasError,
    value: secondName,
    isValid: secondNameIsValid
  } = useInput2(value => value.trim() !== "");

  const {
    reset: resetEmail,
    inputBlurHandler: emailBlurHandler,
    valueChangedHandler: emailChangeHandler,
    hasError: emailHasError,
    value: email,
    isValid: emailIsValid
  } = useInput2(value => value.includes("@"));

  let formIsValid = false;
  if(firstNameIsValid && secondNameIsValid && emailIsValid) formIsValid = true;

  const submitHandler=(event)=>
  {
    event.preventDefault();

    if(!formIsValid) return;
    resetFirstName();
    resetSecondName();
    resetEmail();
  }

  const firstNameClasses = firstNameHasError ? "form-control invalid" : "form-control";
  const secondNameClasses = secondNameHasError ? "form-control invalid" : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
      
        <div className={firstNameClasses}>
          <label htmlFor='firstName'>First Name</label>
          <input 
                type='text' 
                id='firstName' 
                value={firstName} 
                onChange={firstNameChangeHandler} 
                onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && <p className="error-text">First name can't be empty</p>}
        </div>

        <div className={secondNameClasses}>
          <label htmlFor='secondName'>Last Name</label>
          <input 
                type='text' 
                id='secondName' 
                value={secondName} 
                onChange={secondNameChangeHandler}
                onBlur={secondNameBlurHandler}
          />
          {secondNameHasError && <p className="error-text">Second name can't be empty</p>}
        </div>
      </div>

      <div className={emailClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input 
                type='text' 
                id='email' 
                value={email} 
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
        />
        {emailHasError && <p className="error-text">EMail must include "@"</p>}
      </div>

      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
