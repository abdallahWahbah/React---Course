import { Component } from 'react';
import { useState } from 'react';
import User from './User';

import classes from './Users.module.css';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

// in class, the state always has to be an object and it has to have the name "state"
// you can't use react hooks in class-based component
class Users extends Component
{
    constructor()
    {
      super();
      // when you update the state, it doesn't override the old state, just modifies what you update
      // so you don't have to wrtie all the state again
      this.state=
      {
        showUsers: true,
        test: "test"
      }
    }

    toggleUsersHandler()
    {
      // this.setState({showUsers: false})
      this.setState(prevState =>
      {
        return{ 
          // you have to return an object also
          // what we return here will be merged with the old state, so the second state "test" will not be lost
          showUsers: !prevState.showUsers
        }
      })
    }
    render()
    {
      const usersList = (
        <ul>
          {DUMMY_USERS.map((user) => (
            <User key={user.id} name={user.name} />
          ))}
        </ul>
      );
      return (
        <div className={classes.users}>
          <button onClick={this.toggleUsersHandler.bind(this)}>
            {this.state.showUsers ? 'Hide' : 'Show'} Users
          </button>
          {this.state.showUsers && usersList}
        </div>
      );
    }
}

// componentDidMount() equals to useEffect(()=> {}, [])
// componentDidUpdate() equals to useEffect(()=>{}, [someValue])
// componentWillUnmount() equals to the cleanup function unside useEffect useEffect(()=>{return()=>{}}, [])


// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
