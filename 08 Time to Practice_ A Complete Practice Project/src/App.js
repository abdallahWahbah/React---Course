import React, { useState } from 'react';

import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList';

function App() {

  const [usersList, setUsersList] = useState([]);

  const AddUserHandler = (username, userAge) =>
  {
    console.log(username, userAge, "APP")
    setUsersList(prevList =>
    {  
      return [...prevList, {name: username, age: userAge, id: Math.random().toString()}];
    });
    console.log(usersList);
  }

  return (
    <div>
      <AddUser onAddUser = {AddUserHandler}></AddUser>
      <UsersList users={usersList}></UsersList>
    </div>
  );
}

export default App;
