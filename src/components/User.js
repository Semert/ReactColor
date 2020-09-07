import React, {useContext} from 'react'
import UserList from './UserList';
import {UserContext} from "../contexts/UserContext"


const User = ({users,onColorChange}) =>
{
    return(
        < >
            {users.map(user => 
                (<UserList  key={user.id} user={user} onColorChange={onColorChange}/>))}
        </>
        
    )
}

export default User;