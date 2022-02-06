import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './components/store/auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const storedLoggedInInformation = localStorage.getItem("isLoggenIn");

  useEffect(()=> // we use it in cases: local storage, http request, timers or intervals
  {
    if(storedLoggedInInformation === "1")
    {
      setIsLoggedIn(true);
    }
  }, []) // only called when the array of dependencies is changed and after all the component is evaluated , so it will be called the first time only (one time)
  // يعني هينفذ كل الاكواد في ال فاكشن اب وبعد كده يشوف الدالة دي

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
    localStorage.setItem("isLoggenIn", "1");
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggenIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value= {{isLoggedIn: isLoggedIn, onLogout: logoutHandler}}>
      {/* now all children and children's children (MainHeader, main, Login, Home) have access to AuthContext */}
      <MainHeader />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
