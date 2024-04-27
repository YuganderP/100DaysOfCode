import React from 'react'
import { useContext } from 'react'
import { UserContext } from './Context'
function Count() {
  const {count,setCount}=useContext(UserContext)
  
  return (
    <div>{count}</div>
  )
}

export default Count