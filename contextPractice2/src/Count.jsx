import React from 'react'
import { CountContext } from './CreateContext'
import { useContext } from 'react'
function Count() {
  const {count,setCount} = useContext(CountContext)
    return (
    <div>{count}</div>
  )
}

export default Count