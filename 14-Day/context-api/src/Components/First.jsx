import React from 'react'
import Second from './Second'
function First() {
  return (
    <div style={{border:"1px solid black"}}>
    <h1>Inside First Comp</h1>
        <Second />
    </div>
  )
}

export default First