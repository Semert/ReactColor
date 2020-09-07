import React from 'react'

const UserList = ({user,onColorChange}) =>
{
    return(
        <div style = {{backgroundColor : user.color}}> 
        <h2>{user.name}</h2>
        <h2>{user.email}</h2>
        <h2>{user.age}</h2>
        <input type="text" value={user.color} onChange={(e) => onColorChange(user.id,e.target.value)}/>

        </div>

        
    )
}

export default UserList;