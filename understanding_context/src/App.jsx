import React from 'react'
import {useState} from 'react'
import { CountContext } from './CountContext';
import { useContext } from 'react';
function App() {
  const [count,setCount]=useState(0);
  return (
    <div>
      <CountContext.Provider  value={{count,setCount}}>
      <Count  />
      </CountContext.Provider>
    </div>
  )
}

function Count(){
  const count = useContext(CountContext)
  
  return(
      <>
      {count.count}
      <br />
      <Buttons />
      </>
  
    )
}

function Buttons(){
  const {count,setCount}= useContext(CountContext)
  return(
    <>
    <button onClick={()=>{setCount(count+1)}}>Increment</button>
    <button onClick={()=>{setCount(count-1)}}>Decrement</button>
    
    </>
  )
}


export default App