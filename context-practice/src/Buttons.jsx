import React from 'react'
import { UserContext } from './Context'
import {useContext} from 'react'
function Buttons() {
  const {count,setCount} =useContext(UserContext)
  console.log(count)
  return (
<>
    <button onClick={()=>{setCount(count+1)}}>+</button>
    <button onClick={()=>{setCount(count-1)}}>-</button>
</>
  )
}

export default Buttons