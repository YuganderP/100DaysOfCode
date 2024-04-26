import React from 'react'
import { useState,useContext } from 'react'
import UserContext from '../userContext'
function Secondcomponent() {
    const[userName,setUsername]=useState("")
    const[password,setPassword]=useState("")
    const {setCount}=useContext(UserContext)
    const onClick=(e)=>{
    e.preventDefalut()
    setCount([userName,password])
}
    return (
    <div>
        <h1>Login section</h1>
        <input value={userName} onChange={(e)=>{setUsername(e.target.value)}} type="text" name="" placeholder ="username"id="" />
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="text" name=""placeholder ="password"id="" />
        <button onClick={onclick}>Submit</button>
    </div>
  )
}

export default Secondcomponent