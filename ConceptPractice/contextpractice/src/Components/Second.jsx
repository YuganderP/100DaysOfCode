import React from 'react'
import { useContext } from 'react'
import { Context } from '../Context'
function Second() {
  const {count,setCount} = useContext(Context)
 
    return (
    <>
<button onClick={()=>{setCount(count+1)}}>Increment</button>
<button onClick={()=>{setCount(count-1)}}>Decrement</button>
    </>
    )
}

export default Second