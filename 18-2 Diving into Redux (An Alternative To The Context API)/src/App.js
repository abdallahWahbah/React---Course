import React from 'react';
import {useSelector} from 'react-redux';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';



function App() {

  const isAuth = useSelector(value => value.auth.isAuthenticated)


  return (
    <React.Fragment>
      <Header> </Header>
      {!isAuth && <Auth></Auth>}
      {isAuth && <UserProfile/>}
      <Counter />
    </React.Fragment>
  );
}

export default App;
