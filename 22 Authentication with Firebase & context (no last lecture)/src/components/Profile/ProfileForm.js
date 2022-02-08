import React, { useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import AuthContext from '../../store/auth-context';

import classes from './ProfileForm.module.css';

const ProfileForm = () => {

  const passwordRef = useRef();
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const submitHandler = (event) =>
  {
    event.preventDefault();

    const enteredPassword = passwordRef.current.value

    fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDmLQhGPGGdQ4YoayoMGY-tJjbMsuzWbc0",
    {
      method: "POST",
      body: JSON.stringify({
        idToken: authCtx.token,
        password: enteredPassword,
        returnSecureToken: false
      })
      ,
      headers:
      {
        "Content-Type" : "application/json"
      }
    }).then(res =>
    {
        // Assumption: always request is successfull
        history.replace("/") // replace: the user can't go back to the previous page
    })
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={passwordRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
