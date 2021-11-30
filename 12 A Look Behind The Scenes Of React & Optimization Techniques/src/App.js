import React, {useState, useCallback} from 'react';
// useCallback allows us to store a function across component execution (prevents re-evaluation of a function when there is no change)

import './App.css';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/UI/Demo/DemoOutput';

function App() {

  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('App Running');
  // how to use useCallback >> just wrap up the whole function inside it as a 1sr param, and the 2nd paran is array of dependencies
  const toggleParagraphHandler= useCallback(()=>  // not working properly (video 6)
  {
    if(allowToggle)
    {
      setShowParagraph(prevState=> // for every state (or props or ontext) change, the entire component (and its children) in which the state changed is re-evaluated
      {
        return !prevState;
      })
    }
  }, [allowToggle])

  const allowTogglehHandler = ()=>
  {
    setAllowToggle(true)
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* {showParagraph && <p>Hello from the other side</p>} */}
      <DemoOutput show={showParagraph}/>
      <Button onClick={allowTogglehHandler}>Allow Toggle</Button>
      <Button onClick={toggleParagraphHandler}>Toggle paragraph!</Button>
    </div>
  );
}

export default App;
