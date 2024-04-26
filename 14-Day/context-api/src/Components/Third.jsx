import React from 'react'
import { useContext } from 'react'
import { countContext } from '../countContext'
function Third() {
  return (
    <div style={{border:"1px solid green",margin:"10px"}}>
        
        <h2>Inside Third component</h2>
        <countContext.Consumer>
            {({state,setState})=>{
                <div>
                <h1>{state}</h1>
                <h2>aljalsdfjl;</h2>
                </div>
            }}
        </countContext.Consumer>
    </div>
  )
}

export default Third