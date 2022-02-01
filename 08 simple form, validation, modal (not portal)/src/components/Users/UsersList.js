import classes from './UsersList.module.css';
import Card from '../UI/Card';

const UsersList =(props) =>
{
    if(props.users.length === 0) return <div style={{color:"white"}}>No users</div>
    return (
        <Card className = {classes.users}>
            <ul>
                {props.users.map(user =>
                (
                    <li key={user.id}> 
                        {user.name} ({user.age} Years old)
                    </li>
                ))}
            </ul>
        </Card>
    )
}
export default UsersList;