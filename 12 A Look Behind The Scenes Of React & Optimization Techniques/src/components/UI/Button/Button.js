import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {// for every state (or props or ontext) change, the entire component (and its children) in which the state changed is re-evaluated
    
  // this will be re-evaluated when the props changes (or if the parent is re-evaluated)
  // and if the child component have a child component, this child component also will be re-evaluated
  console.log('Button')
  
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
// memo will not work here cause it will compare an object to old object .. which will be false ... meaning that there is a change
// ex: "1" === "1" >> true
//     12 === 12 >> true
//     [1,2] === [1,2] >>> false cause it is not a preimitive variable ( such as the functions )
// {} === {} >> false
// use useCallback instead