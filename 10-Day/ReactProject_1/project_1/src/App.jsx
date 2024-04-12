import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [state,setState]= useState(0)

  return (
    <>
     <div>
      <p>Index.html</p>
      <button onClick={()=>{setState(state+1)}}>{state} value</button>
     </div>
     
      
    </>
  )
}

export default App
