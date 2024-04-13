import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CounterComponent } from './Components/CounterComponent'
function App() {
  const [count, setCount] = useState({count:0,message:"initial"})
  function sample(){
    setCount(count+1);
  }
  return (
    <>
         <CounterComponent props={count} />
         <button onClick={()=>{setCount({count:count.count+1,message:"increased"})}}>+</button>
         <button onClick={()=>{setCount({count:count.count-1,message:"Decreased"})}}>-</button>
          </>
  )
}

export default App
