import React from 'react'
import { useParams, Link, Outlet } from 'react-router-dom'
import { useState,useEffect,  } from 'react';
import axios from 'axios';

function User() {
    const {id} = useParams();
    const[user, setUser] = useState([])
    const[isLoading, setIsLoading] = useState(true)
    

    
    useEffect(()=>{
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=>setUser(res.data))
        .finally(()=>setIsLoading(false))
    }, [id])
   

  return (
    <div>
        <h2>User details</h2>
        {isLoading && <div>Loading...</div>}
        {!isLoading && <code>{JSON.stringify(user)}</code>}

        <Link to={`/user/${parseInt(id)+1}`}>
            Next User ({parseInt(id) + 1})
        </Link >
        
        <Outlet />
    </div>
  )
}

export default User