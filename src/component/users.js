import React from 'react'
import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
    const[users, setUsers] = useState([])
    const[isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        axios("https://jsonplaceholder.typicode.com/users")
        .then((res)=>setUsers(res.data))
        .finally(()=>setIsLoading(false))
    }, [])
  return (
   
    <div>
    <h2>Users</h2>
    {isLoading && <div>Loading...</div>}
    <ul>        
        {users.map((user)=>(
            <li key={user.id}>
               <Link to={user.id}>{user.name}</Link>
            </li>
        ))}
            
    </ul>
    <Outlet />
    
    </div>
  )
}

export default Users;