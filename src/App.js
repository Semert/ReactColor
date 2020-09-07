import React, { useState } from 'react';
import './App.css';
import User from "./components/User";


 
const data = [
  { id: 1,  name: "Test",   email: "Test@site.com",  age: 25,  color: "lightcyan" },
  { id: 2,  name: "Test1",  email: "Test1@site.com", age: 30,  color: "honeydew"  },
  { id: 3,  name: "Test2",     email: "Test2@site.com",    age: 35,  color: "mistyrose" }
];

function App() {
  const [users, setUsers] = useState(data)

  const onColorChange = (id, color) =>
  {
    setUsers(users.map(user => user.id === id ? {...user, color:color} : user))
  }

  return (

    <div className="App">
    <User users={users} onColorChange={onColorChange}/>

    </div>
  );
}

export default App;
