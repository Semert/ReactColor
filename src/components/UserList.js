import React,{useContext} from 'react'
import {UserContext} from "../contexts/UserContext"


const UserList = ({user,onColorChange}) =>
{
    // value degerini oncolorchange yaparak value{onColorChange}
    // aşağıdaki method'a sadece context veya verdiğimiz ismi yazarak bu işlemi gerçekleştirebiliriz.
    // Birden fazla değer için value = {{ users:users, changeColor:changeColor }} es6 = {{ users, changeColorr }}
    // Kullanmak için yapmamız gereken context.changeColor ya da context.user
    const context = useContext(UserContext)
    console.log(context)
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