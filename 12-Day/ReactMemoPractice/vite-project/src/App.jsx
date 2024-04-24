import React from 'react'
import SampleComponent from './SampleComponent'
import { useState,memo } from 'react'
const Hello = memo(({data})=>{
  return (
    <h1>{data}</h1>
  )
})
function App() {
  const [state,setState]= useState(0)
  return (
    <>
    <button onClick={()=>{setState(state+1)}} > Change</button>
    
    
    <Hello  data={"dsadsfs"}/>
    
    
    </>
  )
}



export default App