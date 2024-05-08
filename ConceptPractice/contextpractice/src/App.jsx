import React from 'react'
import ContextProvider from './Components/ContextProvider'
import { useState } from 'react'
import { Context } from './Context'
import First from './Components/First'
import Second from './Components/Second'
function App() {
  const [count,setCount]=useState(0)
  return (
    <>
    <ContextProvider>
    <First />
    <Second />
    </ContextProvider>
    </>
  )
}

export default App