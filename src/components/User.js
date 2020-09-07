import React from 'react'
import UserList from './UserList';

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