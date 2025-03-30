import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const data ='https://api.github.com/users'

const FetchData = () => {
    const [users,setusers]=useState([])
    useEffect(()=>{
        const FetchData = async ()=>{
            try{
                const res = await fetch(data);
                const users = await res.json()
                setusers(users);

            }catch (err){
                console.log(err);
            }
        }
        FetchData();
    },[]);
  return (
    <div>
        <h1>github users</h1>
        <ul className='users'>
        {users.map((usr)=>{
            return <li key={usr.id}>
                <img src={usr.avatar_url} alt="" />
                <h3>{usr.login}</h3>
                <a href={usr.html_url}>visit</a>
            </li>
        })}
        </ul>
    </div>
  )
}

export default FetchData