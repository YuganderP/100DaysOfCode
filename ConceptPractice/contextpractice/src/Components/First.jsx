import React from 'react'
import { useContext } from 'react'
import { Context } from '../Context'
function First() {
  const props = useContext(Context)
  console.log(props)  
  return (
    <div>{props.count}</div>
  )
}

export default First