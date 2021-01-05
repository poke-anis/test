import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import UserList from './UserList'
function App() {
  const [ listOfUser,setListOfUser] = useState([])
  useEffect(()=> {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => setListOfUser(res.data))
  },[] )
  console.log(listOfUser)

  return (
    <div className="Ap">
      <UserList  listOfUser={listOfUser}/>
    </div>
  );
}

export default App;
